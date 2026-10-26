// Fails when pnpm-lock.yaml holds a package version published less than
// minimumReleaseAge ago, unless pnpm-workspace.yaml lists it under
// minimumReleaseAgeExclude. pnpm applies minimumReleaseAge only while it
// resolves versions; `pnpm install --frozen-lockfile` reads the lockfile as
// is and never checks it, so CI needs this separate check.
import { readFileSync } from "node:fs";

const workspace = readFileSync("pnpm-workspace.yaml", "utf8");
const lockfile = readFileSync("pnpm-lock.yaml", "utf8");

const minutes = Number(workspace.match(/^minimumReleaseAge:\s*(\d+)/m)?.[1]);
if (!Number.isFinite(minutes) || minutes <= 0) {
  console.error("minimumReleaseAge is missing from pnpm-workspace.yaml");
  process.exit(1);
}

const excluded = new Set(
  (workspace.match(/^minimumReleaseAgeExclude:\n((?:[ \t]+.*\n?)*)/m)?.[1] ?? "")
    .split("\n")
    .map((line) => line.match(/^\s*-\s*["']?([^"'\s#]+)["']?/)?.[1])
    .filter(Boolean)
);

// Keys in the `packages:` section look like `name@1.2.3:` or `'@scope/name@1.2.3':`.
const packagesSection = lockfile.match(/^packages:\n([\s\S]*?)(?=^\S)/m)?.[1] ?? "";
const entries = [...packagesSection.matchAll(/^ {2}'?(@?[^@'\s]+)@([^:'\s]+)'?:/gm)].map(
  (m) => ({ name: m[1], version: m[2] })
);
if (entries.length === 0) {
  console.error("No packages found in pnpm-lock.yaml");
  process.exit(1);
}

const cutoff = Date.now() - minutes * 60 * 1000;
const byName = Map.groupBy(entries, (e) => e.name);
const young = [];
const failed = [];

async function check([name, versions]) {
  const url = `https://registry.npmjs.org/${name.replaceAll("/", "%2f")}`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(30_000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { time } = await res.json();
    for (const { version } of versions) {
      const published = Date.parse(time?.[version]);
      if (Number.isNaN(published)) {
        failed.push(`${name}@${version}: no publish time in registry`);
      } else if (published > cutoff && !excluded.has(`${name}@${version}`)) {
        young.push(`${name}@${version} (published ${time[version]})`);
      }
    }
  } catch (err) {
    failed.push(`${name}: ${err.message}`);
  }
}

const queue = [...byName];
await Promise.all(
  Array.from({ length: 16 }, async () => {
    for (let item = queue.pop(); item; item = queue.pop()) await check(item);
  })
);

if (young.length || failed.length) {
  if (young.length) {
    console.error(
      `Versions younger than ${minutes / 1440} days and not excluded:\n  ${young.sort().join("\n  ")}`
    );
  }
  if (failed.length) {
    console.error(`Could not verify:\n  ${failed.sort().join("\n  ")}`);
  }
  process.exit(1);
}
console.log(
  `OK: ${entries.length} locked versions, all older than ${minutes / 1440} days or excluded.`
);

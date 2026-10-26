import { NextResponse } from "next/server";

const MAX_BODY_BYTES = 1024;
const MAX_EMAIL_LENGTH = 254;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Per-IP limit. The store lives in one server instance's memory, so on a
// serverless host it is a best-effort brake, not a global ceiling.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_KEYS = 5000;
const hits = new Map<string, { count: number; resetAt: number }>();

// Netlify sets the first header itself; a client cannot choose its value.
// Without either header the caller is unidentified. Returning null makes the
// route skip the limit, because one shared bucket would let a single client
// lock every unidentified visitor out.
function clientKey(request: Request): string | null {
  return (
    request.headers.get("x-nf-client-connection-ip") ??
    request.headers.get("x-real-ip") ??
    null
  );
}

// Returns the seconds to wait when the caller is over the limit, else 0.
function checkRateLimit(key: string, now: number): number {
  const entry = hits.get(key);
  if (!entry || entry.resetAt <= now) {
    if (hits.size >= RATE_LIMIT_MAX_KEYS) {
      for (const [k, v] of hits) if (v.resetAt <= now) hits.delete(k);
      // Still full of live entries: drop the oldest so the map stays bounded.
      if (hits.size >= RATE_LIMIT_MAX_KEYS) {
        hits.delete(hits.keys().next().value as string);
      }
    }
    hits.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return 0;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX
    ? Math.ceil((entry.resetAt - now) / 1000)
    : 0;
}

// Reads the body without buffering more than the cap. Content-Length can be
// missing or wrong, so the stream is counted as it arrives.
async function readBody(request: Request): Promise<string | null> {
  if (!request.body) return "";
  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let received = 0;
  let text = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    received += value.byteLength;
    if (received > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }
    text += decoder.decode(value, { stream: true });
  }
  return text + decoder.decode();
}

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const key = clientKey(request);
  const retryAfter = key ? checkRateLimit(key, Date.now()) : 0;
  if (retryAfter > 0) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(retryAfter) } }
    );
  }

  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return NextResponse.json(
      { error: "Unsupported content type" },
      { status: 415 }
    );
  }

  const declaredLength = Number(request.headers.get("content-length"));
  if (declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Request too large" }, { status: 413 });
  }

  const raw = await readBody(request);
  if (raw === null) {
    return NextResponse.json({ error: "Request too large" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email =
    typeof body === "object" && body !== null && "email" in body
      ? body.email
      : undefined;

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const trimmedEmail = email.trim();
  if (
    trimmedEmail.length > MAX_EMAIL_LENGTH ||
    !EMAIL_REGEX.test(trimmedEmail)
  ) {
    return NextResponse.json(
      { error: "Please provide a valid email address" },
      { status: 400 }
    );
  }

  // Delivery is not built yet: the form is replaced in the next site version.
  // The address is deliberately not logged, so it never lands in a log sink.
  return NextResponse.json({
    success: true,
    message: "Email has been submitted successfully.",
  });
}

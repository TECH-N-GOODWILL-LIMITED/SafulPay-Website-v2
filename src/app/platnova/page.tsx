import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platnova Clone",
  description:
    "A quick layout clone of the Platnova landing page, built for design reference.",
  robots: { index: false, follow: false },
};

/* ---------------------------------- data ---------------------------------- */

const NAV_LINKS = ["Personal", "Business", "Company"];

const MARQUEE_ITEMS = ["CARDS", "OTC", "TRANSFERS", "GIFT CARDS", "VAULT"];

const SEND_POINTS = [
  "Hold and exchange 13+ currencies in one wallet",
  "Send to 50+ countries with delivery in minutes",
  "Transparent rates with no hidden charges",
];

const FEATURES = [
  {
    icon: "⚡",
    title: "Pay with ease",
    body: "Move money between wallets, banks and cards in a few taps.",
  },
  {
    icon: "🔔",
    title: "Real-time alerts",
    body: "Instant notifications for every transaction on your account.",
  },
  {
    icon: "📈",
    title: "Great exchange rates",
    body: "Convert currencies at rates that keep more money in your pocket.",
  },
  {
    icon: "🏦",
    title: "Flexible deposits",
    body: "Top up by card, bank transfer, mobile money or crypto.",
  },
  {
    icon: "🛡️",
    title: "Zero hidden fees",
    body: "What you see at checkout is exactly what you pay.",
  },
  {
    icon: "🪪",
    title: "Fast verification",
    body: "Get verified and start transacting in under five minutes.",
  },
];

const CONTROL_POINTS = [
  "Track spending with smart analytics",
  "Freeze and unfreeze cards instantly",
  "Set limits for every card and wallet",
  "Export statements whenever you need them",
  "Manage everything from a single dashboard",
];

const LIFESTYLE = [
  { icon: "✈️", title: "Flights", body: "Book trips and pay in any currency you hold." },
  { icon: "🏨", title: "Hotels", body: "Reserve stays worldwide straight from the app." },
  { icon: "🎟️", title: "Events", body: "Grab tickets to shows and experiences." },
  { icon: "🛍️", title: "Shopping", body: "Shop global stores with your virtual card." },
];

const FOOTER_COLS: { heading: string; links: string[] }[] = [
  {
    heading: "Personal",
    links: [
      "Money transfers",
      "Multi-currency accounts",
      "Virtual & physical cards",
      "Airtime & data top-ups",
      "Bill payments",
      "Gift cards",
      "Vault savings",
      "Tuition payments",
      "Lifestyle",
    ],
  },
  {
    heading: "Business",
    links: [
      "Business platform",
      "Global payouts",
      "Corporate cards",
      "Invoicing",
      "OTC desk",
      "API & integrations",
    ],
  },
  {
    heading: "Company",
    links: ["About us", "Our mission", "Blog", "Contact us"],
  },
  {
    heading: "Legal",
    links: ["Privacy policy", "Terms of service", "Cookie policy"],
  },
];

/* ------------------------------- tiny helpers ------------------------------ */

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-[#eef2ff] px-4 py-1.5 text-xs font-semibold tracking-widest text-[#1656f5] uppercase">
      {children}
    </span>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 text-[clamp(28px,4vw,52px)] leading-[1.05] font-extrabold tracking-tight text-[#0b0d17] uppercase">
      {children}
    </h2>
  );
}

function StoreBadges({ dark = false }: { dark?: boolean }) {
  const base =
    "flex items-center gap-3 rounded-xl px-5 py-3 text-left transition-transform hover:scale-105";
  const cls = dark
    ? `${base} bg-white text-[#0b0d17]`
    : `${base} bg-[#0b0d17] text-white`;
  return (
    <div className="flex flex-wrap gap-4">
      {[
        { store: "App Store", hint: "Download on the" },
        { store: "Google Play", hint: "Get it on" },
      ].map(({ store, hint }) => (
        <a key={store} href="#" className={cls}>
          <span className="text-2xl">{store === "App Store" ? "" : "▶"}</span>
          <span>
            <span className="block text-[10px] leading-tight uppercase opacity-70">
              {hint}
            </span>
            <span className="block text-sm font-bold leading-tight">{store}</span>
          </span>
        </a>
      ))}
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="mx-auto w-[260px] rounded-[2.5rem] border-8 border-[#0b0d17] bg-white p-4 shadow-2xl">
      <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-[#0b0d17]/20" />
      <p className="text-xs text-[#6b7280]">Total balance</p>
      <p className="mt-1 text-3xl font-extrabold text-[#0b0d17]">$4,586.20</p>
      <div className="mt-4 flex gap-2">
        {["Send", "Receive", "Swap"].map((a) => (
          <span
            key={a}
            className="flex-1 rounded-lg bg-[#1656f5]/10 py-2 text-center text-[11px] font-semibold text-[#1656f5]"
          >
            {a}
          </span>
        ))}
      </div>
      <div className="mt-5 space-y-3">
        {[
          ["🇺🇸", "USD wallet", "$2,140.00"],
          ["🇬🇧", "GBP wallet", "£860.45"],
          ["🇪🇺", "EUR wallet", "€1,204.10"],
        ].map(([flag, name, amount]) => (
          <div
            key={name}
            className="flex items-center justify-between rounded-xl bg-[#f4f6fb] px-3 py-2.5"
          >
            <span className="flex items-center gap-2 text-xs font-medium text-[#0b0d17]">
              <span className="text-lg">{flag}</span> {name}
            </span>
            <span className="text-xs font-bold text-[#0b0d17]">{amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BankCard({ tone, label }: { tone: string; label: string }) {
  return (
    <div
      className={`h-44 w-72 shrink-0 rounded-2xl p-5 text-white shadow-xl ${tone}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold tracking-wide">platnova</span>
        <span className="text-[10px] uppercase opacity-80">{label}</span>
      </div>
      <div className="mt-10 text-lg font-semibold tracking-[0.25em]">
        •••• 4921
      </div>
      <div className="mt-4 flex items-center justify-between text-[10px] uppercase opacity-80">
        <span>Card holder</span>
        <span>09/29</span>
      </div>
    </div>
  );
}

/* ---------------------------------- page ---------------------------------- */

export default function PlatnovaClonePage() {
  return (
    <div className="min-h-screen bg-white text-left text-base leading-normal text-[#0b0d17]">
      <style>{`
        @keyframes pv-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>

      {/* nav */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-extrabold tracking-tight">
            plat<span className="text-[#1656f5]">nova</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-[#374151] md:flex">
            {NAV_LINKS.map((l) => (
              <a key={l} href="#" className="hover:text-[#1656f5]">
                {l}
              </a>
            ))}
          </div>
          <a
            href="#download"
            className="rounded-full bg-[#1656f5] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0f3fc0]"
          >
            Download app
          </a>
        </nav>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <h1 className="mx-auto max-w-4xl text-[clamp(40px,7vw,88px)] leading-[0.95] font-extrabold tracking-tight uppercase">
          Seamless money <span className="text-[#1656f5]">movement</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#4b5563]">
          Get the most out of your money. Open multi-currency wallets, send and
          receive across borders, and pay for the things you love — all from one
          app.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#download"
            className="rounded-full bg-[#1656f5] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1656f5]/30 transition-transform hover:scale-105"
          >
            Download App
          </a>
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="flex -space-x-3">
            {["AB", "KO", "MJ", "TS"].map((i, n) => (
              <span
                key={i}
                className={`flex size-10 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white ${
                  ["bg-[#1656f5]", "bg-[#7c3aed]", "bg-[#059669]", "bg-[#ea580c]"][n]
                }`}
              >
                {i}
              </span>
            ))}
          </div>
          <div className="text-left text-sm">
            <p className="font-bold">★★★★☆ 4.0/5 rating</p>
            <p className="text-[#6b7280]">Over 100k+ active users</p>
          </div>
        </div>
      </section>

      {/* marquee strip */}
      <section className="overflow-hidden border-y border-black/5 bg-[#0b0d17] py-5">
        <div
          className="flex w-max gap-12 whitespace-nowrap"
          style={{ animation: "pv-marquee 22s linear infinite" }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
            (item, i) => (
              <span
                key={i}
                className="text-2xl font-extrabold tracking-widest text-white/90"
              >
                {item} <span className="ml-10 text-[#1656f5]">✦</span>
              </span>
            )
          )}
        </div>
      </section>

      {/* send money */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <div>
          <SectionTag>Transfers</SectionTag>
          <Heading>Send money locally or abroad in minutes</Heading>
          <ul className="mt-8 space-y-4">
            {SEND_POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[#374151]">
                <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#1656f5] text-[10px] text-white">
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-8 inline-block font-semibold text-[#1656f5] hover:underline"
          >
            Send money →
          </a>
        </div>
        <PhoneMockup />
      </section>

      {/* features grid */}
      <section className="bg-[#f4f6fb] py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <SectionTag>Why Platnova</SectionTag>
          <Heading>Built for cross-border life</Heading>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white p-8 text-left shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-3xl">{f.icon}</span>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-[#6b7280]">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* bills */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="mx-auto grid w-full max-w-sm grid-cols-2 gap-4">
            {[
              ["📱", "Airtime"],
              ["🌐", "Data"],
              ["💡", "Electricity"],
              ["📺", "TV & Streaming"],
            ].map(([icon, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm"
              >
                <span className="text-3xl">{icon}</span>
                <p className="mt-2 text-sm font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <SectionTag>Bills</SectionTag>
          <Heading>Airtime, data and subscriptions sorted</Heading>
          <p className="mt-6 text-[#4b5563]">
            Top up your phone, renew your data plan and settle utility bills in
            seconds — without leaving the app.
          </p>
        </div>
      </section>

      {/* cards */}
      <section className="bg-[#0b0d17] py-24 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#8ab0ff] uppercase">
            Cards
          </span>
          <h2 className="mt-4 text-[clamp(28px,4vw,52px)] leading-[1.05] font-extrabold tracking-tight uppercase">
            A card that works everywhere
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/70">
            Spend in 13+ currencies online and in stores worldwide, with virtual
            cards you can create instantly.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <BankCard tone="bg-gradient-to-br from-[#1656f5] to-[#7c3aed] -rotate-3" label="Virtual" />
            <BankCard tone="bg-gradient-to-br from-[#111827] to-[#374151] rotate-2" label="Physical" />
          </div>
          <a
            href="#"
            className="mt-10 inline-block font-semibold text-[#8ab0ff] hover:underline"
          >
            Get your card →
          </a>
        </div>
      </section>

      {/* control */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <div>
          <SectionTag>Control</SectionTag>
          <Heading>You are in control</Heading>
          <ul className="mt-8 space-y-4">
            {CONTROL_POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[#374151]">
                <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#059669] text-[10px] text-white">
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-[#f4f6fb] p-8">
          <p className="text-sm font-semibold text-[#6b7280]">Spending this month</p>
          <p className="mt-1 text-3xl font-extrabold">$1,284.55</p>
          <div className="mt-6 flex h-40 items-end gap-3">
            {[35, 60, 45, 80, 55, 95, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-lg bg-[#1656f5]/80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-[#9ca3af]">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* multi-currency accounts */}
      <section className="bg-[#eef2ff] py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
          <div>
            <SectionTag>Global accounts</SectionTag>
            <Heading>Get USD, GBP and EUR accounts in your own name</Heading>
            <p className="mt-6 text-[#4b5563]">
              Receive salaries and payments like a local. Your account details
              are ready the moment you're verified.
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["🇺🇸", "USD account", "Routing & account number"],
              ["🇬🇧", "GBP account", "Sort code & account number"],
              ["🇪🇺", "EUR account", "IBAN & BIC"],
            ].map(([flag, name, detail]) => (
              <div
                key={name}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
              >
                <span className="text-3xl">{flag}</span>
                <div>
                  <p className="font-bold">{name}</p>
                  <p className="text-sm text-[#6b7280]">{detail}</p>
                </div>
                <span className="ml-auto rounded-full bg-[#059669]/10 px-3 py-1 text-xs font-semibold text-[#059669]">
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* gift cards */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <SectionTag>Gift cards</SectionTag>
        <Heading>Choose from a diverse range of gift cards</Heading>
        <p className="mx-auto mt-6 max-w-xl text-[#4b5563]">
          Buy and redeem gift cards from your favourite global brands at great
          rates.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["🎮", "Gaming", "from-[#7c3aed] to-[#a855f7]"],
            ["🎬", "Streaming", "from-[#dc2626] to-[#f97316]"],
            ["🛒", "Shopping", "from-[#1656f5] to-[#38bdf8]"],
            ["🎧", "Music", "from-[#059669] to-[#84cc16]"],
          ].map(([icon, label, tone]) => (
            <div
              key={label}
              className={`rounded-2xl bg-gradient-to-br p-8 text-white shadow-lg ${tone}`}
            >
              <span className="text-4xl">{icon}</span>
              <p className="mt-3 text-lg font-bold">{label}</p>
              <p className="text-xs opacity-80">Gift card</p>
            </div>
          ))}
        </div>
      </section>

      {/* vault / returns */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#1656f5] via-[#4338ca] to-[#7c3aed] px-8 py-20 text-center text-white">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
            Vault
          </span>
          <h2 className="mt-4 text-[clamp(28px,4vw,52px)] leading-[1.05] font-extrabold tracking-tight uppercase">
            Get returns on the money you save
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/80">
            Lock funds in your vault and watch them grow with competitive annual
            returns — withdraw whenever your plan matures.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-10">
            {[
              ["Up to 15%", "annual returns"],
              ["$0", "management fees"],
              ["24/7", "access to your plan"],
            ].map(([big, small]) => (
              <div key={small}>
                <p className="text-3xl font-extrabold">{big}</p>
                <p className="text-sm text-white/70">{small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* lifestyle */}
      <section className="bg-[#f4f6fb] py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <SectionTag>Lifestyle</SectionTag>
          <Heading>Get the lifestyle you deserve</Heading>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LIFESTYLE.map((l) => (
              <div key={l.title} className="rounded-2xl bg-white p-8 text-left shadow-sm">
                <span className="text-3xl">{l.icon}</span>
                <h3 className="mt-4 text-lg font-bold">{l.title}</h3>
                <p className="mt-2 text-sm text-[#6b7280]">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* tuition */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <div className="mx-auto flex size-64 items-center justify-center rounded-full bg-[#eef2ff] text-8xl">
          🎓
        </div>
        <div>
          <SectionTag>Education</SectionTag>
          <Heading>Pay tuition and accommodation bills abroad</Heading>
          <p className="mt-6 text-[#4b5563]">
            Settle school fees and student housing invoices directly to
            institutions in 50+ countries, with proof of payment you can share.
          </p>
          <a
            href="#"
            className="mt-8 inline-block font-semibold text-[#1656f5] hover:underline"
          >
            Pay tuition →
          </a>
        </div>
      </section>

      {/* download CTA */}
      <section id="download" className="bg-[#0b0d17] py-24 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mx-auto max-w-3xl text-[clamp(32px,5vw,64px)] leading-[1.02] font-extrabold tracking-tight">
            The only money app you would ever need
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/70">
            Join over 100k people who move, spend and grow their money with
            Platnova.
          </p>
          <div className="mt-10 flex justify-center">
            <StoreBadges dark />
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-black/5 bg-white pt-20 pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
            <div>
              <p className="text-xl font-extrabold tracking-tight">
                plat<span className="text-[#1656f5]">nova</span>
              </p>
              <p className="mt-4 max-w-xs text-sm text-[#6b7280]">
                Multi-currency wallets, global transfers, cards and savings — in
                one app.
              </p>
              <div className="mt-6 flex gap-3">
                {["𝕏", "in", "f", "◎", "▶", "M"].map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex size-9 items-center justify-center rounded-full bg-[#f4f6fb] text-sm font-bold text-[#374151] transition-colors hover:bg-[#1656f5] hover:text-white"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
            {FOOTER_COLS.map((col) => (
              <div key={col.heading}>
                <p className="text-sm font-bold tracking-wide uppercase">
                  {col.heading}
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-[#6b7280]">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="hover:text-[#1656f5]">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-14 border-t border-black/5 pt-8 text-xs leading-relaxed text-[#9ca3af]">
            <p>
              This page is a design-reference clone. Platnova-style disclaimer:
              the company shown here is a financial technology company, not a
              bank. Banking services would be provided by licensed partner
              institutions in each region of operation.
            </p>
            <p className="mt-4">© 2026 Platnova clone — for internal design reference only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

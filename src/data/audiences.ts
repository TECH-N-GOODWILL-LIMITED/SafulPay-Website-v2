// The four audience surfaces — see the Website Revamp guide, sections 2, 4 and 5.
//
// Every surface is the same six-block skeleton: promise, what you can do today,
// how it works, who it's for, trust, and one call to action. Repeating one
// structure across all four is what makes the site read as institutional rather
// than as a loose collection of pages.
//
// Live-vs-coming discipline (guide, section 4): only what is live today is
// published here. Anything the guide lists as an open question in section 8 is
// left out entirely and marked with a CONFIRM note, rather than guessed at.
// Blocks are optional in the types below precisely so a surface can ship
// without the parts nobody has answered yet.

export type AudienceId = "personal" | "business" | "agency" | "developers";

/** A single "what you can do today" card. `id` matches the nav dropdown child. */
export interface Capability {
  id: string;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
}

export interface AudienceCta {
  label: string;
  href: string;
  external?: boolean;
}

export interface AudienceSurface {
  id: AudienceId;
  path: string;
  navLabel: string;
  /** Short audience definition from guide section 2 — the "which door is mine" line. */
  definition: string;
  eyebrow: string;
  /** The one-line promise: the job this audience gets done, not the mission. */
  promise: string;
  /** Substring of `promise` the hero renders in the gradient treatment. */
  accentPhrase: string;
  lede: string;
  /** Short, already-confirmed claims shown as chips under the hero. */
  proof: string[];
  capabilities: Capability[];
  /** Omitted where the sign-up/onboarding path is still an open question. */
  steps?: HowItWorksStep[];
  /** Overrides the steps block's anchor when a nav child points straight at it. */
  stepsAnchor?: string;
  eligibility?: {
    title: string;
    description: string;
    points?: string[];
    /** Overrides the eligibility block's anchor, same reason as `stepsAnchor`. */
    anchor?: string;
  };
  trust: string[];
  cta: AudienceCta;
  secondaryCta?: AudienceCta;
  seo: {
    title: string;
    description: string;
  };
}

const BSL_LINE = "Licensed and regulated by the Bank of Sierra Leone";

export const personalSurface: AudienceSurface = {
  id: "personal",
  path: "/personal",
  navLabel: "Personal",
  definition:
    "Individuals using the app for their own money — sending, receiving, paying bills, cards, gift links, requesting money and QR payments.",
  eyebrow: "Personal",
  promise: "Your everyday money, in one app.",
  accentPhrase: "in one app",
  lede: "Send to any wallet or bank, pay your bills, shop online with a virtual card, and receive money from anywhere in the world. All from one app.",
  proof: ["Regulated by the Bank of Sierra Leone", "Two-factor authentication", "No hidden fees"],
  capabilities: [
    {
      id: "send-receive",
      title: "Send & receive money",
      description:
        "Send to any mobile wallet or bank account in Sierra Leone in seconds, and receive from Orange Money, AfriMoney, Qmoney, bank cards, Western Union, MoneyGram and RIA.",
    },
    {
      id: "pay-bills",
      title: "Pay bills",
      description:
        "Settle EDSA electricity, WAEC fees, DSTV subscriptions and Sea Coach payments directly from your wallet, with the receipt saved in your history.",
    },
    {
      id: "virtual-cards",
      title: "Virtual cards",
      description:
        "Create a card in seconds to shop online securely without exposing your main wallet. Fund it, set spending limits, and freeze or delete it any time.",
    },
    {
      id: "gift-cards",
      title: "Gift cards & links",
      description:
        "Send a personalised gift card in seconds. Pick a design, set the amount, add a message, and send it to anyone instantly.",
    },
    {
      id: "request-money",
      title: "Request money",
      description:
        "Choose a wallet, set an amount, and SafulPay generates a QR code and a shareable link. Send it to anyone to collect your funds.",
    },
    {
      id: "qr-payments",
      title: "QR payments",
      description:
        "Scan to pay at any SafulPay merchant. No card, no cash, no terminal needed.",
    },
    {
      id: "airtime",
      title: "Airtime & data",
      description:
        "Top up Africell, Orange and QCell for yourself or anyone else, on any network, at any time.",
    },
    {
      id: "cash-out",
      title: "Cash out via agent",
      description:
        "Withdraw cash from any SafulPay agent across the country using the balance already in your wallet.",
    },
  ],
  steps: [
    {
      title: "Download the app",
      description:
        "Find SafulPay on the App Store or Google Play and install it on your device.",
    },
    {
      title: "Set up & verify your account",
      description:
        "Sign up, verify your details, and complete your KYC to unlock higher transaction limits.",
    },
    {
      title: "Send & receive",
      description:
        "Fund your wallet and start moving money to any wallet, bank or bill in seconds.",
    },
  ],
  eligibility: {
    title: "Who it's for",
    description:
      "Anyone in Sierra Leone managing their own money — whether you are sending to family, paying your electricity, shopping online, or receiving money from abroad.",
  },
  trust: [
    BSL_LINE,
    "Advanced encryption on every transaction",
    "Two-factor authentication",
    "Round-the-clock fraud monitoring",
    "No hidden fees — every fee is shown before you confirm",
  ],
  cta: { label: "Download App", href: "/download" },
  seo: {
    title: "Personal | Your everyday money, in one app",
    description:
      "Send and receive money, pay EDSA and WAEC, buy airtime, create virtual cards, send gift links and pay by QR. SafulPay for personal use in Sierra Leone.",
  },
};

export const businessSurface: AudienceSurface = {
  id: "business",
  path: "/business",
  navLabel: "Business",
  definition:
    "Corporate organizations and registered companies that get paid for their goods or services and pay out to staff, suppliers and beneficiaries.",
  eyebrow: "Business",
  promise: "Get paid. Pay people. All in one place.",
  accentPhrase: "All in one place",
  lede: "Take payments in person, online and by link, then pay staff, suppliers and beneficiaries in a single batch — from one business account.",
  proof: ["Regulated by the Bank of Sierra Leone", "24-hour settlement", "Bulk payouts by CSV"],
  capabilities: [
    {
      id: "accept-payments",
      title: "Accept payments",
      description:
        "Take payment in-app, in person or online. Every confirmed transaction lands in your business wallet with a full record attached.",
    },
    {
      id: "merchant-tools",
      title: "Merchant tools",
      description:
        "Run your account with multi-user access and a reconciliation dashboard, so your finance team sees the same numbers you do.",
    },
    {
      id: "payment-links",
      title: "Payment links & QR",
      description:
        "Generate a shareable payment link or a QR code and collect from any customer, anywhere, without card terminals or hardware costs.",
    },
    {
      id: "bulk-payouts",
      title: "Bulk payouts",
      description:
        "Upload a CSV of your staff, suppliers or beneficiaries, set the amounts, and pay everyone in one go. Each recipient is notified the moment funds land.",
    },
    {
      id: "settlement",
      title: "Settlement & reporting",
      description:
        "Funds from confirmed transactions arrive in your wallet within 24 hours, with no hold periods, alongside a dashboard you can reconcile against.",
    },
  ],
  // CONFIRM (guide §8): business sign-up documents, verification and approval
  // path are unanswered, so the three-step "how it works" block is deliberately
  // omitted here rather than invented. Add `steps` once confirmed.
  eligibility: {
    title: "Who it's for",
    description:
      "Registered companies, corporate teams and organizations running payouts.",
    points: [
      "Shops, restaurants and retailers taking payment at the counter",
      "Online businesses collecting by link or QR",
      "Offices and NGOs paying staff, suppliers and beneficiaries",
    ],
  },
  trust: [
    BSL_LINE,
    "Advanced encryption on every transaction",
    "Settlement within 24 hours of a confirmed transaction",
    "Reconciliation dashboard and full transaction history",
  ],
  cta: { label: "Talk to us", href: "mailto:info@safulpay.com" },
  seo: {
    title: "Business | Get paid. Pay people. All in one place",
    description:
      "Accept payments by QR, link and in-app checkout, then run bulk payouts to staff, suppliers and beneficiaries. SafulPay for businesses in Sierra Leone.",
  },
};

export const agencySurface: AudienceSurface = {
  id: "agency",
  path: "/agency",
  navLabel: "Agency",
  definition:
    "People who use the SafulPay app to serve walk-in customers from anywhere — cash-in, cash-out, bill payments such as EDSA and airtime, and remittance pickup — and earn commission on every transaction.",
  eyebrow: "Agency",
  promise: "Serve your community. Earn on every transaction.",
  accentPhrase: "Earn on every transaction",
  lede: "Handle cash-in, cash-out, bills and remittance pickup for walk-in customers straight from the Agent App, and earn commission on everything you process.",
  proof: ["Regulated by the Bank of Sierra Leone", "Real-time commission", "Float visible in-app"],
  capabilities: [
    {
      id: "cash-in-out",
      title: "Cash-in & cash-out",
      description:
        "Customers deposit and withdraw with you. You earn commission on every transaction you process.",
    },
    {
      id: "bill-payments",
      title: "Bill payments",
      description:
        "Collect EDSA electricity, WAEC, DSTV and Sea Coach payments on behalf of walk-in customers, and sell Africell, Orange and QCell top-ups across every network.",
    },
    {
      id: "remittance-pickup",
      title: "Remittance pickup",
      description:
        "Pay out Western Union, MoneyGram and RIA remittances to walk-in customers directly from your float.",
    },
    {
      id: "earn-commission",
      title: "Earn commission",
      description:
        "Commission is calculated in real time and credited to your agent wallet after each transaction. Withdraw it or reinvest it into your float.",
    },
    {
      id: "float",
      title: "Manage your float",
      description:
        "Your float balance is visible in the Agent App at all times. Top it up by bank transfer or mobile money, and reconcile against real-time transaction history.",
    },
  ],
  steps: [
    {
      title: "Apply",
      description:
        "Email info@safulpay.com or visit any SafulPay office to start your agent application.",
    },
    {
      title: "Get approved",
      description:
        "Once your application is approved, you get access to the Agent App on your own device.",
    },
    {
      title: "Start earning",
      description:
        "Top up your float and begin serving walk-in customers, earning commission from day one.",
    },
  ],
  // The Agency dropdown points "Become an agent" at the steps block and
  // "Agent requirements" at the eligibility block, so both need named anchors.
  stepsAnchor: "become-an-agent",
  // CONFIRM (guide §8): float/deposit minimum, approval turnaround, publishable
  // commission rates, and whether agents get POS hardware or a till number are
  // all unanswered. `points` below states only what the live site already
  // commits to; do not add figures until they are confirmed.
  eligibility: {
    anchor: "agent-requirements",
    title: "Agent requirements",
    description:
      "Anyone who wants to offer money services to walk-in customers and earn commission can apply.",
    points: [
      "Apply by email or in person at any SafulPay office",
      "Approval gives you access to the Agent App — no separate hardware needed",
      "A funded float, topped up by bank transfer or mobile money, to serve withdrawals",
    ],
  },
  trust: [
    BSL_LINE,
    "Commission calculated in real time on every transaction",
    "Float balance and transaction history visible in the app at all times",
    "Round-the-clock fraud monitoring",
  ],
  cta: { label: "Become an Agent", href: "mailto:info@safulpay.com" },
  seo: {
    title: "Agency | Serve your community. Earn on every transaction",
    description:
      "Become a SafulPay agent. Offer cash-in, cash-out, EDSA and airtime bill payments and remittance pickup to walk-in customers, and earn commission on every transaction.",
  },
};

export const developersSurface: AudienceSurface = {
  id: "developers",
  path: "/developers",
  navLabel: "Developers",
  definition:
    "Teams and builders who embed SafulPay's money rails into their own products using the APIs and sandbox.",
  eyebrow: "Developers",
  promise: "Embed money rails into your product.",
  accentPhrase: "money rails",
  lede: "Wallets, bills and remittance flows over REST and websockets, with a sandbox you can build against today.",
  proof: ["REST + websockets", "Signed, retryable webhooks", "Sandbox available today"],
  capabilities: [
    {
      id: "overview",
      title: "Overview",
      description:
        "One integration reaches every mobile wallet, bank, bill and remittance corridor SafulPay connects to in Sierra Leone.",
    },
    {
      id: "wallets-api",
      title: "Wallets API",
      description:
        "Create wallets, move funds and read balances over predictable HTTP/JSON endpoints with consistent error shapes.",
    },
    {
      id: "bills-remittance",
      title: "Bills & remittance",
      description:
        "Programmatic access to the same bill and remittance rails the app runs on, including EDSA, airtime and international payouts.",
    },
    {
      id: "webhooks",
      title: "Webhooks & websockets",
      description:
        "Signed, retryable webhook events for every transaction state change, plus websockets when you need the stream in real time.",
    },
    {
      id: "sandbox",
      title: "Sandbox",
      description:
        "A sandbox that mirrors production with test wallets and simulated transfers, available today.",
    },
  ],
  // CONFIRM (guide §8): supported SDKs and languages, the auth model
  // (API keys vs OAuth), whether the sandbox is self-serve or request-based,
  // and the sandbox-to-production approval path. The previous /platform page
  // published specific SDK and OAuth claims that this guide lists as
  // unconfirmed — they are intentionally not carried over. Add a `steps` block
  // describing the sandbox → production path once it is confirmed.
  eligibility: {
    title: "Integration surface",
    description:
      "Built to be reachable from any stack — the API speaks plain HTTP and JSON, so any HTTP client works.",
    points: [
      "REST endpoints for wallets, bills and remittance",
      "Websockets for real-time transaction streams",
      "Signed, retryable webhooks for state changes",
    ],
  },
  trust: [
    BSL_LINE,
    "Signed webhook delivery with retries",
    "Sandbox that mirrors production before you go live",
    "Advanced encryption in transit and at rest",
  ],
  cta: { label: "Get sandbox access", href: "https://docs.safulpay.com", external: true },
  secondaryCta: {
    label: "Read the docs",
    href: "https://docs.safulpay.com",
    external: true,
  },
  seo: {
    title: "Developers | Embed money rails into your product",
    description:
      "Wallets, bills and remittance flows over REST and websockets, with signed webhooks and a sandbox available today. Build on SafulPay's payment rails.",
  },
};

export const audienceSurfaces: AudienceSurface[] = [
  personalSurface,
  businessSurface,
  agencySurface,
  developersSurface,
];

export const audiencesById: Record<AudienceId, AudienceSurface> = {
  personal: personalSurface,
  business: businessSurface,
  agency: agencySurface,
  developers: developersSurface,
};

// Used on the home page to introduce the four doors. The Business/Agency pair
// is the one most easily confused, so their taglines state the distinction
// explicitly (guide §2).
export const audienceDoors = [
  {
    id: "personal" as const,
    label: "Personal",
    tagline: "I move my own money.",
    path: "/personal",
  },
  {
    id: "business" as const,
    label: "Business",
    tagline: "My company gets paid.",
    path: "/business",
  },
  {
    id: "agency" as const,
    label: "Agency",
    tagline: "I serve other people's cash needs and earn commission.",
    path: "/agency",
  },
  {
    id: "developers" as const,
    label: "Developers",
    tagline: "I build on the payment rails.",
    path: "/developers",
  },
];

export interface UseCaseStat {
  value: string;
  label: string;
}

export interface UseCaseFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface UseCaseData {
  id: string;
  badge: string;
  headline: string;
  subheadline: string;
  description: string;
  features: UseCaseFeature[];
  stats: UseCaseStat[];
  cta: { label: string; href: string };
}

export type PlatformPersonaId = "user" | "agent" | "merchant" | "developer";

export interface PlatformPersonaCta {
  label: string;
  href: string;
  external?: boolean;
}

export interface PlatformPersona {
  id: PlatformPersonaId;
  label: string;
  eyebrow: string;
  headline: string;
  accentPhrase: string;
  lede: string;
  cta: PlatformPersonaCta;
  cta2: { label: string; href: string };
}

export interface PlatformHeroStat {
  value: string;
  label: string;
}

export interface PlatformHeroData {
  defaultPersona: PlatformPersonaId;
  personas: PlatformPersona[];
  stats: PlatformHeroStat[];
}

export const platformHeroData: PlatformHeroData = {
  defaultPersona: "agent",
  personas: [
    {
      id: "user",
      label: "User",
      eyebrow: "For You",
      headline: "One app for every way you move money.",
      accentPhrase: "every way",
      lede: "Send to any mobile money or bank, pay EDSA, top up airtime, gift in seconds, and receive money from anywhere in the world.",
      cta: { label: "Get the app", href: "/download" },
      cta2: { label: "See what you can do", href: "/#bridge" },
    },
    {
      id: "agent",
      label: "Agent",
      eyebrow: "For Agents",
      headline: "Run an agent business that scales.",
      accentPhrase: "that scales",
      lede: "Offer cash-in, cash-out, bill payments and remittance pickup to your community. Earn transparent commission on every transaction.",
      cta: { label: "Apply as Agent", href: "mailto:agents@safulpay.com" },
      cta2: { label: "See agent tools", href: "#agency" },
    },
    {
      id: "merchant",
      label: "Merchant",
      eyebrow: "For Business",
      headline: "Accept payments. Pay out at scale.",
      accentPhrase: "Pay out",
      lede: "Receive QR, link and in-app payments. Pay salaries and suppliers in bulk. Built for restaurants, retailers, offices and NGOs.",
      cta: {
        label: "Get a business account",
        href: "mailto:merchants@safulpay.com",
      },
      cta2: { label: "Explore merchant tools", href: "#merchant" },
    },
    {
      id: "developer",
      label: "Developer",
      eyebrow: "For Developers",
      headline: "Money rails for any product.",
      accentPhrase: "any product",
      lede: "A single REST API for mobile money, banks, bills and remittances across Sierra Leone. Sandbox, webhooks, idempotency, built right.",
      cta: {
        label: "Read the docs",
        href: "https://docs.safulpay.com",
        external: true,
      },
      cta2: { label: "Get API keys", href: "#developer" },
    },
  ],
  stats: [
    { value: "SLL 4.2B", label: "Monthly Volume" },
    { value: "10K+", label: "Users moving money" },
    { value: "1K+", label: "Agent points" },
    { value: "15+", label: "Network partners" },
  ],
};

export const agencyData: UseCaseData = {
  id: "agency",
  badge: "Agency App",
  headline: "One App. More Ways to Earn.",
  subheadline: "Every transaction you process puts money in your pocket.",
  description:
    "Join thousands of SafulPay agents across Sierra Leone. Get licensed, download the app, and earn real-time commission on every cash-in, bill payment, remittance and airtime top-up you process.",
  features: [
    {
      icon: "cash",
      title: "Cash-in & Cash-out",
      description:
        "Customers deposit and withdraw at your shop. You earn commission on every transaction.",
    },
    {
      icon: "bill",
      title: "Bill Collection",
      description:
        "Collect EDSA electricity, WAEC, DSTV Nigeria and Sea Coach payments and more on behalf of customers.",
    },
    {
      icon: "globe",
      title: "Remittance Pickup",
      description:
        "Pay out Western Union, MoneyGram and RIA remittances directly from your float.",
    },
    {
      icon: "phone",
      title: "Airtime/Top up Resale",
      description:
        "Sell Africell, Orange and QCell top-ups across all networks at a margin.",
    },
  ],
  stats: [
    { value: "1,047+", label: "Agents earning" },
    { value: "SLL 4.2B", label: "Processed monthly" },
    { value: "Real-time", label: "Commission payouts" },
    { value: "4+", label: "Revenue streams" },
  ],
  cta: { label: "Become an Agent", href: "mailto:info@safulpay.com" },
};

export const merchantData: UseCaseData = {
  id: "merchant",
  badge: "Merchant Tools",
  headline: "Accept Payments. Grow Your Business.",
  subheadline: "Every payment channel, one dashboard.",
  description:
    "From QR code checkouts to bulk disbursements, the SafulPay Merchant Platform handles every transaction type so you stay focused on selling.",
  features: [
    {
      title: "Bulk Disbursements",
      description:
        "Pay vendors, suppliers, and staff from a single batch upload.",
    },
    {
      title: "Collections and Payment Links",
      description:
        "Generate a shareable link or QR code and collect payments from anyone, anywhere.",
    },
    {
      title: "QR Code Payments",
      description:
        "Customers scan a dynamic code — no card terminals, no hardware costs.",
    },
    {
      title: "Instant Settlements",
      description:
        "Funds arrive in your wallet within 24 hours of each confirmed transaction.",
    },
    {
      title: "Customer Insights",
      description:
        "Transaction heatmaps and repeat-customer metrics built into your dashboard.",
    },
  ],
  stats: [
    { value: "42", label: "Active Merchants" },
    { value: "47ms", label: "Avg Payment Time" },
    { value: "Zero", label: "Double-charges" },
    { value: "24hr", label: "Settlement Window" },
  ],
  cta: { label: "Become a Merchant", href: "mailto:info@safulpay.com" },
};

export const developerData: UseCaseData = {
  id: "developer",
  badge: "Developer API",
  headline: "Build Anything on SafulPay Infrastructure",
  subheadline: "Clean REST APIs. Real sandbox. Honest docs.",
  description:
    "Integrate transfers, wallets, and real-time webhooks into any product with our developer-grade API. Ship in hours, not weeks.",
  features: [
    {
      title: "REST API",
      description:
        "Predictable HTTP/JSON endpoints with consistent error shapes and OpenAPI specs.",
    },
    {
      title: "Webhook Engine",
      description:
        "Signed, retryable event delivery for every transaction state transition.",
    },
    {
      title: "Full Sandbox",
      description:
        "Mirror the production environment with test wallets and simulated transfers.",
    },
    {
      title: "Multi-language SDKs",
      description:
        "Official SDKs for Node.js, Python, PHP, and Go — all open-source on GitHub.",
    },
    {
      title: "OAuth 2 + HMAC Auth",
      description:
        "Industry-standard authentication patterns. No vendor lock-in on auth.",
    },
  ],
  stats: [
    { value: "99.97%", label: "API Uptime" },
    { value: "5+", label: "Integrations" },
    { value: "<120ms", label: "P95 Latency" },
    { value: "OAuth2", label: "Auth Standard" },
  ],
  cta: { label: "Read the Docs", href: "https://docs.safulpay.com" },
};

export const codeSnippet = `import SafulPay from '@safulpay/node';

const client = new SafulPay({
  apiKey: process.env.SAFULPAY_SECRET_KEY,
});

// Initiate a transfer
const transfer = await client.transfers.create({
  amount:      50_000,
  currency:    'SLL',
  recipient:   '+23276123456',
  description: 'Invoice #1042',
  idempotency: 'order-9821-pay',
});

// transfer.status
// → 'pending' | 'completed' | 'failed'

console.log(transfer.id);
// → txn_3Kn7mB2xQ9vr4c8`;

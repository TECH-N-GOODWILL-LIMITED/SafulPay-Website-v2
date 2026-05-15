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

export const platformHeroData = {
  eyebrow: "SafulPay Platform",
  headline: "Built for Agents, Merchants & Developers",
  body: "One infrastructure layer. Three purpose-built products. Whether you run an agent network, accept merchant payments, or build fintech applications — SafulPay has the right toolset.",
  anchors: [
    { label: "Agency App", href: "#agency" },
    { label: "Merchant Tools", href: "#merchant" },
    { label: "Developer API", href: "#developer" },
  ],
  stats: [
    { value: "12,847", label: "Active Agents" },
    { value: "SLL 4.2B", label: "Monthly Volume" },
    { value: "99.6%", label: "Platform Uptime" },
    { value: "3,412", label: "Merchant Partners" },
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
  cta: { label: "Become an Agent", href: "mailto:agents@safulpay.com" },
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
      title: "POS Integration",
      description:
        "Connect existing point-of-sale hardware via our lightweight bridge API.",
    },
    {
      title: "Bulk Disbursements",
      description:
        "Pay vendors, suppliers, and staff from a single batch upload.",
    },
    {
      title: "Customer Insights",
      description:
        "Transaction heatmaps and repeat-customer metrics built into your dashboard.",
    },
  ],
  stats: [
    { value: "3,412", label: "Active Merchants" },
    { value: "47ms", label: "Avg Payment Time" },
    { value: "Zero", label: "Double-charges" },
    { value: "24hr", label: "Settlement Window" },
  ],
  cta: { label: "Become a Merchant", href: "mailto:merchants@safulpay.com" },
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
    { value: "200+", label: "Integrations" },
    { value: "< 120ms", label: "P95 Latency" },
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

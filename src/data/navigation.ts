// Site information architecture — see the Website Revamp guide, section 3.
//
// Four audience doors (Personal, Business, Agency, Developers) sit between Home
// and Company, bank-style. Each door opens onto a page built from the shared
// six-block template in `audiences.ts`. Dropdown children deep-link to the
// capability cards on that page; the scroll hand-off runs through
// sessionStorage so the URL never carries a `#hash`.

export interface NavChild {
  label: string;
  /** Route the child navigates to. */
  url: string;
  /** Section id to scroll to once `url` has loaded. */
  section?: string;
  /** Set for links that leave the site. */
  external?: boolean;
}

export interface NavItem {
  label: string;
  url: string;
  /** Present on the four audience doors and Company; absent on plain links. */
  children?: NavChild[];
}

export const PERSONAL_PATH = "/personal";
export const BUSINESS_PATH = "/business";
export const AGENCY_PATH = "/agency";
export const DEVELOPERS_PATH = "/developers";

export const DOCS_URL = "https://docs.safulpay.com";

// Left-to-right order of the top navigation bar. The logo links to Home
// separately, and Download App renders as a button outside this list.
export const navItems: NavItem[] = [
  { label: "Home", url: "/" },
  {
    label: "Personal",
    url: PERSONAL_PATH,
    children: [
      {
        label: "Send & receive money",
        url: PERSONAL_PATH,
        section: "send-receive",
      },
      { label: "Pay bills", url: PERSONAL_PATH, section: "pay-bills" },
      { label: "Virtual cards", url: PERSONAL_PATH, section: "virtual-cards" },
      {
        label: "Gift cards & links",
        url: PERSONAL_PATH,
        section: "gift-cards",
      },
      {
        label: "Request money",
        url: PERSONAL_PATH,
        section: "request-money",
      },
      { label: "QR payments", url: PERSONAL_PATH, section: "qr-payments" },
    ],
  },
  {
    label: "Business",
    url: BUSINESS_PATH,
    children: [
      {
        label: "Accept payments",
        url: BUSINESS_PATH,
        section: "accept-payments",
      },
      {
        label: "Merchant tools",
        url: BUSINESS_PATH,
        section: "merchant-tools",
      },
      {
        label: "Payment links & QR",
        url: BUSINESS_PATH,
        section: "payment-links",
      },
      { label: "Bulk payouts", url: BUSINESS_PATH, section: "bulk-payouts" },
      {
        label: "Settlement & reporting",
        url: BUSINESS_PATH,
        section: "settlement",
      },
    ],
  },
  {
    label: "Agency",
    url: AGENCY_PATH,
    children: [
      {
        label: "Become an agent",
        url: AGENCY_PATH,
        section: "become-an-agent",
      },
      { label: "Cash-in / Cash-out", url: AGENCY_PATH, section: "cash-in-out" },
      {
        label: "Bill payments",
        url: AGENCY_PATH,
        section: "bill-payments",
      },
      {
        label: "Remittance pickup",
        url: AGENCY_PATH,
        section: "remittance-pickup",
      },
      {
        label: "Earn commission",
        url: AGENCY_PATH,
        section: "earn-commission",
      },
      {
        label: "Agent requirements",
        url: AGENCY_PATH,
        section: "agent-requirements",
      },
    ],
  },
  {
    label: "Developers",
    url: DEVELOPERS_PATH,
    children: [
      { label: "Overview", url: DEVELOPERS_PATH, section: "overview" },
      { label: "Wallets API", url: DEVELOPERS_PATH, section: "wallets-api" },
      {
        label: "Bills & remittance",
        url: DEVELOPERS_PATH,
        section: "bills-remittance",
      },
      { label: "Sandbox", url: DEVELOPERS_PATH, section: "sandbox" },
      { label: "Documentation", url: DOCS_URL, external: true },
    ],
  },
  {
    label: "Company",
    url: "/about-us",
    children: [
      { label: "About us", url: "/about-us" },
      { label: "Security", url: "/security" },
      { label: "Trusted partners", url: "/partners" },
      { label: "Regulatory", url: "/regulatory" },
    ],
  },
  { label: "Contact Us", url: "/contact-us" },
];

// The one primary action, right-aligned and rendered as a button on desktop,
// kept outside the hamburger on mobile.
export const downloadAction = {
  label: "Download App",
  url: "/download",
};

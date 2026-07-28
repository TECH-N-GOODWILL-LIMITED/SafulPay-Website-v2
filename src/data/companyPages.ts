// Company section content — see the Website Revamp guide, section 6.
//
// These four pages (About us, Security, Trusted partners, Regulatory) form the
// institutional trust layer that gives the site a bank's gravity. About us
// already has its own route and content in `companyData`; the three below are
// the new ones.

export interface CompanyPageIntro {
  path: string;
  eyebrow: string;
  title: string;
  lede: string;
  seo: { title: string; description: string };
}

export const securityPage: CompanyPageIntro = {
  path: "/security",
  eyebrow: "Security",
  title: "Built to protect every transaction",
  lede: "Encryption, two-factor authentication and round-the-clock fraud monitoring sit behind every payment on SafulPay — and every fee is shown before you confirm.",
  seo: {
    title: "Security",
    description:
      "How SafulPay protects your money: advanced encryption, two-factor authentication, fraud detection and monitoring, and no hidden fees.",
  },
};

export const partnersPage: CompanyPageIntro = {
  path: "/partners",
  eyebrow: "Trusted partners",
  title: "The networks we connect",
  lede: "SafulPay sits in the middle of Sierra Leone's mobile money networks, banks, billers and global remittance corridors, so money moves between them in seconds.",
  seo: {
    title: "Trusted partners",
    description:
      "QCell, Orange, Africell, Western Union, RIA, MoneyGram, Visa & Mastercard, DSTV and EDSA — the networks SafulPay connects across Sierra Leone.",
  },
};

export const regulatoryPage: CompanyPageIntro = {
  path: "/regulatory",
  eyebrow: "Regulatory",
  title: "Licensed and regulated in Sierra Leone",
  lede: "SafulPay operates under the supervision of the Bank of Sierra Leone. That licence governs how we hold customer funds, verify identity and handle complaints.",
  seo: {
    title: "Regulatory",
    description:
      "SafulPay is licensed and regulated by the Bank of Sierra Leone. Our regulatory standing, customer verification, and how to raise a complaint.",
  },
};

/**
 * What the regulatory page can state today.
 *
 * CONFIRM (guide §8): the exact licence wording as approved by the Bank of
 * Sierra Leone, and the legal entity name as it should appear publicly, are
 * both unanswered. Neither is invented here — once confirmed, add them as a
 * formal licence statement above these points.
 */
export const regulatoryPoints = [
  {
    title: "Supervised by the Bank of Sierra Leone",
    description:
      "SafulPay is licensed and regulated by the Bank of Sierra Leone, the country's central bank and financial services regulator.",
  },
  {
    title: "Identity verification",
    description:
      "Every account completes KYC verification. Transaction limits are tied to verification level, so higher limits require fuller identity checks.",
  },
  {
    title: "Data protection",
    description:
      "We follow strict data protection standards and never share your personal information with third parties without your consent. Data is encrypted in transit and at rest.",
  },
  {
    title: "Raising a complaint",
    description:
      "If something goes wrong with a transaction, contact our support team. We are available around the clock and will work to resolve it as quickly as possible.",
  },
];

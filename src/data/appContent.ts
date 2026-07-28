import { StaticImageData } from "next/image";
import mockupFeatures1 from "@/assets/images/mockups/mockup-features1.png";
import mockupFeatures2 from "@/assets/images/mockups/mockup-features2.png";
import mockupFeatures3 from "@/assets/images/mockups/mockup-features3.png";
import iconArrowDown from "@/assets/images/icons/icon-arrow-down.svg";
import iconAdmin from "@/assets/images/icons/icon-admin.svg";
import iconWallet from "@/assets/images/icons/icon-wallet.svg";
import createWalletIllustration from "@/assets/images/illustrations/create-wallet-illustration.png";
import sendIllustration from "@/assets/images/illustrations/send-illustration.png";
import paymentIllustration from "@/assets/images/illustrations/payment-illustration.png";
import iconCurrency from "@/assets/images/icons/icon-currency.svg";
import iconEncrypt from "@/assets/images/icons/icon-encrypt.svg";
import iconShield from "@/assets/images/icons/icon-shield.svg";
import iconPadlock from "@/assets/images/icons/icon-padlock.svg";
import testimonialLady2 from "@/assets/images/testimonial/lady2.png";
import testimonialThomas from "@/assets/images/testimonial/thomas.png";
import testimonialChrislin from "@/assets/images/testimonial/chrislin.png";
import testimonialLady from "@/assets/images/testimonial/lady.png";
import testimonialLady3 from "@/assets/images/testimonial/lady3.png";

const currentYear = new Date().getFullYear();

// NAV — the top-bar information architecture lives in `@/data/navigation`.

// FOOTER
export interface FooterLinkItem {
  label: string;
  url: string;
  type: "route" | "scroll";
  // For "route" links, an optional section to scroll to after the route loads.
  // Hand-off uses sessionStorage so the URL never carries a `#hash`.
  section?: string;
}
export interface FooterLink {
  category: string;
  links: FooterLinkItem[];
}

export interface OtherLink {
  label: string;
  url: string;
}

export interface FooterData {
  copyright: string;
  footerLinks: FooterLink[];
  otherLinks: OtherLink[];
}

// FEATURES
export interface MoreFeature {
  title: string;
  image?: string | StaticImageData;
}

export interface FeaturesProp {
  keyFeatures: string[];
  featuresText: string[];
  moreFeatures: MoreFeature[];
  featuresIllustration: (string | StaticImageData)[];
}

// SECURITY
export interface SecurityFeature {
  title: string;
  description: string;
  icon: string | StaticImageData;
}

export interface SecurityData {
  title: string;
  intro: string;
  securityFeatures: SecurityFeature[];
}

// TESTIMONIAL
export interface Testimonial {
  name: string;
  location: string;
  title: string;
  text: string;
  image?: string | StaticImageData;
}

// FAQ
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  label: string;
  faqs: FAQItem[];
}

export interface FAQData {
  title: string;
  intro: string;
  categories: FAQCategory[];
}

// CONTACT
export interface ContactInfo {
  email: string;
  supportEmail: string;
  phone: string;
  altPhone: string;
  address: string;
  city: string;
  country: string;
}

// ABOUT US
export interface AboutUsData {
  title: string;
  subtitle: string;
  text: string;
}

// THE BRIDGE
export interface BridgeFlowGroup {
  title: string;
  items: string[];
}

export interface BridgeData {
  tag: string;
  title: string;
  description: string;
  sources: BridgeFlowGroup;
  destinations: BridgeFlowGroup;
}

// HOW IT WORKS
export interface Step {
  title: string;
  description: string;
  icon: string | StaticImageData;
}
export interface HowItWorks {
  title: string;
  intro: string;
  instruction: string;
  steps: Step[];
}

// FOOTER — mirrors the top-bar IA: the four audience doors, then Company,
// then the support surfaces.
export const footerData: FooterData = {
  copyright: `Copyright © ${currentYear}. All Rights Reserved By `,

  footerLinks: [
    {
      category: "Audiences",
      links: [
        { label: "Personal", url: "/personal", type: "route" },
        { label: "Business", url: "/business", type: "route" },
        { label: "Agency", url: "/agency", type: "route" },
        { label: "Developers", url: "/developers", type: "route" },
      ],
    },
    {
      category: "Company",
      links: [
        { label: "About us", url: "/about-us", type: "route" },
        { label: "Security", url: "/security", type: "route" },
        { label: "Trusted partners", url: "/partners", type: "route" },
        { label: "Regulatory", url: "/regulatory", type: "route" },
      ],
    },
    {
      category: "Support",
      links: [
        { label: "Contact Us", url: "/contact-us", type: "route" },
        { label: "FAQs", url: "/contact-us", type: "route", section: "faqs" },
        { label: "Download App", url: "/download", type: "route" },
        { label: "Home", url: "/", type: "route" },
      ],
    },
  ],

  otherLinks: [
    { label: "Terms & Conditions", url: "/terms-and-condition" },
    { label: "Privacy Policy", url: "/privacy" },
  ],
};

// FEATURES
export const featuresData: FeaturesProp = {
  keyFeatures: ["User-friendly", "Security", "Privacy"],
  featuresText: [
    "SafulPay provides a fast and secure way to manage your money, ensuring your transactions are always smooth. You can easily handle multiple wallets, pay bills, and top up services with just a few taps. Our transparent fees keep you informed, so there are no surprises. Whether you're sending money locally or across borders, SafulPay makes it simple and reliable. Plus, our 24/7 support is always available to assist whenever you need help.",
    "SafulPay offers a variety of exciting tools to make managing your money even easier. From instant QR code payments to sending personalized gift cards in seconds, we've got you covered. Need to request money? Our easy request feature allows you to get funds from anyone, anywhere. Plus, with secure virtual cards, you can shop online with confidence. Discover all the ways SafulPay enhances your financial experience!",
    "SafulPay simplifies how you manage and move your money, offering a secure, fast, and user-friendly platform for all your financial needs. From handling transactions and paying bills to managing virtual cards and requesting money, SafulPay is designed to keep you in control while ensuring your data and funds are protected. Our commitment to transparency, security, and convenience makes SafulPay the ideal choice for modern financial management.",
  ],
  featuresIllustration: [
    createWalletIllustration,
    sendIllustration,
    paymentIllustration,
  ],
  moreFeatures: [
    {
      title: "Send personalized gift cards in seconds",
      image: mockupFeatures1,
    },
    {
      title: "Secure online shopping with virtual cards",
      image: mockupFeatures2,
    },
    {
      title: "Instant payment with a simple scan",
      image: mockupFeatures3,
    },
  ],
};

// SECURITY
export const securityData: SecurityData = {
  title: "Your Security is Our Priority",
  intro:
    "At SafulPay, we take your safety seriously. With industry-leading encryption, multi-factor authentication, and real-time transaction monitoring, your personal and financial data is always protected. We ensure that every payment, transfer, and wallet transaction is handled securely, so you can have peace of mind while managing your money",
  securityFeatures: [
    {
      title: "No Hidden Fees",
      description:
        "At SafulPay, transparency is key. We guarantee no hidden fees, so you always know exactly what you're paying for, with clear and upfront pricing for every transaction.",
      icon: iconCurrency,
    },
    {
      title: "Advanced Encryption",
      description:
        "Your personal and financial data is protected with industry-leading encryption technology. Every transaction is securely encrypted to keep your sensitive information safe from unauthorized access.",
      icon: iconEncrypt,
    },
    {
      title: "Fraud Detection and Monitoring",
      description:
        "We continuously monitor your transactions with cutting-edge fraud detection systems, instantly flagging any suspicious activity to protect your funds from potential threats.",
      icon: iconShield,
    },
    {
      title: "Two-Factor Authentication",
      description:
        "SafulPay adds an extra layer of protection with two-factor authentication, ensuring that only you can access your account, even if your password is compromised.",
      icon: iconPadlock,
    },
  ],
};

// TESTIMONIAL
export const testimonialsData: Testimonial[] = [
  {
    name: "Hauwa Kamara",
    location: "Bo, Sierra Leone",
    title: "Small Business Owner",
    text: "SafulPay has been a game-changer for my small business. The ease of using their services has increased our sales and customer satisfaction.",
    image: testimonialLady2,
  },
  {
    name: "Thomas Massaquoi",
    location: "Freetown, Sierra Leone",
    title: "Excellent Customer Service",
    text: "I had a query regarding a transaction, and the support team was quick to respond and resolve my issue. It's reassuring to know they have such responsive and helpful customer service.",
    image: testimonialThomas,
  },
  {
    name: "Chrislin Johnson",
    location: "Lungi, Sierra Leone",
    title: "Impressive Features",
    text: "The app's digital wallet is a game-changer. I can store multiple cards, make contactless payments, and even track my spending habits. It's like having a personal finance assistant right in my pocket.",
    image: testimonialChrislin,
  },
  {
    name: "Mariam Jalloh",
    location: "Freetown, Sierra Leone",
    title: "I love SafulPay",
    text: "Great agency services with good management, transparency  and commission",
    image: testimonialLady,
  },
  {
    name: "Josephine Kabba",
    location: "Freetown, Sierra Leone",
    title: "Saves Me Time and Effort",
    text: "I love how easy it is to manage my money with this app. I can check my balance, pay for purchases, and send money to family in just a few taps. It's made my financial life so much simpler!",
    image: testimonialLady3,
  },
];

// FAQ
export const faqsData: FAQData = {
  title: "FAQs: Get Answers to Common Questions",
  intro: "Can't find what you need? Our support team is one tap away.",
  categories: [
    {
      label: "General",
      faqs: [
        {
          question: "How does SafulPay ensure transaction security?",
          answer:
            "SafulPay uses advanced encryption and two-factor authentication to keep your data and transactions protected. We also run real-time fraud detection systems that monitor activity around the clock.",
        },
        {
          question: "Are there any hidden fees?",
          answer:
            "No. SafulPay is committed to transparency. All fees are clearly listed before you confirm any transaction, so you always know exactly what you're paying.",
        },
        {
          question: "What should I do if I forget my pin code?",
          answer:
            "Tap 'Forgot PinCode' on the login screen and follow the steps. You'll get a reset link via SMS or email to set a new pin.",
        },
        {
          question: "What should I do if I have a problem with a transaction?",
          answer:
            "Reach out to our support team at support@safulpay.com or call +232-77-076235. We're available 24/7 and will work to resolve it as quickly as possible.",
        },
        {
          question: "Is my personal information safe with SafulPay?",
          answer:
            "Absolutely. We follow strict data protection standards and never share your personal information with third parties without your consent. All data is encrypted at rest and in transit.",
        },
      ],
    },
    {
      label: "For Users",
      faqs: [
        {
          question: "How do I add funds to my SafulPay wallet?",
          answer:
            'You can fund your wallet through bank transfers, mobile money, debit/credit cards, agents, and other supported methods. Open the app, go to "Deposit", pick your method, and follow the prompts.',
        },
        {
          question: "Is there a transaction limit?",
          answer:
            "Yes, limits depend on your account verification level. Complete your KYC verification to unlock higher transaction limits.",
        },
        {
          question: "How do I request money from someone?",
          answer:
            'Go to the "Request" section, select a wallet, and enter an amount and note if you like. A QR code and link will be generated. Share the link with anyone to collect your funds.',
        },
        {
          question: "Can I send gift cards through SafulPay?",
          answer:
            "Yes! You can create and send personalised gift cards directly from the app. Pick a design, set the amount, add a message, and send it to anyone instantly.",
        },
        {
          question: "How do virtual cards work?",
          answer:
            "Virtual cards let you shop online securely without using your main wallet. Create one in seconds from the app. You can fund it, set spending limits, and freeze or delete it anytime.",
        },
        {
          question: "Can I receive international remittances?",
          answer:
            "Yes. SafulPay supports Western Union, MoneyGram, and RIA remittances. Funds are paid directly into your SafulPay wallet.",
        },
      ],
    },
    {
      label: "For Agents",
      faqs: [
        {
          question: "How do I become a SafulPay agent?",
          answer:
            "Apply by emailing info@safulpay.com or visiting any SafulPay office. Once approved, you'll get access to the Agent App and can start earning from day one.",
        },
        {
          question: "How is commission paid?",
          answer:
            "Commission is calculated in real time and credited to your agent wallet after each transaction. You can withdraw it or reinvest it into your float.",
        },
        {
          question: "What services can I offer as an agent?",
          answer:
            "Agents can offer cash-in, cash-out, bill payments (EDSA, WAEC, DSTV, Sea Coach), airtime top-ups across all networks, and remittance pickup for Western Union, MoneyGram, and RIA.",
        },
        {
          question: "How do I manage my float?",
          answer:
            "Your float balance is visible in the Agent App at all times. You can top it up via bank transfer or mobile money. The app also shows real-time transaction history so you can reconcile easily.",
        },
      ],
    },
    {
      label: "For Merchants (Businesses)",
      faqs: [
        {
          question: "What does a merchant account give me?",
          answer:
            "A SafulPay merchant account lets you accept payments via QR codes, payment links, and in-app checkout. You also get bulk payroll and supplier payout tools, multi-user access, and a reconciliation dashboard.",
        },
        // {
        //   question: "Do you provide POS hardware?",
        //   answer:
        //     "Yes. We offer POS terminals that accept tap-to-pay and chip transactions in-store. Contact merchants@safulpay.com to get set up.",
        // },
        {
          question: "How fast are merchant settlements?",
          answer:
            "Funds from confirmed transactions arrive in your wallet within 24 hours. There are no hold periods or surprise delays.",
        },
        {
          question: "Can I pay my staff through SafulPay?",
          answer:
            "Yes. Upload a CSV of your team, set the amounts, and pay everyone in one go. Each recipient gets an instant notification when the funds land.",
        },
      ],
    },
    {
      label: "For Developers",
      faqs: [
        {
          question: "Where can I get API keys?",
          answer:
            "Sign up at docs.safulpay.com, create a project, and you'll get sandbox keys immediately. When you're ready to go live, request production keys from the dashboard.",
        },
        {
          question: "Do you support webhooks?",
          answer:
            "Yes. SafulPay sends signed, retryable webhook events for every transaction state change. You can also use websockets for real-time streaming.",
        },
        {
          question: "Is there a sandbox environment?",
          answer:
            "Absolutely. The sandbox mirrors production with test wallets and simulated transfers. You can be up and running in under 30 seconds.",
        },
        // {
        //   question: "What SDKs are available?",
        //   answer:
        //     "We offer official SDKs for Node.js, Python, PHP, and Go, all open-source on GitHub. The REST API also works with any HTTP client.",
        // },
      ],
    },
  ],
};

export const contactInfo: ContactInfo = {
  email: "info@safulpay.com",
  supportEmail: "support@safulpay.com",
  phone: "+232-77-076235",
  altPhone: "+232-77-076237",
  address: "37 Upper Brook Street, off Naimbana Street",
  city: "Freetown",
  country: "Sierra Leone",
};

export const bridgeData: BridgeData = {
  tag: "The Bridge",
  title: "One app sits in the middle of every wallet, bank and bill.",
  description:
    "Move money from any wallet, bank, or remittance to wherever it needs to go in Sierra Leone, all in seconds.",
  sources: {
    title: "Money comes from",
    items: [
      "Orange Money",
      "Afri Money",
      "Qmoney",
      "Payment Switch",
      "Bank Cards",
      "BSL",
      "SLCB",
      "Rokel Bank",
      "UBA",
      "GTCO",
      "Western Union",
      "MoneyGram",
      "RIA",
    ],
  },
  destinations: {
    title: "Money goes to",
    items: [
      "Any mobile wallet",
      "Any bank account",
      "EDSA bills",
      "DSTV Nigeria",
      "WAEC fees",
      "Sea Coach",
      "Airtime & data",
      "Gift links",
      "Cash via agent",
      "Merchants & POS",
    ],
  },
};

export const worksData: HowItWorks = {
  title: "How Does SafulPay Work?",
  intro:
    "Using SafulPay is quick and easy. From setting up your account to managing your transactions, everything is designed with simplicity and security in mind. With just a few taps, you can send money, request payments, and enjoy all the powerful features SafulPay has to offer.",
  instruction: "Follow Some Simple Steps for Using SafulPay",
  steps: [
    {
      title: "Download and Install Our App",
      description:
        "Find SafulPay on your App Store or Google Play Store. Tap 'Install' and you'll have our app ready to use on your device.",
      icon: iconArrowDown,
    },
    {
      title: "Set Up Your Account",
      description:
        "Open the app, sign up, and verify your details. Complete your profile, and you're ready to start using the app!",
      icon: iconAdmin,
    },
    {
      title: "Send & Receive Money",
      description:
        "Send and receive money seamlessly with our secure platform, simplifying your financial transactions instantly.",
      icon: iconWallet,
    },
  ],
};

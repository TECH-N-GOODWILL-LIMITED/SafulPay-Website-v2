const currentYear = new Date().getFullYear();

// NAV
interface NavLink {
  label: string;
  url: string;
  type: "route" | "scroll";
}

// FOOTER
export interface FooterLinkItem {
  label: string;
  url: string;
  type: "route" | "scroll";
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
  image?: string;
}

export interface FeaturesProp {
  keyFeatures: string[];
  featuresText: string[];
  moreFeatures: MoreFeature[];
  featuresIllustration: string[];
}

// SECURITY
export interface SecurityFeature {
  title: string;
  description: string;
  icon: string;
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
  image?: string;
}

// FAQ
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  title: string;
  intro: string;
  faqs: FAQItem[];
}

// ABOUT US
export interface AboutUsData {
  title: string;
  subtitle: string;
  text: string;
}

// TEAM
export interface TeamMember {
  img: string;
  name: string;
  role: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface TeamData {
  title: string;
  subtitle: string;
  text: string;
  members: TeamMember[];
}

// HOW IT WORKS
export interface Step {
  title: string;
  description: string;
  icon: string;
}
export interface HowItWorks {
  title: string;
  intro: string;
  instruction: string;
  steps: Step[];
}

// NAVBAR
export const navLinks: NavLink[] = [
  { label: "Features", url: "features", type: "scroll" },
  { label: "How it Works", url: "works", type: "scroll" },
  { label: "Testimonial", url: "testimonials", type: "scroll" },
  { label: "FAQs", url: "faqs", type: "scroll" },
  { label: "Contact Us", url: "contact-us", type: "scroll" },
  { label: "About Us", url: "/about-us", type: "route" },
];

// FOOTER
export const footerData: FooterData = {
  copyright: `Copyright © ${currentYear}. All Rights Reserved By `,

  footerLinks: [
    {
      category: "Quick links",
      links: [
        { label: "Home", url: "/", type: "route" },
        { label: "How it Works", url: "works", type: "scroll" },
        { label: "Features", url: "features", type: "scroll" },
        { label: "Download", url: "download", type: "scroll" },
        { label: "FAQs", url: "faqs", type: "scroll" },
        { label: "Testimonial", url: "testimonials", type: "scroll" },
      ],
    },
    {
      category: "Contact",
      links: [
        { label: "About Us", url: "/about-us", type: "route" },
        { label: "Contact Us", url: "contact-us", type: "scroll" },
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
    "/create-wallet-illustration.png",
    "/send-illustration.png",
    "./payment-illustration.png",
  ],
  moreFeatures: [
    {
      title: "Send personalized gift cards in seconds",
      image: "/mockup-features1.png",
    },
    {
      title: "Secure online shopping with virtual cards",
      image: "/mockup-features2.png",
    },
    {
      title: "Instant payment with a simple scan",
      image: "/mockup-features3.png",
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
      icon: "icon-currency.svg",
    },
    {
      title: "Advanced Encryption",
      description:
        "Your personal and financial data is protected with industry-leading encryption technology. Every transaction is securely encrypted to keep your sensitive information safe from unauthorized access.",
      icon: "icon-encrypt.svg",
    },
    {
      title: "Fraud Detection and Monitoring",
      description:
        "We continuously monitor your transactions with cutting-edge fraud detection systems, instantly flagging any suspicious activity to protect your funds from potential threats.",
      icon: "icon-shield.svg",
    },
    {
      title: "Two-Factor Authentication",
      description:
        "SafulPay adds an extra layer of protection with two-factor authentication, ensuring that only you can access your account, even if your password is compromised.",
      icon: "icon-padlock.svg",
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
    image: "testimonial/lady2.png",
  },
  {
    name: "Thomas Massaquoi",
    location: "Freetown, Sierra Leone",
    title: "Excellent Customer Service",
    text: "I had a query regarding a transaction, and the support team was quick to respond and resolve my issue. It's reassuring to know they have such responsive and helpful customer service.",
    image: "testimonial/thomas.png",
  },
  {
    name: "Chrislin Johnson",
    location: "Lungi, Sierra Leone",
    title: "Impressive Features",
    text: "The app's digital wallet is a game-changer. I can store multiple cards, make contactless payments, and even track my spending habits. It's like having a personal finance assistant right in my pocket.",
    image: "testimonial/chrislin.png",
  },
  {
    name: "Mariam Jalloh",
    location: "Freetown, Sierra Leone",
    title: "I love SafulPay",
    text: "Great agency services with good management, transparency  and commission",
    image: "testimonial/lady.png",
  },
  {
    name: "Josephine Kabba",
    location: "Freetown, Sierra Leone",
    title: "Saves Me Time and Effort",
    text: "I love how easy it is to manage my money with this app. I can check my balance, pay for purchases, and send money to family in just a few taps. It's made my financial life so much simpler!",
    image: "testimonial/lady3.png",
  },
];

// FAQ
export const faqsData: FAQData = {
  title: "FAQs: Get Answers to Common Questions",
  intro:
    "Find quick answers to frequently asked questions about SafulPay’s security, fees, transaction processes, and support. If you need further assistance, our customer service team is here to help.",
  faqs: [
    {
      question: "How does SafulPay ensure transaction security?",
      answer:
        "SafulPay employs advanced encryption technology an two factor authentication to ensure your data and transactions are protected. We also have real time fraud detection systems in place to monitor and secure your financial activities",
    },
    // {
    //   question: "Can I use SafulPay for international transfers?",
    //   answer:
    //     "Yes, SafulPay supports international money transfers with competitive exchange rates and minimal fees.",
    // },
    {
      question: "How do I add funds to my SafulPay wallet?",
      answer:
        'You can add funds to your SafulPay wallet through various methods, including bank transfers, credit/debit cards, mobile money, agents and other supported payment options. Simply go to the "Deposit" section in the app and follow the instructions...',
    },
    {
      question: "Is there a transaction limit on my SafulPay account?",
      answer:
        "Yes, transaction limits depend on your account verification level. Upgrade your verification for higher limits.",
    },
    {
      question: "Are there any hidden fees with SafulPay?",
      answer:
        "No, SafulPay is committed to transparency. All fees are clearly outlined and there are no hidden charges. You’ll always know exactly what you’re paying for with each transaction.",
    },
    {
      question: "What should I do if I encounter an issue with a transaction?",
      answer:
        "If you experience any issues with a transaction, please contact our support team immediately at support@safulpay.com. We offer 24/7 customer support to help resolve any problems you may encounter.",
    },
    {
      question: "What should I do if I forget my pin code?",
      answer:
        "You can reset your pin by clicking on 'Forgot PinCode' on the login page and follow the instructions.",
    },
    {
      question: "How can I request money from someone using SafulPay?",
      answer:
        'To request money, go to the "Request" section in the app, select a wallet, and enter an optional amount and a note. A QR code and a request link will be generated — simply share the link with anyone to fulfill your request. It’s an easy way to get the funds you need.',
    },
  ],
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
        "Find SalfulPay on your App Store or Google Play Store. Tap 'Install' and you'll have our app ready to use on your device.",
      icon: "/icon-arrow-down.svg",
    },
    {
      title: "Set Up Your Account",
      description:
        "Open the app, sign up, and verify your details. Complete your profile, and you're ready to start using the app!",
      icon: "/icon-admin.svg",
    },
    {
      title: "Send & Receive Money",
      description:
        "Send and receive money seamlessly with our secure platform, simplifying your financial transactions instantly.",
      icon: "/icon-wallet.svg",
    },
  ],
};

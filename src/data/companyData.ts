import { StaticImageData } from "next/image";
import safulpayIconGreen from "@/assets/images/brand/safulpay-icon-green.svg";
import safulpayIconLemon from "@/assets/images/brand/safulpay-icon-lemon.svg";
import logoQcell from "@/assets/images/partners/logo-qcell.svg";
import logoOrange from "@/assets/images/partners/logo-orange.svg";
import logoAfricell from "@/assets/images/partners/logo-africell.svg";
import logoWu from "@/assets/images/partners/logo-wu.svg";
import logoRia from "@/assets/images/partners/logo-ria.svg";
import logoMoneygram from "@/assets/images/partners/logo-moneygram.svg";
import logoBankcard from "@/assets/images/partners/logo-bankcard.svg";
import logoDstv from "@/assets/images/partners/logo-dstv.svg";
import logoEdsa from "@/assets/images/partners/logo-edsa.svg";
import iconBank from "@/assets/images/icons/icon-bank.svg";
import downloadAppstoreIcon from "@/assets/images/icons/download-appstore-icon.svg";
import downloadPlaystoreIcon from "@/assets/images/icons/download-playstore-icon.svg";
import teamWale from "@/assets/images/team/wale_ceo.jpeg";
import teamTolu from "@/assets/images/team/tolu_coo.jpeg";
import teamAdama from "@/assets/images/team/adama_relations.jpeg";
import teamOyinn from "@/assets/images/team/oyinn_tech_lead.jpeg";
import teamElijah from "@/assets/images/team/elijah_marketing.jpeg";
import teamTimi from "@/assets/images/team/timi-design.jpeg";
import teamCharles from "@/assets/images/team/charles_finance.jpeg";
import teamTumi from "@/assets/images/team/tumi_compliance.jpeg";
import teamOsman from "@/assets/images/team/osman_it_support.jpeg";

// COMPANY
export interface Company {
  name: string;
  alias: string[];
  greenLogo: string | StaticImageData;
  lemonLogo: string | StaticImageData;
  slogan: string;
  description: string;
}

export interface Partner {
  name: string;
  image: string | StaticImageData;
}

export interface Regulated {
  text: string;
  icon: string | StaticImageData;
}

export interface Social {
  name: string;
  url: string;
}

export interface DownloadLinks {
  title: string;
  subtitle: string;
  text: string;
  appStore: {
    link: string;
    image: string | StaticImageData;
  };
  playStore: {
    link: string;
    image: string | StaticImageData;
  };
}

export interface About {
  title: string;
  intro: string[];
}

export interface Member {
  img?: string | StaticImageData;
  name: string;
  role: string;
  bio?: string;
  cardTheme?: "primary" | "secondary" | "accent";
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    email?: string;
  };
}

export interface Team {
  title: string;
  intro: string;
  members: Member[];
}

export interface SeoConfig {
  siteUrl: string;
  twitterHandle: string;
  themeColor: string;
  backgroundColor: string;
  shortDescription: string;
  fullDescription: string;
  keywords: string[];
  ogImagePath: string;
  appleTouchIconPath: string;
  manifestIcons?: {
    default: string;
    maskable: string;
  };
}

export interface SafulPayData {
  company: Company;
  seo: SeoConfig;
  partners: Partner[];
  regulated: Regulated;
  socials: Social[];
  downloads: DownloadLinks;
  aboutus: About;
  team: Team;
}

// COMPANY
export const companyData: SafulPayData = {
  company: {
    name: "SafulPay",
    alias: ["SafulGift", "SafulLink"],
    greenLogo: safulpayIconGreen,
    lemonLogo: safulpayIconLemon,
    slogan: "Finance Just Got Better",
    description:
      "Our mission is to provide seamless and secure mobile money solutions, empowering users to manage their finances with ease.",
  },
  seo: {
    siteUrl: "https://safulpay.com",
    twitterHandle: "@safulpay",
    themeColor: "#3a5646",
    backgroundColor: "#3a5646",
    shortDescription:
      "Sierra Leone's leading mobile money platform. Send, receive, pay bills and accept payments, all in one app.",
    fullDescription:
      "SafulPay is Sierra Leone's leading mobile money platform. Send money, pay bills, top up airtime, and receive international remittances in seconds. Built for users, agents, merchants, and developers.",
    keywords: [
      "mobile money",
      "Sierra Leone",
      "fintech",
      "send money",
      "pay bills",
      "remittance",
      "SafulPay",
      "digital payments",
      "agency banking",
      "merchant payments",
      "developer API",
    ],
    ogImagePath: "/og-image.png",
    appleTouchIconPath: "/apple-touch-icon.png",
    manifestIcons: {
      default: "/safulpay-icon.svg",
      maskable: "/safulpay-icon-green.svg",
    },
  },
  partners: [
    // {
    //   name: "V2 is Coming!",
    //   image: safulpayIconLemon2,
    // },
    // {
    //   name: "V2 is Coming!!",
    //   image: safulpayIconLemon3,
    // },
    {
      name: "QCell",
      image: logoQcell,
    },
    {
      name: "Orange",
      image: logoOrange,
    },
    {
      name: "Africell",
      image: logoAfricell,
    },
    {
      name: "Western Union",
      image: logoWu,
    },
    {
      name: "Ria Money",
      image: logoRia,
    },
    {
      name: "MoneyGram",
      image: logoMoneygram,
    },
    {
      name: "Visa & Mastercard",
      image: logoBankcard,
    },
    {
      name: "DSTV Subscriptions",
      image: logoDstv,
    },
    {
      name: "EDSA Meter",
      image: logoEdsa,
    },
  ],
  regulated: {
    text: "Licensed and Regulated by the Bank of Sierra Leone",
    icon: iconBank,
  },
  socials: [
    {
      name: "Twitter",
      url: "https://x.com/safulpay?s=21&t=C8AmSZA0skcAWJ-gYIUjFg",
    },
    { name: "Facebook", url: "https://www.facebook.com/share/18X8Vz9tuQ/" },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@safulpay?_t=ZM-8wNCWIrp8hr&_r=1",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/safulpay?igsh=eWl4YjFtOW5rcGQ=",
    },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/safulpay" },
  ],
  downloads: {
    title: `Download SafulPay Today`,
    subtitle: "Secure, Fast, and Easy Financial Management",
    text: "Get started with SafulPay by downloading the app on your device. Manage your money, make payments, and access all the features from anywhere, anytime. Download now and see what better finance feels like.",
    appStore: {
      link: "https://apps.apple.com/ng/app/safulpay/id6480344064",
      image: downloadAppstoreIcon,
    },
    playStore: {
      link: "https://play.google.com/store/apps/details?id=com.techengood.safulpay",
      image: downloadPlaystoreIcon,
    },
  },
  aboutus: {
    title: "Empowering Financial Inclusion with Innovation",
    intro: [
      "At SafulPay, we believe in changing how people manage, move, and interact with their money. Our mission is to make financial services secure, accessible, and easy to use for everyone, wherever they are. We've built a platform that simplifies digital payments, virtual cards, gift cards, and more, so every transaction just works.",
      "Our team of visionaries, designers, and engineers are committed to pushing things forward. By pairing transparency with strong security, including encryption and fraud detection, SafulPay delivers a financial experience you can trust. Whether you're sending money, paying bills, or buying gift cards, you stay in control.",
    ],
  },
  team: {
    title: "The People Building Sierra Leone's Financial Future",
    intro:
      "SafulPay is built by a team of specialists spanning finance, technology, compliance, and customer experience. Our founders set the strategic direction. Our CFO and Compliance lead keep us sound and regulated. Our CTO and IT team keep the platform fast and secure. And our product, design, marketing, and support experts make sure every interaction feels right. We all share one mission: financial inclusion for everyone.",
    members: [
      {
        img: teamWale,
        name: "Adewale Olukoya",
        role: "Co-Founder & CEO",
        bio: "Driving SafulPay's vision of accessible finance for every Sierra Leonean through bold leadership and strategic growth.",
        cardTheme: "accent",
        socials: {
          // twitter: "https://twitter.com/johndoe",
          // linkedin: "https://linkedin.com/in/johndoe",
        },
      },
      {
        img: teamTolu,
        name: "Toluwani Adepoju",
        role: "Co-Founder & COO",
        bio: "Toluwani turns strategy into results. He makes sure SafulPay's operations run smoothly and every team delivers on its goals.",
        cardTheme: "secondary",
        socials: {
          linkedin: "https://www.linkedin.com/in/toluwani-adepoju-45763a182/",
          github: "https://github.com/medal007",
        },
      },
      {
        img: teamAdama,
        name: "Adama Barrie",
        role: "Head of Customer Support",
        bio: "Adama is the voice of SafulPay's users. She makes sure every customer interaction is handled with empathy, speed, and care.",
        cardTheme: "primary",
        socials: {
          linkedin: "https://www.linkedin.com/in/adama-jalloh-493354272/",
        },
      },
      {
        img: teamOyinn,
        name: "Oyinlola Lawal",
        role: "Chief Technology Officer",
        bio: "Oyinlola architects the infrastructure that powers SafulPay, keeping it secure, scalable, and ready for Sierra Leone's digital future.",
        cardTheme: "secondary",
        socials: {
          linkedin: "https://www.linkedin.com/in/lawaloyinlola",
          github: "https://github.com/lawalOyinlola",
          twitter: "https://x.com/honeyzrich?s=21&t=C8AmSZA0skcAWJ-gYIUjFg",
        },
      },
      {
        img: teamCharles,
        name: "Charles Lamin",
        role: "Chief Finance Officer",
        bio: "Charles keeps SafulPay financially sound. He oversees fiscal strategy, budgeting, and makes sure the numbers always add up.",
        cardTheme: "primary",
        socials: {
          // linkedin: "https://linkedin.com/in/charleslamin",
        },
      },
      {
        img: teamElijah,
        name: "Elijah Mensah",
        role: "Head of Business Development",
        bio: "Expanding SafulPay's reach through strategic partnerships, market insights, and relentless business development.",
        cardTheme: "accent",
        socials: {
          // linkedin: "https://linkedin.com/in/emilyjohnson",
          // twitter: "https://twitter.com/emilyjohnson",
        },
      },

      {
        img: teamTimi,
        name: "Oluwatimileyin Bamise",
        role: "Product Design Engineer",
        bio: "Timi shapes SafulPay's visual identity, building UI systems and product experiences that feel intuitive and effortless.",
        cardTheme: "primary",
        socials: {
          linkedin: "https://www.linkedin.com/in/yusuf-oluwatimileyin",
          // email: "Yusuf.oluwatimileyin94@gmail.com",
        },
      },

      {
        img: teamOsman,
        name: "Osman Kamara",
        role: "Head of IT Support",
        bio: "Osman keeps SafulPay's systems running around the clock. He leads IT infrastructure and technical support operations.",
        cardTheme: "accent",
        socials: {
          linkedin: "https://www.linkedin.com/in/osman-chernor-kamara",
        },
      },
      {
        img: teamTumi,
        name: "Tumilara Akingbade",
        role: "Head of Compliance",
        bio: "Ensuring SafulPay stays fully regulated and compliant, protecting users and the platform at every turn.",
        cardTheme: "primary",
        socials: {
          linkedin: "https://www.linkedin.com/in/tumilara-akingbade-25036a40a",
        },
      },
    ],
  },
};

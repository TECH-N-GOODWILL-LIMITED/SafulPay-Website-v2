import { StaticImageData } from "next/image";
import safulpayIconGreen from "../assets/images/brand/safulpay-icon-green.svg";
import safulpayIconLemon from "../assets/images/brand/safulpay-icon-lemon.svg";
import logoQcell from "../assets/images/partners/logo-qcell.svg";
import logoOrange from "../assets/images/partners/logo-orange.svg";
import logoAfricell from "../assets/images/partners/logo-africell.svg";
import logoWu from "../assets/images/partners/logo-wu.svg";
import logoRia from "../assets/images/partners/logo-ria.svg";
import logoMoneygram from "../assets/images/partners/logo-moneygram.svg";
import logoBankcard from "../assets/images/partners/logo-bankcard.svg";
import logoDstv from "../assets/images/partners/logo-dstv.svg";
import logoEdsa from "../assets/images/partners/logo-edsa.svg";
import iconBank from "../assets/images/icons/icon-bank.svg";
import downloadAppstoreIcon from "../assets/images/icons/download-appstore-icon.svg";
import downloadPlaystoreIcon from "../assets/images/icons/download-playstore-icon.svg";
import teamWale from "../assets/images/team/wale_ceo.jpeg";
import teamTolu from "../assets/images/team/tolu_coo.jpeg";
import teamAdama from "../assets/images/team/adama_relations.jpeg";
import teamOyinn from "../assets/images/team/oyinn_tech_lead.jpeg";
import teamElijah from "../assets/images/team/elijah_marketing.jpeg";
import teamTimi from "../assets/images/team/timi-design.jpeg";
import teamCharles from "../assets/images/team/charles_finance.jpeg";
import teamTumi from "../assets/images/team/tumi_compliance.jpeg";
import teamOsman from "../assets/images/team/osman_it_support.jpeg";

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
      "Sierra Leone's leading mobile money platform. Send, receive, pay bills and accept payments — all in one app.",
    fullDescription:
      "SafulPay is Sierra Leone's leading mobile money platform — send money, pay bills, top up airtime, and receive international remittances in seconds. Built for users, agents, merchants, and developers.",
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
    text: "Get started with SafulPay by downloading the app on your device. Manage your money, make payments, and access all the powerful features from anywhere, anytime. Experience the convenience and security SafulPay brings to your financial life—download now!",
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
      "At SafulPay, we believe in transforming the way people manage, move, and interact with their money. Our mission is to make financial services secure, accessible, and user-friendly for everyone, no matter where they are. With cutting-edge technology, we’ve built a platform that simplifies digital payments, virtual cards, gift cards, and more, ensuring every transaction is seamless and safe.",
      "Our team of experts—visionaries, designers, and engineers—are committed to innovation. By blending transparency with top-tier security, including encryption and fraud detection, SafulPay delivers a financial experience you can trust. Whether you're sending money, paying bills, or securing gift cards, we put you in control of your financial world.",
    ],
  },
  team: {
    title: "The People Building Sierra Leone's Financial Future",
    intro:
      "SafulPay is built by a team of specialists spanning finance, technology, compliance, and customer experience. Our founders set the strategic direction; our CFO and Compliance lead keep us sound and regulated; our CTO and IT team keep the platform fast and secure; and our product, design, marketing, and customer support experts ensure every user interaction is seamless. One shared mission — financial inclusion for all.",
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
        bio: "Turning strategy into execution — Toluwani ensures SafulPay's operations run with precision and every team delivers.",
        cardTheme: "secondary",
        socials: {
          linkedin: "https://www.linkedin.com/in/toluwani-adepoju-45763a182/",
          github: "https://github.com/medal007",
          // twitter: "https://twitter.com/janesmith",
        },
      },
      {
        img: teamAdama,
        name: "Adama Barrie",
        role: "Head of Customer Support",
        bio: "The voice of SafulPay's users — Adama ensures every customer interaction is handled with empathy, speed, and care.",
        cardTheme: "primary",
        socials: {
          // twitter: "https://twitter.com/emilyjohnson",
          // linkedin: "https://linkedin.com/in/emilyjohnson",
        },
      },
      {
        img: teamOyinn,
        name: "Oyinlola Lawal",
        role: "Chief Technology Officer",
        bio: "Architecting the infrastructure that powers SafulPay — secure, scalable, and built for Sierra Leone's digital future.",
        cardTheme: "secondary",
        socials: {
          linkedin: "https://www.linkedin.com/in/lawaloyinlola",
          github: "https://github.com/lawalOyinlola",
          twitter: "https://x.com/honeyzrich?s=21&t=C8AmSZA0skcAWJ-gYIUjFg",
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
        img: teamCharles,
        name: "Charles Lamin",
        role: "Chief Finance Officer",
        bio: "Keeping SafulPay financially sound — Charles oversees fiscal strategy, budgeting, and financial transparency.",
        cardTheme: "primary",
        socials: {
          // linkedin: "https://linkedin.com/in/charleslamin",
        },
      },
      {
        img: teamTumi,
        name: "Tumilara Akingbade",
        role: "Head of Compliance",
        bio: "Ensuring SafulPay stays fully regulated and compliant, protecting users and the platform at every turn.",
        cardTheme: "primary",
        socials: {
          // linkedin: "https://linkedin.com/in/tumilaraakingbade",
        },
      },
      {
        img: teamOsman,
        name: "Osman Kamara",
        role: "Head of IT Support",
        bio: "Keeping SafulPay's systems running 24/7 — Osman leads IT infrastructure and technical support operations.",
        cardTheme: "accent",
        socials: {
          // linkedin: "https://linkedin.com/in/osmankamara",
        },
      },
      {
        img: teamTimi,
        name: "Oluwatimileyin Bamise",
        role: "Product Design Engineer",
        bio: "Crafting SafulPay's visual language — from UI systems to product experiences that feel intuitive and effortless.",
        cardTheme: "primary",
        socials: {
          linkedin: "https://www.linkedin.com/in/yusuf-oluwatimileyin/",
          // email: "Yusuf.oluwatimileyin94@gmail.com",
        },
      },
    ],
  },
};

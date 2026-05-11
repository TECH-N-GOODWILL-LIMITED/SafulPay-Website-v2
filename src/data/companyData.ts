import { StaticImageData } from "next/image";
import safulpayIconGreen from "../assets/images/safulpay-icon-green.svg";
import safulpayIconLemon from "../assets/images/safulpay-icon-lemon.svg";
import safulpayIconLemon2 from "../assets/images/safulpay-icon-lemon.svg";
import safulpayIconLemon3 from "../assets/images/safulpay-icon-lemon.svg";
import safulpayIconLemon4 from "../assets/images/safulpay-icon-lemon.svg";
import safulpayIconLemon5 from "../assets/images/safulpay-icon-lemon.svg";
import safulpayIconLemon6 from "../assets/images/safulpay-icon-lemon.svg";
import safulpayIconLemon7 from "../assets/images/safulpay-icon-lemon.svg";
import logoQcell from "../assets/images/partners/logo-qcell.svg";
import logoOrange from "../assets/images/partners/logo-orange.svg";
import logoAfricell from "../assets/images/partners/logo-africell.svg";
import logoWu from "../assets/images/partners/logo-wu.svg";
import logoRia from "../assets/images/partners/logo-ria.svg";
import logoMoneygram from "../assets/images/partners/logo-moneygram.svg";
import logoBankcard from "../assets/images/partners/logo-bankcard.svg";
import logoDstv from "../assets/images/partners/logo-dstv.svg";
import logoEdsa from "../assets/images/partners/logo-edsa.svg";
import iconBank from "../assets/images/icon-bank.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconWhatsapp from "../assets/images/icon-whatsapp.svg";
import iconTikTok from "../assets/images/icon-tik-tok.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";
import iconLinkedin from "../assets/images/icon-linkedin.svg";
import downloadAppstoreIcon from "../assets/images/download-appstore-icon.svg";
import downloadPlaystoreIcon from "../assets/images/download-playstore-icon.svg";
import teamWale from "../assets/images/team/wale-ceo.png";
import teamTolu from "../assets/images/team/tolu-cto.png";
import teamAdama from "../assets/images/team/adama-pro.png";
import teamOyinn from "../assets/images/team/oyinn-tech.png";
import teamElijah from "../assets/images/team/elijah-marketing.jpg";
import teamTimi from "../assets/images/team/timi-design.png";

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
  icon: string | StaticImageData;
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
  socials: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    github?: string;
    instagram?: string;
  };
}

export interface Team {
  title: string;
  intro: string;
  members: Member[];
}

export interface SafulPayData {
  company: Company;
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
    slogan: "Finance Just Got Better With ",
    description:
      "Our mission is to provide seamless and secure mobile money solutions, empowering users to manage their finances with ease.",
  },
  partners: [
    {
      name: "V2 is Coming!",
      image: safulpayIconLemon2,
    },
    {
      name: "V2 is Coming!!",
      image: safulpayIconLemon3,
    },
    {
      name: "V2 is Coming!!!",
      image: safulpayIconLemon4,
    },
    {
      name: "V2 is Coming!",
      image: safulpayIconLemon5,
    },
    {
      name: "V2 is Coming!!",
      image: safulpayIconLemon6,
    },
    {
      name: "V2 is Coming!!!",
      image: safulpayIconLemon7,
    },
    // {
    //   name: "QCell",
    //   image: logoQcell,
    // },
    // {
    //   name: "Orange",
    //   image: logoOrange,
    // },
    // {
    //   name: "Africell",
    //   image: logoAfricell,
    // },
    // {
    //   name: "Western Union",
    //   image: logoWu,
    // },
    // {
    //   name: "Ria Money",
    //   image: logoRia,
    // },
    // {
    //   name: "MoneyGram",
    //   image: logoMoneygram,
    // },
    // {
    //   name: "VISA & Master Card",
    //   image: logoBankcard,
    // },
    // {
    //   name: "DSTV Subscriptions",
    //   image: logoDstv,
    // },
    // {
    //   name: "EDSA Meter",
    //   image: logoEdsa,
    // },
  ],
  regulated: {
    text: "Licensed and Regulated by the Bank of Sierra Leone",
    icon: iconBank,
  },
  socials: [
    {
      name: "Twitter",
      url: "https://x.com/safulpay?s=21&t=C8AmSZA0skcAWJ-gYIUjFg",
      icon: iconTwitter,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/18X8Vz9tuQ/",
      icon: iconFacebook,
    },
    // {
    //   name: "Whatsapp",
    //   url: "https://www.whatsapp.com/safulpay",
    //   icon: iconWhatsapp,
    // },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@safulpay?_t=ZM-8wNCWIrp8hr&_r=1",
      icon: iconTikTok,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/safulpay?igsh=eWl4YjFtOW5rcGQ=",
      icon: iconInstagram,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/safulpay",
      icon: iconLinkedin,
    },
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
    title: "Innovators Driving Financial Transformation",
    intro:
      "At SafulPay, our team is composed of dedicated professionals with deep expertise in their respective fields. From visionary leadership to technical brilliance, every member brings a wealth of experience and passion to the table. Our CEO, COO, and Founder drive strategic growth and operational excellence, while our DevOps, UI/UX, and Full Stack Developer ensure seamless, secure, and user-friendly experiences. Together, we are united by a common goal: to revolutionize the way you manage your finances, delivering cutting-edge solutions with trust, transparency, and innovation at the core.",
    members: [
      {
        img: teamWale,
        name: "Adewale Olukoya",
        role: "Co-Founder & CEO",
        socials: {
          twitter: "https://twitter.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
        },
      },
      {
        img: teamTolu,
        name: "Toluwani Adepoju",
        role: "Co-Founder & COO",
        socials: {
          twitter: "https://twitter.com/janesmith",
          linkedin: "https://linkedin.com/in/janesmith",
          github: "https://github.com/janesmith",
        },
      },
      {
        img: teamAdama,
        name: "Adama Jalloh",
        role: "Customer Relations Officer",
        socials: {
          twitter: "https://twitter.com/emilyjohnson",
          linkedin: "https://linkedin.com/in/emilyjohnson",
        },
      },
      {
        img: teamOyinn,
        name: "Oyinlola Lawal",
        role: "Lead Software Engineer",
        socials: {
          twitter: "https://twitter.com/janesmith",
          github: "https://github.com/michaelbrown",
          linkedin: "https://linkedin.com/in/michaelbrown",
        },
      },
      {
        img: teamElijah,
        name: "Elijah Mensan",
        role: "Marketing Lead",
        socials: {
          twitter: "https://twitter.com/emilyjohnson",
          linkedin: "https://linkedin.com/in/emilyjohnson",
        },
      },
      {
        img: teamTimi,
        name: "Oluwatimileyin Bamise",
        role: "Product Design Engineer",
        socials: {
          github: "https://github.com/michaelbrown",
          linkedin: "https://linkedin.com/in/michaelbrown",
        },
      },
    ],
  },
};

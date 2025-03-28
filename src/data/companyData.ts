// COMPANY
export interface Company {
  name: string;
  greenLogo: string;
  lemonLogo: string;
  slogan: string;
  description: string;
}

export interface Partner {
  name: string;
  image: string;
}

export interface Regulated {
  text: string;
  icon: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface DownloadLinks {
  title: string;
  subtitle: string;
  text: string;
  appStore: {
    link: string;
    image: string;
  };
  playStore: {
    link: string;
    image: string;
  };
}

export interface About {
  title: string;
  intro: string[];
}

export interface Member {
  img?: string;
  name: string;
  role: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    github?: string;
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
    greenLogo: "/safulpay-icon-green.svg",
    lemonLogo: "/safulpay-icon-lemon.svg",
    slogan: "Finance Just Got Better With ",
    description:
      "Our mission is to provide seamless and secure mobile money solutions, empowering users to manage their finances with ease.",
  },
  partners: [
    {
      name: "Q Money",
      image: "/qcell-logo.svg",
    },
    {
      name: "Orange Money",
      image: "/orange-logo.svg",
    },
    {
      name: "Afri Money",
      image: "/africell-logo.svg",
    },
    {
      name: "Western Union",
      image: "/wu-logo.svg",
    },
    {
      name: "Ria Money",
      image: "/ria-logo.svg",
    },
    {
      name: "MoneyGram",
      image: "/mg-logo.svg",
    },
    {
      name: "VISA & Master Card",
      image: "/visa_master-logo.svg",
    },
    {
      name: "DSTV Subscriptions",
      image: "/dstv-logo.svg",
    },
    {
      name: "EDSA Meter",
      image: "/edsa-logo.svg",
    },
  ],
  regulated: {
    text: "Licensed and Regulated by the Bank of Sierra Leone",
    icon: "/icon-bank.svg",
  },
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/safulpay",
      icon: "/icon-linkedin.svg",
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com/safulpay",
      icon: "/icon-twitter.svg",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/safulpay",
      icon: "/icon-facebook.svg",
    },
    {
      name: "Whatsapp",
      url: "https://www.whatsapp.com/safulpay",
      icon: "/icon-whatsapp.svg",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/safulpay",
      icon: "/icon-tik-tok.svg",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/safulpay",
      icon: "/icon-instagram.svg",
    },
  ],
  downloads: {
    title: `Download SafulPay Today`,
    subtitle: "Secure, Fast, and Easy Financial Management",
    text: "Get started with SafulPay by downloading the app on your device. Manage your money, make payments, and access all the powerful features from anywhere, anytime. Experience the convenience and security SafulPay brings to your financial life—download now!",
    appStore: {
      link: "https://www.apple.com/app-store/safulpay",
      image: "/download-appstore-icon.svg",
    },
    playStore: {
      link: "https://play.google.com/store/apps/details?id=safulpay",
      image: "/download-playstore-icon.svg",
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
        img: "/team/wale-ceo.png",
        name: "Adeola Olukoya",
        role: "Founder & CEO",
        socials: {
          twitter: "https://twitter.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
        },
      },
      {
        img: "/team/tolu-cto.png",
        name: "Toluwani Adepoju",
        role: "Founder & COO",
        socials: {
          twitter: "https://twitter.com/janesmith",
          linkedin: "https://linkedin.com/in/janesmith",
          github: "https://github.com/janesmith",
        },
      },
      {
        img: "/team/oyinn-tech.png",
        name: "Oyinlola Lawal",
        role: "Lead Software Engineer",
        socials: {
          twitter: "https://twitter.com/janesmith",
          github: "https://github.com/michaelbrown",
          linkedin: "https://linkedin.com/in/michaelbrown",
        },
      },
      {
        img: "/team/adama-pro.png",
        name: "Adama Jalloh",
        role: "Customer Relations",
        socials: {
          twitter: "https://twitter.com/emilyjohnson",
          linkedin: "https://linkedin.com/in/emilyjohnson",
        },
      },
      {
        img: "/team/.png",
        name: "Elijah",
        role: "Marketing Lead",
        socials: {
          twitter: "https://twitter.com/emilyjohnson",
          linkedin: "https://linkedin.com/in/emilyjohnson",
        },
      },
      {
        img: "/team/timi-design.png",
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

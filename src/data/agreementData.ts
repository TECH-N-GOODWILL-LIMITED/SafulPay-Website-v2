// PRIVACY & TERMS AND CONDITIONS
export interface AgreementContent {
  subtitle?: string;
  text?: string;
  list?: string[];
}

export interface AgreementSection {
  title: string;
  content: AgreementContent[];
}

export interface AgreementData {
  title: string;
  lastUpdated: string;
  // effectiveDate?: string;
  sections: AgreementSection[];
}

/** Privacy Policy Data */
export const privacyPolicyData: AgreementData = {
  title: "Privacy Policy",
  lastUpdated: "Last Updated: March 2024",
  sections: [
    {
      title: "Privacy Statement",
      content: [
        {
          text: `Welcome to "SAFULPAY," a fintech product committed to safeguarding your privacy and providing secure financial services. This Privacy Policy aims to explain how we collect, use, disclose, and protect your personal information. By using "SAFULPAY," you consent to the practices described in this policy.`,
        },
      ],
    },
    {
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
        },
        {
          subtitle:
            "For Personal, Joint, Agent, and Merchant Accounts, we may collect the following:",
          list: [
            "Full Name.",
            "Contact Information (Email Address, • Phone Number).",
            "Date of Birth.",
            "Residential Address.",
            "Identification Information (e.g., Passport, ID card).",
          ],
        },
        {
          subtitle: "Financial Information",
        },
        {
          subtitle:
            "For Bank Transfer, Top-up, P2P Payment, and Bill Payment services, we collect:",
          list: ["Bank Account.", "Details of Transaction History."],
        },
        {
          subtitle: "Usage Data",
        },
        {
          subtitle: `We may gather information related to your use of "SAFULPAY," including:`,
          list: [
            "Login Times.",
            "Features Used.",
            "Device Information (e.g., device type, operating system).",
          ],
        },
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Provide Services",
        },
        {
          subtitle: "We use your information to:",
          list: [
            "Facilitate Bank Transfers, P2P Payments, Top-up and Bill Payments.",
            "Provide and improve our services.",
            "Personalize user experiences and offer .",
            "Comply with legal and regulatory requirements.",
            "Customize and enhance your experience with personalized services and relevant features.",
          ],
        },
      ],
    },
    {
      title: "Account Management",
      content: [
        {
          subtitle:
            "We process your data for managing Personal, Joint, Agent, and Merchant Accounts.",
        },
        {
          subtitle: "Security and Fraud Prevention",
        },
        {
          subtitle: "We monitor transactions for:",
          list: [
            "Detection of fraudulent activities.",
            "Ensuring the security and integrity of your account.",
          ],
        },
      ],
    },
    {
      title: "Customer Support",
      content: [
        {
          subtitle: "We utilize your information to:",
          list: ["Respond to inquiries and provide assistance."],
        },
      ],
    },
    {
      title: "Marketing and Promotions",
      content: [
        {
          text: "With your consent, we may send promotional offers, updates, and information about our services. You have the option to opt out of these communications at any time.",
        },
      ],
    },
    {
      title: "Information Sharing",
      content: [
        {
          subtitle: "Third-Party Service Providers",
          text: "We may share your information with trusted third-party service providers to assist in delivering our services. These providers are bound by confidentiality and data protection agreements.",
        },
        {
          subtitle: "Legal Compliance",
          text: "We may disclose information if required by law or in response to valid legal requests.",
        },
      ],
    },
    {
      title: "Data Security",
      content: [
        {
          text: "We employ industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.",
        },
      ],
    },
    {
      title: "Data Retention",
      content: [
        {
          text: "We retain your information for as long as necessary to fulfill the purposes outlined in this policy or as required by law.",
        },
      ],
    },
    {
      title: "Your Rights",
      content: [
        {
          subtitle: "You have the right to:",
          list: [
            "Access, correct, or delete your personal information.",
            "Request a copy of your data.",
            "Withdraw consent for data processing at any time.",
          ],
        },
      ],
    },
    {
      title: "Children's Privacy",
      content: [
        {
          text: `"SAFULPAY" is not intended for use by individuals under the age of 13.`,
        },
      ],
    },
    {
      title: "Changes to This Policy",
      content: [
        {
          text: "We may update this Privacy Policy from time to time. We will notify you of any significant changes via email or through the app.",
        },
      ],
    },
    {
      title: "Contact Us",
      content: [
        {
          text: "If you have any questions or concerns about this Privacy Policy, please contact us at info@safulpay.com Or +232-77-076235 / +232-77076237",
        },
      ],
    },
  ],
};

// TERMS & CONDITIONS
export const termsAndConditionsData: AgreementData = {
  title: "Terms & Conditions",
  lastUpdated: "Last Updated: November 2023",
  sections: [
    {
      title: "Acceptance of Terms",
      content: [
        {
          text: `By accessing and using the SafulPay application, you acknowledge and agree to these terms and conditions.
          
          If you do not agree with any part of these terms, you should refrain from using our services. Your use of the SafulPay application constitutes your acceptance of these terms and creates a binding legal agreement between you and SafulPay.`,
        },
      ],
    },
    {
      title: "Description of Services",
      content: [
        {
          text: `SafulPay is a financial application designed to empower users with quality financial services The specific features and functionalities of SafulPay are comprehensively outlined within the application.
          
          Please note that these features and functionalities may be subject to change, and SafulPay will notify users of any modifications in advance. It is the user's responsibility to stay informed about the services through the information provided within the application`,
        },
      ],
    },
    {
      title: "User Registration and Responsibilities",
      content: [
        {
          text: `To use Safulpay, users must create an account and provide accurate information.
          
          Users are responsible for maintaining the confidentiality of their account credentials and are liable for all activities performed under their account. Any activities conducted under a user's account will be deemed their responsibility, and they are liable for any consequences arising from unauthorized access or use.
          "SafulPay is not liable for unauthorized access to your account due to negligence on your part."`,
        },
      ],
    },
    {
      title: "Privacy and Data Security",
      content: [
        {
          text: `SafulPay is committed to protecting user privacy. Our Privacy Policy outlines how we collect, use, and protect user information. By using Safulpay, you consent to the terms of our Privacy Policy. We encourage users to review the Privacy Policy regularly to stay informed about how their data is handled.`,
        },
      ],
    },
    {
      title: "Security Measures",
      content: [
        {
          text: `SafulPay employs industry-standard security measures to protect user data. Users are obligated to adhere to prescribed security guidelines to maintain the integrity of their accounts and the overall security of the application.
          
          Any instances of unauthorized access or suspicious activities should be promptly reported to Safulpay, fostering a collaborative effort to uphold the security of the platform.`,
        },
      ],
    },
    {
      title: "Payments and Fees",
      content: [
        {
          text: `Users agree to pay all applicable fees associated with SafulPay services. Payment details, including fees and charges, are outlined within the application.`,
        },
      ],
    },
    {
      title: "Reversal",
      content: [
        {
          text: `SafulPay's reversal policies, essential for transaction reversals, are conveniently accessible within the application. 
          
          Users are obligated to comply with these policies when initiating the reversal of transactions or requesting refunds. It is imperative to review and understand the details provided within the application to ensure adherence to SafulPay's established procedures for transaction reversals.`,
        },
      ],
    },
    {
      title: "User Conduct",
      content: [
        {
          text: `Users must comply with all applicable laws and regulations when using Safulpay. Any use of the application for illegal or fraudulent activities is strictly prohibited.     "Violations may result in account suspension or legal action."`,
        },
      ],
    },
    {
      title: "Limitation of Liability & Disclaimers",
      content: [
        {
          text: `SafulPay is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services. Users acknowledge that the use of financial services involves inherent risks."SafulPay is not responsible for third-party service failures or transaction delays caused by external factors."`,
        },
      ],
    },

    {
      title: "Termination of Services",
      content: [
        {
          text: `SafulPay reserves the right to terminate or suspend user accounts for violations of these terms and conditions, fraudulent activities, or other reasons deemed necessary for the security and integrity of the application.`,
        },
      ],
    },
    {
      title: "Amendments and Updates",
      content: [
        {
          text: `SafulPay may update these terms and conditions from time to time. Users will be notified of significant changes, and continued use of SafulPay constitutes acceptance of the modified terms.
          
          By using Safulpay, you affirm that you have read, understood, and agree to be bound by these terms and conditions.`,
        },
      ],
    },
  ],
};

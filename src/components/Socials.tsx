import { companyData } from "../data/companyData";
import SocialIcon from "./SocialIcon";

interface SocialsProp {
  className?: string;
}

function Socials({ className }: SocialsProp) {
  const { socials } = companyData;

  return (
    <div className={`hide flex flex-col w-fit gap-2.5 p-2.5 ${className}`}>
      <p className="p-2.5 title-text text-white">Connect With Us</p>
      <div className="flex items-center gap-2">
        {socials.map((social, index) => (
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            aria-label={`Visit SafulPay's ${social.name} page`}
            className="p-2.5 bg-primary-shade-10 rounded-full transition-colors hover:bg-primary-color text-white max-md:bg-secondary-shade-10"
          >
            <SocialIcon platform={social.name} className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Socials;
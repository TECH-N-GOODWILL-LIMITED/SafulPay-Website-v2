import { companyData } from "../data/companyData";

interface SocialsProp {
  className?: string;
}

function Socials({ className }: SocialsProp) {
  const { socials } = companyData;

  return (
    <div className={`hide flex flex-col w-fit gap-2.5 p-2.5 ${className}`}>
      <p className="p-2.5 title-text text-white">Connect With Us</p>
      <div className="flex items-center gap-1.25">
        {socials.map((social, index) => (
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            aria-label={`Visit SafulPay's ${social.name} page`}
            className="w-full p-3 md:p-4 lg:p-5 bg-primary-shade-10 rounded-full transition-all hover:bg-primary-color max-md:bg-secondary-shade-10"
          >
            <img
              src={social.icon}
              alt={`${social.name} icon`}
              aria-hidden="true"
              className="w-7.5"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Socials;

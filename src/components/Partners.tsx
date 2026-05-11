import { companyData } from "../data/companyData";
import PartnerItem from "./PartnerItem";

function Partners() {
  const { partners } = companyData;

  return (
    <div
      role="region"
      aria-labelledby="partners-heading"
      className="flex items-center gap-2.5 bg-primary-color animate-scroll"
    >
      <h2 id="partners-heading" className="sr-only">
        Our Trusted Partners
      </h2>
      {/* Original set */}
      {partners.map((partner, index) => (
        <PartnerItem key={index} partner={partner} />
      ))}

      {/* Duplicate set */}
      {partners.map((partner, index) => (
        <PartnerItem key={`duplicate-${index}`} partner={partner} />
      ))}

      {/* Duplicate set 2 */}
      {partners.map((partner, index) => (
        <PartnerItem key={`duplicate-${index}-2`} partner={partner} />
      ))}
    </div>
  );
}

export default Partners;

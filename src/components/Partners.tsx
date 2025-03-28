import { companyData } from "../data/companyData";
import PartnerItem from "./PartnerItem";

function Partners() {
  const { partners } = companyData;

  return (
    <div className="flex items-center gap-2.5 bg-primary-color animate-scroll">
      {/* Original set */}
      {partners.map((partner, index) => (
        <PartnerItem key={index} name={partner.name} image={partner.image} />
      ))}

      {/* Duplicate set */}
      {partners.map((partner, index) => (
        <PartnerItem
          key={`duplicate-${index}`}
          name={partner.name}
          image={partner.image}
        />
      ))}

      {/* Duplicate set 2 */}
      {partners.map((partner, index) => (
        <PartnerItem
          key={`duplicate-${index}-2`}
          name={partner.name}
          image={partner.image}
        />
      ))}

      {/* Duplicate set 3 */}
      {partners.map((partner, index) => (
        <PartnerItem
          key={`duplicate-${index}-3`}
          name={partner.name}
          image={partner.image}
        />
      ))}
    </div>
  );
}

export default Partners;

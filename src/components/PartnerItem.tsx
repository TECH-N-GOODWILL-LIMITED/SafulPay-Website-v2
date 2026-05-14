import Image from "next/image";
import type { Partner } from "../data/companyData";

interface PartnerItemProps {
  partner: Partner;
}

function PartnerItem({ partner }: PartnerItemProps) {
  const { image, name } = partner;

  return (
    <div className="flex items-center gap-2.5 py-2.5 px-5 md:py-5">
      <Image
        unoptimized
        src={image}
        alt={`${name} logo`}
        width={40}
        height={40}
        className="w-10 h-10"
      />
      <span className="title-text text-white">{name}</span>
    </div>
  );
}

export default PartnerItem;

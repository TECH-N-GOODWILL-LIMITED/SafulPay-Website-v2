interface PartnerProps {
  name: string;
  image: string;
}

function PartnerItem({ image, name }: PartnerProps) {
  return (
    <div className="flex items-center gap-2.5 py-2.5 px-5 md:py-5">
      <img src={image} alt="" className="w-10 h-10" />
      <span className="title-text text-white">{name}</span>
    </div>
  );
}

export default PartnerItem;

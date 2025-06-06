interface TestimonialItemProps {
  name: string;
  location: string;
  title: string;
  text: string;
  isActive?: boolean;
}

function TestimonialItem({
  name,
  location,
  title,
  text,
  isActive = false,
}: TestimonialItemProps) {
  return (
    // <div className="bg-primary-shade-10 p-7.5 rounded-[50px] tracking-[-0.4px] max-w-100 self-center relative">
    <div
      className={`bg-primary-shade-10 p-7.5 rounded-[50px] tracking-[-0.4px] max-w-100 self-center relative transition-all duration-300 ${
        isActive ? "scale-105 shadow-lg" : "scale-100 opacity-90"
      }`}
    >
      <span className="text-[128px] font-extralight p-2.5 absolute tracking-[-2.56px] right-7.5 top-[-21px] bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">
        “
      </span>
      <h3 className="py-1.25 text-[18px] font-semibold tracking-[-0.18px]">
        {name}
      </h3>
      <h3 className="py-1.25 text-[14px] font-normal tracking-normal">
        {location}
      </h3>
      <h3 className="py-1.25 title-text">{title}</h3>
      <h3 className="py-1.25 small-text">{text}</h3>
    </div>
  );
}

export default TestimonialItem;

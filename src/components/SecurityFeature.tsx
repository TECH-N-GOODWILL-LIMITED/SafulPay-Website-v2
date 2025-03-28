import mockUp from "../assets/mockup-login.png";

interface FeatureProps {
  index: number;
  icon: string;
  title: string;
  description: string;
}

function SecurityFeature({ index, icon, title, description }: FeatureProps) {
  return (
    <>
      {index === 1 && (
        <div className="col-span-1 row-span-2 items-center justify-center hidden lg:flex">
          <img
            src={mockUp}
            alt="Login mockup image"
            className="w-full object-cover"
          />
        </div>
      )}

      <div className="max-w-75 p-2.5 flex flex-col gap-x-2.5 lg:w-75">
        <div className="py-5 px-7.5 bg-primary-shade-10 rounded-[30px] flex justify-center">
          <img src={icon} alt={`${title} icon`} className="w-10 md:w-15" />
        </div>
        <h3 className="secondary-heading py-2.5">{title}</h3>
        <p className="py-2.5">{description}</p>
      </div>
    </>
  );
}

export default SecurityFeature;

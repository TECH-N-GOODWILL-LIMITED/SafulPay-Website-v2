import { featuresData } from "../data/appContent";
import FeatureItem from "../components/FeatureItem";
import bigRay from "../assets/big-ray-illustration.svg";

function MoreFeatures() {
  const { featuresText, moreFeatures } = featuresData;

  return (
    <section className="section pt-25 max-md:pt-15 pb-50 max-md:pb-5 px-5 flex rounded-t-[30px] gap-25 max-md:gap-12.5 overflow-hidden relative flex-col items-center text-white">
      <div className="absolute w-full h-[67%] max-md:h-full rounded-b-[60px] bg-primary-color top-0"></div>
      <img
        src={bigRay}
        alt=""
        className="w-185 absolute top-[-120px] max-m:top-[-6%]"
      />

      <div className="z-2 flex flex-col gap-5">
        <h2 className="px-12.5 primary-heading">
          Explore Even More Powerful Features
        </h2>
        <p className="z-2 max-w-[1200px] px-12.5">{featuresText[1]}</p>
      </div>
      <div className="flex gap-10 z-2 justify-center max-lg:gap-5 max-md:flex-col max-md:gap-2.5">
        {moreFeatures.map((feature, index) => (
          <FeatureItem
            key={index}
            index={index}
            title={feature.title}
            image={feature.image}
          />
        ))}
      </div>
    </section>
  );
}

export default MoreFeatures;

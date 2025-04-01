import { featuresData } from "../data/appContent";
import bgIcon from "../assets/bg-logo-illustration.svg";
import illustrationImage from "../assets/illustration-image.png";
import KeyFeatures from "../components/KeyFeatures";
function Features() {
  const { featuresText, featuresIllustration } = featuresData;

  return (
    <section
      id="features"
      className="section gap-12.5 max-md:gap-2.5"
      data-section
    >
      <img
        className="max-w-147.5 absolute top-[-47px] left-[-68px] opacity-80 max-m:max-w-80! max-md:max-w-120 max-sm:max-w-100"
        src={bgIcon}
        alt=""
      />
      <div className="flex flex-col gap-5 py-2.5 max-w-250 max-sm:gap-2.5">
        <h2 className="p-2.5 primary-heading">Features You Will Get</h2>
        <KeyFeatures />
        <p className="p-2.5 mx-12.5 text-[clamp(12px,3.256vw,24px)]!">
          {featuresText[0]}
        </p>
      </div>
      <img
        src={illustrationImage}
        alt=""
        className="max-w-[min(90vw,1000px)] max-md:hidden"
      />
      <div className="max-w-90 p-7.5 hidden max-md:flex-center flex-col gap-2.5">
        {featuresIllustration.map((illustration, index) => (
          <img src={illustration} alt="" key={index} />
        ))}
      </div>
    </section>
  );
}

export default Features;

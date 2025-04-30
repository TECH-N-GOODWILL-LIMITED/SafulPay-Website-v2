import { useRef } from "react";
import SecurityFeature from "../components/SecurityFeature";
import { companyData } from "../data/companyData";
import { securityData } from "../data/appContent";
import { useHeaderAnimation } from "../hooks/animations/useHeaderAnimation";
import bgIcon from "../assets/bg-logo-illustration.svg";

function Security() {
  const securityRef = useRef<HTMLDivElement>(null);
  const { regulated } = companyData;
  const { title, intro, securityFeatures } = securityData;

  useHeaderAnimation({
    containerRef: securityRef,
  });

  return (
    <section
      ref={securityRef}
      role="region"
      aria-label={title}
      className="section pt-50 max-md:pt-0 gap-10 px-10 relative"
    >
      <h2 className="animateheader primary-heading py-2.5 px-10 tracking-[-2.1px]">
        {title}
      </h2>
      <p className="py-2.5 max-w-275 mx-2.5">{intro}</p>
      <figure className="max-w-250 w-full flex flex-col gap-2.5 px-7.5 py-5 bg-primary-shade-10 rounded-[30px] items-center justify-center relative overflow-hidden">
        <img
          className="max-w-147.5 absolute opacity-40 rotate-[133.24deg]"
          src={bgIcon}
          alt=""
          role="presentation"
        />
        <img src={regulated?.icon} alt="Bank icon" className="w-15" />
        <figcaption className="max-w-90 py-2.5 mx-2.5">
          {regulated?.text}
        </figcaption>
      </figure>
      <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-2.5 m:gap-5 lg:gap-10 max-w-283">
        {securityFeatures.map((feature, index) => (
          <SecurityFeature key={feature.title} data={feature} index={index} />
        ))}
      </div>
      <img
        className="max-w-147.5 absolute bottom-[-2%] right-[-28%] opacity-80  max-md:max-w-120 max-sm:max-w-100"
        src={bgIcon}
        alt=""
        role="presentation"
      />
    </section>
  );
}

export default Security;

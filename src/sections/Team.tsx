import { useRef } from "react";
import { companyData } from "../data/companyData";
import { useHeaderAnimation } from "../hooks/animations/useHeaderAnimation";
import bgIcon from "../assets/bg-logo-illustration.svg";
import AnimatedStep from "../hooks/animations/AnimatedStep";

function Team() {
  const { team } = companyData;
  const { title, intro, members } = team;

  const teamRef = useRef<HTMLDivElement>(null);

  useHeaderAnimation({
    containerRef: teamRef,
    bodySelector: ".animatebody",
  });

  return (
    <section
      role="region"
      aria-labelledby="team-heading"
      className="section relative"
    >
      <img
        className="max-w-147.5 absolute top-[-8%] right-[-24%] opacity-80 max-md:max-w-120 max-sm:max-w-100"
        src={bgIcon}
        alt=""
        aria-hidden="true"
        role="presentation"
      />
      <img
        className="max-w-147.5 absolute top-[6%] left-[-30%] opacity-80 max-md:max-w-120 max-sm:max-w-100"
        src={bgIcon}
        alt=""
        aria-hidden="true"
        role="presentation"
      />
      <img
        className="max-w-147.5 absolute bottom-[-12%] left-[-16%] opacity-80 max-md:max-w-120 max-sm:max-w-100"
        src={bgIcon}
        alt=""
        aria-hidden="true"
        role="presentation"
      />
      {/* <div className="max-w-250 flex-center flex-col gap-7.5 py-2.5 mx-12.5">
        <h1 className="p-2.5">
        Meet Our Team of <span className="text-primary-color">Experts</span>
        </h1>
        <h2 className="p-2.5 text-[clamp(16px,5.117vw,34px)] font-semibold tracking-[-1.36px] max-m:tracking-[-0.44px]">
        {title}
        </h2>
        
        <p className="p-2.5 w-full!">{intro}</p>
        
        <div className="w-fit grid grid-cols-3 gap-7.5 max-lg:grid-cols-2 max-md:flex max-md:overflow-x-scroll">
        {members.map((member, index) => (
          <div
          key={index}
          className="bg-[#f1f1f1] rounded-tr-[50px] rounded-bl-[50px] overflow-hidden"
          >
          <img
          src={member.img}
          alt=""
          className="w-full h-3/4 object-cover"
          />
          <div className="p-6.75">
          <p className="title-text">{member.name}</p>
          <p className="text-[14px]">{member.role}</p>
          </div>
          </div>
          ))}
          </div>
          </div> */}
      <div
        ref={teamRef}
        className="max-w-250 flex-center flex-col gap-7.5 py-2.5 mx-12.5 max-md:mx-5"
      >
        <h1 id="team-heading" className="animateheader p-2.5">
          Meet Our Team of
          <span className="text-primary-color">&nbsp; Experts</span>
        </h1>
        <h2 className="animatebody p-2.5 text-[clamp(16px,5.117vw,34px)] font-semibold tracking-[-1.36px] max-m:tracking-[-0.44px]">
          {title}
        </h2>

        {/* Intro Text (static, no overflow) */}
        <p className="animatebody p-2.5 w-full max-md:whitespace-normal max-md:overflow-visible">
          {intro}
        </p>

        {/* Scrollable team cards only */}
        <div className="w-full">
          <div className="grid grid-cols-3 gap-7.5 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:overflow-x-auto max-md:scrollbar-hide">
            {members.map((member, index) => (
              <AnimatedStep index={index}>
                <article
                  key={index}
                  aria-label={`Team member: ${member.name}, ${member.role}`}
                  className="min-w-[260px] h-full shrink-0 bg-[#f1f1f1] rounded-tr-[50px] rounded-bl-[50px] overflow-hidden"
                >
                  <div className="bg-red-200 h-3/4">
                    <img
                      src={member.img}
                      alt={`${member.name}'s photo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6.75">
                    <p className="title-text">{member.name}</p>
                    <p className="text-[14px]">{member.role}</p>
                  </div>
                </article>
              </AnimatedStep>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

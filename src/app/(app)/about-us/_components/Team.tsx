"use client";

import { useRef } from "react";
import { companyData } from "@/data/companyData";
import { useHeaderAnimation } from "@/hooks/animations/useHeaderAnimation";
import Member from "@/app/(app)/about-us/_components/Member";
import bgIcon from "@/assets/images/illustrations/bg-logo-illustration.svg";

function Team() {
  const teamRef = useRef<HTMLDivElement>(null);
  const { team } = companyData;
  const { title, intro, members } = team;

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
        className="max-w-147.5 h-auto absolute top-[-8%] right-[-24%] opacity-80 max-md:max-w-120 max-sm:max-w-100"
        src={bgIcon.src}
        alt=""
        aria-hidden="true"
        role="presentation"
        loading="lazy"
        decoding="async"
      />
      <img
        className="max-w-147.5 h-auto absolute top-[6%] left-[-30%] opacity-80 max-md:max-w-120 max-sm:max-w-100"
        src={bgIcon.src}
        alt=""
        aria-hidden="true"
        role="presentation"
        loading="lazy"
        decoding="async"
      />
      <img
        className="max-w-147.5 h-auto absolute bottom-[-12%] left-[-16%] opacity-80 max-md:max-w-120 max-sm:max-w-100"
        src={bgIcon.src}
        alt=""
        aria-hidden="true"
        role="presentation"
        loading="lazy"
        decoding="async"
      />
      <div
        ref={teamRef}
        className="max-w-250 flex-center flex-col gap-7.5 py-2.5 mx-12.5 max-md:mx-5"
      >
        <h1 id="team-heading" className="animateheader p-2.5">
          Meet the Team Behind
          <span className="text-primary-color">&nbsp;SafulPay</span>
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
              <Member key={index} data={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

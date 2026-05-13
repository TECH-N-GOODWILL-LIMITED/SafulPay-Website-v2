"use client";

import Image from "next/image";
import { useRef } from "react";
import type { TeamMember } from "../data/appContent";
import { useGsapCustomAnimation } from "../hooks/animations/useGsapCustomAnimation";

interface MemberProps {
  data: TeamMember;
  index: number;
}

function Member({ data, index }: MemberProps) {
  const memberRef = useRef<HTMLDivElement | null>(null);
  const { name, role, img } = data;

  useGsapCustomAnimation({
    containerRef: memberRef,
    targetSelector: ".member",
    from: { opacity: 0, y: 60, x: -20, scale: 0.9 },
    to: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
    },
    each: true,
    scrollTrigger: {
      start: "top 90%",
    },
  });

  return (
    <div ref={memberRef}>
      <div
        aria-label={`Team member: ${name}, ${role}`}
        className="member min-w-[260px] h-full shrink-0 bg-[#f1f1f1] rounded-tr-[50px] rounded-bl-[50px] overflow-hidden"
      >
        <div className="relative bg-primary-shade-5 h-3/4 overflow-hidden">
          {img && (
            <Image
              src={img}
              alt={`${name}'s photo`}
              height={300}
              unoptimized
              className="w-full h-85 object-cover object-bottom"
            />
          )}
        </div>
        <div className="p-6.75">
          <p className="title-text">{name}</p>
          <p className="text-[14px]">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default Member;

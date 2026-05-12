"use client";

import Image from "next/image";
import { useRef } from "react";
import type { TeamMember } from "../data/appContent";
import { useGsapCustomAnimation } from "../hooks/animations/useGsapCustomAnimation";
import { useViewportWidth } from "../hooks/useViewportWidth";

interface MemberProps {
  data: TeamMember;
  index: number;
}

function Member({ data, index }: MemberProps) {
  const memberRef = useRef<HTMLDivElement | null>(null);
  const { isMobile } = useViewportWidth();
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
      start: "top bottom-=50",
      end: "top center+=100",
      scrub: !isMobile ? 1 : false,
    },
  });

  return (
    <div ref={memberRef}>
      <div
        aria-label={`Team member: ${name}, ${role}`}
        className="member min-w-[260px] h-full shrink-0 bg-[#f1f1f1] rounded-tr-[50px] rounded-bl-[50px] overflow-hidden"
      >
        <div className="bg-primary-shade-5 h-3/4">
          {img && (
            <Image
              src={img}
              alt={`${name}'s photo`}
              className="w-full h-full object-cover"
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

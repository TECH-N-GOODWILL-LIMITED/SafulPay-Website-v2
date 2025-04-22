import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedStepProps {
  children: React.ReactNode;
  index: number;
}

function AnimatedStep({ children, index }: AnimatedStepProps) {
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stepRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(stepRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.6,
        ease: "power2.out",
        delay: index * 0.4, // optional stagger
      });
    }, stepRef);

    return () => ctx.revert();
  }, [index]);

  return <div ref={stepRef}>{children}</div>;
}

export default AnimatedStep;

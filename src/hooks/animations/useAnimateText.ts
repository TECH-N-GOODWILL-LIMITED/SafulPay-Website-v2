import { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export function useAnimateText({
  containerRef,
  text,
  finalText,
  duration = 1.8,
  delay = 0.2,
  ease = "power2.out",
  start = "top 80%",
  repeat = 0,
  yoyo = false,
}: {
  containerRef: React.RefObject<HTMLElement | null>;
  text: string | string[];
  finalText?: string;
  duration?: number;
  delay?: number;
  ease?: string;
  start?: string;
  repeat?: number;
  yoyo?: boolean;
}) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const texts = Array.isArray(text) ? [...text] : [text];
    if (finalText) texts.push(finalText);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none reset",
        },
        repeat,
        yoyo,
        onRepeat: () => {
          if (repeat % 2 !== 0 && !yoyo) {
            gsap.to(el, {
              text: texts[texts.length - 1],
              duration: 1.8,
              ease: "power2.out",
            });
          }
        },
        onComplete: () => {
          gsap.to(el, {
            text: texts[texts.length - 1],
            duration: 1.4,
            ease: "power2.out",
          });
        },
      });

      texts.forEach((t, i) => {
        tl.to(el, {
          text: t,
          duration,
          ease,
          delay: i === 0 ? delay : 0.1,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [
    containerRef,
    text,
    finalText,
    duration,
    delay,
    ease,
    start,
    repeat,
    yoyo,
  ]);
}

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reusable hook for seamless scroll-triggered fade-in animations.
 * Attach the returned ref to any section wrapper element.
 */
export function useScrollReveal(options?: {
  y?: number;
  duration?: number;
  start?: string;
  stagger?: number;
  childSelector?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const {
    y = 40,
    duration = 1,
    start = "top 85%",
    stagger = 0.12,
    childSelector,
  } = options ?? {};

  useEffect(() => {
    if (!ref.current) return;

    const targets = childSelector
      ? ref.current.querySelectorAll(childSelector)
      : ref.current;

    gsap.fromTo(
      targets,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger: childSelector ? stagger : 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === ref.current) t.kill();
      });
    };
  }, []);

  return ref;
}

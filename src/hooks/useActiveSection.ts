import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently in view using IntersectionObserver.
 * The section is "active" when its top crosses ~30% from the top of the viewport.
 */
export function useActiveSection(ids: string[], offset = 96) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!elements.length) return;

    // Manual scroll-spy: pick the section whose top is closest to (but above)
    // the offset line. More reliable than IO for arbitrary section heights.
    const compute = () => {
      const line = offset + 8;
      let current = elements[0].id;
      for (const el of elements) {
        const top = el.getBoundingClientRect().top;
        if (top - line <= 0) current = el.id;
        else break;
      }
      // If we're near the bottom of the page, force the last section active.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8
      ) {
        current = elements[elements.length - 1].id;
      }
      setActive((prev) => (prev === current ? prev : current));
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids.join("|"), offset]);

  return active;
}

/**
 * Smoothly scrolls to a section id, accounting for the sticky navbar height,
 * and updates the URL hash without jumping.
 */
export function scrollToId(id: string, offset = 80) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
  history.replaceState(null, "", `#${id}`);
}

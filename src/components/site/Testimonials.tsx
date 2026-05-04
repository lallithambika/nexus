import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

export function Testimonials() {
  const [i, setI] = useState(0);
  const items = site.testimonials;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setI((p) => (p + 1) % items.length), 6500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [items.length]);

  const go = (n: number) => {
    setI((n + items.length) % items.length);
    if (timer.current) clearInterval(timer.current);
  };

  return (
    <section className="py-24 md:py-32 bg-[color-mix(in_oklab,var(--frost)_28%,transparent)] border-y hairline">
      <div className="container-x">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px w-6 bg-[var(--deep)]/30" />
          <span className="text-xs uppercase tracking-[0.18em] text-[var(--deep)]/60">
            Community Pulse
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <h2 className="font-display font-semibold text-[var(--deep)] text-3xl md:text-4xl leading-[1.05] tracking-[-0.03em] text-balance">
              Live sponsor and attendee sentiment from previous editions.
            </h2>
          </div>
          <div className="md:col-span-8 relative">
            <div className="relative min-h-[260px] md:min-h-[220px]">
              {items.map((t, idx) => (
                <blockquote
                  key={idx}
                  aria-hidden={idx !== i}
                  className={[
                    "absolute inset-0 transition-opacity duration-700",
                    idx === i ? "opacity-100" : "opacity-0 pointer-events-none",
                  ].join(" ")}
                >
                  <p className="font-display font-medium text-[var(--deep)] text-xl md:text-[26px] leading-[1.35] tracking-[-0.015em] text-balance">
                    “{t.quote}”
                  </p>
                  <footer className="mt-8 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-[var(--deep)] text-[var(--frost)] grid place-items-center font-display font-semibold text-xs">
                      {t.name
                        .split(" ")
                        .slice(0, 2)
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[var(--deep)]">
                        {t.name}
                      </div>
                      <div className="text-xs text-[var(--deep)]/55">{t.title}</div>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-2">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => go(idx)}
                    aria-label={`Show testimonial ${idx + 1}`}
                    className={[
                      "h-1.5 rounded-full transition-all duration-300",
                      idx === i ? "w-8 bg-[var(--deep)]" : "w-2 bg-[var(--deep)]/25",
                    ].join(" ")}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => go(i - 1)}
                  aria-label="Previous"
                  className="h-9 w-9 rounded-full border hairline grid place-items-center text-[var(--deep)]/70 hover:text-[var(--deep)] hover:border-[var(--deep)]/30 transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={() => go(i + 1)}
                  aria-label="Next"
                  className="h-9 w-9 rounded-full border hairline grid place-items-center text-[var(--deep)]/70 hover:text-[var(--deep)] hover:border-[var(--deep)]/30 transition-colors"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { site } from "@/content/site";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function WhySponsor() {
  const headerRef = useScrollReveal({ y: 30, duration: 0.9 });
  const gridRef = useScrollReveal({ y: 40, duration: 0.7, start: "top 80%", childSelector: ".sponsor-card", stagger: 0.1 });

  return (
    <section id="sponsor" className="py-24 md:py-32">
      <div className="container-x">
        <div ref={headerRef} className="max-w-3xl mb-14">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[var(--deep)]/30" />
            <span className="text-xs uppercase tracking-[0.18em] text-[var(--deep)]/60">
              Why Sponsor Us
            </span>
          </div>
          <h2 className="mt-5 font-display font-semibold text-[var(--deep)] text-3xl md:text-[44px] leading-[1.05] tracking-[-0.03em] text-balance">
            Premium positioning with measurable outcomes.
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[color-mix(in_oklab,var(--deep)_10%,transparent)] overflow-hidden"
          style={{ borderRadius: "2px" }}
        >
          {site.whySponsor.map((w) => (
            <div
              key={w.n}
              className="sponsor-card group bg-background p-7 md:p-8 transition-all duration-300 hover:bg-[var(--deep)] cursor-pointer"
            >
              <div className="font-mono text-xs text-[var(--sea)] group-hover:text-[var(--frost)] tnum transition-colors duration-300">
                {w.n}
              </div>
              <h3 className="mt-5 font-display font-semibold text-[var(--deep)] group-hover:text-white text-lg transition-colors duration-300">
                {w.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--deep)]/70 group-hover:text-white/60 transition-colors duration-300">
                {w.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

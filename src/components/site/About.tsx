import { site } from "@/content/site";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const { kicker, title, paragraphs, audience } = site.about;
  const leftRef = useScrollReveal({ y: 30, duration: 0.9 });
  const rightRef = useScrollReveal({ y: 40, duration: 1, start: "top 80%" });
  const cardsRef = useScrollReveal({ y: 30, duration: 0.7, start: "top 80%", childSelector: ".audience-card", stagger: 0.08 });

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div ref={leftRef} className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[var(--deep)]/30" />
              <span className="text-xs uppercase tracking-[0.18em] text-[var(--deep)]/60">
                {kicker}
              </span>
            </div>
            <h2 className="mt-6 font-display font-semibold text-[var(--deep)] text-3xl md:text-[44px] leading-[1.05] tracking-[-0.03em] text-balance">
              {title}
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-2">
            <div ref={rightRef} className="space-y-5 text-[15px] md:text-base leading-relaxed text-[var(--deep)]/75">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0B2E33]/40 mb-8">
                Who Will Attend
              </h3>
              <div ref={cardsRef} className="grid sm:grid-cols-2 gap-3">
                {audience.map((a) => (
                  <div
                    key={a}
                    className="audience-card group flex items-center gap-4 p-5 bg-white/40 backdrop-blur-xl border border-[#0B2E33]/5 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#0B2E33]/5 hover:-translate-y-1 cursor-default"
                    style={{ borderRadius: '2px' }}
                  >
                    <div className="h-2 w-2 rounded-full bg-[#4F7C82] transition-transform duration-300 group-hover:scale-150 group-hover:bg-[#0B2E33]" />
                    <span className="text-sm font-semibold text-[#0B2E33] transition-colors duration-300 group-hover:text-[#0B2E33]">
                      {a}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

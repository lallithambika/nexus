import { site } from "@/content/site";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Speakers() {
  const headerRef = useScrollReveal({ y: 30, duration: 0.9 });
  const gridRef = useScrollReveal({ y: 50, duration: 0.8, start: "top 80%", childSelector: ".speaker-card", stagger: 0.15 });

  return (
    <section id="speakers" className="py-24 md:py-32 bg-[var(--frost)]">
      <div className="container-x">
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-[var(--deep)] font-display mb-6">
            Meet the <span className="text-[var(--sea)]">voices</span> of NexusCon.
          </h2>
          <p className="text-[var(--sea)] max-w-2xl mx-auto text-lg md:text-xl font-medium opacity-80">
            A premium lineup of experts and practitioners shaping the future of Cloud, AI, and Distributed Systems.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {site.speakers.slice(0, 4).map((s, i) => (
            <div 
              key={i} 
              className="speaker-card group relative h-[450px] overflow-hidden bg-[var(--deep)] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(11,46,51,0.35)]"
              style={{ borderRadius: '4px' }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={s.image} 
                  alt={s.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep)] via-[var(--deep)]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--sea)] mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  Featured Speaker
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                  {s.name === "To be announced" ? `Speaker #0${i + 1}` : s.name}
                </h3>
                <p className="text-sm text-white/60 font-medium group-hover:text-white/80 transition-colors">
                  {s.name === "To be announced" ? "Coming Soon" : s.role}
                </p>
              </div>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-[var(--sea)] transition-all duration-500 w-0 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

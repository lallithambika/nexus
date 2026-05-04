import { useScrollReveal } from "@/hooks/useScrollReveal";

const logos = [
  { name: "Microsoft", src: "/logos/microsoft.svg" },
  { name: "GitHub", src: "/logos/github.svg" },
  { name: "Cloudera", src: "/logos/cloudera.svg" },
  { name: "Neon", src: "/logos/neon.svg" },
  { name: "Elastic", src: "/logos/elastic.svg" },
  { name: "ID8NXT", src: "/logos/id8nxt.svg" },
  { name: "Azure", src: "/logos/azure.svg" },
  { name: "Polaris", src: "/logos/polaris.svg" },
  { name: "Redis", src: "/logos/redis.svg" },
  { name: "Docker", src: "/logos/docker.svg" },
];

export function SponsorMarquee() {
  const doubled = [...logos, ...logos];
  const headerRef = useScrollReveal({ y: 30, duration: 0.9 });
  const boxRef = useScrollReveal({ y: 50, duration: 1, start: "top 85%" });

  return (
    <section className="py-20 md:py-28 bg-[var(--frost)]">
      <div className="container-x">
        <div ref={headerRef} className="text-center mb-14">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--sea)]">
            Previous Sponsors
          </span>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-[var(--deep)] font-display mt-4">
            Brands that backed earlier{" "}
            <span className="text-[var(--sea)]">TechNexus</span> editions
          </h3>
        </div>
      </div>

      <div className="container-x">
        <div
          ref={boxRef}
          className="bg-[var(--deep)] overflow-hidden relative"
          style={{ borderRadius: "2px", padding: "44px 0" }}
        >
          {/* Fade edges */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, var(--deep) 0%, transparent 8%, transparent 92%, var(--deep) 100%)",
            }}
          />

          {/* Scrolling track */}
          <div className="flex items-center animate-marquee-sponsors">
            {doubled.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center mx-10 md:mx-14"
                style={{ minWidth: "180px" }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-14 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110 transform"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-sponsors {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-sponsors {
          animation: marquee-sponsors 30s linear infinite;
          width: max-content;
        }
        .animate-marquee-sponsors:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

import { site } from "@/content/site";

export function Sponsorship() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[var(--deep)]/30" />
            <span className="text-xs uppercase tracking-[0.18em] text-[var(--deep)]/60">
              Sponsorship Details
            </span>
          </div>
          <h2 className="mt-5 font-display font-semibold text-[var(--deep)] text-3xl md:text-[44px] leading-[1.05] tracking-[-0.03em] text-balance">
            Choose the package that matches your brand goals.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {site.packages.map((p) => (
            <div
              key={p.name}
              className={[
                "rounded-3xl p-8 md:p-10 border hairline transition-colors",
                p.featured
                  ? "bg-[var(--deep)] text-[var(--frost)] border-transparent"
                  : "bg-background text-[var(--deep)]",
              ].join(" ")}
            >
              <div
                className={[
                  "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-full",
                  p.featured
                    ? "bg-[var(--frost)]/10 text-[var(--frost)]/85"
                    : "bg-[color-mix(in_oklab,var(--frost)_45%,transparent)] text-[var(--deep)]/70",
                ].join(" ")}
              >
                {p.tag}
              </div>
              <h3
                className={[
                  "mt-6 font-display font-semibold tracking-[-0.02em] text-3xl md:text-4xl",
                  p.featured ? "text-[var(--frost)]" : "text-[var(--deep)]",
                ].join(" ")}
              >
                {p.name}
              </h3>
              <ul className="mt-8 space-y-4">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span
                      className={[
                        "mt-2 h-1.5 w-1.5 rounded-full shrink-0",
                        p.featured ? "bg-[var(--frost)]/70" : "bg-[var(--sea)]",
                      ].join(" ")}
                    />
                    <span className={p.featured ? "text-[var(--frost)]/85" : "text-[var(--deep)]/75"}>
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#rsvp"
                className={[
                  "mt-10 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform duration-200 hover:scale-[1.02]",
                  p.featured
                    ? "bg-[var(--frost)] text-[var(--deep)]"
                    : "bg-[var(--deep)] text-[var(--frost)]",
                ].join(" ")}
              >
                Request prospectus <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

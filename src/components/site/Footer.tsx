import { site } from "@/content/site";
import { track, PROSPECTUS_URL } from "@/lib/track";

export function Footer() {
  return (
    <footer className="bg-[var(--deep)] text-[var(--frost)]">
      <div className="container-x py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--frost)]" />
              <span className="font-display font-semibold tracking-tight">
                {site.brand}
              </span>
            </div>
            <h3 className="mt-8 font-display font-semibold text-3xl md:text-5xl tracking-[-0.03em] leading-[1.05] text-balance max-w-xl">
              Be the first to know when RSVP opens.
            </h3>
            <a
              href="#rsvp"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--frost)] text-[var(--deep)] px-5 py-3 text-sm font-medium transition-transform duration-200 hover:scale-[1.02]"
            >
              Notify me <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.16em] text-[var(--frost)]/55">
              Explore
            </div>
            <ul className="mt-5 space-y-3 text-sm text-[var(--frost)]/85">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-[var(--frost)]">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={PROSPECTUS_URL}
                  download
                  onClick={() => track("prospectus_download", { asset: PROSPECTUS_URL, ref: "footer" })}
                  className="inline-flex items-center gap-1.5 hover:text-[var(--frost)]"
                >
                  Download Prospectus
                  <span aria-hidden>↓</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.16em] text-[var(--frost)]/55">
              Contact
            </div>
            <ul className="mt-5 space-y-3 text-sm text-[var(--frost)]/85">
              <li>
                <a
                  href={`mailto:${site.rsvp.contact}`}
                  className="hover:text-[var(--frost)]"
                >
                  {site.rsvp.contact}
                </a>
              </li>
              <li>NIMHANS Convention Centre</li>
              <li>Bengaluru, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--frost)]/15 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-[var(--frost)]/55">
          <span>© {new Date().getFullYear()} {site.brand}. All rights reserved.</span>
          <span className="tnum">June 2026 · Bengaluru</span>
        </div>
      </div>
    </footer>
  );
}

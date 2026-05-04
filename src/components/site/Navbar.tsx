import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { useActiveSection, scrollToId } from "@/hooks/useActiveSection";
import { track, PROSPECTUS_URL } from "@/lib/track";
import { getAssetPath } from "@/lib/assets";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SECTION_IDS = ["top", "overview", "about", "speakers", "sponsor", "rsvp"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS, 110);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToId(id);
  };

  const handleProspectus = (e: React.MouseEvent<HTMLAnchorElement>) => {
    track("prospectus_download", { asset: PROSPECTUS_URL, ref: "navbar" });
    // Let default anchor behavior continue (download attribute handles it).
    void e;
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      <div className="container-x pt-6 flex justify-center">
        <nav
          className={[
            "pointer-events-auto flex items-center justify-between gap-4 rounded-full border border-white/40 bg-white/40 backdrop-blur-2xl px-2 py-2 transition-all duration-500 w-full max-w-6xl shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]",
            scrolled ? "translate-y-[-4px] scale-[0.98]" : "mt-2",
          ].join(" ")}
        >
          {/* Logo Section */}
          <a
            href="#top"
            onClick={(e) => handleNav(e, "top")}
            className="flex items-center gap-2 pl-6 shrink-0 group transition-transform duration-300 hover:scale-105"
          >
            <img
              src={getAssetPath("/images/logo.png")}
              alt="NexusCon '26"
              className="h-16 w-auto object-contain filter drop-shadow-sm transition-all"
            />
          </a>

          {/* Navigation Links */}
          <ul className="hidden lg:flex items-center gap-1.5 bg-black/[0.03] rounded-full p-1 border border-black/[0.03]">
            {site.nav.map((n) => {
              const id = n.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={n.href}
                    onClick={(e) => handleNav(e, id)}
                    aria-current={isActive ? "true" : undefined}
                    className={[
                      "px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.15em] transition-all duration-300 ease-out transform-gpu flex items-center justify-center min-w-[100px]",
                      isActive
                        ? "bg-[#4F7C82] text-white shadow-[0_4px_12px_rgba(79,124,130,0.3)] scale-[1.02]"
                        : "text-[#0B2E33]/40 hover:text-[#0B2E33] hover:bg-black/[0.04] hover:-translate-y-0.5",
                    ].join(" ")}
                  >
                    {n.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 pr-2">
            <a
              href={PROSPECTUS_URL}
              download
              onClick={handleProspectus}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/5 bg-black/[0.03] text-[9px] font-black uppercase tracking-[0.15em] text-[#0B2E33]/60 transition-all duration-300 ease-out transform-gpu hover:-translate-y-0.5 hover:bg-black/[0.06] hover:text-[#0B2E33] active:scale-[0.98]"
            >
              Download Prospectus
            </a>

            <a
              href="#rsvp"
              onClick={(e) => handleNav(e, "rsvp")}
              className="inline-flex items-center gap-2 bg-[#0B2E33] text-white px-8 py-3.5 text-[9px] font-black uppercase tracking-[0.15em] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_8px_20px_rgba(11,46,51,0.25)] active:scale-95 shadow-lg shadow-black/10 rounded-full"
            >
              Join Waitlist
            </a>

            <Sheet>
              <SheetTrigger asChild>
                <button className="lg:hidden p-3 text-[#0B2E33] hover:bg-black/5 rounded-full transition-colors group">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-l-black/5 bg-white/95 backdrop-blur-2xl">
                <SheetHeader>
                  <SheetTitle className="text-left font-display text-[#0B2E33] text-2xl font-black uppercase tracking-tighter">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 mt-10">
                  {site.nav.map((n) => {
                    const id = n.href.replace("#", "");
                    const isActive = active === id;
                    return (
                      <a
                        key={id}
                        href={n.href}
                        onClick={(e) => handleNav(e, id)}
                        className={[
                          "text-xs font-black uppercase tracking-[0.2em] py-5 px-8 transition-all duration-300",
                          isActive
                            ? "bg-[#0B2E33] text-white shadow-lg"
                            : "text-[#0B2E33]/60 hover:bg-black/5"
                        ].join(" ")}
                        style={{ borderRadius: '2px' }}
                      >
                        {n.label}
                      </a>
                    );
                  })}
                  <a
                    href={PROSPECTUS_URL}
                    download
                    onClick={handleProspectus}
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-black/5 bg-black/[0.03] px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#0B2E33]/70 transition-all duration-300 ease-out transform-gpu hover:-translate-y-0.5 hover:bg-black/[0.06] hover:text-[#0B2E33] active:scale-[0.98]"
                  >
                    Download Prospectus
                  </a>
                  <a
                    href="#rsvp"
                    onClick={(e) => handleNav(e, "rsvp")}
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-[#0B2E33] text-white px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all rounded-full"
                  >
                    Join Waitlist
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}

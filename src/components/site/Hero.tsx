import { site } from "@/content/site";
import Grainient from "@/components/ui/Grainient";

export function Hero() {
  const { eyebrow, titleLines, meta, description, cta } = site.hero;
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <Grainient
          className="absolute inset-0"
          color1="#DFF7F9"
          color2="#4F7C82"
          color3="#0B2E33"
          timeSpeed={1.7}
          colorBalance={0.0}
          warpStrength={1.0}
          warpFrequency={5.0}
          warpSpeed={2.8}
          warpAmplitude={50.0}
          blendAngle={0.0}
          blendSoftness={0.05}
          rotationAmount={500.0}
          noiseScale={2.0}
          grainAmount={0.08}
          grainScale={2.0}
          grainAnimated={false}
          contrast={1.2}
          gamma={1.0}
          saturation={1.0}
          centerX={0.0}
          centerY={0.0}
          zoom={0.9}
        />
      </div>
      <div className="container-x relative z-10 flex flex-col items-center">
        {/* Main Card - Edged Square as requested */}
        <div className="w-full max-w-[760px] min-h-[320px] bg-white/95 backdrop-blur-3xl border border-black/5 shadow-[0_28px_80px_rgba(15,23,42,0.08)] p-6 md:p-14 flex flex-col justify-center items-center text-center fade-up rounded-[36px] transition-all duration-500 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_30px_90px_rgba(15,23,42,0.14)]">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.03em] text-[#0B2E33] font-display leading-[0.92]">
              NexusCon Bengaluru '26
            </h2>

            <div className="h-1 w-20 bg-[#0B2E33]/10 rounded-full my-4" />

            <h3 className="text-lg md:text-2xl font-semibold text-[#0B2E33]/85 tracking-tight">
              Where India's Tech Community Converges
            </h3>

            <p className="mt-6 max-w-[600px] text-sm md:text-base leading-8 text-[#4F7C82]">
              A premium conference experience for AI, Cloud, DevTools and future-facing builders — created for engineers, leaders, founders and ambitious teams.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#rsvp"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0B2E33] text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#31575d] hover:shadow-[0_14px_32px_rgba(11,46,51,0.22)] active:scale-[0.98] rounded-full"
            >
              Join the Waitlist
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white border border-black/10 text-[#0B2E33] px-10 py-4 text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#0B2E33]/30 hover:bg-black/[0.04] active:scale-[0.98] rounded-full"
            >
              Explore Event
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

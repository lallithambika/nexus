import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Overview } from "@/components/site/Overview";
import { About } from "@/components/site/About";
import PastEventsMasonry from "@/components/site/PastEventsMasonry";
import { Stats } from "@/components/site/Stats";
import { Speakers } from "@/components/site/Speakers";
import { SponsorMarquee } from "@/components/site/SponsorMarquee";
import { WhySponsor } from "@/components/site/WhySponsor";
import { Testimonials } from "@/components/site/Testimonials";
import { Sponsorship } from "@/components/site/Sponsorship";
import { RSVP } from "@/components/site/RSVP";
import { Footer } from "@/components/site/Footer";

import { Grainient } from "@/components/ui/Grainient";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[#EBF4F6] text-[#0B2E33] relative">
      <style>{`
        :root {
          --deep: #0B2E33;
          --sea: #4F7C82;
          --frost: #EBF4F6;
          --text-muted: #4F7C82;
        }
      `}</style>
      {/* Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <Grainient
          color1="#B8E3E9"
          color2="#4F7C82"
          color3="#0B2E33"
          timeSpeed={0.08}
          colorBalance={0.1}
          warpStrength={0.3}
          warpFrequency={1.5}
          warpSpeed={0.3}
          warpAmplitude={20.0}
          blendAngle={45.0}
          blendSoftness={0.1}
          rotationAmount={30.0}
          noiseScale={1.5}
          grainAmount={0.05}
          grainScale={1.5}
          contrast={1.1}
          zoom={0.9}
        />
        {/* Subtle light overlay */}
        <div className="absolute inset-0 bg-[#EBF4F6]/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Overview />
        <About />
        <PastEventsMasonry />
        <Stats />
        <Speakers />
        <SponsorMarquee />
        <WhySponsor />
        <Testimonials />
        <Sponsorship />
        <RSVP />
        <Footer />
      </div>
    </main>
  );
}

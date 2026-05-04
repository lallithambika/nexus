import React, { useEffect, useRef } from 'react';
import { site } from "@/content/site";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function EventOverviewCards() {
  const cards = site.overview.slice(0, 5);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    // Seamless entry animation
    gsap.fromTo(containerRef.current, 
      { 
        opacity: 0, 
        y: 40,
        scale: 0.98
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Header elements animation
    gsap.fromTo(sectionRef.current.querySelectorAll('.header-item'),
      { opacity: 0, x: -20 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%"
        }
      }
    );
  }, []);

  return (
    <section id="overview" ref={sectionRef} className="py-24 md:py-32 overflow-hidden">
      <div className="container-x">
        {/* Top Header Row */}
        <div className="flex items-center justify-between mb-10 px-1">
          <h2 className="header-item text-[10px] font-black uppercase tracking-[0.4em] text-[#0B2E33]/40">
            Event Overview
          </h2>
          <div className="header-item text-[10px] font-black uppercase tracking-[0.4em] text-[#0B2E33]/40">
            01 / 09
          </div>
        </div>

        {/* Horizontal Bar Container - Edged Square as requested */}
        <div 
          ref={containerRef}
          className="relative w-full bg-white border border-[#0B2E33]/5 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden"
          style={{ borderRadius: '2px' }}
        >
          <div className="flex flex-col lg:flex-row w-full divide-y lg:divide-y-0 lg:divide-x divide-[#0B2E33]/5">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="group flex-1 p-8 md:p-10 lg:p-14 flex flex-col relative transition-all duration-500 ease-out hover:bg-[#0B2E33]/[0.02] cursor-default"
              >
                {/* Hover line indicator */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#4F7C82] scale-x-0 transition-transform duration-500 ease-out origin-left group-hover:scale-x-100" />
                
                {/* Label */}
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0B2E33]/30 mb-8 transition-colors duration-300 group-hover:text-[#4F7C82]">
                  {card.label}
                </span>

                {/* Title/Value */}
                <h3 className="text-[20px] md:text-[22px] font-bold text-[#0B2E33] leading-tight mb-3 tracking-tight transition-transform duration-500 group-hover:translate-x-1">
                  {card.value}
                </h3>

                {/* Subtext/Note */}
                <p className="text-[12px] font-medium text-[#0B2E33]/40 transition-opacity duration-300 group-hover:opacity-100">
                  {card.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


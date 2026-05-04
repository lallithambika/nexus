import React from 'react';
import Masonry from '@/components/ui/Masonry';
import { getAssetPath } from "@/lib/assets";

const items = [
  { id: "1", img: getAssetPath("/past/event1.jpg"), url: "#", height: 500 },
  { id: "2", img: getAssetPath("/past/event2.jpg"), url: "#", height: 300 },
  { id: "3", img: getAssetPath("/past/event3.jpg"), url: "#", height: 600 },
  { id: "4", img: getAssetPath("/past/event4.jpg"), url: "#", height: 400 },
  { id: "5", img: getAssetPath("/past/event5.jpg"), url: "#", height: 550 },
  { id: "6", img: getAssetPath("/past/event6.jpg"), url: "#", height: 350 },
  { id: "7", img: getAssetPath("/past/event7.jpg"), url: "#", height: 450 },
  { id: "8", img: getAssetPath("/past/event8.jpg"), url: "#", height: 500 },
  { id: "9", img: getAssetPath("/past/event9.jpg"), url: "#", height: 320 },
  { id: "10", img: getAssetPath("/past/event10.jpg"), url: "#", height: 580 },
  { id: "11", img: getAssetPath("/past/event11.jpg"), url: "#", height: 420 },
  { id: "12", img: getAssetPath("/past/event12.jpg"), url: "#", height: 480 },
  { id: "13", img: getAssetPath("/past/event13.jpg"), url: "#", height: 360 },
];

const PastEventsMasonry: React.FC = () => {
  return (
    <section className="w-full bg-[#0B1F26] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            A glimpse into the energy we've built
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            From visionary keynotes to hands-on workshops — every moment reflects innovation in action.
          </p>
        </div>
        <div className="h-[800px] w-full">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.97}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </div>
    </section>
  );
};

export default PastEventsMasonry;
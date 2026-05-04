import CountUp from "@/components/ui/CountUp";

const stats = [
  {
    value: 5000,
    suffix: "+",
    label: "LinkedIn Followers",
    sub: "+3,767 in last year",
    separator: ","
  },
  {
    value: 13600,
    suffix: "+",
    label: "Meetup Members",
    sub: "Active and growing",
    separator: ","
  },
  {
    prefix: "~",
    value: 3.1,
    suffix: "M",
    label: "Total Reach",
    sub: "Across social platforms"
  },
  {
    value: 4.7,
    suffix: "/5",
    label: "Event Rating",
    sub: "754 ratings"
  }
];

export function Stats() {
  return (
    <section className="py-24 md:py-32 bg-[#0B2E33] text-white overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col border-t border-white/10 pt-8 group">
              {/* Number with CountUp */}
              <div className="flex items-baseline font-display font-bold text-[48px] md:text-[56px] lg:text-[64px] tracking-tighter leading-none mb-6">
                {s.prefix && (
                  <span className="text-white/40 mr-1 text-[32px] md:text-[40px] font-medium self-center mb-1">
                    {s.prefix}
                  </span>
                )}
                <CountUp
                  from={0}
                  to={s.value}
                  duration={2.5}
                  separator={s.separator || ""}
                  className="tnum"
                />
                {s.suffix && (
                  <span className="text-white/40 ml-1 text-[24px] md:text-[32px] font-medium">
                    {s.suffix}
                  </span>
                )}
              </div>

              {/* Label */}
              <h4 className="text-[15px] md:text-[16px] font-bold text-white mb-2">
                {s.label}
              </h4>

              {/* Subtext */}
              <p className="text-[12px] md:text-[13px] text-white/40 font-medium leading-relaxed">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

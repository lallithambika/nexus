import { getAssetPath } from "@/lib/assets";

// Centralized content. Markdown-style structured data, easily swappable later.
export const site = {
  brand: "NexusCon'26",
  nav: [
    { label: "Home", href: "#top" },
    { label: "Overview", href: "#overview" },
    { label: "About", href: "#about" },
    { label: "Speakers", href: "#speakers" },
    { label: "Sponsor", href: "#sponsor" },
  ],
  hero: {
    eyebrow: "NexusCon Bengaluru '26",
    titleLines: ["Where India's", "Tech Community", "Converges."],
    meta: "June 2026 · NIMHANS Convention Centre · ~450 Professionals",
    description:
      "A premium conference experience for AI, Cloud, DevTools and future-facing builders — created for engineers, leaders, founders and ambitious teams.",
    cta: "Join the Waitlist",
  },
  overview: [
    { label: "Date", value: "June 2026", note: "Final date TBD" },
    { label: "Venue", value: "NIMHANS Convention Centre", note: "Bengaluru" },
    { label: "Capacity", value: "~450", note: "Professionals" },
    { label: "Format", value: "Full-day", note: "Conference + Networking" },
    { label: "Focus", value: "AI · Cloud · DevTools", note: "Emerging Tech" },
  ],
  about: {
    kicker: "About",
    title: "Built for high-signal conversations and practical outcomes.",
    paragraphs: [
      "NexusCon '26 is designed as a full-day, high-impact conference in Bengaluru, bringing together developers, AI practitioners, cloud architects, engineering leaders, students and founders.",
      "This is not a generic event. It is a focused space for real learning, real networking and real opportunities — where ideas become implementation.",
      "Sponsors gain direct access to a curated technical audience and become part of the ecosystem shaping what comes next in AI and Cloud.",
    ],
    audience: [
      "Software Engineers & Developers",
      "Cloud & DevOps Architects",
      "AI/ML Practitioners",
      "CTOs, VPs & Engineering Leads",
      "Product Managers",
      "Startup Founders",
      "Students & Fresh Graduates",
    ],
  },
  stats: [
    { value: "5,000+", label: "LinkedIn Followers", note: "+3,767 in last year" },
    { value: "13,600+", label: "Meetup Members", note: "Active and growing" },
    { value: "~3.1M", label: "Total Reach", note: "Across social platforms" },
    { value: "4.7/5", label: "Event Rating", note: "754 ratings" },
  ],
  trackRecord: [
    "24 events hosted across Chennai and Bengaluru with leading technology partners.",
    "5,000+ participants including developers, students and working professionals.",
    "Deep technical sessions by MVPs, AI and cloud leaders, and top engineering practitioners.",
    "Strong social momentum with 200+ posts, shares and engagement touchpoints per cycle.",
  ],
  speakers: [
    { name: "Mohamed Azarudeen Z", handle: "@mohamedazarudeen", role: "Speaker", image: getAssetPath("/images/speakers/azar.jpg") },
    { name: "Vinodh Kumar", handle: "@vinodhkumar", role: "Speaker", image: getAssetPath("/images/speakers/vinodh.jpg") },
    { name: "To be announced", handle: "@tbd", role: "TBD", image: getAssetPath("/images/speakers/tbd.jpg") },
    { name: "To be announced", handle: "@tbd", role: "TBD", image: getAssetPath("/images/speakers/tbd.jpg") },
    { name: "To be announced", handle: "@tbd", role: "TBD", image: getAssetPath("/images/speakers/tbd.jpg") },
    { name: "To be announced", handle: "@tbd", role: "TBD", image: getAssetPath("/images/speakers/tbd.jpg") },
  ],
  sponsorsPrev: [
    "Microsoft", "Azure", "GitHub", "MongoDB", "Postman",
    "Hashnode", "JetBrains", "Pluralsight", "DigitalOcean", "Cloudflare",
  ],
  whySponsor: [
    { n: "01", title: "Premium Audience", body: "Vetted, high-intent attendees including engineers, architects, founders and decision makers." },
    { n: "02", title: "Proven Community", body: "24+ events, strong engagement and trusted partnerships with top global technology brands." },
    { n: "03", title: "Full-Funnel Exposure", body: "Pre-event promotion, in-event visibility and post-event amplification in one integrated cycle." },
    { n: "04", title: "Exclusive Positioning", body: "Limited sponsor slots ensure stronger recall and a more premium on-ground brand presence." },
    { n: "05", title: "Community Trust", body: "TechNexus carries a credible, developer-first voice across Chennai and Bengaluru ecosystems." },
    { n: "06", title: "ROI Focused", body: "Lead generation, hiring visibility, product awareness and long-tail brand equity from one event." },
  ],
  testimonials: [
    {
      quote: "I had a great time as a speaker with the TechNexus Community in Microsoft Bengaluru. Excellent hospitality and a community with top-notch networking. Highly recommended.",
      name: "Abhilekh Verma",
      title: "Founder, Abhilekh Verma Consultancy",
    },
    {
      quote: "Thoroughly impressed by their promptness and professionalism. They bridge the gap between seasoned professionals and emerging talent — an exceptional platform to connect, learn and stay ahead.",
      name: "Prasanna V Nagarajan",
      title: "Principal Software Engineer, Solutions Engineering",
    },
    {
      quote: "A vibrant community where Data and AI enthusiasts come together to share insights and drive innovation. The organizers' expertise and passion keep the standards high.",
      name: "Navaneethan Gopal",
      title: "Organizer, Azure Developer Community Tamil Nadu",
    },
    {
      quote: "A brilliant effort by the community leaders. In just a few months it has provided tremendous value for students, faculty and working professionals alike.",
      name: "Lakshit Pant",
      title: "Microsoft CPM, India",
    },
    {
      quote: "One of the most well-run, high-energy communities I've engaged with. Great turnout, curious minds and thoughtful engagement throughout.",
      name: "Prateek Singh",
      title: "Founder, Ganak AI Labs",
    },
  ],
  packages: [
    {
      tag: "Exclusive · 1 slot",
      name: "Title Sponsor",
      points: [
        "Prime stage and venue naming rights with co-branded event identity.",
        "Keynote slot or brand introduction in a prime session.",
        "Logo-first presence across campaign channels and event collaterals.",
        "Dedicated booth with priority placement and networking access.",
      ],
      featured: true,
    },
    {
      tag: "2 slots available",
      name: "Co-Sponsor",
      points: [
        "Prominent on-site brand placement and speaker shoutouts.",
        "Logo on event promotions and social campaigns.",
        "Booth space at venue with networking opportunities.",
        "Pre and post-event social visibility with community channels.",
      ],
      featured: false,
    },
  ],
  rsvp: {
    title: "Get notified when registration opens",
    note: "By continuing, you agree to receive conference updates.",
    contact: "team@nexuscon.in",
  },
};

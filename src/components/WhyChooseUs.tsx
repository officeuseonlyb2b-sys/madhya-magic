"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// IMAGES
import choose1 from "@/assets/choose1.jpeg";
import choose2 from "@/assets/choose2.jpeg";
import choose3 from "@/assets/choose3.jpeg";
import choose4 from "@/assets/choose4.jpeg";
import choose5 from "@/assets/choose5.jpeg";

// ICONS
import {
  MapPinned,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Headphones,
  PawPrint,
  ChevronLeft,
  ChevronRight,
  Crown,
  Users2,
  Trees,
  Camera,
  MessageCircle,
  Plane,
} from "lucide-react";

const carouselData = [
  {
    image: choose1,
    tag: "senior citizen ",
    // tagIcon: Crown,
  },
  {
    image: choose2,
    tag: "Inbound",
    // tagIcon: Users2,
  },
  {
    image: choose3,
    tag: "VIP",
    // tagIcon: PawPrint,
  },
  {
    image: choose4,
    tag: "Student Group",
    // tagIcon: Trees,
  },
  {
    image: choose5,
    tag: "Family",
    // tagIcon: Camera,
  },
];

const features = [
  {
    icon: MapPinned,
    title: "Madhya Pradesh Is Our Home",
    desc: "We know Madhya Pradesh beyond guidebooks — from hidden forests and heritage towns to authentic local experiences.",
  },
  {
    icon: Sparkles,
    title: "Handcrafted Journeys",
    desc: "Every journey is thoughtfully designed around your travel style, interests, and pace.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Local Network Across the State",
    desc: "Longstanding partnerships with hotels, guides, drivers and communities ensure smooth, authentic journeys every time.",
  },
  {
    icon: HeartHandshake,
    title: "Real Experiences. Genuine Hospitality.",
    desc: "Warm welcomes, thoughtful planning and people-first service make each trip personal and memorable.",
  },
  {
    icon: Headphones,
    title: "Seamless Planning & Support",
    desc: "From inquiry to return, we handle accommodations, safaris, transfers and live assistance so you can travel with peace of mind.",
  },
  {
    icon: PawPrint,
    title: "Experts in Wildlife & Experiential Travel",
    desc: "In-depth local knowledge ensures the best safari zones, guides and timing for unforgettable wildlife encounters.",
  },
  {
    icon: Sparkles,
    title: "Honest Recommendations",
    desc: "We recommend what truly suits you — the right season, hotel type, safari plan or travel route — guided by transparency and local insight.",
  },
  {
    icon: HeartHandshake,
    title: "More Than Just a Trip",
    desc: "Our goal is to help you experience the magic, mystery and timeless traditions of Central India, not just visit its places.",
  },
];

const stats = [
  {
    number: "12+",
    label: "Years Curating MP Journeys",
  },
  {
    number: "5000+",
    label: "Customized Journeys Delivered",
  },
  {
    number: "98%",
    label: "Traveler Satisfaction Rate",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // const CurrentTagIcon = carouselData[current].tagIcon;

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-[#f3f3f3] rounded-[28px] p-5 md:p-10 lg:p-12 border border-[#e7e7e7]"
        >

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-[34px] md:text-[52px] leading-tight font-bold text-black tracking-[-1px]">
              Why Choose Us
            </h2>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

            {/* LEFT */}
            <div>
              <p className="text-[15px] leading-[1.7] text-[#5f5f5f] italic mb-10 max-w-2xl">
                Deeply rooted in Madhya Pradesh since 2014, we create
                thoughtfully curated journeys that go beyond sightseeing. From
                wilderness and heritage to spirituality and local traditions,
                our strong local expertise, trusted network, and personalized
                approach help you experience the true soul of Central India with
                comfort, authenticity, and care.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
                {features.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    {/* ICON BOX */}
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#ececec] shadow-sm flex items-center justify-center shrink-0">
                      <item.icon size={19} className="text-[#f97343]" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[16px] text-[#111] leading-snug mb-1.5">
                        {item.title}
                      </h3>

                      <p className="text-[13.5px] leading-[1.5] text-[#8a8a8a]">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div>

              {/* IMAGE CAROUSEL */}
              <div className="relative overflow-hidden rounded-[24px] group">

                <img
                  src={carouselData[current].image}
                  alt="Why Choose Us"
                  className="w-full h-[300px] md:h-[390px] object-cover transition-all duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />

                {/* TAG */}
                <div className="absolute top-5 right-5 z-20">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/50">
                    {/* <CurrentTagIcon
                      size={16}
                      className="text-[#f97343]"
                    /> */}

                    <span className="text-[13px] font-semibold text-black">
                      {carouselData[current].tag}
                    </span>
                  </div>
                </div>

                {/* LEFT BUTTON */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ChevronLeft size={18} className="text-black" />
                </button>

                {/* RIGHT BUTTON */}
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ChevronRight size={18} className="text-black" />
                </button>

                {/* DOTS */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {carouselData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${current === index
                          ? "w-8 bg-white"
                          : "w-2 bg-white/50"
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* CONTENT */}
              <div className="mt-8">
                <h3 className="text-[28px] font-bold text-black mb-3">
                  Ready to Experience Madhya Pradesh?
                </h3>

                <p className="text-[#8a8a8a] text-[15px] leading-7 mb-7">
                  Tell us your interests and travel dates — we’ll design a
                  journey that reflects the soul of Central India.
                </p>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4 mb-10">

                  {/* SPEAK TO EXPERT */}
                  <button className="h-11 px-7 rounded-full border border-[#d7d7d7] text-[#5f5f5f] text-sm font-medium hover:bg-white transition-all duration-300 flex items-center gap-2">
                    <MessageCircle size={16} />
                    Speak to an Expert
                  </button>

                  {/* PLAN JOURNEY */}
                  <button className="h-11 px-7 rounded-full bg-[#f97343] text-white text-sm font-medium hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-orange-200">
                    <Plane size={16} />
                    Plan Your Journey
                  </button>
                </div>

                {/* STATS */}
                {/* STATS */}
                <div className="grid grid-cols-3 gap-6 text-center">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center"
                    >
                      <h4 className="text-[34px] font-bold text-black mb-1">
                        {stat.number}
                      </h4>

                      <p className="text-[12px] text-[#9a9a9a] leading-5 max-w-[120px]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
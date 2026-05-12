import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Hand,
  Users,
  Heart,
  Headphones,
  PawPrint,
} from "lucide-react";

import whyChooseImg from "@/assets/why-choose-us.jpg";

const features = [
  {
    icon: MapPin,
    title: "Madhya Pradesh Is Our Home",
    desc: "We know Madhya Pradesh beyond guidebooks — from hidden forests and heritage towns to authentic local experiences.",
  },
  {
    icon: Hand,
    title: "Handcrafted Journeys",
    desc: "Every journey is thoughtfully designed around your travel style, interests, and pace.",
  },
  {
    icon: Users,
    title: "Trusted Local Network Across the State",
    desc: "Longstanding partnerships with hotels, guides, drivers and communities ensure smooth, authentic journeys every time.",
  },
  {
    icon: Heart,
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
    icon: Headphones,
    title: "Honest Recommendations",
    desc: "We recommend what truly suits you — the right season, hotel type, safari plan or travel route — guided by transparency and local insight.",
  },
  {
    icon: PawPrint,
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
            {/* Left */}
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
                    <div className="w-11 h-11 rounded-xl bg-[#f7ddd5] flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-black" />
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

            {/* Right */}
            <div>
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src={whyChooseImg}
                  alt="Why Choose Us"
                  className="w-full h-[300px] md:h-[390px] object-cover"
                />
              </div>

              <div className="mt-8">
                <h3 className="text-[28px] font-bold text-black mb-3">
                  Ready to Experience Madhya Pradesh?
                </h3>

                <p className="text-[#8a8a8a] text-[15px] leading-7 mb-7">
                  Tell us your interests and travel dates — we’ll design a
                  journey that reflects the soul of Central India.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <button className="h-11 px-7 rounded-full border border-[#d7d7d7] text-[#8a8a8a] text-sm font-medium hover:bg-white transition-all duration-300">
                    Speak to an Expert
                  </button>

                  <button className="h-11 px-7 rounded-full bg-[#f97343] text-white text-sm font-medium hover:opacity-90 transition-all duration-300">
                    Plan Your Journey
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <h4 className="text-[34px] font-bold text-black mb-1">
                        {stat.number}
                      </h4>

                      <p className="text-[12px] text-[#9a9a9a] leading-5">
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
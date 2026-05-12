import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import type { MapDestination } from "@/data/mapDestinations";

interface Props {
  destinations: MapDestination[];
  categorySlug: string;
}

const DestinationPillars = ({ destinations }: Props) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const len = destinations.length;

  /* ================= AUTO SLIDER ================= */
  useEffect(() => {
    if (len <= 1) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % len);
    }, 5000);

    return () => clearInterval(interval);
  }, [len]);

  if (!destinations?.length) return null;

  const activeItem = destinations[activeIdx];

  /* ================= MANUAL NAVIGATION ================= */
  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % len);
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + len) % len);
  };

  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* MAIN CONTAINER */}
        <div className="relative w-full rounded-[38px] overflow-hidden bg-[#f5f5f5] shadow-[0_20px_60px_rgba(0,0,0,0.18)] p-4 md:p-5">

          {/* ================= TOP IMAGE AREA ================= */}
          <div className="relative h-[420px] md:h-[650px] rounded-[30px] overflow-hidden">

            {/* IMAGE SLIDER */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.9 }}
                className="absolute inset-0"
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.name}
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* TEXT CONTENT */}
            <div className="absolute inset-0 z-20 flex items-end">
              <div className="p-6 md:p-10 lg:p-14 max-w-3xl">

                <motion.h2
                  key={activeItem.name}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  {activeItem.name}
                </motion.h2>

                <motion.p
                  key={activeItem.description}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="mt-5 text-white/80 text-sm md:text-base leading-relaxed max-w-2xl"
                >
                  {activeItem.description}
                </motion.p>

                {/* BUTTON */}
                <Link
                  to={`/destination/${activeItem.id}`}
                  className="inline-flex items-center gap-3 mt-7 text-white font-medium group"
                >
                  <span className="uppercase tracking-[0.2em] text-[12px]">
                    Explore Destination
                  </span>

                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>

            {/* MANUAL ARROWS */}
            <div className="absolute top-6 right-6 z-30 flex gap-3">

              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* SLIDER PROGRESS BAR */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10 z-30">
              <motion.div
                key={activeIdx}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 5,
                  ease: "linear",
                }}
                className="h-full bg-white"
              />
            </div>
          </div>

          {/* ================= BOTTOM THUMBNAILS ================= */}
          <div className="relative mt-5 overflow-hidden">

            {/* AUTO SCROLL THUMBNAILS */}
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 22,
                ease: "linear",
              }}
              className="flex gap-4 w-max"
            >
              {[...destinations, ...destinations].map((item, index) => {
                const originalIndex =
                  index % destinations.length;

                const isActive =
                  originalIndex === activeIdx;

                return (
                  <button
                    key={`${item.id}-${index}`}
                    onClick={() => setActiveIdx(originalIndex)}
                    className={`relative shrink-0 overflow-hidden rounded-[18px] transition-all duration-500 ${
                      isActive
                        ? "w-[210px] md:w-[260px] h-[95px] ring-2 ring-black/20"
                        : "w-[160px] md:w-[210px] h-[95px] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/25" />

                    {/* TITLE */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h4 className="text-white text-sm md:text-[15px] font-medium truncate">
                        {item.name}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationPillars;
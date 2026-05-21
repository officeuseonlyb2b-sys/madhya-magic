import { useState, useEffect, useRef } from "react";
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

const AUTO_SLIDE_DURATION = 7000;

const DestinationPillars = ({ destinations }: Props) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const len = destinations.length;

  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  /* ================= AUTO MAIN SLIDER ================= */
  useEffect(() => {
    if (len <= 1 || isPaused) return;

    autoSlideRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % len);
    }, AUTO_SLIDE_DURATION);

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [len, isPaused]);

  if (!destinations?.length) return null;

  const activeItem = destinations[activeIdx];

  /* ================= NAVIGATION ================= */
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
        <div className="relative rounded-[42px] overflow-hidden bg-[#f7f6f3] border border-[#ece9e4] shadow-[0_15px_60px_rgba(0,0,0,0.08)] p-4 md:p-5">

          {/* ================= HERO IMAGE ================= */}
          <div className="relative h-[420px] md:h-[700px] rounded-[34px] overflow-hidden">

            {/* IMAGE */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{
                  opacity: 0,
                  scale: 1.02,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.name}
                  className="w-full h-full object-cover transform-gpu will-change-transform"
                  loading="eager"
                  decoding="async"
                  draggable={false}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* CONTENT */}
            <div className="absolute inset-0 z-20 flex items-end">
              <div className="p-6 md:p-10 lg:p-14 max-w-3xl">

                {/* TITLE */}
                <motion.h2
                  key={activeItem.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-white text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-3px] font-light font-display"
                >
                  {activeItem.name}
                </motion.h2>

                {/* DESCRIPTION */}
                <motion.p
                  key={activeItem.description}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-6 text-white/75 text-[15px] md:text-[16px] leading-8 max-w-2xl"
                >
                  {activeItem.description}
                </motion.p>

                {/* BUTTON */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                >
                  <Link
                    to={`/destination/${activeItem.id}`}
                    className="inline-flex items-center gap-4 mt-8 group"
                  >
                    <span className="uppercase tracking-[0.24em] text-[12px] text-white font-medium">
                      Explore Destination
                    </span>

                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <ArrowRight size={18} />
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="absolute top-6 right-6 z-30 flex gap-3">

              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 active:scale-95"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-500 shadow-xl"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* PROGRESS BAR */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-30 overflow-hidden">

              <motion.div
                key={activeIdx}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: AUTO_SLIDE_DURATION / 1000,
                  ease: "linear",
                }}
                className="h-full bg-white"
              />
            </div>
          </div>

  {/* ================= THUMBNAILS ================= */}
<div className="relative mt-6">

  {/* SCROLLABLE WRAPPER */}
  <div
    className="
      overflow-x-auto
      overflow-y-hidden
      no-scrollbar
      scroll-smooth
      cursor-grab
      active:cursor-grabbing
      [scrollbar-width:none]
      [-ms-overflow-style:none]
    "
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
  >
    {/* TRACK */}
    <motion.div
      animate={
        isPaused
          ? {}
          : {
              x: [0, -1200],
            }
      }
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 38,
        ease: "linear",
      }}
      className="flex gap-4 w-max py-2 px-2"
      style={{
        willChange: "transform",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      {[...destinations, ...destinations].map(
        (item, index) => {
          const originalIndex =
            index % destinations.length;

          const isActive =
            originalIndex === activeIdx;

          return (
            <motion.button
              key={`${item.id}-${index}`}
              onClick={() =>
                setActiveIdx(originalIndex)
              }
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className={`
                group
                relative
                shrink-0
                overflow-hidden
                rounded-[22px]
                transition-all
                duration-500
                transform-gpu
                ${
                  isActive
                    ? "w-[170px] md:w-[210px] h-[105px] ring-1 ring-black/10 shadow-lg"
                    : "w-[135px] md:w-[165px] h-[105px] opacity-80"
                }
              `}
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="
                  w-full
                  h-full
                  object-cover
                  transform-gpu
                  transition-transform
                  duration-[1800ms]
                  ease-out
                  group-hover:scale-[1.04]
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

              {/* ACTIVE TAG */}
              {isActive && (
                <div className="absolute top-3 right-3 bg-white/95 text-black text-[10px] uppercase tracking-[0.18em] px-3 py-1 rounded-full font-semibold shadow-lg">
                  Active
                </div>
              )}

              {/* TITLE */}
              <div className="absolute bottom-3 left-3 right-3">

                <h4
                  className={`text-white leading-tight font-display ${
                    isActive
                      ? "text-[15px] md:text-[16px] font-semibold"
                      : "text-[13px] md:text-[14px] font-medium"
                  }`}
                >
                  {item.name}
                </h4>
              </div>
            </motion.button>
          );
        }
      )}
    </motion.div>
  </div>

  {/* LEFT FADE */}
  <div className="absolute top-0 left-0 w-28 h-full bg-gradient-to-r from-[#f7f6f3] to-transparent pointer-events-none z-20" />

  {/* RIGHT FADE */}
  <div className="absolute top-0 right-0 w-28 h-full bg-gradient-to-l from-[#f7f6f3] to-transparent pointer-events-none z-20" />
</div>
        </div>
      </div>
    </section>
  );
};

export default DestinationPillars;
import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Bookmark } from "lucide-react";

import imgGetaway from "@/assets/travel-getaway.jpg";
import imgWomen from "@/assets/travel-women.jpg";
import imgSpecial from "@/assets/travel-special.jpg";
import imgBestselling from "@/assets/travel-bestselling.jpg";
import imgSenior from "@/assets/travel-senior.jpg";
import imgSeasonal from "@/assets/travel-seasonal.jpg";
import imgGroup from "@/assets/travel-group.jpg";
import imgLuxury from "@/assets/travel-luxury.jpg";

/* ================= TYPES ================= */
interface CategoryItem {
  label: string;
  description: string;
  image: string;
  query: string;
  hasNested?: boolean;
}

/* ================= DATA ================= */
const categories: CategoryItem[] = [
  {
    label: "Quick Getaways",
    description:
      "Short and refreshing 2–3 day trips for quick relaxation. Escape the city rush and rejuvenate with curated weekend escapes through the heart of Madhya Pradesh.",
    image: imgGetaway,
    query: "?tourCategory=Quick%20Getaways",
  },
  {
    label: "Women Exclusive",
    description:
      "Safe and curated tours designed especially for women travellers. Travel confidently with female-led groups exploring culture, cuisine and heritage together.",
    image: imgWomen,
    query: "?tourCategory=Women%20Exclusive",
  },
  {
    label: "Special Interest Tours",
    description:
      "Theme-based journeys including heritage, wildlife and culture. Dive deep into your passion with expert-guided experiences crafted around what fascinates you most.",
    image: imgSpecial,
    query: "?tourCategory=Special%20Interest%20Tours",
    hasNested: true,
  },
  {
    label: "Best-Selling Tours",
    description:
      "Most popular and customer loved packages. Tried, tested and treasured by thousands of travellers — these signature itineraries deliver unforgettable moments.",
    image: imgBestselling,
    query: "?tourCategory=Best-Selling%20Tours",
  },
  {
    label: "Senior Citizen",
    description:
      "Relaxed and comfortable travel for senior travellers. Slower pace, premium comfort, and thoughtfully designed itineraries that prioritise wellness and ease.",
    image: imgSenior,
    query: "?tourCategory=Senior%20Citizen",
  },
  {
    label: "Seasonal Tours",
    description:
      "Travel based on monsoon, winter and summer. Discover Madhya Pradesh in its most magical seasonal moods — lush greens, golden sunsets and crisp winter mornings.",
    image: imgSeasonal,
    query: "?tourCategory=Seasonal%20Tours",
    hasNested: true,
  },
  {
    label: "Group Join-in",
    description:
      "Join group departures and meet fellow travellers. Make new friends and share unforgettable adventures with like-minded explorers from across the country.",
    image: imgGroup,
    query: "?tourCategory=Group%20Join-in",
  },
  {
    label: "Luxury & Experiential",
    description:
      "Premium curated luxury travel experiences. Stay in heritage palaces, dine like royalty, and travel through Madhya Pradesh in unmatched style and comfort.",
    image: imgLuxury,
    query: "?tourCategory=Luxury%20%26%20Experiential",
  },
];

/* ================= CARD ================= */
interface CardProps {
  item: CategoryItem;
  index: number;
  active: boolean;
  distance: number;
  onTap: () => void;
}

const CategoryCard = ({ item, active, distance, onTap }: CardProps) => {
  const targetOpacity = active ? 1 : distance === 1 ? 0.8 : 0.58;
  const targetScale = active ? 1 : distance === 1 ? 0.9 : 0.8;
  const targetY = active ? -6 : distance === 1 ? 10 : 18;

  const sizeClass = active
    ? "w-[220px] h-[320px] sm:w-[240px] sm:h-[340px] xl:w-[260px] xl:h-[360px]"
    : distance === 1
      ? "w-[170px] h-[260px] sm:w-[180px] sm:h-[275px] xl:w-[190px] xl:h-[290px]"
      : "w-[140px] h-[220px] sm:w-[155px] sm:h-[235px] xl:w-[170px] xl:h-[255px]";

  return (
    <motion.div
      onClick={onTap}
      layout
      initial={{ opacity: 0, scale: 0.72, x: 120 }}
      animate={{
        opacity: targetOpacity,
        scale: targetScale,
        x: 0,
        y: targetY,
      }}
      exit={{ opacity: 0, scale: 0.72, x: -120, y: 8 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={!active ? { y: -4, opacity: 1 } : undefined}
      className={`relative shrink-0 cursor-pointer rounded-[28px] overflow-hidden ${sizeClass} ${
        active
          ? "ring-2 ring-orange-400/80 shadow-[0_25px_60px_-15px_rgba(251,146,60,0.6)]"
          : "shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)]"
      }`}
    >
      <img
        src={item.image}
        alt={item.label}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-110"
      />


      {/* Bookmark icon top-right */}
      <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white">
        <Bookmark size={15} />
      </div>

      {/* Dot indicators */}
      <div className="absolute top-4 left-4 flex gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`h-1 rounded-full transition-all ${
              i === 0 ? "w-4 bg-white" : "w-1 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-4 left-4 right-4">
        <h4 className="text-white text-base font-semibold drop-shadow-lg leading-tight">
          {item.label}
        </h4>
      </div>
    </motion.div>
  );
};

/* ================= MAIN ================= */
const HomeCategoryShowcase = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const len = categories.length;

  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isInteractingRef = useRef(false);

  const activeItem = categories[activeIdx];

  const pauseAuto = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    setIsPaused(true);
  }, []);

  const scheduleResume = useCallback((delay = 2500) => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      if (!isInteractingRef.current) setIsPaused(false);
    }, delay);
  }, []);

  useEffect(() => () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  /* Auto-advance every 5s */
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % len);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, len]);

  const goTo = useCallback(
    (dir: 1 | -1) => {
      pauseAuto();
      setActiveIdx((prev) => (prev + dir + len) % len);
      scheduleResume();
    },
    [len, pauseAuto, scheduleResume]
  );

  // Drag handling for the slider track
  const dragStartRef = useRef<{ x: number; id: number } | null>(null);
  const onPointerDown = (e: React.PointerEvent) => {
    isInteractingRef.current = true;
    pauseAuto();
    dragStartRef.current = { x: e.clientX, id: e.pointerId };
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const start = dragStartRef.current;
    dragStartRef.current = null;
    isInteractingRef.current = false;
    if (start) {
      const dx = e.clientX - start.x;
      if (Math.abs(dx) > 40) {
        setActiveIdx((prev) => (prev + (dx < 0 ? 1 : -1) + len) % len);
      }
    }
    scheduleResume();
  };

  const wheelLockRef = useRef(false);
  const onWheel = (e: React.WheelEvent) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) < 8 || wheelLockRef.current) return;
    wheelLockRef.current = true;
    goTo(delta > 0 ? 1 : -1);
    setTimeout(() => { wheelLockRef.current = false; }, 400);
  };

  return (
    <section
      className="relative min-h-[680px] lg:min-h-[760px] overflow-hidden flex items-center"
      onMouseEnter={pauseAuto}
      onMouseLeave={() => { if (!isInteractingRef.current) scheduleResume(300); }}
    >
      {/* ===== ANIMATED BACKGROUND ===== */}
      <AnimatePresence mode="sync">
        <motion.div
          key={activeItem.image}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 6, ease: "easeOut" },
          }}
          className="absolute inset-0"
        >
          <img
            src={activeItem.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>


      {/* ===== LEFT VERTICAL TIMELINE ===== */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-3">
        <span className="text-white/80 text-xs font-mono tracking-widest">
          {String(activeIdx + 1).padStart(2, "0")}
        </span>
        <div className="w-px h-32 bg-gradient-to-b from-white/10 via-white/40 to-white/10" />
        <span className="text-white/50 text-xs font-mono tracking-widest">
          {String(categories.length).padStart(2, "0")}
        </span>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="container mx-auto px-6 lg:px-16 relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[42%_58%] gap-10 lg:gap-12 items-center">
          {/* ===== LEFT TEXT ===== */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-orange-400 uppercase text-xs font-semibold tracking-[0.3em]"
            >
              Travel Styles
            </motion.span>

            <AnimatePresence mode="wait">
              <motion.h2
                key={activeItem.label}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-5xl md:text-6xl xl:text-7xl font-bold mt-5 leading-[1.05] text-white uppercase tracking-tight"
                style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
              >
                {activeItem.label}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${activeItem.label}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-white/80 mt-6 leading-relaxed text-sm md:text-base max-w-xl"
              >
                {activeItem.description}
              </motion.p>
            </AnimatePresence>

            {/* Explore button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10"
            >
              <Link
                to={`/packages${activeItem.query}`}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-[0_15px_40px_-10px_rgba(37,99,235,0.6)] hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.8)] hover:scale-[1.03] transition-all duration-300"
              >
                <span className="text-sm tracking-wider">Explore</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition">
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* ===== RIGHT SLIDER (forward rotating queue) ===== */}
          <div className="relative">
            <div
              className="flex gap-3 sm:gap-4 lg:gap-5 overflow-hidden no-scrollbar py-6 items-end justify-center lg:justify-start min-h-[350px] sm:min-h-[380px]"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {(() => {
                  const len = categories.length;
                  const window = [0, 1, 2].map((offset) => {
                    const idx = (activeIdx + offset) % len;
                    return { item: categories[idx], idx, offset };
                  });
                  return window.map(({ item, idx, offset }) => (
                    <CategoryCard
                      key={item.label}
                      item={item}
                      index={idx}
                      active={offset === 0}
                      distance={Math.abs(offset)}
                      onTap={() => setActiveIdx(idx)}
                    />
                  ));
                })()}
              </AnimatePresence>
            </div>

            {/* Pagination + nav */}
            <div className="flex items-center justify-between mt-6 px-2">
              <div className="flex gap-2">
                {categories.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`h-1 rounded-full transition-all ${
                      i === activeIdx
                        ? "w-8 bg-orange-400"
                        : "w-3 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <span className="text-white/60 text-xs font-mono tracking-widest">
                {String(activeIdx + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategoryShowcase;

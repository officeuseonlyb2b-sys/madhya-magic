import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import heroNature from "@/assets/hero-nature.jpg";
import heroHeritage from "@/assets/hero-heritage.jpg";
import heroWildlife from "@/assets/hero-wildlife.jpg";
import heroSpiritual from "@/assets/hero-spiritual.jpg";

const slides = [
  {
    key: "nature",
    src: heroNature,
    alt: "Nature landscapes of Madhya Pradesh",
    badge: "🌿 Pristine Wilderness",
    titleLine1: "Breathtaking",
    titleLine2: "Nature",
    description:
      "Witness cascading waterfalls, marble rocks, and lush national parks — Madhya Pradesh is a paradise for nature lovers.",
  },
  {
    key: "heritage",
    src: heroHeritage,
    alt: "Heritage temples of Madhya Pradesh",
    badge: "🏛️ Timeless Legacy",
    titleLine1: "Ancient",
    titleLine2: "Heritage",
    description:
      "Step into a world of magnificent forts, intricate temples, and UNESCO World Heritage Sites that whisper tales of glory.",
  },
  {
    key: "wildlife",
    src: heroWildlife,
    alt: "Wildlife safari in Madhya Pradesh",
    badge: "🐅 Roar of the Wild",
    titleLine1: "Thrilling",
    titleLine2: "Wildlife",
    description:
      "Home to the majestic Royal Bengal Tiger, leopards, and exotic birds — embark on an unforgettable jungle adventure.",
  },
  {
    key: "spiritual",
    src: heroSpiritual,
    alt: "Spiritual destinations of Madhya Pradesh",
    badge: "🕉️ Divine Serenity",
    titleLine1: "Sacred",
    titleLine2: "Spiritual",
    description:
      "Find peace at revered ghats, ancient stupas, and the iconic Mahakaleshwar Jyotirlinga — a journey for the soul.",
  },
];

const categoryToIndex: Record<string, number> = {
  Nature: 0,
  Heritage: 1,
  Wildlife: 2,
  Spiritual: 3,
};

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const currentSlide = slides[activeIndex];

  // Auto slider
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Listen for category hover events from Navbar
  const handleCategoryHover = useCallback((e: Event) => {
    const detail = (e as CustomEvent).detail;
    if (detail?.category) {
      const idx = categoryToIndex[detail.category];
      if (idx !== undefined) {
        setActiveIndex(idx);
        setIsPaused(true);
      }
    } else {
      setIsPaused(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("hero-category-hover", handleCategoryHover);
    return () => window.removeEventListener("hero-category-hover", handleCategoryHover);
  }, [handleCategoryHover]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Sliding background images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide.key}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.4, ease: "easeInOut" },
            scale: { duration: 8, ease: "easeOut" },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={currentSlide.src}
            alt={currentSlide.alt}
            className="w-full h-full object-cover"
            loading={activeIndex === 0 ? "eager" : "lazy"}
            width={1920}
            height={1080}
          />
        </motion.div>
      </AnimatePresence>


      {/* Hero Content - Added padding top to avoid navbar overlap */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 md:pt-24 lg:pt-28 text-center text-white"
      >
        {/* Dynamic Badge */}
        <motion.div
          key={`badge-${activeIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.22em] text-white/95 bg-white/10 backdrop-blur-md border border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.25)] font-body">
            {currentSlide.badge}
          </span>
        </motion.div>

        {/* Dynamic Headline */}
        <motion.h1
          key={`title-${activeIndex}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-semibold leading-[0.95] tracking-[-0.02em] px-2 text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] [text-shadow:_0_4px_30px_rgba(0,0,0,0.45)]"
        >
          <span className="block text-white font-light italic tracking-tight">
            {currentSlide.titleLine1}
          </span>
          <span className="block mt-1 sm:mt-2 font-bold tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 drop-shadow-[0_2px_18px_rgba(251,191,36,0.35)]">
            {currentSlide.titleLine2}
          </span>
        </motion.h1>

        {/* Elegant divider */}
        <motion.div
          key={`div-${activeIndex}`}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 sm:mt-8 h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-amber-300/70 to-transparent origin-center"
        />

        {/* Dynamic Description */}
        <motion.p
          key={`desc-${activeIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/85 max-w-2xl mx-auto mt-5 sm:mt-7 px-4 font-body font-light leading-[1.75] tracking-[0.01em] [text-shadow:_0_2px_12px_rgba(0,0,0,0.5)]"
        >
          {currentSlide.description}
        </motion.p>

        {/* Attractive CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 sm:mt-10 md:mt-12"
        >
          {/* <button className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold text-base sm:text-lg shadow-2xl hover:bg-white/20 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Explore {currentSlide.titleLine2}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          </button> */}
        </motion.div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-12 sm:mt-16">
          {slides.map((s, i) => (
            <button
              key={s.key}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? "w-8 sm:w-10 bg-amber-400 shadow-[0_0_12px_#fbbf24]"
                  : "w-3 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to ${s.key} slide`}
            />
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 sm:w-7 h-10 sm:h-12 rounded-full border-2 border-white/30 flex justify-center pt-2 sm:pt-3 backdrop-blur-sm">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5], height: [4, 8, 4] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 sm:w-1.5 rounded-full bg-white/70"
          />
        </div>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;
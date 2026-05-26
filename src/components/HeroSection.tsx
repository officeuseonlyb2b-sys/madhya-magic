import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";

const slides = [
  {
    key: "nature",
    src: "/videos/hero/jabalpur.mp4",
    poster: "/videos/posters/hero_jabalpur.jpg",
    alt: "Nature landscapes of Madhya Pradesh",
    // badge: "🌿 Pristine Wilderness",
    titleLine1: "Breathtaking",
    titleLine2: "Nature",
    description:
      "Witness cascading waterfalls, marble rocks, and lush national parks — Madhya Pradesh is a paradise for nature lovers.",
  },
  {
    key: "heritage",
    src: "/videos/hero/maheshwar.mp4",
    poster: "/videos/posters/hero_maheshwar.jpg",
    alt: "Heritage temples of Madhya Pradesh",
    // badge: "🏛️ Timeless Legacy",
    titleLine1: "Ancient",
    titleLine2: "Heritage",
    description:
      "Step into a world of magnificent forts, intricate temples, and UNESCO World Heritage Sites that whisper tales of glory.",
  },
  {
    key: "wildlife",
    src: "/videos/hero/wildlife.mp4",
    poster: "/videos/posters/hero_wildlife.jpg",
    alt: "Wildlife safari in Madhya Pradesh",
    // badge: "🐅 Roar of the Wild",
    titleLine1: "Thrilling",
    titleLine2: "Wildlife",
    description:
      "Home to the majestic Royal Bengal Tiger, leopards, and exotic birds — embark on an unforgettable jungle adventure.",
  },
  {
    key: "spiritual",
    src: "/videos/hero/ujjain.mp4",
    poster: "/videos/posters/hero_ujjain.jpg",
    alt: "Spiritual destinations of Madhya Pradesh",
    // badge: "🕉️ Divine Serenity",
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
  const [inView, setInView] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const currentSlide = slides[activeIndex];

  // Lazy-load videos
  useEffect(() => {
    const node = sectionRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  // Auto slider
  useEffect(() => {
    if (isPaused || !inView) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [isPaused, inView]);

  // Play active video
  useEffect(() => {
    const v = videoRefs.current[currentSlide.key];

    if (v) {
      try {
        v.currentTime = 0;
        v.play().catch(() => { });
      } catch { }
    }
  }, [activeIndex, currentSlide.key, inView]);

  // Navbar hover
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

    return () =>
      window.removeEventListener(
        "hero-category-hover",
        handleCategoryHover
      );
  }, [handleCategoryHover]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end justify-start overflow-hidden bg-black"
    >
      {/* Background Videos */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide.key}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.4, ease: "easeInOut" },
            scale: { duration: 10, ease: "easeOut" },
          }}
          className="absolute inset-0 w-full h-full"
        >
          {inView && (
            <video
              ref={(el) => {
                videoRefs.current[currentSlide.key] = el;
              }}
              src={currentSlide.src}
              poster={currentSlide.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={currentSlide.alt}
              className="w-full h-full object-cover"
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>
      </AnimatePresence>

      
    </section>
  );
};

export default HeroSection;
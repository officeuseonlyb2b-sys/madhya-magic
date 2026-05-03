import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    key: "nature",
    src: "/videos/hero/jabalpur.mp4",
  },
  {
    key: "heritage",
    src: "/videos/hero/maheshwar.mp4",
  },
  {
    key: "wildlife",
    src: "/videos/hero/wildlife.mp4",
  },
  {
    key: "spiritual",
    src: "/videos/hero/ujjain.mp4",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const currentSlide = slides[activeIndex];

  // Auto slide every 10s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  // Restart video on slide change
  useEffect(() => {
    const v = videoRefs.current[currentSlide.key];
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  }, [activeIndex]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* Video Slider */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide.key}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 10, ease: "easeOut" },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            ref={(el) => {
              videoRefs.current[currentSlide.key] = el;
            }}
            src={currentSlide.src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Optional: Minimal Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((s, i) => (
          <button
            key={s.key}
            onClick={() => setActiveIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === activeIndex
                ? "w-10 bg-white"
                : "w-3 bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSection;
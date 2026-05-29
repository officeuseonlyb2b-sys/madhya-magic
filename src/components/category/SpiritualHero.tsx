import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/videos/hero/ujjain.mp4";
const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1600&q=80";

const SpiritualHero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Background Video / Fallback */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 18, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        {!isMobile && inView ? (
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={FALLBACK_IMG}
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={FALLBACK_IMG}
            alt="Sacred spiritual destinations of Madhya Pradesh"
            loading="lazy"
            className="w-full h-full object-cover" decoding="async" />
        )}
      </motion.div>

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Glassmorphism badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-xl px-5 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.9)]" />
          <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/90 font-body">
            Divine Serenity
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-tight drop-shadow-2xl"
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #ffffff 0%, #fde68a 45%, #d4a24c 100%)",
            }}
          >
            Sacred Spiritual
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-base md:text-lg text-white/85 font-body leading-relaxed"
        >
          Find peace at revered ghats, ancient stupas, and Mahakaleshwar
          Jyotirlinga — a journey for the soul.
        </motion.p>
      </div>

      {/* Subtle bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
};

export default SpiritualHero;

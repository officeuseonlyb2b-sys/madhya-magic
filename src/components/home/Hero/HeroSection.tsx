import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HERO_VIDEO } from "@/config/heroVideo";

/**
 * Home Hero Section
 * - Single autoplay/muted/loop/playsInline video
 * - Reads source from src/config/heroVideo.ts
 * - Graceful fallback to poster image if the video fails to load
 * - Lazy-mounts when the section is near the viewport
 */
const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Preserved for backward compatibility of parallax behaviour
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  void textY; void opacity;

  // Lazy mount the video element until close to viewport
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

  // Attempt autoplay once mounted
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !inView) return;
    v.play().catch(() => {
      /* autoplay may be blocked — loop/poster still visible */
    });
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end justify-start overflow-hidden bg-black"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          opacity: { duration: 1.4, ease: "easeInOut" },
          scale: { duration: 10, ease: "easeOut" },
        }}
        className="absolute inset-0 w-full h-full"
      >
        {inView && !hasError ? (
          <video
            ref={videoRef}
            src={HERO_VIDEO.src}
            poster={HERO_VIDEO.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={HERO_VIDEO.alt}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          // Fallback: poster image if video fails or hasn't mounted yet
          <img
            src={HERO_VIDEO.poster}
            alt={HERO_VIDEO.alt}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        )}

        {/* Overlay — preserved */}
        <div className="absolute inset-0 bg-black/35" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { cldVideo } from "@/lib/cloudinary"

// Video URLs
const DESKTOP_VIDEO_SRC = "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781689853/home-banner-video_cewinf.mp4";
const MOBILE_VIDEO_SRC  = "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781689287/main-mobile_s699xg.mp4";

// Poster and alt – replace with your actual poster URL and description
const POSTER_URL = "";          // e.g. "/hero-poster.jpg"
const ALT_TEXT   = "Hero video";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Pick the right video based on screen width + inject Cloudinary
  // delivery transformations (f_auto, q_auto, vc_auto, responsive width).
  const videoSrc = useMemo(
    () =>
      cldVideo(isMobile ? MOBILE_VIDEO_SRC : DESKTOP_VIDEO_SRC, {
        w: isMobile ? 720 : 1280,
      }),
    [isMobile],
  );

  // Parallax / fade effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  void textY;
  void opacity;

  // Detect screen size (mobile ≤ 767px)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Intersection Observer to trigger video load/play
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

  // Auto‑play when visible
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !inView) return;
    v.play().catch(() => {});
  }, [inView]);

  // Reset error flag when video source changes
  useEffect(() => {
    setHasError(false);
  }, [videoSrc]);

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
            key={videoSrc}
            src={videoSrc}
            poster={POSTER_URL}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={ALT_TEXT}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={POSTER_URL}
            alt={ALT_TEXT}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        )}
        <div className="absolute inset-0" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
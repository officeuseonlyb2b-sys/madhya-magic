import { motion } from "framer-motion";
import { MapPin, Pause, Play } from "lucide-react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { SawanCampaign } from "@/data/exclusive/sawanData";
import { useInViewport } from "@/hooks/useInViewport";

// ============================================================
// VIDEO – no overlays, stops on scroll
// ============================================================
const ReelVideo = memo(
  ({
    reel,
    shouldLoad,
    playing,
    onTogglePlay,
  }: {
    reel: SawanCampaign["reels"][number];
    shouldLoad: boolean;
    playing: boolean;
    onTogglePlay: () => void;
  }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    // Play/pause based on the "playing" prop (which accounts for scroll)
    useEffect(() => {
      const v = videoRef.current;
      if (!v) return;
      if (playing && shouldLoad) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    }, [playing, shouldLoad]);

    return (
      <>
        <video
          ref={videoRef}
          src={reel.videoUrl}
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover border-0 outline-none ring-0"
        />

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onTogglePlay();
          }}
          aria-label={playing ? "Pause reel" : "Play reel"}
          className="absolute bottom-3 right-3 z-20 grid place-items-center w-10 h-10 rounded-full bg-black/45 hover:bg-black/65 text-white backdrop-blur-sm transition-all active:scale-95"
        >
          {playing ? <Pause size={16} fill="white" /> : <Play size={16} fill="white" />}
        </button>
      </>
    );
  }
);

ReelVideo.displayName = "ExclusiveReelVideo";

// ============================================================
// CARD – playing respects scroll state
// ============================================================
const ReelCard = memo(
  ({
    reel,
    index,
    isScrolling, // ← new prop: global scroll flag
  }: {
    reel: SawanCampaign["reels"][number];
    index: number;
    isScrolling: boolean;
  }) => {
    const [hovered, setHovered] = useState(false);
    const [userPlaying, setUserPlaying] = useState(false);
    const { ref: viewRef, inView } = useInViewport<HTMLDivElement>("400px");

    // Video plays only if NOT scrolling AND (hovered OR user clicked play)
    const playing = !isScrolling && (hovered || userPlaying);

    // When scrolling starts, any manually playing video is overridden
    // (but we keep userPlaying state – it will resume when scrolling stops + hover)
    // Optional: reset userPlaying when scrolling starts to avoid unexpected resume
    useEffect(() => {
      if (isScrolling) {
        // If you want to also clear the manual "play" flag on scroll, uncomment next line:
        // setUserPlaying(false);
      }
    }, [isScrolling]);

    return (
      <motion.div
        ref={viewRef}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: Math.min(index, 6) * 0.04 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          outline: "none",
          border: "none",
          boxShadow: "none",
          WebkitTapHighlightColor: "transparent",
        }}
        className="reel-card w-[85vw] max-w-[320px] sm:w-[250px] sm:max-w-none md:w-[280px] flex-shrink-0 focus:outline-none focus:ring-0 snap-start"
      >
        <div className="group relative overflow-hidden rounded-[24px] bg-transparent border-none outline-none ring-0 shadow-none">
          <div className="relative h-[460px] sm:h-[380px] md:h-[450px] overflow-hidden rounded-[24px] border-none outline-none ring-0 shadow-none bg-transparent">
            <ReelVideo
              reel={reel}
              shouldLoad={inView}
              playing={playing}
              onTogglePlay={() => setUserPlaying((p) => !p)}
            />

            {/* Title (top) */}
            <div
              className={`absolute top-6 left-1/2 -translate-x-1/2 text-center px-4 w-full transition-all duration-500 pointer-events-none ${
                hovered
                  ? "opacity-0 -translate-y-5"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <h3 className="text-white uppercase tracking-[2px] text-xs sm:text-sm md:text-base font-light leading-snug font-display drop-shadow-md">
                {reel.title}
              </h3>
            </div>

            {/* Tag (bottom) */}
            <div
              className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-center transition-all duration-500 pointer-events-none ${
                hovered
                  ? "opacity-0 translate-y-5"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <span className="text-white/90 text-[10px] tracking-[4px] uppercase drop-shadow-md">
                ॐ SHRAVAN
              </span>
            </div>
          </div>

          {/* Location bar */}
          <div className="bg-white py-4 px-3 text-center border-none outline-none ring-0 shadow-none">
            <div className="flex items-center justify-center gap-2 text-black">
              <MapPin size={14} />
              <span className="uppercase tracking-[2px] text-xs sm:text-sm font-medium">
                {reel.location}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

ReelCard.displayName = "ExclusiveReelCard";

// ============================================================
// MAIN SECTION – infinite auto‑scroll + scroll detection to stop videos
// ============================================================
interface Props {
  reels: SawanCampaign["reels"];
}

const ExclusiveReels = ({ reels }: Props) => {
  // Triple the data for infinite seamless scroll
  const sliderData = useMemo(() => [...reels, ...reels, ...reels], [reels]);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const oneSetWidthRef = useRef(0);
  const speedRef = useRef(50); // pixels per second
  const [isHovered, setIsHovered] = useState(false);   // pauses auto‑scroll on hover
  const [isScrolling, setIsScrolling] = useState(false); // true while user scrolls → videos pause

  // ---- measure one set width (the width of a single copy) ----
  const measureSetWidth = useCallback(() => {
    if (!trackRef.current) return;
    const trackWidth = trackRef.current.scrollWidth;
    oneSetWidthRef.current = trackWidth / 3;
  }, []);

  useEffect(() => {
    measureSetWidth();
    const observer = new ResizeObserver(measureSetWidth);
    if (trackRef.current) observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, [measureSetWidth, reels]);

  // ---- animation loop (only when NOT hovered) ----
  const animate = useCallback(
    (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = timestamp;

      const el = containerRef.current;
      if (!el || isHovered || oneSetWidthRef.current === 0) {
        // If hovered, we don't move – the user scrolls manually
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      // Move scrollLeft smoothly
      el.scrollLeft += speedRef.current * delta;

      // Seamless reset (both changes happen in the same frame, no visual jump)
      const maxScroll = oneSetWidthRef.current * 2;
      if (el.scrollLeft >= maxScroll) {
        el.scrollLeft -= oneSetWidthRef.current;
      } else if (el.scrollLeft <= 0) {
        el.scrollLeft += oneSetWidthRef.current;
      }

      animFrameRef.current = requestAnimationFrame(animate);
    },
    [isHovered]
  );

  useEffect(() => {
    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [animate]);

  // ---- mouse handlers: pause auto‑scroll on hover ----
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  // ---- scroll detection: while user scrolls, videos stop ----
  const handleScroll = useCallback(() => {
    // Set scrolling flag true
    setIsScrolling(true);
    // Clear any existing timeout
    if (window.scrollTimeout) clearTimeout(window.scrollTimeout);
    // After 200ms of no scroll events, reset scrolling flag
    window.scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 200);
  }, []);

  // Attach scroll listener to the container (for manual scroll)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (window.scrollTimeout) clearTimeout(window.scrollTimeout);
    };
  }, [handleScroll]);

  return (
    <section id="sawan-reels" className="relative py-12 sm:py-16 md:py-28 overflow-hidden bg-white">
      {/* Decorative rings */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-orange-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-orange-400" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-orange-600 uppercase tracking-[0.35em] text-[10px] sm:text-xs mb-4 border-b border-orange-300 pb-2 inline-block">
            ॐ glimpses of devotion
          </span>
          <h2 className="font-display text-orange-800 text-2xl sm:text-3xl md:text-5xl lg:text-6xl mt-3">
            Experience The Spirit of Shravan
          </h2>
          <div className="mt-3 flex justify-center gap-2">
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
            <span className="text-orange-500">🕉️</span>
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          </div>
        </motion.div>

        {/* Slider – hover pauses auto‑scroll, scrolling pauses all videos */}
        {reels.length === 0 ? (
          <p className="text-center text-orange-800/70 py-10">
            No reels available for this campaign.
          </p>
        ) : (
          <div
            ref={containerRef}
            className="overflow-x-auto no-scrollbar py-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div ref={trackRef} className="flex gap-5 w-max">
              {sliderData.map((reel, i) => (
                <ReelCard
                  key={`${reel.id}-${i}`}
                  reel={reel}
                  index={i}
                  isScrolling={isScrolling}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// TypeScript helper for the scroll timeout (cleaner)
declare global {
  interface Window {
    scrollTimeout?: NodeJS.Timeout;
  }
}

export default ExclusiveReels;
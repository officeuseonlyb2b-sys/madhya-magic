import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import type { SawanCampaign } from "@/data/exclusive/sawanData";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import { useInViewport } from "@/hooks/useInViewport";

// ============================================================
// VIDEO (no white flash, lazy loading)
// ============================================================
const ReelVideo = memo(
  ({
    reel,
    isHovered,
    shouldLoad,
  }: {
    reel: SawanCampaign["reels"][number];
    isHovered: boolean;
    shouldLoad: boolean;
  }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [loaded, setLoaded] = useState(false);

    // Play / pause on hover
    useEffect(() => {
      const v = videoRef.current;
      if (!v) return;
      if (isHovered) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    }, [isHovered]);

    // Don’t render any <video> until we’re near the viewport
    if (!shouldLoad) {
      return <div className="absolute inset-0 bg-transparent" />;
    }

    return (
      <>
        {/* Loading shimmer */}
        {!loaded && (
          <div className="absolute inset-0 bg-neutral-100 animate-pulse" />
        )}
        <video
          ref={videoRef}
          src={reel.videoUrl}
          muted
          loop
          playsInline
          preload="metadata"
          poster={reel.image} // fallback poster
          onLoadedData={() => setLoaded(true)}
          // This background image is shown instantly → no white flash
          style={{
            backgroundImage: `url(${reel.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={`absolute inset-0 w-full h-full object-cover border-0 outline-none ring-0 transition-all duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${isHovered ? "scale-100" : "scale-105"}`}
        />
      </>
    );
  }
);

ReelVideo.displayName = "ExclusiveReelVideo";

// ============================================================
// CARD (same style as ActivitiesReelsSection)
// ============================================================
const ReelCard = memo(
  ({
    reel,
    index,
  }: {
    reel: SawanCampaign["reels"][number];
    index: number;
  }) => {
    const [hovered, setHovered] = useState(false);
    const { ref: viewRef, inView } = useInViewport<HTMLDivElement>("400px");

    return (
      <motion.div
        ref={viewRef}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: Math.min(index, 6) * 0.04 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
        style={{
          outline: "none",
          border: "none",
          boxShadow: "none",
          WebkitTapHighlightColor: "transparent",
        }}
        className="reel-card w-[180px] sm:w-[250px] md:w-[280px] flex-shrink-0 focus:outline-none focus:ring-0"
      >
        <div className="group relative overflow-hidden rounded-[24px] bg-black border-none outline-none ring-0 shadow-none">
          {/* MEDIA CONTAINER */}
          <div className="relative h-[320px] sm:h-[380px] md:h-[450px] overflow-hidden rounded-[24px] border-none outline-none ring-0 shadow-none bg-black">
            {/* LAZY VIDEO */}
            <ReelVideo reel={reel} isHovered={hovered} shouldLoad={inView} />

            {/* GRADIENT OVERLAY */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 transition-opacity duration-500 pointer-events-none ${
                hovered ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* TITLE (top) */}
            <div
              className={`absolute top-6 left-1/2 -translate-x-1/2 text-center px-4 w-full transition-all duration-500 pointer-events-none ${
                hovered
                  ? "opacity-0 -translate-y-5"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <h3 className="text-white uppercase tracking-[2px] text-xs sm:text-sm md:text-base font-light leading-snug font-display">
                {reel.title}
              </h3>
            </div>

            {/* CATEGORY / TAG (bottom) */}
            <div
              className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-center transition-all duration-500 pointer-events-none ${
                hovered
                  ? "opacity-0 translate-y-5"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <span className="text-white/90 text-[10px] tracking-[4px] uppercase">
                ॐ SHRAVAN
              </span>
            </div>
          </div>

          {/* LOCATION BAR (below video) */}
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
// MAIN SECTION
// ============================================================
interface Props {
  reels: SawanCampaign["reels"];
}

const ExclusiveReels = ({ reels }: Props) => {
  // Triple the data for infinite smooth scroll
  const sliderData = useMemo(
    () => [...reels, ...reels, ...reels],
    [reels]
  );

  // Auto‑scroll on mouse hover
  const { ref, onMouseEnter, onMouseLeave } =
    useAutoScroll<HTMLDivElement>(50);

  // Start from the middle copy
  useEffect(() => {
    const el = ref.current;
    if (!el || reels.length === 0) return;
    requestAnimationFrame(() => {
      el.scrollLeft = el.scrollWidth / 3;
    });
  }, [reels]);

  // Keep the loop seamless
  const handleScroll = () => {
    const el = ref.current;
    if (!el) return;
    const oneSet = el.scrollWidth / 3;
    if (el.scrollLeft >= oneSet * 2) {
      el.scrollLeft = oneSet;
    }
    if (el.scrollLeft <= 0) {
      el.scrollLeft = oneSet;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-28 overflow-hidden bg-white">
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

        {/* Slider */}
        {reels.length === 0 ? (
          <p className="text-center text-orange-800/70 py-10">
            No reels available for this campaign.
          </p>
        ) : (
          <div
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onScroll={handleScroll}
            className="overflow-x-auto no-scrollbar py-4"
          >
            <div className="flex gap-5 w-max items-center">
              {sliderData.map((reel, i) => (
                <ReelCard
                  key={`${reel.id}-${i}`}
                  reel={reel}
                  index={i}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExclusiveReels;
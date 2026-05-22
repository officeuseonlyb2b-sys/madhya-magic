import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { MapPin } from "lucide-react";

import { useFilters } from "@/contexts/FilterContext";
import { reelsData, type ReelItem } from "@/data/reelsData";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import { getReelCategories, matchesFilters } from "@/lib/categoryMatch";

// ============================================================
// VIDEO
// ============================================================

const ReelVideo = ({
  reel,
  isHovered,
}: {
  reel: ReelItem;
  isHovered: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;

    if (!v) return;

    if (isHovered) {
      v.play().catch(() => {});
    } else {
      v.pause();

      try {
        v.currentTime = 0;
      } catch {}
    }
  }, [isHovered]);

  return (
    <video
      ref={videoRef}
      src={reel.videoUrl}
      muted
      loop
      playsInline
      preload="metadata"
      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 will-change-transform ${
        isHovered ? "scale-100" : "scale-110"
      }`}
    />
  );
};

// ============================================================
// CARD
// ============================================================

const ReelCard = ({
  reel,
  index,
}: {
  reel: ReelItem;
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      className="w-[220px] sm:w-[250px] lg:w-[280px] flex-shrink-0"
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <div className="group relative overflow-hidden rounded-[24px] bg-black">

        {/* MEDIA */}
        <div className="relative h-[320px] sm:h-[380px] lg:h-[450px] overflow-hidden rounded-[24px] bg-black">

          {/* VIDEO */}
          <ReelVideo reel={reel} isHovered={hovered} />

          {/* OVERLAY */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 transition-opacity duration-500 pointer-events-none ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* TOP TITLE */}
          <div
            className={`absolute top-6 left-1/2 -translate-x-1/2 text-center px-4 w-full transition-all duration-500 pointer-events-none ${
              hovered
                ? "opacity-0 -translate-y-5"
                : "opacity-100 translate-y-0"
            }`}
          >
            <h3 className="text-white uppercase tracking-[2px] text-xs sm:text-sm lg:text-base font-light leading-snug font-display">
              {reel.title}
            </h3>
          </div>

          {/* CATEGORY */}
          <div
            className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-center transition-all duration-500 pointer-events-none ${
              hovered
                ? "opacity-0 translate-y-5"
                : "opacity-100 translate-y-0"
            }`}
          >
            <span className="text-white/90 text-[10px] tracking-[4px] uppercase">
              {reel.category}
            </span>
          </div>
        </div>

        {/* LOCATION */}
        <div className="bg-white py-4 px-3 text-center">
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
};

// ============================================================
// MAIN SECTION
// ============================================================

const ReelsSection = () => {
  const { selectedFilters, isAll } = useFilters();

  const { ref, onMouseEnter, onMouseLeave } =
    useAutoScroll<HTMLDivElement>(50);

  // ============================================================
  // FILTER DATA
  // ============================================================

  const filteredReels = useMemo(() => {
    if (isAll) return reelsData;

    return reelsData.filter((r) =>
      matchesFilters(getReelCategories(r), selectedFilters, isAll),
    );
  }, [selectedFilters, isAll]);

  // ============================================================
  // TRIPLE DATA FOR PERFECT LOOP
  // ============================================================

  const sliderData = useMemo(
    () => [...filteredReels, ...filteredReels, ...filteredReels],
    [filteredReels]
  );

  // ============================================================
  // START FROM CENTER
  // ============================================================

  useEffect(() => {
    const el = ref.current;

    if (!el || filteredReels.length === 0) return;

    requestAnimationFrame(() => {
      el.scrollLeft = el.scrollWidth / 3;
    });
  }, [filteredReels]);

  // ============================================================
  // JSX
  // ============================================================

  return (
    <section className="relative py-14 sm:py-16 lg:py-20 bg-white overflow-hidden">

      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('/patterns/topography.svg')] bg-cover bg-center pointer-events-none" />

      {/* CONTAINER */}
      <div className="relative z-10 max-w-[1350px] mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-[30%_70%] gap-8 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            {/* SCRIPT TEXT */}
            <span className="font-script block text-black text-3xl sm:text-4xl mb-3">
              Explore the Beauty of
            </span>

            {/* HEADING */}
            <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05] uppercase font-light tracking-wide font-display">
              Top
              <br />
              Destinations
            </h2>

            {/* DESCRIPTION */}
            <p className="text-black mt-5 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
              {isAll
                ? "Discover iconic landscapes, hidden gems, and unforgettable destinations across Madhya Pradesh."
                : `Reels matching: ${selectedFilters.join(", ")}`}
            </p>
          </div>

          {/* RIGHT SLIDER */}
          {sliderData.length === 0 ? (
            <p className="text-center text-black py-10">
              No reels match the selected categories.
            </p>
          ) : (
            <div
              ref={ref}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onScroll={() => {
                const el = ref.current;

                if (!el) return;

                const oneSetWidth = el.scrollWidth / 3;

                // END → CENTER
                if (el.scrollLeft >= oneSetWidth * 2) {
                  el.scrollLeft = oneSetWidth;
                }

                // START → CENTER
                if (el.scrollLeft <= 0) {
                  el.scrollLeft = oneSetWidth;
                }
              }}
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
      </div>
    </section>
  );
};

export default ReelsSection;
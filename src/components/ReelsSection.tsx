import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Play,
} from "lucide-react";

import { useFilters } from "@/contexts/FilterContext";
import { reelsData, type ReelItem } from "@/data/reelsData";
import { useAutoScroll } from "@/hooks/useAutoScroll";

// ----- VIDEO -----
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
      try { v.currentTime = 0; } catch {}
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
      className={`absolute inset-0 w-full h-full object-cover border-0 outline-none ring-0 transition-all duration-700 ${
        isHovered ? "scale-100 opacity-100" : "scale-110 opacity-100"
      }`}
    />
  );
};

// ----- CARD -----
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
      style={{
        outline: "none",
        border: "none",
        boxShadow: "none",
        WebkitTapHighlightColor: "transparent",
      }}
      className="reel-card w-[220px] sm:w-[250px] lg:w-[280px] flex-shrink-0 focus:outline-none focus:ring-0"
    >
      <div className="group relative overflow-hidden rounded-[24px] bg-black border-none outline-none ring-0 shadow-none">

        {/* MEDIA */}
        <div className="relative h-[320px] sm:h-[380px] lg:h-[450px] overflow-hidden rounded-[24px] border-none outline-none ring-0 shadow-none bg-black">

          {/* VIDEO */}
          <ReelVideo reel={reel} isHovered={hovered} />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 pointer-events-none" />

          {/* TOP TITLE */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center px-4 w-full pointer-events-none">
            <h3 className="text-white uppercase tracking-[2px] text-xs sm:text-sm lg:text-base font-light leading-snug font-display">
              {reel.title}
            </h3>
          </div>

          {/* CATEGORY */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none">
            <span className="text-white/90 text-[10px] tracking-[4px] uppercase">
              {reel.category}
            </span>
          </div>
        </div>

        {/* LOCATION */}
        <div className="bg-[#f4efe8] py-4 px-3 text-center border-none outline-none ring-0 shadow-none">
          <div className="flex items-center justify-center gap-2 text-[#8b5e4f]">
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

// ----- MAIN SECTION -----
const ReelsSection = () => {
  const { selectedFilters, isAll } = useFilters();

  const { ref, onMouseEnter, onMouseLeave } =
    useAutoScroll<HTMLDivElement>(50);

  // FILTER DATA
  const filteredReels = useMemo(() => {
    if (isAll) return reelsData;

    return reelsData.filter((r) =>
      selectedFilters.includes(r.category as any)
    );
  }, [selectedFilters, isAll]);

  // DUPLICATE FOR INFINITE LOOP
  const sliderData = useMemo(
    () => [...filteredReels, ...filteredReels],
    [filteredReels]
  );

  return (
    <section className="relative py-14 sm:py-16 lg:py-20 bg-white overflow-hidden">

      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('/patterns/topography.svg')] bg-cover bg-center pointer-events-none" />

      {/* SMALL CONTAINER */}
      <div className="relative z-10 max-w-[1350px] mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-[30%_70%] gap-8 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            {/* SCRIPT TEXT */}
            <span className="block text-[#7d6673] text-2xl sm:text-3xl font-light italic mb-3">
              Explore the Beauty of
            </span>

            {/* HEADING */}
            <h2 className="text-[#7a5d65] text-3xl sm:text-4xl lg:text-5xl leading-[1.05] uppercase font-light tracking-wide font-display">
              Top
              <br />
              Destinations
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[#7c6b67] mt-5 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
              {isAll
                ? "Discover iconic landscapes, hidden gems, and unforgettable destinations across Madhya Pradesh."
                : `Reels matching: ${selectedFilters.join(", ")}`}
            </p>

          </div>

          {/* RIGHT SLIDER */}
          {sliderData.length === 0 ? (
            <p className="text-center text-[#7a5d65] py-10">
              No reels match the selected categories.
            </p>
          ) : (
            <div
              ref={ref}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="reel-scroller overflow-x-auto no-scrollbar py-4"
            >
              <div className="reel-track flex gap-5 w-max items-center">

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
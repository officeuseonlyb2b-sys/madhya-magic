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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;

    if (!v) return;

    if (isHovered) {
      if (!loaded) {
        v.load();
        setLoaded(true);
      }

      v.play().catch(() => { });
    } else {
      v.pause();

      try {
        v.currentTime = 0;
      } catch { }
    }
  }, [isHovered, loaded]);

  return (
    <video
      ref={videoRef}
      src={reel.videoUrl}
      poster={reel.thumbnail}
      muted
      loop
      playsInline
      preload="none"
      className={`absolute inset-0 w-full h-full object-cover border-0 outline-none ring-0 transition-all duration-700 ${isHovered ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
    />
  );
};

// ----- CARD -----
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
      <div className="group relative overflow-hidden rounded-[24px] bg-[#f4efe8] border-none outline-none ring-0 shadow-none">

        {/* MEDIA */}
        <div className="relative h-[320px] sm:h-[380px] lg:h-[450px] overflow-hidden rounded-[24px] border-none outline-none ring-0 shadow-none">

          {/* VIDEO */}
          <ReelVideo reel={reel} isHovered={hovered} />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 pointer-events-none" />

          {/* TOP TITLE */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center px-4 w-full pointer-events-none">
            <h3 className="text-white uppercase tracking-[2px] text-xs sm:text-sm lg:text-base font-light leading-snug">
              {reel.title}
            </h3>
          </div>

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">
              <Play size={22} fill="white" className="ml-1 text-white" />
            </div>
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
          <div className="flex items-center justify-center gap-2 text-[#7d5f4f]">
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
            <span className="block text-[#61746d] text-2xl sm:text-3xl font-light italic mb-3">
              Explore the Beauty of
            </span>

            {/* HEADING */}
            <h2 className="text-[#435750] text-3xl sm:text-4xl lg:text-5xl leading-[1.05] uppercase font-light tracking-wide">
              Top
              <br />
              Destinations
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[#5d6e68] mt-5 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
              {isAll
                ? "Discover iconic landscapes, hidden gems, and unforgettable destinations across Madhya Pradesh."
                : `Reels matching: ${selectedFilters.join(", ")}`}
            </p>

            {/* BUTTON */}
            <Link
              to="/"
              className="group inline-flex items-center gap-3 mt-7 border border-[#5f746c] rounded-full px-5 py-2.5 text-[#435750] hover:bg-[#5f746c] hover:text-white transition-all duration-300"
            >
              <span className="uppercase tracking-[3px] text-[11px] sm:text-xs">
                Discover More
              </span>

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* ARROWS */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-10 text-[#435750]">

              <button className="hover:scale-110 transition">
                <ChevronLeft size={34} strokeWidth={1.5} />
              </button>

              <button className="hover:scale-110 transition">
                <ChevronRight size={34} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          {sliderData.length === 0 ? (
            <p className="text-center text-[#435750] py-10">
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
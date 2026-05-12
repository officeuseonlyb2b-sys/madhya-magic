import { motion } from "framer-motion";
import { useMemo, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useFilters } from "@/contexts/FilterContext";
import type { MapCategory } from "@/data/mapDestinations";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import {
  activityReelsData,
  type ActivityReel,
  type ActivityReelCategory,
} from "@/data/activityReelsData";

// Map global filter category -> activity reel categories
const filterToActivityCategories: Record<
  MapCategory,
  ActivityReelCategory[]
> = {
  Wildlife: ["Wildlife"],
  Heritage: ["Heritage"],
  Nature: ["Nature", "Adventure"],
  Spiritual: ["Heritage", "Spiritual"],
};

// ----- SINGLE LUXURY CARD -----
// ----- SINGLE LUXURY CARD -----
const ActivityCard = ({
  reel,
  index,
}: {
  reel: ActivityReel;
  index: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;

    if (!v) return;

    if (hovered) {
      if (!loaded) {
        v.load();
        setLoaded(true);
      }

      v.play().catch(() => {});
    } else {
      v.pause();

      try {
        v.currentTime = 0;
      } catch {}
    }
  }, [hovered, loaded]);

  const Inner = (
    <div className="group relative overflow-hidden rounded-[24px] bg-[#f5f1ec] border-none outline-none ring-0 shadow-none">

      {/* IMAGE / VIDEO */}
      <div className="relative h-[320px] sm:h-[380px] lg:h-[450px] overflow-hidden rounded-[24px] border-none outline-none ring-0 shadow-none">

        {/* IMAGE */}
        

        {/* VIDEO */}
        <video
          ref={videoRef}
          src={reel.video}
          poster={reel.thumbnail}
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover border-0 outline-none ring-0 transition-all duration-700 ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 pointer-events-none" />

        {/* TOP TITLE */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center px-4 w-full pointer-events-none">
          <h3 className="text-white uppercase tracking-[2px] text-xs sm:text-sm lg:text-base font-light leading-snug">
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
      <div className="bg-[#f5f1ec] py-4 px-3 text-center border-none outline-none ring-0 shadow-none">
        <div className="flex items-center justify-center gap-2 text-[#8b5e4f]">
          <MapPin size={14} />
          <span className="uppercase tracking-[2px] text-xs sm:text-sm font-medium">
            {reel.location}
          </span>
        </div>
      </div>
    </div>
  );

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
      className="reel-card w-[220px] sm:w-[250px] lg:w-[280px] flex-shrink-0 focus:outline-none focus:ring-0 border-none outline-none ring-0 shadow-none"
    >
      {reel.link ? (
        <Link
          to={reel.link}
          className="block border-none outline-none ring-0 focus:outline-none focus:ring-0"
        >
          {Inner}
        </Link>
      ) : (
        Inner
      )}
    </motion.div>
  );
};
// ----- MAIN SECTION -----
const ActivitiesReelsSection = () => {
  const { selectedFilters, isAll } = useFilters();

  const { ref, onMouseEnter, onMouseLeave } =
    useAutoScroll<HTMLDivElement>(-50);

  // FILTER REELS
  const reels = useMemo(() => {
    if (isAll) return activityReelsData;

    const allowed = new Set<ActivityReelCategory>();

    selectedFilters.forEach((f) => {
      filterToActivityCategories[f]?.forEach((c) => allowed.add(c));
    });

    return activityReelsData.filter((a) => allowed.has(a.category));
  }, [selectedFilters, isAll]);

  // DUPLICATE FOR INFINITE LOOP
  const sliderData = useMemo(() => [...reels, ...reels], [reels]);

  return (
    <section className="relative py-14 sm:py-16 lg:py-20 bg-[#f5f1ec] overflow-hidden">

      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('/patterns/topography.svg')] bg-cover bg-center pointer-events-none" />

      {/* SMALLER CONTAINER */}
      <div className="relative z-10 max-w-[1350px] mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-[30%_70%] gap-8 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            {/* SCRIPT TEXT */}
            <span className="block text-[#7d6673] text-2xl sm:text-3xl font-light italic mb-3">
              Discover the World of
            </span>

            {/* HEADING */}
            <h2 className="text-[#7a5d65] text-3xl sm:text-4xl lg:text-5xl leading-[1.05] uppercase font-light tracking-wide">
              Top
              <br />
              Activities
              
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[#7c6b67] mt-5 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
              {isAll
                ? "Discover unforgettable adventures across Madhya Pradesh with curated luxury experiences."
                : `Activities matching: ${selectedFilters.join(", ")}`}
            </p>

            {/* BUTTON */}
            <Link
              to="/activities"
              className="group inline-flex items-center gap-3 mt-7 border border-[#8b6f78] rounded-full px-5 py-2.5 text-[#7a5d65] hover:bg-[#8b6f78] hover:text-white transition-all duration-300"
            >
              <span className="uppercase tracking-[3px] text-[11px] sm:text-xs">
                Explore More
              </span>

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* ARROWS */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-10 text-[#7a5d65]">

              <button className="hover:scale-110 transition">
                <ChevronLeft size={34} strokeWidth={1.5} />
              </button>

              <button className="hover:scale-110 transition">
                <ChevronRight size={34} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="order-1 lg:order-2">

            {sliderData.length === 0 ? (
              <p className="text-center text-[#7a5d65] py-10">
                No activities match the selected categories.
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
                    <ActivityCard
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
      </div>
    </section>
  );
};

export default ActivitiesReelsSection;
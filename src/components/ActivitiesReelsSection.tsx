import { motion } from "framer-motion";
import { useMemo, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { useFilters } from "@/contexts/FilterContext";
import type { MapCategory } from "@/data/mapDestinations";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import {
  activityReelsData,
  type ActivityReel,
  type ActivityReelCategory,
} from "@/data/activityReelsData";

// Map global filter category -> activity reel categories
const filterToActivityCategories: Record<MapCategory, ActivityReelCategory[]> = {
  Wildlife: ["Wildlife"],
  Heritage: ["Heritage"],
  Nature: ["Nature", "Adventure"],
  Spiritual: ["Heritage", "Spiritual"],
};

// ----- Single reel card with hover-to-play video -----
const ActivityCard = ({ reel, index }: { reel: ActivityReel; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (hovered) {
      // Lazy-load: only fetch the video when user hovers
      if (!loaded) {
        v.load();
        setLoaded(true);
      }
      v.play().catch(() => {});
    } else {
      v.pause();
      try { v.currentTime = 0; } catch {}
    }
  }, [hovered, loaded]);

  const Inner = (
    <div className="group relative h-[320px] sm:h-[340px] lg:h-[360px] rounded-3xl overflow-hidden cursor-pointer bg-black">
      <img
        src={reel.thumbnail}
        alt={reel.title}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`}
      />
      <video
        ref={videoRef}
        src={reel.video}
        poster={reel.thumbnail}
        muted
        loop
        playsInline
        preload="none"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

      <div className="absolute top-4 left-4">
        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/80 backdrop-blur-md text-white shadow-lg">
          {reel.category}
        </span>
      </div>

      <div className="absolute bottom-6 left-6 right-6 text-white">
        <h3 className="text-lg font-bold line-clamp-1">{reel.title}</h3>
        <div className="flex items-center gap-1 text-xs mt-1 opacity-90">
          <MapPin size={12} />
          <span>{reel.location}</span>
        </div>
        <span className="inline-flex items-center gap-2 mt-3 text-xs uppercase tracking-widest">
          Explore
          <ArrowRight size={14} />
        </span>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      className="reel-card w-[220px] sm:w-[240px] lg:w-[260px] flex-shrink-0 rounded-3xl"
    >
      {reel.link ? <Link to={reel.link}>{Inner}</Link> : Inner}
    </motion.div>
  );
};

const ActivitiesReelsSection = () => {
  const { selectedFilters, isAll } = useFilters();
  const { ref, onMouseEnter, onMouseLeave } = useAutoScroll<HTMLDivElement>(-55);

  // Filter reels based on the global category filter
  const reels = useMemo(() => {
    if (isAll) return activityReelsData;
    const allowed = new Set<ActivityReelCategory>();
    selectedFilters.forEach((f) => {
      filterToActivityCategories[f]?.forEach((c) => allowed.add(c));
    });
    return activityReelsData.filter((a) => allowed.has(a.category));
  }, [selectedFilters, isAll]);

  // Duplicate list for seamless infinite-scroll loop
  const sliderData = useMemo(() => [...reels, ...reels], [reels]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[70%_30%] gap-8 lg:gap-14 items-center">

          {/* LEFT SLIDER */}
          {sliderData.length === 0 ? (
            <p className="text-center text-muted-foreground py-10">
              No activities match the selected categories.
            </p>
          ) : (
            <div
              ref={ref}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="reel-scroller overflow-x-auto no-scrollbar order-1 py-4"
            >
              <div className="reel-track flex gap-5 w-max items-center">
                {sliderData.map((reel, i) => (
                  <ActivityCard key={`${reel.id}-${i}`} reel={reel} index={i} />
                ))}
              </div>
            </div>
          )}

          {/* RIGHT TEXT */}
          <div className="text-center lg:text-left order-2">
            <span className="text-orange-500 uppercase text-xs sm:text-sm font-semibold tracking-widest">
              Things To Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 leading-tight">
              Top activities
              <br />
              to experience
            </h2>
            <p className="text-gray-600 mt-4 sm:mt-5 text-sm sm:text-base">
              {isAll
                ? "From thrilling safaris to peaceful river rides — explore the best activities in Madhya Pradesh."
                : `Activities matching: ${selectedFilters.join(", ")}`}
            </p>
            <Link to="/activities" className="group mt-6 sm:mt-8 inline-flex items-center gap-3 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition">
                <ArrowRight size={18} className="group-hover:text-white transition" />
              </div>
              <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-orange-500 transition">
                Explore All Activities
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesReelsSection;

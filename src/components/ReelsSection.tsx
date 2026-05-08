import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Play } from "lucide-react";
import { useFilters } from "@/contexts/FilterContext";
import { reelsData, type ReelItem } from "@/data/reelsData";
import { useAutoScroll } from "@/hooks/useAutoScroll";

const ReelVideo = ({ reel, isHovered }: { reel: ReelItem; isHovered: boolean }) => {
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
      v.play().catch(() => {});
    } else {
      v.pause();
      try { v.currentTime = 0; } catch {}
    }
  }, [isHovered, loaded]);

  return (
    <div className="absolute inset-0 bg-black">
      <video
        ref={videoRef}
        src={reel.videoUrl}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
};

const ReelCard = ({ reel, index }: { reel: ReelItem; index: number }) => {
  const [hovered, setHovered] = useState(false);
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
      <div className="group relative h-[320px] sm:h-[340px] lg:h-[360px] rounded-3xl overflow-hidden cursor-pointer">
        <ReelVideo reel={reel} isHovered={hovered} />

        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/35 pointer-events-none" />

        <div className="absolute top-4 left-4">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-md text-white shadow-lg text-shadow-soft">
            {reel.category}
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">
            <Play size={24} fill="white" className="ml-1 text-white" />
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h3 className="text-lg font-bold line-clamp-1 text-shadow-soft">
            {reel.title}
          </h3>

          <div className="flex items-center gap-1 text-xs mt-1 opacity-95 text-shadow-soft">
            <MapPin size={12} />
            <span>{reel.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ReelsSection = () => {
  const { selectedFilters, isAll } = useFilters();
  const { ref, onMouseEnter, onMouseLeave } = useAutoScroll<HTMLDivElement>(50);

  const filteredReels = useMemo(() => {
    if (isAll) return reelsData;
    return reelsData.filter((r) =>
      selectedFilters.includes(r.category as any)
    );
  }, [selectedFilters, isAll]);

  const sliderData = useMemo(
    () => [...filteredReels, ...filteredReels],
    [filteredReels]
  );

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[30%_70%] gap-8 lg:gap-14 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">
            <span className="text-orange-500 uppercase text-xs sm:text-sm font-semibold tracking-widest">
              Visual Stories
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 leading-tight">
              Top Destinations
              <br />
              Explore through cinematic reels
            </h2>

            <p className="text-gray-600 mt-4 sm:mt-5 text-sm sm:text-base">
              {isAll
                ? "Discover cinematic moments from Madhya Pradesh's most breathtaking destinations."
                : `Reels matching: ${selectedFilters.join(", ")}`}
            </p>

            <Link
              to="/"
              className="group mt-6 sm:mt-8 inline-flex items-center gap-3 sm:gap-4"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition">
                <ArrowRight
                  size={18}
                  className="group-hover:text-white transition"
                />
              </div>

              <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-orange-500 transition">
                Watch All Reels
              </span>
            </Link>
          </div>

          {/* RIGHT */}
          {sliderData.length === 0 ? (
            <p className="text-center text-muted-foreground py-10">
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

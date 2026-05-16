// ============================================================
// Combined "Reels & Experiences" — CATEGORY PAGES ONLY
// ------------------------------------------------------------
// Merges activity reels + experience reels into a single
// horizontal auto-scrolling slider, filtered by the active
// category via FilterContext. Home page is unaffected.
// ============================================================

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

import { useFilters } from "@/contexts/FilterContext";
import { activityReelsData } from "@/data/activityReelsData";
import { experiencesData } from "@/data/experiencesData";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import {
  getActivityReelCategories,
  getExperienceCategories,
  matchesFilters,
} from "@/lib/categoryMatch";

interface UnifiedReel {
  id: string;
  title: string;
  subtitle: string;
  video?: string;
  category: string;
  link?: string;
  source: "activity" | "experience";
}

const ReelVideo = ({
  video,
  isHovered,
}: {
  video?: string;
  isHovered: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isHovered) v.play().catch(() => {});
    else {
      v.pause();
      try { v.currentTime = 0; } catch {}
    }
  }, [isHovered]);
  if (!video) return null;
  return (
    <video
      ref={videoRef}
      src={video}
      muted
      loop
      playsInline
      preload="metadata"
      className={`absolute inset-0 w-full h-full object-cover border-0 outline-none ring-0 transition-transform duration-700 will-change-transform ${
        isHovered ? "scale-100" : "scale-110"
      }`}
    />
  );
};

const ReelCard = ({ reel, index }: { reel: UnifiedReel; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const Wrapper: any = reel.link ? Link : "div";
  const wrapperProps = reel.link ? { to: reel.link } : {};

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
      <Wrapper {...wrapperProps} className="block">
        <div className="group relative overflow-hidden rounded-[24px] bg-black border-none outline-none ring-0 shadow-none">
          <div className="relative h-[320px] sm:h-[380px] lg:h-[450px] overflow-hidden rounded-[24px] border-none outline-none ring-0 shadow-none bg-black">
            <ReelVideo video={reel.video} isHovered={hovered} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 pointer-events-none" />
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center px-4 w-full pointer-events-none">
              <h3 className="text-white uppercase tracking-[2px] text-xs sm:text-sm lg:text-base font-light leading-snug font-display">
                {reel.title}
              </h3>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none">
              <span className="text-white/90 text-[10px] tracking-[4px] uppercase">
                {reel.category}
              </span>
            </div>
          </div>
          <div className="bg-white py-4 px-3 text-center border-none outline-none ring-0 shadow-none">
            <div className="flex items-center justify-center gap-2 text-black">
              <MapPin size={14} />
              <span className="uppercase tracking-[2px] text-xs sm:text-sm font-medium">
                {reel.subtitle}
              </span>
            </div>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
};

const CategoryReelsExperiences = () => {
  const { selectedFilters, isAll } = useFilters();
  const { ref, onMouseEnter, onMouseLeave } = useAutoScroll<HTMLDivElement>(50);

  const merged: UnifiedReel[] = useMemo(() => {
    const acts = activityReelsData
      .filter((r) =>
        matchesFilters(getActivityReelCategories(r), selectedFilters, isAll),
      )
      .map<UnifiedReel>((r) => ({
        id: `act-${r.id}`,
        title: r.title,
        subtitle: r.location,
        video: r.video,
        category: r.category,
        link: r.link,
        source: "activity",
      }));

    const exps = experiencesData
      .filter((e) =>
        matchesFilters(getExperienceCategories(e), selectedFilters, isAll),
      )
      .map<UnifiedReel>((e) => ({
        id: `exp-${e.id}`,
        title: e.title,
        subtitle: e.subtitle,
        video: e.video,
        category: e.category,
        source: "experience",
      }));

    // Interleave so activities and experiences are mixed visually
    const out: UnifiedReel[] = [];
    const max = Math.max(acts.length, exps.length);
    for (let i = 0; i < max; i++) {
      if (acts[i]) out.push(acts[i]);
      if (exps[i]) out.push(exps[i]);
    }
    return out;
  }, [selectedFilters, isAll]);

  const sliderData = useMemo(() => [...merged, ...merged], [merged]);
  const activeLabel = isAll ? "" : selectedFilters.join(", ");

  return (
    <section className="relative py-10 sm:py-12 lg:py-14 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] bg-[url('/patterns/topography.svg')] bg-cover bg-center pointer-events-none" />

      <div className="relative z-10 max-w-[1350px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[70%_30%] gap-8 lg:gap-12 items-center">
          {/* SLIDER */}
          <div className="order-2 lg:order-1">
            {sliderData.length === 0 ? (
              <p className="text-center text-[#7a5d65] py-10">
                No reels or experiences match {activeLabel || "this category"}.
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
                    <ReelCard key={`${reel.id}-${i}`} reel={reel} index={i} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* TEXT */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <span className="block text-black text-2xl sm:text-3xl font-light italic mb-3">
              Reels &amp; Curated
            </span>
            <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05] uppercase font-light tracking-wide font-display">
              Activities
              <br />
              &amp; Experiences
            </h2>
            <p className="text-black mt-5 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
              {isAll
                ? "Hand-picked activities and immersive experiences across Madhya Pradesh."
                : `Activities & experiences matching: ${activeLabel}`}
            </p>
            <Link
              to="/experiences"
              className="group inline-flex items-center gap-3 mt-7 border border-black rounded-full px-5 py-2.5 text-black hover:bg-[#7a6256] hover:text-white transition-all duration-300"
            >
              <span className="uppercase tracking-[3px] text-[11px] sm:text-xs">
                Explore More
              </span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryReelsExperiences;

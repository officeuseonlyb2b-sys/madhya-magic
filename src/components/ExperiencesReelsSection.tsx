import { motion } from "framer-motion";
import { useMemo, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
} from "lucide-react";

import { experiencesData } from "@/data/experiencesData";
import { useFilters } from "@/contexts/FilterContext";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import {
  getExperienceCategories,
  matchesFilters,
} from "@/lib/categoryMatch";

// ============================================================
// EXPERIENCE CARD
// ============================================================

const ExperienceCard = ({
  exp,
  index,
}: {
  exp: typeof experiencesData[0];
  index: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const v = videoRef.current;

    if (!v) return;

    if (hovered) {
      v.play().catch(() => {});
    } else {
      v.pause();

      try {
        v.currentTime = 0;
      } catch {}
    }
  }, [hovered]);

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
      className="reel-card w-[220px] sm:w-[250px] lg:w-[280px] flex-shrink-0 border-none outline-none ring-0 shadow-none focus:outline-none focus:ring-0"
    >
      <div className="group relative overflow-hidden rounded-[24px] bg-black border-none outline-none ring-0 shadow-none">

        {/* MEDIA */}
        <div className="relative h-[320px] sm:h-[380px] lg:h-[450px] overflow-hidden rounded-[24px] border-none outline-none ring-0 shadow-none bg-black">

          {/* VIDEO */}
          {exp.video && (
            <video
              ref={videoRef}
              src={exp.video}
              muted
              loop
              playsInline
              preload="metadata"
              className={`absolute inset-0 w-full h-full object-cover border-0 outline-none ring-0 transition-transform duration-700 will-change-transform ${
                hovered ? "scale-100" : "scale-110"
              }`}
            />
          )}

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
              {exp.title}
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
              {exp.category}
            </span>
          </div>
        </div>

        {/* LOCATION */}
        <div className="bg-white py-4 px-3 text-center border-none outline-none ring-0 shadow-none">
          <div className="flex items-center justify-center gap-2 text-black">
            <MapPin size={14} />

            <span className="uppercase tracking-[2px] text-xs sm:text-sm font-medium">
              {exp.subtitle}
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

const ExperiencesReelsSection = () => {
  const { selectedFilters, isAll } = useFilters();

  const { ref, onMouseEnter, onMouseLeave } =
    useAutoScroll<HTMLDivElement>(50);

  // ============================================================
  // FILTER DATA
  // ============================================================

  const filteredExperiences = useMemo(() => {
    if (isAll) return experiencesData;

    return experiencesData.filter((e) =>
      matchesFilters(getExperienceCategories(e), selectedFilters, isAll),
    );
  }, [selectedFilters, isAll]);

  // ============================================================
  // TRIPLE DATA FOR PERFECT LOOP
  // ============================================================

  const sliderData = useMemo(
    () => [
      ...filteredExperiences,
      ...filteredExperiences,
      ...filteredExperiences,
    ],
    [filteredExperiences]
  );

  // ============================================================
  // START FROM CENTER
  // ============================================================

  useEffect(() => {
    const el = ref.current;

    if (!el || filteredExperiences.length === 0) return;

    requestAnimationFrame(() => {
      el.scrollLeft = el.scrollWidth / 3;
    });
  }, [filteredExperiences]);

  // ============================================================
  // JSX
  // ============================================================

  return (
    <section className="relative py-10 sm:py-12 lg:py-14 bg-white overflow-hidden">

      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('/patterns/topography.svg')] bg-cover bg-center pointer-events-none" />

      {/* SMALL CONTAINER */}
      <div className="relative z-10 max-w-[1350px] mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-[30%_70%] gap-8 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            {/* SCRIPT TEXT */}
            <span className="block text-black text-2xl sm:text-3xl font-light italic mb-3">
              Discover Meaningful
            </span>

            {/* HEADING */}
            <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05] uppercase font-light tracking-wide font-display">
              Top
              <br />
              Curated
              <br />
              Experiences
            </h2>

            {/* DESCRIPTION */}
            <p className="text-black mt-5 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
              {isAll
                ? "Moments that connect you with spirituality, wellness, wildlife, and the timeless beauty of Central India."
                : `Experiences matching: ${selectedFilters.join(", ")}`}
            </p>

            {/* BUTTON */}
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

          {/* RIGHT SLIDER */}
          {sliderData.length === 0 ? (
            <p className="text-center text-black py-10">
              No experiences match the selected categories.
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
              className="reel-scroller overflow-x-auto no-scrollbar py-4"
            >
              <div className="reel-track flex gap-5 w-max items-center">

                {sliderData.map((exp, i) => (
                  <ExperienceCard
                    key={`${exp.id}-${i}`}
                    exp={exp}
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

export default ExperiencesReelsSection;
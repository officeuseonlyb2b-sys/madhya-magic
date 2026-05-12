import { motion } from "framer-motion";
import { useMemo, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";

import { experiencesData } from "@/data/experiencesData";
import { useFilters } from "@/contexts/FilterContext";
import type { MapCategory } from "@/data/mapDestinations";
import { useAutoScroll } from "@/hooks/useAutoScroll";

// FILTER MAP
const filterToExperienceCategories: Record<MapCategory, string[]> = {
  Spiritual: ["Spiritual", "Wellness"],
  Wildlife: ["Wildlife"],
  Nature: ["Wellness", "Wildlife"],
  Heritage: ["Spiritual"],
};

// ----- EXPERIENCE CARD -----
// ----- EXPERIENCE CARD -----
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
      <div className="group relative overflow-hidden rounded-[24px] bg-[#f6f1ea] border-none outline-none ring-0 shadow-none">

        {/* MEDIA */}
        <div className="relative h-[320px] sm:h-[380px] lg:h-[450px] overflow-hidden rounded-[24px] border-none outline-none ring-0 shadow-none">

          {/* IMAGE */}
          

          {/* VIDEO */}
          {exp.video && (
            <video
              ref={videoRef}
              src={exp.video}
              poster={exp.image}
              muted
              loop
              playsInline
              preload="none"
              className={`absolute inset-0 w-full h-full object-cover border-0 outline-none ring-0 transition-all duration-700 ${
                hovered
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
            />
          )}

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 pointer-events-none" />

          {/* TOP TITLE */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center px-4 w-full pointer-events-none">
            <h3 className="text-white uppercase tracking-[2px] text-xs sm:text-sm lg:text-base font-light leading-snug">
              {exp.title}
            </h3>
          </div>

          {/* CATEGORY */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none">
            <span className="text-white/90 text-[10px] tracking-[4px] uppercase">
              {exp.category}
            </span>
          </div>
        </div>

        {/* LOCATION */}
        <div className="bg-[#f6f1ea] py-4 px-3 text-center border-none outline-none ring-0 shadow-none">
          <div className="flex items-center justify-center gap-2 text-[#8c644d]">
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

// ----- MAIN SECTION -----
const ExperiencesReelsSection = () => {
  const { selectedFilters, isAll } = useFilters();

  const { ref, onMouseEnter, onMouseLeave } =
    useAutoScroll<HTMLDivElement>(50);

  // FILTER DATA
  const filteredExperiences = useMemo(() => {
    if (isAll) return experiencesData;

    const allowed = new Set<string>();

    selectedFilters.forEach((f) => {
      filterToExperienceCategories[f]?.forEach((c) =>
        allowed.add(c)
      );
    });

    return experiencesData.filter((e) =>
      allowed.has(e.category)
    );
  }, [selectedFilters, isAll]);

  // DUPLICATE FOR INFINITE LOOP
  const sliderData = useMemo(
    () => [...filteredExperiences, ...filteredExperiences],
    [filteredExperiences]
  );

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
            <span className="block text-[#8b7268] text-2xl sm:text-3xl font-light italic mb-3">
              Discover Meaningful
            </span>

            {/* HEADING */}
            <h2 className="text-[#6e5548] text-3xl sm:text-4xl lg:text-5xl leading-[1.05] uppercase font-light tracking-wide">
              Top
              <br />
              Curated
              <br />
              Experiences
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[#7b6559] mt-5 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
              {isAll
                ? "Moments that connect you with spirituality, wellness, wildlife, and the timeless beauty of Central India."
                : `Experiences matching: ${selectedFilters.join(", ")}`}
            </p>

            {/* BUTTON */}
            <Link
              to="/experiences"
              className="group inline-flex items-center gap-3 mt-7 border border-[#7a6256] rounded-full px-5 py-2.5 text-[#6e5548] hover:bg-[#7a6256] hover:text-white transition-all duration-300"
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
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-10 text-[#6e5548]">

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
            <p className="text-center text-[#6e5548] py-10">
              No experiences match the selected categories.
            </p>
          ) : (
            <div
              ref={ref}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
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
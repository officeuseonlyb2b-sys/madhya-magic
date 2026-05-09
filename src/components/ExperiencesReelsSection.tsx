import { motion } from "framer-motion";
import { useMemo, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { experiencesData } from "@/data/experiencesData";
import { useFilters } from "@/contexts/FilterContext";
import type { MapCategory } from "@/data/mapDestinations";
import { useAutoScroll } from "@/hooks/useAutoScroll";

const filterToExperienceCategories: Record<MapCategory, string[]> = {
  Spiritual: ["Spiritual", "Wellness"],
  Wildlife: ["Wildlife"],
  Nature: ["Wellness", "Wildlife"],
  Heritage: ["Spiritual"],
};

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
      try { v.currentTime = 0; } catch {}
    }
  }, [hovered]);

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
      <div className="group relative h-[320px] sm:h-[340px] lg:h-[360px] rounded-3xl overflow-hidden cursor-pointer bg-black">
        <img
          src={exp.image}
          alt={exp.title}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${exp.video && hovered ? "opacity-0" : "opacity-100"}`}
        />
        {exp.video && (
          <video
            ref={videoRef}
            src={exp.video}
            poster={exp.image}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

        <div className="absolute top-4 left-4">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/80 backdrop-blur-md text-white shadow-lg">
            {exp.category}
          </span>
        </div>

        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h3 className="text-lg font-bold line-clamp-1">
            {exp.title}
          </h3>

          <div className="flex items-center gap-1 text-xs mt-1 opacity-90">
            <MapPin size={12} />
            <span>{exp.subtitle}</span>
          </div>

          <Link
            to="/experiences"
            className="inline-flex items-center gap-2 mt-3 text-xs uppercase tracking-widest"
          >
            Discover
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ExperiencesReelsSection = () => {
  const { selectedFilters, isAll } = useFilters();
  const { ref, onMouseEnter, onMouseLeave } = useAutoScroll<HTMLDivElement>(50);

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

  const sliderData = useMemo(
    () => [...filteredExperiences, ...filteredExperiences],
    [filteredExperiences]
  );

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[30%_70%] gap-8 lg:gap-14 items-center">

          {/* LEFT TEXT */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 leading-tight">
             Top Curated
              <br />
              Experiences
            </h2>

            <p className="text-gray-600 mt-4 sm:mt-5 text-sm sm:text-base">
              {isAll
                ? "Moments that connect you with the wilderness, heritage, spirituality, and soul of Central India."
                : `Experiences matching: ${selectedFilters.join(", ")}`}
            </p>

            <Link
              to="/experiences"
              className="group mt-6 sm:mt-8 inline-flex items-center gap-3 sm:gap-4"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition">
                <ArrowRight
                  size={18}
                  className="group-hover:text-white transition"
                />
              </div>

              <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-orange-500 transition">
                Explore All Experiences
              </span>
            </Link>
          </div>

          {/* RIGHT SLIDER */}
          {sliderData.length === 0 ? (
            <p className="text-center text-muted-foreground py-10">
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
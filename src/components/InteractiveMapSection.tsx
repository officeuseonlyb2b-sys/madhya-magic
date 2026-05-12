import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Eye,
  Package,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import exploreStatue from "@/assets/explore-statue.png";
import exploreJharokha from "@/assets/explore-jharokha.png";

import {
  mapDestinations,
  mapCategoryColors,
  type MapDestination,
} from "@/data/mapDestinations";

import { useFilters } from "@/contexts/FilterContext";
import CategoryFilters from "./CategoryFilters";

// ─── Auto Slider Card ───
const SliderCard = ({
  dest,
  direction,
}: {
  dest: MapDestination;
  direction: number;
}) => {
  return (
    <motion.div
      key={dest.id}
      initial={{ opacity: 0, scale: 1.08, x: direction > 0 ? 60 : -60 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95, x: direction > 0 ? -60 : 60 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0"
    >
      <div className="relative w-full h-full overflow-hidden rounded-3xl">
        <motion.img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "linear" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Category tags */}
        <div className="absolute top-4 right-4 flex gap-2 flex-wrap">
          {dest.category.map((c) => (
            <span
              key={c}
              className={`text-xs font-bold px-3 py-1.5 rounded-full ${mapCategoryColors[c].dot} text-white shadow-md backdrop-blur-sm`}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <div className="flex items-center gap-1 text-white/80 text-sm mb-2">
            <MapPin size={14} />
            Madhya Pradesh, India
          </div>

          <h3 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {dest.name}
          </h3>

          <p className="text-sm md:text-base text-white/90 leading-relaxed line-clamp-3 mb-6 max-w-2xl">
            {dest.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to={`/destination/${dest.id}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-white text-sm font-semibold hover:shadow-lg transition-all"
            >
              <Eye size={16} />
              View More
            </Link>

            <Link
              to={`/destination/${dest.id}#packages`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold hover:bg-white/20 transition-all"
            >
              <Package size={16} />
              View Packages
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Progress Dots ───
const ProgressDots = ({
  total,
  current,
  onSelect,
}: {
  total: number;
  current: number;
  onSelect: (i: number) => void;
}) => (
  <div className="flex items-center gap-1.5 mt-5 justify-center">
    {Array.from({ length: Math.min(total, 8) }).map((_, i) => (
      <button
        key={i}
        onClick={() => onSelect(i)}
        className={`h-1.5 rounded-full transition-all duration-500 ${i === current % 8
            ? "w-8 bg-primary"
            : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
          }`}
      />
    ))}
  </div>
);

// ─── Main Section ───
const InteractiveMapSection = () => {
  const sectionRef = useRef(null);

  const inView = useInView(sectionRef, {
    once: true,
    margin: "-80px",
  });

  const { selectedFilters, isAll } = useFilters();

  // Filter destinations
  const filteredDestinations = useMemo(() => {
    if (isAll) return mapDestinations;

    return mapDestinations.filter((d) =>
      d.category.some((c) => selectedFilters.includes(c))
    );
  }, [selectedFilters, isAll]);

  // Slider state
  const [sliderIndex, setSliderIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const currentDest =
    filteredDestinations[sliderIndex % filteredDestinations.length] ||
    mapDestinations[0];

  // Auto slide
  useEffect(() => {
    if (isPaused || filteredDestinations.length <= 1) return;

    const timer = setInterval(() => {
      setDirection(1);

      setSliderIndex(
        (prev) => (prev + 1) % filteredDestinations.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, filteredDestinations.length]);

  // Reset when filter changes
  useEffect(() => {
    setSliderIndex(0);
    setDirection(1);
  }, [selectedFilters]);

  // Go to slide
  const goTo = useCallback(
    (i: number) => {
      setDirection(i > sliderIndex ? 1 : -1);
      setSliderIndex(i);
    },
    [sliderIndex]
  );

  // Prev
  const goPrev = () => {
    setDirection(-1);

    setSliderIndex(
      (prev) =>
        (prev - 1 + filteredDestinations.length) %
        filteredDestinations.length
    );
  };

  // Next
  const goNext = () => {
    setDirection(1);

    setSliderIndex(
      (prev) => (prev + 1) % filteredDestinations.length
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden bg-white"
    >
      {/* Left decorative image */}
      <img
        src={exploreStatue}
        alt=""
        className="absolute left-0 top-0 hidden lg:block z-[1] pointer-events-none select-none w-auto h-[320px] xl:h-[480px] max-w-none object-contain object-left-top -translate-x-[10%] -translate-y-[2%]"
      />

      {/* Right decorative image */}
      <img
        src={exploreJharokha}
        alt=""
        className="absolute right-0 top-0 hidden lg:block z-[1] pointer-events-none select-none w-auto h-[320px] xl:h-[480px] max-w-none object-contain object-right-top translate-x-[2%] -translate-y-[-4%]"
      />

      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        {/* Header */}
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 shadow-none drop-shadow-none"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-black mt-4 shadow-none drop-shadow-none">
            Explore Madhya Pradesh
          </h2>

          <div className="section-divider my-4 shadow-none drop-shadow-none" />

          <p className="text-gray-600 max-w-2xl mx-auto shadow-none drop-shadow-none">
            Select categories to filter destinations — multi-select supported
          </p>
        </motion.div>


        {/* Filters */}
        <CategoryFilters inView={inView} />

        {/* FULL WIDTH IMAGE SLIDER */}
        <div className="relative mt-12">
          <div className="bg-gradient-to-br from-white/10 to-white/5 dark:from-black/20 dark:to-black/10 rounded-3xl p-4 md:p-6 shadow-2xl backdrop-blur-sm border border-white/20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="w-full"
            >
              <div
                className="relative w-full h-[420px] sm:h-[550px] md:h-[720px] rounded-3xl overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <SliderCard
                    dest={currentDest}
                    direction={direction}
                  />
                </AnimatePresence>

                {/* Prev Button */}
                {filteredDestinations.length > 1 && (
                  <>
                    <button
                      onClick={goPrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/50 transition-all"
                    >
                      <ChevronLeft size={22} />
                    </button>

                    {/* Next Button */}
                    <button
                      onClick={goNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/50 transition-all"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}

                {/* Counter */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
                  {(sliderIndex % filteredDestinations.length) + 1} /{" "}
                  {filteredDestinations.length}
                </div>
              </div>
            </motion.div>

            {/* Progress Dots */}
            <ProgressDots
              total={filteredDestinations.length}
              current={sliderIndex}
              onSelect={goTo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMapSection;
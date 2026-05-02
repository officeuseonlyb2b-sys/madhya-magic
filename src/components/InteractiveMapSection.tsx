import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { MapPin, Eye, Package, Play, ChevronLeft, ChevronRight } from "lucide-react";

import exploreStatue from "@/assets/explore-statue.png";
import exploreJharokha from "@/assets/explore-jharokha.png";
import {
  mapDestinations,
  mapCategoryColors,
  type MapCategory,
  type MapDestination,
} from "@/data/mapDestinations";
import { useFilters } from "@/contexts/FilterContext";
import CategoryFilters from "./CategoryFilters";

const MAP_IMAGE_URL = "https://arpita-travels-storage.blr1.cdn.digitaloceanspaces.com/agent-travel-project/2/mp_map_svg_topo_55b6b034-2f7d-456a-b85e-2f1d894f9e16.png";

const allCategories: MapCategory[] = ["Wildlife", "Heritage", "Spiritual", "Nature"];

// ─── Map Dot ───
const MapDot = ({
  dest,
  isActive,
  onHover,
  visible,
}: {
  dest: MapDestination;
  isActive: boolean;
  onHover: () => void;
  visible: boolean;
}) => {
  const color = mapCategoryColors[dest.category[0]];
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onMouseEnter={onHover}
          onClick={onHover}
          className="absolute z-10 group"
          style={{ left: `${dest.x}%`, top: `${dest.y}%`, transform: "translate(-50%, -50%)" }}
          aria-label={dest.name}
        >
          <span className={`absolute inset-0 rounded-full ${color.dot} opacity-40 animate-ping`} style={{ width: 20, height: 20, margin: "-3px" }} />
          <span className={`relative block w-3 h-3 rounded-full ${color.dot} shadow-lg ${color.glow} ring-2 ring-white transition-transform duration-200 ${isActive ? "scale-150" : "group-hover:scale-125"}`} />
          <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 glass-card rounded-lg px-3 py-1.5 text-xs font-medium text-foreground shadow-lg z-20">
            {dest.name}<br /><span className={`text-[10px] font-semibold ${color.label}`}>{dest.category[0]}</span>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ─── Auto Slider Card ───
const SliderCard = ({ dest, direction }: { dest: MapDestination; direction: number }) => {
  const color = mapCategoryColors[dest.category[0]];
  return (
    <motion.div
      key={dest.id}
      initial={{ opacity: 0, scale: 1.08, x: direction > 0 ? 60 : -60 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95, x: direction > 0 ? -60 : 60 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0"
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <motion.img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "linear" }}
        />
        
        
        {/* Category tags */}
        <div className="absolute top-4 right-4 flex gap-2">
          {dest.category.map((c) => (
            <span key={c} className={`text-xs font-bold px-3 py-1.5 rounded-full ${mapCategoryColors[c].dot} text-white shadow-md backdrop-blur-sm`}>{c}</span>
          ))}
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center gap-1 text-white/80 text-sm mb-2">
            <MapPin size={14} /> Madhya Pradesh, India
          </div>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-3">{dest.name}</h3>
          <p className="text-sm text-white/90 leading-relaxed line-clamp-2 mb-5 max-w-lg">{dest.description}</p>
          <div className="flex gap-3">
            <Link to={`/destination/${dest.id}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-white text-sm font-semibold hover:shadow-lg transition-all">
              <Eye size={16} /> View More
            </Link>
            <Link to={`/destination/${dest.id}#packages`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold hover:bg-white/20 transition-all">
              <Package size={16} /> View Packages
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Progress Dots ───
const ProgressDots = ({ total, current, onSelect }: { total: number; current: number; onSelect: (i: number) => void }) => (
  <div className="flex items-center gap-1.5 mt-4 justify-center">
    {Array.from({ length: Math.min(total, 8) }).map((_, i) => (
      <button
        key={i}
        onClick={() => onSelect(i)}
        className={`h-1.5 rounded-full transition-all duration-500 ${i === current % 8 ? "w-8 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
      />
    ))}
  </div>
);

// ─── Main Section ───
const InteractiveMapSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { selectedFilters, toggleFilter, selectAll, isAll } = useFilters();

  const filteredDestinations = useMemo(() => {
    if (isAll) return mapDestinations;
    return mapDestinations.filter((d) => d.category.some((c) => selectedFilters.includes(c)));
  }, [selectedFilters, isAll]);

  const filteredIds = useMemo(() => new Set(filteredDestinations.map((d) => d.id)), [filteredDestinations]);

  // Slider state
  const [sliderIndex, setSliderIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const currentDest = filteredDestinations[sliderIndex % filteredDestinations.length] || mapDestinations[0];

  // Auto-slide every 5s
  useEffect(() => {
    if (isPaused || filteredDestinations.length <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setSliderIndex((prev) => (prev + 1) % filteredDestinations.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, filteredDestinations.length]);

  // Reset index when filters change
  useEffect(() => {
    setSliderIndex(0);
    setDirection(1);
  }, [selectedFilters]);

  const goTo = useCallback((i: number) => {
    setDirection(i > sliderIndex ? 1 : -1);
    setSliderIndex(i);
  }, [sliderIndex]);

  const goPrev = () => {
    setDirection(-1);
    setSliderIndex((prev) => (prev - 1 + filteredDestinations.length) % filteredDestinations.length);
  };

  const goNext = () => {
    setDirection(1);
    setSliderIndex((prev) => (prev + 1) % filteredDestinations.length);
  };

  // When dot hovered on map, jump slider to that destination
  const handleDotHover = useCallback((dest: MapDestination) => {
    const idx = filteredDestinations.findIndex((d) => d.id === dest.id);
    if (idx >= 0) {
      setDirection(1);
      setSliderIndex(idx);
      setIsPaused(true);
      // Resume after 8s
      setTimeout(() => setIsPaused(false), 8000);
    }
  }, [filteredDestinations]);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Left decorative image - Statue */}
      <img
        src={exploreStatue}
        alt=""
        className="absolute left-0 top-0 hidden lg:block z-[1] pointer-events-none select-none w-auto h-[320px] xl:h-[480px] max-w-none object-contain object-left-top -translate-x-[10%] -translate-y-[2%]"
      />
      {/* Right decorative image - Jharokha */}
      <img
        src={exploreJharokha}
        alt=""
        className="absolute right-0 top-0 hidden lg:block z-[1] pointer-events-none select-none w-auto h-[320px] xl:h-[480px] max-w-none object-contain object-right-top translate-x-[2%] -translate-y-[-4%]"
      />

      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full">Interactive Map</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-4">Explore Madhya Pradesh</h2>
          <div className="section-divider my-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">Select categories to filter destinations — multi-select supported</p>
        </motion.div>

        {/* Premium Circular Filter Cards */}
        <CategoryFilters inView={inView} />

        {/* Main Container */}
        <div className="relative">
          <div className="bg-gradient-to-br from-white/10 to-white/5 dark:from-black/20 dark:to-black/10 rounded-3xl p-4 md:p-8 shadow-2xl backdrop-blur-sm border border-white/20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
            >
              {/* LEFT: Map */}
              <div className="relative rounded-2xl overflow-hidden glass-card p-4 shadow-xl bg-white dark:bg-black/20">
                <div className="relative">
                  <img
                    src={MAP_IMAGE_URL}
                    alt="Madhya Pradesh Map"
                    className="w-full h-auto block rounded-xl"
                    loading="lazy"
                  />
                  {mapDestinations.map((dest) => (
                    <MapDot
                      key={dest.id}
                      dest={dest}
                      isActive={currentDest.id === dest.id}
                      onHover={() => handleDotHover(dest)}
                      visible={filteredIds.has(dest.id)}
                    />
                  ))}
                </div>
                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-6 mt-5 px-2 pb-2">
                  {allCategories.map((cat) => (
                    <div key={cat} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={`w-3.5 h-3.5 rounded-full ${mapCategoryColors[cat].dot}`} />
                      <span>{cat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: Auto Slider */}
              <div
                className="relative h-[420px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <SliderCard dest={currentDest} direction={direction} />
                </AnimatePresence>

                {/* Nav arrows */}
                {filteredDestinations.length > 1 && (
                  <>
                    <button
                      onClick={goPrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/50 transition-all"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={goNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/50 transition-all"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Slide counter */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
                  {(sliderIndex % filteredDestinations.length) + 1} / {filteredDestinations.length}
                </div>
              </div>
            </motion.div>

            {/* Progress dots below slider */}
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

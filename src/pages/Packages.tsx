import { useState, useMemo, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import customImage from "@/assets/customimage.png";
import { Link, useSearchParams } from "react-router-dom";
import {
  MapPin,
  Clock,
  Calendar,
  Heart,
  Check,
  ArrowRight,
  SlidersHorizontal,
  X,
  ChevronDown,
  Search,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageCategoryFilter, { type TourCategory } from "@/components/PackageCategoryFilter";
import {
  allPackages,
  destinations,
  durations,
  months,
  interests,
  interestToCategory,
  type PackageData,
} from "@/data/packagesData";

// --------------------------------------------
// 1. Utility: Derive available months from package data
// --------------------------------------------
const getPackageMonths = (pkg: PackageData): string[] => {
  const allMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Seasonal tours
  if (pkg.tourCategory === "Monsoon Exclusive") {
    return ["July", "August", "September"];
  }
  if (pkg.tourCategory === "Winter") {
    return ["December", "January", "February"];
  }
  if (pkg.tourCategory === "Summer") {
    return ["March", "April", "May", "June"];
  }

  // For spiritual / heritage / wildlife, assume year‑round (all months)
  return allMonths;
};

// --------------------------------------------
// 2. Compact Calendar-Style Month Selector (with seasonal colors)
// --------------------------------------------
const monthGroups = {
  Winter: ["December", "January", "February"],
  Summer: ["March", "April", "May", "June"],
  Monsoon: ["July", "August", "September"],
  Spring: ["October", "November"],
};
const allMonthsList = Object.values(monthGroups).flat();

// Calendar order (Jan → Dec) for the grid
const calendarOrder = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Seasonal color cues — soft, premium, culturally warm
const seasonOf = (month: string): "Winter" | "Summer" | "Monsoon" | "Spring" => {
  if (monthGroups.Winter.includes(month)) return "Winter";
  if (monthGroups.Summer.includes(month)) return "Summer";
  if (monthGroups.Monsoon.includes(month)) return "Monsoon";
  return "Spring";
};

const seasonStyle: Record<string, { idle: string; selected: string; dot: string; chip: string }> = {
  Winter: {
    idle: "text-sky-700 hover:bg-sky-50 hover:border-sky-200",
    selected: "bg-gradient-to-br from-sky-100 to-sky-200 text-sky-900 border-sky-300 shadow-sky-200/50",
    dot: "bg-sky-400",
    chip: "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100",
  },
  Summer: {
    idle: "text-amber-700 hover:bg-amber-50 hover:border-amber-200",
    selected: "bg-gradient-to-br from-amber-100 to-amber-200 text-amber-900 border-amber-300 shadow-amber-200/50",
    dot: "bg-amber-400",
    chip: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
  },
  Monsoon: {
    idle: "text-emerald-700 hover:bg-emerald-50 hover:border-emerald-200",
    selected: "bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-900 border-emerald-300 shadow-emerald-200/50",
    dot: "bg-emerald-400",
    chip: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
  },
  Spring: {
    idle: "text-rose-700 hover:bg-rose-50 hover:border-rose-200",
    selected: "bg-gradient-to-br from-rose-100 to-rose-200 text-rose-900 border-rose-300 shadow-rose-200/50",
    dot: "bg-rose-400",
    chip: "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100",
  },
};

const AdvancedMonthSelector = ({
  selectedMonths,
  onChange,
  packageMonthAvailability,
}: {
  selectedMonths: string[];
  onChange: (months: string[]) => void;
  packageMonthAvailability?: Record<string, number>;
}) => {
  const toggleMonth = (month: string) => {
    if (selectedMonths.includes(month))
      onChange(selectedMonths.filter((m) => m !== month));
    else
      onChange([...selectedMonths, month]);
  };

  const selectSeason = (seasonMonths: string[]) => {
    const newSelection = [...selectedMonths];
    seasonMonths.forEach((m) => {
      if (!newSelection.includes(m)) newSelection.push(m);
    });
    onChange(newSelection);
  };

  const clearMonths = () => onChange([]);

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const triggerLabel =
    selectedMonths.length === 0
      ? "Any month"
      : selectedMonths.length === 1
        ? selectedMonths[0]
        : `${selectedMonths.length} months selected`;

  return (
    <div className="relative" ref={ref}>
      {/* Trigger — compact Google Calendar–like input */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-2 px-3 py-2 bg-white border border-border/60 rounded-lg text-sm hover:border-primary/50 hover:shadow-sm transition-all"
      >
        <span className="flex items-center gap-2 text-foreground">
          <Calendar size={14} className="text-primary" />
          <span className={selectedMonths.length === 0 ? "text-muted-foreground" : "font-medium"}>
            {triggerLabel}
          </span>
        </span>
        <ChevronDown size={14} className={`text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Popover — Google Calendar style mini month grid */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-30 mt-2 left-0 right-0 sm:right-auto sm:w-[280px] bg-white rounded-xl border border-border/60 shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-3"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Select months
              </span>
              {selectedMonths.length > 0 && (
                <button
                  onClick={clearMonths}
                  className="text-[10px] text-primary hover:underline font-medium"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Seasonal quick chips — tiny */}
            <div className="flex flex-wrap gap-1 mb-2">
              {Object.entries(monthGroups).map(([season, monthsList]) => {
                const s = seasonStyle[season];
                return (
                  <button
                    key={season}
                    onClick={() => selectSeason(monthsList)}
                    className={`text-[10px] font-medium px-2 py-0.5 rounded-full border transition ${s.chip}`}
                  >
                    <span className={`inline-block w-1 h-1 rounded-full mr-1 align-middle ${s.dot}`} />
                    {season}
                  </button>
                );
              })}
            </div>

            {/* Compact 4×3 month grid like Google Calendar mini-picker */}
            <div className="grid grid-cols-4 gap-1">
              {calendarOrder.map((month) => {
                const isSelected = selectedMonths.includes(month);
                const count = packageMonthAvailability?.[month] || 0;
                const s = seasonStyle[seasonOf(month)];
                return (
                  <motion.button
                    key={month}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleMonth(month)}
                    className={`relative h-9 rounded-md text-[11px] font-semibold transition-all
                      ${isSelected
                        ? `${s.selected} border shadow-sm`
                        : `bg-transparent text-foreground hover:bg-muted/60 border border-transparent`}
                    `}
                  >
                    {month.slice(0, 3)}
                    {count > 0 && !isSelected && (
                      <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${s.dot}`} />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Footer summary */}
            {selectedMonths.length > 0 && (
              <div className="mt-2 pt-2 border-t border-border/40 flex flex-wrap gap-1">
                {selectedMonths.map((m) => {
                  const s = seasonStyle[seasonOf(m)];
                  return (
                    <motion.span
                      key={m}
                      layout
                      className={`text-[10px] px-1.5 py-0.5 rounded border flex items-center gap-0.5 ${s.chip}`}
                    >
                      {m.slice(0, 3)}
                      <button onClick={() => toggleMonth(m)} className="opacity-60 hover:opacity-100">
                        <X size={9} />
                      </button>
                    </motion.span>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --------------------------------------------
// 3. Advanced Destination Selector (multi + search)
// --------------------------------------------
const AdvancedDestinationSelector = ({
  selectedDestinations,
  onChange,
  destinationCounts,
}: {
  selectedDestinations: string[];
  onChange: (dests: string[]) => void;
  destinationCounts: Record<string, number>;
}) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const allDestOptions = destinations.filter((d) => d !== "All");
  const filtered = allDestOptions.filter((d) =>
    d.toLowerCase().includes(search.toLowerCase())
  );

  const toggleDestination = (dest: string) => {
    if (selectedDestinations.includes(dest))
      onChange(selectedDestinations.filter((d) => d !== dest));
    else
      onChange([...selectedDestinations, dest]);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between px-4 py-2.5 bg-background/50 backdrop-blur-sm border border-border rounded-xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm text-muted-foreground">
          {selectedDestinations.length === 0
            ? "All Destinations"
            : `${selectedDestinations.length} selected`}
        </span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-20 mt-2 w-full bg-card border border-border rounded-xl shadow-xl p-2 max-h-64 overflow-auto"
          >
            <div className="flex items-center gap-2 px-2 py-1.5 bg-muted/50 rounded-lg mb-2">
              <Search size={14} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent flex-1 text-sm outline-none"
              />
            </div>
            {filtered.map((dest) => (
              <label
                key={dest}
                className="flex items-center justify-between px-3 py-2 hover:bg-accent/50 rounded-lg cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedDestinations.includes(dest)}
                    onChange={() => toggleDestination(dest)}
                    className="rounded border-primary"
                  />
                  <span className="text-sm">{dest}</span>
                </div>
                <span className="text-xs text-muted-foreground">{destinationCounts[dest] || 0}</span>
              </label>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --------------------------------------------
// 4. Advanced Interest Selector (multi tag cloud)
// --------------------------------------------
const AdvancedInterestSelector = ({
  selectedInterests,
  onChange,
  interestCounts,
}: {
  selectedInterests: string[];
  onChange: (interests: string[]) => void;
  interestCounts: Record<string, number>;
}) => {
  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest))
      onChange(selectedInterests.filter((i) => i !== interest));
    else
      onChange([...selectedInterests, interest]);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {interests.map((interest) => (
        <button
          key={interest}
          onClick={() => toggleInterest(interest)}
          className={`
            text-sm px-3 py-1.5 rounded-full border transition-all
            ${
              selectedInterests.includes(interest)
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "bg-background/50 border-border hover:border-primary/50 hover:bg-accent/30"
            }
          `}
        >
          {interest}
          <span className="ml-1 text-xs opacity-70">{interestCounts[interest] || 0}</span>
        </button>
      ))}
    </div>
  );
};

// --------------------------------------------
// 5. Duration Range Slider
// --------------------------------------------
const DurationSlider = ({
  minDays,
  maxDays,
  onChange,
  globalMin,
  globalMax,
}: {
  minDays: number;
  maxDays: number;
  onChange: (val: [number, number]) => void;
  globalMin: number;
  globalMax: number;
}) => {
  const [localMin, setLocalMin] = useState(minDays);
  const [localMax, setLocalMax] = useState(maxDays);
  const minGap = 1;

  useEffect(() => {
    setLocalMin(minDays);
    setLocalMax(maxDays);
  }, [minDays, maxDays]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.min(Number(e.target.value), localMax - minGap);
    setLocalMin(val);
    onChange([val, localMax]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(Number(e.target.value), localMin + minGap);
    setLocalMax(val);
    onChange([localMin, val]);
  };

  const minPercent = ((localMin - globalMin) / (globalMax - globalMin)) * 100;
  const maxPercent = ((localMax - globalMin) / (globalMax - globalMin)) * 100;

  return (
    <div className="space-y-3 pt-1">
      <div className="flex justify-between items-center">
        <motion.span
          key={localMin}
          initial={{ scale: 0.85, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
        >
          {localMin}d
        </motion.span>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">range</span>
        <motion.span
          key={localMax}
          initial={{ scale: 0.85, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
        >
          {localMax}d
        </motion.span>
      </div>
      <div className="relative h-2 bg-muted/70 rounded-full">
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute h-full bg-gradient-to-r from-primary/80 to-primary rounded-full shadow-[0_0_12px_hsl(var(--primary)/0.35)]"
          style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
        />
        <input
          type="range"
          min={globalMin}
          max={globalMax}
          value={localMin}
          onChange={handleMinChange}
          className="absolute w-full h-full appearance-none bg-transparent pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(0,0,0,0.15)] [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-125 active:[&::-webkit-slider-thumb]:cursor-grabbing"
        />
        <input
          type="range"
          min={globalMin}
          max={globalMax}
          value={localMax}
          onChange={handleMaxChange}
          className="absolute w-full h-full appearance-none bg-transparent pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(0,0,0,0.15)] [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-125 active:[&::-webkit-slider-thumb]:cursor-grabbing"
        />
      </div>
    </div>
  );
};
// --------------------------------------------
const PriceRangeSlider = ({
  min,
  max,
  value,
  onChange,
}: {
  min: number;
  max: number;
  value: [number, number];
  onChange: (val: [number, number]) => void;
}) => {
  const [minVal, setMinVal] = useState(value[0]);
  const [maxVal, setMaxVal] = useState(value[1]);
  const minGap = 500;

  useEffect(() => {
    setMinVal(value[0]);
    setMaxVal(value[1]);
  }, [value]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.min(Number(e.target.value), maxVal - minGap);
    setMinVal(val);
    onChange([val, maxVal]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(Number(e.target.value), minVal + minGap);
    setMaxVal(val);
    onChange([minVal, val]);
  };

  const minPos = ((minVal - min) / (max - min)) * 100;
  const maxPos = ((maxVal - min) / (max - min)) * 100;

  return (
    <div className="w-full px-1 pt-1 space-y-3">
      <div className="flex justify-between items-center">
        <motion.span
          key={minVal}
          initial={{ scale: 0.85, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200"
        >
          ₹{minVal.toLocaleString()}
        </motion.span>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">budget</span>
        <motion.span
          key={maxVal}
          initial={{ scale: 0.85, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200"
        >
          ₹{maxVal.toLocaleString()}
        </motion.span>
      </div>
      <div className="relative h-2 bg-muted/70 rounded-full">
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute h-full bg-gradient-to-r from-amber-400 to-primary rounded-full shadow-[0_0_12px_hsl(var(--primary)/0.35)]"
          style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={handleMinChange}
          className="absolute w-full h-full appearance-none bg-transparent pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(0,0,0,0.15)] [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-125 active:[&::-webkit-slider-thumb]:cursor-grabbing"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={handleMaxChange}
          className="absolute w-full h-full appearance-none bg-transparent pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(0,0,0,0.15)] [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-125 active:[&::-webkit-slider-thumb]:cursor-grabbing"
        />
      </div>
    </div>
  );
};

// --------------------------------------------
// 7. Package Card (unchanged)
// --------------------------------------------
const PackageCard = ({ pkg, index }: { pkg: PackageData; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <motion.div
        whileHover={{ y: -8 }}
        className="group rounded-2xl overflow-hidden bg-card border border-border/30 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow"
      >
        <div className="image-zoom aspect-[16/10] relative overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.name}
            loading="lazy"
            width={1024}
            height={768}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          <div className="absolute top-3 left-3 gradient-gold text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
          </div>
          <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
            <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
              {pkg.category}
            </span>
            {pkg.featured && (
              <span className="bg-background/90 backdrop-blur-sm text-primary text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md border border-primary/20">
                ★ Featured
              </span>
            )}
            {pkg.offer && !pkg.featured && (
              <span className="bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                Offer
              </span>
            )}
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-display font-bold text-foreground text-xl mb-2">{pkg.name}</h3>
          <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {pkg.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {pkg.duration}
            </span>
          </div>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{pkg.description}</p>
          <div className="space-y-1.5 mb-5">
            {pkg.highlights.slice(0, 3).map((h) => (
              <div key={h} className="flex items-center gap-2 text-sm text-foreground/80">
                <Check size={14} className="text-secondary shrink-0" />
                {h}
              </div>
            ))}
          </div>
          <div className="border-t border-border/50 pt-4 flex items-center justify-between">
            <div>
              <span className="text-xs text-muted-foreground">Starting from</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
                <span className="text-sm text-muted-foreground line-through">₹{pkg.originalPrice.toLocaleString()}</span>
              </div>
            </div>
            <Link
              to={`/package/${pkg.id}`}
              className="gradient-gold text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded-xl flex items-center gap-1.5 hover:shadow-lg transition-shadow"
            >
              View Details <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --------------------------------------------
// 8. Main Packages Component
// --------------------------------------------
const Packages = () => {
  const [tourCategory, setTourCategory] = useState<TourCategory>("All");
  const [tourSubCategory, setTourSubCategory] = useState<string | null>(null);

  // Advanced filter states
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [durationRange, setDurationRange] = useState<[number, number]>([1, 30]);
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [sortBy, setSortBy] = useState("default");
  const [offersOnly, setOffersOnly] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const [searchParams] = useSearchParams();
  useEffect(() => {
    const interestParam = searchParams.get("interest");
    if (interestParam && interests.includes(interestParam)) {
      setSelectedInterests([interestParam]);
    }
    const tc = searchParams.get("tourCategory");
    const tsc = searchParams.get("tourSubCategory");
    if (tc) {
      setTourCategory(tc as TourCategory);
      setTourSubCategory(tsc || null);
    } else if (tsc) {
      setTourSubCategory(tsc);
    }
  }, [searchParams]);

  // Compute global min/max from packages
  const { minPrice, maxPrice } = useMemo(() => {
  const prices = allPackages.map((p) => p.price);
  return {
    minPrice: Math.min(...prices),
    maxPrice: Math.max(...prices),
  };
}, []);
const minDays = 2;
const maxDays = 45;

  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
    setDurationRange([minDays, maxDays]);
  }, [minPrice, maxPrice, minDays, maxDays]);

  // Build counts for destination / interest / month using derived months
  const { destinationCounts, interestCounts, monthCounts } = useMemo(() => {
    const destCounts: Record<string, number> = {};
    const intCounts: Record<string, number> = {};
    const monCounts: Record<string, number> = {};

    allPackages.forEach((pkg) => {
      // Count for full location and any city contained within it
      destCounts[pkg.location] = (destCounts[pkg.location] || 0) + 1;
      destinations.forEach((d) => {
        if (d === "All" || d === pkg.location) return;
        if (pkg.location.toLowerCase().includes(d.toLowerCase())) {
          destCounts[d] = (destCounts[d] || 0) + 1;
        }
      });

      const matchedInterest = Object.keys(interestToCategory).find(
        (k) => interestToCategory[k] === pkg.category
      );
      if (matchedInterest) {
        intCounts[matchedInterest] = (intCounts[matchedInterest] || 0) + 1;
      }

      const monthsForPkg = getPackageMonths(pkg);
      monthsForPkg.forEach((m) => {
        monCounts[m] = (monCounts[m] || 0) + 1;
      });
    });
    return { destinationCounts: destCounts, interestCounts: intCounts, monthCounts: monCounts };
  }, []);

  // Filtering logic
  const filtered = useMemo(() => {
    let result = allPackages.filter((pkg) => {
      // Tour category / subcategory filter (same as before)
      if (tourCategory !== "All") {
        if (tourSubCategory) {
          if (pkg.tourCategory?.toLowerCase() !== tourSubCategory.toLowerCase()) return false;
        } else if (tourCategoryChildren[tourCategory]) {
          if (!pkg.tourCategory || !tourCategoryChildren[tourCategory].includes(pkg.tourCategory)) {
            return false;
          }
        } else {
          if (pkg.tourCategory !== tourCategory) return false;
        }
      }

      // Destination (multi) — match if pkg.location equals or contains any selected city/route
      if (
        selectedDestinations.length > 0 &&
        !selectedDestinations.some(
          (d) => pkg.location === d || pkg.location.toLowerCase().includes(d.toLowerCase())
        )
      )
        return false;

      // Duration (range)
      if (pkg.days < durationRange[0] || pkg.days > durationRange[1]) return false;

      // Month (derived from package)
      if (selectedMonths.length > 0) {
        const pkgMonths = getPackageMonths(pkg);
        if (!selectedMonths.some((m) => pkgMonths.includes(m))) return false;
      }

      // Interest (multi)
      if (selectedInterests.length > 0) {
        const mapped = selectedInterests.map((i) => interestToCategory[i] ?? i);
        if (!mapped.includes(pkg.category)) return false;
      }

      // Price
      if (pkg.price < priceRange[0] || pkg.price > priceRange[1]) return false;

      // Offers only
      if (offersOnly && !pkg.offer) return false;

      return true;
    });

    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }
    return result;
  }, [
    tourCategory, tourSubCategory, selectedDestinations, durationRange,
    selectedMonths, selectedInterests, priceRange, offersOnly, sortBy,
  ]);

  const isPriceActive = priceRange[0] > minPrice || priceRange[1] < maxPrice;
  const isDurationActive = durationRange[0] > minDays || durationRange[1] < maxDays;
  const activeFiltersCount = [
    selectedDestinations.length > 0,
    isDurationActive,
    selectedMonths.length > 0,
    selectedInterests.length > 0,
    isPriceActive,
    offersOnly,
  ].filter(Boolean).length;

  const resetFilters = () => {
    setSelectedDestinations([]);
    setDurationRange([minDays, maxDays]);
    setSelectedMonths([]);
    setSelectedInterests([]);
    setPriceRange([minPrice, maxPrice]);
    setSortBy("default");
    setTourCategory("All");
    setTourSubCategory(null);
    setOffersOnly(false);
  };

  const removeFilterChip = (type: string, value?: string) => {
    switch (type) {
      case "destination":
        setSelectedDestinations([]);
        break;
      case "duration":
        setDurationRange([minDays, maxDays]);
        break;
      case "month":
        setSelectedMonths([]);
        break;
      case "interest":
        setSelectedInterests([]);
        break;
      case "price":
        setPriceRange([minPrice, maxPrice]);
        break;
      case "offer":
        setOffersOnly(false);
        break;
    }
  };

  const renderFilterChips = () => {
    const chips: { type: string; label: string; value?: string }[] = [];
    if (selectedDestinations.length > 0) {
      chips.push({ type: "destination", label: `${selectedDestinations.length} destinations` });
    }
    if (isDurationActive) {
      chips.push({ type: "duration", label: `${durationRange[0]} - ${durationRange[1]} days` });
    }
    selectedMonths.forEach((m) => chips.push({ type: "month", label: m, value: m }));
    selectedInterests.forEach((i) => chips.push({ type: "interest", label: i, value: i }));
    if (isPriceActive) {
      chips.push({ type: "price", label: `₹${priceRange[0].toLocaleString()} - ₹${priceRange[1].toLocaleString()}` });
    }
    if (offersOnly) chips.push({ type: "offer", label: "Special Offers" });
    if (chips.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-2 mt-3">
        {chips.map((chip, idx) => (
          <motion.span
            key={`${chip.type}-${chip.value || idx}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full border border-primary/20"
          >
            {chip.label}
            <button onClick={() => removeFilterChip(chip.type, chip.value)} className="hover:bg-primary/20 rounded-full p-0.5 transition">
              <X size={12} />
            </button>
          </motion.span>
        ))}
        {chips.length > 0 && (
          <button onClick={resetFilters} className="text-xs text-muted-foreground hover:text-foreground underline-offset-2 hover:underline ml-2">
            Clear all
          </button>
        )}
      </div>
    );
  };

  const FilterContent = () => (
    <div className="space-y-3">
      {/* Compact 4-column toolbar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Destination */}
        <div className="space-y-1">
          <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
            <MapPin size={11} /> Destination
          </label>
          <AdvancedDestinationSelector
            selectedDestinations={selectedDestinations}
            onChange={setSelectedDestinations}
            destinationCounts={destinationCounts}
          />
        </div>

        {/* Month — Google Calendar style dropdown */}
        <div className="space-y-1">
          <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
            <Calendar size={11} /> Travel Month
          </label>
          <AdvancedMonthSelector
            selectedMonths={selectedMonths}
            onChange={setSelectedMonths}
            packageMonthAvailability={monthCounts}
          />
        </div>

        {/* Duration */}
        <div className="space-y-1">
          <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
            <Clock size={11} /> Duration
          </label>
          <DurationSlider
            minDays={durationRange[0]}
            maxDays={durationRange[1]}
            onChange={setDurationRange}
            globalMin={minDays}
            globalMax={maxDays}
          />
        </div>

        {/* Budget */}
        <div className="space-y-1">
          <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
            💰 Budget
          </label>
          <PriceRangeSlider min={minPrice} max={maxPrice} value={priceRange} onChange={setPriceRange} />
        </div>
      </div>

      {/* Interests row — compact tag cloud */}
      <div className="space-y-1 pt-1">
        <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
          <Heart size={11} /> Interests
        </label>
        <AdvancedInterestSelector
          selectedInterests={selectedInterests}
          onChange={setSelectedInterests}
          interestCounts={interestCounts}
        />
      </div>

      {/* Footer toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border/40">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOffersOnly((v) => !v)}
            className={`inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border transition-all ${
              offersOnly
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "bg-background/50 text-foreground border-border hover:border-primary/50"
            }`}
          >
            <Sparkles size={12} /> Offers
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-border rounded-md pl-2.5 pr-7 py-1 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer"
            >
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
            </select>
            <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>
          <span className="text-xs text-muted-foreground">{filtered.length} found</span>
        </div>
        {activeFiltersCount > 0 && (
          <button onClick={resetFilters} className="text-xs text-primary hover:underline flex items-center gap-1">
            <X size={12} /> Clear all
          </button>
        )}
      </div>

      <AnimatePresence>{renderFilterChips()}</AnimatePresence>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Curated Journeys</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mt-3">Travel Packages</h1>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 relative z-20">
        {/* Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden md:block sticky top-24 relative overflow-hidden rounded-2xl border border-amber-200/40 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
        >
          <div className="absolute inset-0 bg-white/85 backdrop-blur-xl" />
          {/* subtle heritage motif corners */}
          <svg className="absolute top-2 left-2 w-8 h-8 text-amber-400/40 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M2 8 V2 H8 M12 2 a4 4 0 0 1 4 4 M2 12 a4 4 0 0 0 4 4" />
            <circle cx="2" cy="2" r="0.8" fill="currentColor" />
          </svg>
          <svg className="absolute top-2 right-2 w-8 h-8 text-amber-400/40 pointer-events-none -scale-x-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M2 8 V2 H8 M12 2 a4 4 0 0 1 4 4 M2 12 a4 4 0 0 0 4 4" />
            <circle cx="2" cy="2" r="0.8" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-2 left-2 w-8 h-8 text-amber-400/40 pointer-events-none -scale-y-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M2 8 V2 H8 M12 2 a4 4 0 0 1 4 4 M2 12 a4 4 0 0 0 4 4" />
            <circle cx="2" cy="2" r="0.8" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-2 right-2 w-8 h-8 text-amber-400/40 pointer-events-none -scale-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M2 8 V2 H8 M12 2 a4 4 0 0 1 4 4 M2 12 a4 4 0 0 0 4 4" />
            <circle cx="2" cy="2" r="0.8" fill="currentColor" />
          </svg>
          {/* top accent line */}
          <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
          <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
          <div className="relative z-10 p-3 md:p-4">
            <FilterContent />
          </div>
        </motion.div>

        {/* Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="w-full bg-white/80 backdrop-blur-xl border border-border/30 rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-between"
          >
            <span className="font-semibold flex items-center gap-2">
              <SlidersHorizontal size={18} /> Filters
            </span>
            <motion.div animate={{ rotate: mobileFiltersOpen ? 45 : 0 }}>
              {mobileFiltersOpen ? <X size={18} /> : <ChevronDown size={18} />}
            </motion.div>
          </button>
          <AnimatePresence>
            {mobileFiltersOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="relative mt-2 rounded-2xl border border-border/30 shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/80 backdrop-blur-xl" />
                <div className="relative z-10 p-4">
                  <FilterContent />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No packages match your filters.</p>
            <button onClick={resetFilters} className="mt-4 text-primary underline">Clear all filters</button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={customImage} className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.65),rgba(0,0,0,0.3),rgba(0,0,0,0.85))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,120,50,0.18),transparent)] mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Need a Custom Package?</h2>
          <p className="text-white/80 mb-6">Let us craft your perfect journey.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Helper for tour category hierarchy (same as before)
const tourCategoryChildren: Record<string, string[]> = {
  "Special Interest Tours": [
    "Architectural",
    "Spiritual",
    "Wildlife",
    "Culinary Tours",
    "Textile & Art",
    "Honeymoon Tours",
    "Narmada Parikrama",
  ],
  "Seasonal Tours": ["Monsoon Exclusive", "Summer", "Winter"],
};

export default Packages;
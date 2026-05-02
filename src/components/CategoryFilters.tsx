import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { mapCategoryColors, type MapCategory } from "@/data/mapDestinations";
import { useFilters } from "@/contexts/FilterContext";

import filterAll from "@/assets/filter-all.png";
import filterWildlife from "@/assets/filter-wildlife.png";
import filterHeritage from "@/assets/filter-heritage.jpg";
import filterNature from "@/assets/filter-nature.jpg";
import filterSpiritual from "@/assets/filter-spiritual.jpg";

const categoryImages: Record<"All" | MapCategory, string> = {
  All: filterAll,
  Wildlife: filterWildlife,
  Heritage: filterHeritage,
  Nature: filterNature,
  Spiritual: filterSpiritual,
};

const allCategories: MapCategory[] = ["Wildlife", "Heritage", "Spiritual", "Nature"];

// ─── 3D Tilt Card ───
const FilterCard = ({
  label,
  image,
  active,
  onClick,
  index,
  colorClass,
  glowClass,
}: {
  label: string;
  image: string;
  active: boolean;
  onClick: () => void;
  index: number;
  colorClass?: string;
  glowClass?: string;
}) => {
  const cardRef = useRef<HTMLButtonElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [12, -12]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-12, 12]), { stiffness: 200, damping: 20 });

  const handleMouse = (e: MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.button
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 18 }}
      style={{ rotateX, rotateY, perspective: 800 }}
      className="relative group flex flex-col items-center gap-3"
    >
      {/* Floating idle animation wrapper */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Outer glow ring */}
        {active && (
          <motion.div
            layoutId={`ring-${label}`}
            className={`absolute -inset-1.5 rounded-full ${colorClass || "bg-primary"} opacity-30 blur-md`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 0.4 }}
            transition={{ duration: 0.4 }}
          />
        )}

        {/* Animated gradient border */}
        <div
          className={`relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full p-[3px] transition-all duration-500 ${
            active
              ? "bg-gradient-to-br from-primary via-amber-400 to-primary shadow-xl shadow-primary/40"
              : "bg-gradient-to-br from-border/60 to-border/30 group-hover:from-primary/50 group-hover:to-amber-400/50 group-hover:shadow-lg group-hover:shadow-primary/20"
          }`}
        >
          {/* Glass card inner */}
          <div className="relative w-full h-full rounded-full overflow-hidden backdrop-blur-sm bg-background/10">
            {/* Image */}
            <motion.img
              src={image}
              alt={label}
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              loading="lazy"
            />


            {/* Active check */}
            {active && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 md:top-2 md:right-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary flex items-center justify-center shadow-md z-10"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Label */}
      <motion.span
        className={`text-sm md:text-base font-semibold transition-colors duration-300 ${
          active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
        }`}
      >
        {label}
      </motion.span>
    </motion.button>
  );
};

// ─── Main Filters Component ───
const CategoryFilters = ({ inView }: { inView: boolean }) => {
  const { selectedFilters, toggleFilter, selectAll, isAll } = useFilters();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 }}
      className="flex flex-col items-center gap-6 mb-14"
    >
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
        {/* All */}
        <FilterCard
          label="All"
          image={categoryImages.All}
          active={isAll}
          onClick={selectAll}
          index={0}
        />

        {/* Category cards */}
        {allCategories.map((cat, i) => {
          const color = mapCategoryColors[cat];
          return (
            <FilterCard
              key={cat}
              label={cat}
              image={categoryImages[cat]}
              active={selectedFilters.includes(cat)}
              onClick={() => toggleFilter(cat)}
              index={i + 1}
              colorClass={color.dot}
              glowClass={color.glow}
            />
          );
        })}
      </div>

      {/* Active count */}
      {!isAll && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="px-5 py-2 rounded-full bg-primary/10 backdrop-blur-sm text-primary text-xs font-semibold border border-primary/20"
        >
          {selectedFilters.length} {selectedFilters.length === 1 ? "category" : "categories"} selected
        </motion.span>
      )}
    </motion.div>
  );
};

export default CategoryFilters;

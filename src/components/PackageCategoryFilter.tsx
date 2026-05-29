import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

import catAll from "@/assets/cat-all.jpg";
import catGetaway from "@/assets/cat-getaway.jpg";
import catWomen from "@/assets/cat-women.jpg";
import catSpecial from "@/assets/cat-special.jpg";
import catBestselling from "@/assets/cat-bestselling.jpg";
import catSenior from "@/assets/cat-senior.jpg";
import catSeasonal from "@/assets/cat-seasonal.jpg";
import catGroup from "@/assets/cat-group.jpg";
import catLuxury from "@/assets/cat-luxury.jpg";

import catArchitectural from "@/assets/cat-architectural.jpg";
import catSpiritual from "@/assets/cat-spiritual.jpg";
import catWildlife from "@/assets/cat-wildlife.jpg";
import catCulinary from "@/assets/cat-culinary.jpg";
import catTextile from "@/assets/cat-textile.jpg";
import catHoneymoon from "@/assets/cat-honeymoon.jpg";
import catNarmada from "@/assets/cat-narmada.jpg";

import catMonsoon from "@/assets/cat-monsoon.jpg";
import catSummer from "@/assets/cat-summer.jpg";
import catWinter from "@/assets/cat-winter.jpg";

/* ─── Category Types ─── */

export type TourCategory =
  | "All"
  | "Quick Getaways"
  | "Women Exclusive"
  | "Special Interest Tours"
  | "Best-Selling Tours"
  | "Senior Citizen"
  | "Seasonal Tours"
  | "Group Join-in"
  | "Luxury & Experiential";

interface SubCategory {
  label: string;
  image: string;
}

/* ─── Main Categories ─── */

const mainCategories: { label: TourCategory; image: string }[] = [
  { label: "All", image: catAll },
  { label: "Quick Getaways", image: catGetaway },
  { label: "Women Exclusive", image: catWomen },
  { label: "Special Interest Tours", image: catSpecial },
  { label: "Best-Selling Tours", image: catBestselling },
  { label: "Senior Citizen", image: catSenior },
  { label: "Seasonal Tours", image: catSeasonal },
  { label: "Group Join-in", image: catGroup },
  { label: "Luxury & Experiential", image: catLuxury },
];

const nestedCategories: Record<string, SubCategory[]> = {
  "Special Interest Tours": [
    { label: "Architectural", image: catArchitectural },
    { label: "Spiritual", image: catSpiritual },
    { label: "Wildlife", image: catWildlife },
    { label: "Culinary Tours", image: catCulinary },
    { label: "Textile & Art", image: catTextile },
    { label: "Honeymoon Tours", image: catHoneymoon },
    { label: "Narmada Parikrama", image: catNarmada },
  ],
  "Seasonal Tours": [
    { label: "Monsoon Exclusive", image: catMonsoon },
    { label: "Summer", image: catSummer },
    { label: "Winter", image: catWinter },
  ],
};

/* ─── New Category Card ─── */

const CategoryCard = ({
  label,
  image,
  active,
  onClick,
  index,
  size = "lg",
}: {
  label: string;
  image: string;
  active: boolean;
  onClick: () => void;
  index: number;
  size?: "lg" | "sm";
}) => {
  const width =
    size === "lg"
      ? "w-[110px] md:w-[130px]"
      : "w-[95px] md:w-[110px]";

  const height =
    size === "lg"
      ? "h-[110px] md:h-[130px]"
      : "h-[95px] md:h-[110px]";

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group flex flex-col items-center gap-2 shrink-0"
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className={`relative ${width} ${height} rounded-2xl overflow-hidden shadow-md transition-all duration-400
        ${
          active
            ? "ring-2 ring-primary shadow-lg shadow-primary/30"
            : "hover:shadow-xl hover:shadow-primary/10"
        }`}
      >
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" />


        {/* Active Glow */}
        {active && (
          <motion.div
            layoutId="active-category"
            className="absolute inset-0 border-2 border-primary rounded-2xl"
          />
        )}

        {/* Label */}
        <div className="absolute bottom-2 left-2 right-2 text-white text-[11px] md:text-xs font-semibold text-center leading-tight">
          {label}
        </div>
      </motion.div>
    </motion.button>
  );
};

/* ─── Main Component ─── */

interface PackageCategoryFilterProps {
  selectedCategory: TourCategory;
  selectedSubCategory: string | null;
  onCategoryChange: (cat: TourCategory) => void;
  onSubCategoryChange: (sub: string | null) => void;
}

const PackageCategoryFilter = ({
  selectedCategory,
  selectedSubCategory,
  onCategoryChange,
  onSubCategoryChange,
}: PackageCategoryFilterProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const hasNested = nestedCategories[selectedCategory];

  const handleCategoryClick = (cat: TourCategory) => {
    if (cat === selectedCategory && cat !== "All") {
      onCategoryChange("All");
      onSubCategoryChange(null);
    } else {
      onCategoryChange(cat);
      onSubCategoryChange(null);
    }
  };

  const handleSubClick = (sub: string) => {
    onSubCategoryChange(selectedSubCategory === sub ? null : sub);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="py-8 md:py-10"
    >
      {/* Title */}

      <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary mb-6">
        Browse by Category
      </p>

      {/* Main Categories */}

      <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
        <div className="flex justify-center gap-4 md:gap-6 min-w-max mx-auto">
          {mainCategories.map((cat, i) => (
            <CategoryCard
              key={cat.label}
              label={cat.label}
              image={cat.image}
              active={selectedCategory === cat.label}
              onClick={() => handleCategoryClick(cat.label)}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Nested Categories */}

      <AnimatePresence>
        {hasNested && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-6 pb-2">
              <p className="text-center text-xs uppercase text-muted-foreground mb-4">
                {selectedCategory} — Choose a specialty
              </p>

              <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
                <div className="flex justify-center gap-4 min-w-max mx-auto">
                  {hasNested.map((sub, i) => (
                    <CategoryCard
                      key={sub.label}
                      label={sub.label}
                      image={sub.image}
                      active={selectedSubCategory === sub.label}
                      onClick={() => handleSubClick(sub.label)}
                      index={i}
                      size="sm"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected Badge */}

      {selectedCategory !== "All" && (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="flex justify-center mt-4"
        >
          <span className="px-5 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
            {selectedSubCategory || selectedCategory}
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PackageCategoryFilter;
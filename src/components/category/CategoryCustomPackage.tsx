import { useState } from "react";
import customImage from "@/assets/customimage.png";
import CategoryQuoteModal from "@/components/category/CategoryQuoteModal";

export type CategoryKey = "Wildlife" | "Nature" | "Heritage" | "Spiritual";

interface CategoryConfig {
  title: string;
  subtitle: string;
  placesLabel: string;
  places: string[];
  ctaLabel: string;
}

const CONFIG: Record<CategoryKey, CategoryConfig> = {
  Wildlife: {
    title: "Plan Your Wildlife Journey",
    subtitle: "Share your preferences and we'll design a wild adventure tailor-made for you.",
    placesLabel: "Interested National Parks",
    places: ["Bandhavgarh", "Kanha", "Pench", "Satpura", "Panna"],
    ctaLabel: "Create My Wildlife Journey",
  },
  Nature: {
    title: "Plan Your Nature Journey",
    subtitle: "Tell us your dream and we'll craft an immersive nature escape just for you.",
    placesLabel: "Interested Places",
    places: ["Pachmarhi", "Waterfalls", "Forest Retreats", "Hills", "Eco Camps"],
    ctaLabel: "Create My Nature Journey",
  },
  Heritage: {
    title: "Plan Your Heritage Journey",
    subtitle: "Share your preferences and we'll design a timeless heritage trail for you.",
    placesLabel: "Interested Heritage Sites",
    places: ["Gwalior", "Orchha", "Khajuraho", "Mandu", "Sanchi"],
    ctaLabel: "Create My Heritage Journey",
  },
  Spiritual: {
    title: "Plan Your Spiritual Journey",
    subtitle: "Share your preferences and we'll design a serene spiritual journey for you.",
    placesLabel: "Interested Spiritual Sites",
    places: ["Ujjain", "Omkareshwar", "Maheshwar", "Chitrakoot", "Amarkantak"],
    ctaLabel: "Create My Spiritual Journey",
  },
};

interface Props {
  category: CategoryKey;
}

const CategoryCustomPackage = ({ category }: Props) => {
  const [open, setOpen] = useState(false);
  const cfg = CONFIG[category];

  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={customImage} alt="Custom Package" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.65),rgba(0,0,0,0.3),rgba(0,0,0,0.85))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,120,50,0.18),transparent)] mix-blend-multiply" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Need a Custom Package?</h2>
          <p className="text-white/80 mb-8 max-w-xl">
            Let our experts craft your perfect {category.toLowerCase()} journey across Madhya Pradesh.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:to-orange-800 transition-all duration-300 px-8 py-3 rounded-full text-white font-semibold shadow-xl hover:scale-105"
          >
            Book Custom Package
          </button>
        </div>
      </section>

      <CategoryQuoteModal
        open={open}
        onOpenChange={setOpen}
        category={category}
        title={cfg.title}
        subtitle={cfg.subtitle}
        placesLabel={cfg.placesLabel}
        places={cfg.places}
        ctaLabel={cfg.ctaLabel}
      />
    </>
  );
};

export default CategoryCustomPackage;

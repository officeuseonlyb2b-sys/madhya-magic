// src/features/sawan-packages/SawanPackageGrid.tsx
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sawanPackages } from "../data/packages";
import SawanPackageCard from "./SawanPackageCard";

const ORANGE = "#FF7A00";

const SawanPackageGrid = () => {
  const normal = sawanPackages.filter((p) => p.kind === "normal");
  const heli = sawanPackages.filter((p) => p.kind === "helicopter");

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // default desktop
  const totalCards = heli.length;

  // Update visible cards count based on window width
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, totalCards - visibleCards);
  const canPrev = currentIndex > 0;
  const canNext = currentIndex < maxIndex;

  const handlePrev = () => {
    if (canPrev) setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    if (canNext) setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section
      id="sawan-special-packages"
      className="relative py-20 md:py-28 overflow-hidden bg-white"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Normal Packages - Grid */}
        <SectionTitle
          eyebrow="ॐ Crafted with Devotion"
          title="Choose Your Shravan Journey"
          subtitle=""
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {normal.map((p, i) => (
            <SawanPackageCard key={p.id} pkg={p} index={i} />
          ))}
        </div>

        {/* Helicopter Packages - Carousel with fixed visible cards */}
        {heli.length > 0 && (
          <div className="mt-24">
            <SectionTitle
              eyebrow="✈ Fly to Faith"
              title="Darshan Beyond the Ordinary"
              subtitle="Helicopter packages for a divine aerial journey"
            />

            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                disabled={!canPrev}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200 transition-all -ml-4 lg:-ml-6 ${
                  !canPrev
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-white"
                }`}
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-black" strokeWidth={2} />
              </button>

              {/* Carousel Viewport */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-out gap-6"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                  }}
                >
                  {heli.map((pkg, idx) => (
                    <div
                      key={pkg.id}
                      className="flex-shrink-0"
                      style={{ width: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * 24 / visibleCards}px)` }}
                    >
                      <SawanPackageCard pkg={pkg} index={idx} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                disabled={!canNext}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200 transition-all -mr-4 lg:-mr-6 ${
                  !canNext
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-white"
                }`}
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-black" strokeWidth={2} />
              </button>

              {/* Dots */}
              {maxIndex > 0 && (
                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === currentIndex
                          ? "w-6 bg-[#FF7A00]"
                          : "w-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
    <span
      className="inline-block uppercase tracking-[0.35em] text-xs mb-3 border-b pb-2"
      style={{ color: ORANGE, borderColor: `${ORANGE}55` }}
    >
      {eyebrow}
    </span>
    <h2 className="font-display text-black text-3xl md:text-5xl">{title}</h2>
    <p className="max-w-2xl mx-auto text-gray-600 mt-4">{subtitle}</p>
    <div className="mt-4 flex justify-center gap-2 items-center">
      <span
        className="w-14 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${ORANGE}, transparent)` }}
      />
      <span style={{ color: ORANGE }} className="text-lg">🕉️</span>
      <span
        className="w-14 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${ORANGE}, transparent)` }}
      />
    </div>
  </motion.div>
);

export default SawanPackageGrid;
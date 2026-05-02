import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "lucide-react";

import knowHeritage from "@/assets/know-heritage.jpg";
import knowTiger from "@/assets/know-tiger.jpg";
import knowJyotirlinga from "@/assets/know-jyotirlinga.jpg";
import knowArt from "@/assets/know-art.jpg";
import knowFood from "@/assets/know-food.jpg";
import knowCheetah from "@/assets/know-cheetah.jpg";
import knowAdventure from "@/assets/know-adventure.jpg";
import knowMpBg from "@/assets/know-mp-bg.jpg";

const categories = [
  { title: "Heritage", image: knowHeritage, subtitle: "Timeless Forts & Temples" },
  { title: "Wildlife", image: knowTiger, subtitle: "Tiger Capital of the World" },
  { title: "Spiritual", image: knowJyotirlinga, subtitle: "Sacred Jyotirlingas" },
  { title: "Art & Culture", image: knowArt, subtitle: "Tribal Art & Weaves" },
  { title: "Food", image: knowFood, subtitle: "Flavours of the Heartland" },
  { title: "Cheetah", image: knowCheetah, subtitle: "Kuno National Park" },
  { title: "Adventure", image: knowAdventure, subtitle: "Thrills in the Wild" },
];

const KnowMPSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ fontFamily: "Nunito, Helvetica, Arial, sans-serif" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${knowMpBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8860b' fill-opacity='0.6'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-left mb-10 max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            <span className="text-primary">Know</span> Madhya Pradesh
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mx-0 mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
          />

          <p className="text-primary text-lg md:text-xl mt-4 font-medium">
            Experience the Soul of Incredible India
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mb-16 text-left space-y-5 lg:pr-32"
        >
          <p className="text-foreground/90 leading-relaxed">
            Madhya Pradesh isn’t just a place to visit — it’s where India’s true essence comes alive.
          </p>

          <p className="text-foreground/80 leading-relaxed">
            From dense wildlife forests and peaceful hill landscapes to ancient temples,
            heritage towns, and UNESCO-recognized wonders, every corner of Madhya Pradesh
            tells a story waiting to be explored.
          </p>

          <p className="text-foreground/80 leading-relaxed">
            Rich in wildlife, spiritual destinations, vibrant traditions, and timeless culture,
            the state offers experiences that are immersive, meaningful, and unforgettable.
          </p>

          <p className="text-foreground font-semibold">
            Whether you're looking for adventure, spiritual journeys, cultural discovery,
            or a peaceful escape — Madhya Pradesh welcomes every traveler with something unique.
          </p>

          <p className="text-primary font-semibold italic">
            Come explore the heart of India — where every journey turns into a lasting memory.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="relative">
          <div className="flex md:flex-wrap md:justify-center gap-6 md:gap-8 lg:gap-10 overflow-x-auto md:overflow-visible pb-4 snap-x snap-mandatory scrollbar-hide px-4 md:px-0">
            {categories.map((cat, i) => {
              const isSelected = selected === i;

              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                  className="flex flex-col items-center snap-center shrink-0 cursor-pointer group"
                  onClick={() => setSelected(isSelected ? null : i)}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, y: -6 }}
                    className="relative"
                  >
                    <div
                      className={`absolute -inset-2 rounded-full transition-all duration-500 ${
                        isSelected
                          ? "bg-primary/20 blur-xl"
                          : "group-hover:bg-primary/10 group-hover:blur-lg"
                      }`}
                    />

                    <div
                      className={`relative w-32 h-32 rounded-full p-[3px] transition-all duration-500 ${
                        isSelected
                          ? "bg-primary shadow-lg"
                          : "bg-border group-hover:bg-primary"
                      }`}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img
                          src={cat.image}
                          alt={cat.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {isSelected && (
                      <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </motion.div>

                  <div className="mt-4 text-center">
                    <h3
                      className={`font-semibold ${
                        isSelected
                          ? "text-primary"
                          : "text-foreground group-hover:text-primary"
                      }`}
                    >
                      {cat.title}
                    </h3>

                    <p className="text-xs text-muted-foreground">
                      {cat.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default KnowMPSection;
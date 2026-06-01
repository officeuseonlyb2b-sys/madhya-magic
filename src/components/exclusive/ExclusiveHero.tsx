import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { SawanCampaign } from "@/data/exclusive/sawanData";

interface Props { hero: SawanCampaign["hero"] }

const ExclusiveHero = ({ hero }: Props) => {
  const scrollTo = (sel: string) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full h-[88vh] min-h-[560px] overflow-hidden">
      <img
        src={hero.image}
        alt={hero.title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-end pb-24 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="nav-font text-amber-300 uppercase tracking-[0.3em] text-xs md:text-sm mb-4"
        >
          Exclusive • Seasonal Campaign
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-white text-4xl md:text-7xl leading-tight max-w-4xl"
        >
          {hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/85 text-base md:text-xl mt-5 max-w-2xl"
        >
          {hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <button
            onClick={() => scrollTo(hero.primaryCta.target)}
            className="nav-font bg-amber-400 text-black px-7 py-3.5 rounded-full font-semibold hover:bg-amber-300 transition shadow-lg shadow-amber-500/20"
          >
            {hero.primaryCta.label}
          </button>
          <button
            onClick={() => scrollTo(hero.secondaryCta.target)}
            className="nav-font border border-white/40 text-white px-7 py-3.5 rounded-full backdrop-blur-md hover:bg-white/10 transition"
          >
            {hero.secondaryCta.label}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExclusiveHero;

import { motion } from "framer-motion";
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
      {/* Saffron/ochre gradient overlay (replaces flat black wash) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3a1d05]/70 via-[#7a3a0a]/40 to-[#1a0a02]/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff9933]/25 via-transparent to-[#d4a017]/15 mix-blend-overlay" />

      {/* Soft golden glow ring */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(255,176,80,0.20),transparent_65%)]" />

      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-end pb-24 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="nav-font text-[#FFCE7A] uppercase tracking-[0.3em] text-xs md:text-sm mb-4 drop-shadow"
        >
          ॐ Exclusive • Sacred Season
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-white text-4xl md:text-7xl leading-tight max-w-4xl drop-shadow-[0_4px_24px_rgba(255,140,40,0.35)]"
        >
          {hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/90 text-base md:text-xl mt-5 max-w-2xl"
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
            className="nav-font px-7 py-3.5 rounded-full font-semibold transition shadow-lg shadow-[#ff9933]/30
                       text-white bg-gradient-to-r from-[#ff9933] to-[#d4a017]
                       hover:from-[#ffae5a] hover:to-[#e6b526]"
          >
            {hero.primaryCta.label}
          </button>
          <button
            onClick={() => scrollTo(hero.secondaryCta.target)}
            className="nav-font border border-[#FFCE7A]/60 text-[#FFE6B8] px-7 py-3.5 rounded-full backdrop-blur-md hover:bg-[#ff9933]/15 transition"
          >
            {hero.secondaryCta.label}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExclusiveHero;

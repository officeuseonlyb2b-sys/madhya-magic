import { motion } from "framer-motion";
import { sawanHeroImage } from "../data/packages";
import SawanSpiritualBackdrop from "./SawanSpiritualBackdrop";

interface Props {
  onOpenEnquiry: () => void;
}

const SawanHero = ({ onOpenEnquiry }: Props) => {
  const scrollToPackages = () => {
    document
      .getElementById("sawan-special-packages")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[88vh] md:min-h-screen overflow-hidden flex items-end">
      {/* Background image */}
      <img
        src={sawanHeroImage}
        alt="Sawan in Ujjain — Mahakaleshwar Jyotirlinga"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a02]/95 via-[#3a1d05]/55 to-[#3a1d05]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff9933]/15 via-transparent to-[#d4a017]/15 mix-blend-overlay" />

      <SawanSpiritualBackdrop />

      <div className="relative z-10 container mx-auto px-6 pb-20 md:pb-28 text-white">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="nav-font inline-flex items-center gap-2 text-[#FFCE7A] uppercase tracking-[0.35em] text-[11px] md:text-xs border border-[#FFCE7A]/40 px-4 py-1.5 rounded-full backdrop-blur-sm bg-white/5"
        >
          ॐ Sawan · Shravan Special · 2025
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl mt-5"
        >
          Sawan Special Packages
          <span className="block text-[#FFCE7A] text-2xl md:text-3xl lg:text-4xl mt-3 font-display">
            Luxury Pilgrimage to Mahakal & Omkareshwar
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-[#FFF1D6]/90 text-base md:text-lg leading-relaxed"
        >
          Hand-crafted hotel and helicopter pilgrimages for the holy month of
          Shravan — VVIP Bhasma Aarti, both Jyotirlingas and luxury stays.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <button
            onClick={scrollToPackages}
            className="nav-font bg-gradient-to-r from-[#ff9933] to-[#d4a017] text-white px-7 py-3.5 rounded-full font-semibold hover:from-[#ffae5a] hover:to-[#e6b526] shadow-lg shadow-[#ff9933]/30 transition"
          >
            Explore Packages
          </button>
          <button
            onClick={onOpenEnquiry}
            className="nav-font px-7 py-3.5 rounded-full font-semibold border border-[#FFCE7A]/70 text-[#FFCE7A] bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
          >
            Enquire Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SawanHero;

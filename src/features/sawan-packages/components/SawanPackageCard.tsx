import { motion } from "framer-motion";
import { Clock, MapPin, Sparkles, ArrowRight } from "lucide-react";
import type { SawanPackage } from "../types";

interface Props {
  pkg: SawanPackage;
  index: number;
  onOpen: (pkg: SawanPackage) => void;
}

const SawanPackageCard = ({ pkg, index, onOpen }: Props) => {
  const isHeli = pkg.kind === "helicopter";

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(pkg)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className={`group relative text-left rounded-3xl overflow-hidden flex flex-col bg-white border transition-all duration-500 shadow-xl ${
        isHeli
          ? "border-[#d4a017]/40 hover:border-[#ff9933]/70 shadow-[#d4a017]/20 hover:shadow-2xl hover:shadow-[#ff9933]/30 ring-1 ring-[#d4a017]/30"
          : "border-[#d4a017]/20 hover:border-[#ff9933]/60 shadow-[#d4a017]/10 hover:shadow-2xl hover:shadow-[#ff9933]/15"
      }`}
    >
      {/* Glow halo */}
      <span
        aria-hidden
        className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-[#ff9933]/0 via-[#d4a017]/0 to-[#ff9933]/0 group-hover:from-[#ff9933]/30 group-hover:via-transparent group-hover:to-[#d4a017]/25 blur-md transition-all duration-700 pointer-events-none"
      />

      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3a1d05]/80 via-transparent to-transparent" />

        <span
          className={`absolute top-4 left-4 text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm shadow ${
            isHeli
              ? "bg-gradient-to-r from-[#d4a017] to-[#ff9933] text-white"
              : "bg-gradient-to-r from-[#ff9933] to-[#d4a017] text-white"
          }`}
        >
          {isHeli ? "✈ Helicopter VIP" : "ॐ Sawan Special"}
        </span>

        {/* Hover quick highlights overlay */}
        <div className="absolute inset-0 bg-[#3a1d05]/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
          <div className="text-white">
            <p className="nav-font text-[#FFCE7A] uppercase text-[10px] tracking-widest mb-2">
              Quick Highlights
            </p>
            <ul className="space-y-1.5 text-sm">
              {pkg.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <Sparkles size={14} className="mt-0.5 text-[#FFCE7A] flex-shrink-0" />
                  <span className="leading-snug">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl text-[#3a1d05] leading-snug">{pkg.name}</h3>
        <p className="nav-font text-xs text-[#b8651a] mt-1">{pkg.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-3 text-xs text-[#5a3a1a]">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={13} className="text-[#ff9933]" /> {pkg.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} className="text-[#ff9933]" /> {pkg.route.split("→")[0].trim()}
          </span>
        </div>

        {/* ─── Quick Travel Facts ─── */}
        {pkg.facts && (
          <div className="mt-4 p-3 rounded-lg bg-gradient-to-br from-[#fff7ec] to-[#ffefe0] border border-[#d4a017]/20 text-xs text-[#5a3a1a] space-y-1.5">
            <p className="font-semibold text-[#b8651a] mb-1">🧳 Travel Facts</p>
            <p className="flex items-start gap-1.5">
              <span className="whitespace-nowrap">✈️ Nearest Airport:</span>
              <span className="leading-tight">{pkg.facts.nearestAirport}</span>
            </p>
            <p className="flex items-start gap-1.5">
              <span className="whitespace-nowrap">🚂 Railway Station:</span>
              <span className="leading-tight">{pkg.facts.nearestRailway}</span>
            </p>
            <p className="flex items-start gap-1.5">
              <span className="whitespace-nowrap">🌦 Weather:</span>
              <span className="leading-tight">{pkg.facts.weather}</span>
            </p>
          </div>
        )}

        {/* ─── Notes Preview ─── */}
        {pkg.notes && pkg.notes.length > 0 && (
          <div className="mt-3 text-xs text-[#8a5a2a] italic border-l-2 border-[#ff9933] pl-3 leading-relaxed">
            {pkg.notes[0]}
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto pt-5 flex items-center justify-between border-t border-[#d4a017]/30 mt-5">
          <div>
            <p className="text-[11px] text-[#8a5a2a]">Starting from</p>
            <p className="font-display text-xl text-[#b8651a]">{pkg.startingPrice}</p>
          </div>
          <span className="nav-font inline-flex items-center gap-1.5 bg-gradient-to-r from-[#ff9933] to-[#d4a017] text-white px-4 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-[#ff9933]/25 group-hover:from-[#ffae5a] group-hover:to-[#e6b526] transition">
            View Details <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </motion.button>
  );
};

export default SawanPackageCard;
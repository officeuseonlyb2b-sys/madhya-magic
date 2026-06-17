import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, MapPin, Sparkles, ArrowRight } from "lucide-react";
import type { SawanPackage } from "../types";

interface Props {
  pkg: SawanPackage;
  index: number;
}

const ORANGE = "#FF7A00";

const SawanPackageCard = ({ pkg, index }: Props) => {
  const isHeli = pkg.kind === "helicopter";

  return (
    <motion.div
  initial={false}
  whileHover={{ scale: 1.01 }}
>
      <Link
        to={`/exclusive/sawan-ujjain/package/${pkg.id}`}
        className="group relative flex flex-col h-full text-left rounded-3xl overflow-hidden bg-white border border-orange-200 hover:border-orange-400 shadow-lg shadow-orange-100/40 hover:shadow-2xl hover:shadow-orange-200/60 transition-all duration-500"
      >
        {/* Image */}
        <div className="relative h-60 overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <span
            className="absolute top-4 left-4 text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full text-white shadow"
            style={{ backgroundColor: ORANGE }}
          >
            {isHeli ? "✈ Helicopter VIP" : "ॐ Sawan Special"}
          </span>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display text-xl text-black leading-snug">{pkg.name}</h3>
          <p className="text-xs mt-1" style={{ color: ORANGE }}>{pkg.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-700">
            <span className="inline-flex items-center gap-1.5">
              <Clock size={13} style={{ color: ORANGE }} /> {pkg.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} style={{ color: ORANGE }} /> {pkg.route.split("→")[0].trim()}
            </span>
          </div>

          {pkg.highlights.length > 0 && (
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700 h-[80px] overflow-hidden">
              {pkg.highlights.slice(0, 2).map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <Sparkles size={14} className="mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
                  <span className="leading-snug line-clamp-2">{h}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto pt-5 flex items-center justify-between border-t border-orange-100">
            <div>
              <p className="text-[11px] text-gray-500">Starting from</p>
              <p className="font-display text-xl text-black">{pkg.startingPrice}</p>
            </div>
            <span
              className="inline-flex items-center gap-1.5 text-white px-4 py-2.5 rounded-full text-sm font-semibold shadow-md transition group-hover:opacity-90"
              style={{ backgroundColor: ORANGE }}
            >
              View Details <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SawanPackageCard;

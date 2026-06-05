import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import {
  X,
  Clock,
  MapPin,
  Calendar,
  Check,
  Ban,
  Sparkles,
  IndianRupee,
  Info,
  FileText,
  Plane,
  Train,
  CloudRain,
} from "lucide-react";
import type { SawanPackage } from "../types";

interface Props {
  pkg: SawanPackage | null;
  onClose: () => void;
  onEnquire: (pkg: SawanPackage) => void;
}

const SawanPackageModal = ({ pkg, onClose, onEnquire }: Props) => {
  useEffect(() => {
    if (!pkg) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onEsc);
    };
  }, [pkg, onClose]);

  return (
    <AnimatePresence>
      {pkg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-[#1a0a02]/80 backdrop-blur-sm flex items-stretch md:items-center justify-center p-0 md:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#FFFBF3] w-full md:max-w-5xl md:max-h-[90vh] md:rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-[#d4a017]/30"
          >
            {/* Banner */}
            <div className="relative h-56 md:h-72 flex-shrink-0">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3a1d05]/95 via-[#3a1d05]/40 to-transparent" />
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="nav-font inline-block text-[10px] uppercase tracking-[0.3em] text-[#FFCE7A] border border-[#FFCE7A]/40 px-3 py-1 rounded-full mb-3">
                  {pkg.badge}
                </span>
                <h3 className="font-display text-2xl md:text-4xl leading-tight">
                  {pkg.name}
                </h3>
                <p className="text-[#FFE6B8] mt-1 text-sm">{pkg.tagline}</p>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8 text-[#3a1d05]">
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <Meta icon={<Clock size={16} />} label="Duration" value={pkg.duration} />
                <Meta icon={<MapPin size={16} />} label="Route" value={pkg.route} />
                <Meta icon={<Calendar size={16} />} label="Validity" value={pkg.validity} />
              </div>

              <p className="text-[#5a3a1a] leading-relaxed mb-8">{pkg.description}</p>

              {/* Highlights */}
              <Section title="Highlights" icon={<Sparkles size={16} />}>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-[#5a3a1a]">
                      <Sparkles size={14} className="mt-0.5 text-[#ff9933] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Itinerary */}
              <Section title="Itinerary" icon={<Calendar size={16} />}>
                <ol className="space-y-4">
                  {pkg.itinerary.map((d, i) => (
                    <li key={i} className="relative pl-8">
                      <span className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#ff9933] to-[#d4a017] text-white text-[11px] font-semibold flex items-center justify-center shadow">
                        {i + 1}
                      </span>
                      <p className="nav-font text-[#b8651a] text-xs uppercase tracking-widest">
                        {d.day}
                      </p>
                      <h4 className="font-display text-lg text-[#3a1d05] mt-0.5">{d.title}</h4>
                      <p className="text-sm text-[#5a3a1a] mt-1 leading-relaxed whitespace-pre-line">
                        {d.body}
                      </p>
                    </li>
                  ))}
                </ol>
              </Section>

              {/* Inclusions + Exclusions */}
              <div className="grid md:grid-cols-2 gap-6">
                <Section title="Inclusions" icon={<Check size={16} />}>
                  <ul className="space-y-2 text-sm">
                    {pkg.inclusions.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-[#5a3a1a]">
                        <Check size={14} className="mt-0.5 text-emerald-600 flex-shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </Section>
                <Section title="Exclusions" icon={<Ban size={16} />}>
                  <ul className="space-y-2 text-sm">
                    {pkg.exclusions.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-[#5a3a1a]">
                        <Ban size={14} className="mt-0.5 text-rose-500 flex-shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </Section>
              </div>

              {/* Multi‑tier Pricing */}
              {pkg.pricing && pkg.pricing.length > 0 && (
                <Section title="Pricing" icon={<IndianRupee size={16} />}>
                  <div className="space-y-6">
                    {pkg.pricing.map((tier, idx) => (
                      <div key={idx}>
                        <h5 className="text-sm font-semibold text-[#b8651a] mb-2 bg-[#fff7ec] px-3 py-1 rounded-full inline-block">
                          {tier.hotelCategory}
                        </h5>
                        <div className="border border-[#d4a017]/30 rounded-xl overflow-hidden bg-white/60">
                          <table className="w-full text-sm">
                            <thead className="bg-[#fff7ec] text-[#b8651a] font-semibold">
                              <tr>
                                <th className="p-3 text-left">Vehicle</th>
                                <th className="p-3 text-center">Pax</th>
                                <th className="p-3 text-right">Per Person (₹)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {tier.variants.map((v, i) => (
                                <tr key={i} className="border-t border-[#d4a017]/20">
                                  <td className="p-3 text-[#3a1d05]">{v.vehicle}</td>
                                  <td className="p-3 text-center text-[#3a1d05]">{v.pax}</td>
                                  <td className="p-3 text-right font-medium text-[#b8651a]">
                                    {v.cost.toLocaleString()}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              {/* Travel Facts */}
              {pkg.facts && (
                <Section title="Travel Facts" icon={<Info size={16} />}>
                  <div className="bg-[#fff7ec] border border-[#d4a017]/20 rounded-2xl p-5 space-y-3">
                    <FactItem icon={<Plane size={16} />} label="Nearest Airport" value={pkg.facts.nearestAirport} />
                    <FactItem icon={<Train size={16} />} label="Nearest Railway Station" value={pkg.facts.nearestRailway} />
                    <FactItem icon={<CloudRain size={16} />} label="Weather" value={pkg.facts.weather} />
                    <FactItem icon={<Info size={16} />} label="Accommodation" value={pkg.facts.accommodation} />
                    <FactItem icon={<Info size={16} />} label="Transportation" value={pkg.facts.transportation} />
                  </div>
                </Section>
              )}

              {/* Notes */}
              {pkg.notes && pkg.notes.length > 0 && (
                <Section title="Important Notes" icon={<FileText size={16} />}>
                  <ul className="space-y-2 text-sm text-[#5a3a1a] bg-[#fff7ec] border border-[#d4a017]/20 rounded-2xl p-5">
                    {pkg.notes.map((note, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="font-bold text-[#b8651a] mt-0.5 select-none">•</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}
            </div>

            {/* Sticky CTA */}
            <div className="flex-shrink-0 border-t border-[#d4a017]/30 bg-[#FFF7EC] px-6 md:px-10 py-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div>
                <p className="text-[11px] text-[#8a5a2a]">Starting from</p>
                <p className="font-display text-2xl text-[#b8651a]">{pkg.startingPrice}</p>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="nav-font flex-1 sm:flex-none px-5 py-3 rounded-full border border-[#d4a017]/50 text-[#b8651a] hover:bg-[#d4a017]/10 transition text-sm font-semibold"
                >
                  Close
                </button>
                <button
                  onClick={() => onEnquire(pkg)}
                  className="nav-font flex-1 sm:flex-none px-6 py-3 rounded-full bg-gradient-to-r from-[#ff9933] to-[#d4a017] text-white font-semibold shadow-lg shadow-[#ff9933]/30 hover:from-[#ffae5a] hover:to-[#e6b526] transition text-sm"
                >
                  Enquire About This Package
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FactItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex gap-2 text-sm text-[#5a3a1a]">
    <span className="text-[#ff9933] flex-shrink-0 mt-0.5">{icon}</span>
    <div>
      <span className="font-medium">{label}:</span> {value}
    </div>
  </div>
);

const Meta = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="rounded-2xl border border-[#d4a017]/30 bg-white px-4 py-3">
    <p className="nav-font text-[10px] uppercase tracking-widest text-[#b8651a] flex items-center gap-1.5">
      <span className="text-[#ff9933]">{icon}</span> {label}
    </p>
    <p className="text-sm text-[#3a1d05] mt-1">{value}</p>
  </div>
);

const Section = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="mb-8">
    <h4 className="font-display text-xl text-[#3a1d05] flex items-center gap-2 mb-3">
      <span className="text-[#ff9933]">{icon}</span> {title}
    </h4>
    {children}
  </div>
);

export default SawanPackageModal;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Check, ArrowRight } from "lucide-react";
import type { SawanCampaign } from "@/data/exclusive/sawanData";

interface Props {
  packages: SawanCampaign["packages"];
}

const ExclusivePackages = ({ packages }: Props) => {
  return (
    <section
      id="sawan-packages"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFF7EC 0%, #FFEFD5 50%, #FFF7EC 100%)",
      }}
    >
      {/* Sacred geometry rings */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#d4a017]/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#ff9933]/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block nav-font text-[#b8651a] uppercase tracking-[0.35em] text-xs mb-4 border-b border-[#d4a017]/40 pb-2">
            ॐ hand‑crafted journeys
          </span>
          <h2 className="font-display text-[#3a1d05] text-3xl md:text-5xl lg:text-6xl relative inline-block">
            Sawan Special Packages
            <span className="absolute -top-2 -right-6 text-2xl text-[#ff9933] opacity-60">॥</span>
          </h2>
          <div className="mt-3 flex justify-center gap-2 items-center">
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-[#ff9933] to-transparent" />
            <span className="text-[#ff9933] text-lg">🕉️</span>
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-[#ff9933] to-transparent" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-[#d4a017]/25 hover:border-[#ff9933]/70 shadow-xl shadow-[#d4a017]/10 hover:shadow-2xl hover:shadow-[#ff9933]/20 transition-all duration-700 flex flex-col"
            >
              <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-[#ff9933]/0 via-[#d4a017]/0 to-[#ff9933]/0 group-hover:from-[#ff9933]/25 group-hover:via-transparent group-hover:to-[#d4a017]/20 blur-md transition-all duration-700 pointer-events-none" />

              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a1d05]/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-gradient-to-r from-[#ff9933] to-[#d4a017] text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm shadow">
                  ॐ Sawan Special
                </span>
                <span className="absolute bottom-3 right-3 text-5xl text-white/15 select-none pointer-events-none">
                  ॐ
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1 relative">
                <h3 className="font-display text-xl text-[#3a1d05] mb-2">{pkg.name}</h3>
                <p className="nav-font text-sm text-[#b8651a] flex items-center gap-1.5 mb-4">
                  <Clock size={14} className="text-[#ff9933]" /> {pkg.duration}
                </p>
                <ul className="space-y-2 mb-5">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-[#5a3a1a]">
                      <Check size={14} className="mt-0.5 text-[#ff9933] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-[#d4a017]/30 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#8a5a2a]">Starting from</p>
                    <p className="font-display text-2xl text-[#b8651a]">{pkg.price}</p>
                  </div>
                  <Link
                    to={pkg.ctaHref}
                    className="nav-font inline-flex items-center gap-1.5 bg-gradient-to-r from-[#ff9933] to-[#d4a017] text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:from-[#ffae5a] hover:to-[#e6b526] transition-all duration-300 group/link shadow-md shadow-[#ff9933]/25"
                  >
                    {pkg.cta}{" "}
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusivePackages;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Check, ArrowRight } from "lucide-react";
import type { SawanCampaign } from "@/data/exclusive/sawanData";

interface Props {
  packages: SawanCampaign["packages"];
}

const ExclusivePackages = ({ packages }: Props) => {
  // Sacred floating particles (golden shimmer)
  const particles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    size: Math.random() * 4 + 2,
  }));

  return (
    <section
      id="sawan-packages"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 70% 30%, #3b2f1e 0%, #0a0a0a 65%)",
      }}
    >
      {/* Ambient particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: "radial-gradient(circle, #fbbf24, transparent)",
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [1, 1.8, 1],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4 + p.delay,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle sacred geometry ring */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-amber-700/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-amber-600/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Spiritual heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block nav-font text-amber-400/80 uppercase tracking-[0.35em] text-xs mb-4 border-b border-amber-600/30 pb-2">
            ॐ hand‑crafted journeys
          </span>
          <h2 className="font-display text-white text-3xl md:text-5xl lg:text-6xl relative">
            Sawan Special Packages
            <span className="absolute -top-2 -right-6 text-2xl text-amber-500 opacity-40">॥</span>
          </h2>
          <div className="mt-3 flex justify-center gap-2">
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            <span className="text-amber-400 text-lg">🕉️</span>
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          </div>
        </motion.div>

        {/* Packages grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#1c1610] rounded-3xl overflow-hidden border border-amber-800/20 hover:border-amber-500/50 shadow-2xl transition-all duration-700 flex flex-col"
            >
              {/* Hover glow overlay */}
              <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-amber-500/0 via-amber-400/0 to-amber-500/0 group-hover:from-amber-500/20 group-hover:via-transparent group-hover:to-amber-400/15 blur-md transition-all duration-700 pointer-events-none" />

              {/* Image with spiritual badge */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1610] via-transparent to-transparent opacity-60" />
                <span className="absolute top-4 left-4 bg-amber-500/90 text-black text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                  ॐ Sawan Special
                </span>
                {/* Subtle ॐ watermark on image */}
                <span className="absolute bottom-3 right-3 text-5xl text-white/5 select-none pointer-events-none">
                  ॐ
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 relative">
                <h3 className="font-display text-xl text-white mb-2">{pkg.name}</h3>
                <p className="nav-font text-sm text-amber-200/60 flex items-center gap-1.5 mb-4">
                  <Clock size={14} className="text-amber-400" /> {pkg.duration}
                </p>
                <ul className="space-y-2 mb-5">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-neutral-300">
                      <Check size={14} className="mt-0.5 text-amber-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="mt-auto pt-4 border-t border-amber-800/30 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-400">Starting from</p>
                    <p className="font-display text-2xl text-amber-200">{pkg.price}</p>
                  </div>
                  <Link
                    to={pkg.ctaHref}
                    className="nav-font inline-flex items-center gap-1.5 bg-amber-500 text-black px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-400 transition-all duration-300 group/link"
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
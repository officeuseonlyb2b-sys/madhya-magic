import { motion } from "framer-motion";
import { MapPin, Play } from "lucide-react";
import type { SawanCampaign } from "@/data/exclusive/sawanData";

interface Props {
  reels: SawanCampaign["reels"];
}

const ExclusiveReels = ({ reels }: Props) => {
  // Floating sacred particles (ॐ shimmer)
  const particles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    size: Math.random() * 4 + 2,
  }));

  return (
    <section
      id="sawan-reels"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 30% 20%, #3b2f1e 0%, #0a0a0a 65%)",
      }}
    >
      {/* Ambient floating particles */}
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
            opacity: [0, 0.7, 0],
            scale: [1, 1.8, 1],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4 + p.delay,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle background texture – optional mandala ring */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-amber-700/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-amber-600/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Spiritual heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block nav-font text-amber-400/80 uppercase tracking-[0.35em] text-xs mb-4 border-b border-amber-600/30 pb-2">
            ॐ glimpses of devotion
          </span>
          <h2 className="font-display text-white text-3xl md:text-5xl lg:text-6xl relative">
            Sawan Ujjain Reels
            <span className="absolute -top-2 -right-6 text-2xl text-amber-500 opacity-40">॥</span>
          </h2>
          <div className="mt-3 flex justify-center gap-2">
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            <span className="text-amber-400 text-lg">🕉️</span>
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          </div>
        </motion.div>

        {/* Reels horizontal scroller */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory -mx-6 px-6 scrollbar-thin scrollbar-thumb-amber-800/40 scrollbar-track-transparent">
          {reels.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative flex-shrink-0 w-[270px] md:w-[320px] aspect-[9/16] rounded-2xl overflow-hidden snap-start group cursor-pointer"
            >
              {/* Gold border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-amber-400/60 transition-all duration-500 z-10 pointer-events-none" />
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-amber-500/0 via-amber-400/0 to-amber-500/0 group-hover:from-amber-500/30 group-hover:via-transparent group-hover:to-amber-400/20 blur-md transition-all duration-700" />

              {/* Image */}
              <img
                src={reel.image}
                alt={reel.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              {/* Spiritual golden overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-amber-900/10 to-transparent mix-blend-multiply group-hover:opacity-70 transition-opacity duration-500" />

              {/* Play button on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="w-14 h-14 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-400/40 flex items-center justify-center">
                  <Play size={22} className="text-white fill-white ml-1" />
                </div>
              </div>

              {/* Content bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <h3 className="font-display text-white text-xl md:text-2xl leading-tight mb-1">
                  {reel.title}
                </h3>
                <p className="nav-font text-amber-200/80 text-xs flex items-center gap-1.5">
                  <MapPin size={12} className="text-amber-400" />
                  {reel.location}
                </p>
              </div>

              {/* ॐ watermark behind title */}
              <span className="absolute bottom-4 right-4 text-5xl text-white/5 select-none pointer-events-none">
                ॐ
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveReels;
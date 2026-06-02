import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { SawanCampaign } from "@/data/exclusive/sawanData";

interface Props {
  intro: SawanCampaign["intro"];
}

const ExclusiveIntro = ({ intro }: Props) => {
  // Sacred floating particles
  const particles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    size: Math.random() * 4 + 2,
  }));

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, #2f2417 0%, #0a0a0a 70%)",
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

      {/* Sacred geometry rings */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-amber-700/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-amber-600/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] group"
          >
            {/* Image with sacred hover border */}
            <img
              src={intro.image}
              alt={intro.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* Gold border glow on hover */}
            <div className="absolute inset-0 rounded-3xl border border-amber-800/20 group-hover:border-amber-500/50 transition-all duration-700 pointer-events-none" />
            <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-amber-500/0 via-amber-400/0 to-amber-500/0 group-hover:from-amber-500/20 group-hover:via-transparent group-hover:to-amber-400/10 blur-md transition-all duration-700 pointer-events-none" />

            {/* ॐ watermark on image */}
            <span className="absolute bottom-4 right-4 text-6xl text-white/10 select-none pointer-events-none">
              ॐ
            </span>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Eyebrow */}
            <span className="inline-block nav-font text-amber-400/80 uppercase tracking-[0.35em] text-xs mb-4 border-b border-amber-600/30 pb-2">
              ॐ {intro.eyebrow}
            </span>

            {/* Title */}
            <h2 className="font-display text-3xl md:text-5xl text-white leading-tight mb-6 relative">
              {intro.title}
              <span className="absolute -top-2 -right-6 text-2xl text-amber-500 opacity-40">
                ॥
              </span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-neutral-300 leading-relaxed">
              {intro.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Highlights grid */}
            <ul className="grid sm:grid-cols-2 gap-3 mt-8">
              {intro.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-sm text-neutral-300"
                >
                  <Check
                    size={16}
                    className="mt-0.5 text-amber-400 flex-shrink-0"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Divine separator after highlights */}
            <div className="mt-6 flex items-center gap-2">
              <span className="flex-1 h-px bg-gradient-to-r from-amber-600/40 to-transparent" />
              <span className="text-amber-400 text-sm opacity-60">🕉️</span>
              <span className="flex-1 h-px bg-gradient-to-l from-amber-600/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveIntro;
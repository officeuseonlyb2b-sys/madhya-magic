import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { SawanCampaign } from "@/data/exclusive/sawanData";

interface Props {
  intro: SawanCampaign["intro"];
}

const ExclusiveIntro = ({ intro }: Props) => {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFF7EC 0%, #FFFBF3 60%, #FFF3DD 100%)",
      }}
    >
      {/* NEW: Radial gradient ring (top center) */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(255,176,80,0.20),transparent_65%)]" />

      {/* Sacred geometry rings (saffron) */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#d4a017]/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#ff9933]/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#d4a017]/15 aspect-[4/5] group ring-1 ring-[#d4a017]/20"
          >
            <img
              src={intro.image}
              alt={intro.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3a1d05]/60 via-transparent to-transparent" />
            <div className="absolute inset-0 rounded-3xl border border-[#d4a017]/30 group-hover:border-[#ff9933]/70 transition-all duration-700 pointer-events-none" />
            <span className="absolute bottom-4 right-4 text-6xl text-white/30 select-none pointer-events-none">
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
            <span className="inline-block nav-font text-[#b8651a] uppercase tracking-[0.35em] text-xs mb-4 border-b border-[#d4a017]/40 pb-2">
              ॐ {intro.eyebrow}
            </span>

            <h2 className="font-display text-3xl md:text-5xl text-[#3a1d05] leading-tight mb-6 relative">
              {intro.title}
              <span className="absolute -top-2 -right-6 text-2xl text-[#ff9933] opacity-60">
                ॥
              </span>
            </h2>

            <div className="space-y-4 text-[#5a3a1a] leading-relaxed">
              {intro.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <ul className="grid sm:grid-cols-2 gap-3 mt-8">
              {intro.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-sm text-[#5a3a1a]"
                >
                  <Check
                    size={16}
                    className="mt-0.5 text-[#ff9933] flex-shrink-0"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-2">
              <span className="flex-1 h-px bg-gradient-to-r from-[#d4a017]/60 to-transparent" />
              <span className="text-[#ff9933] text-sm">🕉️</span>
              <span className="flex-1 h-px bg-gradient-to-l from-[#d4a017]/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveIntro;
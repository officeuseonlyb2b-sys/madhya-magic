import { motion } from "framer-motion";
import { MapPin, Play } from "lucide-react";
import type { SawanCampaign } from "@/data/exclusive/sawanData";

interface Props {
  reels: SawanCampaign["reels"];
}

const ExclusiveReels = ({ reels }: Props) => {
  return (
    <section
      id="sawan-reels"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFF3DD 0%, #FFE7C2 50%, #FFF7EC 100%)",
      }}
    >
      {/* Sacred ring */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#d4a017]/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#ff9933]/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block nav-font text-[#b8651a] uppercase tracking-[0.35em] text-xs mb-4 border-b border-[#d4a017]/40 pb-2">
            ॐ glimpses of devotion
          </span>
          <h2 className="font-display text-[#3a1d05] text-3xl md:text-5xl lg:text-6xl relative inline-block">
            Sawan Ujjain Reels
            <span className="absolute -top-2 -right-6 text-2xl text-[#ff9933] opacity-60">॥</span>
          </h2>
          <div className="mt-3 flex justify-center gap-2 items-center">
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-[#ff9933] to-transparent" />
            <span className="text-[#ff9933] text-lg">🕉️</span>
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-[#ff9933] to-transparent" />
          </div>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory -mx-6 px-6 scrollbar-thin scrollbar-thumb-[#d4a017]/40 scrollbar-track-transparent">
          {reels.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative flex-shrink-0 w-[270px] md:w-[320px] aspect-[9/16] rounded-2xl overflow-hidden snap-start group cursor-pointer shadow-lg shadow-[#d4a017]/15 ring-1 ring-[#d4a017]/20"
            >
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#ff9933]/70 transition-all duration-500 z-10 pointer-events-none" />
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-[#ff9933]/0 via-[#d4a017]/0 to-[#ff9933]/0 group-hover:from-[#ff9933]/35 group-hover:via-transparent group-hover:to-[#d4a017]/30 blur-md transition-all duration-700" />

              <img
                src={reel.image}
                alt={reel.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3a1d05]/90 via-[#7a3a0a]/15 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="w-14 h-14 rounded-full bg-[#ff9933]/25 backdrop-blur-sm border border-[#FFCE7A]/60 flex items-center justify-center">
                  <Play size={22} className="text-white fill-white ml-1" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <h3 className="font-display text-white text-xl md:text-2xl leading-tight mb-1">
                  {reel.title}
                </h3>
                <p className="nav-font text-[#FFE6B8] text-xs flex items-center gap-1.5">
                  <MapPin size={12} className="text-[#FFCE7A]" />
                  {reel.location}
                </p>
              </div>

              <span className="absolute bottom-4 right-4 text-5xl text-white/10 select-none pointer-events-none">
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

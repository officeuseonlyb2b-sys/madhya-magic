import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { SawanCampaign } from "@/data/exclusive/sawanData";

interface Props { reels: SawanCampaign["reels"] }

const ExclusiveReels = ({ reels }: Props) => (
  <section id="sawan-reels" className="py-20 md:py-28 bg-neutral-950">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="nav-font text-amber-400 uppercase tracking-[0.3em] text-xs mb-3">Glimpses</p>
        <h2 className="font-display text-white text-3xl md:text-5xl">Sawan Moments</h2>
      </motion.div>

      <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory -mx-6 px-6 scrollbar-thin">
        {reels.map((reel, i) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative flex-shrink-0 w-[260px] md:w-[300px] aspect-[9/16] rounded-2xl overflow-hidden snap-start group cursor-pointer border border-white/10"
          >
            <img
              src={reel.image}
              alt={reel.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-display text-white text-lg leading-tight">{reel.title}</h3>
              <p className="nav-font text-white/70 text-xs mt-1 flex items-center gap-1">
                <MapPin size={11} className="text-amber-400" /> {reel.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExclusiveReels;

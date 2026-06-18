import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";
import type { ReelItem } from "@/data/reelsData";

interface Props {
  reels: ReelItem[];
}

const ReelsGrid = ({ reels }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  if (reels.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Watch
          </span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2">
            Reels & Stories
          </h2>

          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Experience Madhya Pradesh through immersive travel stories & reels
          </p>

          <div className="section-divider mt-4" />
        </motion.div>


        {/* Auto Scroll Reels */}
        <div className="relative">

          {/* Gradient Fade Left */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />

          {/* Gradient Fade Right */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            className="flex gap-6 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...reels, ...reels].map((reel, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] w-[260px] md:w-[280px] cursor-pointer shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Image */}
                <img
                  src={(reel as { thumbnail?: string }).thumbnail ?? ""}
                  alt={reel.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110" decoding="async" />


                {/* Floating Glass Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-xl"
                  >
                    <Play
                      size={24}
                      className="text-white ml-1"
                      fill="white"
                    />
                  </motion.div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 p-4 w-full">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="space-y-1"
                  >
                    <p className="text-white font-semibold text-sm">
                      {reel.title}
                    </p>

                    <p className="text-white/70 text-xs">
                      {reel.location}
                    </p>
                  </motion.div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shine_2s_linear_infinite]" />
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ReelsGrid;
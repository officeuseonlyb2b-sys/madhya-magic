import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useRef } from "react";
import type { SawanCampaign } from "@/data/exclusive/sawanData";

interface Props {
  reels: SawanCampaign["reels"];
}

const ExclusiveReels = ({ reels }: Props) => {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handleMouseEnter = (id: string) => {
    const video = videoRefs.current[id];
    if (video) {
      video.currentTime = 0;
      video.play().catch((err) => {
        console.error(`Auto-play failed for ${id}:`, err);
      });
    }
  };

  const handleMouseLeave = (id: string) => {
    const video = videoRefs.current[id];
    if (video && !video.paused) {
      video.pause();
      video.currentTime = 0; // reset to first frame
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-28 overflow-hidden bg-white">
      {/* Orange decorative rings */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-orange-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-orange-400" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-orange-600 uppercase tracking-[0.35em] text-[10px] sm:text-xs mb-4 border-b border-orange-300 pb-2 inline-block">
            ॐ glimpses of devotion
          </span>
          <h2 className="font-display text-orange-800 text-2xl sm:text-3xl md:text-5xl lg:text-6xl mt-3">
            Experience The Spirit of Shravan
          </h2>
          <div className="mt-3 flex justify-center gap-2">
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
            <span className="text-orange-500">🕉️</span>
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          </div>
        </motion.div>

        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory -mx-4 sm:-mx-6 px-4 sm:px-6 scrollbar-thin scrollbar-thumb-orange-300">
          {reels.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative flex-shrink-0 w-[220px] sm:w-[270px] md:w-[320px] aspect-[9/16] rounded-2xl overflow-hidden snap-start group cursor-pointer shadow-xl ring-1 ring-orange-200 bg-gray-100"
              onMouseEnter={() => handleMouseEnter(reel.id)}
              onMouseLeave={() => handleMouseLeave(reel.id)}
            >
              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-400 transition-all z-10 pointer-events-none" />

              {/* Poster image fallback – always visible behind the video */}
              <img
                src={reel.image}
                alt={reel.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />

              {/* Video element – plays on hover, sits above poster */}
              <video
                ref={(el) => {
                  if (el) videoRefs.current[reel.id] = el;
                }}
                poster={reel.image}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                playsInline
                preload="metadata"
              >
                <source src={reel.videoUrl} type="video/mp4" />
              </video>

              {/* Subtle bottom gradient for text readability (no white layer) */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none z-10" />

              {/* Text overlay – clean, no background, only white text with shadow */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
                  {reel.title}
                </h3>
                <p className="text-orange-200 text-xs flex items-center gap-1 drop-shadow-md">
                  <MapPin size={12} className="text-orange-300" />
                  {reel.location}
                </p>
              </div>

              {/* Sacred Om symbol */}
              <span className="absolute bottom-3 right-3 text-4xl text-white/15 select-none pointer-events-none">
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
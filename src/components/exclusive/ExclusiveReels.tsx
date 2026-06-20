import { motion } from "framer-motion";
import { MapPin, Pause, Play } from "lucide-react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { SawanCampaign } from "@/data/exclusive/sawanData";
import { useInViewport } from "@/hooks/useInViewport";
import { useIsMobile } from "@/hooks/use-mobile";
import { cldVideo, pickVideoWidth } from "@/lib/cloudinary";

// ============================================================
// VIDEO – playback driven entirely by parent `playing` prop
// ============================================================
const ReelVideo = memo(
  ({
    reel,
    shouldLoad,
    playing,
    onTogglePlay,
    videoSrc,
  }: {
    reel: SawanCampaign["reels"][number];
    shouldLoad: boolean;
    playing: boolean;
    onTogglePlay: () => void;
    videoSrc: string;
  }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    // Once a reel enters the viewport we keep the src mounted to avoid
    // React/DOM thrash (which is what triggers the `removeChild` crash).
    const [hasLoaded, setHasLoaded] = useState(false);
    useEffect(() => {
      if (shouldLoad) setHasLoaded(true);
    }, [shouldLoad]);

    // Drive the underlying <video> element from `playing`.
    useEffect(() => {
      const v = videoRef.current;
      if (!v || !hasLoaded) return;
      if (playing) {
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } else {
        try {
          v.pause();
        } catch {
          /* noop */
        }
      }
    }, [playing, hasLoaded]);

    // Safe unmount: just pause. Do NOT mutate src/load() – that races with
    // React's reconciliation and is the source of `removeChild` errors.
    useEffect(() => {
      const v = videoRef.current;
      return () => {
        if (v) {
          try {
            v.pause();
          } catch {
            /* noop */
          }
        }
      };
    }, []);

    return (
      <>
        <video
          ref={videoRef}
          src={hasLoaded ? videoSrc : undefined}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover border-0 outline-none ring-0"
        />

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onTogglePlay();
          }}
          aria-label={playing ? "Pause reel" : "Play reel"}
          className="absolute bottom-3 right-3 z-20 grid place-items-center w-10 h-10 rounded-full bg-black/45 hover:bg-black/65 text-white backdrop-blur-sm transition-all active:scale-95"
        >
          {playing ? <Pause size={16} fill="white" /> : <Play size={16} fill="white" />}
        </button>
      </>
    );
  }
);

ReelVideo.displayName = "ExclusiveReelVideo";

// ============================================================
// CARD
// ============================================================
const ReelCard = memo(
  ({
    reel,
    index,
    playing,
    onTogglePlay,
    videoSrc,
  }: {
    reel: SawanCampaign["reels"][number];
    index: number;
    playing: boolean;
    onTogglePlay: () => void;
    videoSrc: string;
  }) => {
    const [hovered, setHovered] = useState(false);
    const { ref: viewRef, inView } = useInViewport<HTMLDivElement>("400px");

    return (
      <motion.div
        ref={viewRef}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: Math.min(index, 6) * 0.04 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          outline: "none",
          border: "none",
          boxShadow: "none",
          WebkitTapHighlightColor: "transparent",
        }}
        className="reel-card w-[85vw] max-w-[320px] sm:w-[250px] sm:max-w-none md:w-[280px] flex-shrink-0 focus:outline-none focus:ring-0 snap-start"
      >
        <div className="group relative overflow-hidden rounded-[24px] bg-transparent border-none outline-none ring-0 shadow-none">
          <div className="relative h-[460px] sm:h-[380px] md:h-[450px] overflow-hidden rounded-[24px] border-none outline-none ring-0 shadow-none bg-transparent">
            <ReelVideo
              reel={reel}
              shouldLoad={inView}
              playing={playing}
              onTogglePlay={onTogglePlay}
              videoSrc={videoSrc}
            />

            <div
              className={`absolute top-6 left-1/2 -translate-x-1/2 text-center px-4 w-full transition-all duration-500 pointer-events-none ${
                hovered || playing ? "opacity-0 -translate-y-5" : "opacity-100 translate-y-0"
              }`}
            >
              <h3 className="text-white uppercase tracking-[2px] text-xs sm:text-sm md:text-base font-light leading-snug font-display drop-shadow-md">
                {reel.title}
              </h3>
            </div>

            <div
              className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-center transition-all duration-500 pointer-events-none ${
                hovered || playing ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
              }`}
            >
              <span className="text-white/90 text-[10px] tracking-[4px] uppercase drop-shadow-md">
                ॐ SHRAVAN
              </span>
            </div>
          </div>

          <div className="bg-white py-4 px-3 text-center border-none outline-none ring-0 shadow-none">
            <div className="flex items-center justify-center gap-2 text-black">
              <MapPin size={14} />
              <span className="uppercase tracking-[2px] text-xs sm:text-sm font-medium">
                {reel.location}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

ReelCard.displayName = "ExclusiveReelCard";

// ============================================================
// MAIN SECTION
// ============================================================
interface Props {
  reels: SawanCampaign["reels"];
}

const ExclusiveReels = ({ reels }: Props) => {
  const isMobile = useIsMobile();
  // Manual horizontal scroll only — render a single set on all viewports.
  const sliderData = useMemo(() => [...reels], [reels]);

  // Precompute video sources once per slider/mobile change so each ReelCard
  // receives a stable string prop and React.memo can short-circuit re-renders.
  const videoWidth = pickVideoWidth(isMobile);
  const videoSrcs = useMemo(
    () => sliderData.map((r) => cldVideo(r.videoUrl, { w: videoWidth })),
    [sliderData, videoWidth]
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Single active reel — guarantees only one plays at a time.
  // Key includes index so duplicated reels (desktop loop) are unique.
  const [activeKey, setActiveKey] = useState<string | null>(null);

  // Stable per-card toggle factory: same reference across renders for a given key,
  // so memoized ReelCards don't re-render when activeKey changes elsewhere.
  const toggleHandlersRef = useRef(new Map<string, () => void>());
  const getToggleHandler = useCallback((key: string) => {
    const map = toggleHandlersRef.current;
    let h = map.get(key);
    if (!h) {
      h = () => setActiveKey((prev) => (prev === key ? null : key));
      map.set(key, h);
    }
    return h;
  }, []);

  const handleMouseEnter = useCallback(() => {}, []);
  const handleMouseLeave = useCallback(() => {}, []);

  // Pause whatever is playing when the user scrolls the page.
  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | null = null;
    const onScroll = () => {
      if (t) clearTimeout(t);
      t = setTimeout(() => {
        setActiveKey(null);
      }, 150);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (t) clearTimeout(t);
    };
  }, []);

  return (
    <section id="sawan-reels" className="relative py-12 sm:py-16 md:py-28 overflow-hidden bg-white">
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

        {reels.length === 0 ? (
          <p className="text-center text-orange-800/70 py-10">
            No reels available for this campaign.
          </p>
        ) : (
          <div
            ref={containerRef}
            className="overflow-x-auto no-scrollbar py-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div ref={trackRef} className="flex gap-5 w-max">
              {sliderData.map((reel, i) => {
                const key = `${reel.id}-${i}`;
                return (
                  <ReelCard
                    key={key}
                    reel={reel}
                    index={i}
                    playing={activeKey === key}
                    onTogglePlay={getToggleHandler(key)}
                    videoSrc={videoSrcs[i]}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExclusiveReels;

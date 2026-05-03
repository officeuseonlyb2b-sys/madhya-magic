import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import { ArrowRight, ArrowLeft, Bookmark } from "lucide-react";
import type { MapDestination } from "@/data/mapDestinations";

interface Props {
  destinations: MapDestination[];
  categorySlug: string;
}

/* ================= CARD ================= */
interface CardProps {
  item: MapDestination;
  active: boolean;
  distance: number;
  onTap: () => void;
}

const DestinationCard = ({
  item,
  active,
  distance,
  onTap,
}: CardProps) => {
  const isNear = distance === 1;

  return (
    <motion.div
      onClick={onTap}
      layout
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: active ? 0 : isNear ? 0.7 : 0.5,
        scale: active ? 0.6 : isNear ? 0.9 : 0.8,
        y: active ? 40 : 10,
      }}
      transition={{ duration: 0.5 }}
      className="relative shrink-0 cursor-pointer rounded-[28px] overflow-hidden w-[170px] h-[260px] xl:w-[190px] xl:h-[290px] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]"
    >
      <motion.div layoutId={`card-${item.id}`} className="absolute inset-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white">
        <Bookmark size={15} />
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <h4
          className="text-white text-base font-semibold"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
        >
          {item.name}
        </h4>
      </div>
    </motion.div>
  );
};

/* ================= MAIN ================= */
const DestinationPillars = ({ destinations }: Props) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expanded, setExpanded] = useState<null | MapDestination>(null);

  const dragX = useMotionValue(0);
  const len = destinations.length;
  const CARD_WIDTH = 210;
  const RESUME_DELAY = 2500;

  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    dragX.set(0);
  }, []);

  const pauseAuto = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    setIsPaused(true);
  };

  const scheduleResume = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      if (!isDraggingRef.current) setIsPaused(false);
    }, RESUME_DELAY);
  };

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const handleAutoScroll = () => {
    const next = (activeIdx + 1) % len;
    animate(dragX, 0, {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    });
    setActiveIdx(next);
  };

  useEffect(() => {
    if (isPaused || len <= 1) return;
    const interval = setInterval(handleAutoScroll, 3500);
    return () => clearInterval(interval);
  }, [isPaused, activeIdx]);

  const goTo = useCallback(
    (dir: 1 | -1) => {
      pauseAuto();
      animate(dragX, 0, { type: "spring", stiffness: 240, damping: 30 });
      setActiveIdx((prev) => (prev + dir + len) % len);
      scheduleResume();
    },
    [len]
  );

  const wheelLockRef = useRef(false);
  const onWheel = (e: React.WheelEvent) => {
    const delta =
      Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) < 8 || wheelLockRef.current) return;
    wheelLockRef.current = true;
    goTo(delta > 0 ? 1 : -1);
    setTimeout(() => {
      wheelLockRef.current = false;
    }, 350);
  };

  if (len === 0) return null;

  const safeIdx = activeIdx % len;
  const activeItem = destinations[safeIdx];

  return (
    <section className="pt-6 pb-12 md:pb-16 bg-background">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        {/* <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Places to Explore
        </h2> */}

        <div
          className="relative min-h-[720px] overflow-hidden flex items-end rounded-[40px] md:rounded-[50px] shadow-xl"
          onMouseEnter={pauseAuto}
          onMouseLeave={() => {
            if (!isDraggingRef.current) scheduleResume();
          }}
          onTouchStart={pauseAuto}
          onTouchEnd={() => {
            if (!isDraggingRef.current) scheduleResume();
          }}
        >
          {/* BACKGROUND */}
          <AnimatePresence>
            <motion.div
              key={activeItem.id}
              layoutId={`card-${activeItem.id}`}
              className="absolute inset-0 z-0 rounded-[40px] md:rounded-[50px] overflow-hidden"
              transition={{ duration: 0.8 }}
            >
              <img
                src={activeItem.image}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* CONTENT */}
          <div className="relative z-20 pb-16 w-full">
            <div className="flex w-full min-h-[500px]">

              {/* LEFT TEXT */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-10 lg:px-14 pb-10 lg:pb-16">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={activeItem.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  >
                    {activeItem.name}
                  </motion.h2>
                </AnimatePresence>

                <p className="text-white/80 mt-4 max-w-lg text-sm md:text-base leading-relaxed">
                  {activeItem.description}
                </p>

                <Link
                  to={`/destination/${activeItem.id}`}
                  className="inline-flex items-center gap-2 mt-6 text-white font-medium"
                >
                  View Details <ArrowRight size={16} />
                </Link>
              </div>

              {/* RIGHT CARDS */}
              <div
                className="w-full lg:w-1/2 overflow-hidden relative"
                onWheel={onWheel}
              >
                <motion.div
                  drag="x"
                  style={{ x: dragX }}
                  dragConstraints={{ left: -CARD_WIDTH, right: CARD_WIDTH }}
                  dragElastic={0.2}
                  dragMomentum={false}
                  whileTap={{ cursor: "grabbing" }}
                  onDragStart={() => {
                    isDraggingRef.current = true;
                    pauseAuto();
                  }}
                  onDragEnd={(e, info) => {
                    const offset = info.offset.x;
                    const velocity = info.velocity.x;

                    let newIndex = activeIdx;

                    if (offset < -60 || velocity < -400) {
                      newIndex = (activeIdx + 1) % len;
                    } else if (offset > 60 || velocity > 400) {
                      newIndex = (activeIdx - 1 + len) % len;
                    }

                    animate(dragX, 0, {
                      type: "spring",
                      stiffness: 260,
                      damping: 32,
                      mass: 0.9,
                    });

                    setActiveIdx(newIndex);
                    isDraggingRef.current = false;
                    scheduleResume();
                  }}
                  className="flex gap-5 items-end h-full cursor-grab active:cursor-grabbing touch-pan-y select-none"
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    {Array.from({ length: len }).map((_, offset) => {
                      const i = (safeIdx + offset) % len;
                      const item = destinations[i];

                      return (
                        <DestinationCard
                          key={item.id}
                          item={item}
                          active={offset === 0}
                          distance={offset}
                          onTap={() => {
                            if (isDraggingRef.current) return;
                            pauseAuto();
                            animate(dragX, 0, {
                              type: "spring",
                              stiffness: 240,
                              damping: 30,
                            });
                            setActiveIdx(i);
                            scheduleResume();
                          }}
                        />
                      );
                    })}
                  </AnimatePresence>
                </motion.div>

                {/* Arrow controls */}
                <div className="absolute bottom-4 right-4 z-30 flex gap-2">
                  <button
                    onClick={() => goTo(-1)}
                    className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    onClick={() => goTo(1)}
                    className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/90 flex items-end justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={`card-${expanded.id}`}
              className="absolute inset-0"
            >
              <img
                src={expanded.image}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="relative z-10 p-10 text-white max-w-4xl"
            >
              <h2 className="text-4xl font-bold">
                {expanded.name}
              </h2>
              <p className="mt-4 text-white/80">
                {expanded.description}
              </p>

              <button
                onClick={() => setExpanded(null)}
                className="mt-6 px-6 py-3 bg-white text-black rounded-full"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DestinationPillars;
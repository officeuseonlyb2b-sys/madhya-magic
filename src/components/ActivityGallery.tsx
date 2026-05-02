import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

interface ActivityGalleryProps {
  images: string[];
  activityName: string;
}

const ActivityGallery = ({ images, activityName }: ActivityGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Auto-slide for the gallery strip
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !images || images.length === 0) return;
    const interval = setInterval(() => {
      if (paused) return;
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) el.scrollLeft = 0;
    }, 25);
    return () => clearInterval(interval);
  }, [images, paused]);

  if (!images || images.length === 0) return null;

  // Duplicate to enable seamless looping feel
  const looped = images.length >= 3 ? [...images, ...images] : images;

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const navigate = (dir: number) => {
    setActiveIndex((prev) => (prev + dir + images.length) % images.length);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <Camera className="text-amber-400" size={22} />
          <h2 className="text-2xl font-display font-bold">Gallery</h2>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide scroll-smooth"
        >
          {looped.map((img, i) => {
            const realIndex = i % images.length;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="relative rounded-xl overflow-hidden cursor-pointer flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] aspect-[4/3] group"
                onClick={() => openLightbox(realIndex)}
              >
                <img
                  src={img}
                  alt={`${activityName} ${realIndex + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                    View
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 text-white/70 hover:text-white z-10"
            >
              <ChevronLeft size={36} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 text-white/70 hover:text-white z-10"
            >
              <ChevronRight size={36} />
            </button>

            <motion.img
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[activeIndex]}
              alt={`${activityName} ${activeIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 text-white/60 text-sm">
              {activeIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ActivityGallery;

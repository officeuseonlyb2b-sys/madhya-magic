import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  images: string[];
  alt: string;
  intervalMs?: number;
  active?: boolean;
}

/**
 * Auto-rotating slideshow of destination gallery images for a single
 * itinerary day. Uses fade + slight zoom (Ken-Burns) transitions.
 */
const DestinationImageSlider = ({
  images,
  alt,
  intervalMs = 3500,
  active = true,
}: Props) => {
  const [index, setIndex] = useState(0);
  const safeImages = images?.length ? images : [];

  // Reset whenever the image set changes (e.g. switching day).
  useEffect(() => {
    setIndex(0);
  }, [images]);

  useEffect(() => {
    if (!active || safeImages.length < 2) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((i) => (i + 1) % safeImages.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [active, safeImages.length, intervalMs]);

  if (!safeImages.length) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.img
          key={`${safeImages[index]}-${index}`}
          src={safeImages[index]}
          alt={alt}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1.04 }}
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{
            opacity: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: intervalMs / 1000 + 1.5, ease: "linear" },
          }}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
        />
      </AnimatePresence>
    </div>
  );
};

export default DestinationImageSlider;

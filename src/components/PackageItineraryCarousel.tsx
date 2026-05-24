import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { destinationRegistry } from "@/data/destinations";
import { mapDestinations } from "@/data/mapDestinations";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

interface Props {
  itinerary: ItineraryDay[];
  fallbackImage: string;
  /** Optional: package location string, used only as last-resort hint. */
  location?: string;
  autoPlayMs?: number;
}

/**
 * Builds a lookup of destination keyword → ordered list of images
 * (gallery first, hero fallback). Keys are lowercase destination names
 * and slugs so itinerary titles like "Indore → Ujjain" match easily.
 */
const buildDestinationImageIndex = () => {
  const index: Record<string, string[]> = {};

  for (const d of mapDestinations) {
    const reg = destinationRegistry[d.id];
    const images: string[] = [];
    if (reg?.gallery?.length) images.push(...reg.gallery);
    if (reg?.heroImage) images.push(reg.heroImage);
    if (d.image) images.push(d.image);

    // Register under slug + the first word of the destination name
    // (e.g. "Pench National Park" → "pench")
    const firstWord = d.name.split(/\s+/)[0].toLowerCase();
    [d.id.toLowerCase(), firstWord, d.name.toLowerCase()].forEach((key) => {
      if (key && !index[key]) index[key] = images;
    });
  }
  return index;
};

const DEST_IMAGE_INDEX = buildDestinationImageIndex();
const DEST_KEYS = Object.keys(DEST_IMAGE_INDEX).sort(
  (a, b) => b.length - a.length,
);

/** Find the first destination keyword that appears in a string. */
const findDestinationKey = (text: string): string | null => {
  const lower = text.toLowerCase();
  for (const key of DEST_KEYS) {
    // word-boundary-ish match
    const re = new RegExp(`(?:^|[^a-z])${key}(?:[^a-z]|$)`, "i");
    if (re.test(lower)) return key;
  }
  return null;
};

const pickImageForDay = (
  text: string,
  fallback: string,
  occurrence: number,
): { image: string; place: string | null } => {
  const key = findDestinationKey(text);
  if (key) {
    const imgs = DEST_IMAGE_INDEX[key];
    const image = imgs[occurrence % imgs.length] || fallback;
    // Use the matched key as the display place (capitalised)
    const place = key.charAt(0).toUpperCase() + key.slice(1);
    return { image, place };
  }
  return { image: fallback, place: null };
};

const PackageItineraryCarousel = ({
  itinerary,
  fallbackImage,
  autoPlayMs = 5000,
}: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  // Pre-compute per-day media so rerenders stay cheap
  const slides = useMemo(() => {
    const occurrences: Record<string, number> = {};
    return itinerary.map((item) => {
      const text = `${item.title} ${item.description}`;
      const key = findDestinationKey(text) ?? "_";
      occurrences[key] = (occurrences[key] ?? 0) + 1;
      const { image, place } = pickImageForDay(
        text,
        fallbackImage,
        occurrences[key] - 1,
      );
      return { ...item, image, place };
    });
  }, [itinerary, fallbackImage]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || !autoPlayMs) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      emblaApi.scrollNext();
    }, autoPlayMs);
    return () => window.clearInterval(id);
  }, [emblaApi, autoPlayMs]);

  if (!itinerary?.length) return null;

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden rounded-2xl">
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="min-w-0 shrink-0 grow-0 basis-full"
            >
              <div className="relative h-[320px] sm:h-[420px] md:h-[480px] overflow-hidden rounded-2xl bg-muted">
                <AnimatePresence mode="wait">
                  {selected === i && (
                    <motion.img
                      key={slide.image}
                      src={slide.image}
                      alt={`${slide.title} — Day ${slide.day}`}
                      loading="lazy"
                      decoding="async"
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </AnimatePresence>

                {/* Soft luxury overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Day badge */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                  <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
                    Day {slide.day}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 text-white">
                  {slide.place && (
                    <div className="flex items-center gap-1.5 text-xs md:text-sm text-white/80 mb-2">
                      <MapPin size={14} />
                      <span className="font-medium">{slide.place}</span>
                    </div>
                  )}
                  <h3 className="font-display text-xl md:text-3xl font-bold mb-2 drop-shadow">
                    {slide.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/85 leading-relaxed max-w-3xl">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous day"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/90 hover:bg-white text-foreground shadow-lg flex items-center justify-center transition-transform hover:scale-105 backdrop-blur"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next day"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/90 hover:bg-white text-foreground shadow-lg flex items-center justify-center transition-transform hover:scale-105 backdrop-blur"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to day ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  selected === i
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PackageItineraryCarousel;

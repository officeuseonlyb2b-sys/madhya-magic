import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import DestinationImageSlider from "./DestinationImageSlider";
import { destinationRegistry } from "@/data/destinations/index";
import { mapDestinations } from "@/data/mapDestinations";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

interface Props {
  itinerary: ItineraryDay[];
  fallbackImage: string;
  /** Optional package location string, used only as last-resort hint. */
  location?: string;
  /** Image rotation speed inside a single day (ms). */
  imageIntervalMs?: number;
}

/**
 * Build a lookup keyword → gallery images for every registered
 * destination. Keys are lowercase destination names, slugs and first
 * words so itinerary titles like "Indore → Ujjain" match easily.
 */
const buildDestinationImageIndex = () => {
  const index: Record<string, { images: string[]; name: string }> = {};

  for (const d of mapDestinations) {
    const reg = destinationRegistry[d.id];
    const images: string[] = [];
    if (reg?.gallery?.length) images.push(...reg.gallery);
    if (reg?.heroImage) images.push(reg.heroImage);
    if (d.image) images.push(d.image);

    const entry = { images, name: d.name };
    const firstWord = d.name.split(/\s+/)[0].toLowerCase();
    [d.id.toLowerCase(), firstWord, d.name.toLowerCase()].forEach((key) => {
      if (key && !index[key]) index[key] = entry;
    });
  }
  return index;
};

const DEST_IMAGE_INDEX = buildDestinationImageIndex();
const DEST_KEYS = Object.keys(DEST_IMAGE_INDEX).sort(
  (a, b) => b.length - a.length,
);

const findDestinationKey = (text: string): string | null => {
  const lower = text.toLowerCase();
  for (const key of DEST_KEYS) {
    const re = new RegExp(`(?:^|[^a-z])${key}(?:[^a-z]|$)`, "i");
    if (re.test(lower)) return key;
  }
  return null;
};

const PackageItineraryCarousel = ({
  itinerary,
  fallbackImage,
  imageIntervalMs = 3500,
}: Props) => {
  // Embla is used purely for swipe / smooth slide between days.
  // Autoplay between days is intentionally disabled — user navigates manually.
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    duration: 28,
  });
  const [selected, setSelected] = useState(0);

  const slides = useMemo(() => {
    return itinerary.map((item) => {
      const text = `${item.title} ${item.description}`;
      const key = findDestinationKey(text);
      const entry = key ? DEST_IMAGE_INDEX[key] : null;
      const images = entry?.images?.length ? entry.images : [fallbackImage];
      const place = entry?.name ?? null;
      return { ...item, images, place };
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

  if (!itinerary?.length) return null;

  const hasNext = selected < slides.length - 1;
  const hasPrev = selected > 0;

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden rounded-2xl">
        <div className="flex">
          {slides.map((slide, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full">
              <div className="relative h-[320px] sm:h-[420px] md:h-[480px] overflow-hidden rounded-2xl bg-muted">
                <DestinationImageSlider
                  images={slide.images}
                  alt={`${slide.title} — Day ${slide.day}`}
                  intervalMs={imageIntervalMs}
                  active={selected === i}
                />

                {/* Soft luxury overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

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
            disabled={!hasPrev}
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/90 hover:bg-white text-foreground shadow-lg flex items-center justify-center transition-transform hover:scale-105 backdrop-blur disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>

          <motion.button
            type="button"
            aria-label="Next day"
            disabled={!hasNext}
            onClick={() => emblaApi?.scrollNext()}
            animate={
              hasNext
                ? {
                    boxShadow: [
                      "0 0 0 0 hsl(var(--primary) / 0.45)",
                      "0 0 0 12px hsl(var(--primary) / 0)",
                      "0 0 0 0 hsl(var(--primary) / 0)",
                    ],
                  }
                : { boxShadow: "0 0 0 0 hsl(var(--primary) / 0)" }
            }
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/90 hover:bg-white text-foreground shadow-lg flex items-center justify-center transition-transform hover:scale-105 backdrop-blur disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </motion.button>

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

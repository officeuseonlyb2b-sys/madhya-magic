import { useEffect, useMemo, useState, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import DestinationImageSlider from "@/components/DestinationImageSlider";
import { destinationRegistry } from "@/data/destinations/index";
import { mapDestinations } from "@/data/mapDestinations";

interface Props {
  location: string;
  fallbackImage: string;
}

interface DestEntry {
  name: string;
  slug: string;
  images: string[];
}

const toSlug = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/national park|sanctuary|caves|rock shelters/g, "")
    .trim()
    .replace(/\s+/g, "-");

const resolveDestination = (name: string, fallbackImage: string): DestEntry => {
  const slug = toSlug(name);
  const reg = destinationRegistry[slug];
  const mapEntry =
    mapDestinations.find((m) => m.id === slug) ||
    mapDestinations.find((m) => toSlug(m.name) === slug) ||
    mapDestinations.find((m) => m.name.toLowerCase().includes(name.toLowerCase()));

  const gallery = (reg?.gallery as string[] | undefined) ?? [];
  const heroImg = (reg?.heroImage as string | undefined) ?? mapEntry?.image;

  const images = gallery.length
    ? gallery
    : heroImg
    ? [heroImg]
    : [fallbackImage];

  return { name: name.trim(), slug, images };
};

const parseLocations = (location: string): string[] => {
  const parts = location
    .split(/[-,•|→]/)
    .map((p) => p.trim())
    .filter(Boolean);
  // dedupe preserving order
  const seen = new Set<string>();
  return parts.filter((p) => {
    const k = p.toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
};

const PackageDestinationsCovered = ({ location, fallbackImage }: Props) => {
  const entries = useMemo<DestEntry[]>(
    () =>
      parseLocations(location).map((n) => resolveDestination(n, fallbackImage)),
    [location, fallbackImage]
  );

  const [active, setActive] = useState(0);
  const [hintIdx, setHintIdx] = useState<number | null>(null);
  const idleTimer = useRef<number | null>(null);

  // Pulse-hint next tag after 10s of inactivity.
  useEffect(() => {
    if (entries.length < 2) return;
    if (idleTimer.current) window.clearTimeout(idleTimer.current);
    idleTimer.current = window.setTimeout(() => {
      setHintIdx((active + 1) % entries.length);
    }, 10000);
    return () => {
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
    };
  }, [active, entries.length]);

  const handleSelect = (i: number) => {
    setActive(i);
    setHintIdx(null);
  };

  if (!entries.length) return null;

  const current = entries[active];

  return (
    <div className="space-y-5">
      {/* Slideshow */}
      <div className="relative w-full overflow-hidden rounded-3xl shadow-[var(--shadow-card)] bg-muted">
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
          <DestinationImageSlider
            key={current.slug}
            images={current.images}
            alt={current.name}
            active
            intervalMs={3500}
          />
          {/* Subtle bottom vignette for premium feel — no text */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* Destination tags */}
      <div className="flex flex-wrap gap-2.5 sm:gap-3">
        {entries.map((d, i) => {
          const isActive = i === active;
          const isHint = hintIdx === i && !isActive;
          return (
            <motion.button
              key={`${d.slug}-${i}`}
              type="button"
              onClick={() => handleSelect(i)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              animate={
                isHint
                  ? {
                      boxShadow: [
                        "0 0 0 0 hsl(var(--primary) / 0.0)",
                        "0 0 0 6px hsl(var(--primary) / 0.18)",
                        "0 0 0 0 hsl(var(--primary) / 0.0)",
                      ],
                    }
                  : { boxShadow: "0 0 0 0 hsl(var(--primary) / 0)" }
              }
              transition={
                isHint
                  ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.3 }
              }
              className={[
                "group inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300",
                isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-card text-foreground border-border hover:border-primary/60 hover:text-primary",
              ].join(" ")}
              aria-pressed={isActive}
              aria-label={`Show ${d.name} gallery`}
            >
              <MapPin
                size={14}
                className={isActive ? "text-primary-foreground" : "text-primary/70"}
              />
              {d.name}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default PackageDestinationsCovered;

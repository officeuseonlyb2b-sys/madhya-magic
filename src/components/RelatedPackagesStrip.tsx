import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import type { PackageData } from "@/data/packagesData";

interface Props {
  packages: PackageData[];
  title?: string;
  subtitle?: string;
  /** "dark" matches the black ActivityDetail theme; "light" matches default theme */
  theme?: "light" | "dark";
}

const RelatedPackagesStrip = ({
  packages,
  title = "Related Packages",
  subtitle = "Curated tours that include this experience",
  theme = "light",
}: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !packages || packages.length === 0) return;

    let speed = 0.6;

    const autoScroll = () => {
      if (!paused) {
        el.scrollLeft += speed;

        // seamless infinite loop
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [packages, paused]);

  if (!packages || packages.length === 0) return null;

  const isDark = theme === "dark";

  // duplicate packages for seamless loop
  const looped =
    packages.length >= 3 ? [...packages, ...packages] : packages;

  return (
    <section
      className={`py-12 md:py-16 ${
        isDark ? "border-t border-white/10" : "bg-muted/40 rounded-3xl"
      }`}
    >
      <div
        className={
          isDark
            ? "container mx-auto px-4 max-w-[1400px]"
            : "px-4 sm:px-6 md:px-8"
        }
      >
        <div className="mb-8">
          <span
            className={`text-xs font-semibold uppercase tracking-widest ${
              isDark ? "text-amber-400" : "text-primary"
            }`}
          >
            Bundle & Save
          </span>

          <h2
            className={`text-2xl md:text-3xl font-display font-bold mt-2 ${
              isDark ? "text-white" : "text-foreground"
            }`}
          >
            {title}
          </h2>

          <p
            className={`mt-1 text-sm ${
              isDark ? "text-white/60" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </p>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          className="flex gap-5 overflow-x-auto pb-3 scrollbar-hide scroll-smooth"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {looped.map((pkg, i) => (
            <motion.div
              key={`${pkg.id}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: (i % packages.length) * 0.08,
                duration: 0.5,
              }}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px]"
            >
              <Link
                to={`/package/${pkg.id}`}
                className={`group block rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "bg-white/5 border-white/10 hover:border-amber-400/40 hover:shadow-[0_10px_40px_-10px_rgba(251,191,36,0.25)]"
                    : "bg-card border-border/30 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
                }`}
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" decoding="async" />

                  <span
                    className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      isDark
                        ? "bg-amber-400 text-black"
                        : "gradient-gold text-primary-foreground"
                    }`}
                  >
                    {Math.round(
                      ((pkg.originalPrice - pkg.price) /
                        pkg.originalPrice) *
                        100
                    )}
                    % OFF
                  </span>
                </div>

                <div className="p-4">
                  <h3
                    className={`font-display font-bold text-base mb-2 line-clamp-1 ${
                      isDark ? "text-white" : "text-foreground"
                    }`}
                  >
                    {pkg.name}
                  </h3>

                  <div
                    className={`flex items-center gap-3 text-xs mb-3 ${
                      isDark
                        ? "text-white/60"
                        : "text-muted-foreground"
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <MapPin size={11} /> {pkg.location}
                    </span>

                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {pkg.duration}
                    </span>
                  </div>

                  <div
                    className={`flex items-center justify-between border-t pt-3 ${
                      isDark
                        ? "border-white/10"
                        : "border-border/50"
                    }`}
                  >
                    <div>
                      <span
                        className={`text-lg font-bold ${
                          isDark ? "text-amber-400" : "text-primary"
                        }`}
                      >
                        ₹{pkg.price.toLocaleString()}
                      </span>

                      <span
                        className={`text-xs line-through ml-1.5 ${
                          isDark
                            ? "text-white/40"
                            : "text-muted-foreground"
                        }`}
                      >
                        ₹{pkg.originalPrice.toLocaleString()}
                      </span>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 text-xs font-medium group-hover:gap-2 transition-all ${
                        isDark ? "text-amber-400" : "text-primary"
                      }`}
                    >
                      View <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPackagesStrip;
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { allPackages } from "@/data/packagesData";
import { useFilters } from "@/contexts/FilterContext";
import { getPackageCategories, matchesFilters } from "@/lib/categoryMatch";

const POPULAR_LIMIT = 8;

const PackagesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const { selectedFilters, isAll } = useFilters();
  const [activeIdx, setActiveIdx] = useState(0);

  const filteredPackages = useMemo(() => {
    if (isAll) return allPackages.slice(0, POPULAR_LIMIT);
    const allowed = new Set<string>();
    selectedFilters.forEach((f) => {
      filterToPackageCategories[f]?.forEach((c) => allowed.add(c));
    });
    return allPackages
      .filter((p) => allowed.has(p.category))
      .slice(0, POPULAR_LIMIT);
  }, [selectedFilters, isAll]);

  // Reset active index when filter changes
  useEffect(() => {
    setActiveIdx(0);
  }, [filteredPackages]);

  const activePkg = filteredPackages[activeIdx];

  // Auto-advance every 6s, pause on hover
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    if (isHovering || filteredPackages.length <= 1) return;
    const t = setInterval(() => {
      setActiveIdx((i) => (i + 1) % filteredPackages.length);
    }, 6000);
    return () => clearInterval(t);
  }, [isHovering, filteredPackages.length]);

  // Auto-scroll active card into view in right list (scoped to container, no page shift)
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const activeEl = list.querySelector<HTMLElement>(`[data-pkg-idx="${activeIdx}"]`);
    if (!activeEl) return;
    const isVertical = window.matchMedia("(min-width: 1024px)").matches;
    if (isVertical) {
      const top = activeEl.offsetTop - list.clientHeight / 2 + activeEl.clientHeight / 2;
      list.scrollTo({ top, behavior: "smooth" });
    } else {
      const left = activeEl.offsetLeft - list.clientWidth / 2 + activeEl.clientWidth / 2;
      list.scrollTo({ left, behavior: "smooth" });
    }
  }, [activeIdx]);

  return (
    <section
      id="packages"
      className="relative py-20 md:py-28 overflow-hidden bg-white"
    >
      {/* Subtle decorative background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, hsl(var(--primary)) 1px, transparent 1px), radial-gradient(circle at 80% 60%, hsl(var(--secondary)) 1px, transparent 1px)",
        backgroundSize: "40px 40px, 60px 60px",
      }} />
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Trending</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2">
            Popular Packages
          </h2>
          <div className="section-divider mt-4" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Handpicked travel packages at unbeatable prices
          </p>
        </motion.div>

        {filteredPackages.length === 0 || !activePkg ? (
          <p className="text-center text-muted-foreground py-10">
            No packages match the selected filter.
          </p>
        ) : (
          <div
            className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] xl:grid-cols-[3fr_1fr] gap-5 md:gap-6 lg:gap-8 items-stretch"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* LEFT: Large featured preview */}
            <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-[var(--shadow-card-hover)] border border-border/30 bg-card aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[560px] group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePkg.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={activePkg.image}
                    alt={activePkg.name}
                    className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
                  />
                  {/* Gradient overlays for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Top badges */}
              <div className="absolute top-5 left-5 right-5 z-10 flex items-start justify-between">
                <span className="inline-flex items-center gap-1.5 gradient-gold text-primary-foreground text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg">
                  <Sparkles size={12} />
                  {Math.round(((activePkg.originalPrice - activePkg.price) / activePkg.originalPrice) * 100)}% OFF
                </span>
                <div className="flex gap-2">
                  {activePkg.featured && (
                    <span className="bg-background/80 backdrop-blur-md text-primary text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full shadow border border-primary/20">
                      ★ Featured
                    </span>
                  )}
                  <span className="bg-background/80 backdrop-blur-md text-foreground text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full shadow border border-border/40">
                    {activePkg.category}
                  </span>
                </div>
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-8 lg:p-10 z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePkg.id + "-content"}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-background/90 text-xs sm:text-sm mb-2 sm:mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={14} /> {activePkg.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} /> Madhya Pradesh
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-background text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight drop-shadow-lg max-w-3xl">
                      {activePkg.name}
                    </h3>

                    {activePkg.highlights?.length > 0 && (
                      <div className="hidden sm:flex flex-wrap gap-2 mt-3 sm:mt-4 max-w-2xl">
                        {activePkg.highlights.slice(0, 3).map((h) => (
                          <span
                            key={h}
                            className="text-xs bg-background/15 backdrop-blur-md border border-background/20 text-background px-3 py-1.5 rounded-full"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                      <div className="flex items-baseline gap-2 sm:gap-3">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-background">
                          ₹{activePkg.price.toLocaleString()}
                        </span>
                        <span className="text-sm sm:text-base text-background/70 line-through">
                          ₹{activePkg.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <Link
                        to={`/package/${activePkg.id}`}
                        className="group/btn inline-flex items-center gap-2 gradient-gold text-primary-foreground font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-lg hover:shadow-[var(--shadow-glow)] transition-all hover:scale-105 text-sm sm:text-base"
                      >
                        View Details
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress indicators */}
              <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 hidden md:flex flex-col gap-2">
                {filteredPackages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Go to package ${i + 1}`}
                    className={`w-1.5 rounded-full transition-all duration-500 ${
                      i === activeIdx ? "h-8 bg-background" : "h-2 bg-background/40 hover:bg-background/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT: Vertical scrolling navigator */}
            <div
              ref={listRef}
              className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[560px] pb-2 lg:pb-0 lg:pr-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide snap-x lg:snap-y snap-mandatory"
            >
              {filteredPackages.map((pkg, i) => {
                const isActive = i === activeIdx;
                return (
                  <motion.button
                    key={pkg.id}
                    data-pkg-idx={i}
                    onClick={() => setActiveIdx(i)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    className={`relative flex-shrink-0 w-[240px] sm:w-[260px] lg:w-full snap-start text-left rounded-2xl overflow-hidden border transition-all duration-500 ${
                      isActive
                        ? "border-primary/60 shadow-[var(--shadow-glow)] bg-card scale-[1.02]"
                        : "border-border/30 bg-card/70 hover:border-primary/30 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-stretch gap-3 p-2">
                      <div className="relative w-24 h-24 lg:w-20 lg:h-20 flex-shrink-0 rounded-xl overflow-hidden">
                        <img
                          src={pkg.image}
                          alt={pkg.name}
                          loading="lazy"
                          className={`w-full h-full object-cover transition-all duration-500 ${
                            isActive ? "scale-105" : "grayscale-[30%]"
                          }`}
                        />
                        {isActive && (
                          <div className="absolute inset-0 ring-2 ring-primary/60 rounded-xl pointer-events-none" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0 py-1 pr-2">
                        <h4
                          className={`font-display font-semibold text-sm leading-tight line-clamp-2 transition-colors ${
                            isActive ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {pkg.name}
                        </h4>
                        <div className="flex items-center gap-1 text-muted-foreground text-[11px] mt-1">
                          <Clock size={10} /> {pkg.duration}
                        </div>
                        <div className="mt-1.5 text-xs">
                          <span className="font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
                          <span className="text-muted-foreground line-through ml-1.5 text-[10px]">
                            ₹{pkg.originalPrice.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Active accent bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activePkgBar"
                        className="absolute left-0 top-0 bottom-0 w-1 gradient-gold"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        )}

        {/* View More CTA — carries active filter to /packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <Link
            to={(() => {
              if (isAll || selectedFilters.length !== 1) return "/packages";
              const cat = selectedFilters[0];
              const interestParam = cat === "Wildlife" ? "Wild Life" : cat;
              return `/packages?interest=${encodeURIComponent(interestParam)}`;
            })()}
            className="group inline-flex items-center gap-2 gradient-gold text-primary-foreground font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-[var(--shadow-card-hover)] transition-all hover:scale-105"
          >
            View More Packages
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;

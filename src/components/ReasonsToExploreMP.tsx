import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { allPackages } from "@/data/packagesData";

const AUTOPLAY_MS = 5000;
const MAX_SLIDES = 6;

const SpecialOffersSection = () => {
  const featured = useMemo(() => {
    const curated = allPackages.filter((p) => p.featured || p.offer);
    if (curated.length > 0) return curated.slice(0, MAX_SLIDES);
    return [...allPackages]
      .sort(
        (a, b) =>
          (b.originalPrice - b.price) / b.originalPrice -
          (a.originalPrice - a.price) / a.originalPrice
      )
      .slice(0, MAX_SLIDES);
  }, []);

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  const next = useCallback(
    () => setIndex((p) => (p + 1) % featured.length),
    [featured.length]
  );
  const prev = useCallback(
    () => setIndex((p) => (p - 1 + featured.length) % featured.length),
    [featured.length]
  );

  useEffect(() => {
    if (isPaused || featured.length <= 1) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next, isPaused, featured.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    touchStart.current = null;
  };

  if (featured.length === 0) return null;

  const safeIndex = index % featured.length;
  const pkg = featured[safeIndex] ?? featured[0];
  if (!pkg) return null;
  const discount = Math.round(
    ((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100
  );

  return (
    <section
      className="relative py-14 md:py-18 bg-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background blur */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-semibold text-xs uppercase tracking-[0.35em]">
            Limited Time
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2">
            Special Offers & <span className="text-primary">Featured Packages</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm md:text-base">
            Discover handpicked travel experiences across Madhya Pradesh
          </p>
        </motion.div>

        {/* Layout */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          
          {/* IMAGE */}
          <div className="relative h-[320px] md:h-[420px] lg:h-[480px] group">
            <div className="absolute inset-0 rounded-[30%_70%_60%_40%/50%_40%_60%_50%] overflow-hidden shadow-[0_25px_60px_-15px_hsl(var(--primary)/0.35)] transition-all duration-700 group-hover:rounded-[50%_50%_50%_50%]">
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={pkg.image}
                  src={pkg.image}
                  alt={pkg.name}
                  loading="lazy"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.05, opacity: 0 }}
                  transition={{ duration: 0.9 }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/40 via-transparent to-primary/10" />
            </div>

            {/* Badge */}
            <motion.div
              key={`badge-${index}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-4 right-4 w-20 h-20 rounded-full gradient-gold flex flex-col items-center justify-center shadow-xl"
            >
              <span className="text-xl font-bold text-primary-foreground">
                {discount}%
              </span>
              <span className="text-[9px] uppercase text-primary-foreground/90">
                Off
              </span>
            </motion.div>
          </div>

          {/* TEXT */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl p-6 md:p-8 bg-card/70 backdrop-blur-lg border border-border/40 shadow-[0_15px_40px_-10px_hsl(var(--foreground)/0.15)]"
              >
                
                <span className="text-primary text-xs uppercase tracking-[0.25em]">
                  {pkg.category} • Featured
                </span>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-3">
                  {pkg.name}
                </h3>

                <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {pkg.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {pkg.duration}
                  </span>
                </div>

                <p className="text-sm md:text-base text-muted-foreground mb-5 line-clamp-2">
                  {pkg.description}
                </p>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-bold text-primary">
                    ₹{pkg.price.toLocaleString()}
                  </span>
                  <span className="line-through text-sm">
                    ₹{pkg.originalPrice.toLocaleString()}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between">
                  <Link
                    to={`/package/${pkg.id}`}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full gradient-gold text-primary-foreground text-sm font-semibold hover:scale-105 transition"
                  >
                    View Package <ArrowRight size={16} />
                  </Link>

                  <div className="flex gap-2">
                    <button onClick={prev} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-white transition">
                      <ChevronLeft size={18} />
                    </button>
                    <button onClick={next} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-white transition">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-5">
                  {featured.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
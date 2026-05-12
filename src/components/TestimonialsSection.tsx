import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/destinations";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Reviews</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2">
            What Travelers Say
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl p-8 md:p-12 shadow-[var(--shadow-card)] text-center border border-border/20"
            >
              <Quote size={48} className="text-primary/15 mx-auto mb-4" />
              <p className="text-lg md:text-xl text-foreground mb-6 italic leading-relaxed font-body">
                "{testimonials[current].text}"
              </p>
              <div className="flex justify-center gap-1 mb-3">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display font-bold text-foreground text-lg">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].location}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-11 h-11 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
            >
              <ChevronLeft size={20} />
            </motion.button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-11 h-11 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

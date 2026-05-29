import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { allPackages } from "@/data/packagesData";

interface Props {
  categoryFilter: string;
}

const CategoryPackages = ({ categoryFilter }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const filteredPackages = allPackages.filter(
    (pkg) => pkg.category.toLowerCase() === categoryFilter.toLowerCase()
  );

  if (filteredPackages.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Curated</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2">
            Tour Packages
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <Link
                to={`/package/${pkg.id}`}
                className="group block rounded-2xl overflow-hidden bg-card border border-border/20 shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-shadow duration-500"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" decoding="async" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      {pkg.duration}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="gradient-gold text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display font-bold text-foreground text-lg mb-2 line-clamp-1">{pkg.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                    <Clock size={14} /> {pkg.duration}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap mb-4">
                    {pkg.highlights.slice(0, 2).map((h) => (
                      <span key={h} className="text-xs bg-muted px-2.5 py-1 rounded-full text-muted-foreground">{h}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between border-t border-border/50 pt-4">
                    <div>
                      <span className="text-xl font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">₹{pkg.originalPrice.toLocaleString()}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      View <ArrowRight size={14} />
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

export default CategoryPackages;

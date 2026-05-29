import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { destinations } from "@/data/destinations";
import { useFilters } from "@/contexts/FilterContext";
import destinationsBg from "@/assets/destinations-bg.png";

const DestinationCard = ({ dest, index }: { dest: typeof destinations[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={`/destination/${dest.id}`}
        className="group block rounded-2xl overflow-hidden bg-card shadow-[var(--shadow-card)] hover-lift border border-border/20"
      >
        <div className="image-zoom aspect-[4/3] relative">
          <img
            src={dest.image}
            alt={dest.name}
            loading="lazy"
            width={800}
            height={600}
            className="w-full h-full object-cover" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
          <div className="absolute top-3 right-3 flex gap-1">
            {dest.category.slice(0, 2).map(c => (
              <span key={c} className="text-[10px] font-semibold bg-primary/80 backdrop-blur-sm text-primary-foreground px-2.5 py-1 rounded-full">
                {c}
              </span>
            ))}
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-1 text-primary-foreground/90 text-sm mb-1">
              <MapPin size={14} />
              <span>Madhya Pradesh</span>
            </div>
            <h3 className="text-xl font-display font-bold text-primary-foreground">{dest.name}</h3>
          </div>
        </div>
        <div className="p-5">
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{dest.description}</p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-muted-foreground">Starting from</span>
              <p className="text-lg font-bold text-primary">₹{dest.startingPrice.toLocaleString()}</p>
            </div>
            <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
              Explore <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const DestinationsSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const { selectedFilters, isAll: isGlobalAll } = useFilters();

  
  const filtered = isGlobalAll
    ? destinations
    : destinations.filter(d => d.category.some(c => selectedFilters.includes(c as any)));

  return (
    <section id="destinations" className="relative py-20 md:py-28 overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Explore</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2">
            Popular Destinations
          </h2>
          <div className="section-divider mt-4" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Discover the most enchanting places in the heart of India
          </p>
        </motion.div>

        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((dest, i) => (
            <DestinationCard key={dest.id} dest={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
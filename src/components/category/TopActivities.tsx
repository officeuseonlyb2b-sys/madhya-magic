import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import type { ActivityData } from "@/data/activitiesData";

interface Props {
  activities: ActivityData[];
}

const TopActivities = ({ activities }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  if (activities.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Things to Do</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2">
            Top Activities
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((act, i) => (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <Link
                to={`/activities/${act.id}`}
                className="group block bg-card rounded-2xl overflow-hidden border border-border/20 shadow-lg"
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={act.image}
                    alt={act.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" decoding="async" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-foreground text-lg">{act.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{act.shortDescription}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopActivities;

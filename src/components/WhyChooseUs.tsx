import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, BadgeIndianRupee, Headphones, Compass, Award, Heart } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Verified Hotels", desc: "Handpicked & quality-checked accommodations across MP" },
  { icon: BadgeIndianRupee, title: "Best Price", desc: "Guaranteed lowest prices with no hidden charges ever" },
  { icon: Headphones, title: "24×7 Support", desc: "Round-the-clock assistance for your complete peace of mind" },
  { icon: Compass, title: "Custom Trips", desc: "Tailor-made itineraries crafted just for you" },
  { icon: Award, title: "Expert Guides", desc: "Certified local guides with deep cultural knowledge" },
  { icon: Heart, title: "Trusted by 10k+", desc: "Join thousands of happy travelers who chose us" },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="why-us" className="py-20 md:py-28 bg-muted/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why Us</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2">
            Why Choose Us
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card rounded-2xl p-8 text-center shadow-[var(--shadow-card)] border border-border/30 group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 mx-auto mb-5 rounded-2xl gradient-gold flex items-center justify-center shadow-[var(--shadow-glow)]"
              >
                <f.icon size={28} className="text-primary-foreground" />
              </motion.div>
              <h3 className="font-display font-bold text-foreground mb-2 text-lg">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

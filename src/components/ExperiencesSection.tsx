import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { experiencesData, type Experience } from "@/data/experiencesData";
import { Link } from "react-router-dom";
import ExperienceDetailModal from "@/components/ExperienceDetailModal";

const ExperienceCard = ({
  exp,
  index,
  onOpenDetails,
}: {
  exp: (typeof experiencesData)[0];
  index: number;
  onOpenDetails: (exp: (typeof experiencesData)[0], rect: DOMRect | null) => void;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isReversed = index % 2 !== 0;
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const exploreBtnRef = useRef<HTMLButtonElement>(null);

  const handleOpenModal = () => {
    const rect = exploreBtnRef.current?.getBoundingClientRect() || null;
    onOpenDetails(exp, rect);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full"
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden bg-card border border-border/40 shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.15)] hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.25)] transition-shadow duration-700"
      >
        {/* Image side */}
        <div className={`relative h-[260px] sm:h-[320px] md:h-[420px] lg:h-auto overflow-hidden ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
          <motion.div style={{ y: imgY }} className="absolute inset-0">
            <motion.img src={exp.image} alt={exp.title} loading="lazy" className="w-full h-full object-cover" animate={{ scale: hovered ? 1.08 : 1 }} transition={{ duration: 0.8 }} />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.4 }} className="absolute top-5 left-5 z-10">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md text-xs font-semibold text-foreground border border-border/50 shadow-lg">
              <IconFor name={exp.icon} size={14} className="text-[#c89b5e]" />
              {exp.category}
            </span>
          </motion.div>
          <motion.div animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity }} className="absolute bottom-6 right-6 z-10">
            <Sparkles className="text-primary/80" size={24} />
          </motion.div>
        </div>

        {/* Content side */}
        <div className={`relative flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-14 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
          <motion.div initial={{ opacity: 0, x: isReversed ? -40 : 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="relative z-10 space-y-5">
            <div>
              <motion.span initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35 }} className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">
                {exp.subtitle}
              </motion.span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mt-2 leading-tight">{exp.title}</h3>
            </div>
            <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-primary to-primary/40" />
            <div>
              <p className={`text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg ${expanded ? "" : "line-clamp-3"}`}>{exp.description}</p>
              <button type="button" onClick={() => setExpanded((v) => !v)} className="mt-2 text-sm font-semibold text-primary hover:underline">
                {expanded ? "Show less" : "Read more"}
              </button>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/contact" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03]">
                Book Experience <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <button ref={exploreBtnRef} type="button" onClick={handleOpenModal} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/60 text-foreground font-semibold text-sm hover:bg-accent/50 transition-all duration-300">
                Explore Experience
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperiencesSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const [activeExp, setActiveExp] = useState<Experience | null>(null);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);

  const handleOpenDetails = (exp: Experience, rect: DOMRect | null) => {
    setActiveExp(exp);
    setAnchorRect(rect);
  };

  const handleCloseModal = () => {
    setActiveExp(null);
    setAnchorRect(null);
  };

  return (
    <section id="experiences" className="py-20 md:py-32 relative overflow-hidden bg-muted/30">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div ref={headerRef} initial={{ opacity: 0, y: 40 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16 md:mb-24">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.25em]">Immersive Journeys</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3">
            Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Experiences</span>
          </h2>
          <div className="section-divider mt-5" />
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto text-lg font-body">
            From sacred rituals to wild safaris — discover once-in-a-lifetime moments that connect you to the soul of Madhya Pradesh
          </p>
        </motion.div>
        <div className="space-y-10 md:space-y-16">
          {experiencesData.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} onOpenDetails={handleOpenDetails} />
          ))}
        </div>
      </div>
      <ExperienceDetailModal experience={activeExp} open={!!activeExp} onClose={handleCloseModal} anchorRect={anchorRect} />
    </section>
  );
};

export default ExperiencesSection;
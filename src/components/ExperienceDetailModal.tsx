import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Clock, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Experience } from "@/data/experiencesData";
import { getRelatedPackagesForExperience } from "@/lib/relatedPackages";

interface Props {
  experience: Experience | null;
  open: boolean;
  onClose: () => void;
  anchorRect?: DOMRect | null;
}

const ExperienceDetailModal = ({ experience, open, onClose, anchorRect }: Props) => {
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open || !anchorRect) {
      setPosition(null);
      return;
    }

    const MODAL_WIDTH = 480;
    const MODAL_HEIGHT_ESTIMATE = 600; // Approx height, for vertical centering
    const VIEWPORT_PADDING = 20;

    // Horizontal center align with button
    let left = anchorRect.left + anchorRect.width / 2 - MODAL_WIDTH / 2;
    left = Math.min(window.innerWidth - MODAL_WIDTH - VIEWPORT_PADDING, Math.max(VIEWPORT_PADDING, left));

    // Vertical: center of modal aligns with center of button
    let top = anchorRect.top + window.scrollY + anchorRect.height / 2 - MODAL_HEIGHT_ESTIMATE / 2;
    // Ensure modal doesn't go off screen vertically
    top = Math.min(window.scrollY + window.innerHeight - MODAL_HEIGHT_ESTIMATE - VIEWPORT_PADDING, Math.max(window.scrollY + VIEWPORT_PADDING, top));

    setPosition({ top, left });
  }, [open, anchorRect]);

  const isAnchored = !!anchorRect && !!position;
  const relatedPackages = experience ? getRelatedPackagesForExperience(experience, 4) : [];

  const ModalContent = () => (
    <div className="relative bg-card rounded-2xl shadow-2xl border border-border/40 flex flex-col max-h-[90vh] w-full overflow-hidden">
      <button
        onClick={onClose}
        aria-label="Close details"
        className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-background/90 backdrop-blur-md border border-border/50 flex items-center justify-center text-foreground hover:bg-background hover:scale-110 transition-all shadow-lg"
      >
        <X size={18} />
      </button>
      <div className="overflow-y-auto overscroll-contain">
        <div className="relative h-52 xs:h-60 sm:h-72 md:h-[380px] overflow-hidden">
          <img src={experience!.image} alt={experience!.title} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-2 mb-2 sm:mb-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <IconFor name={experience!.icon} size={12} className="opacity-90" /> {experience!.category}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium border border-white/20">
                <MapPin size={12} /> {experience!.subtitle}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white leading-tight">{experience!.title}</h2>
          </div>
        </div>
        <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 font-display">About this experience</h3>
            <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed font-body">
              {experience!.fullDescription ?? experience!.description}
            </p>
          </div>
          {(experience!.bestTime || experience!.duration) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {experience!.bestTime && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border/40">
                  <Calendar size={20} className="text-primary shrink-0 mt-0.5" />
                  <div><div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Best Time to Visit</div><div className="text-sm font-medium text-foreground">{experience!.bestTime}</div></div>
                </div>
              )}
              {experience!.duration && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border/40">
                  <Clock size={20} className="text-primary shrink-0 mt-0.5" />
                  <div><div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Duration / Timing</div><div className="text-sm font-medium text-foreground">{experience!.duration}</div></div>
                </div>
              )}
            </div>
          )}
          {experience!.highlights && experience!.highlights.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 font-display">Experience Highlights</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {experience!.highlights.map((h, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.05 }} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" /> <span>{h}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link to="/contact" className="group flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
              Book Experience <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            {relatedPackages.length > 0 && (
              <a href="#related-packages" onClick={(e) => { e.preventDefault(); document.getElementById("modal-related-packages")?.scrollIntoView({ behavior: "smooth", block: "start" }); }} className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-border text-foreground font-semibold text-sm hover:bg-accent/50 transition-all">
                View Related Packages
              </a>
            )}
          </div>
          {relatedPackages.length > 0 && (
            <div id="modal-related-packages" className="pt-6 border-t border-border/40">
              <div className="mb-5"><span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Bundle & Save</span><h3 className="text-xl md:text-2xl font-display font-bold text-foreground mt-1">Tour Packages with {experience!.title}</h3><p className="text-sm text-muted-foreground mt-1">Curated tours that include this experience</p></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPackages.map((pkg, i) => (
                  <motion.div key={pkg.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                    <Link to={`/package/${pkg.id}`} onClick={onClose} className="group block rounded-2xl overflow-hidden bg-card border border-border/40 hover:border-primary/40 hover:shadow-lg transition-all hover:-translate-y-1">
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img src={pkg.image} alt={pkg.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-primary text-primary-foreground">
                          {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                        </span>
                      </div>
                      <div className="p-4">
                        <h4 className="font-display font-bold text-base mb-2 line-clamp-1 text-foreground">{pkg.name}</h4>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3"><span className="flex items-center gap-1"><MapPin size={11} /> {pkg.location}</span><span className="flex items-center gap-1"><Clock size={11} /> {pkg.duration}</span></div>
                        <div className="flex items-center justify-between border-t border-border/50 pt-3"><div><span className="text-lg font-bold text-primary">₹{pkg.price.toLocaleString()}</span><span className="text-xs line-through ml-1.5 text-muted-foreground">₹{pkg.originalPrice.toLocaleString()}</span></div><span className="inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">View <ArrowRight size={12} /></span></div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (isAnchored) {
    return (
      <AnimatePresence>
        {open && experience && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed z-[100]"
            style={{ top: position.top, left: position.left, width: "min(480px, calc(100vw - 2rem))" }}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalContent />
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {open && experience && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-[100] flex items-stretch sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-md" onClick={onClose}>
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.97 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="relative w-full max-w-4xl h-full sm:h-auto sm:max-h-[92vh] bg-card rounded-none sm:rounded-3xl overflow-hidden shadow-2xl border border-border/40 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <ModalContent />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExperienceDetailModal;
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle, X } from "lucide-react";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);
  const [showInquiry, setShowInquiry] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-foreground text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
      >
        <MessageCircle size={24} />
      </a>

      <AnimatePresence>
        {showInquiry && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 z-50 glass-card rounded-2xl p-6 w-80 shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display font-bold text-foreground">Trip Inquiry</h3>
              <button onClick={() => setShowInquiry(false)}><X size={18} /></button>
            </div>
            <form className="space-y-3">
              <input placeholder="Your Name" className="w-full bg-muted rounded-lg px-3 py-2 text-sm outline-none" />
              <input placeholder="Phone Number" className="w-full bg-muted rounded-lg px-3 py-2 text-sm outline-none" />
              <input placeholder="Destination" className="w-full bg-muted rounded-lg px-3 py-2 text-sm outline-none" />
              <button type="button" className="w-full gradient-gold text-primary-foreground rounded-lg py-2.5 font-semibold text-sm">
                Send Inquiry
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;

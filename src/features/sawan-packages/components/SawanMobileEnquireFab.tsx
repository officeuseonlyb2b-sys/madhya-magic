import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import SacredEnquiryFormModal from "./SawanEnquiryFormModal";

/**
 * Mobile-only sticky "Enquire Now" button + auto-popup trigger.
 * - Small fixed pill anchored on right side, vertically centred (lower third).
 * - Auto-opens the enquiry modal once when the user scrolls to #sawan-reels
 *   OR after 10 seconds — whichever happens first.
 * - User can close and reopen anytime from the side button.
 */
const SawanMobileEnquireFab = () => {
  const [open, setOpen] = useState(false);
  const autoOpenedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Mobile only
    if (window.matchMedia("(min-width: 768px)").matches) return;

    const triggerOnce = () => {
      if (autoOpenedRef.current) return;
      autoOpenedRef.current = true;
      setOpen(true);
    };

    // Time-based trigger (10s)
    const timer = window.setTimeout(triggerOnce, 10000);

    // Scroll-based trigger – when reels section enters viewport
    const reels = document.getElementById("sawan-reels");
    let observer: IntersectionObserver | null = null;
    if (reels) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) triggerOnce();
          });
        },
        { threshold: 0.15 }
      );
      observer.observe(reels);
    }

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, []);

  return (
    <>
      {/* Mobile-only sticky side button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Enquire Now"
        className="md:hidden fixed right-0 top-[65%] z-40 -translate-y-1/2 flex items-center gap-1.5 bg-[#FF7A00] text-white pl-3 pr-3 py-2.5 rounded-l-full shadow-[0_8px_24px_rgba(255,122,0,0.45)] text-[12px] font-semibold tracking-wide active:scale-95 transition"
        style={{ writingMode: "horizontal-tb" }}
      >
        <MessageCircle size={16} strokeWidth={2.2} />
        <span>Enquire Now</span>
      </button>

      <SacredEnquiryFormModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default SawanMobileEnquireFab;

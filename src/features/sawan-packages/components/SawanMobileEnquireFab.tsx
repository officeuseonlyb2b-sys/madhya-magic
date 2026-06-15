import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import SacredEnquiryFormModal from "./SawanEnquiryFormModal";

/**
 * Mobile-only sticky "Enquire Now" button + auto-popup trigger.
 * - Draggable: user can move the button anywhere on screen; it stays within viewport bounds.
 * - Auto-opens the enquiry modal once when the user scrolls to #sawan-reels
 *   OR after 10 seconds — whichever happens first.
 */
const SawanMobileEnquireFab = () => {
  const [open, setOpen] = useState(false);
  const autoOpenedRef = useRef(false);

  // Drag state
  const btnRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const startRef = useRef<{ px: number; py: number; ox: number; oy: number }>({
    px: 0,
    py: 0,
    ox: 0,
    oy: 0,
  });

  // Initialise default position (right edge, ~65% down)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const btnW = 130;
    const btnH = 42;
    setPos({ x: w - btnW - 0, y: Math.round(h * 0.65) - btnH / 2 });
  }, []);

  // Keep within viewport on resize
  useEffect(() => {
    const onResize = () => {
      setPos((p) => {
        if (!p) return p;
        const el = btnRef.current;
        const bw = el?.offsetWidth ?? 130;
        const bh = el?.offsetHeight ?? 42;
        return {
          x: Math.min(Math.max(0, p.x), window.innerWidth - bw),
          y: Math.min(Math.max(0, p.y), window.innerHeight - bh),
        };
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Auto-open triggers
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(min-width: 768px)").matches) return;

    const triggerOnce = () => {
      if (autoOpenedRef.current) return;
      autoOpenedRef.current = true;
      setOpen(true);
    };

    const timer = window.setTimeout(triggerOnce, 10000);

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

  // Pointer drag handlers
  const onPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!pos) return;
    draggingRef.current = true;
    movedRef.current = false;
    startRef.current = { px: e.clientX, py: e.clientY, ox: pos.x, oy: pos.y };
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - startRef.current.px;
    const dy = e.clientY - startRef.current.py;
    if (!movedRef.current && Math.hypot(dx, dy) > 5) movedRef.current = true;
    if (!movedRef.current) return;
    const el = btnRef.current;
    const bw = el?.offsetWidth ?? 130;
    const bh = el?.offsetHeight ?? 42;
    const nx = Math.min(Math.max(0, startRef.current.ox + dx), window.innerWidth - bw);
    const ny = Math.min(Math.max(0, startRef.current.oy + dy), window.innerHeight - bh);
    setPos({ x: nx, y: ny });
  };

  const onPointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    draggingRef.current = false;
    (e.target as Element).releasePointerCapture?.(e.pointerId);
  };

  const handleClick = () => {
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    setOpen(true);
  };

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        onClick={handleClick}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        aria-label="Enquire Now"
        className="md:hidden fixed z-40 flex items-center gap-1.5 bg-[#FF7A00] text-white pl-3 pr-3 py-2.5 rounded-full shadow-[0_8px_24px_rgba(255,122,0,0.45)] text-[12px] font-semibold tracking-wide active:scale-95 transition touch-none select-none cursor-grab active:cursor-grabbing"
        style={
          pos
            ? { left: pos.x, top: pos.y, right: "auto", bottom: "auto" }
            : { right: 0, top: "65%" }
        }
      >
        <MessageCircle size={16} strokeWidth={2.2} />
        <span>Enquire Now</span>
      </button>

      <SacredEnquiryFormModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default SawanMobileEnquireFab;

import { motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { SawanCampaign } from "@/data/exclusive/sawanData";

// ========== IMPORT 16 IMAGES ==========
import about1 from "@/assets/shravan/about1.webp";
import about2 from "@/assets/shravan/about2.webp";
import about3 from "@/assets/shravan/about3.webp";
import about4 from "@/assets/shravan/about4.webp";
import about5 from "@/assets/shravan/about5.webp";
import about6 from "@/assets/shravan/about6.webp";
import about7 from "@/assets/shravan/about7.webp";
import about8 from "@/assets/shravan/about8.webp";
import about9 from "@/assets/shravan/about9.webp";
import about10 from "@/assets/shravan/about10.webp";
import about11 from "@/assets/shravan/about11.webp";
import about12 from "@/assets/shravan/about12.webp";
import about13 from "@/assets/shravan/about13.webp";
import about14 from "@/assets/shravan/about14.webp";
import about15 from "@/assets/shravan/about15.webp";
import about16 from "@/assets/shravan/about16.webp";

const aboutImages = [
  about1, about2, about3, about4,
  about5, about6, about7, about8,
  about9, about10, about11, about12,
  about13, about14, about15, about16,
];

interface Props {
  intro: SawanCampaign["intro"];
}

const ExclusiveIntro = ({ intro }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScrollActive, setAutoScrollActive] = useState(true);
  const inactivityTimer = useRef<NodeJS.Timeout | null>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);
  const originalSetWidth = useRef(0);
  const [imageWidth, setImageWidth] = useState(0);

  const duplicatedImages = [...aboutImages, ...aboutImages];

  // Smooth continuous auto-scroll
  const startAutoScroll = () => {
    if (scrollInterval.current) clearInterval(scrollInterval.current);
    scrollInterval.current = setInterval(() => {
      if (!autoScrollActive || !scrollRef.current) return;
      const container = scrollRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      if (scrollLeft >= originalSetWidth.current) {
        container.scrollLeft = scrollLeft - originalSetWidth.current;
      } else {
        container.scrollLeft = scrollLeft + 1.2;
      }
    }, 30);
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) clearInterval(scrollInterval.current);
    scrollInterval.current = null;
  };

  const resumeAutoScroll = () => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => {
      setAutoScrollActive(true);
    }, 3000);
  };

  const pauseAndResumeLater = () => {
    if (autoScrollActive) {
      setAutoScrollActive(false);
      resumeAutoScroll();
    }
  };

  const scrollByImage = (direction: "left" | "right") => {
    if (!scrollRef.current || imageWidth === 0) return;
    const container = scrollRef.current;
    const delta = direction === "left" ? -imageWidth : imageWidth;
    container.scrollTo({ left: container.scrollLeft + delta, behavior: "smooth" });
    pauseAndResumeLater();
  };

  useEffect(() => {
    const updateWidth = () => {
      if (scrollRef.current) {
        setImageWidth(scrollRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (scrollRef.current && imageWidth > 0) {
      originalSetWidth.current = imageWidth * aboutImages.length;
      scrollRef.current.scrollLeft = 0;
    }
  }, [imageWidth]);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [autoScrollActive]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = () => pauseAndResumeLater();
    const handleTouchMove = () => pauseAndResumeLater();
    const handleScroll = () => pauseAndResumeLater();

    container.addEventListener("wheel", handleWheel);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("scroll", handleScroll);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      stopAutoScroll();
    };
  }, [autoScrollActive]);

  const handleMouseEnter = () => setAutoScrollActive(false);
  const handleMouseLeave = () => setAutoScrollActive(true);

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFF7EC 0%, #FFFBF3 60%, #FFF3DD 100%)",
      }}
    >
      {/* Decorative rings */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(255,176,80,0.20),transparent_65%)]" />
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#d4a017]/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#ff9933]/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* LEFT: Gallery without scrollbar */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#d4a017]/15 aspect-[4/5] group ring-1 ring-[#d4a017]/20 bg-[#2a1a0a]">
            {/* Arrow buttons */}
            <button
              onClick={() => scrollByImage("left")}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scrollByImage("right")}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            {/* Scroll container – scrollbar hidden */}
            <div
              ref={scrollRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute inset-0 overflow-x-auto cursor-grab active:cursor-grabbing"
              style={{
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE/Edge
                WebkitOverflowScrolling: "touch",
              }}
            >
              {/* Hide scrollbar for Chrome/Safari */}
              <style>
                {`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>
              <div className="flex h-full">
                {duplicatedImages.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="relative flex-shrink-0 h-full"
                    style={{ flex: "0 0 100%" }}
                  >
                    <img
                      src={imgUrl}
                      alt={"Shravan moment " + ((idx % aboutImages.length) + 1)}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Om symbol & hint */}
            <span className="absolute bottom-4 right-4 text-6xl text-white/30 select-none pointer-events-none">
              ॐ
            </span>
            <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm text-white/90 text-xs px-2 py-1 rounded-full pointer-events-none">
            </div>
          </div>

          {/* RIGHT: Text content (unchanged) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-block nav-font text-[#b8651a] uppercase tracking-[0.35em] text-xs mb-4 border-b border-[#d4a017]/40 pb-2">
              ॐ {intro.eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#3a1d05] leading-tight mb-6 relative">
              {intro.title}
              <span className="absolute -top-2 -right-6 text-2xl text-[#ff9933] opacity-60">
                ॥
              </span>
            </h2>
            <div className="space-y-4 text-[#5a3a1a] leading-relaxed">
              {intro.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ul className="grid sm:grid-cols-2 gap-3 mt-8">
              {intro.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-[#5a3a1a]">
                  <Check size={16} className="mt-0.5 text-[#ff9933] flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2">
              <span className="flex-1 h-px bg-gradient-to-r from-[#d4a017]/60 to-transparent" />
              <span className="text-[#ff9933] text-sm">🕉️</span>
              <span className="flex-1 h-px bg-gradient-to-l from-[#d4a017]/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveIntro;
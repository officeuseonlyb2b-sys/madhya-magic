import { motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { SawanCampaign } from "@/data/exclusive/sawanData";

// ========== CLOUDINARY IMAGE URLs (15 provided) ==========
const aboutImages = [
  "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781607203/about1_mzlta9.webp",
  "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781607204/about2_psbaaa.webp",
  "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781607206/about3_mts3bj.webp",
  "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781607204/about4_cmobty.webp",
  "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781607204/about5_xl6j34.webp",
  "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781607204/about6_wkuima.webp",
  "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781607205/about7_weyvk4.webp",
  "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781607205/about8_eyac6z.webp",
  "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781607205/about9_yfrif2.webp",
  "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781607205/about10_hha0q1.webp",
  "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781607205/about11_cpjluh.webp",
  "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781607206/about12_gsmk6p.webp",
  "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781607206/about13_skt7hd.webp",
  "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781607206/about14_tr2nwl.webp",
  "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781607208/about15_myk831.webp",
  "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781607209/about16_mcumxb.webp",
];

interface Props {
  intro: SawanCampaign["intro"];
}

const ExclusiveIntro = ({ intro }: Props) => {
  const [expanded, setExpanded] = useState(false);
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
      className="relative py-12 sm:py-16 md:py-28 overflow-hidden bg-white"
    >
      {/* White + Orange gradient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-radial from-orange-200/30 via-transparent to-transparent" />
      
      {/* Decorative orange rings */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-orange-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-orange-400" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* LEFT: Gallery without scrollbar */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-orange-200/50 aspect-[4/5] sm:aspect-[4/5] group ring-1 ring-orange-200 bg-orange-50">
            {/* Arrow buttons - orange theme */}
            <button
              onClick={() => scrollByImage("left")}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-orange-600 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scrollByImage("right")}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-orange-600 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
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
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
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

            {/* Om symbol - orange tint */}
            <span className="absolute bottom-4 right-4 text-6xl text-orange-300/30 select-none pointer-events-none">
              ॐ
            </span>
          </div>

          {/* RIGHT: Text content - orange/white theme */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-block nav-font text-orange-600 uppercase tracking-[0.35em] text-xs mb-4 border-b border-orange-300 pb-2">
              ॐ {intro.eyebrow}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-orange-800 leading-tight mb-4 sm:mb-6 relative">
              {intro.title}
              <span className="absolute -top-2 -right-6 text-2xl text-orange-400 opacity-60">
                ॥
              </span>
            </h2>
            <div className="space-y-4 text-orange-800/80 leading-relaxed">
              {intro.paragraphs.map((p, i) => {
                const hideOnMobile = i > 0;
                return (
                  <p
                    key={i}
                    className={
                      hideOnMobile
                        ? `md:block transition-all duration-500 ease-in-out ${expanded ? "block" : "hidden"}`
                        : ""
                    }
                  >
                    {p}
                  </p>
                );
              })}
              {intro.paragraphs.length > 1 && (
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="md:hidden inline-flex items-center gap-1 text-orange-600 font-semibold text-sm underline underline-offset-4"
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              )}
            </div>
            <ul className="grid sm:grid-cols-2 gap-3 mt-8">
              {intro.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-orange-800/80">
                  <Check size={16} className="mt-0.5 text-orange-500 flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2">
              <span className="flex-1 h-px bg-gradient-to-r from-orange-300/60 to-transparent" />
              <span className="text-orange-500 text-sm">🕉️</span>
              <span className="flex-1 h-px bg-gradient-to-l from-orange-300/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveIntro;
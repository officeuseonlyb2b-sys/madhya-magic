import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imageStyles = [
  "w-[180px] h-[360px]",
  "w-[240px] h-[170px]",
  "w-[220px] h-[220px]",
  "w-[230px] h-[360px]",
  "w-[210px] h-[180px]",
];

interface Props {
  images: string[];
  destinationName: string;
}

const DestinationGallery = ({ images, destinationName }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;

    if (!container) return;

    const scrollAmount = 320;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (!images.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden mt-16 md:mt-24 relative"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-8">
        Gallery
      </h2>

      <div className="relative">

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="
            absolute left-0 top-1/2 -translate-y-1/2 z-20
            w-12 h-12
            bg-white/90 backdrop-blur-md
            border border-border
            shadow-2xl
            flex items-center justify-center
            hover:scale-110 transition-all duration-300
          "
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="
            absolute right-0 top-1/2 -translate-y-1/2 z-20
            w-12 h-12
            bg-white/90 backdrop-blur-md
            border border-border
            shadow-2xl
            flex items-center justify-center
            hover:scale-110 transition-all duration-300
          "
        >
          <ChevronRight size={22} />
        </button>

        {/* Gallery */}
        <div
          ref={scrollRef}
          className="
            overflow-x-hidden
            px-14
            select-none
          "
        >
          <div className="flex items-center gap-5 min-w-max py-2">
            {images.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                }}
                className={`
                  flex-shrink-0
                  overflow-hidden
                  shadow-2xl
                  ${imageStyles[i % imageStyles.length]}
                `}
              >
                <img
                  src={g}
                  alt={`${destinationName} ${i + 1}`}
                  loading="lazy"
                  draggable={false}
                  className="
                    w-full h-full object-cover
                    hover:scale-105
                    transition-transform duration-700
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default DestinationGallery;
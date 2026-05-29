import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imageStyles = [
  "w-[1033px] h-[596px]",
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

    const scrollAmount = 1050;

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
    absolute left-6 top-1/2 -translate-y-1/2 z-30
    group
  "
>
  <div
    className="
      relative
      w-16 h-16
      rounded-full
      bg-white/15
      backdrop-blur-2xl
      border border-white/30
      shadow-[0_8px_32px_rgba(0,0,0,0.25)]
      flex items-center justify-center
      overflow-hidden
      transition-all duration-500
      group-hover:scale-110
      group-hover:bg-white/25
      group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
    "
  >
    {/* Glow Effect */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-br from-white/40 via-transparent to-transparent
        opacity-70
      "
    />

    {/* Inner Ring */}
    <div
      className="
        absolute inset-[3px]
        rounded-full
        border border-white/20
      "
    />

    <ChevronLeft
      size={28}
      className="
        relative z-10
        text-white
        transition-transform duration-300
        group-hover:-translate-x-1
      "
      strokeWidth={2.2}
    />
  </div>
</button>

{/* Right Arrow */}
<button
  onClick={() => scroll("right")}
  className="
    absolute right-6 top-1/2 -translate-y-1/2 z-30
    group
  "
>
  <div
    className="
      relative
      w-16 h-16
      rounded-full
      bg-white/15
      backdrop-blur-2xl
      border border-white/30
      shadow-[0_8px_32px_rgba(0,0,0,0.25)]
      flex items-center justify-center
      overflow-hidden
      transition-all duration-500
      group-hover:scale-110
      group-hover:bg-white/25
      group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
    "
  >
    {/* Glow Effect */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-br from-white/40 via-transparent to-transparent
        opacity-70
      "
    />

    {/* Inner Ring */}
    <div
      className="
        absolute inset-[3px]
        rounded-full
        border border-white/20
      "
    />

    <ChevronRight
      size={28}
      className="
        relative z-10
        text-white
        transition-transform duration-300
        group-hover:translate-x-1
      "
      strokeWidth={2.2}
    />
  </div>
</button>

        {/* Gallery */}
        <div
          ref={scrollRef}
          className="
            overflow-x-auto
            scrollbar-hide
            px-16
            select-none
          "
        >
          <div className="flex items-center gap-6 min-w-max py-2">
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
                  rounded-3xl
                  shadow-2xl
                  ${imageStyles[0]}
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
                  " decoding="async" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default DestinationGallery;
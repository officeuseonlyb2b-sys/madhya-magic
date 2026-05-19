import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";

interface Props {
  name: string;
  image: string;
  categories: string[];
  bestTime: string;
}

/**
 * Hero with strong dark gradient overlay for guaranteed text readability
 * on any background image, while keeping the image fully visible.
 */
const DestinationHero = ({ name, image, categories, bestTime }: Props) => (
  <section className="relative h-[60vh] sm:h-[70vh] md:h-[100vh]">
    <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover" />
    {/* Layered overlays — base darken + bottom gradient for legibility */}
    <div className="absolute inset-0 bg-black/45" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
    <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
      <Link
        to="/"
        className="flex items-center gap-1 text-white/90 text-sm mb-4 hover:text-white transition-colors"
      >
        <ArrowLeft size={16} /> Back to Home
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap gap-2 mb-3">
          {categories.map((c) => (
            <span
              key={c}
              className="text-xs font-medium bg-white/25 text-white px-3 py-1 rounded-full backdrop-blur-sm border border-white/20"
            >
              {c}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          {name}
        </h1>
        <div className="flex items-center gap-4 text-white/90 text-sm drop-shadow-md">
          <span className="flex items-center gap-1">
            <MapPin size={14} /> Madhya Pradesh
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={14} /> Best: {bestTime}
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DestinationHero;

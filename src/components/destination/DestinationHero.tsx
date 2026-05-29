import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";

interface Props {
  name: string;
  image: string;
  categories: string[];
  bestTime: string;
}

const DestinationHero = ({ name, image, categories, bestTime }: Props) => (
  <section className="relative h-[60vh] sm:h-[70vh] md:h-[100vh] overflow-hidden">
    
    {/* IMAGE */}
    <img
      src={image}
      alt={name}
      className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />

    {/* CONTENT */}
    <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
      
      {/* BACK BUTTON */}
      <Link
        to="/"
        className="flex items-center gap-2 text-white text-sm mb-5 hover:-translate-x-1 transition-all duration-300"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* CATEGORY TAGS */}
        <div className="flex flex-wrap gap-3 mb-5">
          {categories.map((c) => (
            <span
              key={c}
              className="text-xs sm:text-sm font-medium bg-white/15 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20"
            >
              {c}
            </span>
          ))}
        </div>

        {/* TITLE */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-5">
          {name}
        </h1>

        {/* INFO */}
        <div className="flex flex-wrap items-center gap-6 text-white text-sm sm:text-base">
          <span className="flex items-center gap-2">
            <MapPin size={16} />
            Madhya Pradesh
          </span>

          <span className="flex items-center gap-2">
            <Calendar size={16} />
            Best: {bestTime}
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DestinationHero;
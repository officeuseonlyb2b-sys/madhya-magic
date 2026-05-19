import { motion } from "framer-motion";
import type { AttractionCard } from "@/data/destinationDetails";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const TopAttractions = ({ attractions }: { attractions: AttractionCard[] }) => {
  if (!attractions.length) return null;
  return (
    <motion.div {...fade} className="mt-12 md:mt-24 first:mt-0">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
        Top Attractions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {attractions.map((a, i) => (
          <div
            key={i}
            className="bg-white rounded-[32px] overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="relative overflow-hidden rounded-b-[24px]">
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-5 right-5 w-10 h-10 border-t-2 border-r-2 border-yellow-500 rounded-tr-2xl" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl md:text-[28px] leading-tight font-display font-semibold text-[#1d2746] mb-5">
                {a.title}
              </h3>
              <div className="w-14 h-[3px] bg-yellow-500 rounded-full mx-auto mb-5" />
              <p className="text-gray-600 leading-8 text-[17px]">{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TopAttractions;

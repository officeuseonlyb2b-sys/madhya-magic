import { motion } from "framer-motion";

const imageStyles = [
  "w-[260px] h-[520px]",
  "w-[340px] h-[220px]",
  "w-[330px] h-[300px]",
  "w-[320px] h-[520px]",
  "w-[300px] h-[230px]",
];

interface Props { images: string[]; destinationName: string }

const DestinationGallery = ({ images, destinationName }: Props) => {
  if (!images.length) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden mt-16 md:mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
        Gallery
      </h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-6 min-w-max px-1 py-2">
          {images.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`flex-shrink-0 overflow-hidden rounded-none ${imageStyles[i % imageStyles.length]}`}
            >
              <img
                src={g}
                alt={`${destinationName} ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationGallery;

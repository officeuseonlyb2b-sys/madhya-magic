
import { motion } from "framer-motion";

interface Props {
  images: string[];
  title: string;
  staticImage?: string;
}

const HeroCarousel = ({ images, title, staticImage }: Props) => {
  const bg = staticImage ?? images[0];

  return (
    <section
      className="relative h-[100vh] w-full overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <img
        src={bg}
        alt={`Explore ${title} of Madhya Pradesh`}
        className="sr-only" loading="lazy" decoding="async" />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Title Bottom Center */}
      <div className="absolute inset-0 flex items-end justify-center z-10 pb-8 md:pb-10 lg:pb-12">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white text-center px-6 leading-[1.05] drop-shadow-2xl"
        >
          Explore {title} of
          <br />
          Madhya Pradesh
        </motion.h1>
      </div>
    </section>
  );
};

export default HeroCarousel;

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface Props {
  onClick: () => void;
}

const SawanFloatingCTA = ({ onClick }: Props) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-[150] group"
      aria-label="Enquire about Sawan packages"
    >
      <span className="absolute inset-0 rounded-full bg-[#ff9933] opacity-50 blur-xl animate-pulse" />
      <span className="relative flex items-center gap-2 bg-gradient-to-br from-[#ff9933] to-[#d4a017] text-white pl-4 pr-5 py-3 rounded-full font-semibold shadow-xl shadow-[#ff9933]/40 border border-[#FFCE7A]/40">
        <Sparkles size={16} className="text-[#FFE6B8]" />
        <span className="nav-font text-sm hidden md:inline">Enquire Now</span>
        <span className="nav-font text-sm md:hidden">Book</span>
      </span>
    </motion.button>
  );
};

export default SawanFloatingCTA;

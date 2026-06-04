import { motion } from "framer-motion";

/**
 * Subtle saffron / gold spiritual ambience — sacred geometry rings,
 * floating particles and an Om watermark. Pointer-events disabled so it
 * never interferes with content.
 */
const SawanSpiritualBackdrop = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Sacred geometry rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]">
        <div className="w-[900px] h-[900px] rounded-full border border-[#d4a017]" />
        <div className="absolute inset-12 rounded-full border border-[#ff9933]" />
        <div className="absolute inset-28 rounded-full border border-[#d4a017]/70" />
      </div>

      {/* Soft saffron radial glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full bg-[radial-gradient(circle,rgba(255,165,80,0.22),transparent_65%)]" />

      {/* Floating particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute block w-1.5 h-1.5 rounded-full bg-[#ffb347] shadow-[0_0_10px_rgba(255,179,71,0.7)]"
          style={{
            left: `${(i * 7 + 5) % 95}%`,
            top: `${(i * 13 + 10) % 90}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: 6 + (i % 4),
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Om watermark */}
      <span className="absolute bottom-10 right-10 text-[180px] leading-none text-[#d4a017]/10 font-display select-none">
        ॐ
      </span>
    </div>
  );
};

export default SawanSpiritualBackdrop;

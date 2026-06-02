import { motion } from "framer-motion";
import om from "@/assets/spiritual/om.svg";
import swastik from "@/assets/spiritual/swastik.svg";
import mandala from "@/assets/spiritual/mandala.svg";

/**
 * SpiritualBackground
 * -------------------------------------------------------------
 * Decorative, non-interactive spiritual atmosphere layer.
 * Sits behind page content (pointer-events: none).
 *
 * Renders:
 *   - Soft saffron/gold ambient glows
 *   - Floating ॐ (Om) symbols (very low opacity)
 *   - Watermark Swastik (auspicious) marks
 *   - Mandala motifs in corners
 *   - Sacred light rays (top)
 *   - Subtle golden particle drift
 *
 * Designed for the Sawan page and reusable on future spiritual
 * pages (Mahakal, Simhastha 2028, Jyotirlinga, etc.).
 *
 * Performance:
 *   - Uses transform/opacity only animations
 *   - Limited count of animated elements
 *   - aria-hidden, decorative only
 */
interface Props {
  /** Tint intensity for the warm aura (0–1). Default 1. */
  intensity?: number;
  /** Show floating particles. Default true. */
  particles?: boolean;
  className?: string;
}

const SpiritualBackground = ({
  intensity = 1,
  particles = true,
  className = "",
}: Props) => {
  const dots = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    left: (i * 7.3) % 100,
    top: (i * 11.7) % 100,
    delay: (i % 5) * 0.6,
    duration: 6 + (i % 4),
    size: 2 + (i % 3),
  }));

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Warm saffron/gold ambient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,153,51,0.10), transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(212,160,23,0.08), transparent 65%), radial-gradient(ellipse at 10% 80%, rgba(255,196,87,0.06), transparent 60%)",
          opacity: intensity,
        }}
      />

      {/* Top light rays */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[480px] blur-3xl"
        style={{
          background:
            "conic-gradient(from 220deg at 50% 100%, transparent 0deg, rgba(255,176,80,0.16) 30deg, transparent 60deg, rgba(255,206,120,0.12) 90deg, transparent 120deg)",
          opacity: 0.55 * intensity,
        }}
      />

      {/* Mandala — top right */}
      <motion.img
        src={mandala}
        alt=""
        className="absolute -top-24 -right-24 w-[420px] text-amber-500"
        style={{ color: "#d4a017", opacity: 0.06 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />

      {/* Mandala — bottom left */}
      <motion.img
        src={mandala}
        alt=""
        className="absolute -bottom-32 -left-32 w-[520px]"
        style={{ color: "#d4a017", opacity: 0.05 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
      />

      {/* Swastik watermarks (very low opacity, traditional Hindu auspicious symbol) */}
      <img
        src={swastik}
        alt=""
        className="absolute top-[18%] left-[8%] w-20 md:w-28"
        style={{ color: "#ff9933", opacity: 0.05 }}
      />
      <img
        src={swastik}
        alt=""
        className="absolute bottom-[22%] right-[10%] w-16 md:w-24"
        style={{ color: "#d4a017", opacity: 0.05 }}
      />

      {/* Floating Om symbols */}
      <motion.img
        src={om}
        alt=""
        className="absolute top-[12%] right-[18%] w-24 md:w-32"
        style={{ color: "#ff9933", opacity: 0.07 }}
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={om}
        alt=""
        className="absolute bottom-[14%] left-[14%] w-20 md:w-28"
        style={{ color: "#d4a017", opacity: 0.06 }}
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.img
        src={om}
        alt=""
        className="absolute top-[55%] left-[42%] w-16 md:w-24"
        style={{ color: "#ff9933", opacity: 0.05 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />

      {/* Drifting golden particles */}
      {particles &&
        dots.map((d) => (
          <motion.span
            key={d.id}
            className="absolute rounded-full"
            style={{
              left: `${d.left}%`,
              top: `${d.top}%`,
              width: d.size,
              height: d.size,
              background:
                "radial-gradient(circle, rgba(255,196,87,0.9), transparent 70%)",
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.7, 0],
              y: [0, -24, 0],
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: d.duration,
              repeat: Infinity,
              delay: d.delay,
              ease: "easeInOut",
            }}
          />
        ))}
    </div>
  );
};

export default SpiritualBackground;

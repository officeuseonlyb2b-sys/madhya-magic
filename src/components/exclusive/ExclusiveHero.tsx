import { motion } from "framer-motion";
import type { SawanCampaign } from "@/data/exclusive/sawanData";
import mahakalImage from "@/assets/shravan/mahakal-image.webp";
import mobileHeroImage from "@/assets/shravan/home-mobile.png";

interface Props {
  hero: SawanCampaign["hero"];
}

const ExclusiveHero = ({ hero }: Props) => {
  const scrollTo = (sel: string) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full h-auto md:h-screen md:overflow-hidden bg-white">
      {/* Mobile image – visible only on small screens */}
      <img
        src={mobileHeroImage}
        alt="Mahakal – Sacred Shravan Campaign (Mobile)"
        className="block md:hidden w-full h-auto"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Desktop / Tablet image – hidden on mobile, covers section on md+ */}
      <img
        src={mahakalImage}
        alt="Mahakal – Sacred Shravan Campaign"
        className="hidden md:block md:absolute md:inset-0 md:h-full md:object-cover md:w-full"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Optional overlay gradients (commented out as in original) */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#3a1d05]/70 via-[#7a3a0a]/40 to-[#1a0a02]/85" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#ff9933]/25 via-transparent to-[#d4a017]/15 mix-blend-overlay" /> */}
      {/* <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(255,176,80,0.20),transparent_65%)]" /> */}
    </section>
  );
};

export default ExclusiveHero;
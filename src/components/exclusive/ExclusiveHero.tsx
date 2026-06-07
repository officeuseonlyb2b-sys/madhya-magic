import { motion } from "framer-motion";
import type { SawanCampaign } from "@/data/exclusive/sawanData";
import mahakalImage from "@/assets/shravan/mahakal-image.webp";

interface Props {
  hero: SawanCampaign["hero"];
}

const ExclusiveHero = ({ hero }: Props) => {
  const scrollTo = (sel: string) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full h-[60vh] sm:h-[75vh] md:h-screen overflow-hidden">
      <img
        src={mahakalImage}
        alt="Mahakal – Sacred Shravan Campaign"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#3a1d05]/70 via-[#7a3a0a]/40 to-[#1a0a02]/85" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#ff9933]/25 via-transparent to-[#d4a017]/15 mix-blend-overlay" /> */}

      {/* <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(255,176,80,0.20),transparent_65%)]" /> */}
    </section>
  );
};

export default ExclusiveHero;
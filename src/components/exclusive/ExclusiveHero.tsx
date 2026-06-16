import { motion } from "framer-motion";
import type { SawanCampaign } from "@/data/exclusive/sawanData";
import mobileHeroImage from "@/assets/shravan/home-mobile.png";

const mahakalImage =
  "https://res.cloudinary.com/dfyuf0bjl/image/upload/f_auto,q_auto/v1781588482/mahakal-image_isjlof.webp";

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
      <img
        src={mobileHeroImage}
        alt="Mahakal – Sacred Shravan Campaign (Mobile)"
        className="block md:hidden w-full h-auto"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      <img
        src={mahakalImage}
        alt="Mahakal – Sacred Shravan Campaign"
        className="hidden md:block md:absolute md:inset-0 md:h-full md:object-cover md:w-full"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </section>
  );
};

export default ExclusiveHero;
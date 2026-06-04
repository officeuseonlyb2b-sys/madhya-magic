import { motion } from "framer-motion";
import { sawanPackages } from "../data/packages";
import SawanPackageCard from "./SawanPackageCard";
import type { SawanPackage } from "../types";

interface Props {
  onOpen: (pkg: SawanPackage) => void;
}

const SawanPackageGrid = ({ onOpen }: Props) => {
  const normal = sawanPackages.filter((p) => p.kind === "normal");
  const heli = sawanPackages.filter((p) => p.kind === "helicopter");

  return (
    <section
      id="sawan-special-packages"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#FFF7EC 0%,#FFEFD5 60%,#FFF7EC 100%)" }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          eyebrow="ॐ Hotel Packages"
          title="Sawan Pilgrimage Packages"
          subtitle="3 to 5 night curated journeys with 3-star / 4-star hotels, VVIP darshan and AC transport."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {normal.map((p, i) => (
            <SawanPackageCard key={p.id} pkg={p} index={i} onOpen={onOpen} />
          ))}
        </div>

        <div className="mt-24">
          <SectionTitle
            eyebrow="✈ Helicopter VIP"
            title="Sawan Helicopter Packages"
            subtitle="Same-day and luxury overnight darshan of both Jyotirlingas by chartered helicopter."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heli.map((p, i) => (
              <SawanPackageCard key={p.id} pkg={p} index={i} onOpen={onOpen} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
    <span className="inline-block nav-font text-[#b8651a] uppercase tracking-[0.35em] text-xs mb-3 border-b border-[#d4a017]/40 pb-2">
      {eyebrow}
    </span>
    <h2 className="font-display text-[#3a1d05] text-3xl md:text-5xl">{title}</h2>
    <p className="max-w-2xl mx-auto text-[#5a3a1a]/85 mt-4">{subtitle}</p>
    <div className="mt-4 flex justify-center gap-2 items-center">
      <span className="w-14 h-px bg-gradient-to-r from-transparent via-[#ff9933] to-transparent" />
      <span className="text-[#ff9933] text-lg">🕉️</span>
      <span className="w-14 h-px bg-gradient-to-r from-transparent via-[#ff9933] to-transparent" />
    </div>
  </motion.div>
);

export default SawanPackageGrid;

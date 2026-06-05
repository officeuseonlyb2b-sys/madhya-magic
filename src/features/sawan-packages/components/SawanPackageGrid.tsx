import { motion } from "framer-motion";
import { sawanPackages } from "../data/packages";
import SawanPackageCard from "./SawanPackageCard";

const ORANGE = "#FF7A00";

const SawanPackageGrid = () => {
  const normal = sawanPackages.filter((p) => p.kind === "normal");
  const heli = sawanPackages.filter((p) => p.kind === "helicopter");

  return (
    <section
      id="sawan-special-packages"
      className="relative py-20 md:py-28 overflow-hidden bg-white"
    >
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          eyebrow="ॐ Hotel Packages"
          title="Sawan Pilgrimage Packages"
          subtitle="3 to 5 night curated journeys with VVIP darshan, AC transport and comfortable stays."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {normal.map((p, i) => (
            <SawanPackageCard key={p.id} pkg={p} index={i} />
          ))}
        </div>

        <div className="mt-24">
          <SectionTitle
            eyebrow="✈ Helicopter VIP"
            title="Sawan Helicopter Packages"
            subtitle="Same‑day, 2‑day & 3‑day exclusive darshan of both Jyotirlingas by chartered helicopter."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heli.map((p, i) => (
              <SawanPackageCard key={p.id} pkg={p} index={i} />
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
    <span
      className="inline-block uppercase tracking-[0.35em] text-xs mb-3 border-b pb-2"
      style={{ color: ORANGE, borderColor: `${ORANGE}55` }}
    >
      {eyebrow}
    </span>
    <h2 className="font-display text-black text-3xl md:text-5xl">{title}</h2>
    <p className="max-w-2xl mx-auto text-gray-600 mt-4">{subtitle}</p>
    <div className="mt-4 flex justify-center gap-2 items-center">
      <span
        className="w-14 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${ORANGE}, transparent)` }}
      />
      <span style={{ color: ORANGE }} className="text-lg">🕉️</span>
      <span
        className="w-14 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${ORANGE}, transparent)` }}
      />
    </div>
  </motion.div>
);

export default SawanPackageGrid;

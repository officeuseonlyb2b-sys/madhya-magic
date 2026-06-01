import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { SawanCampaign } from "@/data/exclusive/sawanData";

interface Props { intro: SawanCampaign["intro"] }

const ExclusiveIntro = ({ intro }: Props) => (
  <section className="relative py-20 md:py-28 bg-white">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]"
      >
        <img
          src={intro.image}
          alt={intro.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <p className="nav-font text-amber-600 uppercase tracking-[0.3em] text-xs mb-4">
          {intro.eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-neutral-900 leading-tight mb-6">
          {intro.title}
        </h2>
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          {intro.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <ul className="grid sm:grid-cols-2 gap-3 mt-8">
          {intro.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-neutral-800">
              <Check size={16} className="mt-0.5 text-amber-600 flex-shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default ExclusiveIntro;

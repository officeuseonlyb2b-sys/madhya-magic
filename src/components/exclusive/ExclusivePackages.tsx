import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Check, ArrowRight } from "lucide-react";
import type { SawanCampaign } from "@/data/exclusive/sawanData";

interface Props { packages: SawanCampaign["packages"] }

const ExclusivePackages = ({ packages }: Props) => (
  <section id="sawan-packages" className="py-20 md:py-28 bg-[#fbf8f3]">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="nav-font text-amber-600 uppercase tracking-[0.3em] text-xs mb-3">
          Curated Itineraries
        </p>
        <h2 className="font-display text-neutral-900 text-3xl md:text-5xl">
          Sawan Special Packages
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-neutral-100 flex flex-col"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute top-4 left-4 bg-amber-400 text-black text-xs font-semibold px-3 py-1.5 rounded-full">
                Sawan Special
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-display text-xl text-neutral-900 mb-2">{pkg.name}</h3>
              <p className="nav-font text-sm text-neutral-500 flex items-center gap-1.5 mb-4">
                <Clock size={14} className="text-amber-600" /> {pkg.duration}
              </p>
              <ul className="space-y-2 mb-5">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-neutral-700">
                    <Check size={14} className="mt-0.5 text-amber-600 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-500">Starting from</p>
                  <p className="font-display text-2xl text-neutral-900">{pkg.price}</p>
                </div>
                <Link
                  to={pkg.ctaHref}
                  className="nav-font inline-flex items-center gap-1.5 bg-neutral-900 text-white px-4 py-2.5 rounded-full text-sm hover:bg-amber-500 hover:text-black transition"
                >
                  {pkg.cta} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExclusivePackages;

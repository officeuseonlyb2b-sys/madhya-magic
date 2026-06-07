import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  MapPin,
  Calendar,
  Check,
  Ban,
  Sparkles,
  IndianRupee,
  Info,
  FileText,
  Plane,
  Train,
  CloudRain,
  MessageCircle,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";
import { sawanPackages } from "../data/packages";
import SawanEnquiryFormModal from "../components/SawanEnquiryFormModal";

const ORANGE = "#FF7A00";

const SawanPackageDetailPage = () => {
  const { id } = useParams();
  const pkg = sawanPackages.find((p) => p.id === id);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  if (!pkg) {
    return <Navigate to="/exclusive/sawan-ujjain" replace />;
  }

  const whatsappHref = `https://wa.me/919109114934?text=${encodeURIComponent(
    `Hi! I'm interested in the "${pkg.name}" Sawan package (${pkg.startingPrice}). Please share more details.`
  )}`;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${pkg.name} | Sawan in Ujjain`}
        description={pkg.description}
        image={pkg.image}
        url={`https://explore-mp-magic.lovable.app/exclusive/sawan-ujjain/package/${pkg.id}`}
        type="website"
      />
      <Navbar />

      {/* Hero Banner - Full screen, no overlay layer */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.img
          src={pkg.image}
          alt={pkg.name}
          loading="eager"
          decoding="async"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
        />
        {/* Removed gradient overlay - no layer above image */}

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-10 md:pb-14">
          <Link
            to="/exclusive/sawan-ujjain"
            className="inline-flex w-fit items-center gap-1.5 text-white text-sm mb-6 hover:text-white/80 transition-colors backdrop-blur-sm bg-black/30 border border-white/20 px-3 py-1.5 rounded-full"
          >
            <ArrowLeft size={16} />
            Back to Sawan in Ujjain
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className="inline-block text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg"
                style={{ backgroundColor: ORANGE }}
              >
                {pkg.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 text-white text-xs font-medium backdrop-blur-md bg-white/15 border border-white/25 px-3 py-1.5 rounded-full">
                <Clock size={13} style={{ color: ORANGE }} />
                {pkg.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 text-white text-xs font-medium backdrop-blur-md bg-white/15 border border-white/25 px-3 py-1.5 rounded-full">
                <Calendar size={13} style={{ color: ORANGE }} />
                {pkg.validity}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-5 leading-[1.1] drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]">
              {pkg.name}
            </h1>
            <p className="text-white/90 text-base md:text-lg max-w-2xl">{pkg.tagline}</p>

            <div className="flex flex-wrap items-center gap-2.5 md:gap-3 mt-5">
              <span className="inline-flex items-center gap-1.5 text-white text-xs md:text-sm font-medium backdrop-blur-md bg-white/15 border border-white/25 px-3.5 py-2 rounded-full">
                <MapPin size={14} style={{ color: ORANGE }} />
                {pkg.route}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rest of the content unchanged */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                <h2 className="text-2xl font-display font-bold text-black mb-4">
                  About This Package
                </h2>
                <p className="text-gray-700 leading-relaxed">{pkg.description}</p>
              </motion.div>

              {/* Highlights */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <h2 className="text-2xl font-display font-bold text-black mb-4 flex items-center gap-2">
                  <Sparkles size={20} style={{ color: ORANGE }} /> Highlights
                </h2>
                <ul className="space-y-3">
                  {pkg.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 bg-white border border-orange-100 rounded-xl p-4 hover:border-orange-300 transition"
                    >
                      <Sparkles size={16} className="mt-1 flex-shrink-0" style={{ color: ORANGE }} />
                      <span className="text-gray-700 text-sm leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Itinerary */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                <h2 className="text-2xl font-display font-bold text-black mb-6 flex items-center gap-2">
                  <Calendar size={20} style={{ color: ORANGE }} /> Day-by-Day Itinerary
                </h2>
                <div className="relative">
                  <div
                    className="absolute left-5 top-2 bottom-2 w-px"
                    style={{ backgroundColor: `${ORANGE}55` }}
                    aria-hidden="true"
                  />
                  <ol className="space-y-8">
                    {pkg.itinerary.map((day, i) => (
                      <li key={i} className="relative pl-16">
                        <span
                          className="absolute left-0 top-0 w-10 h-10 rounded-full text-white text-sm font-bold flex items-center justify-center shadow-md"
                          style={{ backgroundColor: ORANGE }}
                        >
                          {i + 1}
                        </span>
                        <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: ORANGE }}>
                          {day.day}
                        </p>
                        <h3 className="font-display font-bold text-black text-lg mt-0.5 mb-2">
                          {day.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                          {day.body}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>

              {/* Inclusions / Exclusions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <div className="bg-white rounded-2xl p-6 border border-orange-100 shadow-sm">
                  <h3 className="font-display font-bold text-black mb-4 flex items-center gap-2">
                    <Check size={18} style={{ color: ORANGE }} /> What's Included
                  </h3>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check size={16} className="shrink-0 mt-0.5" style={{ color: ORANGE }} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-orange-100 shadow-sm">
                  <h3 className="font-display font-bold text-black mb-4 flex items-center gap-2">
                    <Ban size={18} style={{ color: ORANGE }} /> What's Excluded
                  </h3>
                  <ul className="space-y-2">
                    {pkg.exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <Ban size={16} className="shrink-0 mt-0.5 text-gray-400" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Pricing */}
              {pkg.pricing && pkg.pricing.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                  <h2 className="text-2xl font-display font-bold text-black mb-4 flex items-center gap-2">
                    <IndianRupee size={20} style={{ color: ORANGE }} /> Pricing
                  </h2>
                  <div className="space-y-6">
                    {pkg.pricing.map((tier, idx) => (
                      <div key={idx}>
                        <h5
                          className="text-sm font-semibold mb-2 px-3 py-1 rounded-full inline-block"
                          style={{ backgroundColor: `${ORANGE}15`, color: ORANGE }}
                        >
                          {tier.hotelCategory}
                        </h5>
                        <div className="border border-orange-100 rounded-xl overflow-hidden bg-white">
                          <table className="w-full text-sm">
                            <thead style={{ backgroundColor: `${ORANGE}10`, color: ORANGE }}>
                              <tr className="font-semibold">
                                <th className="p-3 text-left">Vehicle</th>
                                <th className="p-3 text-center">Pax</th>
                                <th className="p-3 text-right">Per Person (₹)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {tier.variants.map((v, i) => (
                                <tr key={i} className="border-t border-orange-100">
                                  <td className="p-3 text-gray-800">{v.vehicle}</td>
                                  <td className="p-3 text-center text-gray-800">{v.pax}</td>
                                  <td className="p-3 text-right font-medium" style={{ color: ORANGE }}>
                                    {v.cost.toLocaleString()}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Facts */}
              {pkg.facts && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <h2 className="text-2xl font-display font-bold text-black mb-4 flex items-center gap-2">
                    <Info size={20} style={{ color: ORANGE }} /> Travel Facts
                  </h2>
                  <div className="bg-white border border-orange-100 rounded-2xl p-5 space-y-3">
                    <Fact icon={<Plane size={16} />} label="Nearest Airport" value={pkg.facts.nearestAirport} />
                    <Fact icon={<Train size={16} />} label="Nearest Railway Station" value={pkg.facts.nearestRailway} />
                    <Fact icon={<CloudRain size={16} />} label="Weather" value={pkg.facts.weather} />
                    <Fact icon={<Info size={16} />} label="Accommodation" value={pkg.facts.accommodation} />
                    <Fact icon={<Info size={16} />} label="Transportation" value={pkg.facts.transportation} />
                  </div>
                </motion.div>
              )}

              {/* Notes */}
              {pkg.notes && pkg.notes.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                  <h2 className="text-2xl font-display font-bold text-black mb-4 flex items-center gap-2">
                    <FileText size={20} style={{ color: ORANGE }} /> Important Notes
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700 bg-white border border-orange-100 rounded-2xl p-5">
                    {pkg.notes.map((note, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="font-bold mt-0.5 select-none" style={{ color: ORANGE }}>•</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Right Column - Pricing Card */}
            <div>
              <div className="sticky top-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="rounded-3xl border border-orange-100 bg-white shadow-xl overflow-hidden"
                >
                  <div className="h-1.5 w-full" style={{ backgroundColor: ORANGE }} />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase"
                        style={{ backgroundColor: `${ORANGE}15`, color: ORANGE }}
                      >
                        {pkg.badge}
                      </span>
                      {pkg.isLuxury && (
                        <span className="rounded-full border border-orange-200 px-3 py-1 text-xs text-gray-700">
                          Premium
                        </span>
                      )}
                    </div>

                    <div className="mb-6">
                      <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Starting from</p>
                      <h2 className="text-4xl font-bold leading-none text-black">{pkg.startingPrice}</h2>
                      <p className="text-sm text-gray-500 mt-2">Per Person</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <InfoTile icon={<Clock />} label="Duration" value={pkg.duration} />
                      <InfoTile icon={<MapPin />} label="Route" value={pkg.route} />
                      <InfoTile icon={<Calendar />} label="Validity" value={pkg.validity} />
                    </div>

                    <div className="space-y-3">
                      <button
                        type="button"
                        onClick={() => setEnquiryOpen(true)}
                        className="flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-base font-semibold text-white transition-all duration-300 hover:opacity-90"
                        style={{ backgroundColor: ORANGE }}
                      >
                        <FileText size={20} />
                        Enquire Now
                      </button>
                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 rounded-2xl border border-orange-200 py-3.5 font-medium text-gray-800 transition-all hover:bg-orange-50"
                        >
                          <MessageCircle size={18} style={{ color: ORANGE }} />
                          WhatsApp
                        </a>
                        <a
                          href="tel:+919109114934"
                          className="flex items-center justify-center gap-2 rounded-2xl border border-orange-200 py-3.5 font-medium text-gray-800 transition-all hover:bg-orange-50"
                        >
                          <Phone size={18} style={{ color: ORANGE }} />
                          Call
                        </a>
                      </div>
                    </div>

                    <div className="mt-5 border-t border-orange-100 pt-4 text-center">
                      <p className="text-xs text-gray-500">Sawan Exclusive • Limited dates</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <SawanEnquiryFormModal
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
      />
    </div>
  );
};

const Fact = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex gap-2 text-sm text-gray-700">
    <span className="flex-shrink-0 mt-0.5" style={{ color: ORANGE }}>{icon}</span>
    <div>
      <span className="font-medium text-black">{label}:</span> {value}
    </div>
  </div>
);

const InfoTile = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-white p-3.5">
    <div
      className="flex h-10 w-10 items-center justify-center rounded-xl flex-shrink-0"
      style={{ backgroundColor: `${ORANGE}15`, color: ORANGE }}
    >
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-[10px] uppercase tracking-wider text-gray-500">{label}</p>
      <p className="text-sm font-semibold text-black leading-snug">{value}</p>
    </div>
  </div>
);

export default SawanPackageDetailPage;
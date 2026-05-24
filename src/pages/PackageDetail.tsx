import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Clock, Check, X as XIcon, ArrowLeft, MapPin, MessageCircle, Phone, Plus, Minus, Sparkles, FileText } from "lucide-react";
import { allPackages } from "@/data/packagesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import GetBestQuoteModal from "@/components/GetBestQuoteModal";
import PackageItineraryCarousel from "@/components/PackageItineraryCarousel";

const PackageDetail = () => {
  const { id } = useParams();
  const pkg = allPackages.find((p) => p.id === id);

  const [customDays, setCustomDays] = useState(pkg?.days ?? 3);
  const [customize, setCustomize] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Package not found.</p>
      </div>
    );
  }

  // Pricing scales linearly with extra nights (~ per-day cost)
  const perDay = Math.round(pkg.price / pkg.days);
  const finalPrice = customize ? perDay * customDays : pkg.price;
  const extraDays = customDays - pkg.days;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img src={pkg.image} alt={pkg.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <Link to="/packages" className="flex items-center gap-1 text-primary-foreground/80 text-sm mb-4 hover:text-primary-foreground transition-colors">
            <ArrowLeft size={16} /> Back to Packages
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block gradient-gold text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md mb-3">
              {pkg.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-2">{pkg.name}</h1>
            <div className="flex items-center gap-4 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-1"><MapPin size={14} /> {pkg.location}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {pkg.duration}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">About This Package</h2>
                <p className="text-muted-foreground leading-relaxed">{pkg.description}</p>
              </motion.div>

              {/* Highlights */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Highlights</h2>
                <div className="flex flex-wrap gap-3">
                  {pkg.highlights.map((h) => (
                    <span key={h} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">{h}</span>
                  ))}
                </div>
              </motion.div>

              {/* Itinerary */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Day-by-Day Itinerary</h2>
                <PackageItineraryCarousel
                  itinerary={pkg.itinerary}
                  fallbackImage={pkg.image}
                  location={pkg.location}
                />
              </motion.div>

              {/* Included / Excluded */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)]">
                  <h3 className="font-display font-bold text-foreground mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    {pkg.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <Check size={16} className="text-secondary shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)]">
                  <h3 className="font-display font-bold text-foreground mb-4">What's Excluded</h3>
                  <ul className="space-y-2">
                    {pkg.excluded.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <XIcon size={16} className="text-destructive shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Pricing Card */}
            <div>
              <div className="sticky top-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-3xl font-bold text-primary">₹{finalPrice.toLocaleString()}</span>
                    {!customize && (
                      <span className="text-muted-foreground line-through text-sm">₹{pkg.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">per person {customize && extraDays !== 0 ? `(${customDays} days)` : ""}</p>
                  {!customize && (
                    <p className="text-sm font-medium text-secondary mb-6">
                      Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
                    </p>
                  )}
                  {customize && extraDays > 0 && (
                    <p className="text-sm font-medium text-primary mb-6">
                      +{extraDays} extra {extraDays === 1 ? "day" : "days"} • +₹{(extraDays * perDay).toLocaleString()}
                    </p>
                  )}

                  <div className="space-y-3 mb-5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="text-foreground font-medium">
                        {customize ? `${customDays} Days / ${customDays - 1} Nights` : pkg.duration}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location</span>
                      <span className="text-foreground font-medium">{pkg.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category</span>
                      <span className="text-foreground font-medium">{pkg.category}</span>
                    </div>
                  </div>


                  <a
                    href={`https://wa.me/919111009498?text=${encodeURIComponent(
                      `Hi! I'm interested in the "${pkg.name}" package${
                        customize && extraDays > 0
                          ? ` customized to ${customDays} days`
                          : ""
                      } (₹${finalPrice.toLocaleString()}). Please share more details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full gradient-gold text-primary-foreground rounded-xl py-3.5 font-semibold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 mb-3"
                  >
                    <MessageCircle size={20} /> Book via WhatsApp
                  </a>
                  <a
                    href="tel:+919111009498"
                    className="w-full border-2 border-primary text-primary rounded-xl py-3 font-semibold transition-transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Phone size={18} /> Call to Book
                  </a>
                  <button
                    type="button"
                    onClick={() => setQuoteOpen(true)}
                    className="mt-3 w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl py-3 font-semibold transition-transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <FileText size={18} /> Get Best Quote
                  </button>
                  <p className="text-xs text-muted-foreground text-center mt-3">Free cancellation up to 48 hours</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <GetBestQuoteModal
        open={quoteOpen}
        onOpenChange={setQuoteOpen}
        packageName={pkg.name}
        duration={customize ? `${customDays} Days / ${customDays - 1} Nights` : pkg.duration}
        destinations={pkg.location}
      />
    </div>
  );
};

export default PackageDetail;

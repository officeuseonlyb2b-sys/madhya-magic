import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Clock, Check, X as XIcon, ArrowLeft, MapPin, MessageCircle, Phone, Plus, Minus, Sparkles, FileText, Tag, Compass, IndianRupee } from "lucide-react";
import { allPackages } from "@/data/packagesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import GetBestQuoteModal from "@/components/GetBestQuoteModal";
import PackageItineraryCarousel from "@/components/PackageItineraryCarousel";
import PackageDestinationsCovered from "@/components/PackageDestinationsCovered";

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
   <section className="relative h-screen w-screen overflow-hidden">
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

{/* OVERLAY */}
<div className="absolute inset-0 bg-black/20" />

<div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-8 md:pb-12">

  {/* BACK BUTTON */}
  <Link
    to="/packages"
    className="inline-flex w-fit items-center gap-1.5 text-white text-sm mb-6 hover:text-white/80 transition-colors backdrop-blur-sm bg-black/20 border border-white/15 px-3 py-1.5 rounded-full"
  >
    <ArrowLeft size={16} />
    Back to Packages
  </Link>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="max-w-3xl"
  >

    {/* CATEGORY + DURATION */}
    <div className="flex flex-wrap items-center gap-3 mb-4">

      {/* CATEGORY */}
      <span className="inline-block gradient-gold text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
        {pkg.category}
      </span>

      {/* DURATION */}
      <span className="inline-flex items-center gap-1.5 text-white text-xs font-medium backdrop-blur-md bg-white/10 border border-white/20 px-3 py-1.5 rounded-full shadow-sm">
        <Clock size={13} className="text-secondary" />
        {pkg.duration}
      </span>

    </div>

    {/* TITLE */}
    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-5 leading-[1.1] drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]">
      {pkg.name}
    </h1>

    {/* LOCATION */}
    <div className="flex flex-wrap items-center gap-2.5 md:gap-3">
      <span className="inline-flex items-center gap-1.5 text-white text-xs md:text-sm font-medium backdrop-blur-md bg-white/10 border border-white/20 px-3.5 py-2 rounded-full shadow-sm">
        <MapPin size={14} className="text-secondary" />
        {pkg.location}
      </span>
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

              {/* Destinations Covered */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Destinations Covered</h2>
                <PackageDestinationsCovered location={pkg.location} fallbackImage={pkg.image} />
              </motion.div>

              {/* Itinerary - simple vertical timeline */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Day-by-Day Itinerary</h2>
                <div className="relative">
                  <div className="absolute left-5 top-2 bottom-2 w-px bg-primary/30" aria-hidden="true" />
                  <ol className="space-y-8">
                    {pkg.itinerary.map((day, i) => (
                      <li key={i} className="relative pl-16">
                        <span className="absolute left-0 top-0 w-10 h-10 rounded-full gradient-gold text-primary-foreground text-sm font-bold flex items-center justify-center shadow-md">
                          D{day.day ?? i + 1}
                        </span>
                        <h3 className="font-display font-bold text-foreground text-lg mb-1.5">{day.title}</h3>
                        {day.description && (
                          <p className="text-muted-foreground leading-relaxed">{day.description}</p>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
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
    className="rounded-3xl border border-border/50 bg-card shadow-xl overflow-hidden"
  >
    {/* Top Accent */}
    <div className="h-1 w-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500" />

    <div className="p-6">
      {/* Tags */}
      <div className="flex items-center justify-between mb-6">
        <span className="rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold tracking-wider uppercase">
          Luxury Escape
        </span>

        <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          Premium Stay
        </span>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-end gap-3">
          <h2 className="text-5xl font-bold leading-none text-foreground">
            ₹{finalPrice.toLocaleString()}
          </h2>

          {!customize && (
            <span className="text-lg text-muted-foreground line-through mb-1">
              ₹{pkg.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mt-3">
          <p className="text-sm text-muted-foreground">
            Per Person
          </p>

          {!customize && (
            <span className="rounded-full bg-green-500/10 text-green-600 px-3 py-1 text-xs font-semibold">
              Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
            </span>
          )}
        </div>
      </div>

      {/* Info Cards */}
      <div className="space-y-4 mb-7">
        <div className="flex items-center gap-4 rounded-2xl border border-border/50 bg-background/40 p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Clock className="h-5 w-5 text-primary" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Duration
            </p>

            <p className="text-base font-semibold text-foreground">
              {customize
                ? `${customDays} Days / ${customDays - 1} Nights`
                : pkg.duration}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-border/50 bg-background/40 p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <MapPin className="h-5 w-5 text-primary" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Destinations
            </p>

            <p className="text-base font-semibold text-foreground leading-relaxed">
              {pkg.location}
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-3">
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
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
        >
          <MessageCircle size={20} />
          Book Luxury Tour
        </a>

        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:+919111009498"
            className="flex items-center justify-center gap-2 rounded-2xl border border-border py-3.5 font-medium transition-all hover:bg-muted/40"
          >
            <Phone size={18} />
            Call
          </a>

          <button
            type="button"
            onClick={() => setQuoteOpen(true)}
            className="flex items-center justify-center gap-2 rounded-2xl border border-primary/20 bg-primary/5 py-3.5 font-medium text-primary transition-all hover:bg-primary/10"
          >
            <FileText size={18} />
            Quote
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 border-t border-border/50 pt-4 text-center">
        <p className="text-xs text-muted-foreground">
          Free cancellation up to 48 hours
        </p>
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

import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin, Calendar, ArrowRight, ArrowLeft, Phone, MessageSquare,
  Users, Clock, Train, Plane, Car, Utensils, Hotel,
} from "lucide-react";
import { destinations, packages as allPackages } from "@/data/destinations";
import { mapDestinations } from "@/data/mapDestinations";
import { getDestinationDetails, getNearbyDestinations } from "@/data/destinationDetails";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import QuoteModal from "@/components/QuoteModal";
import { getBackgroundForCategories } from "@/lib/categoryBackground";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const DestinationDetail = () => {
  const { id } = useParams();
  const [quoteOpen, setQuoteOpen] = useState(false);

  const fullDest = destinations.find((d) => d.id === id);
  const mapDest = mapDestinations.find((d) => d.id === id);

  const dest = fullDest
    ? fullDest
    : mapDest
      ? {
        id: mapDest.id,
        name: mapDest.name,
        image: mapDest.image,
        description: mapDest.description,
        startingPrice: 4999,
        category: mapDest.category as string[],
        bestTime: "October – March",
        overview: mapDest.description,
        attractions: [] as string[],
        related: [] as string[],
      }
      : null;

  const details = useMemo(
    () => (dest ? getDestinationDetails(dest.id, dest.name, dest.image, dest.category) : null),
    [dest],
  );
  const nearby = useMemo(() => (dest ? getNearbyDestinations(dest.id, dest.category) : []), [dest]);

  if (!dest || !details) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Destination not found.</p>
      </div>
    );
  }

  const destPackages = allPackages.filter((p) => p.destination === dest.id);
  const categoryBg = getBackgroundForCategories(dest.category) ??
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80";

  return (
    <div className="min-h-screen relative bg-background">
      {/* Category-based fixed background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('${categoryBg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none bg-black/45" />

      {/* Main content (above background) */}
      <div className="relative z-10">
        <Navbar />

        {/* Hero */}
        <section className="relative h-[60vh] sm:h-[70vh] md:h-[85vh]">
          <img
            src={dest.image}
            alt={dest.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            <Link
              to="/"
              className="flex items-center gap-1 text-white/80 text-sm mb-4 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {dest.category.map((c) => (
                  <span
                    key={c}
                    className="text-xs font-medium bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-2 drop-shadow-lg">
                {dest.name}
              </h1>
              <div className="flex items-center gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> Madhya Pradesh
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> Best: {dest.bestTime}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-14">
                {/* Overview */}
                <motion.div {...fade}>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Overview</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {details.overviewParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="sticky top-24 space-y-6">
                  <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)]">
                    <h3 className="font-display font-bold text-foreground mb-2">Plan Your Visit</h3>
                    <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                    <p className="text-3xl font-bold text-primary mb-4">₹{dest.startingPrice.toLocaleString()}</p>
                    <div className="space-y-2 text-sm text-muted-foreground mb-5 border-t border-b border-border py-3">
                      <div className="flex items-center gap-2"><Clock size={16} className="text-primary" /> Duration: <span className="text-foreground font-medium">{details.duration}</span></div>
                      <div className="flex items-center gap-2"><Users size={16} className="text-primary" /> Suitable for: <span className="text-foreground font-medium">2–6 people</span></div>
                      <div className="flex items-center gap-2"><Calendar size={16} className="text-primary" /> Best: <span className="text-foreground font-medium">{dest.bestTime}</span></div>
                    </div>
                    <button
                      onClick={() => setQuoteOpen(true)}
                      className="w-full gradient-gold text-primary-foreground rounded-xl py-3 font-semibold transition-transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <MessageSquare size={18} /> Get a Quote
                    </button>
                    <a
                      href="tel:+919999999999"
                      className="mt-3 w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl py-3 font-semibold transition-transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Phone size={18} /> Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16">
        {/* Top Attractions */}
        <motion.div {...fade} className="mt-12 md:mt-24 first:mt-0">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            Top Attractions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {details.attractions.map((a, i) => (
              <div
                key={i}
                className="bg-white rounded-[32px] overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative overflow-hidden rounded-b-[24px]">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-5 right-5 w-10 h-10 border-t-2 border-r-2 border-yellow-500 rounded-tr-2xl" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl md:text-[28px] leading-tight font-display font-semibold text-[#1d2746] mb-5">
                    {a.title}
                  </h3>
                  <div className="w-14 h-[3px] bg-yellow-500 rounded-full mx-auto mb-5" />
                  <p className="text-gray-600 leading-8 text-[17px]">
                    {a.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Things to Do */}
        <motion.div {...fade} className="w-full mt-16 md:mt-24">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Things to Do
            </h2>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {details.thingsToDo.map((t, i) => (
              <div
                key={i}
                className="snap-start min-w-[240px] sm:min-w-[260px] bg-card rounded-2xl p-5 border border-border/40 shadow-[var(--shadow-card)] hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl mb-4 flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10">
                    {t.icon}
                  </div>
                  <h3 className="font-display font-semibold text-[18px] text-foreground mb-2 leading-snug">
                    {t.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {t.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experiences / Highlights */}
        <motion.div {...fade} className="mt-16 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Experiences & Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {details.experiences.map((e, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-5"
              >
                <h3 className="font-display font-bold text-foreground mb-1">
                  {e.title}
                </h3>
                <p className="text-sm text-muted-foreground">{e.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Accommodation */}
        <motion.div {...fade} className="mt-16 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <Hotel size={22} /> Where to Stay
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {details.stays.map((s, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-5 shadow-[var(--shadow-card)] hover-lift"
              >
                <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full mb-2">
                  {s.type}
                </span>
                <h3 className="font-display font-bold text-foreground mb-1">
                  {s.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{s.description}</p>
                {s.price && (
                  <p className="text-sm font-semibold text-primary">{s.price}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Food & Local Cuisine */}
        <motion.div {...fade} className="mt-16 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <Utensils size={22} /> Food & Local Cuisine
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {details.food.map((f, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-4 shadow-[var(--shadow-card)] flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center text-primary-foreground text-lg shrink-0">
                  🍽️
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">{f.name}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div {...fade} className="overflow-hidden mt-16 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            Gallery
          </h2>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-6 min-w-max px-1 py-2">
              {details.gallery.map((g, i) => {
                const imageStyles = [
                  "w-[260px] h-[520px]",
                  "w-[340px] h-[220px]",
                  "w-[330px] h-[300px]",
                  "w-[320px] h-[520px]",
                  "w-[300px] h-[230px]",
                ];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`flex-shrink-0 overflow-hidden rounded-none ${imageStyles[i % imageStyles.length]}`}
                  >
                    <img
                      src={g}
                      alt={`${dest.name} ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Travel Info */}
        <motion.div {...fade} className="mt-16 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Travel Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-card rounded-xl p-5 shadow-[var(--shadow-card)] flex gap-4">
              <Calendar className="text-primary shrink-0" size={22} />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Best Time to Visit</h3>
                <p className="text-sm text-muted-foreground">{details.travelInfo.bestTime}</p>
              </div>
            </div>
            <div className="bg-card rounded-xl p-5 shadow-[var(--shadow-card)] flex gap-4">
              <Car className="text-primary shrink-0" size={22} />
              <div>
                <h3 className="font-semibold text-foreground mb-1">By Road</h3>
                <p className="text-sm text-muted-foreground">{details.travelInfo.road}</p>
              </div>
            </div>
            <div className="bg-card rounded-xl p-5 shadow-[var(--shadow-card)] flex gap-4">
              <Train className="text-primary shrink-0" size={22} />
              <div>
                <h3 className="font-semibold text-foreground mb-1">By Rail</h3>
                <p className="text-sm text-muted-foreground">{details.travelInfo.rail}</p>
              </div>
            </div>
            <div className="bg-card rounded-xl p-5 shadow-[var(--shadow-card)] flex gap-4">
              <Plane className="text-primary shrink-0" size={22} />
              <div>
                <h3 className="font-semibold text-foreground mb-1">By Air</h3>
                <p className="text-sm text-muted-foreground">{details.travelInfo.air}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Packages (conditionally rendered) */}
        {destPackages.length > 0 && (
          <motion.div {...fade} className="mt-16 md:mt-24 mb-16 md:mt-24">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Available Packages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {destPackages.map((pkg) => (
                <Link
                  key={pkg.id}
                  to={`/package/${pkg.id}`}
                  className="bg-card rounded-xl p-5 shadow-[var(--shadow-card)] hover-lift block"
                >
                  <h3 className="font-display font-bold text-foreground mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{pkg.duration}</p>
                  <div className="flex items-end gap-2">
                    <span className="text-lg font-bold text-primary">
                      ₹{pkg.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{pkg.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
        </section>

        {/* Nearby Destinations */}
        {nearby.length > 0 && (
          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                Nearby Destinations
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {nearby.map((rd, i) => (
                  <motion.div
                    key={rd.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      to={`/destination/${rd.id}`}
                      className="group block rounded-2xl overflow-hidden bg-card shadow-[var(--shadow-card)] hover-lift"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={rd.image}
                          alt={rd.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-display font-bold text-foreground">{rd.name}</h3>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin size={12} /> {rd.distance} away
                        </p>
                        <span className="flex items-center gap-1 text-sm text-primary mt-2 font-medium group-hover:gap-2 transition-all">
                          Explore <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>

      <FloatingButtons />
      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} destinationName={dest.name} />
    </div>
  );
};

export default DestinationDetail;
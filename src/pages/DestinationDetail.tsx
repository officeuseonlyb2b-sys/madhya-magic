import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, Star, ArrowRight, ArrowLeft } from "lucide-react";
import { destinations, packages as allPackages } from "@/data/destinations";
import { mapDestinations } from "@/data/mapDestinations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const DestinationDetail = () => {
  const { id } = useParams();
  const fullDest = destinations.find((d) => d.id === id);
  const mapDest = mapDestinations.find((d) => d.id === id);

  // Build a unified dest object
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

  if (!dest) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Destination not found.</p>
      </div>
    );
  }

  // Related: use full dest related, or find same-category mapDestinations
  const relatedDests = fullDest
    ? destinations.filter((d) => dest.related.includes(d.id))
    : mapDestinations
        .filter((d) => d.id !== id && d.category.some((c) => dest.category.includes(c)))
        .slice(0, 3)
        .map((d) => ({
          id: d.id,
          name: d.name,
          image: d.image,
          description: d.description,
        }));
  const destPackages = allPackages.filter((p) => p.destination === dest.id);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <Link to="/" className="flex items-center gap-1 text-primary-foreground/80 text-sm mb-4 hover:text-primary-foreground transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap gap-2 mb-3">
              {dest.category.map((c) => (
                <span key={c} className="text-xs font-medium bg-primary/20 text-primary-foreground px-3 py-1 rounded-full backdrop-blur-sm">{c}</span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-2">{dest.name}</h1>
            <div className="flex items-center gap-4 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-1"><MapPin size={14} /> Madhya Pradesh</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> Best: {dest.bestTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{dest.overview}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Top Attractions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dest.attractions.map((a, i) => (
                    <div key={a} className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-[var(--shadow-card)]">
                      <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center text-primary-foreground font-bold text-sm">{i + 1}</div>
                      <span className="text-foreground font-medium">{a}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {destPackages.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Available Packages</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {destPackages.map((pkg) => (
                      <Link key={pkg.id} to={`/package/${pkg.id}`} className="bg-card rounded-xl p-5 shadow-[var(--shadow-card)] hover-lift block">
                        <h3 className="font-display font-bold text-foreground mb-1">{pkg.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{pkg.duration}</p>
                        <div className="flex items-end gap-2">
                          <span className="text-lg font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
                          <span className="text-sm text-muted-foreground line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)]">
                  <h3 className="font-display font-bold text-foreground mb-2">Plan Your Visit</h3>
                  <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                  <p className="text-3xl font-bold text-primary mb-4">₹{dest.startingPrice.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground mb-4">Best time: {dest.bestTime}</p>
                  <button className="w-full gradient-gold text-primary-foreground rounded-xl py-3 font-semibold transition-transform hover:scale-105">
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Destinations */}
      {relatedDests.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">Related Destinations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedDests.map((rd, i) => (
                <motion.div key={rd.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link to={`/destination/${rd.id}`} className="group block rounded-2xl overflow-hidden bg-card shadow-[var(--shadow-card)] hover-lift">
                    <div className="image-zoom aspect-[4/3]">
                      <img src={rd.image} alt={rd.name} loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-bold text-foreground">{rd.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{rd.description}</p>
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
      <FloatingButtons />
    </div>
  );
};

export default DestinationDetail;

import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Phone,
  MessageSquare,
} from "lucide-react";

import { destinations, packages as allPackages } from "@/data/destinations";
import { mapDestinations } from "@/data/mapDestinations";
import {
  getDestinationDetails,
  getNearbyDestinations,
} from "@/data/destinationDetails";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import QuoteModal from "@/components/QuoteModal";
import { getBackgroundForCategories } from "@/lib/categoryBackground";

import DestinationHero from "@/components/destination/DestinationHero";
import TopAttractions from "@/components/destination/TopAttractions";
import DestinationGallery from "@/components/destination/DestinationGallery";
import TravelInfo from "@/components/destination/TravelInfo";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const DestinationDetail = () => {
  const { id } = useParams();

  const [quoteOpen, setQuoteOpen] = useState(false);
  const [expandedButtons, setExpandedButtons] = useState(false);

  // Floating Button Animation
  useEffect(() => {
  const interval = setInterval(() => {
    setExpandedButtons(true);

    const timeout = setTimeout(() => {
      setExpandedButtons(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, 10000);

  return () => clearInterval(interval);
}, []);

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
    () =>
      dest
        ? getDestinationDetails(
            dest.id,
            dest.name,
            dest.image,
            dest.category
          )
        : null,
    [dest]
  );

  const nearby = useMemo(
    () => (dest ? getNearbyDestinations(dest.id, dest.category) : []),
    [dest]
  );

  if (!dest || !details) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">
          Destination not found.
        </p>
      </div>
    );
  }

  const destPackages = allPackages.filter(
    (p) => p.destination === dest.id
  );

  const categoryBg =
    getBackgroundForCategories(dest.category) ??
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80";

  return (
    <div className="min-h-screen relative bg-background overflow-hidden">

      {/* Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('${categoryBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="fixed inset-0 z-0 bg-black/45 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10">

        <Navbar />

        {/* Hero */}
        <DestinationHero
          name={dest.name}
          image={
            (details as { heroImage?: string }).heroImage ??
            dest.image
          }
          categories={dest.category}
          bestTime={dest.bestTime}
        />

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">

            <motion.div
              {...fade}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-6">
                Overview
              </h2>

              <div className="space-y-5 text-white leading-8 text-[17px]">
                {details.overviewParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* Main Sections */}
        <section className="container mx-auto px-4 pb-16">

          {/* Top Attractions */}
          <TopAttractions attractions={details.attractions} />

          {/* Things to Do */}
          <motion.div
            {...fade}
            className="w-full mt-16 md:mt-24"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-black">
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

          {/* Experiences */}
          <motion.div
            {...fade}
            className="mt-16 md:mt-24"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-6">
              Experiences & Highlights
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.experiences.map((e, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-5"
                >
                  <h3 className="font-display font-bold text-white mb-1">
                    {e.title}
                  </h3>

                  <p className="text-sm text-white">
                    {e.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Gallery */}
          <DestinationGallery
            images={details.gallery}
            destinationName={dest.name}
          />

          {/* Travel Info */}
          <TravelInfo info={details.travelInfo} />

          {/* Packages */}
          {destPackages.length > 0 && (
            <motion.div
              {...fade}
              className="mt-16 md:mt-24 mb-16"
            >
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

                    <p className="text-sm text-muted-foreground mb-2">
                      {pkg.duration}
                    </p>

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
                        <h3 className="font-display font-bold text-foreground">
                          {rd.name}
                        </h3>

                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin size={12} />
                          {rd.distance} away
                        </p>

                        <span className="flex items-center gap-1 text-sm text-primary mt-2 font-medium group-hover:gap-2 transition-all">
                          Explore
                          <ArrowRight size={14} />
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

      {/* Floating Action Buttons */}
      <div className="fixed right-4 md:right-6 bottom-32 md:bottom-40 z-50 flex flex-col gap-4">

        {/* Get Quote */}
        <button
          onClick={() => setQuoteOpen(true)}
          className={`
            group flex items-center justify-center
            bg-primary text-primary-foreground
            rounded-full shadow-2xl
            transition-all duration-500 ease-in-out
            hover:scale-110 overflow-hidden
            ${
              expandedButtons
                ? "w-[190px] px-6 py-4 gap-3"
                : "w-14 h-14"
            }
          `}
        >
          <MessageSquare
            size={expandedButtons ? 28 : 22}
            className="shrink-0 transition-all duration-500"
          />

          <span
            className={`
              whitespace-nowrap font-semibold text-sm
              transition-all duration-500
              ${
                expandedButtons
                  ? "opacity-100 max-w-[120px]"
                  : "opacity-0 max-w-0"
              }
            `}
          >
            Get a Quote
          </span>
        </button>

        {/* Enquire Now */}
        <a
          href="tel:+919999999999"
          className={`
            group flex items-center justify-center
            bg-secondary text-secondary-foreground
            rounded-full shadow-2xl
            transition-all duration-500 ease-in-out
            hover:scale-110 overflow-hidden
            ${
              expandedButtons
                ? "w-[190px] px-6 py-4 gap-3"
                : "w-14 h-14"
            }
          `}
        >
          <Phone
            size={expandedButtons ? 28 : 22}
            className="shrink-0 transition-all duration-500"
          />

          <span
            className={`
              whitespace-nowrap font-semibold text-sm
              transition-all duration-500
              ${
                expandedButtons
                  ? "opacity-100 max-w-[120px]"
                  : "opacity-0 max-w-0"
              }
            `}
          >
            Enquire Now
          </span>
        </a>

      </div>

      <FloatingButtons />

      <QuoteModal
        open={quoteOpen}
        onOpenChange={setQuoteOpen}
        destinationName={dest.name}
      />
    </div>
  );
};

export default DestinationDetail;
import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Phone,
  MessageSquare,
} from "lucide-react";

import { destinations } from "@/data/destinations";
import { getRelatedPackagesForDestination } from "@/lib/relatedPackagesForDestination";
import RelatedPackagesStrip from "@/components/RelatedPackagesStrip";
import { mapDestinations } from "@/data/mapDestinations";
import {
  getDestinationDetails,
  getNearbyDestinations,
  getRelatedPackageTagsForDestination,
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

  const relatedPackages = useMemo(
    () =>
      getRelatedPackagesForDestination(
        dest.id,
        dest.name,
        getRelatedPackageTagsForDestination(dest.id)
      ),
    [dest]
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

      <div className="fixed inset-0 z-0 bg-[#ece7df66]/45 pointer-events-none" />

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
      className="
        max-w-5xl
        mx-auto
        bg-white/10
        backdrop-blur-md
        border border-white/10
        rounded-3xl
        p-7 md:p-10
        shadow-2xl
      "
    >
      <div className="mb-7">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-300 font-medium mb-2">
          Explore Destination
        </p>

        <h2
          className="
            text-4xl
            md:text-5xl
            font-serif
            font-bold
            text-white
            leading-tight
          "
        >
          Overview
        </h2>
      </div>

      <div
        className="
          space-y-6
          text-white/150
          leading-8
          md:leading-9
          text-[17px]
          md:text-[18px]
          font-light
          tracking-wide
        "
      >
        {details.overviewParagraphs.map((p, i) => (
          <p
            key={i}
            className="
              border-l-2
              border-amber-300/40
              pl-5
            "
          >
            {p}
          </p>
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
                      <IconFor name={t.icon} size={24} className="text-[#c89b5e]" />
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

        </section>

        {/* Related Packages — auto-matched from the global packages store */}
        {relatedPackages.length > 0 && (
          <div className="container mx-auto px-4">
            <RelatedPackagesStrip
              packages={relatedPackages}
              title={`Related Packages in ${dest.name}`}
              subtitle="Hand-picked tours that include this destination"
            />
          </div>
        )}


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
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, Mountain, ChevronRight, Phone, MessageCircle, Mail, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { activitiesData, type ActivityCategory } from "@/data/activitiesData";

import actSafari from "@/assets/act-safari.jpg";
import actBalloon from "@/assets/act-balloon.jpg";
import actTrekking from "@/assets/act-trekking.jpg";
import actRafting from "@/assets/act-rafting.jpg";
import actCamping from "@/assets/act-camping.jpg";

const heroSlides = [
  { src: actSafari, alt: "Jungle Safari" },
  { src: actBalloon, alt: "Hot Air Balloon" },
  { src: actTrekking, alt: "Trekking" },
  { src: actRafting, alt: "River Rafting" },
  { src: actCamping, alt: "Camping" },
];

const filterTabs: ActivityCategory[] = ["All", "Wildlife", "Adventure", "Nature", "Heritage"];

const Activities = () => {
  const [activeFilter, setActiveFilter] = useState<ActivityCategory>("All");
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setHeroIndex((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const filtered = useMemo(
    () => activeFilter === "All" ? activitiesData : activitiesData.filter((a) => a.category === activeFilter),
    [activeFilter]
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[85vh] md:h-[90vh] overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={heroIndex}
            src={heroSlides[heroIndex].src}
            alt={heroSlides[heroIndex].alt}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.2 }, scale: { duration: 8 } }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight"
          >
            <span className="block text-white/90">Explore</span>
            <span className="text-white">
              Activities
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mt-6 font-body"
          >
            Discover unforgettable adventures across Madhya Pradesh — Wildlife, Heritage, Nature & Cultural Experiences
          </motion.p>

          <div className="flex justify-center gap-2 mt-10">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === heroIndex ? "w-10 bg-amber-400 shadow-[0_0_12px_#fbbf24]" : "w-3 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">Adventure</span>
            </h2>
            <p className="text-white/60 font-body max-w-xl mx-auto">
              From thrilling safaris to serene nature walks — find the perfect activity for your journey.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === tab
                    ? "bg-amber-400 text-black border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                    : "border-white/20 text-white/70 hover:border-white/40 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((activity, i) => (
                <motion.div
                  key={activity.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={`/activities/${activity.id}`} className="group block">
                    <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-amber-400/30 transition-all duration-500">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={activity.image}
                          alt={activity.name}
                          loading="lazy"
                          width={1280}
                          height={832}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" decoding="async" />
                        
                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs bg-amber-400/90 text-black font-semibold">
                          {activity.category}
                        </span>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-display font-bold">{activity.name}</h3>
                        </div>
                      </div>

                      <div className="p-5">
                        <p className="text-white/60 text-sm font-body mb-4 line-clamp-2">
                          {activity.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {activity.locations.slice(0, 3).map((loc) => (
                            <span key={loc} className="flex items-center gap-1 text-xs text-white/50 bg-white/5 px-2.5 py-1 rounded-full">
                              <MapPin size={10} /> {loc}
                            </span>
                          ))}
                          {activity.locations.length > 3 && (
                            <span className="text-xs text-amber-400/80 px-2.5 py-1">
                              +{activity.locations.length - 3} more
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex gap-4 text-xs text-white/50">
                            <span className="flex items-center gap-1"><Clock size={12} /> {activity.duration}</span>
                            <span className="flex items-center gap-1"><Mountain size={12} /> {activity.difficulty}</span>
                          </div>
                          <span className="flex items-center gap-1 text-amber-400 text-sm font-medium group-hover:gap-2 transition-all">
                            Details <ChevronRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <img src={actSafari} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Ready For Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">Adventure?</span>
            </h2>
            <p className="text-white/60 font-body mb-10">
              Let us curate the perfect adventure experience for you. Get in touch with our travel experts today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-colors"
              >
                Book Now <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/packages"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                View Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;

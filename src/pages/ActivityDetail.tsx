import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MapPin, Clock, Mountain, Calendar, Check, ChevronLeft, ArrowRight, Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { activitiesData } from "@/data/activitiesData";
import { activityGallery } from "@/data/activityGallery";
import ActivityGallery from "@/components/ActivityGallery";
import RelatedPackagesStrip from "@/components/RelatedPackagesStrip";
import { getRelatedPackagesForActivity } from "@/lib/relatedPackages";

const ActivityDetail = () => {
  const { id } = useParams();
  const activity = activitiesData.find((a) => a.id === id);

  const moreScrollRef = useRef<HTMLDivElement>(null);
  const [morePaused, setMorePaused] = useState(false);

  const moreActivities = activity
    ? activitiesData.filter((a) => a.id !== activity.id)
    : [];
  const loopedMore =
    moreActivities.length >= 3 ? [...moreActivities, ...moreActivities] : moreActivities;

  useEffect(() => {
    const el = moreScrollRef.current;
    if (!el || moreActivities.length === 0) return;
    const interval = setInterval(() => {
      if (morePaused) return;
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) el.scrollLeft = 0;
    }, 25);
    return () => clearInterval(interval);
  }, [moreActivities.length, morePaused]);

  if (!activity) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Activity Not Found</h1>
          <Link to="/activities" className="text-amber-400 hover:underline">← Back to Activities</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8 }}
          src={activity.image}
          alt={activity.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        

        <div className="relative z-10 h-full flex flex-col justify-end pb-12 container mx-auto px-4 max-w-[1400px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/activities" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-4 text-sm transition-colors">
              <ChevronLeft size={16} /> Back to Activities
            </Link>
            <span className="inline-block px-3 py-1 rounded-full text-xs bg-amber-400/90 text-black font-semibold mb-3">
              {activity.category}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold">{activity.name}</h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {[
                  { icon: Clock, label: "Duration", value: activity.duration },
                  { icon: Mountain, label: "Difficulty", value: activity.difficulty },
                  { icon: Calendar, label: "Best Time", value: activity.bestTime },
                  { icon: MapPin, label: "Locations", value: `${activity.locations.length} Places` },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <item.icon className="mx-auto mb-2 text-amber-400" size={20} />
                    <p className="text-xs text-white/50">{item.label}</p>
                    <p className="text-sm font-semibold">{item.value}</p>
                  </div>
                ))}
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-2xl font-display font-bold mb-4">About This Activity</h2>
                <p className="text-white/70 font-body leading-relaxed text-lg">{activity.description}</p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-display font-bold mb-6">Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {activity.highlights.map((h, i) => (
                    <motion.div
                      key={h}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                    >
                      <Check className="text-amber-400 shrink-0" size={16} />
                      <span className="text-white/80 text-sm">{h}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Locations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-display font-bold mb-6">Locations</h2>
                <div className="flex flex-wrap gap-3">
                  {activity.locations.map((loc) => (
                    <span
                      key={loc}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white/80 hover:border-amber-400/30 transition-colors"
                    >
                      <MapPin size={14} className="text-amber-400" /> {loc}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              <ActivityGallery
                images={activityGallery[activity.id] || []}
                activityName={activity.name}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-28 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6"
              >
                <h3 className="text-xl font-display font-bold">Book This Activity</h3>
                <p className="text-white/60 text-sm font-body">
                  Interested in this experience? Contact our travel experts for personalized pricing and scheduling.
                </p>

                <div className="space-y-3">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold transition-colors"
                  >
                    <MessageCircle size={18} /> WhatsApp
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold transition-colors"
                  >
                    <Phone size={18} /> Call Now
                  </a>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 font-semibold transition-colors"
                  >
                    Send Inquiry <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs text-white/40 text-center">
                    Custom packages available for groups
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Packages */}
      <RelatedPackagesStrip
        packages={getRelatedPackagesForActivity(activity, 3)}
        title={`Tour Packages featuring ${activity.name}`}
        subtitle="Book a complete tour that includes this activity"
        theme="dark"
      />

      {/* More Activities */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <h2 className="text-2xl font-display font-bold mb-8">More Activities</h2>
          <div
            ref={moreScrollRef}
            onMouseEnter={() => setMorePaused(true)}
            onMouseLeave={() => setMorePaused(false)}
            onTouchStart={() => setMorePaused(true)}
            onTouchEnd={() => setMorePaused(false)}
            className="flex gap-5 overflow-x-auto pb-3 scrollbar-hide scroll-smooth"
          >
            {loopedMore.map((a, i) => (
              <Link
                key={`${a.id}-${i}`}
                to={`/activities/${a.id}`}
                className="group flex-shrink-0 w-[260px] sm:w-[300px]"
              >
                <div className="relative rounded-xl overflow-hidden h-48">
                  <img
                    src={a.image}
                    alt={a.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" decoding="async" />
                  
                  <div className="absolute bottom-3 left-3">
                    <p className="text-sm font-display font-bold">{a.name}</p>
                    <p className="text-xs text-white/60">{a.locations[0]}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ActivityDetail;

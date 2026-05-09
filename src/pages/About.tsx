import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Users, Award, MapPin, Heart, Phone, CheckCircle, Calendar, CreditCard, Compass, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const About = () => {
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true });
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true });
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true });
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section – "Say Yes! To New Adventure" */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-foreground via-foreground/95 to-primary/20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold-500/30 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-widest bg-white/10 px-4 py-1 rounded-full inline-block backdrop-blur-sm">
              Since 2012
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mt-5 mb-4 leading-tight">
              Say <span className="text-gradient-gold">Yes!</span>
              <br />
              To New Adventure
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Travilla is a multi-award-winning strategy and content creation agency that specializes in travel marketing. 
              We have one of the world’s largest online travel communities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-primary to-gold-500 text-primary-foreground font-semibold rounded-full shadow-lg shadow-primary/30"
            >
              Explore Now →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section – from images (3600+ Happy Traveler, 2.5K Tours success, 25+ Experience, Awards Winning) */}
      <section className="py-12 bg-background -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Users, label: "Happy Traveler", value: "3600+", suffix: "" },
              { icon: MapPin, label: "Tours success", value: "2.5K", suffix: "+" },
              { icon: Award, label: "Our Experience", value: "25", suffix: "+" },
              { icon: Heart, label: "Awards Winning", value: "15", suffix: "+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center shadow-[var(--shadow-card)] border border-border/20 hover:border-primary/30 transition-all"
              >
                <stat.icon size={28} className="text-primary mx-auto mb-2" />
                <p className="text-3xl font-display font-bold text-foreground">{stat.value}{stat.suffix}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Guide + Mission & Vision (from image1) */}
      <section ref={missionRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Trusted travel guide banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            className="bg-gradient-to-r from-primary/10 to-gold-500/10 rounded-2xl p-6 mb-12 text-center border border-primary/20"
          >
            <h3 className="text-2xl font-display font-bold text-foreground">✈️ Trusted travel guide</h3>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Provides reliable information to help travelers plan their trips efficiently and safely.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: Target, 
                title: "Our Mission", 
                text: "To make every destination accessible to every traveler by offering personalized, affordable, and memorable travel experiences that showcase incredible heritage, wildlife, and natural beauty. We aim to connect people to positive experiences through travel, helping them see the world differently." 
              },
              { 
                icon: Eye, 
                title: "Our Vision", 
                text: "To become the world's leading regional tourism platform, setting the gold standard for curated travel experiences and sustainable tourism practices that benefit local communities while delivering joy and discovery." 
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border/20"
              >
                <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center mb-5 shadow-[var(--shadow-glow)]">
                  <item.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We offer Best Services (from image3) */}
      <section ref={servicesRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Premium Services</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2">We offer Best Services</h2>
            <div className="section-divider mt-4" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Compass, title: "Exclusive Trip", desc: "We pay attention to every quality in the service we provide to you. Handcrafted journeys just for you." },
              { icon: Calendar, title: "Easy Booking", desc: "Booking process and full support service assistance from us. Simple, fast, and secure." },
              { icon: Star, title: "Professional Guide", desc: "While on vacation you will be guided by our professional guide who knows every hidden gem." },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-2xl p-6 text-center shadow-[var(--shadow-card)] border border-border/20"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Easy Steps + 48% OFF (from image4) */}
      <section ref={stepsRef} className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={stepsInView ? { opacity: 1, x: 0 } : {}}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Simple Process</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
                3 Easy Steps for <br />Book Your Next Trip
              </h2>
              <div className="space-y-6 mt-8">
                {[
                  { step: "1", title: "Choose Destination", icon: MapPin, desc: "First, select your preferred destination and proceed further." },
                  { step: "2", title: "Make Payment", icon: CreditCard, desc: "We pay attention to every quality in the service we provide to you." },
                  { step: "3", title: "Ready For Travelling", icon: Heart, desc: "We pay attention to every quality in the service we provide to you." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center font-bold text-primary-foreground shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={stepsInView ? { opacity: 1, x: 0 } : {}}
              className="bg-gradient-to-br from-primary/20 to-gold-500/20 rounded-2xl p-8 text-center border-2 border-dashed border-primary/40 backdrop-blur-sm"
            >
              <p className="text-sm uppercase tracking-wider text-primary font-semibold">Limited Time Deal</p>
              <p className="text-6xl md:text-7xl font-display font-bold text-primary mt-2">48% OFF</p>
              <p className="text-muted-foreground mt-2">on your first booking</p>
              <button className="mt-6 px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition">Get Special Offer →</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us + 24hrs Call (from image5) */}
      <section ref={whyRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={whyInView ? { opacity: 1, y: 0 } : {}}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why Travilla</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">Why Choose Us!</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: CheckCircle, text: "Perfect Detailing" },
                  { icon: Users, text: "Free Consultations" },
                  { icon: Award, text: "Save Your Budget" },
                  { icon: Heart, text: "Completed Certification" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-card p-3 rounded-xl shadow-sm">
                    <item.icon size={20} className="text-primary" />
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border-l-4 border-primary">
                <div className="flex items-center gap-3">
                  <Phone size={28} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">24 HOURS SERVICE</p>
                    <p className="text-2xl font-display font-bold text-foreground">206-242-1112</p>
                  </div>
                </div>
                <button className="mt-4 text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Discover More <span>→</span>
                </button>
              </div>
            </motion.div>

            {/* Testimonial from image6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-card to-muted/30 rounded-2xl p-8 shadow-xl border border-border/30"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-primary font-semibold tracking-wider">TESTIMONIAL</span>
                <div className="flex text-gold-500">★★★★★</div>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">Our Client Says!</h3>
              <p className="text-muted-foreground italic mb-6">
                "Travel bug bites, there is no known antidote, and I know that I shall be happily infected until the end of my life. A journey is best measured in friends."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl">😊</div>
                <div>
                  <p className="font-bold text-foreground">Antonio</p>
                  <p className="text-xs text-muted-foreground">Tourist</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA – Adventure / Booking Now (from image7) */}
      <section className="py-24 bg-gradient-to-r from-primary/90 to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gold-500/30 blur-3xl" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-4"
          >
            Adventure <br />
            IT'S TIME TO TRAVEL
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 px-10 py-4 bg-white text-primary font-bold rounded-full shadow-xl hover:bg-gold-50 transition text-lg"
          >
            Booking Now
          </motion.button>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default About;
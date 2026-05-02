import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Users, Award, MapPin, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const team = [
  { name: "Arjun Patel", role: "Founder & CEO", emoji: "👨‍💼" },
  { name: "Meera Sharma", role: "Head of Operations", emoji: "👩‍💼" },
  { name: "Rohan Verma", role: "Lead Travel Curator", emoji: "🧑‍💻" },
  { name: "Priya Joshi", role: "Customer Experience", emoji: "👩‍🎨" },
];

const About = () => {
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true });
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mt-3 mb-6">
              Crafting Unforgettable <span className="text-gradient-gold">Journeys</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              With over a decade of expertise, we're Madhya Pradesh's most trusted travel partner. We believe every journey should tell a story worth remembering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: MapPin, label: "Destinations", value: "50+" },
              { icon: Users, label: "Happy Travelers", value: "10,000+" },
              { icon: Award, label: "Awards Won", value: "15+" },
              { icon: Heart, label: "Years of Love", value: "10+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center shadow-[var(--shadow-card)] border border-border/20"
              >
                <stat.icon size={24} className="text-primary mx-auto mb-2" />
                <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: "Our Mission", text: "To make Madhya Pradesh accessible to every traveler by offering personalized, affordable, and memorable travel experiences that showcase the state's incredible heritage, wildlife, and natural beauty." },
              { icon: Eye, title: "Our Vision", text: "To become India's leading regional tourism platform, setting the gold standard for curated travel experiences and sustainable tourism practices that benefit local communities." },
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

      {/* Team */}
      <section ref={teamRef} className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-14"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Team</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2">Meet the Experts</h2>
            <div className="section-divider mt-4" />
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-2xl p-6 text-center shadow-[var(--shadow-card)] border border-border/20"
              >
                <div className="text-5xl mb-4">{member.emoji}</div>
                <h3 className="font-display font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default About;

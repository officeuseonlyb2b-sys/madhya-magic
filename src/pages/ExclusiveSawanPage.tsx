import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SpiritualBackground from "@/components/spiritual/SpiritualBackground";
import {
  ExclusiveHero,
  ExclusiveIntro,
  ExclusiveReels,
  ExclusivePackages,
} from "@/components/exclusive";
import { sawanCampaign } from "@/data/exclusive/sawanData";

const ExclusiveSawanPage = () => {
  const c = sawanCampaign;
  const canonicalUrl = `https://explore-mp-magic.lovable.app${c.seo.canonical}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: c.seo.title,
    description: c.seo.description,
    image: c.seo.image,
    location: {
      "@type": "Place",
      name: "Ujjain, Madhya Pradesh, India",
      address: "Ujjain, Madhya Pradesh, India",
    },
    organizer: {
      "@type": "Organization",
      name: "Enchanting Madhya Pradesh",
      url: "https://explore-mp-magic.lovable.app",
    },
  };

  return (
    <div className="min-h-screen bg-[#FFFBF3] relative">
      <SEO
        title={c.seo.title}
        description={c.seo.description}
        image={c.seo.image}
        url={canonicalUrl}
        type="website"
        jsonLd={jsonLd}
      />

      <Navbar />

      {/* Decorative spiritual background — sits behind all main content */}
      <div className="absolute inset-x-0 top-0 h-full overflow-hidden pointer-events-none">
        <SpiritualBackground />
      </div>

      <main className="relative z-[1]">
        <ExclusiveHero hero={c.hero} />
        <ExclusiveIntro intro={c.intro} />
        <ExclusiveReels reels={c.reels} />
        <ExclusivePackages packages={c.packages} />

        {/* Why Book With Us — saffron/cream */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#FFEFD5] via-[#FFF7EC] to-[#FFEFD5] text-[#3a1d05]">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <p className="nav-font text-[#b8651a] uppercase tracking-[0.3em] text-xs mb-3">
                ॐ The Promise
              </p>
              <h2 className="font-display text-3xl md:text-5xl">Why Book With Us</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.whyBookWithUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="bg-white border border-[#d4a017]/25 rounded-2xl p-6 hover:border-[#ff9933]/60 hover:shadow-xl hover:shadow-[#ff9933]/10 transition"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-display text-xl mb-2">{item.title}</h3>
                  <p className="text-[#5a3a1a]/85 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <img
            src={c.hero.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3a1d05]/90 via-[#7a3a0a]/70 to-[#3a1d05]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,176,80,0.18),transparent_60%)]" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10 container mx-auto px-6 text-center text-white"
          >
            <h2 className="font-display text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
              {c.cta.title}
            </h2>
            <p className="text-[#FFE6B8] mt-4 max-w-xl mx-auto">{c.cta.subtitle}</p>
            <Link
              to={c.cta.buttonHref}
              className="nav-font inline-block mt-8 bg-gradient-to-r from-[#ff9933] to-[#d4a017] text-white px-9 py-4 rounded-full font-semibold hover:from-[#ffae5a] hover:to-[#e6b526] transition shadow-lg shadow-[#ff9933]/30"
            >
              {c.cta.buttonLabel}
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ExclusiveSawanPage;

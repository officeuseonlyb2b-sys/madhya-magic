import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
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
    <div className="min-h-screen bg-white">
      <SEO
        title={c.seo.title}
        description={c.seo.description}
        image={c.seo.image}
        url={canonicalUrl}
        type="website"
        jsonLd={jsonLd}
      />

      <Navbar />

      <main>
        <ExclusiveHero hero={c.hero} />
        <ExclusiveIntro intro={c.intro} />
        <ExclusiveReels reels={c.reels} />
        <ExclusivePackages packages={c.packages} />

        {/* Why Book With Us */}
        <section className="py-20 md:py-28 bg-neutral-950 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <p className="nav-font text-amber-400 uppercase tracking-[0.3em] text-xs mb-3">
                The Promise
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
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-display text-xl mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85" />
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
            <p className="text-white/80 mt-4 max-w-xl mx-auto">{c.cta.subtitle}</p>
            <Link
              to={c.cta.buttonHref}
              className="nav-font inline-block mt-8 bg-amber-400 text-black px-9 py-4 rounded-full font-semibold hover:bg-amber-300 transition shadow-lg shadow-amber-500/20"
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

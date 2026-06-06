import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TrustedBrandsSection from "@/components/TrustedBrandsSection";
import WhychooseUs from "@/components/exclusive/WhychooseUs";
import {
  ExclusiveHero,
  ExclusiveIntro,
  ExclusiveReels,
} from "@/components/exclusive";
import { sawanCampaign } from "@/data/exclusive/sawanData";
import { SawanPackageGrid } from "@/features/sawan-packages";

// ✅ Your existing image – confirmed to exist
import formBackgroundImg from "@/assets/shravan/formbackgroundimg.jpeg";


const ORANGE = "#FF7A00";

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
    <div className="min-h-screen bg-white relative">
      <SEO
        title={c.seo.title}
        description={c.seo.description}
        image={c.seo.image}
        url={canonicalUrl}
        type="website"
        jsonLd={jsonLd}
      />

      <Navbar />

      <main className="relative z-[1]">
        <ExclusiveHero hero={c.hero} />
        <ExclusiveIntro intro={c.intro} />
        <ExclusiveReels reels={c.reels} />

        {/* Sawan Special Packages */}
        <SawanPackageGrid />

        {/* Why Choose Us (from Home) */}
        <WhychooseUs />

        {/* Brands That Trust Us (from Home) */}
        <TrustedBrandsSection />
        

        {/* CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* ✅ Using your imported formBackgroundImg */}
          <img
            src={formBackgroundImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/85" />
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
            <p className="text-white/85 mt-4 max-w-xl mx-auto">{c.cta.subtitle}</p>
            <Link
              to={c.cta.buttonHref}
              className="inline-block mt-8 text-white px-9 py-4 rounded-full font-semibold transition shadow-lg hover:opacity-90"
              style={{ backgroundColor: ORANGE, boxShadow: `0 10px 30px ${ORANGE}40` }}
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

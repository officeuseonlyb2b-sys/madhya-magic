import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SawanHero from "../components/SawanHero";
import SawanPackageGrid from "../components/SawanPackageGrid";
import SawanPackageModal from "../components/SawanPackageModal";
import SawanEnquiryFormModal from "../components/SawanEnquiryFormModal";
import SawanFloatingCTA from "../components/SawanFloatingCTA";
import { sawanHeroImage } from "../data/packages";
import type { SawanPackage } from "../types";

const SawanPackagesPage = () => {
  const [selected, setSelected] = useState<SawanPackage | null>(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryPkgId, setEnquiryPkgId] = useState<string | null>(null);

  const openEnquiry = (pkg?: SawanPackage) => {
    setEnquiryPkgId(pkg?.id ?? null);
    setEnquiryOpen(true);
  };

  const seoJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Sawan Special Packages — Ujjain & Omkareshwar",
    description:
      "Hotel and helicopter VIP pilgrimage packages for the holy month of Sawan covering Mahakaleshwar and Omkareshwar Jyotirlingas.",
    image: sawanHeroImage,
    touristType: ["Spiritual Tourism", "Pilgrimage"],
  };

  return (
    <div className="min-h-screen bg-[#FFFBF3] relative overflow-x-hidden">
      <SEO
        title="Sawan Special Packages | Mahakal & Omkareshwar Pilgrimage – Hotel & Helicopter"
        description="Luxury Sawan pilgrimage to Ujjain & Omkareshwar — hotel and helicopter packages with VVIP Bhasma Aarti, Jyotirlinga darshan and premium stays."
        image={sawanHeroImage}
        url="https://explore-mp-magic.lovable.app/exclusive/sawan-special-packages"
        type="website"
        jsonLd={seoJsonLd}
      />

      <Navbar />

      <main className="relative z-[1]">
        <SawanHero onOpenEnquiry={() => openEnquiry()} />
        <SawanPackageGrid onOpen={setSelected} />
      </main>

      <Footer />

      <SawanFloatingCTA onClick={() => openEnquiry()} />

      <SawanPackageModal
        pkg={selected}
        onClose={() => setSelected(null)}
        onEnquire={(pkg) => {
          setSelected(null);
          openEnquiry(pkg);
        }}
      />

      <SawanEnquiryFormModal
        open={enquiryOpen}
        initialPackageId={enquiryPkgId}
        onClose={() => setEnquiryOpen(false)}
      />
    </div>
  );
};

export default SawanPackagesPage;

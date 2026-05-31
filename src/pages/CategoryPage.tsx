import { useLocation, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";
import HeroCarousel from "@/components/category/HeroCarousel";
import SpiritualHero from "@/components/category/SpiritualHero";
import DestinationPillars from "@/components/category/DestinationPillars";
import ActivitiesReelsSection from "@/components/ActivitiesReelsSection";
import ReelsSection from "@/components/ReelsSection";
import CategoryReelsExperiences from "@/components/category/CategoryReelsExperiences";
import PackagesSection from "@/components/PackagesSection";
import { categoryPages } from "@/data/categoryPagesData";
import { mapDestinations, type MapCategory } from "@/data/mapDestinations";
import { FilterProvider } from "@/contexts/FilterContext";
import natureHero from "@/assets/explore/nature-hero.jpg";
import heritageHero from "@/assets/explore/heritage-hero.jpg";
import wildlifeHero from "@/assets/explore/wildlife-hero.png";
import CategoryCustomPackage, { type CategoryKey } from "@/components/category/CategoryCustomPackage";
import { getCategoryBackground } from "@/lib/categoryBackground";


const heroImageMap: Record<string, string> = {
  nature: natureHero,
  heritage: heritageHero,
  wildlife: wildlifeHero,
};

const CategoryPage = () => {
  const location = useLocation();
  const category = location.pathname.replace("/", "");
  const data = categoryPages[category];

  if (!data) return <Navigate to="/" replace />;

  const categoryTitle = data.title; // "Nature" | "Heritage" | "Spiritual" | "Wildlife"

  // Filter map destinations by category
  const filteredDestinations = mapDestinations.filter((d) =>
    d.category.some((c) => c.toLowerCase() === categoryTitle.toLowerCase())
  );

  const categoryBg = getCategoryBackground(data.slug);

  return (
    <div className="min-h-screen bg-background relative">
      {categoryBg && (
        <>
          <div
            aria-hidden
            className="fixed inset-0 -z-10 pointer-events-none bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${categoryBg})` }}
          />
          <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none bg-black/40" />
        </>
      )}
      <Navbar />
      {data.slug === "spiritual" ? (
        <SpiritualHero />
      ) : (
        <HeroCarousel images={data.heroImages} title={data.title} staticImage={heroImageMap[data.slug]} />
      )}
      <DestinationPillars destinations={filteredDestinations} categorySlug={data.slug} />

      {/* Home-page–style sections, scoped to this category via FilterProvider */}
      <FilterProvider initialFilters={[categoryTitle as MapCategory]}>
        <ReelsSection />
        {/* <ActivitiesReelsSection /> */}
        <CategoryReelsExperiences />
        <PackagesSection />
        <CategoryCustomPackage category={categoryTitle as CategoryKey} />
      </FilterProvider>
      


      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default CategoryPage;

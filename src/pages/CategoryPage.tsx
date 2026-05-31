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

  const seoMap: Record<string, { title: string; description: string }> = {
    nature: {
      title: "Nature Tourism in Madhya Pradesh | Hills, Waterfalls & Scenic Escapes",
      description: "Discover nature tourism in Madhya Pradesh — Pachmarhi, Bhedaghat, Tamia, Tawa, Hanuwantiya and Parsili. Curated MP nature tour packages with Enchanting MP.",
    },
    heritage: {
      title: "Heritage Tourism in Madhya Pradesh | Khajuraho, Orchha, Sanchi & Mandu",
      description: "Explore heritage tourism in Madhya Pradesh — UNESCO temples of Khajuraho & Sanchi, Orchha palaces, Gwalior Fort, Mandu and Maheshwar with curated MP tour packages.",
    },
    spiritual: {
      title: "Spiritual Tourism in Madhya Pradesh | Ujjain, Omkareshwar & Maihar",
      description: "Plan spiritual tourism in Madhya Pradesh — Mahakaleshwar Jyotirlinga, Omkareshwar, Chitrakoot, Amarkantak and Maihar. Curated MP pilgrimage tour packages.",
    },
    wildlife: {
      title: "Wildlife Tourism in Madhya Pradesh | Kanha, Bandhavgarh, Pench & Satpura Safaris",
      description: "Book wildlife tourism in Madhya Pradesh — Kanha, Bandhavgarh, Pench, Satpura, Panna and Kuno tiger safaris and jungle lodges with Enchanting MP.",
    },
  };
  const seo = seoMap[data.slug] ?? {
    title: `${categoryTitle} Tourism in Madhya Pradesh | MP Tour Packages`,
    description: `Explore ${categoryTitle.toLowerCase()} tourism in Madhya Pradesh with curated tour packages from Enchanting MP.`,
  };
  const canonical = `https://enchantingmadhyapradesh.com/${data.slug}`;

  return (
    <div className="min-h-screen bg-background relative">
      <SEO
        title={seo.title}
        description={seo.description}
        url={canonical}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://enchantingmadhyapradesh.com/" },
            { "@type": "ListItem", position: 2, name: categoryTitle, item: canonical },
          ],
        }}
      />
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

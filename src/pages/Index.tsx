import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InteractiveMapSection from "@/components/InteractiveMapSection";
import KnowMPSection from "@/components/KnowMPSection";
import ReelsSection from "@/components/ReelsSection";
import ActivitiesReelsSection from "@/components/ActivitiesReelsSection";
import ExperiencesReelsSection from "@/components/ExperiencesReelsSection";
import PackagesSection from "@/components/PackagesSection";
import HomeCategoryShowcase from "@/components/HomeCategoryShowcase";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import ReasonsToExploreMP from "@/components/ReasonsToExploreMP";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { FilterProvider } from "@/contexts/FilterContext";

const Index = () => (
  <FilterProvider>
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <KnowMPSection />
      <InteractiveMapSection />
      <ReelsSection />
      <ActivitiesReelsSection />
      <ExperiencesReelsSection />
      <PackagesSection />
      <HomeCategoryShowcase />
      <ReasonsToExploreMP />
      <StatsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
      <FloatingButtons />
    </div>
  </FilterProvider>
);

export default Index;
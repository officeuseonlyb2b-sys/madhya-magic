import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import KnowMPSection from "@/components/KnowMPSection";
import { FilterProvider } from "@/contexts/FilterContext";
import FloatingButtons from "@/components/FloatingButtons";

// Lazy-load below-the-fold sections to reduce initial JS, improve LCP/TBT.
const InteractiveMapSection = lazy(() => import("@/components/InteractiveMapSection"));
const ReelsSection = lazy(() => import("@/components/ReelsSection"));
const ActivitiesReelsSection = lazy(() => import("@/components/ActivitiesReelsSection"));
const ExperiencesReelsSection = lazy(() => import("@/components/ExperiencesReelsSection"));
const PackagesSection = lazy(() => import("@/components/PackagesSection"));
const HomeCategoryShowcase = lazy(() => import("@/components/HomeCategoryShowcase"));
const ReasonsToExploreMP = lazy(() => import("@/components/ReasonsToExploreMP"));
const StatsSection = lazy(() => import("@/components/StatsSection"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const NewsletterSection = lazy(() => import("@/components/NewsletterSection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => (
  <div className="min-h-[40vh] flex items-center justify-center">
    <div className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
  </div>
);

const Index = () => (
  <FilterProvider>
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <KnowMPSection />
      <Suspense fallback={<SectionFallback />}>
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
      </Suspense>
      <FloatingButtons />
    </div>
  </FilterProvider>
);

export default Index;

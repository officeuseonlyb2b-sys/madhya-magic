import { Suspense, lazy, ReactNode } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { FilterProvider } from "@/contexts/FilterContext";
import FloatingButtons from "@/components/FloatingButtons";
import SectionSkeleton from "@/components/SectionSkeleton";


// Lazy-load below-the-fold sections to reduce initial JS, improve LCP/TBT.
const InteractiveMapSection = lazy(() => import("@/components/InteractiveMapSection"));
const ReelsSection = lazy(() => import("@/components/ReelsSection"));
const ActivitiesReelsSection = lazy(() => import("@/components/ActivitiesReelsSection"));
const ExperiencesReelsSection = lazy(() => import("@/components/ExperiencesReelsSection"));
const PackagesSection = lazy(() => import("@/components/PackagesSection"));
const HomeCategoryShowcase = lazy(() => import("@/components/HomeCategoryShowcase"));
const ReasonsToExploreMP = lazy(() => import("@/components/ReasonsToExploreMP"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const TrustedBrandsSection = lazy(() => import("@/components/TrustedBrandsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const BookingStepsSection = lazy(() => import("@/components/BookingStepsSection"));
const TravelInsightsSection = lazy(() => import("@/components/TravelInsightsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Per-section Suspense boundary so each chunk shows its own skeleton
// instead of one global spinner blocking the whole page.
const LazySection = ({
  children,
  variant,
}: {
  children: ReactNode;
  variant?: "default" | "hero" | "grid" | "slider" | "compact";
}) => (
  <Suspense fallback={<SectionSkeleton variant={variant} />}>{children}</Suspense>
);

const Index = () => (
  <FilterProvider>
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="relative">
        <div className="relative">
          <LazySection variant="default"><InteractiveMapSection /></LazySection>
          <LazySection variant="slider"><ReelsSection /></LazySection>
          <LazySection variant="slider"><ActivitiesReelsSection /></LazySection>
          <LazySection variant="slider"><ExperiencesReelsSection /></LazySection>
        </div>
      </div>
      <LazySection variant="grid"><PackagesSection /></LazySection>
      <LazySection variant="grid"><HomeCategoryShowcase /></LazySection>
      <LazySection variant="default"><ReasonsToExploreMP /></LazySection>
      <LazySection variant="default"><WhyChooseUs /></LazySection>
      <LazySection variant="slider"><TrustedBrandsSection /></LazySection>
      <LazySection variant="compact"><FAQSection /></LazySection>
      <LazySection variant="default"><BookingStepsSection /></LazySection>
      <LazySection variant="grid"><TravelInsightsSection /></LazySection>
      <LazySection variant="slider"><TestimonialsSection /></LazySection>
      <LazySection variant="compact"><Footer /></LazySection>
      <FloatingButtons />
    </div>
  </FilterProvider>
);

export default Index;


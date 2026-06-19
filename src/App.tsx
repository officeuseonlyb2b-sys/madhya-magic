import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { lazyWithRetry as lazy } from "@/lib/lazyWithRetry.ts";


// Route-level code splitting: all non-home routes are loaded on demand,
// dramatically reducing initial bundle size for the landing page.
const DestinationDetail = lazy(() => import("./pages/DestinationDetail.tsx"));
const PackageDetail = lazy(() => import("./pages/PackageDetail.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Packages = lazy(() => import("./pages/Packages.tsx"));
const Activities = lazy(() => import("./pages/Activities.tsx"));
const ActivityDetail = lazy(() => import("./pages/ActivityDetail.tsx"));
const Experiences = lazy(() => import("./pages/Experiences.tsx"));
const CategoryPage = lazy(() => import("./pages/CategoryPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const PrivacyPolicy = lazy(() => import("@/components/PrivacyPolicy"));
const TermsConditions = lazy(() => import("@/components/TermsConditions"));
const CancellationPolicy = lazy(() => import("./components/CancellationPolicy"));
const BlogsListing = lazy(() => import("./pages/BlogsListing.tsx"));
const BlogDetail = lazy(() => import("./pages/BlogDetail.tsx"));
const Unsubscribe = lazy(() => import("./pages/Unsubscribe.tsx"));
const ExclusiveSawanPage = lazy(() => import("./pages/ExclusiveSawanPage.tsx"));
const SawanPackageDetailPage = lazy(() => import("./features/sawan-packages/pages/SawanPackageDetailPage.tsx"));
const SawanBookingPage = lazy(() => import("./features/sawan-packages/pages/SawanBookingPage.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/destination/:id" element={<DestinationDetail />} />
            <Route path="/package/:id" element={<PackageDetail />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/:id" element={<ActivityDetail />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/about" element={<About />} />
            <Route path="/nature" element={<CategoryPage />} />
            <Route path="/heritage" element={<CategoryPage />} />
            <Route path="/spiritual" element={<CategoryPage />} />
            <Route path="/wildlife" element={<CategoryPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />}/>
            <Route path="/blogs" element={<BlogsListing />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
            <Route path="/exclusive/sawan-ujjain" element={<ExclusiveSawanPage />} />
            <Route path="/exclusive/sawan-ujjain/package/:id" element={<SawanPackageDetailPage />} />
            <Route path="/sawan-ujjain/book-now" element={<SawanBookingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

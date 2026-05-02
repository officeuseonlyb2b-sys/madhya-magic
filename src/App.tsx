import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import DestinationDetail from "./pages/DestinationDetail.tsx";
import PackageDetail from "./pages/PackageDetail.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Packages from "./pages/Packages.tsx";
import Activities from "./pages/Activities.tsx";
import ActivityDetail from "./pages/ActivityDetail.tsx";
import Experiences from "./pages/Experiences.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExperiencesSection from "@/components/ExperiencesSection";
import FloatingButtons from "@/components/FloatingButtons";

const Experiences = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-24">
      <ExperiencesSection />
    </div>
    <Footer />
    <FloatingButtons />
  </div>
);

export default Experiences;

// src/components/exclusive/WhychooseUs.tsx
import { useState } from "react";
import {
  Award,
  Globe,
  ShieldCheck,
  Headphones,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import JourneyPopup from "@/components/MadhyaPradeshJourneyModal";
// Adjust the import path to your actual asset location
import whyChooseUsImage from "@/assets/shravan/choose.jpeg";

export default function WhychooseUs() {
  const [openJourneyPopup, setOpenJourneyPopup] = useState(false);

  const reasons = [
    {
      icon: Award,
      title: "Award-Winning Service",
      description:
        "Recognized excellence in travel planning with a focus on customer satisfaction and quality.",
    },
    {
      icon: Globe,
      title: "Global Destinations",
      description:
        "Curated experiences across the world, from exotic beaches to mountain retreats.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Safe",
      description:
        "Your safety is our priority, ensuring end-to-end travel security and reliable partners.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Dedicated travel experts available anytime to assist you before, during, and after your trip.",
    },
  ];

  const handleSpeakToExpert = () => {
    // Replace with your actual contact method
    alert("📞 Speak to our travel experts: +1 (555) 123-4567 or hello@bavro.com");
  };

  return (
    <>
      <section className="w-full bg-white overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[520px]">
          {/* LEFT SIDE - Why Choose Us Content */}
          <div className="relative z-10 flex items-center px-5 py-12 md:px-10 lg:px-14">
            <div className="max-w-[560px]">
              {/* HEADING - Black text */}
              <h2 className="text-black text-[32px] md:text-[44px] leading-[1.1] tracking-[-1px] font-light font-display">
                <div className="whitespace-nowrap">
                  <span className="font-bold">Why Travelers</span>{" "}
                  <span className="font-light">Love</span>
                </div>
                <span className="font-bold block mt-1">Bavro Travel</span>
              </h2>

              {/* DESCRIPTION - Dark gray */}
              <p className="mt-5 text-gray-600 text-[13px] md:text-[14px] leading-[1.8] max-w-[500px]">
                Discover what makes Bavro the preferred choice for thousands of
                adventurers. We offer exceptional service, personalized planning,
                and unforgettable experiences — without the stress.
              </p>

              {/* REASONS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mt-10">
                {reasons.map((reason, index) => {
                  const Icon = reason.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      {/* ICON - Light theme background */}
                      <div className="min-w-[58px] min-h-[58px] rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                        <Icon className="text-black w-5 h-5" strokeWidth={1.8} />
                      </div>
                      {/* TEXT */}
                      <div className="pt-0.5">
                        <h3 className="text-black text-[18px] leading-[1.2] font-semibold font-display">
                          {reason.title}
                        </h3>
                        <p className="mt-2 text-gray-500 text-[13px] leading-[1.7] max-w-[210px]">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* BUTTONS - Light theme */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                {/* SPEAK TO AN EXPERT */}
                <button
                  onClick={handleSpeakToExpert}
                  className="group inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full text-[14px] font-medium transition-all duration-300 hover:bg-gray-800"
                >
                  <PhoneCall className="w-4 h-4" strokeWidth={2} />
                  <span>Speak To An Expert</span>
                </button>

                {/* PLAN YOUR JOURNEY */}
                <button
                  onClick={() => setOpenJourneyPopup(true)}
                  className="group inline-flex items-center justify-center gap-2 border border-gray-300 text-black px-6 py-3 rounded-full text-[14px] font-medium transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                >
                  <span>Plan Your Journey</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE with white gradient overlay */}
          <div className="relative min-h-[420px] lg:min-h-full">
            <img
              src={whyChooseUsImage}
              alt="Happy travelers enjoying adventure"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            
          </div>
        </div>
      </section>

      {/* JOURNEY PLANNING POPUP */}
      <JourneyPopup
        open={openJourneyPopup}
        onClose={() => setOpenJourneyPopup(false)}
      />
    </>
  );
}
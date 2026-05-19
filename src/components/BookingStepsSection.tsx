import { useState } from "react";
import {
  Clock3,
  Briefcase,
  CalendarDays,
  Plane,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

import bookStep from "@/assets/book-step.jpg";
import JourneyPopup from "@/components/MadhyaPradeshJourneyModal";

export default function BookingStepsSection() {

  // POPUP STATE
  const [openJourneyPopup, setOpenJourneyPopup] = useState(false);

  const steps = [
    {
      icon: Clock3,
      title: "Pick Your Destination",
      description:
        "Our experienced team ensures your trip is stress-free, safe, and well-planned.",
    },
    {
      icon: Briefcase,
      title: "Customize Your Trip",
      description:
        "Our experienced team ensures your trip is stress-free, safe, and well-planned.",
    },
    {
      icon: CalendarDays,
      title: "Book & Confirm",
      description:
        "Our experienced team ensures your trip is stress-free, safe, and well-planned.",
    },
    {
      icon: Plane,
      title: "Travel & Enjoy",
      description:
        "Our experienced team ensures your trip is stress-free, safe, and well-planned.",
    },
  ];

  return (
    <>
      <section className="w-full bg-black overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[520px]">

          {/* LEFT SIDE */}
          <div className="relative z-10 flex items-center px-5 py-12 md:px-10 lg:px-14">
            <div className="max-w-[560px]">

              {/* HEADING */}
              <h2 className="text-white text-[32px] md:text-[44px] leading-[1.1] tracking-[-1px] font-light font-display">

                {/* FIRST LINE */}
                <div className="whitespace-nowrap">
                  <span className="font-bold">
                    Book Your Next
                  </span>{" "}

                  <span className="font-light">
                    Adventure in
                  </span>
                </div>

                {/* SECOND LINE */}
                <span className="font-bold block mt-1">
                  Just 4 Steps!
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-5 text-[#b5b5b5] text-[13px] md:text-[14px] leading-[1.8] max-w-[500px]">
                Traveling should be exciting, not complicated! At Bavro Travel &
                Tour Agency, we make booking your trip quick, simple, and
                stress-free. Just follow these four easy steps and get ready for
                an unforgettable experience!
              </p>

              {/* STEPS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mt-10">
                {steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >

                      {/* ICON */}
                      <div className="min-w-[58px] min-h-[58px] rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                        <Icon
                          className="text-white w-5 h-5"
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* TEXT */}
                      <div className="pt-0.5">
                        <h3 className="text-white text-[18px] leading-[1.2] font-semibold font-display">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-[#9f9f9f] text-[13px] leading-[1.7] max-w-[210px]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">

                {/* SPEAK TO EXPERT */}
                <button className="group inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-[14px] font-medium transition-all duration-300 hover:bg-[#d6b16d] hover:text-black">
                  <PhoneCall
                    className="w-4 h-4"
                    strokeWidth={2}
                  />

                  <span>Speak To An Expert</span>
                </button>

                {/* PLAN YOUR JOURNEY */}
                <button
                  onClick={() => setOpenJourneyPopup(true)}
                  className="group inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full text-[14px] font-medium transition-all duration-300 hover:bg-white hover:text-black"
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

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[420px] lg:min-h-full">

            {/* IMAGE */}
            <img
              src={bookStep}
              alt="Traveler"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

            {/* EXTRA OVERLAY */}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </section>

      {/* JOURNEY POPUP */}
      <JourneyPopup
        open={openJourneyPopup}
        onClose={() => setOpenJourneyPopup(false)}
      />
    </>
  );
}
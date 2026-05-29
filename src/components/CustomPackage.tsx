import { useState } from "react";
import customImage from "@/assets/customimage.png";
import QuoteModal from "@/components/QuoteModal";

const CustomPackageCTA = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  return (
    <>
      {/* CTA SECTION */}
      <section className="relative py-20 overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src={customImage}
            alt="Custom Package"
            className="w-full h-full object-cover scale-105" loading="lazy" decoding="async" />

          {/* OVERLAYS */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.65),rgba(0,0,0,0.3),rgba(0,0,0,0.85))]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,120,50,0.18),transparent)] mix-blend-multiply" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Need a Custom Package?
          </h2>

          <p className="text-white/80 mb-8 max-w-xl">
            Let us craft your perfect Madhya Pradesh journey.
          </p>

          {/* BUTTON */}
          <button
            onClick={() => setShowQuoteModal(true)}
            className="bg-[#b28434] hover:bg-[#9d732c] transition-all duration-300 px-8 py-3 rounded-full text-white font-semibold shadow-xl hover:scale-105"
          >
            Book Custom Package
          </button>
        </div>
      </section>

      {/* QUOTE MODAL */}
      <QuoteModal
        open={showQuoteModal}
        onOpenChange={setShowQuoteModal}
        destinationName="Custom Madhya Pradesh Tour"
      />
    </>
  );
};

export default CustomPackageCTA;
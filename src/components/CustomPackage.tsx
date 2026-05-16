import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import customImage from "@/assets/customimage.png";

const CustomPackageCTA = () => {
  const [showCustomForm, setShowCustomForm] = useState(false);

  return (
    <>
      {/* CTA SECTION */}
      <section className="relative py-20 overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src={customImage}
            alt="Custom Package"
            className="w-full h-full object-cover scale-105"
          />

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
            onClick={() => setShowCustomForm(true)}
            className="bg-[#b28434] hover:bg-[#b28434] transition-all duration-300 px-8 py-3 rounded-full text-white font-semibold shadow-xl hover:scale-105"
          >
            Book Custom Package
          </button>
        </div>
      </section>

      {/* POPUP FORM */}
      <AnimatePresence>
        {showCustomForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setShowCustomForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-white rounded-3xl p-6 md:p-8 relative overflow-hidden"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setShowCustomForm(false)}
                className="absolute top-4 right-4 text-black/60 hover:text-black text-xl"
              >
                ✕
              </button>

              {/* HEADING */}
              <h3 className="text-3xl font-bold text-black mb-2">
                Custom Package Request
              </h3>

              <p className="text-black/60 mb-8">
                Fill in your travel details and our team will contact you.
              </p>

              {/* FORM */}
              <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#ff7a32]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#ff7a32]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#ff7a32]"
                />

                <input
                  type="text"
                  placeholder="Destination"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#ff7a32]"
                />

                <input
                  type="date"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#ff7a32]"
                />

                <input
                  type="number"
                  placeholder="Number of Travelers"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#ff7a32]"
                />

                <textarea
                  placeholder="Tell us about your package requirements..."
                  rows={5}
                  className="md:col-span-2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#ff7a32] resize-none"
                />

                <button
                  type="submit"
                  className="md:col-span-2 bg-[#b28434] hover:bg-[#b28434] transition-all duration-300 py-4 rounded-xl text-white font-semibold text-lg"
                >
                  Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomPackageCTA;
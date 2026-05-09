import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const categories = [
  "Booking Process",
  "Payment & Refunds",
  "Travel Requirement",
  "Trip Experience",
];

const faqs = [
  {
    question: "Will I have a tour guide during my trip?",
    answer:
      "Yes, guided experiences are included in selected packages. Local expert guides ensure a smooth and enriching journey.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer:
      "Our support team monitors major travel disruptions and helps coordinate transfers or itinerary adjustments whenever possible.",
  },
  {
    question: "Can I request special meals during the trip?",
    answer:
      "Absolutely. Vegetarian, vegan, Jain, and other dietary preferences can be arranged with prior notice.",
  },
  {
    question: "What should I do if I lose my belongings?",
    answer:
      "Immediately contact our support team or your trip coordinator. We’ll assist you with the next steps and local support.",
  },
  {
    question: "Is there 24/7 customer support while traveling?",
    answer:
      "Yes, our travel assistance team is available throughout your journey for emergencies and support.",
  },
];

const FAQSection = () => {
  const [activeCategory, setActiveCategory] =
    useState("Payment & Refunds");

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 md:py-14 bg-[#f7f7f7] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-5">
        
        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[190px_1fr] gap-6 lg:gap-10 items-start">
          
          {/* LEFT SIDE */}
          <div className="lg:pt-1 md:pt-1 pt-0">
            
            {/* TEXT */}
            <p className="text-[12px] leading-5 text-[#777] max-w-[170px]">
              Still Have Questions? We’re Here to Help!{" "}
              <span className="text-black font-semibold cursor-pointer hover:underline">
                Contact Us
              </span>
            </p>

            {/* LINE */}
            <div className="w-full h-[1px] bg-[#dddddd] my-4" />

            {/* CATEGORY BUTTONS */}
            <div className="flex flex-col gap-2">
              {categories.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(item)}
                  className={`text-left text-[13px] transition-all duration-300 rounded-full px-4 py-3 ${
                    activeCategory === item
                      ? "bg-black text-white font-medium shadow-md"
                      : "bg-[#f1f1f1] text-[#777] hover:bg-black hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-[760px] w-full">
            
            {/* HEADING */}
            <div className="mb-5">
              <h2 className="text-[24px] md:text-[40px] leading-[1.03] tracking-[-1px] text-black font-light">
                Everything{" "}
                <span className="font-bold">
                  You Need to Know
                </span>

                <br />

                Before{" "}
                <span className="font-bold">
                  You Travel.
                </span>
              </h2>
            </div>

            {/* FAQ BOX */}
            <div className="bg-white rounded-[18px] border border-[#ececec] overflow-hidden shadow-sm">
              
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`px-4 md:px-5 ${
                      index !== faqs.length - 1
                        ? "border-b border-[#efefef]"
                        : ""
                    }`}
                  >
                    
                    {/* QUESTION */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between gap-3 py-3.5 text-left"
                    >
                      <h3 className="text-[14px] md:text-[17px] leading-[1.4] font-semibold text-black max-w-[90%]">
                        {faq.question}
                      </h3>

                      {/* ICON */}
                      <div className="shrink-0 w-7 h-7 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                        {isOpen ? (
                          <Minus size={14} className="text-black" />
                        ) : (
                          <Plus size={14} className="text-black" />
                        )}
                      </div>
                    </button>

                    {/* ANSWER */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-3.5 pr-2 text-[13px] leading-6 text-[#777] max-w-2xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
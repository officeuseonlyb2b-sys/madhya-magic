"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Plus,
  Minus,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Plane,
  Wallet,
  MapPinned,
} from "lucide-react";

// IMAGES
import faqImage1 from "@/assets/choose1.jpeg";
import faqImage2 from "@/assets/choose2.jpeg";

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

const categoryIcons = {
  "Booking Process": Plane,
  "Payment & Refunds": Wallet,
  "Travel Requirement": ShieldCheck,
  "Trip Experience": MapPinned,
};

const FAQSection = () => {
  const [activeCategory, setActiveCategory] =
    useState("Payment & Refunds");

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 md:py-20 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-5">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center mb-10">

          {/* LEFT CONTENT */}
          <div>

            {/* MINI TAG */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#ececec] rounded-full px-4 py-2 mb-5 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#f97343]" />

              <span className="text-[12px] font-semibold tracking-wide uppercase text-[#555]">
                Travel Support & FAQs
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-[34px] md:text-[58px] leading-[1] tracking-[-2px] text-black font-light mb-5">
              Everything{" "}
              <span className="font-bold">
                You Need
              </span>

              <br />

              To Know Before{" "}
              <span className="font-bold">
                You Travel
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[15px] leading-7 text-[#777] max-w-2xl mb-8">
              From booking details and refund policies to travel support and
              on-ground experiences — here are the answers to the most common
              questions travelers ask before exploring Madhya Pradesh.
            </p>

            {/* CONTACT CARD */}
            <div className="bg-white border border-[#ececec] rounded-[24px] p-5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f97343] text-white flex items-center justify-center shrink-0">
                  <PhoneCall size={20} />
                </div>

                <div>
                  <h4 className="text-[18px] font-semibold text-black mb-1">
                    Still Have Questions?
                  </h4>

                  <p className="text-[13px] leading-6 text-[#777]">
                    Our travel experts are available to help you plan your
                    perfect journey.
                  </p>
                </div>
              </div>

              <button className="h-11 px-6 rounded-full bg-black text-white text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300">
                Contact Us
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative h-[340px] md:h-[420px]">

            {/* MAIN IMAGE */}
            <div className="absolute right-0 top-0 w-[82%] h-[280px] md:h-[360px] rounded-[28px] overflow-hidden shadow-2xl">
              <img
                src={faqImage1}
                alt="Travel FAQ"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              
            </div>

            {/* SMALL IMAGE */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute left-0 bottom-0 w-[48%] h-[180px] rounded-[24px] overflow-hidden border-[6px] border-[#fafafa] shadow-xl"
            >
              <img
                src={faqImage2}
                alt="Support"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* MAIN FAQ GRID */}
        <div className="grid lg:grid-cols-[250px_1fr] gap-7 lg:gap-10 items-start">

          {/* LEFT SIDE */}
          <div>

            {/* CATEGORY CARD */}
            <div className="bg-white border border-[#ececec] rounded-[28px] p-5 shadow-sm sticky top-24">

              <h3 className="text-[18px] font-bold text-black mb-5">
                Browse Topics
              </h3>

              <div className="flex flex-col gap-3">
                {categories.map((item, index) => {
                  const Icon = categoryIcons[item];

                  return (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(item)}
                      className={`group flex items-center justify-between gap-3 rounded-2xl px-4 py-4 transition-all duration-300 ${
                        activeCategory === item
                          ? "bg-black text-white shadow-lg"
                          : "bg-[#f6f6f6] hover:bg-black hover:text-white text-[#555]"
                      }`}
                    >

                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            activeCategory === item
                              ? "bg-white/15"
                              : "bg-white"
                          }`}
                        >
                          <Icon size={18} />
                        </div>

                        <span className="text-[14px] font-medium text-left">
                          {item}
                        </span>
                      </div>

                      <ArrowRight
                        size={15}
                        className={`transition-all duration-300 ${
                          activeCategory === item
                            ? "translate-x-0 opacity-100"
                            : "opacity-50 group-hover:translate-x-1"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>

            {/* FAQ CONTAINER */}
            <div className="bg-white rounded-[30px] border border-[#ececec] overflow-hidden shadow-sm">

              {/* TOP STRIP */}
              <div className="flex flex-wrap items-center justify-between gap-4 px-5 md:px-7 py-5 border-b border-[#efefef] bg-[#fcfcfc]">

                <div>
                  <h3 className="text-[22px] font-bold text-black">
                    Frequently Asked Questions
                  </h3>

                  <p className="text-[13px] text-[#777] mt-1">
                    Everything you need to know about your trip experience.
                  </p>
                </div>

                <div className="bg-[#f5f5f5] rounded-full px-4 py-2 text-[12px] font-medium text-[#666]">
                  {faqs.length} Questions
                </div>
              </div>

              {/* FAQ ITEMS */}
              <div className="p-3 md:p-4">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <motion.div
                      layout
                      key={index}
                      className={`rounded-[22px] mb-3 overflow-hidden border transition-all duration-300 ${
                        isOpen
                          ? "border-black bg-black"
                          : "border-[#ececec] bg-white hover:bg-[#fafafa]"
                      }`}
                    >

                      {/* QUESTION */}
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex items-center justify-between gap-3 px-4 md:px-6 py-5 text-left"
                      >
                        <h3
                          className={`text-[15px] md:text-[17px] leading-[1.5] font-semibold transition-all duration-300 ${
                            isOpen ? "text-white" : "text-black"
                          }`}
                        >
                          {faq.question}
                        </h3>

                        {/* ICON */}
                        <div
                          className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "bg-white text-black"
                              : "bg-[#f5f5f5] text-black"
                          }`}
                        >
                          {isOpen ? (
                            <Minus size={16} />
                          ) : (
                            <Plus size={16} />
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
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 md:px-6 pb-5">

                              <div className="w-full h-[1px] bg-white/10 mb-4" />

                              <p className="text-[14px] leading-7 text-white/75 max-w-3xl">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
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
  "Tour Planning & Booking",
  "Pricing, Payments & Cancellation",
  "Hotels, Transport & Comfort",
  "Wildlife Safaris & National Parks",
  "Destination Experience & Travel Insights",
  "On-Ground Support & Assistance",
];

const faqsData = {
  "Tour Planning & Booking": [
    {
      question:
        "How do I plan and book a tour with Enchanting Madhya Pradesh?",
      answer: `Planning your journey with us is simple and personalized. You can reach out to our team through the website, WhatsApp, phone call, or email and share your travel ideas, preferred travel dates, interests, and budget.

Based on your preferences, our destination specialists carefully craft a journey that suits your travel style — whether it is wildlife, spirituality, heritage, luxury, family holidays, offbeat experiences, or a combination of everything that makes Madhya Pradesh special.

Once the itinerary is finalized, we share the complete proposal along with hotel options, inclusions, pricing, and other travel details. After receiving the required advance payment and traveler information, our team proceeds with all reservations and confirmations.

Throughout the process, you remain connected with real destination experts who understand the region deeply and guide you at every step.`,
    },

    {
      question:
        "Can the tour packages be customized according to our travel style, interests, and budget?",
      answer: `Absolutely. In fact, most of our journeys are tailor-made rather than fixed.

Every traveler experiences Madhya Pradesh differently — some come for tiger safaris, some for spirituality, some for heritage and culture, while others simply want a slow and peaceful holiday close to nature.

That is why we carefully design journeys based on your interests, pace of travel, comfort preferences, and budget.

Whether you are looking for:

• A luxury & experiential getaway  
• A wildlife escape  
• A spiritual circuit  
• A family holiday  
• A honeymoon  
• A women-exclusive journey  
• A senior citizen-friendly tour  
• A photography or cultural experience  

our team can personalize the itinerary accordingly.

From hotel categories and transportation to experiences and sightseeing pace, everything can be aligned to create a journey that truly feels yours.`,
    },

    {
      question:
        "What all is usually included in your tour packages?",
      answer: `Our tour packages are designed to offer a smooth and comfortable travel experience while keeping flexibility in mind.

Depending on the selected package, inclusions may typically cover:

• Hotel accommodations  
• Daily breakfast and selected meals  
• Transportation throughout the journey  
• Airport or railway station transfers  
• Sightseeing as per itinerary  
• Safari bookings (if applicable)  
• Local guides and destination assistance  
• Handcrafted experiences  
• Driver allowances, tolls, parking, and taxes  

Some experiences, monument entry tickets, special activities, or personal expenses may remain separate depending on the nature of the journey.

Since every trip is customized differently, our team always shares a clear list of inclusions and exclusions before confirmation to maintain complete transparency.`,
    },

    {
      question:
        "How early should I plan and book my Madhya Pradesh journey?",
      answer: `We always recommend planning your journey as early as possible, especially if your itinerary includes wildlife safaris, luxury stays, or travel during long weekends and holiday periods.

Safari permits in Madhya Pradesh generally open 120 days prior to the date of travel, and premium safari zones often get sold out quickly during peak wildlife season.

For the best experience, we usually recommend:

• 3 to 6 months advance planning for wildlife and luxury journeys  
• 1 to 3 months advance planning for regular holidays  
• Earlier planning during festive seasons, school vacations, and long weekends  

Advance planning also allows us to secure better hotel options, smoother travel routing, and more thoughtfully crafted experiences for your journey.`,
    },

    {
      question:
        "Why should I book my Madhya Pradesh journey through Enchanting Madhya Pradesh instead of generic online travel portals?",
      answer: `Madhya Pradesh is one of the most rewarding yet operationally complex destinations in India. While online travel portals may help with basic bookings, truly experiencing Madhya Pradesh requires strong destination understanding and local coordination.

At Enchanting Madhya Pradesh, we specialize deeply in this region. Our roots come from years of crafting journeys for travelers from across the world through leading travel partners and tour operators.

We understand:

• Which safari zones suit different travelers  
• The difference between core and buffer experiences  
• Seasonal travel realities  
• Ground logistics and route planning  
• Heritage and spiritual circuit flow  
• Hidden experiences beyond standard sightseeing  
• Hotel quality and location realities  

Most importantly, we believe travel should feel personal, meaningful, and smooth — not rushed or mechanical.

From the first conversation until the end of your journey, our team remains closely connected to ensure your experience feels thoughtfully planned, comfortable, and genuinely memorable.`,
    },
  ],

  "Pricing, Payments & Cancellation": [
    {
      question:
        "Are there any hidden charges in the package or will all costs be shared clearly before booking?",
      answer: `Transparency is extremely important to us. Before confirmation, our team shares a detailed cost breakup mentioning inclusions, exclusions, hotel category, transportation, safari components, taxes, and any additional optional experiences if applicable.

Since many services in travel work on dynamic pricing — especially hotels and safaris in Madhya Pradesh — we always ensure that you clearly understand what is included in your journey before making any payment.

Our goal is to help travelers plan confidently without unpleasant surprises later.`,
    },

    {
      question:
        "What payment methods do you accept and how does the payment process work?",
      answer: `We accept multiple convenient payment options including:

• Bank Transfers  
• UPI Payments  
• Online Transfers  
• Selected digital payment methods  

To confirm the booking, an advance payment is generally required so that hotels, safaris, and transportation services can be secured. The remaining balance is usually scheduled closer to the travel date depending on the nature of the journey.

Our team guides you through the entire payment process smoothly and shares all payment details securely.`,
    },

    {
      question:
        "Why do tour prices sometimes change before final confirmation?",
      answer: `Travel pricing, especially in destinations like Madhya Pradesh, can fluctuate due to changing hotel rates, safari permit availability, seasonal demand, festivals, long weekends, and dynamic inventory systems.

This is particularly common in:

• Wildlife lodges  
• Premium hotels  
• Government accommodations  
• Peak travel periods  

That is why we always recommend early planning and confirmation. Once services are confirmed, the pricing remains secured as per the finalized booking.

Our team always tries to provide the best possible combination of experience, comfort, and value.`,
    },

    {
      question:
        "What is your cancellation and refund policy?",
      answer: `Cancellation policies vary depending on the services involved in the journey such as:

• Hotels  
• Safari permits  
• Transportation  
• Train or flight bookings  
• Seasonal conditions  

Some services may have flexible cancellation policies while others — especially safari permits and peak season accommodations — may involve stricter terms.

To maintain complete transparency, our team shares the applicable cancellation policy clearly before booking confirmation so that travelers can make informed decisions comfortably.`,
    },

    {
      question:
        "Can I modify or reschedule my trip after booking confirmation?",
      answer: `Yes, in many cases modifications and rescheduling are possible depending on availability and supplier policies.

If travel dates, hotel preferences, or destinations need to be changed, our team tries its best to adjust the arrangements smoothly. However, certain services such as safari permits, premium hotels, or festive season bookings may involve amendment charges or limited flexibility.

Whenever possible, we always try to find the most practical and comfortable solution for our travelers.`,
    },
  ],

  "Hotels, Transport & Comfort": [
    {
      question:
        "What type of hotels and accommodations do you provide during the journey?",
      answer: `We offer a wide range of carefully selected accommodations across different travel styles and budgets — from comfortable standard hotels and boutique stays to luxury resorts, heritage properties, jungle lodges, and experiential stays.

Depending on the journey you choose, accommodations may include:

• Boutique cultural stays  
• Wildlife lodges in the national parks  
• Heritage hotels and palace stays  
• Riverside and nature retreats  
• Premium city hotels  
• Luxury Hotels  

Our focus is not just on hotel category, but also on location, experience, comfort, hospitality, and overall suitability for the journey you are planning.`,
    },

    {
      question:
        "What kind of transportation and vehicles are provided during the tour?",
      answer: `Transportation is planned according to the route, number of travelers, comfort level, and overall travel experience.

Depending on the journey, we provide:

• Sedans  
• SUVs  
• Tempo Travellers  
• Urbania  
• Luxury Coaches (22 Seater to 45 Seater)  
• Volvos  
• Premium vehicles for luxury travel  

All transportation is arranged with experienced drivers familiar with the routes, destination conditions, safari movements, and regional travel realities of Madhya Pradesh and surrounding regions.

Our goal is to ensure that the journey remains smooth, safe, and comfortable throughout.`,
    },

    {
      question:
        "Are airport, railway station, and intercity transfers included in the package?",
      answer: `Yes, most of our packages include necessary arrival, departure, and intercity transfers as per the finalized itinerary.

Our team carefully plans:

• Airport pickups and drops  
• Railway station transfers  
• Hotel-to-hotel movements  
• Intercity road journeys  
• Safari transfers where applicable  

Before confirmation, we always share a detailed itinerary clearly mentioning all included transportation services.`,
    },

    {
      question:
        "Are your tours comfortable for families, senior citizens, and first-time travelers?",
      answer: `Absolutely. Many of our journeys are specially designed keeping comfort, pacing, and convenience in mind.

We regularly curate experiences for:

• Families with children  
• Senior citizens  
• Women travelers  
• International guests  
• First-time India travelers  

Our team carefully considers driving distances, hotel comfort, sightseeing pace, meal stops, accessibility, and overall travel rhythm to ensure the journey feels relaxed and enjoyable rather than hectic.`,
    },

    {
      question:
        "Can hotels, vehicles, or travel experiences be upgraded to luxury options?",
      answer: `Yes, definitely. Many travelers prefer adding premium comfort and exclusive experiences to make their journey even more special.

Depending on your preferences, we can arrange:

• Luxury wildlife lodges  
• Palace and heritage stays  
• Premium suites and boutique hotels  
• Private guided experiences  
• Luxury transportation  
• Curated cultural and experiential activities  

Our team can customize the overall journey based on the level of comfort, exclusivity, and experience you are looking for.`,
    },
  ],
};

const categoryIcons = {
  "Tour Planning & Booking": Plane,
  "Pricing, Payments & Cancellation": Wallet,
  "Hotels, Transport & Comfort": ShieldCheck,
  "Wildlife Safaris & National Parks": MapPinned,
  "Destination Experience & Travel Insights": Plane,
  "On-Ground Support & Assistance": ShieldCheck,
};

const FAQSection = () => {
  const [activeCategory, setActiveCategory] =
    useState("Tour Planning & Booking");

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs =
    faqsData[activeCategory as keyof typeof faqsData] || [];

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
        <div className="grid lg:grid-cols-[280px_1fr] gap-7 lg:gap-10 items-start">

          {/* LEFT SIDE */}
          <div>

            {/* CATEGORY CARD */}
            <div className="bg-white border border-[#ececec] rounded-[28px] p-5 shadow-sm sticky top-24">

              <h3 className="text-[18px] font-bold text-black mb-5">
                Browse Topics
              </h3>

              <div className="flex flex-col gap-3">
                {categories.map((item, index) => {
                  const Icon =
                    categoryIcons[
                      item as keyof typeof categoryIcons
                    ];

                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveCategory(item);
                        setOpenIndex(0);
                      }}
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

                        <span className="text-[13px] font-medium text-left leading-5">
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
                          className={`text-[15px] md:text-[17px] leading-[1.6] font-semibold transition-all duration-300 ${
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
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 md:px-6 pb-6">

                              <div className="w-full h-[1px] bg-white/10 mb-5" />

                              <p className="text-[14px] leading-8 whitespace-pre-line text-white/75 max-w-4xl">
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
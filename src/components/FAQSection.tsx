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
import faqImage1 from "@/assets/faqimage1.jpeg";
import faqImage2 from "@/assets/faqimage2.jpeg";

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

  "Wildlife Safaris & National Parks": [
    {
      question: "Which are the best national parks and wildlife destinations to visit in Madhya Pradesh?",
      answer: `Madhya Pradesh is often known as the “Tiger State of India” and is home to some of the country’s finest wildlife destinations.

Some of the most popular national parks include:

• Bandhavgarh National Park  
• Kanha National Park  
• Pench National Park  
• Satpura National Park  
• Panna National Park  

Each park offers a different experience — some are known for higher tiger movement, some for peaceful forest landscapes, walking safaris, birdlife, or unique wilderness experiences.

Our team helps travelers choose the right park and safari experience depending on travel period, interests, comfort level, and overall itinerary flow.`,
    },
    {
      question: "How early should I book safari permits and why is advance planning important?",
      answer: `Safari permits in Madhya Pradesh generally open 120 days prior to the travel date, and premium safari zones often get booked very quickly — especially during peak wildlife season, weekends, holidays, and long weekends.

Advance planning is highly recommended because:

• Core safari zones have limited entries  
• Premium lodges get sold out early  
• Better safari combinations can be planned  
• Route planning becomes smoother  
• Chances of getting preferred safari zones improve significantly  

For wildlife-focused journeys, we usually recommend planning at least 3 to 6 months in advance for the best overall experience.`,
    },
    {
      question: "What is the difference between Core Zone and Buffer Zone in wildlife safaris?",
      answer: `Core Zones are the primary protected forest areas of a national park where wildlife density and tiger movement are generally higher. These are considered the premium safari zones and usually remain in highest demand.

Buffer Zones are the surrounding forest regions around the core area. They often offer quieter safari experiences, beautiful landscapes, and excellent opportunities to experience the wilderness with comparatively lesser crowd movement.

In recent years, many buffer zones in Madhya Pradesh have become extremely rewarding for tiger sightings as well.

Both zones offer unique experiences, and the right choice depends on your expectations, travel season, and permit availability.`,
    },
    {
      question: "What are the chances of tiger sightings during safari?",
      answer: `Tiger sightings depend on many factors such as:

• Season  
• Safari zone  
• Weather conditions  
• Animal movement  
• Time of safari  
• Forest conditions  

While sightings can never be guaranteed in the wild, Madhya Pradesh is considered one of India’s best destinations for tiger safaris and wildlife experiences.

Apart from tigers, safaris often include sightings of:

• Leopards  
• Sloth bears  
• Deer species  
• Wild dogs  
• Gaur  
• Rich birdlife  
• Beautiful forest landscapes  

We always encourage travelers to enjoy the complete jungle experience rather than focusing only on tiger sightings.`,
    },
    {
      question: "What should I know before going for a wildlife safari in Madhya Pradesh?",
      answer: `Wildlife safaris are beautiful nature experiences and a little preparation makes the journey even more enjoyable.

A few important things travelers should know:

• Wear comfortable clothes in earthy or neutral shades  
• Early mornings can feel cold during winters  
• Carry valid ID proof for safari entry  
• Follow forest rules and guide instructions  
• Maintain silence during safari for better wildlife experience  
• Avoid bright colors and loud sounds  
• Mobile network may be limited inside forest regions  

Most importantly, safaris are about experiencing nature in its purest form — every jungle drive is unique and memorable in its own way.`,
    },
  ],

  "Destination Experience & Travel Insights": [
    {
      question: "What makes Madhya Pradesh different from other destinations in India?",
      answer: `Madhya Pradesh offers a side of India that still feels authentic, raw, culturally rich, and deeply connected to its roots.

Unlike destinations that are known for just one experience, Madhya Pradesh brings together wildlife, spirituality, heritage, culture, nature, tribal traditions, architecture, local crafts, and slow travel — all within one state.

Here, travelers can:

• Explore ancient temples and UNESCO sites  
• Experience tiger safaris in dense forests  
• Witness living spiritual traditions  
• Stay in heritage properties  
• Discover lesser-known villages and cultural regions  
• Travel through landscapes untouched by mass tourism  

It is a destination for travelers who want to experience the real essence of India beyond the usual tourist circuits.`,
    },
    {
      question: "What is the best time to visit Madhya Pradesh and how many days are ideal for the trip?",
      answer: `Madhya Pradesh can be explored throughout the year depending on the type of experience you are looking for.

• October to March → Best for heritage, culture, spirituality, and comfortable weather  
• November to June → Ideal for wildlife safaris and tiger sightings  
• July to September → Beautiful monsoon landscapes, waterfalls, and greenery  

The ideal trip duration depends on the regions you wish to explore:

• 3 to 5 days → Short getaways or wildlife escapes  
• 6 to 9 days → Combination of wildlife, heritage, and spirituality  
• 10+ days → Deeper exploration across multiple regions of the state  

Our team helps design journeys that feel balanced, comfortable, and meaningful rather than rushed.`,
    },
    {
      question: "Is Madhya Pradesh suitable for family holidays, senior citizens, and first-time travelers?",
      answer: `Absolutely. Madhya Pradesh is one of the most diverse and comfortable destinations for different kinds of travelers.

Whether you are:

• Traveling with family  
• Planning a relaxed holiday for senior citizens  
• Visiting India for the first time  
• Looking for a spiritual retreat  
• Seeking nature and wildlife experiences  

the state offers excellent possibilities for all age groups and travel styles.

With proper route planning, comfortable accommodations, balanced sightseeing, and carefully designed travel pacing, the journey becomes smooth and enjoyable for everyone.`,
    },
    {
      question: "What kind of experiences can I expect during a journey through Madhya Pradesh?",
      answer: `A journey through Madhya Pradesh is not just about sightseeing — it is about experiencing different layers of India.

Depending on your interests, experiences may include:

• Tiger safaris and forest stays  
• Spiritual ceremonies and temple visits  
• Heritage walks and fort explorations  
• Tribal and cultural interactions  
• Riverside experiences  
• Textile and handicraft traditions  
• Local cuisine and culinary experiences  
• Rural and offbeat landscapes  
• Slow travel and nature retreats  

Every region of Madhya Pradesh has its own personality, rhythm, and cultural depth, which makes the journey feel continuously evolving.`,
    },
    {
      question: "Is Madhya Pradesh safe for travelers, including solo and women travelers?",
      answer: `Yes. Madhya Pradesh is generally considered a culturally welcoming and comfortable destination for travelers.

We regularly assist:

• Solo travelers  
• Women travelers  
• International guests  
• Families  
• Senior citizens  

For additional comfort and safety, our team carefully plans accommodations, transportation, travel timings, and local coordination throughout the journey.

We also offer specially curated women-exclusive journeys and remain available for support during the trip whenever required.`,
    },
  ],

  "On-Ground Support & Assistance": [
    {
      question: "Will there be any on-ground support available during the journey?",
      answer: `Yes, absolutely. One of the biggest advantages of traveling with Enchanting Madhya Pradesh is that our support does not end after the booking.

Our operations and coordination teams remain connected throughout the journey to assist with:

• Hotel coordination  
• Transportation support  
• Safari scheduling  
• Route guidance  
• Local assistance  
• Travel updates  
• Unexpected situations if any arise during the trip  

We believe travelers should feel supported, comfortable, and well-guided throughout their experience rather than feeling left on their own after confirmation.`,
    },
    {
      question: "Do you provide local guides and destination experts during the trip?",
      answer: `Yes. Depending on the destination and travel experience, we can arrange experienced local guides, naturalists, and destination experts.

Guided experiences can greatly enhance:

• Heritage explorations  
• Spiritual circuits  
• Wildlife safaris  
• Cultural interactions  
• Walking tours  
• Historical storytelling experiences  

Our focus is not just on sightseeing, but on helping travelers understand the stories, culture, traditions, and soul of the destination more meaningfully.`,
    },
    {
      question: "What happens if there are unexpected changes, delays, or travel issues during the trip?",
      answer: `Travel can sometimes involve unexpected situations such as weather changes, traffic delays, operational adjustments, train or flight disruptions, or safari timing changes.

In such situations, our team actively coordinates with hotels, drivers, guides, and local partners to find the most practical and comfortable solution for travelers.

Because of our strong ground-level network and destination understanding, we are often able to handle changes smoothly and minimize inconvenience wherever possible.`,
    },
    {
      question: "Can you assist with special travel requirements or personalized requests?",
      answer: `Yes, definitely. We understand that every traveler has different needs and preferences.

Depending on the journey, we can assist with:

• Senior citizen support  
• Women-exclusive travel arrangements  
• Dietary preferences  
• Celebration planning  
• Slow-paced itineraries  
• Luxury upgrades  
• Photography-focused journeys  
• Spiritual experiences  
• Special occasions and honeymoon arrangements  

Our team always tries to personalize the experience as thoughtfully as possible.`,
    },
    {
      question: "How do you ensure a smooth and comfortable travel experience across Madhya Pradesh?",
      answer: `Madhya Pradesh is a beautiful but operationally detailed destination where proper planning makes a huge difference.

Our team carefully manages:

• Travel routing  
• Hotel selection  
• Safari logistics  
• Driver coordination  
• Destination sequencing  
• Seasonal considerations  
• Travel pacing and comfort  

This helps travelers avoid unnecessary rush, confusion, and operational challenges while allowing them to experience the destination in a much smoother and more meaningful way.

Our goal is simple — to let travelers focus on enjoying the journey while we take care of the complexities behind the scenes.`,
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
    <section className="py-14 md:py-20 bg-white overflow-hidden">
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
            <h2 className="text-[34px] md:text-[58px] leading-[1] tracking-[-2px] text-black font-light mb-5 font-display">
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
                <div className="w-12 h-12 rounded-2xl bg-[#C89B5E] text-white flex items-center justify-center shrink-0">
                  <PhoneCall size={20} />
                </div>

                <div>
                  <h4 className="text-[18px] font-semibold text-black mb-1 font-display">
                    Still Have Questions?
                  </h4>

                  <p className="text-[13px] leading-6 text-[#777]">
                    Our travel experts are available to help you plan your
                    perfect journey.
                  </p>
                </div>
              </div>

              <button className="h-11 px-6 rounded-full bg-[#c89b5e] text-white text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300">
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
                className="w-full h-full object-cover" loading="lazy" decoding="async" />

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
                className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </motion.div>
          </div>
        </div>

        {/* MAIN FAQ GRID */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-7 lg:gap-10 items-start">

          {/* LEFT SIDE */}
          <div>

            {/* CATEGORY CARD */}
            <div className="bg-white border border-[#ececec] rounded-[28px] p-5 shadow-sm sticky top-24">

              <h3 className="text-[18px] font-bold text-black mb-5 font-display">
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
                          ? "bg-[#C89B5E] text-white shadow-lg"
                          : "bg-white hover:bg-[#C89B5E] hover:text-white text-[#555]"
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
              <div className="flex flex-wrap items-center justify-between gap-4 px-5 md:px-7 py-5 border-b border-[#efefef] bg-white]">

                <div>
                  <h3 className="text-[22px] font-bold text-black">
                    Frequently Asked Questions
                  </h3>

                  <p className="text-[13px] text-[#777] mt-1">
                    Everything you need to know about your trip experience.
                  </p>
                </div>

                <div className="bg-white border border-[#ececec] rounded-full px-4 py-2 text-[12px] font-medium text-[#666]">
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
                          ? "border-black bg-[#F8F4EE]"
                          : "border-[#ececec] bg-white hover:bg-[#F8F4EE]"
                      }`}
                    >

                      {/* QUESTION */}
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex items-center justify-between gap-3 px-4 md:px-6 py-5 text-left"
                      >
                        <h3
                          className={`text-[15px] md:text-[17px] leading-[1.6] font-semibold transition-all duration-300 ${
                            isOpen ? "text-black" : "text-black"
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

                              <p className="text-[14px] leading-8 whitespace-pre-line text-black/75 max-w-4xl">
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
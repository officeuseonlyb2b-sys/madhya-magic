"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Quote,
  BadgeCheck,
} from "lucide-react";

import testimonial1 from "@/assets/testimonial/testimonial1.jpeg";
import testimonial2 from "@/assets/testimonial/testimonial2.jpeg";
import testimonial3 from "@/assets/testimonial/testimonial3.jpeg";

import testimonial4 from "@/assets/testimonial/testimonialcompany1.png";
import testimonial5 from "@/assets/testimonial/testimonialcompany2.png";
import testimonial6 from "@/assets/testimonial/testimonialcompany3.png";

const testimonials = [
  // 1 CLIENT
  {
    type: "Client",
    name: "Hemant Kulkarni",
    location: "India",
    rating: 5,
    image: testimonial1,
    text:
      "Have a best experience. I finished a tour with Arpita Travels Private Ltd. Service was best with calm and quiet drivers.",
  },

  // 1 COMPANY
  {
    type: "Company",
    name: "Juee Parab",
    location: "Senior Executive",
    rating: 5,
    image: testimonial4,
    text:
      "First and foremost, a huge thank you for the amazing support. We are impressed with your itineraries and professionalism.",
  },

  // 2 CLIENT
  {
    type: "Client",
    name: "Aishwarya Chandra",
    location: "India",
    rating: 5,
    image: testimonial2,
    text:
      "Enchanting Madhya Pradesh is the best budget-friendly touring destination. Excellent stays and travel experience.",
  },

  // 2 COMPANY
  {
    type: "Company",
    name: "Mahesh Dangwal",
    location: "Team Leader",
    rating: 5,
    image: testimonial5,
    text:
      "Outstanding services in all departments including planning, pricing, follow-ups, and execution of itinerary.",
  },

  // 3 CLIENT
  {
    type: "Client",
    name: "Sitara Menon",
    location: "India",
    rating: 5,
    image: testimonial3,
    text:
      "My 7-day Madhya Pradesh trip was perfectly planned. Everything was smooth and well managed from start to end.",
  },

  // 3 COMPANY
  {
    type: "Company",
    name: "Abhishek Sengupta",
    location: "Director",
    rating: 5,
    image: testimonial6,
    text:
      "Seamless handling of tours over the past two years. Excellent execution and strong attention to detail.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev + 1 >= testimonials.length ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrent((prev) =>
      prev + 1 >= testimonials.length ? 0 : prev + 1
    );
  };

  const item = testimonials[current];

  return (
    <section className="relative overflow-hidden py-14 bg-[#f8fafc]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[280px] h-[280px] bg-[#C89B5E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[320px] h-[320px] bg-[#C89B5E]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4">

        {/* HEADING */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-10"
        >
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#C89B5E]">
            Clients & Partners Feedback
          </h2>

          <p className="text-gray-600 mt-3">
            Alternating real experiences from clients and companies
          </p>
        </motion.div>

        {/* CARD */}
        <div className="relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/75 backdrop-blur-xl shadow-[0_15px_60px_rgba(0,0,0,0.07)]"
            >

              <div className="grid md:grid-cols-[1fr_240px] min-h-[340px]">

                {/* CONTENT */}
                <div className="p-6 flex flex-col justify-between">

                  {/* TOP */}
                  <div className="flex items-center justify-between mb-5">

                    {/* STARS */}
                    <div className="flex gap-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#C89B5E] text-[#C89B5E]"
                        />
                      ))}
                    </div>

                    <Quote size={20} className="text-[#C89B5E]" />
                  </div>

                  {/* TAG */}
                  <div className="mb-3 flex items-center gap-2">
                    <BadgeCheck size={16} className="text-[#C89B5E]" />
                    <span className="text-xs font-semibold text-[#C89B5E] uppercase tracking-wide">
                      {item.type}
                    </span>
                  </div>

                  {/* TEXT */}
                  <p className="text-[16px] md:text-[17px] leading-[1.8] text-gray-700 font-medium">
                    “{item.text}”
                  </p>

                  {/* USER */}
                  <div className="flex items-center gap-3 mt-8">

                    <img
                      src={item.image}
                      className="w-12 h-12 rounded-xl object-cover"
                    />

                    <div>
                      <h4 className="font-bold text-gray-900">
                        {item.name}
                      </h4>

                      <div className="flex items-center gap-1 text-[#C89B5E] text-sm">
                        <MapPin size={12} />
                        {item.location}
                      </div>
                    </div>

                  </div>
                </div>

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* BADGE */}
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center gap-1">
                    <BadgeCheck size={12} className="text-[#C89B5E]" />
                    <p className="text-[11px] font-semibold text-[#C89B5E]">
                      {item.type} Verified
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="flex justify-center items-center gap-4 mt-8">

            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-[#C89B5E]"
            >
              <ChevronLeft />
            </button>

            <div className="flex gap-2 flex-wrap justify-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all ${
                    current === i
                      ? "w-8 h-2 bg-[#C89B5E]"
                      : "w-2 h-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-[#C89B5E] text-white flex items-center justify-center"
            >
              <ChevronRight />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
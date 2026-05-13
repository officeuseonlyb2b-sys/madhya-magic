"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    location: "Mumbai, India",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    text: "Everything was beautifully organized and premium.",
  },
  {
    name: "Emily Carter",
    location: "London, UK",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    text: "The local experiences felt authentic and beautiful.",
  },
  {
    name: "Rohan Mehta",
    location: "Delhi, India",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    text: "Completely stress-free and perfectly managed.",
  },
  {
    name: "Sophia Wilson",
    location: "Sydney, Australia",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
    text: "Tiger safari experience was unforgettable.",
  },
  {
    name: "Neha Kapoor",
    location: "Bangalore, India",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    text: "Warm hospitality and premium stays throughout.",
  },
  {
    name: "Daniel Brown",
    location: "Toronto, Canada",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
    text: "Excellent coordination and smooth support team.",
  },
  {
    name: "Priya Verma",
    location: "Pune, India",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    text: "Perfect blend of comfort and adventure.",
  },
  {
    name: "James Walker",
    location: "California, USA",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1200&auto=format&fit=crop",
    text: "Luxury stays and memorable experiences everywhere.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
  });

  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  // CHANGE THIS PART ONLY

// AUTO SLIDE
useEffect(() => {
  const timer = setInterval(() => {
    setCurrent((prev) =>
      prev + 2 >= testimonials.length ? 0 : prev + 2
    );
  }, 5000); // 5 seconds

  return () => clearInterval(timer);
}, []);


  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 2 : prev - 2
    );
  };

  const next = () => {
    setCurrent((prev) =>
      prev + 2 >= testimonials.length ? 0 : prev + 2
    );
  };

  const visibleTestimonials = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];

  return (
    <section className="py-12 md:py-16 bg-[#f7f7f5] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">

        {/* HEADING */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-[#ececec] rounded-full px-4 py-2 mb-5 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#f97343]" />

            <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#666]">
              Traveler Reviews
            </span>
          </div>

          <h2 className="text-[32px] md:text-[52px] leading-[1] tracking-[-2px] text-black font-light">
            Loved By{" "}
            <span className="font-semibold">
              Travelers
            </span>
          </h2>

          <p className="text-[#777] text-[14px] md:text-[16px] mt-4 max-w-xl mx-auto leading-relaxed">
            Beautiful journeys and unforgettable experiences shared
            by travelers around the world.
          </p>
        </motion.div>

        {/* SLIDER */}
        <div className="relative">

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid lg:grid-cols-2 gap-4"
            >
              {visibleTestimonials.map((item, index) => (
                <motion.div
                  key={`${item.name}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="group relative bg-white rounded-[26px] overflow-hidden border border-[#ececec] shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
                >

                  {/* BG */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#fffaf7] via-white to-[#f8f8f8]" />

                  {/* MAIN */}
                  <div className="relative grid md:grid-cols-[1fr_190px] min-h-[230px]">

                    {/* LEFT */}
                    <div className="p-5 md:p-6 flex flex-col justify-between">

                      <div>

                        {/* STARS */}
                        <div className="flex items-center gap-1 mb-4">
                          {Array.from({
                            length: item.rating,
                          }).map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className="fill-[#f97343] text-[#f97343]"
                            />
                          ))}
                        </div>

                        {/* REVIEW */}
                        <p className="text-[17px] md:text-[20px] leading-[1.7] tracking-[-0.4px] text-[#1d1d1d] font-medium">
                          “{item.text}”
                        </p>
                      </div>

                      {/* USER */}
                      <div className="mt-7">

                        <h4 className="text-[17px] font-semibold text-black">
                          {item.name}
                        </h4>

                        <div className="flex items-center gap-1.5 mt-1">
                          <MapPin
                            size={13}
                            className="text-[#888]"
                          />

                          <p className="text-[13px] text-[#777]">
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative h-[220px] md:h-full overflow-hidden">

                      <motion.img
                        src={item.image}
                        alt={item.name}
                        initial={{ scale: 1.08 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 1.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2500ms]"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* NAVIGATION */}
          <div className="flex justify-center items-center gap-4 mt-8">

            {/* PREV */}
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#e7e7e7] bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 shadow-sm"
            >
              <ChevronLeft size={17} />
            </button>

            {/* DOTS */}
            <div className="flex items-center gap-2">
              {[0, 2, 4, 6].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`rounded-full transition-all duration-500 ${
                    current === index
                      ? "w-8 h-2 bg-black"
                      : "w-2 h-2 bg-[#d4d4d4] hover:bg-black/40"
                  }`}
                />
              ))}
            </div>

            {/* NEXT */}
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition-all duration-500 shadow-sm"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
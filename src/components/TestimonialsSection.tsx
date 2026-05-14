"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Quote,
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
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev + 2 >= testimonials.length ? 0 : prev + 2
      );
    }, 5000);

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
    <section className="relative overflow-hidden py-14 bg-[#f8fafc]">
      
      {/* BG GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[280px] h-[280px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[320px] h-[320px] bg-orange-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 lg:px-6">

        {/* HEADING */}
<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 40 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{
    duration: 1,
  }}
  className="text-center mb-8"
>
  {/* TOP BADGE */}
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-white/80 backdrop-blur-md shadow-sm mb-4">
    
    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />

    <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-gray-600">
      Traveler Reviews
    </span>
  </div>

  {/* TITLE */}
  <div className="max-w-3xl mx-auto">
    <h2 className="text-[30px] md:text-[48px] leading-[1.05] tracking-[-2px] font-bold text-gray-900">
      Loved By{" "}
      <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
        Travelers Worldwide
      </span>
    </h2>

    {/* SUBTITLE */}
    <p className="text-gray-600 text-[14px] md:text-[15px] mt-3 max-w-2xl mx-auto leading-relaxed">
      Luxury journeys and unforgettable experiences shared
      by travelers around the world.
    </p>
  </div>
</motion.div>

        {/* SLIDER */}
        <div className="relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.7,
              }}
              className="grid lg:grid-cols-2 gap-5"
            >
              {visibleTestimonials.map((item, index) => (
                <motion.div
                  key={`${item.name}-${index}`}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/75 backdrop-blur-xl shadow-[0_15px_60px_rgba(0,0,0,0.07)]"
                >
                  
                  {/* GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-400/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />

                  <div className="relative grid md:grid-cols-[1fr_210px] min-h-[250px]">

                    {/* CONTENT */}
                    <div className="p-5 md:p-6 flex flex-col justify-between">

                      <div>

                        {/* TOP */}
                        <div className="flex items-center justify-between mb-5">

                          <div className="flex items-center gap-1">
                            {Array.from({
                              length: item.rating,
                            }).map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className="fill-[#ff7a45] text-[#ff7a45]"
                              />
                            ))}
                          </div>

                          <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                            <Quote size={18} />
                          </div>
                        </div>

                        {/* REVIEW */}
                        <p className="text-[18px] md:text-[21px] leading-[1.6] tracking-[-0.5px] text-gray-900 font-semibold">
                          “{item.text}”
                        </p>
                      </div>

                      {/* USER */}
                      <div className="flex items-center gap-3 mt-8">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-2xl object-cover border-2 border-white shadow-md"
                        />

                        <div>
                          <h4 className="text-[16px] font-bold text-gray-900">
                            {item.name}
                          </h4>

                          <div className="flex items-center gap-1 mt-1">
                            <MapPin
                              size={12}
                              className="text-gray-500"
                            />

                            <p className="text-[12px] text-gray-500">
                              {item.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* IMAGE */}
                    <div className="relative overflow-hidden min-h-[250px]">

                      <motion.img
                        src={item.image}
                        alt={item.name}
                        initial={{ scale: 1.08 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 1,
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2500ms]"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                      {/* BADGE */}
                      <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg">
                        <p className="text-[11px] font-semibold text-gray-900">
                          Verified Traveler
                        </p>
                      </div>
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
              className="w-11 h-11 rounded-full border border-white/60 bg-white/80 backdrop-blur-md flex items-center justify-center shadow-md hover:bg-black hover:text-white transition-all duration-500"
            >
              <ChevronLeft size={18} />
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
                      : "w-2 h-2 bg-gray-300 hover:bg-black/40"
                  }`}
                />
              ))}
            </div>

            {/* NEXT */}
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-500"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
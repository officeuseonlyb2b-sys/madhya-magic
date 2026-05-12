"use client";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const blogs = [
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    category: "Adventure",
    title: "Unforgettable Cultural Travel Experiences",
    description:
      "Traveling is an incredible way to explore cultures and landscapes...",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop",
    category: "Tips",
    title: "Ultimate Travel Packing List",
    description:
      "Discover smart packing strategies for stress-free travel...",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    category: "Destination",
    title: "Make The Most Of Your Holiday",
    description:
      "Plan your dream vacation with expert travel insights...",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop",
    category: "Travel",
    title: "Best Places To Visit In 2025",
    description:
      "Explore the most trending travel destinations this year...",
  },
  {
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop",
    category: "Nature",
    title: "Beautiful Nature Escapes",
    description:
      "Reconnect with nature through breathtaking journeys...",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    category: "Luxury",
    title: "Luxury Trips Around The World",
    description:
      "Experience premium travel destinations and resorts...",
  },
];

export default function TravelInsightsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      
      {/* HEADING */}
      <div className="text-center px-4 mb-14">
        <h2 className="text-3xl md:text-5xl leading-tight tracking-tight">
          <span className="font-bold text-black">
            Latest Travel
          </span>{" "}
          <span className="font-light text-black/70">
            Insights
          </span>

          <br />

          <span className="font-bold text-black">
            & Expert
          </span>{" "}
          <span className="font-light text-black/70">
            Tips
          </span>
        </h2>
      </div>

      {/* NAVIGATION */}
      <div className="max-w-7xl mx-auto flex justify-end gap-3 px-5 mb-8">
        <button
          onClick={() => scroll("left")}
          className="w-11 h-11 rounded-full border border-black/10 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="w-11 h-11 rounded-full border border-black/10 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* CAROUSEL */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-5 no-scrollbar"
      >
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative min-w-[320px] max-w-[320px] rounded-[26px] overflow-hidden bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex-shrink-0"
          >
            
            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <img
                src={blog.image}
                alt={blog.title}
                className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* CATEGORY */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md text-[#111] text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full">
                  {blog.category}
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6">

              {/* META */}
              <div className="flex items-center gap-2 text-[#999] text-[10px] uppercase tracking-[0.2em]">
                <span>Luxury Travel</span>

                <div className="w-1 h-1 rounded-full bg-[#c8a96b]" />

                <span>Editorial</span>
              </div>

              {/* TITLE */}
              <h3 className="text-[22px] sm:text-[24px] font-[700] leading-tight text-[#111] mt-4 transition-colors duration-300 group-hover:text-[#b8955d] line-clamp-2">
                {blog.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#666] leading-relaxed mt-4 text-sm">
                {blog.description}
              </p>

              {/* BUTTON */}
              <button className="mt-6 inline-flex items-center gap-3 text-[#111] font-medium group/button">

                <span className="uppercase tracking-[0.2em] text-[11px]">
                  Read Article
                </span>

                <div className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 group-hover/button:bg-black group-hover/button:text-white">
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover/button:translate-x-0.5"
                  />
                </div>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
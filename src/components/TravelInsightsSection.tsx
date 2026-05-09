"use client";

import {
  CalendarDays,
  FolderOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";

const blogs = [
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    category: "Adventure",
    title: "Unforgettable Cultural Travel Experiences",
    description:
      "Traveling is an incredible way to explore cultures and landscapes...",
    date: "February 6, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop",
    category: "Tips",
    title: "Ultimate Travel Packing List",
    description:
      "Discover smart packing strategies for stress-free travel...",
    date: "February 6, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    category: "Destination",
    title: "Make The Most Of Your Holiday",
    description:
      "Plan your dream vacation with expert travel insights...",
    date: "February 6, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop",
    category: "Travel",
    title: "Best Places To Visit In 2025",
    description:
      "Explore the most trending travel destinations this year...",
    date: "February 6, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop",
    category: "Nature",
    title: "Beautiful Nature Escapes",
    description:
      "Reconnect with nature through breathtaking journeys...",
    date: "February 6, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    category: "Luxury",
    title: "Luxury Trips Around The World",
    description:
      "Experience premium travel destinations and resorts...",
    date: "February 6, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
    category: "Road Trip",
    title: "Top Road Trip Adventures",
    description:
      "Enjoy scenic highways and unforgettable experiences...",
    date: "February 6, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop",
    category: "Beach",
    title: "Top Tropical Beach Destinations",
    description:
      "Relax at the world's most stunning beaches and islands...",
    date: "February 6, 2025",
  },
];

export default function TravelInsightsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 340;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#f5f5f5] py-20 overflow-hidden">
      
      {/* Heading */}
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

      {/* Buttons */}
      <div className="max-w-7xl mx-auto flex justify-end gap-3 px-5 mb-6">
        <button
          onClick={() => scroll("left")}
          className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-5 no-scrollbar"
      >
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[300px] bg-[#111111] rounded-[24px] overflow-hidden shadow-xl flex-shrink-0 group hover:-translate-y-2 transition-all duration-500"
          >
            
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              
              {/* Meta */}
              <div className="flex items-center gap-4 text-gray-400 text-xs mb-4 flex-wrap">
                
                <div className="flex items-center gap-1.5">
                  <CalendarDays size={14} />
                  <span>{blog.date}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <FolderOpen size={14} />
                  <span>{blog.category}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white text-[22px] leading-[1.3] font-semibold mb-4">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-6">
                {blog.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
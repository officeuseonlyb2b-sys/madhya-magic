"use client";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";
import { blogs } from "@/data/blogsData";

// UJJAIN BLOG IMAGE
import ujjainBlog from "@/assets/blog/ujjainblog.webp";

// ORCHHA BLOG IMAGE
import orchhaBlog from "@/assets/blog/orchhablog.webp";

export default function TravelInsightsSection() {
  const [current, setCurrent] = useState(0);

  // UPDATED BLOGS WITH UJJAIN + ORCHHA IMAGE
  const updatedBlogs = blogs.map((blog) =>
    blog.slug === "ujjain" ||
    blog.slug?.includes("ujjain") ||
    blog.title?.toLowerCase().includes("ujjain")
      ? {
          ...blog,
          image: ujjainBlog,
        }
      : blog.slug === "orchha" ||
        blog.slug?.includes("orchha") ||
        blog.title?.toLowerCase().includes("orchha")
      ? {
          ...blog,
          image: orchhaBlog,
        }
      : blog
  );

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev + 3 >= updatedBlogs.length ? 0 : prev + 3
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? updatedBlogs.length - 3 : prev - 3
    );
  };

  const visibleBlogs = [
    updatedBlogs[current],
    updatedBlogs[(current + 1) % updatedBlogs.length],
    updatedBlogs[(current + 2) % updatedBlogs.length],
  ];

  return (
    <section className="w-full bg-[#fafafa] py-20 overflow-hidden">

      <div className="max-w-6xl mx-auto px-4">

        {/* TOP */}
        <div className="flex items-end justify-between gap-5 mb-14">

          {/* HEADING */}
          <div>

            <span className="text-[11px] uppercase tracking-[0.32em] text-[#b8955d] font-semibold">
              Travel Journal
            </span>

            <h2 className="text-[34px] md:text-[52px] leading-[1] tracking-[-2px] mt-3 text-black font-display">
              <span className="font-bold">
                Latest Travel
              </span>{" "}

              <span className="font-light text-black/65">
                Insights
              </span>
            </h2>

            <p className="text-[#666] mt-4 text-[15px] max-w-xl leading-relaxed">
              Explore destination guides, luxury travel inspiration,
              and curated travel experiences from around the world.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="hidden md:flex items-center gap-3">

            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border border-black/10 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition-all duration-500 shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="relative overflow-visible">

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              initial={{
                opacity: 0,
                y: 40,
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
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
              style={{
                perspective: "2000px",
              }}
            >
              {visibleBlogs.map((blog, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 50,
                    rotateX: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                  }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -14,
                    rotateX: -6,
                    rotateY:
                      index === 1
                        ? 0
                        : index % 2 === 0
                        ? -4
                        : 4,
                    scale: 1.02,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center bottom",
                  }}
                  className="group relative rounded-[28px] overflow-visible transition-all duration-700"
                >

                  {/* 3D SHADOW LAYER */}
                  <div className="absolute inset-0 translate-y-5 scale-[0.96] rounded-[28px] bg-black/5 blur-2xl opacity-70 transition-all duration-700 group-hover:translate-y-7 group-hover:scale-[0.93]" />

                  {/* CARD */}
                  <Link
                    to={`/blogs/${blog.slug}`}
                    aria-label={blog.title}
                    className="block relative rounded-[28px] overflow-hidden bg-white border border-black/[0.04] shadow-[0_10px_25px_rgba(0,0,0,0.04),0_25px_60px_rgba(0,0,0,0.03)] group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.10),0_10px_25px_rgba(0,0,0,0.05)] transition-all duration-700"
                  >

                    {/* TOP ELEVATION LIGHT */}
                    <div className="absolute top-0 left-[8%] w-[84%] h-[14px] rounded-full bg-white/90 blur-xl z-20 opacity-90" />

                    {/* SOFT GLOW */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[#fff7ea]/60 via-transparent to-[#f8efe2]/30 pointer-events-none z-10" />

                    {/* IMAGE */}
                    <div className="relative overflow-hidden">

                      <img
                        src={blog.image}
                        alt={blog.title}
                        loading="lazy"
                        className="h-[220px] w-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-105"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                      {/* CATEGORY */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-white/85 backdrop-blur-xl text-[#111] text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full border border-white/60 shadow-sm">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="relative p-5 z-20">

                      {/* META */}
                      <div className="flex items-center gap-2 text-[#999] text-[10px] uppercase tracking-[0.18em]">

                        <span>Luxury Travel</span>

                        <div className="w-1 h-1 rounded-full bg-[#c8a96b]" />

                        <span>Editorial</span>

                        <div className="w-1 h-1 rounded-full bg-[#c8a96b]" />

                        <span>{blog.date}</span>
                      </div>

                      {/* TITLE */}
                      <h3 className="text-[20px] font-bold leading-[1.35] text-[#111] mt-4 transition-colors duration-300 group-hover:text-[#b8955d] line-clamp-2 font-display">
                        {blog.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="text-[#666] leading-7 mt-3 text-[14px] line-clamp-2">
                        {blog.description}
                      </p>

                      {/* BUTTON */}
                      <span className="mt-5 inline-flex items-center gap-3 text-[#111] font-medium group/button">

                        <span className="uppercase tracking-[0.18em] text-[11px]">
                          Read More
                        </span>

                        <span className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 group-hover/button:bg-black group-hover/button:text-white">

                          <ArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover/button:translate-x-0.5"
                          />
                        </span>
                      </span>
                    </div>

                    {/* OUTER RING */}
                    <div className="absolute inset-0 rounded-[28px] ring-0 ring-[#d4af37]/0 group-hover:ring-1 group-hover:ring-[#d4af37]/20 transition-all duration-700 pointer-events-none" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* MOBILE NAVIGATION */}
          <div className="flex md:hidden justify-center items-center gap-3 mt-8">

            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-black/10 bg-white flex items-center justify-center shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
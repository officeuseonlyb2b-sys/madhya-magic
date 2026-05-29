"use client";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";
import { blogs } from "@/data/blogsData";

// BLOG IMAGES
import ujjainBlog from "@/assets/blog/ujjainblog.webp";
import khajurahoBlog from "@/assets/blog/khajurahoblod.webp";
import jabalpurBlog from "@/assets/blog/jabalpurblog.webp";
import datiaBlog from "@/assets/blog/datiablog.webp";
import gwaliorBlog from "@/assets/blog/gwaliorblog.webp";
import orchhaBlog from "@/assets/blog/orchhablog.webp";

export default function TravelInsightsSection() {
  const [current, setCurrent] = useState(0);

  // HELPER TO MATCH BLOG IMAGE
  const getBlogImage = (blog) => {
    if (
      blog.slug?.includes("ujjain") ||
      blog.title?.toLowerCase().includes("ujjain")
    ) {
      return ujjainBlog;
    }

    if (
      blog.slug?.includes("khajuraho") ||
      blog.title?.toLowerCase().includes("khajuraho")
    ) {
      return khajurahoBlog;
    }

    if (
      blog.slug?.includes("jabalpur") ||
      blog.title?.toLowerCase().includes("jabalpur")
    ) {
      return jabalpurBlog;
    }

    if (
      blog.slug?.includes("datia") ||
      blog.title?.toLowerCase().includes("datia")
    ) {
      return datiaBlog;
    }

    if (
      blog.slug?.includes("gwalior") ||
      blog.title?.toLowerCase().includes("gwalior")
    ) {
      return gwaliorBlog;
    }

    // ORCHHA IMAGE
    if (
      blog.slug?.includes("orchha") ||
      blog.title?.toLowerCase().includes("orchha")
    ) {
      return orchhaBlog;
    }

    return blog.image;
  };

  const updatedBlogs = blogs.map((blog) => ({
    ...blog,
    image: getBlogImage(blog),
  }));

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
          <div>
            

            <h2 className="text-[34px] md:text-[52px] leading-[1] tracking-[-2px] mt-3 text-black font-display">
              <span className="font-bold">Travel</span>{" "}
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
              className="w-11 h-11 rounded-full border border-black/10 bg-white flex items-center justify-center hover:bg-[#C89B5E]  hover:text-white transition-all duration-300 shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-[#C89B5E] text-white flex items-center justify-center hover:opacity-90 transition-all duration-300 shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="relative overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {visibleBlogs.map((blog, index) => (
              <div
                key={index}
                className="group relative rounded-[28px] overflow-hidden bg-white border border-black/[0.04] shadow-[0_10px_25px_rgba(0,0,0,0.04)] transition-all duration-300"
              >
                <Link
                  to={`/blogs/${blog.slug}`}
                  aria-label={blog.title}
                  className="block"
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden rounded-t-[28px]">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      className="h-[220px] w-full object-cover" decoding="async" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-white/85 backdrop-blur-xl text-[#111] text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full border border-white/60 shadow-sm">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[#999] text-[10px] uppercase tracking-[0.18em]">
                      <span>Luxury Travel</span>

                      <div className="w-1 h-1 rounded-full bg-[#c8a96b]" />

                      <span>Editorial</span>

                      <div className="w-1 h-1 rounded-full bg-[#c8a96b]" />

                      <span>{blog.date}</span>
                    </div>

                    <h3 className="text-[20px] font-bold leading-[1.35] text-[#111] mt-4 line-clamp-2 font-display">
                      {blog.title}
                    </h3>

                    <p className="text-[#666] leading-7 mt-3 text-[14px] line-clamp-2">
                      {blog.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-3 text-[#111] font-medium">
                      <span className="uppercase tracking-[0.18em] text-[11px]">
                        Read More
                      </span>

                      <span className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center">
                        <ArrowRight size={14} />
                      </span>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

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
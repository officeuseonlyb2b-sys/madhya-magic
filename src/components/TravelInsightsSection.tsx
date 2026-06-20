"use client";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useMemo, useRef, useState } from "react";

import { Link } from "react-router-dom";
import { blogs } from "@/data/blogsData";
import { useIsMobile } from "@/hooks/use-mobile";

// BLOG IMAGES
import ujjainBlog from "@/assets/blog/ujjainblog.webp";
import khajurahoBlog from "@/assets/blog/khajurahoblod.webp";
import jabalpurBlog from "@/assets/blog/jabalpurblog.webp";
import datiaBlog from "@/assets/blog/datiablog.webp";
import gwaliorBlog from "@/assets/blog/gwaliorblog.webp";
import orchhaBlog from "@/assets/blog/orchhablog.webp";

export default function TravelInsightsSection() {
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

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

    if (
      blog.slug?.includes("orchha") ||
      blog.title?.toLowerCase().includes("orchha")
    ) {
      return orchhaBlog;
    }

    return blog.image;
  };

  const updatedBlogs = useMemo(
    () => blogs.map((blog) => ({ ...blog, image: getBlogImage(blog) })),
    []
  );

  // DESKTOP arrows — page by 3
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

  // MOBILE arrows — scroll by one card
  const scrollMobileBy = (dir: 1 | -1) => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-mobile-card]");
    const step = card ? card.offsetWidth + 28 /* gap */ : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const visibleBlogs = [
    updatedBlogs[current],
    updatedBlogs[(current + 1) % updatedBlogs.length],
    updatedBlogs[(current + 2) % updatedBlogs.length],
  ];

  const renderCard = (blog: typeof updatedBlogs[number], index: number, extraClass = "") => (
    <div
      key={index}
      data-mobile-card
      className={`group relative rounded-[28px] overflow-hidden bg-white border border-black/[0.04] shadow-[0_10px_25px_rgba(0,0,0,0.04)] transition-all duration-300 ${extraClass}`}
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
  );

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

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous insights"
              className="w-11 h-11 rounded-full border border-black/10 bg-white flex items-center justify-center hover:bg-[#C89B5E]  hover:text-white transition-all duration-300 shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next insights"
              className="w-11 h-11 rounded-full bg-[#C89B5E] text-white flex items-center justify-center hover:opacity-90 transition-all duration-300 shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* MOBILE: horizontal swipeable carousel */}
        {isMobile ? (
          <div className="relative">
            <div
              ref={mobileScrollRef}
              className="flex gap-7 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 -mx-4 px-4"
              style={{ scrollBehavior: "smooth" }}
            >
              {updatedBlogs.map((blog, i) => (
                <div
                  key={i}
                  className="snap-center shrink-0 w-[85%]"
                >
                  {renderCard(blog, i)}
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-3 mt-8">
              <button
                onClick={() => scrollMobileBy(-1)}
                aria-label="Previous insight"
                className="w-10 h-10 rounded-full border border-black/10 bg-white flex items-center justify-center shadow-sm"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => scrollMobileBy(1)}
                aria-label="Next insight"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-sm"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        ) : (
          /* DESKTOP / TABLET: existing 3-up grid */
          <div className="relative overflow-visible">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {visibleBlogs.map((blog, index) => renderCard(blog, index))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import imgGetaway from "@/assets/travel-getaway.jpg";
import imgWomen from "@/assets/travel-women.jpg";
import imgSpecial from "@/assets/travel-special.jpg";
import imgBestselling from "@/assets/travel-bestselling.jpg";
import imgSenior from "@/assets/travel-senior.jpg";
import imgSeasonal from "@/assets/travel-seasonal.jpg";
import imgGroup from "@/assets/travel-group.jpg";
import imgLuxury from "@/assets/travel-luxury.jpg";

interface CategoryItem {
  label: string;
  description: string;
  image: string;
  query: string;
}

const categories: CategoryItem[] = [
  {
    label: "Special Interest Tour Packages",
    description:
      "Thematic tours focused on wildlife, heritage, spirituality, art, or adventure.",
    image: imgSpecial,
    query: "?tourCategory=Special%20Interest%20Tours",
  },
  {
    label: "Seasonal Tour Packages",
    description:
      "Curated experiences to celebrate the best of Madhya Pradesh during every season.",
    image: imgSeasonal,
    query: "?tourCategory=Seasonal%20Tours",
  },
  {
    label: "Luxury / Experiential Exclusive Tour Packages",
    description:
      "High-end journeys with premium stays, unique activities, and immersive experiences.",
    image: imgLuxury,
    query: "?tourCategory=Luxury%20Experiential",
  },
  {
    label: "School / College Exclusive Tour Packages",
    description:
      "Educational, safe, and fun-filled tours designed specifically for students and groups.",
    image: imgGroup,
    query: "?tourCategory=Group",
  },
  {
    label: "VIP Guest Handling",
    description:
      "Specialized handling for high-profile guests in MP with comfort and security.",
    image: imgWomen,
    query: "?tourCategory=VIP",
  },
  {
    label: "Quick Getaways",
    description:
      "Short relaxing trips for weekend escapes and quick rejuvenation.",
    image: imgGetaway,
    query: "?tourCategory=Quick",
  },
  {
    label: "Best Selling Tours",
    description:
      "Most loved and top-rated travel experiences by our customers.",
    image: imgBestselling,
    query: "?tourCategory=Best",
  },
  {
    label: "Senior Citizen Tours",
    description:
      "Comfortable and slow-paced travel specially designed for seniors.",
    image: imgSenior,
    query: "?tourCategory=Senior",
  },
];

const HomeCategoryShowcase = () => {
  const isMobile = useIsMobile();
  const [startIndex, setStartIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + 1 >= categories.length - 4 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? categories.length - 5 : prev - 1
    );
  };

  const scrollMobileBy = (dir: 1 | -1) => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-mobile-card]");
    const step = card ? card.offsetWidth + 24 /* gap-6 */ : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const visibleCards = categories.slice(
    startIndex,
    startIndex + 5
  );

  const renderCard = (item: CategoryItem, index: number) => (
    <Link
      key={index}
      data-mobile-card
      to={`/packages${item.query}`}
      className="group relative rounded-[28px] overflow-hidden bg-white border border-[#ebebeb] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(212,175,55,0.28)]"
    >
      {/* GLOW EFFECT */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#fff7dd]/60 via-transparent to-[#fff2c2]/40 pointer-events-none z-10" />

      {/* IMAGE */}
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={item.image}
          alt={item.label}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2500ms] ease-out" loading="lazy" decoding="async" />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent opacity-80" />

        {/* GOLD CORNER */}
        <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-[#d4af37] rounded-tr-xl z-20" />
      </div>

      {/* CONTENT */}
      <div className="relative px-5 py-5 text-center z-20">
        <h3 className="text-[18px] leading-[1.3] font-bold text-[#1e2432] min-h-[60px] transition-colors duration-300 group-hover:text-black font-display">
          {item.label}
        </h3>

        <div className="w-10 h-[2px] bg-[#d4af37] mx-auto my-3 rounded-full transition-all duration-500 group-hover:w-16" />

        <p className="text-[14px] leading-6 text-[#666] line-clamp-3">
          {item.description}
        </p>
      </div>

      {/* OUTER GLOW */}
      <div className="absolute inset-0 rounded-[28px] ring-0 ring-[#d4af37]/0 group-hover:ring-2 group-hover:ring-[#d4af37]/40 transition-all duration-500" />
    </Link>
  );

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-[42px] md:text-[58px] font-light leading-none text-[#1e2432] font-display">
            <span className="font-bold">
              Know what we offer in Madhya Pradesh
            </span>
          </h2>

          <p className="mt-5 text-[18px] md:text-[22px] text-[#2d2d2d] font-medium">
            Tailor-Made Travel Solutions for Every Client Type
          </p>
        </div>

        {isMobile ? (
          /* MOBILE: horizontal swipe carousel with arrows */
          <div className="relative">
            <div
              ref={mobileScrollRef}
              className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-6 px-6 pb-2"
            >
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="snap-center shrink-0 w-[80%]"
                >
                  {renderCard(item, index)}
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-3 mt-6">
              <button
                onClick={() => scrollMobileBy(-1)}
                aria-label="Previous category"
                className="w-11 h-11 rounded-full bg-[#ececec] flex items-center justify-center shadow-sm"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={() => scrollMobileBy(1)}
                aria-label="Next category"
                className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center shadow-sm"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        ) : (
          /* DESKTOP: existing 5-up windowed carousel */
          <div className="relative flex items-center">
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="absolute -left-3 z-20 w-14 h-14 rounded-full bg-[#ececec] hover:bg-black hover:text-white transition-all duration-500 flex items-center justify-center shadow-md"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full px-8">
              {visibleCards.map((item, index) => renderCard(item, index))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next"
              className="absolute -right-3 z-20 w-14 h-14 rounded-full bg-[#ececec] hover:bg-black hover:text-white transition-all duration-500 flex items-center justify-center shadow-md"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeCategoryShowcase;
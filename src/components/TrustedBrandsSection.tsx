"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

// BRAND LOGOS
import brand1 from "@/assets/brand/brand1.png";
import brand2 from "@/assets/brand/brand2.png";
import brand3 from "@/assets/brand/brand3.png";
import brand4 from "@/assets/brand/brand4.png";
import brand5 from "@/assets/brand/brand5.png";
import brand6 from "@/assets/brand/brand6.png";
import brand7 from "@/assets/brand/brand7.png";
import brand8 from "@/assets/brand/brand8.png";
import brand9 from "@/assets/brand/brand9.png";
import brand10 from "@/assets/brand/brand10.png";
import brand11 from "@/assets/brand/brand11.png";
import brand12 from "@/assets/brand/brand12.png";
import brand13 from "@/assets/brand/brand13.png";
import brand14 from "@/assets/brand/brand14.png";
import brand15 from "@/assets/brand/brand15.png";

const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
  brand13,
  brand14,
  brand15,
];

export default function TrustedBrandsSection() {
  return (
    <section className="relative w-full overflow-hidden py-4 bg-[#f8fafc]">
      
      {/* BG GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] w-[260px] h-[260px] bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute right-[-120px] bottom-[-120px] w-[260px] h-[260px] bg-orange-400/10 blur-3xl rounded-full" />
      </div>

      {/* MAIN STRIP */}
      <div className="relative flex flex-col md:flex-row items-stretch md:items-center overflow-hidden border-y border-white/60 bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)]">

        {/* LEFT CONTENT */}
        <div className="relative z-20 flex items-center gap-4 md:gap-5 md:min-w-fit px-5 md:px-8 lg:px-12 py-4 md:py-5 bg-white md:border-r border-b md:border-b-0 border-gray-200/60 w-full md:w-auto">

          <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 text-primary shrink-0">
            <ShieldCheck size={26} />
          </div>

          <div className="min-w-0">
            <p className="text-[11px] md:text-[13px] uppercase tracking-[3px] md:tracking-[4px] text-gray-500 font-semibold mb-1">
              Trusted By
            </p>

            <h2 className="text-[22px] md:text-[30px] lg:text-[42px] font-bold text-gray-900 leading-[0.95] tracking-[-1px] md:tracking-[-1.5px] md:whitespace-nowrap">
              Brands That
              <span className="block text-primary text-[18px] md:text-[26px] lg:text-[36px] mt-1">
                Trust Us
              </span>
            </h2>
          </div>
        </div>

        {/* LOGO SLIDER */}
        <div className="relative w-full md:flex-1 overflow-hidden py-0">
          
          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 z-10 h-full w-14 bg-gradient-to-r from-white via-white to-transparent" />

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 z-10 h-full w-14 bg-gradient-to-l from-white via-white to-transparent" />

          <motion.div
            className="flex items-center gap-10 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 60, // ✅ thoda fast — pehle 15 (fast), phir 120 (bahut slow), ab 60 (balanced)
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...brands, ...brands].map((logo, index) => {
              const originalIndex = index % brands.length;

              return (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[240px] h-[170px] -mx-8"
                >
                  <img
                    src={logo}
                    alt={`Brand Logo ${index + 1}`}
                    loading="lazy"
                    className={`w-auto max-w-none object-contain opacity-100

                      ${
                        originalIndex === 0
                          ? "h-[200px] min-w-[380px]"
                          : ""
                      }

                      ${
                        [4, 9, 11, 13].includes(originalIndex)
                          ? "h-[240px] min-w-[470px]"
                          : ""
                      }

                      ${
                        ![0, 4, 9, 11, 13].includes(originalIndex)
                          ? "h-[160px] min-w-[260px]"
                          : ""
                      }
                    `} decoding="async" />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
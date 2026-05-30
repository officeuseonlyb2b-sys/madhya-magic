import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Send,
  Award,
  ChevronRight,
  Shield,
  Compass,
  Handshake,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import TravelPartnerOnboardingModal from "@/components/TravelPartnerOnboardingModal";

import logo from "@/assets/footerlogo.png";
import footerBackground from "@/assets/footerbackground.png";

// FOOTER IMAGES
import footer1 from "@/assets/footer/footer1.webp";
import footer2 from "@/assets/footer/footer2.webp";
import footer3 from "@/assets/footer/footer3.webp";
import footer4 from "@/assets/footer/footer4.webp";
import footer5 from "@/assets/footer/footer5.webp";
import footer6 from "@/assets/footer/footer6.webp";
import footer7 from "@/assets/footer/footer7.webp";
import footer8 from "@/assets/footer/footer8.webp";
import footer9 from "@/assets/footer/footer9.webp";
import footer10 from "@/assets/footer/footer10.webp";
import footer11 from "@/assets/footer/footer11.webp";
import footer12 from "@/assets/footer/footer12.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    destinations: [
      { name: "Ujjain", path: "/destination/ujjain" },
      { name: "Pachmarhi", path: "/destination/pachmarhi" },
      { name: "Khajuraho", path: "/destination/khajuraho" },
      { name: "Kanha", path: "/destination/kanha" },
      { name: "Bandhavgarh", path: "/destination/bandhavgarh" },
      { name: "Orchha", path: "/destination/orchha" },
      { name: "Bhopal", path: "/destination/bhopal" },
      { name: "Gwalior", path: "/destination/gwalior" },
      { name: "Jabalpur", path: "/destination/jabalpur" },
    ],

    quickLinks: [
      { name: "Packages", href: "/#packages" },
      { name: "Experiences", href: "/#experiences" },
      { name: "Travel Insights", href: "/blogs" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Create Query", href: "/create-query" },
    ],

    legalLinks: [
      { name: "Terms & Conditions", href: "/terms-conditions" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Cancellation Policy", href: "/cancellation-policy" },
      { name: "Careers", href: "/careers" },
      { name: "Help", href: "/help" },
    ],
  };

  const socialIcons = [
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  const instagramImages = [
    footer1,
    footer2,
    footer3,
    footer4,
    footer5,
    footer6,
    footer7,
    footer8,
    footer9,
    footer10,
    footer11,
    footer12,
  ];

  return (
    <footer className="relative overflow-hidden bg-[#030814] text-white pt-16 pb-5">

      {/* FOOTER BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.16] scale-[1.03]"
        style={{
          backgroundImage: `url(${footerBackground})`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#030814]/88" />

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.06),transparent_25%)]" />

      {/* VERTICAL TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 60px)",
        }}
      />

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[520px] bg-amber-500/10 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[420px] bg-yellow-500/10 blur-[130px] rounded-full" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 lg:gap-x-6 xl:gap-x-8 pb-10 border-b border-white/10 items-start">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 lg:pr-6 lg:border-r border-white/10 flex justify-center"
          >
            <div className="flex flex-col items-center text-center max-w-[340px] mx-auto lg:translate-x-2">

              {/* LOGO */}
              <div className="relative -mt-6 mb-1">
                <img
                  src={logo}
                  alt="Enchanting MP"
                  className="w-[230px] lg:w-[250px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]" loading="lazy" decoding="async" />
              </div>

              {/* DIVIDER */}
              <div className="relative w-[220px] h-[1px] bg-amber-400/30 mt-3">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-400 text-[10px]">
                  ✦
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-[15px] leading-[1.95] mt-5 max-w-[310px] text-center">
                Your gateway to explore the Heart
                <br />
                of incredible India..
              </p>

              {/* BADGE */}
              <div className="flex items-center justify-center gap-2 mt-6">
                <Award size={15} className="text-amber-400 flex-shrink-0" />

                <span className="text-[13px] text-gray-300">
                  Recognized by MP Tourism
                </span>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex items-center justify-center gap-4 mt-7">
                {socialIcons.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="w-11 h-11 rounded-full border border-amber-400/25 bg-transparent flex items-center justify-center text-white hover:border-amber-400 hover:text-amber-300 transition-all duration-300"
                  >
                    <social.Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* DESTINATIONS */}
          <div className="md:col-span-2 min-w-0">

            <div className="mb-7">
              <h3 className="relative text-[12.5px] font-semibold tracking-[1.8px] uppercase text-amber-400 pb-3 border-b border-white/10 flex items-center gap-2">

                <MapPin
                  size={14}
                  className="text-amber-400 flex-shrink-0"
                />

                Destinations

                <span className="absolute left-0 -bottom-[1px] w-[30px] h-[2px] bg-amber-400" />
              </h3>
            </div>

            <ul className="space-y-3.5">
              {footerLinks.destinations.slice(0, 5).map((dest, idx) => (
                <li key={idx}>
                  <Link
                    to={dest.path}
                    className="group flex items-center gap-2 text-[14px] text-gray-300 hover:text-amber-300 transition-all duration-500"
                  >
                    <ChevronRight
                      size={12}
                      className="text-amber-400 flex-shrink-0 group-hover:translate-x-1 transition-all duration-500"
                    />

                    <span>{dest.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* EXPLORE */}
          <div className="md:col-span-2 min-w-0">

            <div className="mb-7">
              <h3 className="relative text-[12.5px] font-semibold tracking-[1.8px] uppercase text-amber-400 pb-3 border-b border-white/10 flex items-center gap-2">

                <Compass
                  size={14}
                  className="text-amber-400 flex-shrink-0"
                />

                Explore

                <span className="absolute left-0 -bottom-[1px] w-[30px] h-[2px] bg-amber-400" />
              </h3>
            </div>

            <ul className="space-y-3.5">
              {footerLinks.quickLinks.map((link, idx) => (
                <li key={idx}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-[14px] text-gray-300 hover:text-amber-300 transition-all duration-500"
                    >
                      <ChevronRight
                        size={12}
                        className="text-amber-400 flex-shrink-0 group-hover:translate-x-1 transition-all duration-500"
                      />

                      <span>{link.name}</span>
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="group flex items-center gap-2 text-[14px] text-gray-300 hover:text-amber-300 transition-all duration-500"
                    >
                      <ChevronRight
                        size={12}
                        className="text-amber-400 flex-shrink-0 group-hover:translate-x-1 transition-all duration-500"
                      />

                      <span>{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div className="md:col-span-2 min-w-0">

            <div className="mb-7">
              <h3 className="relative text-[12.5px] font-semibold tracking-[1.8px] uppercase text-amber-400 pb-3 border-b border-white/10 flex items-center gap-2">

                <Shield
                  size={14}
                  className="text-amber-400 flex-shrink-0"
                />

                Legal

                <span className="absolute left-0 -bottom-[1px] w-[30px] h-[2px] bg-amber-400" />
              </h3>
            </div>

            <ul className="space-y-3.5">
              {footerLinks.legalLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="group flex items-start gap-2 text-[14px] text-gray-300 hover:text-amber-300 transition-all duration-500"
                  >
                    <ChevronRight
                      size={12}
                      className="text-amber-400 flex-shrink-0 mt-[4px] group-hover:translate-x-1 transition-all duration-500"
                    />

                    <span className="leading-[1.6]">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="md:col-span-3 lg:border-l border-white/10 lg:pl-7">

            <div className="mb-7">
              <h3 className="relative text-[12.5px] font-semibold tracking-[1.8px] uppercase text-amber-400 pb-3 border-b border-white/10">
                Contact Us

                <span className="absolute left-0 -bottom-[1px] w-[30px] h-[2px] bg-amber-400" />
              </h3>
            </div>

            <div className="space-y-5">

              {/* PHONE */}
              <div className="flex items-start gap-3">
                <div className="w-[34px] h-[34px] rounded-[8px] flex-shrink-0 bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mt-[2px]">
                  <Phone size={14} className="text-amber-400" />
                </div>

                <div>
                  <div className="text-[10.5px] uppercase tracking-[0.8px] text-white/50 mb-1">
                    Phone
                  </div>

                  <a
                    href="tel:+919109114934"
                    className="text-[13.5px] text-white/80 leading-[1.55] hover:text-amber-400 transition-colors duration-300"
                  >
                    +91 9109114934
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3">
                <div className="w-[34px] h-[34px] rounded-[8px] flex-shrink-0 bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mt-[2px]">
                  <Mail size={14} className="text-amber-400" />
                </div>

                <div>
                  <div className="text-[10.5px] uppercase tracking-[0.8px] text-white/50 mb-1">
                    Email
                  </div>

                  <a
                    href="mailto:info@enchantingmp.com"
                    className="text-[13.5px] text-white/80 leading-[1.55] hover:text-amber-400 transition-colors duration-300 break-all"
                  >
                    info@enchantingmp.com
                  </a>
                </div>
              </div>

    {/* ADDRESS */}
    <div className="flex items-start gap-3">
      <div className="w-[34px] h-[34px] rounded-[8px] flex-shrink-0 bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mt-[2px]">
        <MapPin size={14} className="text-amber-400" />
      </div>

      <div>
        <div className="text-[10.5px] uppercase tracking-[0.8px] text-white/50 mb-1">
          Address
        </div>

        <p className="text-[13.5px] text-white/80 leading-[1.55] max-w-[260px]">
          1st Floor, Jain Bhawan,
          Above Himalaya Wellness Centre,
          Nayaa Bazaar, Gwalior,
          Madhya Pradesh - 474009
        </p>
      </div>
    </div>
  </div>

  {/* CTA BADGE */}
  <div className="mt-6 flex items-center gap-3 rounded-[12px] border border-amber-400/25 bg-gradient-to-br from-amber-400/10 to-amber-400/[0.04] px-4 py-3 backdrop-blur-[4px]">

    <div className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center bg-amber-400/10 border border-amber-400/20 flex-shrink-0">
      <Send size={15} className="text-amber-400" />
    </div>

    <div>
      <strong className="block text-[11px] tracking-[0.6px] text-amber-400 uppercase mb-1">
        Quick Support
      </strong>

      <span className="text-[12.5px] text-white/80 leading-[1.45]">
        Quick response within 24 hours
      </span>
    </div>
  </div>
</div>
</div>

{/* INSTAGRAM SECTION */}
<div className="mt-8 border border-white/10 rounded-[28px] px-5 py-4 lg:px-6 lg:py-5 bg-[#brown] relative overflow-hidden">

  {/* subtle overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02]" />

  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-5">

{/* LEFT */}
<div className="lg:min-w-[170px] flex lg:flex-col items-center lg:items-start justify-between gap-3">
  <div>
    <div className="flex items-center gap-2 mb-1.5">
      <Instagram size={15} className="text-white" />

      <h3 className="text-[17px] lg:text-[18px] font-serif font-semibold leading-none text-white">
        Follow On Insta
      </h3>
    </div>

    <p className="text-[11px] text-gray-400 leading-relaxed">
      Explore our latest travel moments
    </p>
  </div>

  <button className="group flex items-center gap-1.5 rounded-full border border-amber-400/30 px-4 py-2 text-[12px] text-amber-300 hover:bg-amber-400 hover:text-black transition-all duration-300 whitespace-nowrap">
    View More

    <ChevronRight
      size={13}
      className="group-hover:translate-x-1 transition-all duration-300"
    />
  </button>
</div>

    {/* IMAGES */}
    <div className="relative flex-1 overflow-hidden">

      {/* fade effect */}
      <div className="absolute left-0 top-0 z-20 h-full w-12 bg-gradient-to-r from-[#08111f] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-20 h-full w-12 bg-gradient-to-l from-[#08111f] to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-3 w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...instagramImages, ...instagramImages].map((img, idx) => (
          <div
            key={idx}
            className="group relative rounded-[18px] overflow-hidden flex-shrink-0 border border-white/10 bg-[#101826] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
          >
            {/* image */}
            <img
              src={img}
              alt={`Instagram ${idx + 1}`}
              loading="eager"
              draggable={false}
              className="h-[95px] w-[130px] object-cover object-center scale-[1.01] group-hover:scale-110 transition-transform duration-700"
              style={{
                imageRendering: "auto",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }} decoding="async" />

            {/* sharpness overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/[0.03] pointer-events-none" />
          </div>
        ))}
      </motion.div>
    </div>
  </div>
</div>

        {/* COPYRIGHT */}
        <div className="pt-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-gray-400 text-[13px]">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-base">♡</span>

            <span>Made with love for Madhya Pradesh</span>
          </div>

          <div className="text-center">
            © {currentYear} Enchanting Madhya Pradesh. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Proudly associated with</span>

            <div className="text-white font-bold text-2xl tracking-wider">
              MP
            </div>

            <div className="text-[10px] uppercase tracking-[3px] text-gray-500">
              Tourism
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
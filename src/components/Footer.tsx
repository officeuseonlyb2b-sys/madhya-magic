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
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

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
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  // LOCAL FOOTER IMAGES
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
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white pt-16 pb-8 overflow-hidden">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.06] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600')",
        }}
      />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 lg:gap-x-8 pb-12 border-b border-white/10 items-start">
          {/* 1. BRAND COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <div className="mb-5">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Enchanting MP Logo"
                  className="w-14 h-14 object-contain flex-shrink-0"
                />

                <h2 className="text-[28px] leading-none font-bold whitespace-nowrap bg-[#b28434] bg-clip-text text-transparent">
                  Enchanting MP
                </h2>
              </div>
            </div>

            <p className="text-gray-300 text-[15px] leading-[1.9] max-w-[300px]">
              Your gateway to exploring the heart of incredible India. Curated
              travel experiences across Madhya Pradesh — from ancient temples to
              roaring tigers.
            </p>

            <div className="flex items-center gap-2 mt-5">
              <Award size={16} className="text-amber-400 flex-shrink-0" />
              <span className="text-xs text-gray-400">
                Recognized by MP Tourism
              </span>
            </div>

            <div className="flex gap-4 mt-8">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-12 h-12 rounded-full border border-white/15 bg-white/5 backdrop-blur-md flex items-center justify-center text-gray-300 hover:text-white hover:border-amber-400/40 transition-all duration-300"
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* DESTINATIONS */}
          <motion.div className="md:col-span-2 md:pl-4">
            <h3 className="text-[30px] font-semibold mb-6 text-white">
              Destinations
            </h3>

            <ul className="space-y-3">
              {footerLinks.destinations.slice(0, 5).map((dest, idx) => (
                <li key={idx}>
                  <Link
                    to={dest.path}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* EXPLORE */}
          <motion.div className="md:col-span-2">
            <h3 className="text-[30px] font-semibold mb-6 text-white">
              Explore
            </h3>

            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, idx) => (
                <li key={idx}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* LEGAL + CONTACT */}
          <motion.div className="md:col-span-5">
            <div className="flex flex-col lg:flex-row justify-between gap-10">
              {/* LEGAL */}
              <div className="min-w-[180px]">
                <h3 className="text-[30px] font-semibold mb-6 text-white">
                  Legal
                </h3>

                <ul className="space-y-3">
                  {footerLinks.legalLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-amber-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTACT */}
              <div className="flex-1 max-w-[360px]">
                <h3 className="text-[30px] font-semibold mb-6 text-white">
                  Contact
                </h3>

                <div className="space-y-5">
                  {/* PHONE */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-amber-400" />
                    </div>

                    <a
                      href="tel:+919109114934"
                      className="text-white text-[16px]"
                    >
                      +91 9109114934
                    </a>
                  </div>

                  {/* EMAIL */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-amber-400" />
                    </div>

                    <a
                      href="mailto:info@enchantingmp.com"
                      className="text-gray-300 text-[15px] break-all"
                    >
                      info@enchantingmp.com
                    </a>
                  </div>

                  {/* ADDRESS */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-amber-400" />
                    </div>

                    <p className="text-gray-300 text-sm leading-[1.9] pt-1">
                      1st Floor, Jain Bhawan, Above Himalaya Wellness Centre,
                      Nayaa Bazaar, Gwalior, Madhya Pradesh – 474009
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Send size={14} className="text-amber-400" />
                    <span>Quick response within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* INSTAGRAM SECTION */}
        <div className="pt-8 overflow-hidden">
          <h3 className="text-[38px] font-semibold mb-8 text-white">
            Follow Instagram
          </h3>

          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-4 w-max"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...instagramImages, ...instagramImages].map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-[22px] overflow-hidden flex-shrink-0"
                >
                  <img
                    src={img}
                    alt={`Instagram ${idx + 1}`}
                    className="h-[120px] w-[180px] object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center pt-10 text-gray-400 text-sm">
          © {currentYear} Enchanting Madhya Pradesh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
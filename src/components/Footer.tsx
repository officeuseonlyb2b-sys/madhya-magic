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
    <footer className="relative overflow-hidden bg-[#030814] text-white pt-24 pb-8">
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* MAIN FOOTER */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-y-14 lg:gap-x-6 xl:gap-x-8 pb-16 border-b border-white/10 items-start">
  
  {/* BRAND */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="md:col-span-3 pr-6 border-r border-white/10"
  >
    <div className="flex flex-col items-start max-w-[280px]">
      <img
        src={logo}
        alt="Enchanting MP"
        className="w-[170px] object-contain"
      />

      <div className="w-40 h-[1px] bg-amber-400/40 mt-5 relative">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-400" />
      </div>

      <p className="text-gray-300 text-[15px] leading-[2] mt-7">
        Your gateway to explore the Heart of incredible India..
      </p>

      <div className="flex items-center gap-2 mt-8">
        <Award size={16} className="text-amber-400" />

        <span className="text-[14px] text-gray-300">
          Recognized by MP Tourism
        </span>
      </div>

      <div className="flex items-center gap-4 mt-8">
        {socialIcons.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="w-12 h-12 rounded-full border border-amber-400/20 bg-white/[0.03] flex items-center justify-center text-white hover:border-amber-400 hover:text-amber-300 transition-all duration-300"
          >
            <social.Icon size={18} />
          </motion.a>
        ))}
      </div>
    </div>
  </motion.div>

{/* DESTINATIONS */}
<div className="md:col-span-2 min-w-0">
  <div className="flex items-center gap-2 mb-5">
    <MapPin
      size={17}
      className="text-amber-400 flex-shrink-0 mt-[2px]"
    />

    <h3 className="text-[24px] lg:text-[26px] font-serif font-semibold leading-none whitespace-nowrap">
      Destinations
    </h3>
  </div>

  <div className="w-14 h-[2px] bg-amber-400/70 mb-7" />

  <ul className="space-y-5">
    {footerLinks.destinations.slice(0, 5).map((dest, idx) => (
      <li key={idx}>
        <Link
          to={dest.path}
          className="group flex items-center gap-2 text-[15px] text-gray-300 hover:text-amber-300 transition-all duration-500 hover:-translate-y-1 whitespace-nowrap"
        >
          <ChevronRight
            size={13}
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
  <div className="flex items-center gap-2 mb-5">
    <Compass
      size={17}
      className="text-amber-400 flex-shrink-0 mt-[2px]"
    />

    <h3 className="text-[24px] lg:text-[26px] font-serif font-semibold leading-none whitespace-nowrap">
      Explore
    </h3>
  </div>

  <div className="w-14 h-[2px] bg-amber-400/70 mb-7" />

  <ul className="space-y-5">
    {footerLinks.quickLinks.map((link, idx) => (
      <li key={idx}>
        {link.href.startsWith("/#") ? (
          <a
            href={link.href}
            className="group flex items-center gap-2 text-[15px] text-gray-300 hover:text-amber-300 transition-all duration-500 hover:-translate-y-1 whitespace-nowrap"
          >
            <ChevronRight
              size={13}
              className="text-amber-400 flex-shrink-0 group-hover:translate-x-1 transition-all duration-500"
            />

            <span>{link.name}</span>
          </a>
        ) : (
          <Link
            to={link.href}
            className="group flex items-center gap-2 text-[15px] text-gray-300 hover:text-amber-300 transition-all duration-500 hover:-translate-y-1 whitespace-nowrap"
          >
            <ChevronRight
              size={13}
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
  <div className="flex items-center gap-2 mb-5">
    <Shield
      size={17}
      className="text-amber-400 flex-shrink-0 mt-[2px]"
    />

    <h3 className="text-[24px] lg:text-[26px] font-serif font-semibold leading-none whitespace-nowrap">
      Legal
    </h3>
  </div>

  <div className="w-14 h-[2px] bg-amber-400/70 mb-7" />

  <ul className="space-y-5">
    {footerLinks.legalLinks.map((link, idx) => (
      <li key={idx}>
        <Link
          to={link.href}
          className="group flex items-start gap-2 text-[15px] text-gray-300 hover:text-amber-300 transition-all duration-500 hover:-translate-y-1"
        >
          <ChevronRight
            size={13}
            className="text-amber-400 flex-shrink-0 mt-[5px] group-hover:translate-x-1 transition-all duration-500"
          />

          <span className="leading-[1.7]">
            {link.name}
          </span>
        </Link>
      </li>
    ))}
  </ul>
</div>

  {/* CONTACT */}
  <div className="md:col-span-3 border-l border-white/10 lg:pl-8">
    <div className="flex items-center gap-2 mb-5">
      <Phone size={18} className="text-amber-400 flex-shrink-0" />

      <h3 className="text-[26px] lg:text-[30px] font-serif font-semibold leading-none">
        Contact Us
      </h3>
    </div>

    <div className="w-14 h-[2px] bg-amber-400/70 mb-8" />

    <div className="space-y-6">
      {/* PHONE */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full border border-amber-400/20 bg-white/[0.03] flex items-center justify-center flex-shrink-0">
          <Phone size={18} className="text-amber-400" />
        </div>

        <a
          href="tel:+919109114934"
          className="text-[16px] text-gray-200"
        >
          +91 9109114934
        </a>
      </div>

      {/* EMAIL */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full border border-amber-400/20 bg-white/[0.03] flex items-center justify-center flex-shrink-0">
          <Mail size={18} className="text-amber-400" />
        </div>

        <a
          href="mailto:info@enchantingmp.com"
          className="text-[15px] text-gray-300 break-all leading-relaxed"
        >
          info@enchantingmp.com
        </a>
      </div>

      {/* ADDRESS */}
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-full border border-amber-400/20 bg-white/[0.03] flex items-center justify-center flex-shrink-0">
          <MapPin size={18} className="text-amber-400" />
        </div>

        <p className="text-gray-300 text-[15px] leading-[2] pt-1 max-w-[260px]">
          1st Floor, Jain Bhawan,
          Above Himalaya Wellness Centre,
          Nayaa Bazaar, Gwalior,
          Madhya Pradesh - 474009
        </p>
      </div>
    </div>

    {/* QUICK RESPONSE */}
    <div className="mt-8">
      <div className="rounded-2xl border border-amber-400/20 bg-white/[0.03] px-5 py-4 flex items-center gap-3">
        <Send size={16} className="text-amber-400 flex-shrink-0" />

        <span className="text-[15px] text-gray-200">
          Quick response within 24 hours
        </span>
      </div>
    </div>
  </div>
</div>

        {/* INSTAGRAM SECTION */}
        <div className="mt-14 border border-white/10 rounded-[32px] p-6 lg:p-8 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            {/* LEFT */}
            <div className="min-w-[230px]">
              <div className="flex items-center gap-3 mb-8">
                <Instagram size={24} className="text-white" />

                <h3 className="text-[34px] font-serif font-semibold">
                  Follow Instagram
                </h3>
              </div>

              <button className="group flex items-center gap-3 rounded-full border border-amber-400/30 px-7 py-4 text-[18px] text-amber-300 hover:bg-amber-400 hover:text-black transition-all duration-300">
                View More

                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-all duration-300"
                />
              </button>
            </div>

            {/* IMAGES */}
            <div className="relative flex-1 overflow-hidden">
              <motion.div
                className="flex gap-5 w-max"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...instagramImages, ...instagramImages].map((img, idx) => (
                  <div
                    key={idx}
                    className="rounded-[24px] overflow-hidden flex-shrink-0 border border-white/10"
                  >
                    <img
                      src={img}
                      alt={`Instagram ${idx + 1}`}
                      className="h-[160px] w-[220px] object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-10 flex flex-col lg:flex-row items-center justify-between gap-5 text-gray-400 text-[15px]">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-lg">♡</span>

            <span>Made with love for Madhya Pradesh</span>
          </div>

          <div className="text-center">
            © {currentYear} Enchanting Madhya Pradesh. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <span>Proudly associated with</span>

            <div className="text-white font-bold text-3xl tracking-wider">
              MP
            </div>

            <div className="text-[11px] uppercase tracking-[3px] text-gray-500">
              Tourism
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
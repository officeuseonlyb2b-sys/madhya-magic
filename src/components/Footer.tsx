import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Send,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ---------- Slider data (Unsplash images) ----------
  const sliderImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=500&fit=crop",
      title: "Mountain Escape",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=500&fit=crop",
      title: "Beach Paradise",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&h=500&fit=crop",
      title: "Historic Temple",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&h=500&fit=crop",
      title: "City Lights",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=500&fit=crop",
      title: "Wildlife Safari",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  // ---------- Footer links (existing content preserved) ----------
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

    // Renamed to "Explore" for Travilla style
    exploreLinks: [
      { name: "Packages", href: "/#packages" },
      { name: "Experiences", href: "/#experiences" },
      { name: "Travel Insights", href: "/blogs" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Create Query", href: "/create-query" },
    ],

    legalLinks: [
      { name: "Terms & Condition", href: "/terms-conditions" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Cancellation Policy", href: "/cancellation-policy" },
      { name: "Careers", href: "/careers" },
      { name: "Help", href: "/help" },
    ],
  };

  const socialIcons = [
    {
      Icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
      color: "hover:bg-gradient-to-tr from-purple-500 to-pink-500",
    },
    {
      Icon: Facebook,
      href: "https://facebook.com",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      Icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:bg-sky-500",
    },
    {
      Icon: Youtube,
      href: "https://youtube.com",
      label: "YouTube",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <footer className="relative bg-gray-900 text-white pt-12 pb-8 overflow-hidden">
      {/* ----- KEPT: animated background elements (made very subtle) ----- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -200],
              x: [0, (Math.random() - 0.5) * 80],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* ----- NEW: Image slider (Unsplash) ----- */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl relative group">
          <div className="relative h-[300px] md:h-[400px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={sliderImages[currentIndex].url}
                alt={sliderImages[currentIndex].title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
              />
            </AnimatePresence>

            {/* Gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {sliderImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? "w-8 bg-amber-400"
                      : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ----- MAIN FOOTER GRID (Travilla style) ----- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Column 1: Brand + Follow Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Enchanting MP
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 mt-2" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your gateway to exploring the heart of incredible India. Curated
              travel experiences across Madhya Pradesh — from ancient temples to
              roaring tigers.
            </p>

            {/* "Follow Instagram" (exactly as in Travilla) */}
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <Instagram size={20} className="text-amber-400 group-hover:scale-110 transition" />
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-300 hover:text-amber-400 transition"
              >
                Follow Instagram
              </a>
            </div>

            <div className="flex gap-3">
              {socialIcons.map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-300 transition-all duration-300 border border-white/10 ${social.color} hover:text-white hover:border-transparent`}
                  aria-label={social.label}
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Explore (was Quick Links) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-bold text-lg mb-5 relative inline-block">
              Explore
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-amber-400 rounded-full" />
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.exploreLinks.map((link, idx) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.02 }}
                  viewport={{ once: true }}
                >
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 transition-all duration-300 hover:pl-2 block"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-amber-400 transition-all duration-300 hover:pl-2 block"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-bold text-lg mb-5 relative inline-block">
              Destinations
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-amber-400 rounded-full" />
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.destinations.map((dest, idx) => (
                <motion.li
                  key={dest.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.02 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={dest.path}
                    className="text-gray-400 hover:text-amber-400 transition-all duration-300 hover:pl-2 block"
                  >
                    {dest.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Legal + Contact (combined like Travilla) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-bold text-lg mb-5 relative inline-block">
              Legal
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-amber-400 rounded-full" />
            </h4>
            <ul className="space-y-2.5 text-sm mb-6">
              {footerLinks.legalLinks.map((link, idx) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.02 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-all duration-300 hover:pl-2 block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-3">Contact us</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-amber-400" />
                  <a href="tel:+919109114934" className="text-gray-300 hover:text-amber-400">
                    +91 9109114934
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-amber-400" />
                  <a href="mailto:info@enchantingmp.com" className="text-gray-300 hover:text-amber-400">
                    info@enchantingmp.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-amber-400 mt-0.5" />
                  <span className="text-gray-300 text-xs">
                    1st Floor, Jain Bhawan, Above Himalaya Wellness Centre,
                    Nayaa Bazaar, Gwalior, MP – 474009
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar (simplified – keep existing links) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <p>© {currentYear} Enchanting Madhya Pradesh. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-amber-400 transition">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-amber-400 transition">
              Terms of Service
            </Link>
            <Link to="/cancellation-policy" className="hover:text-amber-400 transition">
              Cancellation Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
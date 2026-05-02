import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube, Send, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      { name: "Jabalupr", path: "/destination/jabalpur" },
    ],
    quickLinks: [
      { name: "Packages", href: "/#packages" },
      { name: "Experiences", href: "/#experiences" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Create Query", href: "/create-query" },
    ],
  };

  const socialIcons = [
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:bg-gradient-to-tr from-purple-500 to-pink-500" },
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-600" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-sky-500" },
    { Icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "hover:bg-red-600" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white pt-20 pb-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            transition={{ duration: 10 + Math.random() * 15, repeat: Infinity, delay: Math.random() * 5 }}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Brand Column */}
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
              Your gateway to exploring the heart of incredible India. Curated travel experiences across Madhya Pradesh — from ancient temples to roaring tigers.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Award size={16} className="text-amber-400" />
              <span className="text-xs text-gray-400">Recognized by MP Tourism</span>
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

          {/* Destinations Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-bold text-lg mb-5 relative inline-block">
              Top Destinations
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-amber-400 rounded-full" />
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.destinations.map((dest, idx) => (
                <motion.li
                  key={dest.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.02 }}
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

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-bold text-lg mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-amber-400 rounded-full" />
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.quickLinks.map((link, idx) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.02 }}
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

          {/* Contact Info Column - Updated Address & Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-bold text-lg mb-5 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-amber-400 rounded-full" />
            </h4>
            <ul className="space-y-4 text-sm">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group"
              >
                <MapPin size={18} className="shrink-0 mt-0.5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 leading-relaxed">
                  1st Floor, Jain Bhawan, Above Himalaya Wellness Centre,<br />
                  Nayaa Bazaar, Gwalior, Madhya Pradesh – 474009 (India)
                </span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group"
              >
                <Phone size={18} className="text-amber-400 group-hover:scale-110 transition-transform" />
                <a href="tel:+919109114934" className="text-gray-300 hover:text-amber-400 transition-colors">
                  +91 9109114934
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group"
              >
                <Mail size={18} className="text-amber-400 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@enchantingmp.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                  info@enchantingmp.com
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group"
              >
                <Clock size={18} className="text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300">Mon - Sat: 9:00 AM - 7:00 PM</span>
              </motion.li>
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Send size={14} className="text-amber-400" />
                <span>Quick response within 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <p>
            © {currentYear} Enchanting Madhya Pradesh. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">
              Cancellation Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
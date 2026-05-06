import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { exploreCategories, type MapCategory } from "@/data/mapDestinations";
import natureImg from "@/assets/explore/nature.jpg";
import heritageImg from "@/assets/explore/heritage.jpg";
import spiritualImg from "@/assets/explore/spiritual.jpg";
import wildlifeImg from "@/assets/explore/wildlife.png";

const categoryImages: Record<MapCategory, string> = {
  Nature: natureImg,
  Heritage: heritageImg,
  Spiritual: spiritualImg,
  Wildlife: wildlifeImg,
};

const navLinks = [
  { label: "Packages", href: "/packages" },
  { label: "Activities", href: "/activities" },
  { label: "Experiences", href: "/experiences" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const categoryIcons: Record<MapCategory, string> = {
  Nature: "🌄",
  Heritage: "🏛️",
  Wildlife: "🐅",
  Spiritual: "🛕",
};

const categoryOrder: MapCategory[] = [
  "Nature",
  "Heritage",
  "Wildlife",
  "Spiritual",
];

const categoryRoutes: Record<MapCategory, string> = {
  Nature: "/nature",
  Heritage: "/heritage",
  Wildlife: "/wildlife",
  Spiritual: "/spiritual",
};

/* ===============================
Explore Dropdown (Desktop)
================================ */

const ExploreDropdown = ({ scrolled }: { scrolled: boolean }) => {
  const [open, setOpen] = useState(false);
  const [activeCat, setActiveCat] = useState<MapCategory>("Nature");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const navigate = useNavigate();

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
      window.dispatchEvent(new CustomEvent("hero-category-hover", { detail: {} }));
    }, 200);
  };

  const handleCatEnter = (cat: MapCategory) => {
    setActiveCat(cat);
    window.dispatchEvent(
      new CustomEvent("hero-category-hover", { detail: { category: cat } })
    );
  };

  const activeDests = exploreCategories[activeCat]?.destinations ?? [];

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button className="nav-font flex items-center gap-2 text-sm text-white">
        Explore
        <motion.div animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown size={14} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute left-1/2 -translate-x-1/2 mt-6 flex
            bg-black/70 backdrop-blur-xl
            rounded-3xl border border-white/10 shadow-2xl z-50"
          >
            {/* Categories */}
            <div className="p-3 w-[180px] border-r border-white/10">
              {categoryOrder.map((cat) => (
                <button
                  key={cat}
                  onMouseEnter={() => handleCatEnter(cat)}
                  onClick={() => {
                    setOpen(false);
                    navigate(categoryRoutes[cat]);
                  }}
                  className={`nav-font text-white flex items-center gap-2
                  w-full px-3 py-2.5 text-sm rounded-xl transition
                  ${
                    activeCat === cat
                      ? "bg-white/20"
                      : "hover:bg-white/10"
                  }`}
                >
                  <span>{categoryIcons[cat]}</span>
                  {cat}
                  <ChevronRight className="ml-auto" size={12} />
                </button>
              ))}
            </div>

            {/* Destinations */}
            <div className="p-3 w-[220px] max-h-[360px] overflow-y-auto">
              <p className="text-white/40 text-[10px] uppercase tracking-widest px-3 mb-2">
                {activeCat} Destinations
              </p>

              {activeDests.map((dest) => (
                <Link
                  key={dest.id}
                  to={`/destination/${dest.id}`}
                  onClick={() => setOpen(false)}
                  className="block nav-font text-white/80 text-sm px-3 py-2 rounded-lg hover:bg-white/10 transition truncate"
                >
                  {dest.name}
                </Link>
              ))}

              <Link
                to={categoryRoutes[activeCat]}
                onClick={() => setOpen(false)}
                className="block nav-font text-primary text-sm font-semibold px-3 py-2 mt-1 rounded-lg hover:bg-white/10 transition"
              >
                View All {activeCat} →
              </Link>
            </div>

            {/* Static category image */}
            <div className="p-3 w-[260px]">
              <div className="relative w-full h-full min-h-[280px] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={categoryImages[activeCat]}
                  alt={`${activeCat} in Madhya Pradesh`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="nav-font text-white text-xs uppercase tracking-widest opacity-80">
                    {categoryIcons[activeCat]} Discover
                  </p>
                  <p className="font-display text-white text-lg leading-tight">
                    {activeCat} of MP
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ===============================
Navbar
================================ */

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<MapCategory | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50
      transition-all duration-500
      ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl py-3 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div
        className={`container mx-auto px-6 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "h-16" : "h-24"
        }`}
      >
        {/* ✅ MP STYLE LOGO */}
        <Link to="/" className="flex items-center">
          <motion.img
            src={logo}
            initial={false}
            animate={{
              height: scrolled ? 56 : 88,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="object-contain"
            style={{ transformOrigin: "left center" }}
          />
        </Link>

        {/* Desktop */}
        <div
          className={`hidden md:flex items-center gap-10 transition-all duration-300 ${
            scrolled ? "mt-0" : "mt-2"
          }`}
        >
          <ExploreDropdown scrolled={scrolled} />

          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="nav-font text-white text-sm"
            >
              {link.label}
            </Link>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="nav-font border border-white/30 px-6 py-2.5 rounded-full text-white backdrop-blur-md"
          >
            Book Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-black/80 backdrop-blur-xl"
          >
            <div className="flex flex-col p-6 gap-2 max-h-[80vh] overflow-y-auto">
              <p className="nav-font text-white/50 text-xs uppercase tracking-widest">
                Explore
              </p>

              {categoryOrder.map((cat) => (
                <div key={cat}>
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === cat ? null : cat
                      )
                    }
                    className="nav-font text-white flex items-center gap-2 w-full py-2"
                  >
                    <span>{categoryIcons[cat]}</span> {cat}
                    <ChevronDown
                      size={14}
                      className={`ml-auto transition-transform ${
                        mobileExpanded === cat ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileExpanded === cat && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-6"
                      >
                        {exploreCategories[cat].destinations.map((dest) => (
                          <Link
                            key={dest.id}
                            to={`/destination/${dest.id}`}
                            onClick={() => setMobileOpen(false)}
                            className="block nav-font text-white/70 text-sm py-1.5"
                          >
                            {dest.name}
                          </Link>
                        ))}

                        <Link
                          to={`/${cat.toLowerCase()}`}
                          onClick={() => setMobileOpen(false)}
                          className="block nav-font text-primary text-sm font-semibold py-1.5"
                        >
                          View All {cat} →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="border-t border-white/10 my-1" />

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="nav-font text-white py-2"
                >
                  {link.label}
                </Link>
              ))}

              <button className="nav-font border border-white py-3 rounded-xl text-white mt-2">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
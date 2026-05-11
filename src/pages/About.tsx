import { motion, useInView } from "framer-motion";
import WhyChooseUse from "@/components/WhyChooseUs";
import HomeCategoryShowcase from "@/components/HomeCategoryShowcase";
import { useRef } from "react";
import {
  Compass,
  Sparkles,
  Users,
  Heart,
  Camera,
  Landmark,
  Bird,
  ShieldCheck,
  Globe2,
  MapPinned,
  ScrollText,
  Plane,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const stats = [
  {
    title: "Since",
    value: "2014",
  },
  {
    title: "Curated Journeys",
    value: "1000+",
  },
  {
    title: "Destination Specialists",
    value: "Trusted",
  },
  {
    title: "Experiences Across",
    value: "Madhya Pradesh",
  },
];

const features = [
  {
    title: "Deep Local Expertise",
    icon: Globe2,
  },
  {
    title: "Personalized Travel Planning",
    icon: Compass,
  },
  {
    title: "Handcrafted Experiences",
    icon: Sparkles,
  },
  {
    title: "Authentic Cultural Connections",
    icon: Landmark,
  },
  {
    title: "Trusted Local Network",
    icon: MapPinned,
  },
  {
    title: "Seamless Support",
    icon: ShieldCheck,
  },
];

const offerings = [
  { title: "Quick Getaways", icon: Plane },
  { title: "Women Exclusive Tours", icon: Heart },
  { title: "Group Tours", icon: Users },
  { title: "Luxury Journeys", icon: Sparkles },
  { title: "Wildlife Tours", icon: Bird },
  { title: "Spiritual Tours", icon: ScrollText },
  { title: "Cultural Tours", icon: Landmark },
  { title: "Honeymoon Experiences", icon: Heart },
  { title: "Festival Tours", icon: Sparkles },
  { title: "Photography Tours", icon: Camera },
  { title: "Culinary Tours", icon: Sparkles },
  { title: "Narmada Parikrama", icon: Compass },
];

const blogs = [
  {
    title: "Exploring The Hidden Heritage Of Madhya Pradesh",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Luxury Wildlife Experiences In Central India",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Spiritual Journeys Across Sacred India",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2070&auto=format&fit=crop",
  },
];

const experts = [
  {
    name: "Ashish Prajapati",
    role: "Destination Specialist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop",
  },
  {
    name: "Shivam Kushwah",
    role: "Destination Specialist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop",
  },
  {
    name: "Chhaya Prajapati",
    role: "Destination Specialist",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop",
  },
  {
    name: "Deeksha Saini",
    role: "Destination Specialist",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop",
  },
];

const testimonials = [1, 2, 3];

const About = () => {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true });

  return (
    <div className="bg-white text-black overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-white/60" />

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C8A96B]/10 blur-[140px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black/10 bg-white/80 backdrop-blur-xl mb-8">
              <Sparkles size={16} className="text-[#C8A96B]" />
              <span className="uppercase tracking-[0.25em] text-sm text-black/70">
                Luxury Destination Specialists
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-[-0.04em] text-black">
              Discover The Soul Of Madhya Pradesh
            </h1>

            <p className="mt-8 text-lg md:text-xl text-black/70 leading-relaxed max-w-3xl">
              Thoughtfully curated journeys inspired by heritage, wildlife,
              spirituality, culture, and authentic local experiences.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="px-8 py-4 rounded-full bg-black text-white font-semibold hover:scale-105 transition">
                Explore Journeys
              </button>

              <button className="px-8 py-4 rounded-full border border-black/10 bg-white/70 backdrop-blur-xl hover:bg-black hover:text-white transition">
                Our Story
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Card */}
        <div className="absolute bottom-10 right-6 md:right-16 backdrop-blur-3xl bg-white/90 border border-black/10 rounded-[30px] p-8 w-[320px]">
          <p className="text-[#C8A96B] uppercase tracking-[0.2em] text-sm">
            Since 2014
          </p>

          <h3 className="text-2xl font-bold mt-3 leading-snug text-black">
            Specialists In Curated Experiences Across Madhya Pradesh
          </h3>
        </div>
      </section>

      {/* ABOUT */}
      <section ref={aboutRef} className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2070&auto=format&fit=crop"
                className="rounded-[36px] h-[700px] object-cover w-full"
                alt=""
              />

              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2070&auto=format&fit=crop"
                className="absolute -bottom-10 -right-8 w-[260px] h-[320px] rounded-[30px] object-cover border border-black/10"
                alt=""
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#C8A96B] uppercase tracking-[0.3em] text-sm">
                About Us
              </span>

              <h2 className="text-5xl md:text-6xl font-black mt-5 leading-tight text-black">
                Curating Meaningful Journeys Since 2014
              </h2>

              <div className="space-y-6 mt-10 text-black/70 text-lg leading-relaxed">
                <p>
                  Founded in 2014, Enchanting Madhya Pradesh began its journey
                  by crafting personalized experiences for international
                  travelers visiting India through leading travel companies.
                </p>

                <p>
                  Over the years, this deep involvement in the inbound travel
                  space helped us develop a strong understanding of global
                  travel standards, authentic experiences, and the art of
                  creating meaningful journeys.
                </p>

                <p>
                  Today, we create journeys that go beyond sightseeing —
                  thoughtfully designed experiences that connect travelers with
                  the stories, wilderness, traditions, and timeless charm of
                  Madhya Pradesh.
                </p>

                <div className="p-8 rounded-[28px] border border-black/10 bg-[#f8f8f8] backdrop-blur-2xl mt-8">
                  <p className="text-2xl font-medium leading-relaxed text-black">
                    “Experiences designed around authenticity, emotion, culture,
                    and timeless memories.”
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

{/* MISSION & VISION */}
<section className="py-10 md:py-14 bg-[#fafafa] overflow-hidden">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-7 md:mb-10">
      <span className="text-[#C8A96B] uppercase tracking-[0.22em] text-[10px] md:text-xs">
        Our Purpose
      </span>

      <h2 className="text-2xl md:text-4xl font-black mt-2 leading-tight text-black">
        Mission & Vision
      </h2>
    </div>

    {/* Cards */}
    <div className="grid lg:grid-cols-2 gap-4 md:gap-5">
      {[
        {
          title: "Our Vision",
          text: `To showcase the true soul of Madhya Pradesh through authentic and thoughtfully crafted journeys that connect travelers with nature, culture, heritage, spirituality, and local communities.

We aim to become a trusted destination specialist helping travelers discover the timeless beauty and hidden treasures of Central India.`,
        },
        {
          title: "Our Mission",
          text: `To create seamless and personalized travel experiences that go beyond traditional tourism through local expertise, genuine hospitality, and carefully curated journeys.

We strive to make every journey memorable through meaningful experiences, emotions, and stories travelers carry back with them.`,
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-black/10 bg-white p-5 md:p-6 hover:border-[#C8A96B]/40 shadow-sm"
        >
          {/* Icon */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#C8A96B]/10 border border-[#C8A96B]/20 flex items-center justify-center mb-4">
            <Compass className="text-[#C8A96B] w-4 h-4 md:w-5 md:h-5" />
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-3xl font-black mb-3 text-black">
            {item.title}
          </h3>

          {/* Text */}
          <p className="text-black/70 text-sm md:text-[15px] leading-6 whitespace-pre-line">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* WHY CHOOSE US */}
      <WhyChooseUse />

      <HomeCategoryShowcase />

      {/* TESTIMONIALS */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-[#C8A96B] uppercase tracking-[0.3em] text-sm">
              Testimonials
            </span>

            <h2 className="text-5xl font-black mt-4 text-black">
              What Travelers Say
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div
                key={item}
                className="rounded-[32px] border border-black/10 bg-[#fafafa] p-10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-black/10" />

                  <div>
                    <h4 className="font-semibold text-black">Client Name</h4>
                    <p className="text-black/50 text-sm">
                      Traveler Experience
                    </p>
                  </div>
                </div>

                <p className="text-black/70 leading-relaxed">
                  “Beautifully curated travel experiences filled with
                  authenticity, comfort, and unforgettable memories.”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOGS */}
      <section className="py-32 bg-[#fafafa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-[#C8A96B] uppercase tracking-[0.3em] text-sm">
              Our Blogs
            </span>

            <h2 className="text-5xl font-black mt-4 text-black">
              Stories & Inspirations
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="rounded-[32px] overflow-hidden border border-black/10 bg-white"
              >
                <img
                  src={blog.image}
                  className="h-[280px] w-full object-cover"
                  alt=""
                />

                <div className="p-8">
                  <span className="text-[#C8A96B] text-sm uppercase tracking-[0.2em]">
                    Travel Stories
                  </span>

                  <h3 className="text-2xl font-bold mt-4 leading-snug text-black">
                    {blog.title}
                  </h3>

                  <p className="text-black/60 mt-4 leading-relaxed">
                    Discover meaningful stories, hidden experiences, and luxury
                    travel inspirations across Madhya Pradesh.
                  </p>

                  <button className="mt-6 flex items-center gap-2 text-black font-medium">
                    Read More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL EXPERTS */}
      <section className="py-14 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#C8A96B] uppercase tracking-[0.22em] text-[10px] md:text-xs">
              Meet Our
            </span>

            <h2 className="text-2xl md:text-5xl font-black mt-2 leading-tight text-black">
              Destination Specialists
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {experts.map((expert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-black/10 bg-[#fafafa] p-5 text-center hover:border-[#C8A96B]/30"
              >
                <img
                  src={expert.image}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto border-2 border-black/10"
                  alt=""
                />

                <h3 className="text-lg md:text-xl font-bold mt-4 text-black">
                  {expert.name}
                </h3>

                <p className="text-[#C8A96B] text-sm mt-1">
                  {expert.role}
                </p>

                <div className="flex items-center justify-center gap-3 mt-5">
                  <div className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center hover:bg-[#C8A96B]/10 transition-all duration-300">
                    <Facebook size={16} />
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center hover:bg-[#C8A96B]/10 transition-all duration-300">
                    <Instagram size={16} />
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center hover:bg-[#C8A96B]/10 transition-all duration-300">
                    <Twitter size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 bg-[#fafafa]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black max-w-5xl mx-auto leading-tight text-black">
            Begin Your Journey Through The Heart Of India
          </h2>

          <div className="flex flex-wrap justify-center gap-5 mt-12">
            <button className="px-10 py-5 rounded-full bg-black text-white font-semibold hover:scale-105 transition">
              Explore Tours
            </button>

            <button className="px-10 py-5 rounded-full border border-black/10 bg-white hover:bg-black hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default About;
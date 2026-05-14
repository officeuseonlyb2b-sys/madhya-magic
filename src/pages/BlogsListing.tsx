import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowRight, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";
import { blogs, blogCategories } from "@/data/blogsData";

const BlogsListing = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(6);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogs.filter((b) => {
      const matchesCat = category === "All" || b.category === category;
      const matchesQ = !q ||
        b.title.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q) ||
        b.shortTitle.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [query, category]);

  const shown = filtered.slice(0, visible);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <SEO
        title="Travel Insights & Stories from Madhya Pradesh | Enchanting MP"
        description="Discover curated travel insights, destination guides and luxury journeys across Madhya Pradesh — from Gwalior and Khajuraho to Ujjain, Orchha, Datia and Jabalpur."
        type="website"
      />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,#c8a96b_0%,transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[11px] uppercase tracking-[0.32em] text-[#c8a96b]">Travel Journal</span>
            <h1 className="font-display text-[40px] md:text-[64px] leading-[1.05] font-bold mt-3">
              Travel Insights
            </h1>
            <p className="text-white/70 mt-5 max-w-xl mx-auto leading-relaxed">
              Curated guides, cultural stories and luxury travel inspiration from across the heart of incredible India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEARCH + FILTERS */}
      <section className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 flex flex-col md:flex-row gap-4 items-stretch md:items-center border border-black/5">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search insights, destinations, stories..."
              className="w-full pl-11 pr-4 py-3 bg-[#fafafa] rounded-xl border border-black/5 text-[14px] focus:outline-none focus:border-[#c8a96b]"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto md:overflow-visible">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`shrink-0 px-4 py-2.5 rounded-xl text-[11px] uppercase tracking-[0.2em] border transition-all duration-300 ${
                  category === cat
                    ? "bg-black text-white border-black"
                    : "bg-white text-[#444] border-black/10 hover:border-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        {shown.length === 0 ? (
          <p className="text-center text-[#666] py-20">No insights match your search.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {shown.map((blog, i) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="block relative rounded-[24px] overflow-hidden bg-white border border-black/[0.04] shadow-[0_10px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-700"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      className="h-[220px] w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/85 backdrop-blur-xl text-[#111] text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full border border-white/60">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-[#999] text-[10px] uppercase tracking-[0.18em]">
                      <span className="flex items-center gap-1.5"><Calendar size={11} /> {blog.date}</span>
                      <div className="w-1 h-1 rounded-full bg-[#c8a96b]" />
                      <span className="flex items-center gap-1.5"><Clock size={11} /> {blog.readTime}</span>
                    </div>
                    <h3 className="font-display text-[20px] font-bold leading-[1.35] text-[#111] mt-4 line-clamp-2 group-hover:text-[#b8955d] transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-[#666] leading-7 mt-3 text-[14px] line-clamp-2">{blog.description}</p>
                    <span className="mt-5 inline-flex items-center gap-3 text-[#111] font-medium">
                      <span className="uppercase tracking-[0.18em] text-[11px]">Read More</span>
                      <span className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                        <ArrowRight size={14} />
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {visible < filtered.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisible((v) => v + 6)}
              className="px-8 py-3.5 bg-black text-white text-[11px] uppercase tracking-[0.25em] rounded-full hover:bg-[#b8955d] transition-all duration-500 shadow-md"
            >
              Load More Insights
            </button>
          </div>
        )}
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BlogsListing;

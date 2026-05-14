import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ChevronRight, Facebook, Twitter, Linkedin, Link2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";
import { getBlogBySlug, getRelatedBlogs } from "@/data/blogsData";
import { useEffect, useMemo } from "react";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? getBlogBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const related = useMemo(() => (slug ? getRelatedBlogs(slug, 3) : []), [slug]);

  if (!blog) return <Navigate to="/blogs" replace />;

  const url = typeof window !== "undefined" ? window.location.href : "";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription,
    image: blog.image,
    datePublished: blog.publishedAt,
    author: { "@type": "Organization", name: "Enchanting MP" },
    publisher: { "@type": "Organization", name: "Enchanting MP" },
    mainEntityOfPage: url,
  };

  const share = (platform: "facebook" | "twitter" | "linkedin" | "copy") => {
    const u = encodeURIComponent(url);
    const t = encodeURIComponent(blog.title);
    const links: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      twitter: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    };
    if (platform === "copy") {
      navigator.clipboard?.writeText(url);
      return;
    }
    window.open(links[platform], "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <SEO
        title={`${blog.title} | Enchanting MP`}
        description={blog.metaDescription}
        image={blog.image}
        type="article"
        jsonLd={jsonLd}
      />
      <Navbar />

      {/* HERO */}
      <section className="relative w-full h-[60vh] min-h-[420px] overflow-hidden">
        <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-4xl mx-auto px-4 h-full flex flex-col justify-end pb-14 text-white"
        >
          <span className="bg-white/20 backdrop-blur-md text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 rounded-full border border-white/30 w-fit">
            {blog.category}
          </span>
          <h1 className="font-display text-[32px] md:text-[52px] leading-tight font-bold mt-4 drop-shadow-lg">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 mt-4 text-[13px] uppercase tracking-[0.2em] opacity-90">
            <span className="flex items-center gap-2"><Calendar size={14} /> {blog.date}</span>
            <span className="flex items-center gap-2"><Clock size={14} /> {blog.readTime}</span>
          </div>
        </motion.div>
      </section>

      {/* BREADCRUMB */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <nav className="flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-[#888]">
          <Link to="/" className="hover:text-[#b8955d] transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/blogs" className="hover:text-[#b8955d] transition-colors">Travel Insights</Link>
          <ChevronRight size={12} />
          <span className="text-[#111] truncate max-w-[180px]">{blog.shortTitle}</span>
        </nav>
      </div>

      {/* CONTENT */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-[18px] leading-[1.8] text-[#444] italic border-l-2 border-[#c8a96b] pl-5 mb-10">
          {blog.excerpt}
        </p>

        {blog.content.map((block, i) => {
          if (block.type === "heading") {
            return (
              <motion.h2
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-display text-[24px] md:text-[30px] font-bold text-[#111] mt-10 mb-4"
              >
                {block.text}
              </motion.h2>
            );
          }
          if (block.type === "paragraph") {
            return (
              <p key={i} className="text-[16px] leading-[1.85] text-[#444] mb-5">
                {block.text}
              </p>
            );
          }
          return (
            <ul key={i} className="space-y-2 mb-6 ml-2">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-[16px] text-[#444]">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c8a96b] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        })}

        {/* SHARE */}
        <div className="mt-14 pt-8 border-t border-black/10">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#888]">Share</span>
            {[
              { Icon: Facebook, key: "facebook" as const, label: "Facebook" },
              { Icon: Twitter, key: "twitter" as const, label: "Twitter" },
              { Icon: Linkedin, key: "linkedin" as const, label: "LinkedIn" },
              { Icon: Link2, key: "copy" as const, label: "Copy link" },
            ].map(({ Icon, key, label }) => (
              <button
                key={key}
                onClick={() => share(key)}
                aria-label={label}
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-[#111] hover:bg-black hover:text-white transition-all duration-300"
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>

        <Link to="/blogs" className="inline-flex items-center gap-2 mt-10 text-[12px] uppercase tracking-[0.25em] text-[#b8955d] hover:text-black transition-colors">
          <ArrowLeft size={14} /> Back to all insights
        </Link>
      </article>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-white border-t border-black/5 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-display text-[28px] md:text-[36px] font-bold text-[#111] mb-2">Related Insights</h2>
            <p className="text-[#666] text-[14px] mb-10">More stories from the heart of Madhya Pradesh.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {related.map((r) => (
                <Link key={r.slug} to={`/blogs/${r.slug}`} className="group block rounded-[24px] overflow-hidden bg-white border border-black/[0.05] shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative h-[200px] overflow-hidden">
                    <img src={r.image} alt={r.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute top-3 left-3 bg-white/85 backdrop-blur-md text-[10px] uppercase tracking-[0.25em] px-3 py-1 rounded-full">{r.category}</div>
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#999]">Luxury Travel · {r.date}</div>
                    <h3 className="font-display text-[18px] font-bold text-[#111] mt-3 line-clamp-2 group-hover:text-[#b8955d] transition-colors">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BlogDetail;

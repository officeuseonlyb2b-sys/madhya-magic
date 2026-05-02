import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Sparkles } from "lucide-react";

const NewsletterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-gold opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-foreground/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-foreground/5 blur-[80px]" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center"
          >
            <Sparkles size={28} className="text-primary-foreground" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Get Travel Inspiration
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Subscribe for exclusive deals, hidden gems, and curated travel stories from Madhya Pradesh
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-primary-foreground/20 backdrop-blur-sm rounded-xl px-5 py-3.5 text-primary-foreground placeholder:text-primary-foreground/50 outline-none border border-primary-foreground/20 focus:border-primary-foreground/50 transition-colors"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-foreground text-primary-foreground rounded-xl px-8 py-3.5 font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-xl"
            >
              {submitted ? "Subscribed! ✓" : (
                <>
                  Subscribe <Send size={16} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

import { submitFormWithToast } from "@/lib/submitForm";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const upd = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const res = await submitFormWithToast({
      formName: "Contact Form",
      fullName: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
      extraFields: { Subject: form.subject },
    });
    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-primary blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mt-3 mb-6">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-lg text-primary-foreground/70">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="input-glow bg-muted/50 rounded-xl px-4 py-3 border border-transparent">
                    <input value={form.name} onChange={(e) => upd("name", e.target.value)} placeholder="Your Name" className="bg-transparent outline-none w-full text-sm text-foreground placeholder:text-muted-foreground" required />
                  </div>
                  <div className="input-glow bg-muted/50 rounded-xl px-4 py-3 border border-transparent">
                    <input value={form.email} onChange={(e) => upd("email", e.target.value)} type="email" placeholder="Email Address" className="bg-transparent outline-none w-full text-sm text-foreground placeholder:text-muted-foreground" required />
                  </div>
                </div>
                <div className="input-glow bg-muted/50 rounded-xl px-4 py-3 border border-transparent">
                  <input value={form.phone} onChange={(e) => upd("phone", e.target.value)} placeholder="Phone Number" className="bg-transparent outline-none w-full text-sm text-foreground placeholder:text-muted-foreground" />
                </div>
                <div className="input-glow bg-muted/50 rounded-xl px-4 py-3 border border-transparent">
                  <input value={form.subject} onChange={(e) => upd("subject", e.target.value)} placeholder="Subject" className="bg-transparent outline-none w-full text-sm text-foreground placeholder:text-muted-foreground" required />
                </div>
                <div className="input-glow bg-muted/50 rounded-xl px-4 py-3 border border-transparent">
                  <textarea value={form.message} onChange={(e) => upd("message", e.target.value)} placeholder="Your Message" rows={5} className="bg-transparent outline-none w-full text-sm text-foreground placeholder:text-muted-foreground resize-none" required />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full gradient-gold glow-button text-primary-foreground rounded-xl py-3.5 font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : submitted ? "Message Sent! ✓" : (<>Send Message <Send size={18} /></>)}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Contact Information</h2>

              {[
                { icon: MapPin, title: "Office Address", text: "1st Floor, Jain Bhawan, Above Himalaya Wellness Centre, Nayaa Bazaar, Gwalior, Madhya Pradesh - 474009" },
                { icon: Phone, title: "Phone Number", text: "+91 9109114934" },
                { icon: Mail, title: "Email Address", text: "info@enchantingmp.com" },
                { icon: Clock, title: "Working Hours", text: "Mon - Sat: 9:00 AM - 7:00 PM" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 bg-card rounded-2xl p-5 shadow-[var(--shadow-card)] border border-border/20"
                >
                  <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-border/20 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234780.88671560267!2d77.28936999999999!3d23.2599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>

              {/* Social */}
              <div className="flex gap-3">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="w-11 h-11 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Contact;

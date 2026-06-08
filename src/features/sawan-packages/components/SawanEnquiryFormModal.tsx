import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X, Send, MessageCircle, Shield, Star, Clock, Hotel, Phone } from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { submitForm } from "@/lib/submitForm";

const WHATSAPP_NUMBER = "919109114934";

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  mobile: z.string().trim().min(7, "Valid mobile number required").max(20).regex(/^[+\d\s-]+$/),
  email: z.string().trim().email("Enter a valid email").max(255),
  city: z.string().trim().min(2, "Enter your city").max(80),
  travelDate: z.string().min(1, "Select a travel date"),
  adults: z.string().regex(/^\d+$/).transform(Number).refine(n => n >= 1 && n <= 20, "1–20 adults"),
  children: z.string().regex(/^\d+$/).transform(Number).refine(n => n >= 0 && n <= 10, "0–10 children"),
  childrenAges: z.string().optional(),
  enhanceOptions: z.array(z.string()).optional(),
  additionalRequests: z.string().optional(),
  seniorCitizenAssistance: z.boolean().optional(),
  luxuryStayUpgrade: z.boolean().optional(),
  airportTransfers: z.boolean().optional(),
  needCustomisation: z.boolean().optional(),
  specialVipDarshan: z.boolean().optional(),
  completeTravelAssistance: z.boolean().optional(),
});

interface Props {
  open: boolean;
  onClose: () => void;
}

const SacredEnquiryFormModal = ({ open, onClose }: Props) => {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    travelDate: "",
    adults: "2",
    children: "0",
    childrenAges: "",
    enhanceOptions: [] as string[],
    additionalRequests: "",
    seniorCitizenAssistance: false,
    luxuryStayUpgrade: false,
    airportTransfers: false,
    needCustomisation: false,
    specialVipDarshan: false,
    completeTravelAssistance: false,
  });

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onEsc);
    };
  }, [open, onClose]);

  const update = (key: keyof typeof values, val: any) => {
    setValues(v => ({ ...v, [key]: val }));
    setErrors(e => ({ ...e, [key]: "" }));
  };

  const validate = () => {
    const result = formSchema.safeParse(values);
    if (result.success) return true;
    const errMap: Record<string, string> = {};
    result.error.issues.forEach(iss => {
      const key = iss.path[0] as string;
      if (!errMap[key]) errMap[key] = iss.message;
    });
    setErrors(errMap);
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const enhancements = [
        ...values.enhanceOptions,
        values.seniorCitizenAssistance && "Senior Citizen Assistance",
        values.luxuryStayUpgrade && "Luxury Stay Upgrade",
        values.airportTransfers && "Airport Transfers",
        values.needCustomisation && "Need Customisation",
        values.specialVipDarshan && "VIP Darshan Assistance",
        values.completeTravelAssistance && "Complete Travel Assistance",
      ].filter(Boolean).join(", ");

      const res = await submitForm({
        formName: "SawanEnquiryFormModal",
        fullName: values.fullName,
        email: values.email,
        phone: values.mobile,
        destination: "Ujjain & Omkareshwar",
        travelDate: values.travelDate,
        travelers: `${values.adults} adults, ${values.children} children`,
        message: values.additionalRequests,
        extraFields: {
          City: values.city,
          "Children Ages": values.childrenAges,
          Enhancements: enhancements,
        },
        autoReplyTemplate: "sawan-auto-reply",
      });
      if (res.ok) {
        toast({ title: "Enquiry received 🪔", description: "Our Yatra expert will call you shortly." });
        onClose();
      } else {
        toast({ title: "Submission failed", description: res.error || "Please try again.", variant: "destructive" });
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    const msg = `*Sacred Journey Enquiry*%0A%0AName: ${values.fullName}%0AMobile: ${values.mobile}%0AEmail: ${values.email}%0ACity: ${values.city}%0ATravel Date: ${values.travelDate}%0AAdults: ${values.adults} | Children: ${values.children}%0AAges: ${values.childrenAges || "-"}%0AEnhancements: ${values.enhanceOptions.join(", ") || "-"}%0AExtra needs: ${values.additionalRequests || "-"}%0ASenior assist: ${values.seniorCitizenAssistance ? "Yes" : "No"}%0ALuxury stay: ${values.luxuryStayUpgrade ? "Yes" : "No"}%0AAirport transfer: ${values.airportTransfers ? "Yes" : "No"}%0ACustomisation: ${values.needCustomisation ? "Yes" : "No"}%0AComplete travel assist: ${values.completeTravelAssistance ? "Yes" : "No"}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const fieldBase = "w-full rounded-xl border border-[#d4a017]/30 bg-white px-4 py-3 text-sm text-black placeholder:text-gray-400 focus:outline-none transition";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[210] bg-[#1a0a02]/80 backdrop-blur-sm flex items-stretch md:items-center justify-center p-0 md:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#FFFBF3] w-full md:max-w-3xl md:max-h-[92vh] md:rounded-3xl overflow-hidden flex flex-col border border-[#d4a017]/30"
          >
            {/* Header - unchanged */}
            <div className="relative bg-gradient-to-r from-[#3a1d05] via-[#7a3a0a] to-[#3a1d05] text-white px-6 md:px-8 py-5 flex items-center justify-between">
              <div>
                <p className="nav-font text-[#FFCE7A] uppercase tracking-[0.3em] text-[10px]">ॐ Sacred Journey</p>
                <h3 className="font-display text-2xl md:text-3xl text-white">Let’s Plan Your Yatra</h3>
                <p className="text-sm text-[#FFCE7A]/80 mt-1">Share your preferences – our expert will reach out</p>
              </div>
              <button onClick={onClose} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
              {/* YOUR DETAILS - heading black, no text shadow */}
              <Section title="YOUR DETAILS">
                <div className="grid sm:grid-cols-2 gap-5">
                  <InputField label="Full Name" error={errors.fullName}>
                    <input className={fieldBase} value={values.fullName} onChange={e => update("fullName", e.target.value)} placeholder="Your name" />
                  </InputField>
                  <InputField label="Mobile Number" error={errors.mobile}>
                    <input className={fieldBase} value={values.mobile} onChange={e => update("mobile", e.target.value)} placeholder="+91 98765 43210" />
                  </InputField>
                  <InputField label="Email Address" error={errors.email}>
                    <input type="email" className={fieldBase} value={values.email} onChange={e => update("email", e.target.value)} placeholder="you@example.com" />
                  </InputField>
                  <InputField label="City" error={errors.city}>
                    <input className={fieldBase} value={values.city} onChange={e => update("city", e.target.value)} placeholder="Mumbai, Delhi, etc." />
                  </InputField>
                </div>
              </Section>

              <Section title="YOUR TRAVEL PREFERENCES">
                <InputField label="Preferred Travel Date" error={errors.travelDate}>
                  <input type="date" className={fieldBase} value={values.travelDate} onChange={e => update("travelDate", e.target.value)} />
                </InputField>
              </Section>

              <Section title="TRAVELLERS">
                <div className="grid sm:grid-cols-3 gap-5">
                  <InputField label="Adults (12+ Years)">
                    <select className={fieldBase} value={values.adults} onChange={e => update("adults", e.target.value)}>
                      {[...Array(20).keys()].map(n => <option key={n+1} value={n+1}>{n+1}</option>)}
                    </select>
                  </InputField>
                  <InputField label="Children (1–12 Years)">
                    <select className={fieldBase} value={values.children} onChange={e => update("children", e.target.value)}>
                      {[...Array(11).keys()].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </InputField>
                  <InputField label="Age of Children">
                    <input className={fieldBase} value={values.childrenAges} onChange={e => update("childrenAges", e.target.value)} placeholder="e.g., 5, 8, 10" />
                  </InputField>
                </div>
                <p className="text-xs text-gray-600 mt-2">Note: Children below 1 year are complimentary.</p>
              </Section>

              <Section title="ENHANCE YOUR JOURNEY (Select any)">
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  {["VIP Darshan Assistance", "Bhasma Aarti Experience", "Helicopter Upgrade", "Special Abhishekam"].map(opt => (
                    <label key={opt} className="flex items-center gap-2 text-black">
                      <input type="checkbox" className="w-4 h-4 accent-[#d4a017]" checked={values.enhanceOptions.includes(opt)} onChange={e => {
                        const newArr = e.target.checked ? [...values.enhanceOptions, opt] : values.enhanceOptions.filter(o => o !== opt);
                        update("enhanceOptions", newArr);
                      }} />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
                <InputField label="Tell us about your preferred darshan, senior citizens travelling, room preferences, dietary requirements or any special assistance needed.">
                  <textarea rows={3} className={fieldBase + " resize-none"} value={values.additionalRequests} onChange={e => update("additionalRequests", e.target.value)} placeholder="Your special requests..." />
                </InputField>
                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                  {[
                    { key: "seniorCitizenAssistance", label: "Senior Citizen Assistance" },
                    { key: "luxuryStayUpgrade", label: "Luxury Stay Upgrade" },
                    { key: "airportTransfers", label: "Airport Transfers" },
                    { key: "needCustomisation", label: "Need Customisation" },
                  ].map(({ key, label }) => (
                    <label key={key} className="flex items-center gap-2 text-black">
                      <input type="checkbox" className="w-4 h-4 accent-[#d4a017]" checked={values[key as keyof typeof values] as boolean} onChange={e => update(key as keyof typeof values, e.target.checked)} />
                      <span className="text-sm">{label}</span>
                    </label>
                  ))}
                </div>
              </Section>

              <Section title="SPECIAL REQUESTS (OPTIONAL)">
                <div className="flex flex-wrap gap-6 mb-5">
                  <label className="flex items-center gap-2 text-black">
                    <input type="checkbox" className="w-4 h-4 accent-[#d4a017]" checked={values.specialVipDarshan} onChange={e => update("specialVipDarshan", e.target.checked)} />
                    <span className="text-sm">VIP Darshan Assistance</span>
                  </label>
                  <label className="flex items-center gap-2 text-black">
                    <input type="checkbox" className="w-4 h-4 accent-[#d4a017]" checked={values.completeTravelAssistance} onChange={e => update("completeTravelAssistance", e.target.checked)} />
                    <span className="text-sm">Complete Travel Assistance</span>
                  </label>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 bg-[#fdf3e0] rounded-xl">
                  <TrustBadge icon={Clock} text="Response Within 30 Minutes" />
                  <TrustBadge icon={Star} text="Personalised Yatra Planning" />
                  <TrustBadge icon={Hotel} text="Trusted Hotels & Comfortable Stays" />
                  <TrustBadge icon={Phone} text="Complete Travel Assistance" />
                </div>
              </Section>

              <p className="text-[10px] text-center text-gray-600 flex items-center justify-center gap-1"><Shield size={12} /> Your information is safe with us and will never be shared with third parties.</p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button type="submit" disabled={submitting} className="nav-font flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff9933] to-[#d4a017] text-white px-6 py-3.5 rounded-full font-semibold hover:from-[#ffae5a] hover:to-[#e6b526] disabled:opacity-60 transition">
                  <Send size={16} /> {submitting ? "Submitting..." : "REQUEST PACKAGE DETAILS"}
                </button>
                <button type="button" onClick={handleWhatsApp} className="nav-font flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-full font-semibold transition">
                  <MessageCircle size={16} /> CHAT WITH A YATRA EXPERT
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-3">
    <h4
      className="nav-font text-xs uppercase tracking-widest text-black border-b border-[#d4a017]/30 pb-1"
      style={{ textShadow: "none" }}
    >
      {title}
    </h4>
    {children}
  </div>
);

const InputField = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <label className="block">
    <span
      className="nav-font text-xs uppercase tracking-widest text-black mb-1.5 block"
      style={{ textShadow: "none" }}
    >
      {label}
    </span>
    {children}
    {error && <span className="text-xs text-rose-600 mt-1 block">{error}</span>}
  </label>
);

const TrustBadge = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="flex flex-col items-center text-center gap-1">
    <Icon size={20} className="text-[#d4a017]" />
    <span className="text-[11px] font-medium text-black" style={{ textShadow: "none" }}>
      {text}
    </span>
  </div>
);

export default SacredEnquiryFormModal;
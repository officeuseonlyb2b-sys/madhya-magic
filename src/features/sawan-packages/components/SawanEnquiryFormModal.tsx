import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { sawanPackages } from "../data/packages";

const WHATSAPP_NUMBER = "919876543210"; // TODO: replace with real number

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  mobile: z
    .string()
    .trim()
    .min(7, "Enter a valid mobile number")
    .max(20)
    .regex(/^[+\d\s-]+$/, "Only digits, spaces, +, - allowed"),
  email: z.string().trim().email("Enter a valid email").max(255),
  city: z.string().trim().min(2, "Enter your city").max(80),
  packageId: z.string().min(1, "Please select a package"),
  travelDate: z.string().min(1, "Select a travel date"),
  travellers: z
    .string()
    .regex(/^\d+$/, "Enter a number")
    .refine((v) => Number(v) > 0 && Number(v) < 100, "Travellers must be 1-99"),
  message: z.string().trim().max(1000).optional(),
});

interface Props {
  open: boolean;
  onClose: () => void;
  initialPackageId?: string | null;
}

const SawanEnquiryFormModal = ({ open, onClose, initialPackageId }: Props) => {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    packageId: initialPackageId ?? "",
    travelDate: "",
    travellers: "2",
    message: "",
  });

  useEffect(() => {
    if (open && initialPackageId) {
      setValues((v) => ({ ...v, packageId: initialPackageId }));
    }
  }, [open, initialPackageId]);

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

  const selectedPackage = useMemo(
    () => sawanPackages.find((p) => p.id === values.packageId),
    [values.packageId],
  );

  const update = (key: keyof typeof values, val: string) => {
    setValues((v) => ({ ...v, [key]: val }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const validate = () => {
    const result = formSchema.safeParse(values);
    if (result.success) return true;
    const errMap: Record<string, string> = {};
    result.error.issues.forEach((iss) => {
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
      // Simulate submit — wire to backend later
      await new Promise((r) => setTimeout(r, 700));
      toast({
        title: "Enquiry received 🪔",
        description: "Our pilgrimage team will reach out within 24 hours.",
      });
      onClose();
    } finally {
      setSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    const pkgName = selectedPackage?.name ?? "Sawan Special";
    const text = encodeURIComponent(
      `Namaste! I'd like to enquire about ${pkgName}.\n\nName: ${values.fullName}\nMobile: ${values.mobile}\nEmail: ${values.email}\nCity: ${values.city}\nTravel Date: ${values.travelDate}\nTravellers: ${values.travellers}\nMessage: ${values.message || "-"}`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const fieldCls =
    "w-full rounded-xl border border-[#d4a017]/30 bg-white px-4 py-3 text-sm text-[#3a1d05] placeholder:text-[#b8651a]/50 focus:outline-none focus:border-[#ff9933] focus:ring-2 focus:ring-[#ff9933]/20 transition";

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
            className="relative bg-[#FFFBF3] w-full md:max-w-2xl md:max-h-[92vh] md:rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-[#d4a017]/30"
          >
            <div className="relative bg-gradient-to-r from-[#3a1d05] via-[#7a3a0a] to-[#3a1d05] text-white px-6 md:px-8 py-5 flex items-center justify-between">
              <div>
                <p className="nav-font text-[#FFCE7A] uppercase tracking-[0.3em] text-[10px]">
                  ॐ Sawan Booking
                </p>
                <h3 className="font-display text-2xl md:text-3xl">Enquire About Your Yatra</h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" error={errors.fullName}>
                  <input className={fieldCls} value={values.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="Your name" />
                </Field>
                <Field label="Mobile Number" error={errors.mobile}>
                  <input className={fieldCls} value={values.mobile} onChange={(e) => update("mobile", e.target.value)} placeholder="+91 98765 43210" />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input type="email" className={fieldCls} value={values.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" />
                </Field>
                <Field label="City" error={errors.city}>
                  <input className={fieldCls} value={values.city} onChange={(e) => update("city", e.target.value)} placeholder="Mumbai" />
                </Field>
                <Field label="Select Package" error={errors.packageId} full>
                  <select className={fieldCls} value={values.packageId} onChange={(e) => update("packageId", e.target.value)}>
                    <option value="">Choose a package…</option>
                    <optgroup label="Hotel Packages">
                      {sawanPackages.filter((p) => p.kind === "normal").map((p) => (
                        <option key={p.id} value={p.id}>{p.name} — {p.duration}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Helicopter Packages">
                      {sawanPackages.filter((p) => p.kind === "helicopter").map((p) => (
                        <option key={p.id} value={p.id}>{p.name} — {p.duration}</option>
                      ))}
                    </optgroup>
                  </select>
                </Field>
                <Field label="Travel Date" error={errors.travelDate}>
                  <input type="date" className={fieldCls} value={values.travelDate} onChange={(e) => update("travelDate", e.target.value)} />
                </Field>
                <Field label="Number of Travellers" error={errors.travellers}>
                  <input type="number" min={1} max={99} className={fieldCls} value={values.travellers} onChange={(e) => update("travellers", e.target.value)} />
                </Field>
                <Field label="Message (optional)" full>
                  <textarea rows={3} className={fieldCls + " resize-none"} value={values.message} onChange={(e) => update("message", e.target.value)} placeholder="Any preferences, dietary requests, special darshan etc." />
                </Field>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="nav-font flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff9933] to-[#d4a017] text-white px-6 py-3.5 rounded-full font-semibold shadow-lg shadow-[#ff9933]/30 hover:from-[#ffae5a] hover:to-[#e6b526] disabled:opacity-60 transition"
                >
                  <Send size={16} /> {submitting ? "Sending…" : "Submit Enquiry"}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="nav-font flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-full font-semibold shadow-lg shadow-emerald-600/25 transition"
                >
                  <MessageCircle size={16} /> WhatsApp Enquiry
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Field = ({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) => (
  <label className={`block ${full ? "sm:col-span-2" : ""}`}>
    <span className="nav-font text-xs uppercase tracking-widest text-[#b8651a] mb-1.5 block">
      {label}
    </span>
    {children}
    {error && <span className="text-xs text-rose-600 mt-1 block">{error}</span>}
  </label>
);

export default SawanEnquiryFormModal;

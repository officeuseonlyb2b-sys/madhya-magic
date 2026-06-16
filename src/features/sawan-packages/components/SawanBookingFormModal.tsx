import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  Sparkles,
  MessageCircle,
  Headphones,
  Car,
  Building2,
  ShieldCheck,
  ChevronDown,
  Crown,
  Mountain,
  Flame,
  HelpCircle,
  Waves,
  Landmark,
  X,
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { submitForm } from "@/lib/submitForm";

const WHATSAPP_NUMBER = "919109114934";

const journeyOptions = [
  "A Spiritual Experience of Jyotirlingas",
  "Sawan Special Darshan",
  "Mahakaleshwar Darshan",
  "Omkareshwar Darshan",
  "Ujjain Spiritual Tour",
  "Family Pilgrimage",
];

const lookingForOptions = [
  { label: "Mahakaleshwar Darshan", Icon: Landmark },
  { label: "Omkareshwar Darshan", Icon: Mountain },
  { label: "Bhasma Aarti", Icon: Flame },
  { label: "VIP Darshan", Icon: Crown },
  { label: "Helicopter Experience", Icon: Sparkles },
  { label: "Narmada Parikrama", Icon: Waves },
  { label: "Spiritual & Heritage Tour", Icon: Landmark },
  { label: "Unsure – Need Guidance", Icon: HelpCircle },
];

const commitments = [
  { Icon: User, text: "Expert Yatra Planning" },
  { Icon: Headphones, text: "Response Within 30 Minutes" },
  { Icon: Car, text: "Complete Travel Assistance" },
  { Icon: Building2, text: "Trusted Hotels & Comfortable Stays" },
  { Icon: ShieldCheck, text: "VIP Darshan Assistance Available" },
];

const schema = z
  .object({
    fullName: z.string().trim().min(2, "Please enter your full name").max(100),
    mobile: z
      .string()
      .trim()
      .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
    email: z.string().trim().email("Enter a valid email").max(255),
    city: z.string().trim().min(2, "Please enter your city").max(80),
    journey: z.string().min(1, "Please select a journey"),
    travelDate: z.string().min(1, "Please pick a travel date"),
    adultsCount: z.number().min(1, "At least 1 adult required").max(50),
    childrenCount: z.number().min(0),
    childrenAges: z.array(z.number().nullable()),
    message: z.string().trim().max(2000).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.childrenCount > 0) {
      if (data.childrenAges.length !== data.childrenCount) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["childrenAges"],
          message: "Please provide ages for all children",
        });
      } else if (
        data.childrenAges.some((age) => age === null || age < 0 || age > 17)
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["childrenAges"],
          message: "Each child age must be between 0 and 17 years",
        });
      }
    }
  });

interface Props {
  open: boolean;
  onClose: () => void;
}

const SawanBookingFormModal = ({ open, onClose }: Props) => {
  const [adultsCustomMode, setAdultsCustomMode] = useState(false);
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCustomMode, setChildrenCustomMode] = useState(false);
  const [childrenCount, setChildrenCount] = useState(0);
  const [childrenAges, setChildrenAges] = useState<(number | null)[]>([]);

  useEffect(() => {
    setChildrenAges((prev) => {
      const newLen = childrenCount;
      if (prev.length === newLen) return prev;
      if (prev.length < newLen) {
        return [...prev, ...Array(newLen - prev.length).fill(null)];
      }
      return prev.slice(0, newLen);
    });
  }, [childrenCount]);

  const [values, setValues] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    journey: "A Spiritual Experience of Jyotirlingas",
    travelDate: "",
    message: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  // Lock body scroll when modal open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const update = (k: keyof typeof values, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const toggleService = (label: string) =>
    setSelectedServices((s) =>
      s.includes(label) ? s.filter((x) => x !== label) : [...s, label]
    );

  const validate = () => {
    const result = schema.safeParse({
      ...values,
      adultsCount,
      childrenCount,
      childrenAges,
    });
    if (result.success) return true;
    const map: Record<string, string> = {};
    result.error.issues.forEach((i) => {
      const path = i.path[0] as string;
      if (!map[path]) map[path] = i.message;
    });
    setErrors(map);
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setSubmitting(true);
    const agesStr = childrenAges
      .map((a) => (a !== null ? a : "?"))
      .join(", ");
    const res = await submitForm({
      formName: "SawanBookingPage",
      fullName: values.fullName,
      email: values.email,
      phone: values.mobile,
      destination: "Ujjain & Omkareshwar",
      packageName: values.journey,
      travelDate: values.travelDate,
      travelers: `${adultsCount} adults, ${childrenCount} kids`,
      message: values.message,
      extraFields: {
        City: values.city,
        "Journey Type": values.journey,
        "Selected Services": selectedServices.join(", "),
        Adults: String(adultsCount),
        Kids: String(childrenCount),
        "Kids Age": agesStr,
      },
      autoReplyTemplate: "sawan-auto-reply",
    });
    setSubmitting(false);
    if (res.ok) {
      toast.success("Thank you! Our Yatra Expert will contact you shortly.");
      setValues({
        fullName: "",
        mobile: "",
        email: "",
        city: "",
        journey: "A Spiritual Experience of Jyotirlingas",
        travelDate: "",
        message: "",
      });
      setSelectedServices([]);
      setAdultsCount(2);
      setAdultsCustomMode(false);
      setChildrenCount(0);
      setChildrenCustomMode(false);
      setChildrenAges([]);
      onClose();
    } else {
      toast.error(res.error || "Something went wrong. Please try again.");
    }
  };

  const handleWhatsApp = () => {
    const agesStr = childrenAges
      .map((a) => (a !== null ? a : "?"))
      .join(", ");
    const txt = encodeURIComponent(
      `Namaste! I'd like to plan my Sawan Yatra.\n\nName: ${values.fullName || "-"}\nMobile: ${values.mobile || "-"}\nEmail: ${values.email || "-"}\nCity: ${values.city || "-"}\nJourney: ${values.journey}\nTravel Date: ${values.travelDate || "-"}\nTravellers: ${adultsCount} adults, ${childrenCount} kids\nAges: ${agesStr}\nLooking for: ${selectedServices.join(", ") || "-"}\nMessage: ${values.message || "-"}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${txt}`, "_blank");
  };

  const fieldBase =
    "w-full rounded-xl border border-orange-200 bg-white pl-11 pr-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition";
  const iconCls =
    "absolute left-3.5 top-1/2 -translate-y-1/2 text-orange-500";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-stretch md:items-center md:justify-center md:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 240 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#FFFBF3] w-full md:max-w-3xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-screen md:max-h-[92vh]"
          >
            {/* Hero Header (image banner matching booking page) */}
            <div className="relative flex-shrink-0 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781607210/formbackgroundimg_b5lx32.jpg"
                alt="Begin Your Sacred Journey"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
              <div className="relative px-5 sm:px-7 py-6 sm:py-8 text-white">
                <p className="nav-font text-orange-300 uppercase tracking-[0.3em] text-[10px] sm:text-[11px] mb-2">
                  ॐ PLAN YOUR DIVINE YATRA
                </p>
                <h2 className="font-display text-2xl sm:text-3xl leading-tight max-w-md">
                  Begin Your Sacred Journey
                </h2>
                <p className="mt-2 text-white/85 text-xs sm:text-sm max-w-md leading-relaxed">
                  Our Yatra Experts will help you choose the right package, darshan options, travel dates and accommodation.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur grid place-items-center text-white transition active:scale-95 z-10"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable body */}
            <form
              onSubmit={handleSubmit}
              className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 space-y-6"
            >
              {/* Section 1 */}
              <section>
                <SectionTitle Icon={User} title="YOUR DETAILS" />
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <Field label="Full Name" required error={errors.fullName}>
                    <div className="relative">
                      <User size={16} className={iconCls} />
                      <input
                        className={fieldBase}
                        placeholder="Your full name"
                        value={values.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                      />
                    </div>
                  </Field>
                  <Field label="Mobile Number" required error={errors.mobile}>
                    <div className="relative">
                      <Phone size={16} className={iconCls} />
                      <input
                        className={fieldBase}
                        placeholder="+91 98765 43210"
                        value={values.mobile}
                        inputMode="tel"
                        onChange={(e) =>
                          update(
                            "mobile",
                            e.target.value.replace(/[^\d]/g, "").slice(0, 10)
                          )
                        }
                      />
                    </div>
                  </Field>
                  <Field label="Email Address" required error={errors.email}>
                    <div className="relative">
                      <Mail size={16} className={iconCls} />
                      <input
                        type="email"
                        className={fieldBase}
                        placeholder="you@example.com"
                        value={values.email}
                        onChange={(e) => update("email", e.target.value)}
                      />
                    </div>
                  </Field>
                  <Field label="City" required error={errors.city}>
                    <div className="relative">
                      <MapPin size={16} className={iconCls} />
                      <input
                        className={fieldBase}
                        placeholder="Mumbai"
                        value={values.city}
                        onChange={(e) => update("city", e.target.value)}
                      />
                    </div>
                  </Field>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <SectionTitle Icon={Landmark} title="YOUR JOURNEY PREFERENCES" />
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Which Sacred Journey?"
                    error={errors.journey}
                  >
                    <div className="relative">
                      <Landmark size={16} className={iconCls} />
                      <select
                        className={fieldBase + " appearance-none pr-10"}
                        value={values.journey}
                        onChange={(e) => update("journey", e.target.value)}
                      >
                        {journeyOptions.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-orange-500 pointer-events-none"
                      />
                    </div>
                  </Field>
                  <Field
                    label="Preferred Travel Date"
                    error={errors.travelDate}
                  >
                    <div className="relative">
                      <Calendar size={16} className={iconCls} />
                      <input
                        type="date"
                        className={fieldBase}
                        value={values.travelDate}
                        onChange={(e) => update("travelDate", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                  </Field>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <SectionTitle
                  Icon={Sparkles}
                  title="WHAT ARE YOU LOOKING FOR?"
                  suffix="(Select any)"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4">
                  {lookingForOptions.map(({ label, Icon }) => {
                    const checked = selectedServices.includes(label);
                    return (
                      <label
                        key={label}
                        className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2.5 cursor-pointer transition ${
                          checked
                            ? "border-orange-500 bg-orange-50"
                            : "border-orange-200 hover:border-orange-400"
                        }`}
                      >
                        <span className="flex items-center gap-2 text-xs text-stone-800 leading-tight">
                          <Icon
                            size={15}
                            className="text-orange-500 flex-shrink-0"
                          />
                          {label}
                        </span>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleService(label)}
                          className="w-4 h-4 accent-orange-600"
                        />
                      </label>
                    );
                  })}
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <SectionTitle Icon={Users} title="TRAVELLERS" />
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <Field label="Adults (18+ years)" error={errors.adultsCount}>
                    <div className="relative">
                      <Users size={16} className={iconCls} />
                      {!adultsCustomMode ? (
                        <select
                          value={adultsCount}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (val === "custom") setAdultsCustomMode(true);
                            else setAdultsCount(Number(val));
                          }}
                          className={fieldBase + " appearance-none pr-10"}
                        >
                          {Array.from({ length: 20 }, (_, i) => i + 1).map(
                            (n) => (
                              <option key={n} value={n}>
                                {n}
                              </option>
                            )
                          )}
                          <option value="custom">✏️ Custom (Manual)</option>
                        </select>
                      ) : (
                        <div className="flex gap-2 items-center">
                          <input
                            type="number"
                            min={1}
                            max={50}
                            value={adultsCount}
                            onChange={(e) =>
                              setAdultsCount(
                                Math.max(1, Number(e.target.value))
                              )
                            }
                            className={
                              fieldBase.replace("pl-11", "pl-4") + " flex-1"
                            }
                            placeholder="Adults count"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setAdultsCustomMode(false);
                              if (adultsCount > 20) setAdultsCount(20);
                            }}
                            className="text-xs text-stone-500 hover:text-red-500 underline whitespace-nowrap"
                          >
                            Use preset
                          </button>
                        </div>
                      )}
                    </div>
                  </Field>

                  <Field label="Children (0–17 years)">
                    <div className="relative">
                      <Users size={16} className={iconCls} />
                      {!childrenCustomMode ? (
                        <select
                          value={childrenCount}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (val === "custom") setChildrenCustomMode(true);
                            else setChildrenCount(Number(val));
                          }}
                          className={fieldBase + " appearance-none pr-10"}
                        >
                          {[...Array(11).keys()].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? "Child" : "Children"}
                            </option>
                          ))}
                          <option value="custom">✏️ Custom (Manual)</option>
                        </select>
                      ) : (
                        <div className="flex gap-2 items-center">
                          <input
                            type="number"
                            min={0}
                            max={30}
                            value={childrenCount}
                            onChange={(e) =>
                              setChildrenCount(
                                Math.max(0, Number(e.target.value))
                              )
                            }
                            className={
                              fieldBase.replace("pl-11", "pl-4") + " flex-1"
                            }
                            placeholder="Children count"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setChildrenCustomMode(false);
                              if (childrenCount > 10) setChildrenCount(10);
                            }}
                            className="text-xs text-stone-500 hover:text-red-500 underline whitespace-nowrap"
                          >
                            Use preset
                          </button>
                        </div>
                      )}
                    </div>
                    {errors.childrenAges && (
                      <span className="text-xs text-rose-600 mt-1 block">
                        {errors.childrenAges}
                      </span>
                    )}
                  </Field>
                </div>

                {childrenCount > 0 && (
                  <div className="mt-3 space-y-2 border-t border-orange-100 pt-3">
                    <label className="block text-[12px] font-semibold text-orange-700">
                      Children Ages (0–17 years)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {Array.from({ length: childrenCount }).map((_, idx) => (
                        <input
                          key={idx}
                          type="number"
                          min={0}
                          max={17}
                          placeholder={`Child ${idx + 1} age`}
                          value={childrenAges[idx] ?? ""}
                          onChange={(e) => {
                            const val =
                              e.target.value === ""
                                ? null
                                : Number(e.target.value);
                            const next = [...childrenAges];
                            next[idx] = val;
                            setChildrenAges(next);
                          }}
                          className={`w-full rounded-xl border ${
                            childrenAges[idx] === null ||
                            (childrenAges[idx] as number) < 0 ||
                            (childrenAges[idx] as number) > 17
                              ? "border-red-300 focus:border-red-500"
                              : "border-orange-200 focus:border-orange-500"
                          } bg-white px-3 py-2.5 text-center text-sm text-stone-800 placeholder:text-stone-400 outline-none focus:ring-2 focus:ring-orange-200 transition`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* Section 5 */}
              <section>
                <SectionTitle
                  Icon={MessageCircle}
                  title="SPECIAL REQUESTS"
                  suffix="(Optional)"
                />
                <textarea
                  rows={3}
                  className="mt-3 w-full rounded-xl border border-orange-200 bg-white px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition resize-none"
                  placeholder="Senior citizens travelling, dietary preferences, special assistance, etc."
                  value={values.message}
                  onChange={(e) => update("message", e.target.value)}
                />
              </section>

              {/* Commitments */}
              <div className="bg-white rounded-2xl border border-orange-100 p-4">
                <p className="font-display text-orange-800 text-sm">
                  YOUR JOURNEY, OUR COMMITMENT
                </p>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {commitments.map(({ Icon, text }) => (
                    <li key={text} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                        <Icon size={13} />
                      </span>
                      <span className="text-xs text-stone-700 leading-snug pt-1">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-2xl bg-gradient-to-br from-[#ea580c] to-[#d97706] text-white px-5 py-3.5 shadow-lg shadow-orange-500/25 hover:opacity-95 disabled:opacity-60 transition text-left"
                >
                  <span className="block font-display text-base leading-tight">
                    {submitting ? "Sending…" : "ॐ REQUEST MY DARSHAN PLAN"}
                  </span>
                  <span className="block text-[11px] text-orange-100 mt-0.5">
                    Our experts will call you shortly
                  </span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3.5 shadow-lg shadow-emerald-600/20 transition text-left"
                >
                  <span className="flex items-center gap-2 font-display text-base leading-tight">
                    <MessageCircle size={16} /> CHAT WITH A YATRA EXPERT
                  </span>
                  <span className="block text-[11px] text-emerald-100 mt-0.5">
                    Get quick answers on WhatsApp
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SectionTitle = ({
  Icon,
  title,
  suffix,
}: {
  Icon: any;
  title: string;
  suffix?: string;
}) => (
  <div className="flex items-center gap-2.5">
    <span className="w-8 h-8 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
      <Icon size={14} />
    </span>
    <h3 className="font-display text-orange-800 text-base tracking-wide">
      {title}{" "}
      {suffix && (
        <span className="text-[11px] text-stone-500 font-sans normal-case tracking-normal">
          {suffix}
        </span>
      )}
    </h3>
  </div>
);

const Field = ({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) => (
  <label className="block">
    <span className="block text-[11px] uppercase tracking-[0.18em] text-stone-600 mb-1.5 font-medium">
      {label}
      {required && <span className="text-orange-600"> *</span>}
    </span>
    {children}
    {error && (
      <span className="text-xs text-rose-600 mt-1 block">{error}</span>
    )}
  </label>
);

export default SawanBookingFormModal;

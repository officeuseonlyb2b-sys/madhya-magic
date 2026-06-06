import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  Clock,
  ChevronDown,
  ArrowLeft,
  Crown,
  Mountain,
  Flame,
  HelpCircle,
  Waves,
  Landmark,
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { submitForm } from "@/lib/submitForm";
import heroAsset from "@/assets/exclusive/sawan/sawan-hero.jpg.asset.json";

/**
 * Replace this with any image url/import to update the booking banner.
 * The page accepts a `bannerImage` prop fallback, but the default is the
 * Sawan hero image and is easy to change here.
 */
const DEFAULT_BANNER = heroAsset.url;

const WHATSAPP_NUMBER = "919109114934";
const SUPPORT_PHONE = "+91 9109114934";

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

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  city: z.string().trim().min(2, "Please enter your city").max(80),
  journey: z.string().min(1, "Please select a journey"),
  travelDate: z.string().min(1, "Please pick a travel date"),
  adults: z.string().min(1, "Select number of adults"),
  kids: z.string(),
  kidsAge: z.string().max(60).optional(),
  message: z.string().trim().max(2000).optional(),
});

interface Props {
  bannerImage?: string;
}

const SawanBookingPage = ({ bannerImage = DEFAULT_BANNER }: Props) => {
  const [values, setValues] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    journey: "A Spiritual Experience of Jyotirlingas",
    travelDate: "",
    adults: "2",
    kids: "0",
    kidsAge: "",
    message: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = (k: keyof typeof values, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };
  const toggleService = (label: string) =>
    setSelectedServices((s) =>
      s.includes(label) ? s.filter((x) => x !== label) : [...s, label]
    );

  const validate = () => {
    const r = schema.safeParse(values);
    if (r.success) return true;
    const map: Record<string, string> = {};
    r.error.issues.forEach((i) => {
      const k = i.path[0] as string;
      if (!map[k]) map[k] = i.message;
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
    const res = await submitForm({
      formName: "Sawan in Ujjain – Begin Your Sacred Journey",
      fullName: values.fullName,
      email: values.email,
      phone: values.mobile,
      destination: "Ujjain & Omkareshwar",
      packageName: values.journey,
      travelDate: values.travelDate,
      travelers: `${values.adults} adults, ${values.kids} kids`,
      message: values.message,
      extraFields: {
        City: values.city,
        "Journey Type": values.journey,
        "Selected Services": selectedServices.join(", "),
        Adults: values.adults,
        Kids: values.kids,
        "Kids Age": values.kidsAge,
      },
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
        adults: "2",
        kids: "0",
        kidsAge: "",
        message: "",
      });
      setSelectedServices([]);
    } else {
      toast.error(res.error || "Something went wrong. Please try again.");
    }
  };

  const handleWhatsApp = () => {
    const txt = encodeURIComponent(
      `Namaste! I'd like to plan my Sawan Yatra.\n\nName: ${values.fullName || "-"}\nMobile: ${values.mobile || "-"}\nEmail: ${values.email || "-"}\nCity: ${values.city || "-"}\nJourney: ${values.journey}\nTravel Date: ${values.travelDate || "-"}\nTravellers: ${values.adults} adults, ${values.kids} kids\nLooking for: ${selectedServices.join(", ") || "-"}\nMessage: ${values.message || "-"}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${txt}`, "_blank");
  };

  const fieldBase =
    "w-full rounded-xl border border-orange-200 bg-white pl-11 pr-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition";
  const iconCls = "absolute left-3.5 top-1/2 -translate-y-1/2 text-orange-500";

  return (
    <div className="min-h-screen bg-[#FFFBF3]">
      <SEO
        title="Begin Your Sacred Journey | Sawan in Ujjain Booking"
        description="Plan your divine Sawan Yatra to Ujjain & Omkareshwar. Speak to our Yatra Experts and design your perfect darshan, travel and stay package."
        url="https://explore-mp-magic.lovable.app/sawan-ujjain/book-now"
      />
      <Navbar />

      <main className="pt-20 md:pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <Link
            to="/exclusive/sawan-ujjain"
            className="inline-flex items-center gap-2 text-sm text-orange-700 hover:text-orange-900 mb-4"
          >
            <ArrowLeft size={16} /> Back to Sawan in Ujjain
          </Link>

          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={bannerImage}
              alt="Begin Your Sacred Journey"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
            <div className="relative px-6 md:px-12 py-10 md:py-16 text-white">
              <p className="nav-font text-orange-300 uppercase tracking-[0.35em] text-[11px] md:text-xs mb-3">
                ॐ PLAN YOUR DIVINE YATRA
              </p>
              <h1 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl">
                Begin Your Sacred Journey
              </h1>
              <p className="mt-4 text-white/85 max-w-xl text-sm md:text-base leading-relaxed">
                Our Yatra Experts will help you choose the right package,
                darshan options, travel dates and accommodation.
              </p>
            </div>
          </motion.div>

          {/* Form + Sidebar */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6"
          >
            <div className="bg-white rounded-3xl shadow-lg border border-orange-100 p-6 md:p-10 space-y-10">
              {/* Section 1 */}
              <section>
                <SectionTitle Icon={User} title="YOUR DETAILS" />
                <div className="grid md:grid-cols-2 gap-5 mt-5">
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
                          update("mobile", e.target.value.replace(/[^\d]/g, "").slice(0, 10))
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

              <div className="grid md:grid-cols-2 gap-10">
                {/* Section 2 */}
                <section>
                  <SectionTitle Icon={Landmark} title="YOUR JOURNEY PREFERENCES" />
                  <div className="mt-5 space-y-5">
                    <Field
                      label="Which Sacred Journey Inspires You?"
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
                  <div className="grid grid-cols-2 gap-3 mt-5">
                    {lookingForOptions.map(({ label, Icon }) => {
                      const checked = selectedServices.includes(label);
                      return (
                        <label
                          key={label}
                          className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-3 cursor-pointer transition ${
                            checked
                              ? "border-orange-500 bg-orange-50"
                              : "border-orange-200 hover:border-orange-400"
                          }`}
                        >
                          <span className="flex items-center gap-2 text-xs md:text-sm text-stone-800 leading-tight">
                            <Icon size={16} className="text-orange-500 flex-shrink-0" />
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
              </div>

              {/* Section 4 */}
              <section>
                <SectionTitle Icon={Users} title="SELECT NUMBER OF TRAVELLERS" />
                <div className="grid sm:grid-cols-3 gap-5 mt-5">
                  <Field label="Adults (12+ years)" error={errors.adults}>
                    <div className="relative">
                      <Users size={16} className={iconCls} />
                      <select
                        className={fieldBase + " appearance-none pr-10"}
                        value={values.adults}
                        onChange={(e) => update("adults", e.target.value)}
                      >
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-orange-500 pointer-events-none"
                      />
                    </div>
                  </Field>
                  <Field label="Kids (1 – 12 years)">
                    <div className="relative">
                      <Users size={16} className={iconCls} />
                      <select
                        className={fieldBase + " appearance-none pr-10"}
                        value={values.kids}
                        onChange={(e) => update("kids", e.target.value)}
                      >
                        {Array.from({ length: 11 }, (_, i) => i).map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-orange-500 pointer-events-none"
                      />
                    </div>
                  </Field>
                  <Field label="Age Of Kids">
                    <div className="relative">
                      <User size={16} className={iconCls} />
                      <input
                        className={fieldBase}
                        placeholder="e.g. 5, 8"
                        value={values.kidsAge}
                        onChange={(e) => update("kidsAge", e.target.value)}
                      />
                    </div>
                  </Field>
                </div>
                <p className="text-xs text-stone-500 mt-3">
                  Note: Kids below 1 year are complimentary. Please mention in
                  special requests if applicable.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <SectionTitle
                  Icon={MessageCircle}
                  title="SPECIAL REQUESTS"
                  suffix="(Optional)"
                />
                <textarea
                  rows={4}
                  className="mt-5 w-full rounded-xl border border-orange-200 bg-white px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition resize-none"
                  placeholder="Tell us about your spiritual aspirations, preferred darshan experiences, senior citizens travelling, dietary preferences, or any special assistance required."
                  value={values.message}
                  onChange={(e) => update("message", e.target.value)}
                />
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-4 lg:sticky lg:top-24 self-start">
              <div className="bg-white rounded-3xl border border-orange-100 shadow-lg p-6">
                <p className="font-display text-orange-800 text-lg leading-tight">
                  YOUR JOURNEY,
                  <br />
                  OUR COMMITMENT
                </p>
                <ul className="mt-5 space-y-4">
                  {commitments.map(({ Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                        <Icon size={16} />
                      </span>
                      <span className="text-sm text-stone-700 leading-snug pt-1.5">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-2xl bg-gradient-to-br from-[#ea580c] to-[#d97706] text-white px-6 py-4 shadow-lg shadow-orange-500/25 hover:opacity-95 disabled:opacity-60 transition text-left"
              >
                <span className="block font-display text-lg leading-tight">
                  {submitting ? "Sending…" : "ॐ REQUEST MY DARSHAN PLAN"}
                </span>
                <span className="block text-xs text-orange-100 mt-1">
                  Our experts will call you shortly
                </span>
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 shadow-lg shadow-emerald-600/20 transition text-left"
              >
                <span className="flex items-center gap-2 font-display text-lg leading-tight">
                  <MessageCircle size={18} /> CHAT WITH A YATRA EXPERT
                </span>
                <span className="block text-xs text-emerald-100 mt-1">
                  Get quick answers on WhatsApp
                </span>
              </button>
            </aside>
          </form>

          {/* Bottom contact bar */}
          <div className="mt-6 bg-white rounded-3xl border border-orange-100 shadow-sm p-5 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            <InfoBar
              Icon={Phone}
              title="Need Immediate Assistance?"
              value={SUPPORT_PHONE}
            />
            <InfoBar
              Icon={MessageCircle}
              title="WhatsApp Available"
              value="We're here to help"
              color="emerald"
            />
            <InfoBar
              Icon={Clock}
              title="Daily: 08:00 AM – 10:00 PM"
              value="7 Days a Week"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const SectionTitle = ({
  Icon,
  title,
  suffix,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  suffix?: string;
}) => (
  <div className="flex items-center gap-2.5">
    <span className="w-9 h-9 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
      <Icon size={16} />
    </span>
    <h2 className="font-display text-orange-800 text-lg md:text-xl tracking-wide">
      {title}{" "}
      {suffix && (
        <span className="text-xs text-stone-500 font-sans normal-case tracking-normal">
          {suffix}
        </span>
      )}
    </h2>
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
    {error && <span className="text-xs text-rose-600 mt-1 block">{error}</span>}
  </label>
);

const InfoBar = ({
  Icon,
  title,
  value,
  color = "orange",
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  value: string;
  color?: "orange" | "emerald";
}) => {
  const colors =
    color === "emerald"
      ? "bg-emerald-50 border-emerald-200 text-emerald-600"
      : "bg-orange-50 border-orange-200 text-orange-600";
  return (
    <div className="flex items-center gap-3">
      <span className={`w-11 h-11 rounded-full border flex items-center justify-center ${colors}`}>
        <Icon size={18} />
      </span>
      <div>
        <p className="text-xs text-stone-500">{title}</p>
        <p className="text-sm font-semibold text-stone-800">{value}</p>
      </div>
    </div>
  );
};

export default SawanBookingPage;

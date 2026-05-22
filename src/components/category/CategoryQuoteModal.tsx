import { useState } from "react";

import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar as CalendarLucide,
  ArrowRight,
  X,
  Zap,
  ShieldCheck,
  Headphones,
  Sparkles,
  PawPrint,
  MessageCircle,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { submitFormWithToast } from "@/lib/submitForm";
import { cn } from "@/lib/utils";

export interface CategoryQuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  /** e.g. "Wildlife", "Nature", "Heritage", "Spiritual" */
  category: string;

  /** Heading shown at the top */
  title: string;

  /** Subtitle paragraph */
  subtitle?: string;

  /** Label for checkbox group */
  placesLabel: string;

  /** Checkbox options */
  places: string[];

  /** CTA button label */
  ctaLabel: string;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const durations = ["2-3 Days", "4-5 Days", "7+ Days", "Flexible"];

const comfortLevels = [
  "Budget",
  "Standard",
  "Premium",
  "Luxury",
];

const inputBase =
  "w-full h-11 pl-10 pr-3 rounded-xl border border-[#e8d6bd] bg-[#fffdfa] text-sm text-[#4b5563] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#c89b5e] focus:ring-4 focus:ring-[#f3e5d0] transition";

const selectBase =
  "w-full h-11 pl-10 pr-8 rounded-xl border border-[#e8d6bd] bg-[#fffdfa] text-sm text-[#4b5563] focus:outline-none focus:border-[#c89b5e] focus:ring-4 focus:ring-[#f3e5d0] transition appearance-none";

const CategoryQuoteModal = ({
  open,
  onOpenChange,
  category,
  title,
  subtitle,
  placesLabel,
  places,
  ctaLabel,
}: CategoryQuoteModalProps) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    from: "",
    month: "",
    duration: "",
    comfort: "",
    message: "",
  });

  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const update = (k: string, v: string) =>
    setForm((p) => ({ ...p, [k]: v }));

  const togglePlace = (p: string) =>
    setSelectedPlaces((prev) =>
      prev.includes(p)
        ? prev.filter((x) => x !== p)
        : [...prev, p]
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const res = await submitFormWithToast({
      formName: `${category} Custom Package Enquiry`,
      fullName: form.name,
      email: form.email,
      phone: form.phone,
      destination: `${category} - Custom Package`,
      travelDate: form.month,

      message: [
        form.from ? `From: ${form.from}` : "",
        form.duration ? `Duration: ${form.duration}` : "",
        form.comfort ? `Comfort: ${form.comfort}` : "",
        selectedPlaces.length
          ? `${placesLabel}: ${selectedPlaces.join(", ")}`
          : "",
        form.message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    setLoading(false);

    if (res.ok) onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[720px] w-[94vw] max-h-[88vh] overflow-y-auto p-0 bg-[#fffdf9] rounded-[32px] border border-[#eadcc8] shadow-[0_20px_80px_rgba(0,0,0,0.18)] [&>button]:hidden">

        <DialogTitle className="sr-only">
          {title}
        </DialogTitle>

        <DialogDescription className="sr-only">
          {subtitle}
        </DialogDescription>

        {/* CLOSE BUTTON */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-white border border-[#eadcc8] hover:bg-[#faf6ef] flex items-center justify-center text-[#b68a52] shadow-sm transition"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* TOP ICON */}
        <div className="relative flex justify-center pt-7">
          <div className="absolute -top-3 w-16 h-16 rounded-full bg-[#fffaf3] shadow-xl border border-[#eadcc8] flex items-center justify-center">
            <PawPrint className="text-[#c89b5e]" size={25} />
          </div>
        </div>

        {/* HEADER */}
        <div className="px-5 md:px-8 pt-12 pb-3 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f9f1e5] border border-[#ecd8bb] text-[#b7864b] text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            Tailor-Made Experiences
          </div>

          <h2 className="text-[30px] md:text-[42px] leading-[1.05] font-bold tracking-tight text-[#c89b5e]">
            {title}
          </h2>

          {subtitle && (
            <p className="text-sm md:text-[15px] text-[#7b8191] mt-3 max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="px-5 md:px-8 pb-7 space-y-5"
        >

          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            <div className="relative">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c89b5e]"
                size={16}
              />

              <input
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Full Name"
                className={inputBase}
              />
            </div>

            <div className="relative">
              <Phone
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c89b5e]"
                size={16}
              />

              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="Mobile Number"
                className={inputBase}
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c89b5e]"
                size={16}
              />

              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="Email Address"
                className={inputBase}
              />
            </div>

            <div className="relative">
              <MapPin
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c89b5e]"
                size={16}
              />

              <input
                value={form.from}
                onChange={(e) => update("from", e.target.value)}
                placeholder="Where will you be travelling from?"
                className={inputBase}
              />
            </div>
          </div>

          {/* TRAVEL + DURATION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* MONTH */}
            <div>
              <label className="block text-sm font-semibold text-[#a9783c] mb-2">
                Preferred Travel Period
              </label>

              <div className="relative">
                <CalendarLucide
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c89b5e] z-10"
                  size={16}
                />

                <select
                  value={form.month}
                  onChange={(e) => update("month", e.target.value)}
                  className={selectBase}
                >
                  <option value="">Select Month</option>

                  {months.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>

                <ArrowRight
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#c89b5e] rotate-90"
                  size={14}
                />
              </div>
            </div>

            {/* DURATION */}
            <div>
              <label className="block text-sm font-semibold text-[#a9783c] mb-2">
                Preferred Duration
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">

                {durations.map((d) => {
                  const active = form.duration === d;

                  return (
                    <button
                      key={d}
                      type="button"
                      onClick={() =>
                        update("duration", active ? "" : d)
                      }
                      className={cn(
                        "h-10 px-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all",
                        active
                          ? "border-[#c89b5e] bg-[#f8efe2] text-[#b37d3f]"
                          : "border-[#eadcc8] bg-white text-[#6b7280] hover:border-[#c89b5e]"
                      )}
                    >
                      <span
                        className={cn(
                          "w-3 h-3 rounded-full border",
                          active
                            ? "border-[#c89b5e] bg-[#c89b5e] ring-2 ring-[#f4e5d0]"
                            : "border-[#d1d5db]"
                        )}
                      />

                      {d}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* COMFORT */}
          <div>
            <label className="block text-sm font-semibold text-[#a9783c] mb-2">
              Comfort Preference
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">

              {comfortLevels.map((c) => {
                const active = form.comfort === c;

                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() =>
                      update("comfort", active ? "" : c)
                    }
                    className={cn(
                      "h-10 px-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all",
                      active
                        ? "border-[#c89b5e] bg-[#f8efe2] text-[#b37d3f]"
                        : "border-[#eadcc8] bg-white text-[#6b7280] hover:border-[#c89b5e]"
                    )}
                  >
                    <span
                      className={cn(
                        "w-3 h-3 rounded-full border",
                        active
                          ? "border-[#c89b5e] bg-[#c89b5e] ring-2 ring-[#f4e5d0]"
                          : "border-[#d1d5db]"
                      )}
                    />

                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          {/* PLACES */}
          <div>
            <label className="block text-sm font-semibold text-[#a9783c] mb-2">
              {placesLabel}

              <span className="text-[#9ca3af] font-normal">
                {" "}
                (Optional)
              </span>
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">

              {places.map((p) => {
                const active = selectedPlaces.includes(p);

                return (
                  <label
                    key={p}
                    className={cn(
                      "flex items-center gap-2 h-11 px-3 rounded-xl border text-sm cursor-pointer transition-all",
                      active
                        ? "border-[#c89b5e] bg-[#f8efe2] text-[#b37d3f]"
                        : "border-[#eadcc8] bg-white text-[#6b7280] hover:border-[#c89b5e]"
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={active}
                      onChange={() => togglePlace(p)}
                      className="w-4 h-4 rounded border-gray-300 text-[#c89b5e] focus:ring-[#c89b5e]"
                    />

                    <span className="truncate">
                      {p}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm font-semibold text-[#a9783c] mb-2">
              Tell us what kind of experience you are looking for

              <span className="text-[#9ca3af] font-normal">
                {" "}
                (Optional)
              </span>
            </label>

            <textarea
              rows={3}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Your expectations, must-do activities, special requirements..."
              className="w-full px-3 py-3 rounded-xl border border-[#e8d6bd] bg-[#fffdfa] text-sm text-[#4b5563] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#c89b5e] focus:ring-4 focus:ring-[#f3e5d0] transition resize-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl bg-gradient-to-r from-[#b98745] via-[#c89b5e] to-[#a87437] hover:from-[#c89b5e] hover:via-[#d4ab73] hover:to-[#b98745] text-white font-semibold text-base flex items-center justify-center gap-2 shadow-[0_12px_30px_rgba(200,155,94,0.28)] transition-all duration-300 disabled:opacity-70 hover:scale-[1.01]"
          >
            {loading ? (
              "Sending…"
            ) : (
              <>
                {ctaLabel}
                <ArrowRight size={18} />
              </>
            )}
          </button>

          {/* FEATURES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-5 border-t border-[#f0e4d3]">

            {[
              {
                icon: Zap,
                title: "Quick & Easy",
                desc: "Simple forms that save your time",
                bg: "bg-[#f8efe2]",
                color: "text-[#b7864b]",
              },

              {
                icon: ShieldCheck,
                title: "Secure & Safe",
                desc: "Your details are 100% secure with us",
                bg: "bg-[#eef4fb]",
                color: "text-[#4c73b9]",
              },

              {
                icon: Headphones,
                title: "Expert Assistance",
                desc: "Our local experts will connect with you soon",
                bg: "bg-[#f8efe2]",
                color: "text-[#c89b5e]",
              },

              {
                icon: Sparkles,
                title: "Personalized Trips",
                desc: "Customized itineraries as per your preferences",
                bg: "bg-[#fff3e8]",
                color: "text-[#de8a3b]",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-2"
              >
                <div
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center shrink-0",
                    f.bg
                  )}
                >
                  <f.icon
                    size={17}
                    className={f.color}
                  />
                </div>

                <div>
                  <div className="text-xs font-semibold text-[#6b4f2d]">
                    {f.title}
                  </div>

                  <div className="text-[11px] text-[#8b8f98] leading-tight mt-0.5">
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* WHATSAPP */}
          {/* WHATSAPP */}
          <div className="text-center pt-2">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-green-600 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-green-500 flex-shrink-0"
                fill="currentColor"
                aria-hidden
              >
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .15 5.34.15 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.76 1.47h.01c6.56 0 11.91-5.34 11.91-11.9 0-3.18-1.24-6.17-3.46-8.44ZM12.06 21.3h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.74.98 1-3.65-.22-.37a9.39 9.39 0 0 1-1.44-5 9.55 9.55 0 0 1 16.3-6.75 9.45 9.45 0 0 1 2.79 6.75 9.56 9.56 0 0 1-9.55 9.55Zm5.24-7.16c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.15-.19.28-.74.93-.9 1.12-.17.19-.34.21-.62.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.46-.48-.64-.49l-.55-.01a1.06 1.06 0 0 0-.77.36c-.26.29-1.01.99-1.01 2.41 0 1.42 1.03 2.79 1.18 2.99.14.19 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34Z" />
              </svg>

              Prefer to chat? Connect with our travel expert on

              <span className="text-green-600 font-semibold">
                WhatsApp
              </span>
            </a>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryQuoteModal;
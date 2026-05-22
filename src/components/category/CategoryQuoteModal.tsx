import { useState } from "react";
import {
  User, Phone, Mail, MapPin, Calendar as CalendarLucide, ArrowRight, X,
  Zap, ShieldCheck, Headphones, Sparkles, PawPrint,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { submitFormWithToast } from "@/lib/submitForm";
import { cn } from "@/lib/utils";

export interface CategoryQuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** e.g. "Wildlife", "Nature", "Heritage", "Spiritual" */
  category: string;
  /** Heading shown at the top, e.g. "Plan Your Wildlife Journey" */
  title: string;
  /** Subtitle paragraph */
  subtitle?: string;
  /** Label for the checkbox group, e.g. "Interested National Parks" */
  placesLabel: string;
  /** Checkbox options */
  places: string[];
  /** CTA button label, e.g. "Create My Wildlife Journey" */
  ctaLabel: string;
}

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const durations = ["2-3 Days", "4-5 Days", "7+ Days", "Flexible"];
const comfortLevels = ["Budget", "Standard", "Premium", "Luxury"];

const inputBase =
  "w-full h-11 pl-10 pr-3 rounded-lg border border-orange-100 bg-white text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition";

const selectBase =
  "w-full h-11 pl-10 pr-8 rounded-lg border border-orange-100 bg-white text-sm text-gray-700 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition appearance-none";

const CategoryQuoteModal = ({
  open, onOpenChange, category, title, subtitle,
  placesLabel, places, ctaLabel,
}: CategoryQuoteModalProps) => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", from: "",
    month: "", duration: "", comfort: "", message: "",
  });
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));
  const togglePlace = (p: string) =>
    setSelectedPlaces((prev) => prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]);

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
        selectedPlaces.length ? `${placesLabel}: ${selectedPlaces.join(", ")}` : "",
        form.message,
      ].filter(Boolean).join("\n"),
    });
    setLoading(false);
    if (res.ok) onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto p-0 bg-white rounded-2xl border-0 shadow-2xl [&>button]:hidden">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">{subtitle}</DialogDescription>

        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-500 transition"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Floating icon */}
        <div className="relative flex justify-center pt-8">
          <div className="absolute -top-2 w-14 h-14 rounded-full bg-white shadow-lg border border-orange-100 flex items-center justify-center">
            <PawPrint className="text-orange-600" size={24} />
          </div>
        </div>

        <div className="px-6 md:px-8 pt-14 pb-4 text-center">
          <h2 className="text-2xl md:text-[28px] font-display font-bold text-orange-600 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">{subtitle}</p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="px-6 md:px-8 pb-6 space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Full Name" className={inputBase} />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Mobile Number" className={inputBase} />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="Email Address" className={inputBase} />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input value={form.from} onChange={(e) => update("from", e.target.value)} placeholder="Where will you be travelling from?" className={inputBase} />
            </div>
          </div>

          {/* Travel period + Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-orange-600 mb-1.5">Preferred Travel Period</label>
              <div className="relative">
                <CalendarLucide className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={16} />
                <select value={form.month} onChange={(e) => update("month", e.target.value)} className={selectBase}>
                  <option value="">Select Month</option>
                  {months.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
                <ArrowRight className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 rotate-90" size={14} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-orange-600 mb-1.5">Preferred Duration</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {durations.map((d) => {
                  const active = form.duration === d;
                  return (
                    <button
                      key={d}
                      type="button"
                      onClick={() => update("duration", active ? "" : d)}
                      className={cn(
                        "h-10 px-2 rounded-lg border text-xs font-medium flex items-center justify-center gap-1.5 transition",
                        active
                          ? "border-orange-500 bg-orange-50 text-orange-700"
                          : "border-gray-200 bg-white text-gray-700 hover:border-orange-300"
                      )}
                    >
                      <span className={cn("w-3 h-3 rounded-full border", active ? "border-orange-500 bg-orange-500 ring-2 ring-orange-100" : "border-gray-300")} />
                      {d}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Comfort */}
          <div>
            <label className="block text-sm font-semibold text-orange-600 mb-1.5">Comfort Preference</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {comfortLevels.map((c) => {
                const active = form.comfort === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => update("comfort", active ? "" : c)}
                    className={cn(
                      "h-10 px-2 rounded-lg border text-xs font-medium flex items-center justify-center gap-1.5 transition",
                      active
                        ? "border-orange-500 bg-orange-50 text-orange-700"
                        : "border-gray-200 bg-white text-gray-700 hover:border-orange-300"
                    )}
                  >
                    <span className={cn("w-3 h-3 rounded-full border", active ? "border-orange-500 bg-orange-500 ring-2 ring-orange-100" : "border-gray-300")} />
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Places */}
          <div>
            <label className="block text-sm font-semibold text-orange-600 mb-1.5">
              {placesLabel} <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {places.map((p) => {
                const active = selectedPlaces.includes(p);
                return (
                  <label
                    key={p}
                    className={cn(
                      "flex items-center gap-2 h-10 px-3 rounded-lg border text-sm cursor-pointer transition",
                      active
                        ? "border-orange-500 bg-orange-50 text-orange-700"
                        : "border-gray-200 bg-white text-gray-700 hover:border-orange-300"
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={active}
                      onChange={() => togglePlace(p)}
                      className="w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="truncate">{p}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-orange-600 mb-1.5">
              Tell us what kind of experience you are looking for <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <textarea
              rows={3}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Your expectations, must-do activities, special requirements..."
              className="w-full px-3 py-2.5 rounded-lg border border-orange-100 bg-white text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition resize-none"
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-lg bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white font-semibold text-base flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition disabled:opacity-70"
          >
            {loading ? "Sending…" : (<>{ctaLabel} <ArrowRight size={18} /></>)}
          </button>

          {/* Feature row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-gray-100">
            {[
              { icon: Zap, title: "Quick & Easy", desc: "Simple forms that save your time", color: "text-green-600" },
              { icon: ShieldCheck, title: "Secure & Safe", desc: "Your details are 100% secure with us", color: "text-blue-600" },
              { icon: Headphones, title: "Expert Assistance", desc: "Our local experts will connect with you soon", color: "text-orange-600" },
              { icon: Sparkles, title: "Personalized Trips", desc: "Customized itineraries as per your preferences", color: "text-orange-500" },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-2">
                <f.icon size={18} className={cn("shrink-0 mt-0.5", f.color)} />
                <div>
                  <div className="text-xs font-semibold text-gray-800">{f.title}</div>
                  <div className="text-[11px] text-gray-500 leading-tight">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp footer */}
          <div className="text-center pt-2">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition"
            >
              <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-[11px] font-bold">W</span>
              Prefer to chat? Connect with our travel expert on{" "}
              <span className="text-green-600 font-semibold">WhatsApp</span>
            </a>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryQuoteModal;

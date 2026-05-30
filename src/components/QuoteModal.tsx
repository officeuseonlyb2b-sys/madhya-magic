import { useState, useEffect } from "react";
import {
  MapPin,
  User,
  Phone,
  Mail,
  Calendar as CalendarLucide,
  Moon,
  Users,
  Baby,
  Binoculars,
  PawPrint,
  Landmark,
  UserCheck,
  Crown,
  Map,
  Zap,
  ShieldCheck,
  Headphones,
  Sparkles,
  ArrowRight,
  X,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { submitFormWithToast } from "@/lib/submitForm";
import { cn } from "@/lib/utils";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  destinationName: string;
}

const interests = [
  { id: "sightseeing", label: "Sightseeing", icon: Binoculars },
  { id: "wildlife", label: "Wildlife Safari", icon: PawPrint },
  { id: "spiritual", label: "Spiritual Visit", icon: Landmark },
  { id: "local", label: "Local Experiences", icon: UserCheck },
  { id: "luxury", label: "Luxury Stay", icon: Crown },
  { id: "complete", label: "Complete Tour Plan", icon: Map },
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const inputBase =
  "w-full h-11 pl-10 pr-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#C89B5E] focus:ring-2 focus:ring-[#C89B5E]/20 transition";

const selectBase =
  "w-full h-11 pl-10 pr-8 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:border-[#C89B5E] focus:ring-2 focus:ring-[#C89B5E]/20 transition appearance-none";

const QuoteModal = ({ open, onOpenChange, destinationName }: QuoteModalProps) => {
  // Basic personal info
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    from: "",
    month: "",
    message: "",
  });
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Travelers & nights advanced states
  const [adultCount, setAdultCount] = useState<number>(2);
  const [adultCustomMode, setAdultCustomMode] = useState<boolean>(false);

  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [childrenCustomMode, setChildrenCustomMode] = useState<boolean>(false);
  const [childrenAges, setChildrenAges] = useState<number[]>([]);

  const [nightsCount, setNightsCount] = useState<number | null>(null);
  const [nightsCustomMode, setNightsCustomMode] = useState<boolean>(false);

  // Sync children ages array when childrenCount changes
  useEffect(() => {
    setChildrenAges(prev => {
      const newLen = childrenCount;
      if (newLen === prev.length) return prev;
      if (newLen > prev.length) {
        // Add empty ages (null placeholder)
        return [...prev, ...Array(newLen - prev.length).fill(null as any)];
      }
      return prev.slice(0, newLen);
    });
  }, [childrenCount]);

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));
  const toggle = (id: string) =>
    setSelected((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const validateChildrenAges = (): boolean => {
    if (childrenCount === 0) return true;
    for (let i = 0; i < childrenCount; i++) {
      const age = childrenAges[i];
      if (age === null || age === undefined || isNaN(age) || age < 0 || age > 17) {
        alert(`Please enter a valid age (0-17) for child ${i + 1}`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    if (!validateChildrenAges()) return;

    setLoading(true);
    const interestLabels = interests
      .filter((i) => selected.includes(i.id))
      .map((i) => i.label)
      .join(", ");

    // Build children ages string
    let childrenDetails = "";
    if (childrenCount > 0) {
      const agesList = childrenAges.slice(0, childrenCount).join(", ");
      childrenDetails = `Children Ages: ${agesList}`;
    }

    const nightsValue = nightsCount ? `${nightsCount} Night${nightsCount !== 1 ? 's' : ''}` : "Not specified";

    const fullMessage = [
      form.from ? `From: ${form.from}` : "",
      `Nights: ${nightsValue}`,
      interestLabels ? `Interested in: ${interestLabels}` : "",
      `Travelers: ${adultCount} Adult${adultCount !== 1 ? 's' : ''}, ${childrenCount} Child${childrenCount !== 1 ? 'ren' : ''}`,
      childrenDetails,
      form.message,
    ].filter(Boolean).join("\n");

    const res = await submitFormWithToast({
      formName: "Destination Enquiry",
      fullName: form.name,
      email: form.email,
      phone: form.phone,
      destination: destinationName,
      travelers: `${adultCount} Adults, ${childrenCount} Children`,
      travelDate: form.month,
      message: fullMessage,
    });
    setLoading(false);
    if (res.ok) onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-3xl max-h-[92vh] overflow-y-auto p-0 bg-white rounded-2xl border-0 shadow-2xl [&>button]:hidden"
      >
        <DialogTitle className="sr-only">Want to Explore {destinationName}?</DialogTitle>
        <DialogDescription className="sr-only">
          Plan your visit to {destinationName} with our local experts.
        </DialogDescription>

        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-500 transition"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Floating pin */}
        <div className="relative flex justify-center pt-8">
          <div className="absolute -top-2 w-14 h-14 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center">
            <MapPin className="text-[#C89B5E]" size={24} />
          </div>
        </div>

        <div className="px-6 md:px-10 pt-16 pb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#C89B5E] leading-tight">
            Want to Explore<br className="md:hidden" /> {destinationName}?
          </h2>
          <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
            Let our local experts help you plan the perfect visit for unforgettable memories.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="px-6 md:px-10 pb-6 space-y-5">
          {/* Row 1: Name + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Full Name"
                className={inputBase}
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
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

          {/* Row 2: Email + From */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
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
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                value={form.from}
                onChange={(e) => update("from", e.target.value)}
                placeholder="Where will you be travelling from?"
                className={inputBase}
              />
            </div>
          </div>

          {/* Travel Date + Nights with CUSTOM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-[#C89B5E] mb-1.5">
                Travel Date / Month
              </label>
              <div className="relative">
                <CalendarLucide className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={16} />
                <select
                  value={form.month}
                  onChange={(e) => update("month", e.target.value)}
                  className={selectBase}
                >
                  <option value="">Select Month</option>
                  {months.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
                <ArrowRight className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 rotate-90" size={14} />
              </div>
            </div>

            {/* Nights with custom option */}
            <div>
              <label className="block text-sm font-semibold text-[#C89B5E] mb-1.5">
                Number of Nights
              </label>
              {!nightsCustomMode ? (
                <div className="relative">
                  <Moon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={16} />
                  <select
                    value={nightsCount !== null ? nightsCount : ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === "custom") {
                        setNightsCustomMode(true);
                        setNightsCount(null);
                      } else {
                        setNightsCount(Number(val));
                      }
                    }}
                    className={selectBase}
                  >
                    <option value="" disabled>Select nights</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "Night" : "Nights"}</option>
                    ))}
                    <option value="custom">✨ Custom (Manual)</option>
                  </select>
                  <ArrowRight className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 rotate-90" size={14} />
                </div>
              ) : (
                <div className="flex gap-2 items-center">
                  <div className="relative flex-1">
                    <Moon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={16} />
                    <input
                      type="number"
                      min={1}
                      max={100}
                      value={nightsCount !== null ? nightsCount : ""}
                      onChange={(e) => setNightsCount(e.target.value ? Number(e.target.value) : null)}
                      placeholder="Enter nights"
                      className={inputBase}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setNightsCustomMode(false);
                      setNightsCount(null);
                    }}
                    className="text-xs text-gray-500 hover:text-red-500 underline whitespace-nowrap"
                  >
                    Use dropdown
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Travelers Section: Adults + Children with CUSTOM up to 20+ */}
          <div>
            <label className="block text-sm font-semibold text-[#C89B5E] mb-2">
              Number of Travelers
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* ADULTS with custom manual beyond 20 */}
              <div>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={16} />
                  {!adultCustomMode ? (
                    <select
                      value={adultCount}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === "custom") {
                          setAdultCustomMode(true);
                        } else {
                          setAdultCount(Number(val));
                        }
                      }}
                      className={selectBase}
                    >
                      {[...Array(20).keys()].map(i => i + 1).map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? "Adult" : "Adults"}</option>
                      ))}
                      <option value="custom">✏️ Custom (Manual)</option>
                    </select>
                  ) : (
                    <div className="flex gap-2 items-center">
                      <input
                        type="number"
                        min={1}
                        max={100}
                        value={adultCount}
                        onChange={(e) => setAdultCount(Math.max(1, Number(e.target.value)))}
                        className={inputBase}
                        placeholder="Adults count"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setAdultCustomMode(false);
                          if (adultCount > 20) setAdultCount(20);
                        }}
                        className="text-xs text-gray-500 hover:text-red-500 underline whitespace-nowrap"
                      >
                        Use preset
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* CHILDREN count with custom + dynamic age fields */}
              <div>
                <div className="relative">
                  <Baby className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={16} />
                  {!childrenCustomMode ? (
                    <select
                      value={childrenCount}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === "custom") {
                          setChildrenCustomMode(true);
                        } else {
                          setChildrenCount(Number(val));
                        }
                      }}
                      className={selectBase}
                    >
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? "Child" : "Children"}</option>
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
                        onChange={(e) => setChildrenCount(Math.max(0, Number(e.target.value)))}
                        className={inputBase}
                        placeholder="Children count"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setChildrenCustomMode(false);
                          if (childrenCount > 10) setChildrenCount(10);
                        }}
                        className="text-xs text-gray-500 hover:text-red-500 underline whitespace-nowrap"
                      >
                        Use preset
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Children Ages Section (Dynamic) */}
            {childrenCount > 0 && (
              <div className="mt-4 space-y-3 border-t border-gray-100 pt-3">
                <label className="block text-sm font-semibold text-[#C89B5E]">
                  Children Ages (required)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Array.from({ length: childrenCount }).map((_, idx) => (
                    <div key={idx} className="relative">
                      <input
                        type="number"
                        min={0}
                        max={17}
                        placeholder={`Child ${idx + 1} age`}
                        value={childrenAges[idx] !== undefined && childrenAges[idx] !== null ? childrenAges[idx] : ""}
                        onChange={(e) => {
                          const val = e.target.value === "" ? null : Number(e.target.value);
                          const newAges = [...childrenAges];
                          newAges[idx] = val;
                          setChildrenAges(newAges);
                        }}
                        className={cn(
                          inputBase,
                          "pl-4 text-center",
                          (childrenAges[idx] === null || childrenAges[idx] === undefined || childrenAges[idx] < 0 || childrenAges[idx] > 17) &&
                            "border-red-300 focus:border-red-500"
                        )}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400">Age must be between 0 and 17 years</p>
              </div>
            )}
          </div>

          {/* Interests */}
          <div>
            <label className="block text-sm font-semibold text-[#C89B5E] mb-2">
              I am interested in
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {interests.map(({ id, label, icon: Icon }) => {
                const active = selected.includes(id);
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => toggle(id)}
                    className={cn(
                      "flex items-center justify-center gap-2 h-12 px-3 rounded-lg border text-sm font-medium transition",
                      active
                        ? "border-[#C89B5E] bg-[#C89B5E]/10 text-[#C89B5E] shadow-sm"
                        : "border-gray-200 bg-white text-gray-700 hover:border-[#C89B5E]/50 hover:bg-[#C89B5E]/10",
                    )}
                  >
                    <Icon size={16} className={active ? "text-[#C89B5E]" : "text-[#C89B5E]"} />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Additional preferences */}
          <div>
            <label className="block text-sm font-semibold text-[#C89B5E] mb-1.5">
              Additional Preferences <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <textarea
              rows={3}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Tell us your preferences, must-see places, accessibility needs, etc."
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#C89B5E] focus:ring-2 focus:ring-[#C89B5E]/20 transition resize-none"
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-lg bg-gradient-to-r from-[#C89B5E] via-[#C89B5E] to-[#b8894d] hover:from-[#b8894d] hover:to-[#a97b42] text-white font-semibold text-base flex items-center justify-center gap-2 shadow-lg shadow-[#C89B5E]/25 transition disabled:opacity-70"
          >
            {loading ? "Sending…" : (
              <>Plan My Visit <ArrowRight size={18} /></>
            )}
          </button>

          {/* Features row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-gray-100">
            {[
              { icon: Zap, title: "Quick & Easy", desc: "Simple forms that save your time", color: "text-green-600" },
              { icon: ShieldCheck, title: "Secure & Safe", desc: "Your details are 100% secure with us", color: "text-blue-600" },
              { icon: Headphones, title: "Expert Assistance", desc: "Our local experts will connect with you soon", color: "text-[#C89B5E]" },
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
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .15 5.34.15 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.76 1.47h.01c6.56 0 11.91-5.34 11.91-11.9 0-3.18-1.24-6.17-3.46-8.44ZM12.06 21.3h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.74.98 1-3.65-.22-.37a9.39 9.39 0 0 1-1.44-5 9.55 9.55 0 0 1 16.3-6.75 9.45 9.45 0 0 1 2.79 6.75 9.56 9.56 0 0 1-9.55 9.55Zm5.24-7.16c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.15-.19.28-.74.93-.9 1.12-.17.19-.34.21-.62.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.48-.64-.49-.64l-.55-.01a1.06 1.06 0 0 0-.77.36c-.26.29-1.01.99-1.01 2.41 0 1.42 1.03 2.79 1.18 2.99.14.19 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34Z" />
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

export default QuoteModal;
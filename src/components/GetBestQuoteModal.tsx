import { useState, useCallback } from "react";
import { format } from "date-fns";
import {
  CalendarIcon,
  Gift,
  Tag,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  Zap,
  ShieldCheck,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { submitFormWithToast } from "@/lib/submitForm";

interface GetBestQuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  packageName: string;
  duration: string;
  destinations?: string;
  hotelCategory?: string;
  agentName?: string;
  agentEmail?: string;
}

const STAY_CATEGORIES = ["Standard", "Deluxe", "Premium", "Luxury"] as const;
const WHATSAPP_NUMBER = "9109114934";

const FEATURES = [
  {
    icon: Zap,
    title: "Quick & Easy",
    desc: "Simple forms that save your time",
    color: "text-green-600 bg-green-50",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Safe",
    desc: "Your details are 100% secure with us",
    color: "text-blue-700 bg-blue-50",
  },
  {
    icon: Users,
    title: "Expert Assistance",
    desc: "Our local experts will connect with you soon",
    color: "text-[#C89B5E] bg-[#C89B5E]/10",
  },
  {
    icon: Sparkles,
    title: "Personalized Trips",
    desc: "Customized itineraries as per your preferences",
    color: "text-orange-500 bg-orange-50",
  },
];

const GetBestQuoteModal = ({
  open,
  onOpenChange,
  packageName,
  duration,
  destinations,
  agentName = "",
  agentEmail = "",
}: GetBestQuoteModalProps) => {
  const [form, setForm] = useState({
    fullName: agentName,
    phone: "",
    email: agentEmail,
    travellingFrom: "",
    adults: "2",
    children: "0",
    stay: "Standard",
    customize: "No",
    message: "",
  });
  const [adultsCustom, setAdultsCustom] = useState("");
  const [childrenCustom, setChildrenCustom] = useState("");
  const [childrenAges, setChildrenAges] = useState<string[]>([]);

  const [travelDate, setTravelDate] = useState<Date>();
  const [loading, setLoading] = useState(false);

  const update = (k: string, v: string) =>
    setForm((p) => ({ ...p, [k]: v }));

  // ----- helper to get actual numeric traveler counts -----
  const getActualAdults = useCallback((): number => {
    if (form.adults === "custom") {
      const n = parseInt(adultsCustom, 10);
      return isNaN(n) || n < 1 ? 1 : n;
    }
    return parseInt(form.adults, 10) || 1;
  }, [form.adults, adultsCustom]);

  const getActualChildren = useCallback((): number => {
    if (form.children === "custom") {
      const n = parseInt(childrenCustom, 10);
      return isNaN(n) || n < 0 ? 0 : n;
    }
    return parseInt(form.children, 10) || 0;
  }, [form.children, childrenCustom]);

  // ---- handle children ages array resize ----
  const updateChildrenAges = (count: number) => {
    setChildrenAges((prev) => {
      if (count > prev.length) {
        return [...prev, ...Array(count - prev.length).fill("")];
      }
      return prev.slice(0, count);
    });
  };

  // ---- adult/children select change handlers ----
  const onAdultChange = (value: string) => {
    update("adults", value);
    if (value !== "custom") {
      setAdultsCustom(""); // clear custom input when switching to preset
    }
  };

  const onChildrenChange = (value: string) => {
    update("children", value);
    if (value === "custom") {
      // custom input will handle ages update
    } else {
      setChildrenCustom("");
      const count = parseInt(value, 10) || 0;
      updateChildrenAges(count);
    }
  };

  // ---- custom number input handlers ----
  const onAdultsCustomChange = (v: string) => {
    const cleaned = v.replace(/\D/g, "");
    setAdultsCustom(cleaned);
  };

  const onChildrenCustomChange = (v: string) => {
    const cleaned = v.replace(/\D/g, "");
    setChildrenCustom(cleaned);
    const num = parseInt(cleaned, 10);
    if (!isNaN(num)) {
      updateChildrenAges(num);
    }
  };

  const handleAgeChange = (index: number, value: string) => {
    const updated = [...childrenAges];
    updated[index] = value.replace(/\D/g, "").slice(0, 2);
    setChildrenAges(updated);
  };

  // ---- form submission ----
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (form.phone.length !== 10) {
      toast.error("Please enter a valid 10 digit phone number");
      return;
    }

    const adults = getActualAdults();
    const children = getActualChildren();

    // validate children ages if children > 0
    if (children > 0) {
      const allFilled = childrenAges.slice(0, children).every((age) => age.trim().length > 0);
      if (!allFilled) {
        toast.error("Please enter age for all children");
        return;
      }
    }

    setLoading(true);
    const res = await submitFormWithToast({
      formName: "Customized Quote Request",
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      packageName,
      travelDate: travelDate ? format(travelDate, "PPP") : undefined,
      travelers: `${adults} adult${adults > 1 ? "s" : ""}, ${children} child${children !== 1 ? "ren" : ""}`,
      message: form.message,
      extraFields: {
        Duration: duration,
        Destinations: destinations || "",
        "Travelling From": form.travellingFrom,
        "Preferred Stay Category": form.stay,
        "Needs Customization": form.customize,
        "Children Ages": children > 0 ? childrenAges.slice(0, children).join(", ") : "N/A",
      },
    });
    setLoading(false);
    if (res.ok) onOpenChange(false);
  };

  const whatsappMsg = encodeURIComponent(
    `Hi! I'm interested in the package: ${packageName} (${duration}).`
  );

  // compute actual numbers for conditional rendering
  const childrenCount = getActualChildren();
  const adultOptions = Array.from({ length: 20 }, (_, i) => i + 1);
  const childOptions = Array.from({ length: 21 }, (_, i) => i); // 0-20

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto p-0 bg-white rounded-2xl border-0 shadow-2xl">
        {/* Floating gift icon */}
        <div className="relative pt-10 px-6 sm:px-8">
          <div className="absolute left-1/2 -translate-x-1/2 -top-7 w-14 h-14 rounded-full bg-white shadow-lg ring-1 ring-[#C89B5E]/20 flex items-center justify-center">
            <Gift className="w-7 h-7 text-[#C89B5E]" />
          </div>

          <DialogHeader className="text-center space-y-2">
            <DialogTitle className="font-display text-2xl sm:text-3xl text-[#C89B5E] font-bold text-center">
              Interested in This Journey?
            </DialogTitle>
            <DialogDescription className="text-sm text-slate-500 max-w-md mx-auto text-center">
              Share your travel details and we'll personalize this package as
              per your dates, comfort, pace, and preferences.
            </DialogDescription>
          </DialogHeader>

          {/* Package summary card */}
          <div className="mt-5 rounded-xl border border-[#C89B5E]/20 bg-[#C89B5E]/10 px-4 py-3 sm:px-5 sm:py-4">
            <dl className="space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <Tag className="w-4 h-4 text-[#C89B5E] mt-0.5 flex-shrink-0" />
                <dt className="font-semibold text-[#C89B5E] w-28 flex-shrink-0">
                  Package:
                </dt>
                <dd className="text-slate-700 font-medium">{packageName}</dd>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C89B5E] mt-0.5 flex-shrink-0" />
                <dt className="font-semibold text-[#C89B5E] w-28 flex-shrink-0">
                  Duration:
                </dt>
                <dd className="text-slate-700 font-medium">{duration}</dd>
              </div>
              {destinations && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C89B5E] mt-0.5 flex-shrink-0" />
                  <dt className="font-semibold text-[#C89B5E] w-28 flex-shrink-0">
                    Destinations:
                  </dt>
                  <dd className="text-slate-700 font-medium">{destinations}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-6 sm:px-8 pt-5 pb-6 space-y-5">
          {/* Contact fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <IconInput
              icon={User}
              placeholder="Full Name"
              value={form.fullName}
              onChange={(v) => update("fullName", v)}
              required
            />
            <IconInput
              icon={Phone}
              type="tel"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={(v) =>
                update("phone", v.replace(/\D/g, "").slice(0, 10))
              }
              required
            />
            <IconInput
              icon={Mail}
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(v) => update("email", v)}
              required
            />
            <IconInput
              icon={MapPin}
              placeholder="Where will you be travelling from?"
              value={form.travellingFrom}
              onChange={(v) => update("travellingFrom", v)}
            />
          </div>

          {/* Date + Travelers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-[#C89B5E]">
                Preferred Travel Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-11 border-slate-200 bg-white hover:border-[#C89B5E]",
                      !travelDate && "text-slate-400"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-[#C89B5E]" />
                    {travelDate ? format(travelDate, "PPP") : "dd/mm/yyyy"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={travelDate}
                    onSelect={setTravelDate}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Travelers section – now with custom options */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-[#C89B5E]">
                Number of Travelers
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {/* Adults */}
                <div className="space-y-1">
                  <Select value={form.adults} onValueChange={onAdultChange}>
                    <SelectTrigger className="h-11 border-slate-200 bg-white focus:ring-[#C89B5E]/20 focus:border-[#C89B5E]">
                      <SelectValue placeholder="Adults" />
                    </SelectTrigger>
                    <SelectContent>
                      {adultOptions.map((n) => (
                        <SelectItem key={n} value={String(n)}>
                          {n} Adult{n > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.adults === "custom" && (
                    <Input
                      type="text"
                      inputMode="numeric"
                      placeholder="Enter number"
                      value={adultsCustom}
                      onChange={(e) => onAdultsCustomChange(e.target.value)}
                      className="h-9 mt-1 border-slate-200 bg-white placeholder:text-slate-400 focus-visible:ring-[#C89B5E]/20 focus-visible:border-[#C89B5E] text-sm"
                    />
                  )}
                </div>

                {/* Children */}
                <div className="space-y-1">
                  <Select value={form.children} onValueChange={onChildrenChange}>
                    <SelectTrigger className="h-11 border-slate-200 bg-white focus:ring-[#C89B5E]/20 focus:border-[#C89B5E]">
                      <SelectValue placeholder="Children" />
                    </SelectTrigger>
                    <SelectContent>
                      {childOptions.map((n) => (
                        <SelectItem key={n} value={String(n)}>
                          {n} Child{n !== 1 ? "ren" : ""}
                        </SelectItem>
                      ))}
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.children === "custom" && (
                    <Input
                      type="text"
                      inputMode="numeric"
                      placeholder="Enter number"
                      value={childrenCustom}
                      onChange={(e) => onChildrenCustomChange(e.target.value)}
                      className="h-9 mt-1 border-slate-200 bg-white placeholder:text-slate-400 focus-visible:ring-[#C89B5E]/20 focus-visible:border-[#C89B5E] text-sm"
                    />
                  )}
                </div>
              </div>

              {/* Children ages – visible when children > 0 */}
              {childrenCount > 0 && (
                <div className="mt-3 space-y-2">
                  <Label className="text-xs font-semibold text-[#C89B5E]">
                    Children Ages (in years)
                  </Label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {Array.from({ length: childrenCount }).map((_, idx) => (
                      <Input
                        key={idx}
                        type="text"
                        inputMode="numeric"
                        placeholder={`Child ${idx + 1} age`}
                        value={childrenAges[idx] || ""}
                        onChange={(e) => handleAgeChange(idx, e.target.value)}
                        className="h-9 border-slate-200 bg-white text-sm placeholder:text-slate-400 focus-visible:ring-[#C89B5E]/20 focus-visible:border-[#C89B5E]"
                        required
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Stay category + Customization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-[#C89B5E]">
                Preferred Stay Category
              </Label>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {STAY_CATEGORIES.map((opt) => (
                  <RadioPill
                    key={opt}
                    name="stay"
                    value={opt}
                    label={opt}
                    checked={form.stay === opt}
                    onChange={(v) => update("stay", v)}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-semibold text-[#C89B5E]">
                Need Customization?
              </Label>
              <div className="flex gap-4">
                {["Yes", "No"].map((opt) => (
                  <RadioPill
                    key={opt}
                    name="customize"
                    value={opt}
                    label={opt}
                    checked={form.customize === opt}
                    onChange={(v) => update("customize", v)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-[#C89B5E]">
              Special Requirements{" "}
              <span className="text-slate-400 font-normal">(Optional)</span>
            </Label>
            <Textarea
              rows={3}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Tell us your preferences, food, accessibility, surprises, etc."
              className="border-slate-200 bg-white resize-none focus-visible:ring-[#C89B5E]/20 focus-visible:border-[#C89B5E]"
            />
          </div>

          {/* CTA */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl text-base font-semibold text-white shadow-lg bg-gradient-to-r from-[#C89B5E] via-[#C89B5E] to-[#b8894d] hover:from-[#b8894d] hover:to-[#a97b42] transition-all disabled:opacity-70"
          >
            {loading ? (
              "Sending…"
            ) : (
              <span className="inline-flex items-center gap-2">
                Get My Customized Quote <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </Button>

          {/* Feature row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex items-start gap-2 pt-3">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                    f.color
                  )}
                >
                  <f.icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-[#C89B5E] leading-tight">
                    {f.title}
                  </p>
                  <p className="text-[10px] text-slate-500 leading-snug mt-0.5">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp */}
          <p className="text-center text-xs text-slate-500 pt-1">
            <span className="inline-flex items-center gap-1.5">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                aria-hidden
              >
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .15 5.34.15 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.76 1.47h.01c6.56 0 11.91-5.34 11.91-11.9 0-3.18-1.24-6.17-3.46-8.44ZM12.06 21.3h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.74.98 1-3.65-.22-.37a9.39 9.39 0 0 1-1.44-5 9.55 9.55 0 0 1 16.3-6.75 9.45 9.45 0 0 1 2.79 6.75 9.56 9.56 0 0 1-9.55 9.55Zm5.24-7.16c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.15-.19.28-.74.93-.9 1.12-.17.19-.34.21-.62.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.46-.48-.64-.49l-.55-.01a1.06 1.06 0 0 0-.77.36c-.26.29-1.01.99-1.01 2.41 0 1.42 1.03 2.79 1.18 2.99.14.19 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34Z" />
              </svg>
              Prefer to chat? Connect with our travel expert on{" "}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold hover:underline"
              >
                WhatsApp
              </a>
            </span>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

/* ---------- Helpers ---------- */

interface IconInputProps {
  icon: React.ComponentType<{ className?: string }>;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}

const IconInput = ({
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: IconInputProps) => (
  <div className="relative">
    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="h-11 pl-9 border-slate-200 bg-white placeholder:text-slate-400 focus-visible:ring-[#C89B5E]/20 focus-visible:border-[#C89B5E]"
    />
  </div>
);

interface RadioPillProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (v: string) => void;
}

const RadioPill = ({ name, value, label, checked, onChange }: RadioPillProps) => (
  <label className="inline-flex items-center gap-2 cursor-pointer text-sm">
    <span
      className={cn(
        "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors",
        checked ? "border-[#C89B5E]" : "border-slate-300"
      )}
    >
      {checked && <span className="w-2 h-2 rounded-full bg-[#C89B5E]" />}
    </span>
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={() => onChange(value)}
      className="sr-only"
    />
    <span className="text-slate-700">{label}</span>
  </label>
);

export default GetBestQuoteModal;
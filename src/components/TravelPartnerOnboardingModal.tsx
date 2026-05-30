import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, Handshake } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitFormWithToast } from "@/lib/submitForm";
import { cn } from "@/lib/utils";

const BUSINESS_TYPES = ["B2B", "B2C", "Both"];

const CATEGORIES = [
  "FIT Specialist", "Group Tour Operator", "Luxury Travel", "Spiritual Tours",
  "Wildlife Tours", "Honeymoon Specialist", "Student / Educational Tours",
  "Corporate Travel", "Adventure Travel", "Weekend Tours", "International Tours",
  "Family Holidays", "Women Special Tours", "Senior Citizen Tours",
];

const TRAVELER_TYPES = [
  "Couples", "Families", "Luxury Travelers", "Senior Citizens", "Students",
  "Corporate", "Pilgrimage Travelers", "Wildlife Enthusiasts", "Budget Travelers",
  "International Guests", "Women Groups", "Honeymoon Travelers",
];

const DOMESTIC_DESTS = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jammu & Kashmir","Jharkhand","Karnataka",
  "Kerala","Ladakh","Madhya Pradesh","Maharashtra","Meghalaya","Mizoram","Nagaland",
  "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Uttarakhand",
  "Uttar Pradesh","West Bengal","Andaman & Nicobar Islands","Lakshadweep",
];

const INTL_DESTS = [
  "Bhutan","Nepal","Thailand","Bali","Dubai","Vietnam","Singapore","Malaysia",
  "Maldives","Sri Lanka","Europe","Other",
];

const ALL_DESTS = [...DOMESTIC_DESTS, ...INTL_DESTS];

const HOTEL_CATEGORIES = [
  "Budget Hotels","3 Star Hotels","4 Star Hotels","Premium Hotels",
  "Luxury Hotels","Heritage Hotels","Boutique Stays","Mixed Category",
];

const DURATIONS = ["2–4 Days","5–7 Days","8–12 Days","12+ Days"];

const PAX_SIZES = ["1–2 Pax","3–6 Pax","7–15 Pax","16–30 Pax","31–50 Pax","50+ Pax"];

const INTERESTS = [
  "Wildlife","Spiritual","Heritage","Culture","Luxury","Adventure","Leisure",
  "Honeymoon","Nature","Photography","Textile & Art","Festivals","Wellness",
  "Food Experiences","Offbeat Experiences","Experiential Journeys",
];

const PROMOTION_METHODS = [
  "Instagram","Facebook","Google Ads","WhatsApp Marketing","Email Marketing",
  "Walk-ins","Referrals","Repeat Clients","Corporate Tie-ups","School Networks",
  "Offline Networking","YouTube","Travel Exhibitions / Events",
];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TravelPartnerOnboardingModal = ({ open, onOpenChange }: Props) => {
  const [submitting, setSubmitting] = useState(false);

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const [businessType, setBusinessType] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [fitPct, setFitPct] = useState("");
  const [gitPct, setGitPct] = useState("");
  const [travelerTypes, setTravelerTypes] = useState<string[]>([]);
  const [bestDests, setBestDests] = useState<string[]>([]);
  const [strongestSeller, setStrongestSeller] = useState("");
  const [hotels, setHotels] = useState<string[]>([]);
  const [durations, setDurations] = useState<string[]>([]);
  const [pax, setPax] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);
  const [guestCities, setGuestCities] = useState("");
  const [promotion, setPromotion] = useState<string[]>([]);
  const [growSegments, setGrowSegments] = useState("");
  const [additional, setAdditional] = useState("");

  const toggle = (
    list: string[],
    setter: (v: string[]) => void,
    value: string,
  ) => {
    setter(list.includes(value) ? list.filter(v => v !== value) : [...list, value]);
  };

  const reset = () => {
    setFullName(""); setCompany(""); setMobile(""); setEmail(""); setLocation("");
    setBusinessType(""); setCategories([]); setFitPct(""); setGitPct("");
    setTravelerTypes([]); setBestDests([]); setStrongestSeller("");
    setHotels([]); setDurations([]); setPax([]); setInterests([]);
    setGuestCities(""); setPromotion([]); setGrowSegments(""); setAdditional("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\\+?[0-9\\s\\-()]{7,20}$/.test(mobile.trim())) {
      const { toast } = await import("sonner");
      toast.error("Please enter a valid mobile number.");
      return;
    }
    setSubmitting(true);
    const result = await submitFormWithToast({
      formName: "Travel Partner Onboarding Form",
      fullName,
      email,
      phone: mobile,
      message: additional || undefined,
      extraFields: {
        "Travel Company / Agency": company,
        "State & City": location,
        "Business Type": businessType,
        "Business Categories": categories.join(", "),
        "FIT %": fitPct,
        "GIT %": gitPct,
        "Traveler Types Handled": travelerTypes.join(", "),
        "Best Performing Destinations": bestDests.join(", "),
        "Strongest Seller Destination": strongestSeller,
        "Preferred Hotel Categories": hotels.join(", "),
        "Average Tour Duration": durations.join(", "),
        "Typical Passenger Sizes": pax.join(", "),
        "Guest Major Interests": interests.join(", "),
        "Guest Source Cities": guestCities,
        "Promotion Methods": promotion.join(", "),
        "Segments Looking To Grow": growSegments,
      },
    });
    setSubmitting(false);
    if (result.ok) {
      reset();
      onOpenChange(false);
    }
  };

  const Chip = ({
    selected, onClick, children,
  }: { selected: boolean; onClick: () => void; children: React.ReactNode }) => (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-3 py-1.5 rounded-full text-[12.5px] border transition-all duration-200",
        selected
          ? "bg-amber-400 text-black border-amber-400 shadow-[0_0_0_3px_rgba(234,179,8,0.15)]"
          : "bg-white/[0.03] text-white/80 border-white/15 hover:border-amber-400/50 hover:text-amber-200",
      )}
    >
      {children}
    </button>
  );

  const SectionLabel = ({ children, required }: { children: React.ReactNode; required?: boolean }) => (
    <Label className="text-[13px] font-medium tracking-wide text-amber-300/90 mb-2 block">
      {children} {required && <span className="text-amber-400">*</span>}
    </Label>
  );

  const inputCls =
    "bg-white/[0.04] border-white/15 text-white placeholder:text-white/35 focus-visible:ring-amber-400/40 focus-visible:border-amber-400/60 h-11";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="p-0 max-w-3xl w-[95vw] max-h-[92vh] overflow-hidden border-amber-400/25 bg-[#08111f] text-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] rounded-2xl"
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col h-full max-h-[92vh]"
            >
              <div className="relative px-6 py-5 border-b border-amber-400/15 bg-gradient-to-r from-amber-400/[0.08] via-transparent to-amber-400/[0.04]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
                    <Handshake size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <DialogTitle className="text-[19px] font-serif text-white leading-tight">
                      Travel Partner Understanding Form
                    </DialogTitle>
                    <p className="text-[12px] text-white/55 mt-0.5">
                      Help us understand your business so we can collaborate better.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onOpenChange(false)}
                  className="absolute right-4 top-4 w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-amber-300 hover:bg-white/5 transition"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex-1 overflow-y-auto px-6 py-6 space-y-7"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <SectionLabel required>Full Name</SectionLabel>
                    <Input required value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Your full name" className={inputCls} />
                  </div>
                  <div>
                    <SectionLabel required>Travel Company / Agency Name</SectionLabel>
                    <Input required value={company} onChange={e => setCompany(e.target.value)} placeholder="Company name" className={inputCls} />
                  </div>
                  <div>
                    <SectionLabel required>Mobile Number</SectionLabel>
                    <Input required type="tel" value={mobile} onChange={e => setMobile(e.target.value)} placeholder="+91 98XXXXXXXX" className={inputCls} />
                  </div>
                  <div>
                    <SectionLabel required>Email Address</SectionLabel>
                    <Input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className={inputCls} />
                  </div>
                  <div className="sm:col-span-2">
                    <SectionLabel required>State & City</SectionLabel>
                    <Input required value={location} onChange={e => setLocation(e.target.value)} placeholder="e.g. Maharashtra, Mumbai" className={inputCls} />
                  </div>
                </div>

                <div>
                  <SectionLabel>Your business primarily operates as</SectionLabel>
                  <div className="flex flex-wrap gap-2">
                    {BUSINESS_TYPES.map(b => (
                      <Chip key={b} selected={businessType === b} onClick={() => setBusinessType(b)}>{b}</Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionLabel>Which category best describes your business?</SectionLabel>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(c => (
                      <Chip key={c} selected={categories.includes(c)} onClick={() => toggle(categories, setCategories, c)}>{c}</Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionLabel>How do you typically operate your tours?</SectionLabel>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-[12px] text-white/60 mb-1.5 block">FIT Percentage (%)</Label>
                      <Input type="number" min={0} max={100} value={fitPct} onChange={e => setFitPct(e.target.value)} placeholder="e.g. 60" className={inputCls} />
                    </div>
                    <div>
                      <Label className="text-[12px] text-white/60 mb-1.5 block">GIT Percentage (%)</Label>
                      <Input type="number" min={0} max={100} value={gitPct} onChange={e => setGitPct(e.target.value)} placeholder="e.g. 40" className={inputCls} />
                    </div>
                  </div>
                </div>

                <div>
                  <SectionLabel>What type of travelers do you mostly handle?</SectionLabel>
                  <div className="flex flex-wrap gap-2">
                    {TRAVELER_TYPES.map(t => (
                      <Chip key={t} selected={travelerTypes.includes(t)} onClick={() => toggle(travelerTypes, setTravelerTypes, t)}>{t}</Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionLabel>Which destinations currently perform best for your business?</SectionLabel>
                  <p className="text-[11.5px] text-white/40 mb-2 -mt-1">Domestic</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {DOMESTIC_DESTS.map(d => (
                      <Chip key={d} selected={bestDests.includes(d)} onClick={() => toggle(bestDests, setBestDests, d)}>{d}</Chip>
                    ))}
                  </div>
                  <p className="text-[11.5px] text-white/40 mb-2">International / Nearby</p>
                  <div className="flex flex-wrap gap-2">
                    {INTL_DESTS.map(d => (
                      <Chip key={d} selected={bestDests.includes(d)} onClick={() => toggle(bestDests, setBestDests, d)}>{d}</Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionLabel>Which destination is currently your strongest seller?</SectionLabel>
                  <select
                    value={strongestSeller}
                    onChange={e => setStrongestSeller(e.target.value)}
                    className={cn(inputCls, "w-full rounded-md px-3 appearance-none")}
                  >
                    <option value="" className="bg-[#08111f]">Select a destination</option>
                    {ALL_DESTS.map(d => (
                      <option key={d} value={d} className="bg-[#08111f]">{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <SectionLabel>What category of hotels do your clients usually prefer?</SectionLabel>
                  <div className="flex flex-wrap gap-2">
                    {HOTEL_CATEGORIES.map(h => (
                      <Chip key={h} selected={hotels.includes(h)} onClick={() => toggle(hotels, setHotels, h)}>{h}</Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionLabel>Average duration of your guests' tour programs</SectionLabel>
                  <div className="flex flex-wrap gap-2">
                    {DURATIONS.map(d => (
                      <Chip key={d} selected={durations.includes(d)} onClick={() => toggle(durations, setDurations, d)}>{d}</Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionLabel>Approximate passenger sizes usually handled</SectionLabel>
                  <div className="flex flex-wrap gap-2">
                    {PAX_SIZES.map(p => (
                      <Chip key={p} selected={pax.includes(p)} onClick={() => toggle(pax, setPax, p)}>{p}</Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionLabel>Major interests of your guests</SectionLabel>
                  <div className="flex flex-wrap gap-2">
                    {INTERESTS.map(i => (
                      <Chip key={i} selected={interests.includes(i)} onClick={() => toggle(interests, setInterests, i)}>{i}</Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionLabel>Which cities do your guests usually travel from?</SectionLabel>
                  <Textarea
                    value={guestCities}
                    onChange={e => setGuestCities(e.target.value)}
                    placeholder="Mumbai, Ahmedabad, Bengaluru, Chennai, Kolkata etc."
                    className={cn(inputCls, "h-24 py-2.5")}
                  />
                </div>

                <div>
                  <SectionLabel>Which promotion methods do you actively use?</SectionLabel>
                  <div className="flex flex-wrap gap-2">
                    {PROMOTION_METHODS.map(p => (
                      <Chip key={p} selected={promotion.includes(p)} onClick={() => toggle(promotion, setPromotion, p)}>{p}</Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionLabel>Destinations or travel segments you are currently looking to grow in</SectionLabel>
                  <Textarea
                    value={growSegments}
                    onChange={e => setGrowSegments(e.target.value)}
                    placeholder="Wildlife, Luxury Travel, Spiritual Tourism, Madhya Pradesh, Group Tours, International Tours etc."
                    className={cn(inputCls, "h-24 py-2.5")}
                  />
                </div>

                <div>
                  <SectionLabel>Additional Information</SectionLabel>
                  <Textarea
                    value={additional}
                    onChange={e => setAdditional(e.target.value)}
                    placeholder="Anything else you'd like to share about your business."
                    className={cn(inputCls, "h-28 py-2.5")}
                  />
                </div>

                <div className="sticky bottom-0 -mx-6 px-6 pt-4 pb-2 bg-gradient-to-t from-[#08111f] via-[#08111f]/95 to-transparent">
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-12 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-semibold tracking-wide shadow-[0_10px_30px_-8px_rgba(234,179,8,0.5)]"
                  >
                    {submitting ? (
                      <><Loader2 size={16} className="animate-spin" /> Submitting…</>
                    ) : (
                      "Submit Onboarding Form"
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default TravelPartnerOnboardingModal;

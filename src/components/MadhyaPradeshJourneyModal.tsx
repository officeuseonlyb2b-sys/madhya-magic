import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { submitFormWithToast } from "@/lib/submitForm";
import {
    User,
    Phone,
    Mail,
    MapPin,
    CalendarDays,
    Users,
    PawPrint,
    Landmark,
    Crown,
    Trees,
    Shield,
    ArrowRight,
    X,
    MessageSquare,
    ChevronDown,
    BadgeCheck,
    Headphones,
    Sparkles,
    ShieldCheck,
    Zap,
    Moon,
    Baby,
} from "lucide-react";

interface Props {
    open: boolean;
    onClose: () => void;
}

const interests = [
    { id: "wildlife", label: "Wildlife", icon: PawPrint },
    { id: "spiritual", label: "Spiritual", icon: Landmark },
    { id: "heritage", label: "Heritage", icon: Landmark },
    { id: "nature", label: "Nature", icon: Trees },
    { id: "luxury", label: "Luxury", icon: Crown },
    { id: "culture", label: "Culture", icon: Shield },
];

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];

const journeyTypes = [
    { value: "budget", label: "Budget" },
    { value: "luxury", label: "Luxury" },
    { value: "other", label: "Other" },
];

export default function JourneyPopup({ open, onClose }: Props) {
    // Personal info
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        from: "",
        month: "",
        message: "",
        journeyType: "",
        otherJourneyText: "",
    });
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    // Travelers & nights state
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
                return [...prev, ...Array(newLen - prev.length).fill(null as any)];
            }
            return prev.slice(0, newLen);
        });
    }, [childrenCount]);

    if (!open) return null;

    const update = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));
    const toggleInterest = (id: string) => {
        setSelectedInterests(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        );
    };

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

        // Prepare interests string
        const interestLabels = interests
            .filter(i => selectedInterests.includes(i.id))
            .map(i => i.label)
            .join(", ");

        // Children ages detail
        let childrenDetails = "";
        if (childrenCount > 0) {
            const agesList = childrenAges.slice(0, childrenCount).join(", ");
            childrenDetails = `Children Ages: ${agesList}`;
        }

        // Nights value
        const nightsValue = nightsCount ? `${nightsCount} Night${nightsCount !== 1 ? 's' : ''}` : "Not specified";

        // Journey type with custom text
        let journeyDetail = "";
        if (form.journeyType === "other" && form.otherJourneyText.trim()) {
            journeyDetail = `Journey Type: Other (${form.otherJourneyText.trim()})`;
        } else if (form.journeyType) {
            journeyDetail = `Journey Type: ${journeyTypes.find(j => j.value === form.journeyType)?.label || form.journeyType}`;
        }

        const fullMessage = [
            form.from ? `From: ${form.from}` : "",
            `Nights: ${nightsValue}`,
            interestLabels ? `Interested in: ${interestLabels}` : "",
            `Travelers: ${adultCount} Adult${adultCount !== 1 ? 's' : ''}, ${childrenCount} Child${childrenCount !== 1 ? 'ren' : ''}`,
            childrenDetails,
            journeyDetail,
            form.message,
        ].filter(Boolean).join("\n");

        const res = await submitFormWithToast({
            formName: "Madhya Pradesh Journey Enquiry",
            fullName: form.name,
            email: form.email,
            phone: form.phone,
            destination: "Madhya Pradesh",
            travelers: `${adultCount} Adults, ${childrenCount} Children`,
            travelDate: form.month,
            message: fullMessage,
        });

        setLoading(false);
        if (res.ok) onClose();
    };

    return (
        <div className="fixed inset-0 z-[9999] bg-black/55 backdrop-blur-md overflow-y-auto">
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="relative w-full max-w-[760px] bg-white rounded-[24px] shadow-[0_25px_80px_rgba(0,0,0,0.20)] overflow-hidden border border-[#f1dfbf] my-10">
                    {/* CLOSE BUTTON */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white border border-[#ead7b2] shadow-sm flex items-center justify-center hover:bg-[#faf7f1] transition"
                    >
                        <X size={17} className="text-[#C89B5E]" />
                    </button>

                    {/* TOP ICON */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-7 z-20">
                        <div className="w-14 h-14 rounded-full bg-[#fffaf2] border border-[#ead7b2] shadow-lg flex items-center justify-center">
                            <MapPin className="text-[#C89B5E]" size={24} />
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="px-5 md:px-7 pt-12 pb-5">
                        {/* TITLE */}
                        <div className="text-center max-w-xl mx-auto">
                            <h2 className="text-[#C89B5E] text-[26px] md:text-[34px] font-bold leading-[1.05] tracking-tight">
                                Plan Your
                                <br />
                                Madhya Pradesh Journey
                            </h2>
                            <p className="text-gray-500 mt-3 text-[13px] md:text-sm leading-relaxed">
                                Tell us a little about your travel dream and our experts will
                                craft the right journey for you.
                            </p>
                        </div>

                        {/* FORM */}
                        <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-[640px] mx-auto">
                            {/* NAME + PHONE */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="relative">
                                    <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B5E]" />
                                    <input
                                        required
                                        type="text"
                                        value={form.name}
                                        onChange={e => update("name", e.target.value)}
                                        placeholder="Full Name"
                                        className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-11 pr-4 text-[14px] text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
                                    />
                                </div>
                                <div className="relative">
                                    <Phone size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B5E]" />
                                    <input
                                        required
                                        type="tel"
                                        value={form.phone}
                                        onChange={e => update("phone", e.target.value)}
                                        placeholder="Mobile Number"
                                        className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-11 pr-4 text-[14px] text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
                                    />
                                </div>
                            </div>

                            {/* EMAIL + FROM */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="relative">
                                    <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B5E]" />
                                    <input
                                        required
                                        type="email"
                                        value={form.email}
                                        onChange={e => update("email", e.target.value)}
                                        placeholder="Email Address"
                                        className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-11 pr-4 text-[14px] text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
                                    />
                                </div>
                                <div className="relative">
                                    <MapPin size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B5E]" />
                                    <input
                                        type="text"
                                        value={form.from}
                                        onChange={e => update("from", e.target.value)}
                                        placeholder="Where will you be travelling from?"
                                        className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-11 pr-4 text-[14px] text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
                                    />
                                </div>
                            </div>

                            {/* MONTH + NIGHTS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {/* MONTH */}
                                <div>
                                    <label className="block text-[14px] font-semibold text-[#9d7435] mb-2">
                                        Tentative Travel Month
                                    </label>
                                    <div className="relative">
                                        <CalendarDays size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B5E]" />
                                        <select
                                            value={form.month}
                                            onChange={e => update("month", e.target.value)}
                                            className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-11 pr-10 appearance-none text-[14px] text-gray-700 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
                                        >
                                            <option value="">Select Month</option>
                                            {months.map(month => <option key={month}>{month}</option>)}
                                        </select>
                                        <ChevronDown size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C89B5E]" />
                                    </div>
                                </div>

                                {/* NIGHTS with custom option */}
                                <div>
                                    <label className="block text-[14px] font-semibold text-[#9d7435] mb-2">
                                        Number of Nights
                                    </label>
                                    {!nightsCustomMode ? (
                                        <div className="relative">
                                            <Moon size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B5E]" />
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
                                                className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-11 pr-10 appearance-none text-[14px] text-gray-700 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
                                            >
                                                <option value="" disabled>Select nights</option>
                                                {[...Array(20).keys()].map(i => i + 1).map(n => (
                                                    <option key={n} value={n}>{n} {n === 1 ? "Night" : "Nights"}</option>
                                                ))}
                                                <option value="custom">✨ Custom (Manual)</option>
                                            </select>
                                            <ChevronDown size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C89B5E]" />
                                        </div>
                                    ) : (
                                        <div className="flex gap-2 items-center">
                                            <div className="relative flex-1">
                                                <Moon size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B5E]" />
                                                <input
                                                    type="number"
                                                    min={1}
                                                    max={100}
                                                    value={nightsCount !== null ? nightsCount : ""}
                                                    onChange={(e) => setNightsCount(e.target.value ? Number(e.target.value) : null)}
                                                    placeholder="Enter nights"
                                                    className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-11 pr-4 text-[14px] text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
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

                            {/* TRAVELERS (Adults + Children) */}
                            <div>
                                <label className="block text-[14px] font-semibold text-[#9d7435] mb-2">
                                    Number of Travelers
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {/* ADULTS */}
                                    <div className="relative">
                                        <Users size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B5E]" />
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
                                                className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-11 pr-8 appearance-none text-[14px] text-gray-700 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
                                            >
                                                {[...Array(20).keys()].map(i => i + 1).map(n => (
                                                    <option key={n} value={n}>{n} Adult{n !== 1 ? 's' : ''}</option>
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
                                                    className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-4 pr-4 text-[14px] text-gray-700 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
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
                                        <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C89B5E]" />
                                    </div>

                                    {/* CHILDREN */}
                                    <div className="relative">
                                        <Baby size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B5E]" />
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
                                                className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-11 pr-8 appearance-none text-[14px] text-gray-700 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
                                            >
                                                {[...Array(11).keys()].map(n => (
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
                                                    className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-4 pr-4 text-[14px] text-gray-700 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
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
                                        <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C89B5E]" />
                                    </div>
                                </div>

                                {/* Children Ages Section */}
                                {childrenCount > 0 && (
                                    <div className="mt-3 space-y-2 border-t border-gray-100 pt-3">
                                        <label className="block text-[13px] font-semibold text-[#9d7435]">
                                            Children Ages (required)
                                        </label>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
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
                                                            "w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-4 pr-4 text-center text-[14px] text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition",
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

                            {/* INTERESTS */}
                            <div>
                                <label className="block text-[14px] font-semibold text-[#9d7435] mb-3">
                                    What would you like to explore?
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {interests.map(({ id, label, icon: Icon }) => {
                                        const active = selectedInterests.includes(id);
                                        return (
                                            <button
                                                key={id}
                                                type="button"
                                                onClick={() => toggleInterest(id)}
                                                className={`h-11 rounded-xl border text-[14px] font-medium flex items-center justify-center gap-2 transition
                                                ${active
                                                        ? "bg-[#fdf5e8] border-[#C89B5E] text-[#C89B5E] shadow-sm"
                                                        : "bg-white border-[#ead7b2] text-gray-700 hover:border-[#C89B5E] hover:bg-[#fdf9f2]"
                                                    }`}
                                            >
                                                <Icon size={15} className="text-[#C89B5E]" />
                                                {label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* TYPE OF JOURNEY (Budget, Luxury, Other) */}
                            <div>
                                <label className="block text-[14px] font-semibold text-[#9d7435] mb-2">
                                    Type of Journey
                                </label>
                                <div className="relative">
                                    <select
                                        value={form.journeyType}
                                        onChange={e => update("journeyType", e.target.value)}
                                        className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white px-4 pr-10 appearance-none text-[14px] text-gray-700 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
                                    >
                                        <option value="">Select Type of Journey</option>
                                        {journeyTypes.map(type => (
                                            <option key={type.value} value={type.value}>{type.label}</option>
                                        ))}
                                    </select>
                                    <ChevronDown size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C89B5E]" />
                                </div>
                                {form.journeyType === "other" && (
                                    <input
                                        type="text"
                                        value={form.otherJourneyText}
                                        onChange={e => update("otherJourneyText", e.target.value)}
                                        placeholder="Please specify your journey type"
                                        className="mt-2 w-full h-11 rounded-xl border border-[#ead7b2] bg-white px-4 text-[14px] text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
                                    />
                                )}
                            </div>

                            {/* TEXTAREA */}
                            <div>
                                <label className="block text-[14px] font-semibold text-[#9d7435] mb-2">
                                    Tell us more about your trip
                                    <span className="text-gray-400 font-normal"> (Optional)</span>
                                </label>
                                <div className="relative">
                                    <MessageSquare size={15} className="absolute left-4 top-4 text-[#C89B5E]" />
                                    <textarea
                                        rows={3}
                                        value={form.message}
                                        onChange={e => update("message", e.target.value)}
                                        placeholder="Your preferences, special requests..."
                                        className="w-full rounded-xl border border-[#ead7b2] bg-white pl-11 pr-4 py-3 text-[14px] text-gray-700 placeholder:text-gray-400 outline-none resize-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
                                    />
                                </div>
                            </div>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full h-11 rounded-xl bg-gradient-to-r from-[#C89B5E] via-[#d4aa70] to-[#C89B5E] text-white font-semibold text-[14px] shadow-lg shadow-[#C89B5E]/20 hover:scale-[1.01] transition flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {loading ? "Sending..." : "Start Planning My Trip"}
                                <ArrowRight size={16} />
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
                                        <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .15 5.34.15 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.76 1.47h.01c6.56 0 11.91-5.34 11.91-11.9 0-3.18-1.24-6.17-3.46-8.44ZM12.06 21.3h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.74.98 1-3.65-.22-.37a9.39 9.39 0 0 1-1.44-5 9.55 9.55 0 0 1 16.3-6.75 9.45 9.45 0 0 1 2.79 6.75 9.56 9.56 0 0 1-9.55 9.55Zm5.24-7.16c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.15-.19.28-.74.93-.9 1.12-.17.19-.34.21-.62.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.46-.48-.64-.49l-.55-.01a1.06 1.06 0 0 0-.77.36c-.26.29-1.01.99-1.01 2.41 0 1.42 1.03 2.79 1.18 2.99.14.19 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34Z" />
                                    </svg>
                                    Prefer to chat? Connect with our travel expert on
                                    <span className="text-green-600 font-semibold">WhatsApp</span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
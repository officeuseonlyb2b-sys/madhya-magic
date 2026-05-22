import { useState } from "react";
import { cn } from "@/lib/utils";
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

export default function JourneyPopup({ open, onClose }: Props) {
    const [selected, setSelected] = useState<string[]>([]);

    if (!open) return null;

    const toggleInterest = (id: string) => {
        setSelected((prev) =>
            prev.includes(id)
                ? prev.filter((x) => x !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="fixed inset-0 z-[9999] bg-black/55 backdrop-blur-md overflow-y-auto">
            <div className="min-h-screen flex items-center justify-center p-4">

                {/* MAIN POPUP */}
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
                        <div className="mt-6 space-y-4 max-w-[640px] mx-auto">

                            {/* NAME + PHONE */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                                <div className="relative">
                                    <User
                                        size={15}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B5E]"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-11 pr-4 text-[14px] text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
                                    />
                                </div>

                                <div className="relative">
                                    <Phone
                                        size={15}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B5E]"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Mobile Number"
                                        className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-11 pr-4 text-[14px] text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
                                    />
                                </div>
                            </div>

                            {/* EMAIL + FROM */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                                <div className="relative">
                                    <Mail
                                        size={15}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B5E]"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-11 pr-4 text-[14px] text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
                                    />
                                </div>

                                <div className="relative">
                                    <MapPin
                                        size={15}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B5E]"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Where will you be travelling from?"
                                        className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-11 pr-4 text-[14px] text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
                                    />
                                </div>
                            </div>

                            {/* MONTH + TRAVELERS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                                {/* MONTH */}
                                <div>
                                    <label className="block text-[14px] font-semibold text-[#9d7435] mb-2">
                                        Tentative Travel Month
                                    </label>

                                    <div className="relative">
                                        <CalendarDays
                                            size={15}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B5E]"
                                        />

                                        <select className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-11 pr-10 appearance-none text-[14px] text-gray-700 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition">
                                            <option>Select Month</option>

                                            {months.map((month) => (
                                                <option key={month}>{month}</option>
                                            ))}
                                        </select>

                                        <ChevronDown
                                            size={15}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C89B5E]"
                                        />
                                    </div>
                                </div>

                                {/* TRAVELERS */}
                                <div>
                                    <label className="block text-[14px] font-semibold text-[#9d7435] mb-2">
                                        Number of Travelers
                                    </label>

                                    <div className="grid grid-cols-2 gap-3">

                                        <div className="relative">
                                            <Users
                                                size={15}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B5E]"
                                            />

                                            <select className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-11 pr-8 appearance-none text-[14px] text-gray-700 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition">
                                                <option>Adults</option>
                                            </select>

                                            <ChevronDown
                                                size={15}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C89B5E]"
                                            />
                                        </div>

                                        <div className="relative">
                                            <Users
                                                size={15}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B5E]"
                                            />

                                            <select className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white pl-11 pr-8 appearance-none text-[14px] text-gray-700 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition">
                                                <option>Children</option>
                                            </select>

                                            <ChevronDown
                                                size={15}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C89B5E]"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* INTERESTS */}
                            <div>
                                <label className="block text-[14px] font-semibold text-[#9d7435] mb-3">
                                    What would you like to explore?
                                </label>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                                    {interests.map(({ id, label, icon: Icon }) => {
                                        const active = selected.includes(id);

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
                                                <Icon
                                                    size={15}
                                                    className="text-[#C89B5E]"
                                                />

                                                {label}
                                            </button>
                                        );
                                    })}

                                </div>
                            </div>

                            {/* TYPE */}
                            <div>
                                <label className="block text-[14px] font-semibold text-[#9d7435] mb-2">
                                    Type of Journey
                                </label>

                                <div className="relative">
                                    <select className="w-full h-11 rounded-xl border border-[#ead7b2] bg-white px-4 pr-10 appearance-none text-[14px] text-gray-700 outline-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition">
                                        <option>Select Type of Journey</option>
                                    </select>

                                    <ChevronDown
                                        size={15}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C89B5E]"
                                    />
                                </div>
                            </div>

                            {/* TEXTAREA */}
                            <div>
                                <label className="block text-[14px] font-semibold text-[#9d7435] mb-2">
                                    Tell us more about your trip
                                    <span className="text-gray-400 font-normal"> (Optional)</span>
                                </label>

                                <div className="relative">
                                    <MessageSquare
                                        size={15}
                                        className="absolute left-4 top-4 text-[#C89B5E]"
                                    />

                                    <textarea
                                        rows={3}
                                        placeholder="Your preferences, special requests..."
                                        className="w-full rounded-xl border border-[#ead7b2] bg-white pl-11 pr-4 py-3 text-[14px] text-gray-700 placeholder:text-gray-400 outline-none resize-none focus:border-[#C89B5E] focus:ring-4 focus:ring-[#C89B5E]/15 transition"
                                    />
                                </div>
                            </div>

                            {/* BUTTON */}
                            <button className="w-full h-11 rounded-xl bg-gradient-to-r from-[#C89B5E] via-[#d4aa70] to-[#C89B5E] text-white font-semibold text-[14px] shadow-lg shadow-[#C89B5E]/20 hover:scale-[1.01] transition flex items-center justify-center gap-2">
                                Start Planning My Trip
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

                                    <span className="text-green-600 font-semibold">
                                        WhatsApp
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
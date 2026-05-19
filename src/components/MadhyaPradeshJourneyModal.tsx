import { useState } from "react";
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
        <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm overflow-y-auto">
            <div className="min-h-screen flex items-center justify-center p-4">

                {/* MAIN POPUP */}
                <div className="relative w-full max-w-3xl bg-white rounded-[26px] shadow-2xl overflow-hidden">

                    {/* CLOSE BUTTON */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-50 transition"
                    >
                        <X size={18} />
                    </button>

                    {/* TOP ICON */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-20">
                        <div className="w-16 h-16 rounded-full bg-[#f5f7ef] border border-[#dfe7d7] shadow-lg flex items-center justify-center">
                            <MapPin className="text-[#315c2b]" size={28} />
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="px-5 md:px-8 pt-14 pb-5">

                        {/* TITLE */}
                        <div className="text-center">
                            <h2 className="text-[#2f5d2d] text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight">
                                Plan Your
                                <br />
                                Madhya Pradesh Journey
                            </h2>

                            <p className="text-gray-500 mt-3 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
                                Tell us a little about your travel dream and our experts will
                                craft the right journey for you.
                            </p>
                        </div>

                        {/* FORM */}
                        <div className="mt-7 space-y-4">

                            {/* NAME + PHONE */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <div className="relative">
                                    <User
                                        size={16}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full h-12 rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#2f5d2d] focus:ring-4 focus:ring-green-100 transition"
                                    />
                                </div>

                                <div className="relative">
                                    <Phone
                                        size={16}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Mobile Number"
                                        className="w-full h-12 rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#2f5d2d] focus:ring-4 focus:ring-green-100 transition"
                                    />
                                </div>
                            </div>

                            {/* EMAIL + FROM */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <div className="relative">
                                    <Mail
                                        size={16}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full h-12 rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#2f5d2d] focus:ring-4 focus:ring-green-100 transition"
                                    />
                                </div>

                                <div className="relative">
                                    <MapPin
                                        size={16}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Where will you be travelling from?"
                                        className="w-full h-12 rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#2f5d2d] focus:ring-4 focus:ring-green-100 transition"
                                    />
                                </div>
                            </div>

                            {/* MONTH + TRAVELERS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                {/* MONTH */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                                        Tentative Travel Month
                                    </label>

                                    <div className="relative">
                                        <CalendarDays
                                            size={16}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                        />

                                        <select className="w-full h-12 rounded-xl border border-gray-200 bg-white pl-12 pr-10 appearance-none text-sm text-gray-700 outline-none focus:border-[#2f5d2d] focus:ring-4 focus:ring-green-100 transition">
                                            <option>Select Month</option>

                                            {months.map((month) => (
                                                <option key={month}>{month}</option>
                                            ))}
                                        </select>

                                        <ChevronDown
                                            size={16}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                                        />
                                    </div>
                                </div>

                                {/* TRAVELERS */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                                        Number of Travelers
                                    </label>

                                    <div className="grid grid-cols-2 gap-3">

                                        <div className="relative">
                                            <Users
                                                size={16}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                            />

                                            <select className="w-full h-12 rounded-xl border border-gray-200 bg-white pl-12 pr-8 appearance-none text-sm text-gray-700 outline-none focus:border-[#2f5d2d] focus:ring-4 focus:ring-green-100 transition">
                                                <option>Adults</option>
                                            </select>

                                            <ChevronDown
                                                size={16}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                            />
                                        </div>

                                        <div className="relative">
                                            <Users
                                                size={16}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                            />

                                            <select className="w-full h-12 rounded-xl border border-gray-200 bg-white pl-12 pr-8 appearance-none text-sm text-gray-700 outline-none focus:border-[#2f5d2d] focus:ring-4 focus:ring-green-100 transition">
                                                <option>Children</option>
                                            </select>

                                            <ChevronDown
                                                size={16}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* INTERESTS */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-3">
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
                                                className={`h-12 rounded-xl border text-sm font-medium flex items-center justify-center gap-2 transition
                ${active
                                                        ? "bg-green-50 border-[#2f5d2d] text-[#2f5d2d]"
                                                        : "bg-white border-gray-200 text-gray-700 hover:border-[#2f5d2d]"
                                                    }`}
                                            >
                                                <Icon
                                                    size={16}
                                                    className={
                                                        active
                                                            ? "text-[#2f5d2d]"
                                                            : "text-[#3f7a37]"
                                                    }
                                                />

                                                {label}
                                            </button>
                                        );
                                    })}

                                </div>
                            </div>

                            {/* TYPE */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Type of Journey
                                </label>

                                <div className="relative">
                                    <select className="w-full h-12 rounded-xl border border-gray-200 bg-white px-4 pr-10 appearance-none text-sm text-gray-700 outline-none focus:border-[#2f5d2d] focus:ring-4 focus:ring-green-100 transition">
                                        <option>Select Type of Journey</option>
                                    </select>

                                    <ChevronDown
                                        size={16}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* TEXTAREA */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Tell us more about your trip
                                    <span className="text-gray-400 font-normal"> (Optional)</span>
                                </label>

                                <div className="relative">
                                    <MessageSquare
                                        size={16}
                                        className="absolute left-4 top-4 text-gray-400"
                                    />

                                    <textarea
                                        rows={3}
                                        placeholder="Your preferences, special requests..."
                                        className="w-full rounded-xl border border-gray-200 bg-white pl-12 pr-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none resize-none focus:border-[#2f5d2d] focus:ring-4 focus:ring-green-100 transition"
                                    />
                                </div>
                            </div>

                            {/* BUTTON */}
                            <button className="w-full h-13 rounded-xl bg-gradient-to-r from-[#184f22] via-[#1e6a2d] to-[#184f22] text-white font-semibold text-base shadow-lg hover:scale-[1.01] transition flex items-center justify-center gap-2">
                                Start Planning My Trip
                                <ArrowRight size={18} />
                            </button>

                            {/* FEATURES */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#f7f8f2] rounded-2xl p-5 border border-[#ecefe3]">

                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-full bg-[#eef7e9] flex items-center justify-center mx-auto mb-2">
                                        <Zap className="text-[#5b8c43]" size={22} />
                                    </div>

                                    <h4 className="text-[#4b6d3d] font-semibold text-sm">
                                        Quick & Easy
                                    </h4>

                                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                        Simple forms that save your time
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-full bg-[#eef2fb] flex items-center justify-center mx-auto mb-2">
                                        <BadgeCheck className="text-[#3456a3]" size={22} />
                                    </div>

                                    <h4 className="text-[#3456a3] font-semibold text-sm">
                                        Secure & Safe
                                    </h4>

                                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                        Your details are 100% secure
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-full bg-[#f4eefb] flex items-center justify-center mx-auto mb-2">
                                        <Headphones className="text-[#7c43a8]" size={22} />
                                    </div>

                                    <h4 className="text-[#7c43a8] font-semibold text-sm">
                                        Expert Assistance
                                    </h4>

                                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                        Our local experts will connect soon
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-full bg-[#fff1e9] flex items-center justify-center mx-auto mb-2">
                                        <Sparkles className="text-[#de7a2b]" size={22} />
                                    </div>

                                    <h4 className="text-[#de7a2b] font-semibold text-sm">
                                        Personalized Trips
                                    </h4>

                                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                        Customized itineraries for you
                                    </p>
                                </div>

                            </div>

                            {/* WHATSAPP */}
                            <div className="text-center pt-1">
                                <button className="text-sm text-gray-600 hover:text-green-600 transition">
                                    Prefer to chat? Connect on{" "}
                                    <span className="text-green-600 font-semibold">
                                        WhatsApp
                                    </span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
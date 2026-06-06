// src/components/exclusive/WhychooseUs.tsx
import { useState } from "react";
import {
    Home,
    Compass,
    Handshake,
    Heart,
    PhoneCall,
    ArrowRight,
} from "lucide-react";
import JourneyPopup from "@/components/MadhyaPradeshJourneyModal";
import whyChooseUsImage from "@/assets/shravan/choose.jpeg";

export default function WhychooseUs() {
    const [openJourneyPopup, setOpenJourneyPopup] = useState(false);

    const reasons = [
        {
            icon: Home,
            title: "Madhya Pradesh Is Our Home",
            description:
                "We know Madhya Pradesh beyond guidebooks — from hidden forests and heritage towns to authentic local experiences.",
        },
        {
            icon: Compass,
            title: "Handcrafted Journeys",
            description:
                "Every journey is thoughtfully designed around your travel style, interests, and pace.",
        },
        {
            icon: Handshake,
            title: "Trusted Local Network Across the State",
            description:
                "Longstanding partnerships with hotels, guides, drivers and communities ensure smooth, authentic journeys every time.",
        },
        {
            icon: Heart,
            title: "Real Experiences. Genuine Hospitality.",
            description:
                "Warm welcomes, thoughtful planning and people-first service make each trip personal and memorable.",
        },
    ];

    const handleSpeakToExpert = () => {
        alert("📞 Speak to our Madhya Pradesh travel experts — we'll craft your perfect journey.");
    };

    return (
        <>
            <section className="w-full bg-white overflow-hidden">
                <div className="grid lg:grid-cols-2 min-h-[520px]">
                    {/* LEFT SIDE - Why Choose Us Content */}
                    <div className="relative z-10 flex items-center px-5 py-12 md:px-10 lg:px-14">
                        <div className="max-w-[560px]">
                            {/* HEADING - Now reflects Madhya Pradesh roots */}
                            <h2 className="text-black text-[32px] md:text-[44px] leading-[1.1] tracking-[-1px] font-light font-display">
                                <div className="whitespace-nowrap">
                                    <span className="font-bold">Why Choose Us</span>
                                </div>
                            </h2>

                            {/* MAIN DESCRIPTION - Your provided paragraph */}
                            <p className="mt-5 text-gray-600 text-[13px] md:text-[14px] leading-[1.8] max-w-[500px]">
                                Deeply rooted in Madhya Pradesh since 2014, we create thoughtfully curated journeys
                                that go beyond sightseeing. From wilderness and heritage to spirituality and local
                                traditions, our strong local expertise, trusted network, and personalized approach
                                help you experience the true soul of Central India with comfort, authenticity, and care.
                            </p>

                            {/* REASONS GRID - New 4 core promises */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mt-10">
                                {reasons.map((reason, index) => {
                                    const Icon = reason.icon;
                                    return (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="min-w-[58px] min-h-[58px] rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                                                <Icon className="text-[#ff7a00] w-5 h-5" strokeWidth={1.8} />
                                            </div>
                                            <div className="pt-0.5">
                                                <h3 className="text-black text-[18px] leading-[1.2] font-semibold font-display">
                                                    {reason.title}
                                                </h3>
                                                <p className="mt-2 text-gray-500 text-[13px] leading-[1.7] max-w-[210px]">
                                                    {reason.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* ACTION BUTTONS - unchanged functionality, clearer CTA */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-12">
                                <button
                                    onClick={handleSpeakToExpert}
                                    className="group inline-flex items-center justify-center gap-2 bg-[#ff7a00] text-white px-6 py-3 rounded-full text-[14px] font-medium transition-all duration-300 hover:bg-gray-800"
                                >
                                    <PhoneCall className="w-4 h-4" strokeWidth={2} />
                                    <span>Speak To An Expert</span>
                                </button>

                                <button
                                    onClick={() => setOpenJourneyPopup(true)}
                                    className="group inline-flex items-center justify-center gap-2 border border-gray-300 text-black px-6 py-3 rounded-full text-[14px] font-medium transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                                >
                                    <span>Plan Your Journey</span>
                                    <ArrowRight
                                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                        strokeWidth={2}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Image (alt text updated for MP context) */}
                    <div className="relative min-h-[420px] lg:min-h-full">
                        <img
                            src={whyChooseUsImage}
                            alt="Authentic Madhya Pradesh travel experience – wildlife, heritage, and local culture"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </section>

            {/* JOURNEY PLANNING POPUP (kept as is) */}
            <JourneyPopup
                open={openJourneyPopup}
                onClose={() => setOpenJourneyPopup(false)}
            />
        </>
    );
}
// =============================================================
// Sawan in Ujjain & Omkareshwar — Seasonal Exclusive Campaign Data
// =============================================================

import heroAsset from "@/assets/exclusive/sawan/sawan-hero.jpg.asset.json";
import s1 from "@/assets/exclusive/sawan/sawan-1.jpg.asset.json";
import s2 from "@/assets/exclusive/sawan/sawan-2.jpg.asset.json";
import s3 from "@/assets/exclusive/sawan/sawan-3.jpg.asset.json";
import s4 from "@/assets/exclusive/sawan/sawan-4.jpg.asset.json";

// ========== VIDEO IMPORTS WITH ?url (ensures correct path) ==========
import video1 from "@/assets/shravan/video1.mp4?url";
import video2 from "@/assets/shravan/video2.mp4?url";
import video3 from "@/assets/shravan/video3.mp4?url";
import video4 from "@/assets/shravan/video4.mp4?url";
import video5 from "@/assets/shravan/video5.mp4?url";
import video6 from "@/assets/shravan/video6.mp4?url";
import video7 from "@/assets/shravan/video7.mp4?url";
import video8 from "@/assets/shravan/video8.mp4?url";
import video9 from "@/assets/shravan/video9.mp4?url";
import video10 from "@/assets/shravan/video10.mp4?url";

export interface SawanReel {
  id: string;
  title: string;
  location: string;
  image: string;
  videoUrl: string;
}

export interface SawanPackage {
  id: string;
  name: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
  cta: string;
  ctaHref: string;
}

export interface SawanWhyItem {
  icon: string;
  title: string;
  description: string;
}

export const sawanCampaign = {
  slug: "sawan-ujjain-omkareshwar",
  hero: {
    image: heroAsset.url,
    title: "Sawan in Ujjain & Omkareshwar",
    subtitle:
      "Experience the divine energy of Mahakaleshwar & Omkareshwar Jyotirlingas during the sacred month of Sawan.",
    primaryCta: { label: "Explore Packages", target: "#sawan-packages" },
    secondaryCta: { label: "Watch Reels", target: "#sawan-reels" },
  },
  intro: {
    image: s4.url,
    eyebrow: "Sacred Month • Shravan • Two Jyotirlingas",
    title: "About Sawan in Ujjain & Omkareshwar",
    paragraphs: [
      "Sawan, also known as Shravan, is considered one of the most sacred months dedicated to Lord Shiva. During this divine period, the spiritual energy across the Jyotirlingas of India becomes truly extraordinary — and among them, the sacred cities of Ujjain and Omkareshwar hold a deeply special place in the hearts of devotees.",
      "Home to the revered Mahakaleshwar Jyotirlinga and Omkareshwar Jyotirlinga, Madhya Pradesh transforms into a land of devotion, rituals, temple chants, and spiritual celebrations throughout the holy month of Sawan. From the sacred Bhasma Aarti at Mahakaleshwar and the grandeur of Mahakal Lok in Ujjain to the peaceful riverside spirituality of Omkareshwar on the banks of Maa Narmada, every moment feels spiritually immersive and deeply uplifting.",
      "Every Monday of Sawan, the divine energy reaches another level as thousands of devotees gather to witness the grand Sawari processions, evening aartis, sacred rituals, and timeless spiritual traditions that have been followed for centuries. Temple bells echo through ancient streets, devotional chants fill the air, and the monsoon rains add a magical calmness to the entire journey.",
      "Beyond darshan, Sawan in Madhya Pradesh is about experiencing devotion in its purest form — a journey of blessings, peace, faith, and spiritual connection that stays with you long after the journey ends.",
    ],
    highlights: [
      "Mahakaleshwar Jyotirlinga Darshan",
      "Omkareshwar Jyotirlinga Experience",
      "Sacred Bhasma Aarti Experience",
      "Mahakal Lok Spiritual Corridor",
      "Grand Sawan Monday Sawari Processions",
      "Ram Ghat & Shipra Aarti Experiences",
      "Harsiddhi Shaktipeeth Darshan",
      "Harsiddhi Temple Evening Aarti Ceremony",
      "Ancient Shiva Temples & Sacred Rituals",
      "Monsoon Spiritual Ambience & Devotional Energy",
    ],
  },
  reels: [
    {
      id: "reel-1",
      title: "Mahakal Sawari Procession",
      location: "Ujjain",
      image: s1.url,
      videoUrl: video1,
    },
    {
      id: "reel-2",
      title: "Sawan Street Devotion",
      location: "Ujjain Old City",
      image: s2.url,
      videoUrl: video2,
    },
    {
      id: "reel-3",
      title: "Adorned Palki of Mata",
      location: "Sawan Yatra",
      image: s3.url,
      videoUrl: video3,
    },
    {
      id: "reel-4",
      title: "Shipra Ghat Evening Aarti",
      location: "Ram Ghat, Ujjain",
      image: s4.url,
      videoUrl: video4,
    },
    {
      id: "reel-5",
      title: "Ujjain Old City Heritage",
      location: "Ujjain",
      image: heroAsset.url,
      videoUrl: video5,
    },
    {
      id: "reel-6",
      title: "Mahakal Bhasma Aarti",
      location: "Mahakaleshwar Temple",
      image: s1.url,
      videoUrl: video6,
    },
    {
      id: "reel-7",
      title: "Narmada Aarti Omkareshwar",
      location: "Omkareshwar Ghat",
      image: s2.url,
      videoUrl: video7,
    },
    {
      id: "reel-8",
      title: "Kal Bhairav Darshan",
      location: "Ujjain",
      image: s3.url,
      videoUrl: video8,
    },
    {
      id: "reel-9",
      title: "Harsiddhi Evening Aarti",
      location: "Ujjain",
      image: s4.url,
      videoUrl: video9,
    },
    {
      id: "reel-10",
      title: "Shipra Ghat Holy Dip",
      location: "Ram Ghat, Ujjain",
      image: heroAsset.url,
      videoUrl: video10,
    },
  ] satisfies SawanReel[],
  packages: [
    {
      id: "sawan-mahakal-darshan-2n",
      name: "Sawan Mahakal Darshan",
      duration: "3 Days / 2 Nights",
      price: "₹18,500",
      image: s3.url,
      highlights: [
        "VVIP Bhasma Aarti Darshan",
        "Mahakaleshwar Jyotirlinga",
        "Kal Bhairav & Harsiddhi Temple",
        "Ram Ghat Sandhya Aarti",
      ],
      cta: "View Details",
      ctaHref: "/packages",
    },
    {
      id: "sawan-sawari-special-3n",
      name: "Sawan Sawari Special",
      duration: "4 Days / 3 Nights",
      price: "₹27,900",
      image: s4.url,
      highlights: [
        "Live Monday Sawari Procession",
        "Premium Darshan Access",
        "Old City Heritage Walk",
        "Curated Sattvik Meals",
      ],
      cta: "View Details",
      ctaHref: "/packages",
    },
    {
      id: "sawan-jyotirlinga-yatra-4n",
      name: "Sawan Jyotirlinga Yatra",
      duration: "5 Days / 4 Nights",
      price: "₹42,500",
      image: s2.url,
      highlights: [
        "Ujjain + Omkareshwar Jyotirlingas",
        "Maheshwar Narmada Ghat",
        "Luxury Riverside Stay",
        "Private AC Vehicle",
      ],
      cta: "View Details",
      ctaHref: "/packages",
    },
    {
      id: "omkareshwar-narmada-yatra",
      name: "Omkareshwar Sawan Yatra",
      duration: "3 Days / 2 Nights",
      price: "₹16,500",
      image: heroAsset.url,
      highlights: [
        "Omkareshwar Jyotirlinga Darshan",
        "Narmada Aarti Experience",
        "Mamleshwar Temple Visit",
        "Serene Riverside Stay",
      ],
      cta: "View Details",
      ctaHref: "/packages",
    },
  ] satisfies SawanPackage[],
  whyBookWithUs: [
    { icon: "🛕", title: "Local Spiritual Experts", description: "Curated by Ujjain-based pandits and guides." },
    { icon: "✅", title: "Verified Guides", description: "Trained, multilingual and temple-protocol aware." },
    { icon: "🚐", title: "Comfortable Transport", description: "AC vehicles with dedicated chauffeurs." },
    { icon: "🪔", title: "Authentic Experiences", description: "VVIP darshan, Bhasma Aarti and aarti rituals." },
    { icon: "📞", title: "24/7 Support", description: "On-ground assistance throughout your yatra." },
    { icon: "🧭", title: "Custom Tours", description: "Tailor every itinerary to your devotion." },
  ] satisfies SawanWhyItem[],
  cta: {
    title: "Plan Your Spiritual Journey to Ujjain & Omkareshwar",
    subtitle: "Limited Sawan slots. Reserve your darshan, sawari & Narmada aarti experience today.",
    buttonLabel: "Book Now",
    buttonHref: "/contact",
  },
  seo: {
    title: "Sawan in Ujjain & Omkareshwar | Exclusive Spiritual Experiences with Mahakal & Narmada",
    description:
      "Experience the divine Sawan celebrations in Ujjain and Omkareshwar with special packages, spiritual tours, Mahakal darshan, Narmada aarti, reels and curated experiences.",
    canonical: "/exclusive/sawan-ujjain-omkareshwar",
    image: heroAsset.url,
  },
};

export type SawanCampaign = typeof sawanCampaign;
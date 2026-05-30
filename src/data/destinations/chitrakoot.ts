import type { DestinationContent } from "./types";

import chitrakootattraction1 from "@/assets/destimages/chitrakootattraction1.jpeg";
import chitrakootattraction2 from "@/assets/destimages/chitrakootattraction2.jpeg";
import chitrakootattraction3 from "@/assets/destimages/chitrakootattraction3.jpeg";
import chitrakootattraction4 from "@/assets/destimages/chitrakootattraction4.jpeg";

// gallery

import chitrakootgallary1 from "@/assets/destimages/chitrakootgallary1.jpeg";
import chitrakootgallary2 from "@/assets/destimages/chitrakootgallary2.jpeg";
import chitrakootgallary3 from "@/assets/destimages/chitrakootgallary3.jpeg";
import chitrakootgallary4 from "@/assets/destimages/chitrakootgallary4.jpeg";
import chitrakootgallary5 from "@/assets/destimages/chitrakootgallary5.jpeg";
import chitrakootgallary6 from "@/assets/destimages/chitrakootgallary6.jpeg";
import chitrakootgallary7 from "@/assets/destimages/chitrakootgallary7.jpeg";
import chitrakootgallary8 from "@/assets/destimages/chitrakootgallary8.jpeg";
import chitrakootgallary9 from "@/assets/destimages/chitrakootgallary9.jpeg";

const chitrakoot: DestinationContent = {
    overviewParagraphs: [
        "Chitrakoot — one of India’s most sacred pilgrimage destinations — is deeply associated with the life of Lord Rama and the Ramayana.",
        "Nestled amidst hills, forests and the Mandakini River, Chitrakoot offers a unique blend of spirituality, mythology and natural beauty.",
        "From ancient temples and sacred ghats to caves and waterfalls, Chitrakoot provides a profound spiritual and cultural experience.",
    ],

    attractions: [
        {
            title: "Ram Ghat",
            description:
                "A sacred riverside ghat on the Mandakini River known for spiritual rituals and evening aarti.",
            image: chitrakootattraction1,
        },
        {
            title: "Kamadgiri",
            description:
                "A holy hill believed to be the heart of Chitrakoot and an important pilgrimage site.",
            image: chitrakootattraction2,
        },
        {
            title: "Gupt Godavari",
            description:
                "Ancient caves with sacred water streams associated with Lord Rama and Lakshmana.",
            image: chitrakootattraction3,
        },
        {
            title: "Janaki Kund",
            description:
                "A sacred spot on the Mandakini River believed to be the place where Goddess Sita used to bathe during her stay in Chitrakoot.",
            image: chitrakootattraction4,
        },
    ],

    thingsToDo: [
        {
            title: "Temple Darshan",
            description: "Visit sacred temples and seek blessings.",
            icon: "🛕",
        },
        {
            title: "Kamadgiri Parikrama",
            description: "Walk the sacred pilgrimage route around Kamadgiri Hill.",
            icon: "🚶",
        },
        {
            title: "Ram Ghat Aarti",
            description: "Witness the spiritual evening aarti on the Mandakini River.",
            icon: "🪔",
        },
        {
            title: "Boat Ride",
            description: "Enjoy a peaceful boat ride on the Mandakini River.",
            icon: "🚤",
        },
        {
            title: "Spiritual Photography",
            description: "Capture temples, ghats and scenic landscapes.",
            icon: "📸",
        },
        {
            title: "Meditation",
            description: "Experience peace and spirituality in sacred surroundings.",
            icon: "🧘",
        },
    ],

    experiences: [
        {
            title: "Ramayana Heritage",
            description:
                "Explore places associated with Lord Rama’s exile period.",
        },
        {
            title: "Spiritual Journey",
            description:
                "Experience devotion, rituals and sacred traditions.",
        },
        {
            title: "Natural Serenity",
            description:
                "Enjoy forests, rivers and peaceful landscapes.",
        },
        {
            title: "Sacred Exploration",
            description:
                "Discover ancient temples, caves and pilgrimage routes.",
        },
    ],

    gallery: [
        chitrakootgallary1,
        chitrakootgallary2,
        chitrakootgallary3,
        chitrakootgallary4,
        chitrakootgallary5,
        chitrakootgallary6,
        chitrakootgallary7,
        chitrakootgallary8,
        chitrakootgallary9,
    ],

    travelInfo: {
        bestTime:
            "October to March — pleasant weather for pilgrimage and sightseeing",
        road:
            "Well-connected by road from Satna, Prayagraj and nearby cities.",
        rail:
            "The nearest railway station is Chitrakoot Dham Karwi Railway Station.",
        air:
            "The nearest airport is Prayagraj Airport.",
    },

    duration: "2 Days / 1 Night",
};

export default chitrakoot;

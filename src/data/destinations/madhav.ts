import type { DestinationContent } from "./types";

import madhavattraction1 from "@/assets/destimages/madhavattraction1.jpeg";
import madhavattraction2 from "@/assets/destimages/madhavattraction2.jpeg";
import madhavattraction3 from "@/assets/destimages/madhavattraction3.jpeg";
import madhavattraction4 from "@/assets/destimages/madhavattraction4.jpeg";

// gallery

import madhavgallary1 from "@/assets/destimages/madhavgallary1.jpeg";
import madhavgallary2 from "@/assets/destimages/madhavgallary2.jpeg";
import madhavgallary3 from "@/assets/destimages/madhavgallary3.jpeg";
import madhavgallary4 from "@/assets/destimages/madhavgallary4.jpeg";
import madhavgallary5 from "@/assets/destimages/madhavgallary5.jpeg";
import madhavgallary6 from "@/assets/destimages/madhavgallary6.jpeg";

const madhav: DestinationContent = {
    overviewParagraphs: [
        "Madhav National Park — a scenic wildlife destination in Madhya Pradesh — is known for its forests, lakes and rich biodiversity.",
        "Located near Shivpuri, the park offers peaceful jungle landscapes, thrilling wildlife experiences and historic charm.",
        "From jeep safaris and birdwatching to beautiful lakes and forest trails, Madhav National Park is a perfect getaway for nature lovers.",
    ],

    attractions: [
        {
            title: "Madhav National Park",
            description:
                "A beautiful wildlife reserve known for forests, grasslands and scenic natural beauty.",
            image: madhavattraction1,
        },
        {
            title: "Jeep Safari",
            description:
                "Experience thrilling safaris through wildlife-rich forest routes and open grasslands.",
            image: madhavattraction2,
        },
        {
            title: "Nilgai Spotting",
            description:
                "Spot graceful nilgai and other wildlife roaming freely across Madhav National Park’s grasslands.",
            image: madhavattraction3,
        },
        {
            title: "Bird Watching",
            description:
                "Spot colorful migratory and native bird species across the park’s lakes and forests.",
            image: madhavattraction4,
        },
    ],

    thingsToDo: [
        {
            title: "Jungle Safari",
            description: "Explore wildlife-rich forests and scenic safari routes.",
            icon: "🛻",
        },
        {
            title: "Bird Watching",
            description: "Observe colorful migratory and native birds.",
            icon: "🦜",
        },
        {
            title: "Nature Photography",
            description: "Capture breathtaking wildlife and lake landscapes.",
            icon: "📸",
        },
        {
            title: "Lake Exploration",
            description: "Enjoy peaceful views around Sakhya Sagar Lake.",
            icon: "🌊",
        },
        {
            title: "Forest Walks",
            description: "Experience peaceful nature trails and greenery.",
            icon: "🌿",
        },
        {
            title: "Wildlife Observation",
            description: "Spot deer, nilgai and various forest animals.",
            icon: "🦌",
        },
    ],

    experiences: [
        {
            title: "Wildlife Adventure",
            description:
                "Experience thrilling safaris in a peaceful forest environment.",
        },
        {
            title: "Natural Beauty",
            description:
                "Enjoy scenic lakes, forests and lush greenery.",
        },
        {
            title: "Birdwatching Paradise",
            description:
                "Discover diverse bird species near lakes and wetlands.",
        },
        {
            title: "Photography Escape",
            description:
                "Capture stunning wildlife and landscape moments.",
        },
    ],

    gallery: [
        madhavgallary1,
        madhavgallary2,
        madhavgallary3,
        madhavgallary4,
        madhavgallary5,
        madhavgallary6,
    ],

    travelInfo: {
        bestTime:
            "October to March — ideal season for wildlife exploration and birdwatching",
        road:
            "Well-connected by road from Gwalior, Jhansi and nearby cities.",
        rail:
            "The nearest railway station is Shivpuri Railway Station.",
        air:
            "The nearest airport is Gwalior Airport.",
    },

    duration: "2 Days / 1 Night",
};

export default madhav;
import type { DestinationContent } from "./types";

import kunoattraction1 from "@/assets/destimages/kunoattraction1.jpeg";
import kunoattraction2 from "@/assets/destimages/kunoattraction2.jpeg";
import kunoattraction3 from "@/assets/destimages/kunoattraction3.jpeg";
import kunoattraction4 from "@/assets/destimages/kunoattraction4.jpeg";

// gallery

import kunogallary1 from "@/assets/destimages/kunogallary1.jpeg";
import kunogallary2 from "@/assets/destimages/kunogallary2.jpeg";
import kunogallary3 from "@/assets/destimages/kunogallary3.jpeg";
import kunogallary4 from "@/assets/destimages/kunogallary4.jpeg";
import kunogallary5 from "@/assets/destimages/kunogallary5.jpeg";
import kunogallary6 from "@/assets/destimages/kunogallary6.jpeg";


const kuno: DestinationContent = {
    overviewParagraphs: [
        "Kuno National Park — one of India’s most exciting wildlife destinations — is famous for its cheetah reintroduction project, rich biodiversity and scenic forest landscapes.",
        "Located in Madhya Pradesh, Kuno offers thrilling jungle safaris, rare wildlife sightings and untouched wilderness experiences.",
        "From spotting cheetahs and leopards to exploring scenic forest trails, Kuno provides a unique and unforgettable wildlife adventure.",
    ],

    attractions: [
        {
            title: "Kuno National Park",
            description:
                "A renowned wildlife reserve known for its cheetah conservation project and rich biodiversity.",
            image: kunoattraction1,
        },
        {
            title: "Cheetah Safari",
            description:
                "Experience thrilling safaris with opportunities to spot the majestic cheetahs in the wild.",
            image: kunoattraction2,
        },
        {
            title: "Bird Watching",
            description:
                "Explore Kuno’s rich birdlife and spot colorful migratory and native bird species in the forest.",
            image: kunoattraction3,
        },
        {
            title: "Jungle Safari",
            description:
                "Explore scenic forest routes filled with wildlife, birds and natural beauty.",
            image: kunoattraction4,
        },
    ],

    thingsToDo: [
        {
            title: "Cheetah Safari",
            description: "Enjoy thrilling wildlife safaris to spot cheetahs and rare species.",
            icon: "🐆",
        },
        {
            title: "Wildlife Photography",
            description: "Capture breathtaking moments of wildlife and forest landscapes.",
            icon: "📸",
        },
        {
            title: "Bird Watching",
            description: "Observe colorful birds and diverse wildlife species.",
            icon: "🦜",
        },
        {
            title: "Nature Exploration",
            description: "Experience peaceful forest trails and untouched wilderness.",
            icon: "🌿",
        },
        {
            title: "Jeep Safari",
            description: "Explore dense forests and scenic wildlife zones.",
            icon: "🛻",
        },
        {
            title: "Wildlife Observation",
            description: "Spot leopards, deer and other forest animals.",
            icon: "🦌",
        },
    ],

    experiences: [
        {
            title: "Cheetah Experience",
            description:
                "Witness India’s historic cheetah conservation success in the wild.",
        },
        {
            title: "Wildlife Adventure",
            description:
                "Feel the excitement of exploring untouched forests and wildlife zones.",
        },
        {
            title: "Natural Beauty",
            description:
                "Enjoy scenic landscapes, forests and peaceful surroundings.",
        },
        {
            title: "Photography Paradise",
            description:
                "Capture unforgettable wildlife and jungle moments.",
        },
    ],

    gallery: [
        kunogallary1,
        kunogallary2,
        kunogallary3,
        kunogallary4,
        kunogallary5,
        kunogallary6,
    ],

    travelInfo: {
        bestTime:
            "October to June — ideal season for wildlife safaris and cheetah sightings",
        road:
            "Well-connected by road from Gwalior, Shivpuri and nearby cities.",
        rail:
            "The nearest railway station is Shivpuri Railway Station.",
        air:
            "The nearest airport is Gwalior Airport.",
    },

    duration: "2 Days / 1 Night",
};

export default kuno;
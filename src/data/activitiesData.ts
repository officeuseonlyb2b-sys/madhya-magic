import actSafari from "@/assets/act-safari.jpg";
import actBalloon from "@/assets/act-balloon.jpg";
import actBoat from "@/assets/act-boat.jpg";
import actCamping from "@/assets/act-camping.jpg";
import actRafting from "@/assets/act-rafting.jpg";
import actHeritageWalk from "@/assets/act-heritage-walk.jpg";
import actJungleWalk from "@/assets/act-jungle-walk.jpg";
import actTrekking from "@/assets/act-trekking.jpg";

export type ActivityCategory = "All" | "Wildlife" | "Adventure" | "Nature" | "Heritage";

export interface ActivityData {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  locations: string[];
  highlights: string[];
  category: ActivityCategory;
  bestTime: string;
  duration: string;
  difficulty: string;
}

export const activitiesData: ActivityData[] = [
  {
    id: "jungle-jeep-safari",
    name: "Jungle Jeep Safari",
    shortDescription: "Thrilling wildlife encounters across India's most famous national parks in the Tiger Capital.",
    description: "Jungle Jeep Safari in Madhya Pradesh offers thrilling wildlife encounters across India's most famous national parks. Known as the Tiger Capital of India, Madhya Pradesh offers one of the best wildlife experiences in the country. Traverse through dense sal forests, bamboo groves, and open grasslands in specially designed open-top jeeps with expert naturalists who know every trail and every call of the wild.",
    image: actSafari,
    locations: ["Kanha National Park", "Bandhavgarh National Park", "Pench National Park", "Satpura National Park", "Panna National Park", "Sanjay-Dubri National Park", "Kuno National Park"],
    highlights: ["Tiger spotting", "Leopard sightings", "Bird watching", "Professional naturalists", "Morning & evening safari"],
    category: "Wildlife",
    bestTime: "October to June",
    duration: "3-4 hours per safari",
    difficulty: "Easy",
  },
  {
    id: "hot-air-balloon",
    name: "Hot Air Balloon Safari",
    shortDescription: "Float above lush forests and wildlife landscapes with breathtaking panoramic aerial views.",
    description: "Float above lush forests and wildlife landscapes with a breathtaking hot air balloon safari. Enjoy panoramic aerial views and unique photography opportunities. Rise gently into the sky as the sun paints the horizon in golden hues, offering a once-in-a-lifetime perspective of India's most pristine wildlife reserves from above.",
    image: actBalloon,
    locations: ["Bandhavgarh", "Satpura"],
    highlights: ["Sunrise flights", "Aerial wildlife viewing", "Luxury experience", "Photography friendly"],
    category: "Adventure",
    bestTime: "November to March",
    duration: "1-2 hours",
    difficulty: "Easy",
  },
  {
    id: "boat-safari",
    name: "Jungle Motor Boat Safari",
    shortDescription: "Explore serene waters of Tawa Reservoir spotting crocodiles, birds and riverbank wildlife.",
    description: "Explore the serene waters of Tawa Reservoir and Denwa River. Spot crocodiles, birds and wildlife along river banks. Glide silently through misty morning waters as the jungle comes alive around you — a unique vantage point that few travelers ever experience.",
    image: actBoat,
    locations: ["Tawa to Madhai", "Satpura National Park"],
    highlights: ["Boat safari", "Scenic landscapes", "Bird watching", "1-2 hour experience"],
    category: "Wildlife",
    bestTime: "October to May",
    duration: "1-2 hours",
    difficulty: "Easy",
  },
  {
    id: "camping",
    name: "Jungle & Riverside Camping",
    shortDescription: "Stay in luxury camps surrounded by forests, rivers and waterfalls with bonfire nights.",
    description: "Stay in luxury camps surrounded by forests, rivers and waterfalls. Enjoy bonfire nights and stargazing in the heart of nature. Our curated glamping experiences combine the thrill of the wild with premium comfort — think plush bedding under canvas, gourmet campfire meals, and the symphony of the jungle as your lullaby.",
    image: actCamping,
    locations: ["Satpura", "Pachmarhi"],
    highlights: ["Jungle camping", "Bonfire nights", "Night walks", "Luxury tents"],
    category: "Nature",
    bestTime: "October to March",
    duration: "1-3 nights",
    difficulty: "Easy",
  },
  {
    id: "rafting",
    name: "River Rafting",
    shortDescription: "Thrilling river rafting in Betwa river with stunning heritage palace views.",
    description: "Enjoy thrilling river rafting in Betwa river with heritage palace views. Navigate through exciting rapids while ancient cenotaphs and palaces rise majestically on the riverbanks — where adventure meets history in the most spectacular way.",
    image: actRafting,
    locations: ["Orchha"],
    highlights: ["Adventure rafting", "Heritage sightseeing", "Beginner friendly", "Guided experience"],
    category: "Adventure",
    bestTime: "July to September",
    duration: "1-2 hours",
    difficulty: "Moderate",
  },
  {
    id: "walking-tour",
    name: "Heritage City Walking Tours",
    shortDescription: "Walk through historic streets, explore local markets and taste authentic cuisines.",
    description: "Walk through historic streets, explore local markets and taste authentic cuisines. Our expert local guides bring centuries of history alive as you wander through ancient bazaars, taste legendary street food, and discover hidden architectural gems that most tourists never see.",
    image: actHeritageWalk,
    locations: ["Gwalior", "Bhopal"],
    highlights: ["Cultural experience", "Street food", "Local markets", "Historic monuments"],
    category: "Heritage",
    bestTime: "October to March",
    duration: "2-4 hours",
    difficulty: "Easy",
  },
  {
    id: "jungle-walk",
    name: "Jungle Walking Tours",
    shortDescription: "Walk inside forests with expert naturalists and explore wildlife up close.",
    description: "Walk inside forests with expert naturalists and explore wildlife closely. Feel the crunch of leaves beneath your feet, hear the distant call of a barking deer, and experience the raw, unfiltered beauty of the Indian jungle on foot — the most intimate way to connect with nature.",
    image: actJungleWalk,
    locations: ["Kanha", "Bandhavgarh"],
    highlights: ["Nature trails", "Bird watching", "Wildlife spotting", "Photography"],
    category: "Nature",
    bestTime: "October to June",
    duration: "2-3 hours",
    difficulty: "Moderate",
  },
  {
    id: "trekking",
    name: "Trekking",
    shortDescription: "Trek scenic routes through Pachmarhi hills with waterfalls and panoramic viewpoints.",
    description: "Trek through the stunning landscapes of Pachmarhi — the Queen of Satpura. From cascading waterfalls to ancient cave paintings, every trail tells a story. Whether you're ascending to Dhoopgarh for a spectacular sunset or navigating the mystical Jata Shankar caves, each step reveals a new wonder.",
    image: actTrekking,
    locations: ["Pachmarhi"],
    highlights: ["Waterfall trekking", "Scenic viewpoints", "Wildlife spotting", "Beginner friendly"],
    category: "Adventure",
    bestTime: "October to March",
    duration: "Half day to full day",
    difficulty: "Moderate",
  },
];

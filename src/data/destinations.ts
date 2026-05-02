import ujjainImg from "@/assets/dest-ujjain.jpg";
import pachmarhiImg from "@/assets/dest-pachmarhi.jpg";
import khajurahoImg from "@/assets/dest-khajuraho.jpg";
import kanhaImg from "@/assets/dest-kanha.jpg";
import bandhavgarhImg from "@/assets/dest-bandhavgarh.jpg";
import orchhaImg from "@/assets/dest-orchha.jpg";
import bhopalImg from "@/assets/dest-bhopal.jpg";
import jabalpurImg from "@/assets/dest-jabalpur.jpg";

export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  startingPrice: number;
  category: string[];
  bestTime: string;
  overview: string;
  attractions: string[];
  related: string[];
}

export const destinations: Destination[] = [
  {
    id: "ujjain",
    name: "Ujjain",
    image: ujjainImg,
    description: "The ancient city of temples and the sacred Kumbh Mela destination.",
    startingPrice: 4999,
    category: ["Spiritual", "Heritage"],
    bestTime: "October – March",
    overview: "Ujjain, one of the seven sacred cities of Hinduism, sits on the banks of the Shipra River. Home to the legendary Mahakaleshwar Jyotirlinga, this city breathes spirituality and ancient wisdom. The Kumbh Mela, held every 12 years, draws millions of devotees.",
    attractions: ["Mahakaleshwar Temple", "Ram Ghat", "Kal Bhairav Temple", "Vedh Shala Observatory", "Harsiddhi Temple"],
    related: ["orchha", "bhopal", "khajuraho"],
  },
  {
    id: "pachmarhi",
    name: "Pachmarhi",
    image: pachmarhiImg,
    description: "Queen of Satpura — hill station with waterfalls and lush green valleys.",
    startingPrice: 5999,
    category: ["Nature", "Adventure"],
    bestTime: "September – June",
    overview: "Nestled in the Satpura Range, Pachmarhi is Madhya Pradesh's only hill station. Known as 'Satpura ki Rani', it enchants visitors with its waterfalls, caves, and panoramic viewpoints set amid dense sal and teak forests.",
    attractions: ["Bee Falls", "Dhoopgarh", "Pandava Caves", "Jata Shankar", "Handi Khoh"],
    related: ["bhopal", "jabalpur", "kanha"],
  },
  {
    id: "khajuraho",
    name: "Khajuraho",
    image: khajurahoImg,
    description: "UNESCO World Heritage temples with exquisite medieval sculptures.",
    startingPrice: 6499,
    category: ["Heritage", "Spiritual"],
    bestTime: "October – March",
    overview: "Khajuraho's stunning group of Hindu and Jain temples, built between 950–1050 AD by the Chandela dynasty, are a UNESCO World Heritage Site. The temples are famous for their intricate erotic sculptures and architectural brilliance.",
    attractions: ["Western Group of Temples", "Eastern Group", "Kandariya Mahadeva Temple", "Light & Sound Show", "Raneh Falls"],
    related: ["orchha", "ujjain", "bandhavgarh"],
  },
  {
    id: "kanha",
    name: "Kanha",
    image: kanhaImg,
    description: "India's finest tiger reserve — the inspiration for Rudyard Kipling's Jungle Book.",
    startingPrice: 7999,
    category: ["Wildlife", "Nature"],
    bestTime: "October – June",
    overview: "Kanha National Park is one of India's largest and most well-maintained wildlife reserves. The lush sal and bamboo forests are home to the Royal Bengal Tiger, the rare Barasingha, and over 300 species of birds.",
    attractions: ["Tiger Safari", "Bamni Dadar (Sunset Point)", "Kanha Museum", "Barasingha Habitat", "Nature Trails"],
    related: ["bandhavgarh", "pachmarhi", "jabalpur"],
  },
  {
    id: "bandhavgarh",
    name: "Bandhavgarh",
    image: bandhavgarhImg,
    description: "Highest density of Royal Bengal Tigers in India with an ancient fort.",
    startingPrice: 7499,
    category: ["Wildlife", "Heritage"],
    bestTime: "October – June",
    overview: "Bandhavgarh National Park boasts the highest density of Bengal Tigers in the world. The ancient Bandhavgarh Fort, perched atop the hills, adds a historical dimension to this wildlife paradise.",
    attractions: ["Tiger Safari", "Bandhavgarh Fort", "Shesh Shaiya", "Tala Zone", "Bird Watching"],
    related: ["kanha", "jabalpur", "khajuraho"],
  },
  {
    id: "orchha",
    name: "Orchha",
    image: orchhaImg,
    description: "Medieval Bundela kingdom with grand palaces along the Betwa river.",
    startingPrice: 4499,
    category: ["Heritage", "Spiritual"],
    bestTime: "October – March",
    overview: "Founded in 1531 by Bundela Rajput chief Rudra Pratap Singh, Orchha is a town frozen in time. Its magnificent fort complex, temples, and cenotaphs along the Betwa River tell stories of a glorious medieval past.",
    attractions: ["Orchha Fort Complex", "Raja Mahal", "Jahangir Mahal", "Ram Raja Temple", "Chaturbhuj Temple"],
    related: ["khajuraho", "ujjain", "bhopal"],
  },
  {
    id: "bhopal",
    name: "Bhopal",
    image: bhopalImg,
    description: "City of Lakes — a blend of old-world charm and modern vibrancy.",
    startingPrice: 3999,
    category: ["Heritage", "Nature"],
    bestTime: "October – March",
    overview: "Bhopal, the capital of Madhya Pradesh, is a city of contrasts. The serene Upper and Lower Lakes exist alongside bustling bazaars, grand mosques, and world-class museums. It's the perfect gateway to explore central India.",
    attractions: ["Upper Lake", "Bharat Bhavan", "Tribal Museum", "Taj-ul-Masjid", "Van Vihar National Park"],
    related: ["pachmarhi", "ujjain", "orchha"],
  },
  {
    id: "jabalpur",
    name: "Jabalpur",
    image: jabalpurImg,
    description: "Marble Rocks and thundering Dhuandhar Falls on the Narmada river.",
    startingPrice: 4499,
    category: ["Nature", "Adventure"],
    bestTime: "October – March",
    overview: "Jabalpur is the gateway to Madhya Pradesh's famous national parks and home to the spectacular Marble Rocks at Bhedaghat. The Narmada river carves through towering marble cliffs, creating one of India's most dramatic landscapes.",
    attractions: ["Marble Rocks Bhedaghat", "Dhuandhar Falls", "Balancing Rock", "Madan Mahal Fort", "Chausath Yogini Temple"],
    related: ["kanha", "bandhavgarh", "pachmarhi"],
  },
];

export const experiences = [
  { id: "wildlife", name: "Wildlife", icon: "🐯", description: "Spot tigers, leopards & exotic birds in pristine reserves" },
  { id: "spiritual", name: "Spiritual", icon: "🙏", description: "Ancient temples, sacred rivers & divine energy" },
  { id: "heritage", name: "Heritage", icon: "🏛️", description: "UNESCO sites, forts & medieval architecture" },
  { id: "adventure", name: "Adventure", icon: "🏔️", description: "Trekking, rafting & outdoor thrills" },
  { id: "nature", name: "Nature", icon: "🌿", description: "Waterfalls, hills & serene landscapes" },
];

export interface TravelPackage {
  id: string;
  name: string;
  destination: string;
  duration: string;
  price: number;
  originalPrice: number;
  image: string;
  highlights: string[];
  itinerary: { day: number; title: string; description: string }[];
  included: string[];
  excluded: string[];
}

export const packages: TravelPackage[] = [
  {
    id: "ujjain-2day",
    name: "2 Day Ujjain Spiritual Journey",
    destination: "ujjain",
    duration: "2 Days / 1 Night",
    price: 4999,
    originalPrice: 7499,
    image: ujjainImg,
    highlights: ["Mahakaleshwar Darshan", "Ram Ghat Aarti", "Temple Tour", "Local Cuisine"],
    itinerary: [
      { day: 1, title: "Arrival & Temple Tour", description: "Arrive in Ujjain, visit Mahakaleshwar Temple, evening aarti at Ram Ghat." },
      { day: 2, title: "Heritage Walk & Departure", description: "Visit Kal Bhairav Temple, Vedh Shala, and explore local markets before departure." },
    ],
    included: ["Hotel Stay", "Breakfast", "Temple Guide", "Local Transport"],
    excluded: ["Flights", "Lunch & Dinner", "Personal Expenses"],
  },
  {
    id: "pachmarhi-weekend",
    name: "Pachmarhi Weekend Getaway",
    destination: "pachmarhi",
    duration: "3 Days / 2 Nights",
    price: 7999,
    originalPrice: 11999,
    image: pachmarhiImg,
    highlights: ["Bee Falls Trek", "Dhoopgarh Sunset", "Cave Exploration", "Nature Walk"],
    itinerary: [
      { day: 1, title: "Arrival & Exploration", description: "Check in at resort, visit Pandava Caves and Jata Shankar." },
      { day: 2, title: "Falls & Viewpoints", description: "Trek to Bee Falls, visit Dhoopgarh for sunset, explore Handi Khoh." },
      { day: 3, title: "Nature Walk & Departure", description: "Morning nature walk, visit Priyadarshini Point, departure." },
    ],
    included: ["Resort Stay", "All Meals", "Sightseeing", "Transport"],
    excluded: ["Flights", "Adventure Activities", "Tips"],
  },
  {
    id: "kanha-safari",
    name: "Kanha Safari Package",
    destination: "kanha",
    duration: "3 Days / 2 Nights",
    price: 12999,
    originalPrice: 17999,
    image: kanhaImg,
    highlights: ["2 Jungle Safaris", "Tiger Spotting", "Bamni Dadar Sunset", "Naturalist Guide"],
    itinerary: [
      { day: 1, title: "Arrival & Evening Safari", description: "Arrive at Kanha, afternoon jungle safari with naturalist guide." },
      { day: 2, title: "Full Day Safari", description: "Morning and evening safaris, visit Bamni Dadar for sunset." },
      { day: 3, title: "Morning Safari & Departure", description: "Final morning safari, visit Kanha Museum, departure." },
    ],
    included: ["Jungle Lodge", "All Meals", "Safari Jeep", "Naturalist Guide", "Park Entry"],
    excluded: ["Flights", "Camera Charges", "Tips"],
  },
  {
    id: "khajuraho-heritage",
    name: "Khajuraho Heritage Tour",
    destination: "khajuraho",
    duration: "2 Days / 1 Night",
    price: 5999,
    originalPrice: 8999,
    image: khajurahoImg,
    highlights: ["Temple Complex Tour", "Light & Sound Show", "Raneh Falls", "Expert Guide"],
    itinerary: [
      { day: 1, title: "Temple Discovery", description: "Visit Western & Eastern temple groups, evening Light & Sound Show." },
      { day: 2, title: "Excursion & Departure", description: "Day trip to Raneh Falls and Panna National Park, departure." },
    ],
    included: ["Hotel Stay", "Breakfast", "Temple Guide", "Entry Tickets"],
    excluded: ["Flights", "Lunch & Dinner", "Personal Expenses"],
  },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "The Kanha Safari package was absolutely magical. Spotted two tigers and the naturalist guide was incredibly knowledgeable. A trip of a lifetime!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    text: "Ujjain's spiritual energy is unmatched. The organized temple tour made our family trip smooth and memorable. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    location: "Bangalore",
    text: "Pachmarhi surprised us with its beauty. The waterfalls, the misty mornings, and the cozy resort — pure bliss. Will visit again!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    text: "Khajuraho's temples left us speechless. The craftsmanship from a thousand years ago is beyond imagination. Must-visit heritage site.",
    rating: 4,
  },
];

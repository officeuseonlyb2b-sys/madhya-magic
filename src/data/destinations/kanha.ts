import type { DestinationContent } from "./types";

const tiger = "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80";
const safari = "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80";
const barasingha = "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=1200&q=80";
const sunset = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80";
const forest = "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80";
const birds = "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=80";

const kanha: DestinationContent = {
  overviewParagraphs: [
    "Kanha National Park — sprawling across 940 sq km of central India — is one of Asia's finest tiger reserves and the green inspiration behind Rudyard Kipling's Jungle Book.",
    "Vast meadows, sal and bamboo forests and shaded ravines shelter the Royal Bengal Tiger, the rare hard-ground Barasingha (saved from extinction here), leopards, sloth bears and more than 300 bird species.",
    "Two safaris a day — morning and afternoon — across the Kisli, Mukki and Sarhi zones offer some of the most reliable tiger sightings in India, with the dramatic Bamni Dadar sunset capping the day.",
  ],
  attractions: [
    { title: "Tiger Safari", description: "Open-jeep safaris across multiple zones offer India's best chance to spot the Royal Bengal Tiger in the wild.", image: tiger },
    { title: "Bamni Dadar Sunset Point", description: "Watch sambar and barasingha graze in golden light as the Kanha sun dips behind the sal forest.", image: sunset },
    { title: "Barasingha Habitat", description: "Witness the hard-ground swamp deer — once nearly extinct, now thriving thanks to Kanha's conservation programme.", image: barasingha },
    { title: "Kanha Museum & Interpretation Centre", description: "Tribal exhibits, wildlife dioramas and conservation history right inside the reserve.", image: forest },
  ],
  thingsToDo: [
    { title: "Morning Jungle Safari", description: "Dawn drives offer the best tiger sightings.", icon: "🐯" },
    { title: "Afternoon Safari", description: "Spot leopards, sloth bears and gaur.", icon: "🚙" },
    { title: "Bird Watching", description: "Over 300 species of resident & migratory birds.", icon: "🦜" },
    { title: "Tribal Village Visit", description: "Experience Baiga and Gond communities.", icon: "🏘️" },
    { title: "Nature Walk", description: "Guided buffer-zone walks with a naturalist.", icon: "🌿" },
    { title: "Sunset at Bamni Dadar", description: "Kanha's iconic golden-hour viewpoint.", icon: "🌅" },
  ],
  experiences: [
    { title: "First Tiger Sighting", description: "Heart-stopping silence as a tiger emerges from tall grass — Kanha delivers this more often than almost anywhere else." },
    { title: "Barasingha Comeback", description: "Watch a species saved from the brink of extinction graze freely across the Sondar meadows." },
    { title: "Jungle Lodge Evenings", description: "Bonfires, naturalist talks and the calls of the night jungle." },
    { title: "Baiga Tribal Culture", description: "Folk songs, dances and stories from the forest-dwelling Baiga community." },
  ],
  gallery: [tiger, safari, barasingha, forest, birds, sunset],
  travelInfo: {
    bestTime: "October to June — April–May for the best tiger sightings",
    road: "Well-connected by road from Jabalpur (165 km), Nagpur (270 km) and Raipur (250 km).",
    rail: "Jabalpur and Gondia are the nearest railway stations.",
    air: "Jabalpur Dumna Airport (~165 km) is the closest, with onward taxi to Kisli or Mukki gate.",
  },
  duration: "3 Days / 2 Nights",
};

export default kanha;

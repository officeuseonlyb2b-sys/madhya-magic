import expBhasmAarti from "@/assets/exp-bhasm-aarti.jpg";
import expAbhishekam from "@/assets/exp-abhishekam.jpg";
import expHarsiddhi from "@/assets/exp-harsiddhi.jpg";
import expMeditation from "@/assets/exp-meditation.jpg";
import expJungleSafari from "@/assets/exp-jungle-safari.jpg";
import expWildlifePhoto from "@/assets/exp-wildlife-photo.jpg";
import expYoga from "@/assets/exp-yoga.jpg";
import expTempleRitual from "@/assets/exp-temple-ritual.jpg";

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  /** Optional longer-form description shown in the details modal */
  fullDescription?: string;
  image: string;
  /** Optional video for the home reels slider (autoplay, muted) */
  video?: string;
  category: string;
  icon: string;
  /** Bullet highlights shown in the details modal */
  highlights?: string[];
  /** Best time / season to visit */
  bestTime?: string;
  /** Typical duration / timing */
  duration?: string;
}

export const experiencesData: Experience[] = [
  {
    id: "bhasm-aarti",
    title: "Bhasm Aarti",
    subtitle: "Mahakaleshwar Temple, Ujjain",
    description:
      "Witness one of India's most mystical rituals — the sacred Bhasm Aarti at Mahakaleshwar Jyotirlinga in Ujjain. Performed before sunrise, this ancient ritual symbolizes the cycle of life and death, where sacred ash is offered to Lord Shiva. The divine chants, temple bells, and spiritual aura create an unforgettable once-in-a-lifetime experience.",
    fullDescription:
      "The Bhasm Aarti at Mahakaleshwar Jyotirlinga is one of the most powerful and rare spiritual rituals in the world, performed only at this temple in Ujjain. Beginning at 4:00 AM, priests offer sacred ash (bhasm) to the Shiva Lingam to the rhythm of Vedic chants, conch shells, drums, and temple bells. The atmosphere is electric — devotees sit in silence as the sanctum glows in lamp light, and the energy of millions of years of devotion seems to converge in a single moment. Booking a Bhasm Aarti darshan slot in advance is mandatory, and proper traditional attire is required. This is not a tourist activity — it is a deep, transformative spiritual encounter that pilgrims travel thousands of kilometers to witness even once in their lifetime.",
    image: expBhasmAarti,
    video: "/videos/experiences/bhasm-aarti.mp4",
    category: "Spiritual",
    icon: "🔥",
    highlights: [
      "Pre-dawn entry to the sanctum of Mahakaleshwar Jyotirlinga",
      "Witness sacred ash offering to Lord Shiva",
      "Vedic chants, conch shells & temple bells",
      "Pre-booked priority darshan pass arranged",
      "Traditional dress code guidance provided",
    ],
    bestTime: "October to March (cooler dawns, peak Shravan in Jul–Aug)",
    duration: "Ritual ~2 hours · Reach temple by 3:00 AM",
  },
  {
    id: "abhishekam",
    title: "Abhishekam Ceremony",
    subtitle: "Mahakaleshwar Temple, Ujjain",
    description:
      "Experience the sacred Abhishekam ritual where holy water, milk, honey, and flowers are offered to Lord Shiva. Feel the spiritual vibrations as priests perform Vedic chants and traditional rituals inside the sanctum. This experience connects visitors to ancient Indian traditions and divine energy.",
    fullDescription:
      "The Abhishekam is a deeply personal Vedic ritual where you participate alongside the temple priest in bathing the Shiva Lingam with panchamrit — a sacred mixture of milk, curd, honey, ghee, and sugar — followed by holy Ganga water and bilva leaves. Each offering is accompanied by the chanting of the Mahamrityunjaya Mantra and Rudram. Devotees can sponsor the ritual in their family's name for blessings of health, prosperity, and protection. Conducted in the inner sanctum of Mahakaleshwar, this is a serene, meditative counterpart to the more intense Bhasm Aarti and is open through the day at scheduled slots.",
    image: expAbhishekam,
    video: "/videos/experiences/mandu.mp4",
    category: "Spiritual",
    icon: "🙏",
    highlights: [
      "Personal participation in panchamrit abhishek",
      "Chanting of Mahamrityunjaya Mantra & Rudram",
      "Sankalp taken in your family's name",
      "Prasad and rudraksha blessing included",
    ],
    bestTime: "Mondays & Shravan month are most auspicious",
    duration: "Approx. 45–60 minutes",
  },
  {
    id: "harsiddhi-aarti",
    title: "Harsiddhi Temple Aarti",
    subtitle: "Harsiddhi Temple, Ujjain",
    description:
      "Witness the mesmerizing evening Aarti at Harsiddhi Temple, where hundreds of lamps illuminate the iconic Deep Stambh towers. The glowing flames create a magical atmosphere filled with devotion and tradition. A spiritual experience that reflects the rich cultural heritage of Madhya Pradesh.",
    fullDescription:
      "Harsiddhi Temple, one of the 51 Shakti Peethas, comes alive at dusk when its two towering Deep Stambh (lamp pillars) — each holding 1,011 oil lamps — are lit one by one by temple attendants who climb the structures barefoot. As the flames rise into the night sky, the courtyard fills with conch sounds, drum beats, and the collective chants of devotees. Built originally by King Vikramaditya and later restored by the Marathas, this temple is steeped in legend and is considered the kuldevi (family deity) of the Vikramaditya dynasty. The Navratri evenings here are especially spectacular.",
    image: expHarsiddhi,
    video: "/videos/experiences/pachmarhi.mp4",
    category: "Spiritual",
    icon: "🪔",
    highlights: [
      "Lighting of two 1,011-lamp Deep Stambh towers",
      "Shakti Peetha darshan & history walk",
      "Best photographed at golden hour",
      "Special Navratri evening arrangements",
    ],
    bestTime: "Year-round at sunset · Spectacular during Navratri",
    duration: "Approx. 1 hour (arrive 30 mins early)",
  },
  {
    id: "meditation-retreat",
    title: "Meditation & Spiritual Retreat",
    subtitle: "Ancient Caves & Heritage Sites",
    description:
      "Find inner peace at ancient caves, temples, and heritage locations across Madhya Pradesh. From Bhimbetka rock shelters to serene temples, meditation experiences offer calmness and mindfulness surrounded by history and nature.",
    fullDescription:
      "Step away from the noise of modern life and journey into the silent corners of Madhya Pradesh — Bhimbetka's prehistoric caves, the riverside ghats of Maheshwar, the forest temples of Pachmarhi, and the secluded ashrams around Ujjain. Guided meditation sessions are led by local teachers and combine pranayama, mantra, and silent sitting in spaces that have held contemplative practice for millennia. Retreats can be designed as half-day immersions or multi-day journeys, with simple sattvic meals and stays in heritage properties or eco-lodges.",
    image: expMeditation,
    video: "/videos/experiences/canoeing.mp4",
    category: "Wellness",
    icon: "🧘",
    highlights: [
      "Guided meditation at heritage & natural sites",
      "Pranayama and mantra sessions",
      "Sattvic meals included",
      "Half-day to multi-day formats available",
    ],
    bestTime: "October to March",
    duration: "Half-day · 2-day · 5-day formats",
  },
  {
    id: "jungle-safari",
    title: "Jungle Safari Experience",
    subtitle: "Tiger Reserves of Madhya Pradesh",
    description:
      "Explore India's Tiger Capital through thrilling jungle safaris. Ride through dense forests, spot majestic tigers, leopards, and exotic wildlife. A once-in-a-lifetime wildlife adventure for nature lovers and photographers.",
    fullDescription:
      "Madhya Pradesh is rightly called the Tiger State of India, home to Kanha, Bandhavgarh, Pench, and Satpura — some of the densest tiger habitats on the planet. Open 4x4 jeep safaris are conducted in the cool early morning and golden evening hours, accompanied by trained naturalists and forest department guides. Beyond the tigers, expect to see leopards, sloth bears, Indian gaur, dholes, hundreds of bird species, and the rare barasingha (only found in Kanha). Permits are limited and zones are pre-allocated, so booking in advance is essential.",
    image: expJungleSafari,
    video: "/videos/experiences/jungle-safari.mp4",
    category: "Wildlife",
    icon: "🐯",
    highlights: [
      "Open 4x4 jeep safari with naturalist",
      "Core & buffer zone permits arranged",
      "Tiger, leopard, gaur & barasingha sightings",
      "Morning and evening safari slots",
    ],
    bestTime: "October to June (peak: April–May for sightings)",
    duration: "3–4 hours per safari · Multi-day recommended",
  },
  {
    id: "wildlife-photography",
    title: "Wildlife Photography",
    subtitle: "National Parks & Sanctuaries",
    description:
      "Capture breathtaking wildlife moments in natural habitats. Perfect for photographers and nature enthusiasts. Witness rare wildlife and scenic landscapes in India's most beautiful forests.",
    fullDescription:
      "Designed for serious and aspiring photographers, this experience pairs you with naturalist-photographers who know exactly where the light, the animals, and the angles converge. Dedicated photography vehicles with bean-bag rests, extended safari hours where permitted, and small-group sizes ensure you get the shot. Workshops cover wildlife composition, behavior anticipation, low-light technique, and post-processing. Suitable for DSLR, mirrorless, and even committed mobile shooters.",
    image: expWildlifePhoto,
    video: "/videos/experiences/hot-air.mp4",
    category: "Wildlife",
    icon: "📸",
    highlights: [
      "Dedicated photography vehicle & bean bags",
      "Mentor-naturalist on every safari",
      "Composition & post-processing workshops",
      "Small group sizes (max 4 per jeep)",
    ],
    bestTime: "March to May (best big-cat activity)",
    duration: "3 to 6 day photo tours",
  },
  {
    id: "yoga-heritage",
    title: "Yoga at Heritage Sites",
    subtitle: "Historic Palaces & Temples",
    description:
      "Practice yoga at historic palaces, temples, and heritage monuments. A unique blend of wellness, culture, and spirituality in the heart of India.",
    fullDescription:
      "Imagine your sun salutations on the ramparts of Orchha's palaces at sunrise, asana practice on the riverside ghats of Maheshwar, or restorative sessions inside the courtyards of Mandu. Led by certified yoga acharyas, these sessions blend Hatha and gentle Vinyasa with the architectural and spiritual energy of each site. Mats, props, and herbal teas are provided. All levels welcome.",
    image: expYoga,
    video: "/videos/experiences/cycling.mp4",
    category: "Wellness",
    icon: "🕉️",
    highlights: [
      "Sunrise & sunset sessions at heritage sites",
      "Certified acharya-led practice",
      "All levels welcome · Mats provided",
      "Herbal tea & sattvic breakfast included",
    ],
    bestTime: "October to March",
    duration: "60–90 minute sessions",
  },
  {
    id: "temple-ritual",
    title: "Temple Ritual Experience",
    subtitle: "Sacred Temples of MP",
    description:
      "Participate in authentic temple rituals guided by priests. Experience India's spiritual traditions up close and immerse yourself in ancient ceremonies.",
    fullDescription:
      "From the Jyotirlinga temples of Ujjain and Omkareshwar to the Khajuraho group of monuments and the Chausath Yogini shrines, Madhya Pradesh holds some of India's most sacred and architecturally stunning temples. This curated experience takes you behind the rituals — guided by temple priests who explain the symbolism of each offering, the significance of mantras, and the historical context of the deity. You will participate in puja, perform aarti, receive tilak and prasad, and gain a depth of understanding rarely available to casual visitors.",
    image: expTempleRitual,
    video: "/videos/experiences/boat-bhedaghat.mp4",
    category: "Spiritual",
    icon: "🛕",
    highlights: [
      "Priest-guided puja participation",
      "Symbolism of mantras & offerings explained",
      "Tilak, prasad and rudraksha blessing",
      "Multiple temple itineraries available",
    ],
    bestTime: "Year-round · Festival days are most vibrant",
    duration: "Half-day to full-day temple circuits",
  },

  // ============================================================
  // NEW REELS — appended below. To add/remove reels in the future,
  // simply edit entries in this section. Keeps original list intact.
  // ============================================================
  {
    id: "bhasm-aarti-2",
    title: "Bhasm Aarti",
    subtitle: "Mahakaleshwar Temple, Ujjain",
    description:
      "A second glimpse into the mystical pre-dawn Bhasm Aarti at Mahakaleshwar Jyotirlinga.",
    image: expBhasmAarti,
    video: "/videos/experiences/bhasm-aarti-2.mp4",
    category: "Spiritual",
    icon: "🔥",
  },
  {
    id: "abhishekam-2",
    title: "Abhishekam Ceremony",
    subtitle: "Mahakaleshwar Temple, Ujjain",
    description:
      "Sacred Abhishekam ritual with panchamrit offerings and Vedic chants.",
    image: expAbhishekam,
    video: "/videos/experiences/abhishekam-2.mp4",
    category: "Spiritual",
    icon: "🙏",
  },
  {
    id: "harsiddhi-aarti-2",
    title: "Harsiddhi Mata Aarti",
    subtitle: "Harsiddhi Temple, Ujjain",
    description:
      "Evening Aarti with the iconic Deep Stambh towers glowing with 1,011 lamps.",
    image: expHarsiddhi,
    video: "/videos/experiences/harsiddhi-aarti-2.mp4",
    category: "Spiritual",
    icon: "🪔",
  },
  {
    id: "meditation-retreat-2",
    title: "Meditation & Spiritual Retreat",
    subtitle: "Ancient Caves & Heritage Sites",
    description:
      "Mindful meditation moments at heritage and natural sites across MP.",
    image: expMeditation,
    video: "/videos/experiences/meditation-2.mp4",
    category: "Wellness",
    icon: "🧘",
  },
  {
    id: "jungle-safari-2",
    title: "Jungle Safari Experience",
    subtitle: "Tiger Reserves of Madhya Pradesh",
    description:
      "Thrilling 4x4 jeep safaris through India's finest tiger habitats.",
    image: expJungleSafari,
    video: "/videos/experiences/jungle-safari-2.mp4",
    category: "Wildlife",
    icon: "🐯",
  },
  {
    id: "wildlife-photography-2",
    title: "Wildlife Photography",
    subtitle: "National Parks & Sanctuaries",
    description:
      "Capture rare wildlife moments in the wild forests of Madhya Pradesh.",
    image: expWildlifePhoto,
    video: "/videos/experiences/wildlife-photography-2.mp4",
    category: "Wildlife",
    icon: "📸",
  },
  {
    id: "yoga-heritage-2",
    title: "Yoga at Heritage Sites",
    subtitle: "Historic Palaces & Temples",
    description:
      "Sunrise yoga sessions amid the timeless architecture of MP's heritage sites.",
    image: expYoga,
    video: "/videos/experiences/yoga-heritage-2.mp4",
    category: "Wellness",
    icon: "🕉️",
  },
  {
    id: "temple-ritual-2",
    title: "Temple Ritual Experience",
    subtitle: "Sacred Temples of MP",
    description:
      "Authentic priest-guided temple rituals at MP's most sacred shrines.",
    image: expTempleRitual,
    video: "/videos/experiences/temple-ritual-2.mp4",
    category: "Spiritual",
    icon: "🛕",
  },
];

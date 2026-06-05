// data/packages.ts
import type { SawanPackage } from "../types";

const UJJAIN_TEMPLE =
  "https://images.unsplash.com/photo-1591777334757-1b13fc4e8baa?auto=format&fit=crop&w=1600&q=80";
const OMKAR =
  "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80";
const NARMADA =
  "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1600&q=80";
const HELI =
  "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=1600&q=80";
const HELI_2 =
  "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1600&q=80";
const HELI_3 =
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1600&q=80";
const MAHESHWAR =
  "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1600&q=80";
const MANDU =
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80";

const COMMON_EXCLUSIONS = [
  "Any services other than the ones mentioned above or air fares, train or flight tickets, activities, meals other than those mentioned above",
  "Items of personal nature: telephone calls, laundry, drinks, camera fees, tips, etc.",
];

const COMMON_NOTES = [
  "Rates are net and non‑commissionable for you.",
  "Rates are quoted on a Per Person basis in Indian Rupees.",
  "Rates may vary depending on the period of travel, as Madhya Pradesh is a dynamic state where rates are subject to change based on dates.",
  "Quotation is based on using the base category room at all hotels.",
  "The chauffeur‑driven private transport is for the client’s exclusive use.",
  "The vehicle will be provided for the exact itinerary specified.",
  "Our vehicle includes: Water bottles | Tissue Papers | Masks | Hand Sanitizers.",
  "Confirmation of rooms is subject to availability; in case of unavailability, an alternate or similar category hotel will be provided with any applicable supplement/reduction.",
];

// ──────────────────────────────────────────────
// NORMAL PACKAGES
// ──────────────────────────────────────────────

// 1. Mahakaal Blessings Yatra (3 Days)
const mahakaalBlessings: SawanPackage = {
  id: "mahakaal-blessings-yatra",
  kind: "normal",
  name: "Mahakaal Blessings Yatra",
  tagline: "Sawan Exclusive · Spiritual",
  duration: "3 Days / 2 Nights",
  route: "Indore → Ujjain → Omkareshwar → Indore",
  validity: "30 July – 30 August",
  badge: "Sawan Exclusive",
  startingPrice: "From ₹23,000",
  image: UJJAIN_TEMPLE,
  description:
    "A curated 3‑day Sawan pilgrimage covering Mahakaleshwar and Omkareshwar Jyotirlingas with VVIP darshan, evening aartis and Indore heritage.",
  highlights: [
    "The Kingdom of Mahakaal, where ancient spirituality reigns supreme, beckoning travelers with its sacred shrines and mystical allure.",
    "Harsiddhi Mata Temple Aarti: A mesmerizing spectacle of devotion and reverence, illuminating hearts with the divine energy of the sacred ritual.",
    "Omkareshwar: Sacred island retreat, where the divine Om symbol is etched naturally, evoking spiritual wonder amidst scenic Narmada vistas.",
    "Indore: City of flavors and flair, where bustling markets, rich heritage, and culinary delights captivate every traveler's senses.",
  ],
  inclusions: [
    "Meeting and assistance on arrival/departure at Airport/hotel by our representative.",
    "Accommodation for Total 02 nights on sharing basis on Room plus breakfast on fixed menu/buffet basis.",
    "Total 02 Breakfast as mentioned in the program.",
    "Arrival / Departure transfers, sightseeing/ excursions and surface travel as per the above program by Air‑Conditioned Vehicle.",
    "All monument entrance including VVIP Darshan at Mahakaleshwar Temple in Ujjain & Omkar Mandhata Temple in Omkareshwar & VIP Entry Ticket In Kaal Bhairav Temple In Ujjain.",
    "English / Hindi speaking local professional guides for the complete city tours as per the itinerary.",
    "Mineral water 02 (250 Ml.) Water bottles Per Person, Per Day, Tissues, Hand Sanitizers, Masks etc. in vehicle during the tour.",
  ],
  exclusions: COMMON_EXCLUSIONS,
  itinerary: [
    {
      day: "Day 1",
      title: "Arrive Indore & Drive to Ujjain – SAWAN SPECIAL TOUR BEGINS",
      body:
        "Arrive Indore & Drive to Ujjain by Road (55 Kms | Approx. 1.5 Hours) – SAWAN SPECIAL TOUR BEGINS\n" +
        "Upon arrival at Indore Railway Station / Airport, meet our representative and proceed towards the holy city of Ujjain – the divine abode of Mahakal during the sacred month of Sawan.\n\n" +
        "Arrive in Ujjain and transfer to the hotel. After check-in and relaxation, begin your spiritual journey with visits to the sacred Sandipani Ashram and Mangal Nath Temple. Continue to the famous Kaal Bhairav Temple, known for its unique rituals and deep spiritual significance during Sawan.\n\n" +
        "Later, visit the holy Ram Ghat on the banks of the sacred Shipra River and seek blessings at the revered Harsiddhi Mata Temple. Experience the devotional atmosphere of Ujjain as the city comes alive with Shiva devotees, chants, and Sawan celebrations.\n\n" +
        "In the evening, witness the magnificence of the newly developed Mahakaal Corridor followed by VVIP Darshan at Shri Mahakaleshwar Jyotirlinga near the Garbh Grah Gate. Participate in the divine Sandhya Aarti and immerse yourself in the spiritual energy of Mahakal during the auspicious Sawan season.\n\n" +
        "After darshan, return to the hotel. Overnight stay at Ujjain.\nMeals: NA",
    },
    {
      day: "Day 2",
      title: "Ujjain – Omkareshwar – Indore (220 Kms / 5.5 Hrs)",
      body:
        "Ujjain – Omkareshwar – Indore by Road (220 Kms | Approx. 5.5 Hours)\n" +
        "Morning after breakfast, check-out from the hotel and proceed towards the sacred island town of Omkareshwar, one of the revered 12 Jyotirlingas of Lord Shiva.\n\n" +
        "Upon arrival, visit Shri Omkareshwar Jyotirlinga Temple and experience One-Time VVIP Darshan for a smooth and spiritually enriching visit during the auspicious Sawan season. Feel the divine aura of the temple surrounded by the holy Narmada River and devotional chants of Shiva devotees.\n\n" +
        "Thereafter, explore the nearby sacred temples including Siddhanath Temple, Gouri Somnath Temple, and Annapurna Temple, known for their religious importance and ancient architectural beauty.\n\n" +
        "Later, enjoy a peaceful boat ride on the holy Narmada River and witness the sacred Sangam point of the Narmada and Kaveri Rivers amidst serene natural surroundings. (Boat ride available on direct payment basis.)\n\n" +
        "After completing the darshan and sightseeing, drive towards Indore. Upon arrival, check-in at the hotel.\nOvernight stay at Indore.\n\nMeals: Breakfast",
    },
    {
      day: "Day 3",
      title: "Departure Indore – TOUR END",
      body:
        "Departure Indore -TOUR END\n" +
        "Morning after breakfast check-out from the hotel & proceed to visit on a captivating half-day journey through the cultural heart of Indore, beginning with a visit to the iconic Rajwada, a splendid architectural marvel steeped in history. Continue your exploration at Bada Ganpati Temple, where the colossal idol of Lord Ganesh inspires awe and devotion. Then, seek blessings at Khajrana Ganesh Temple, known for its spiritual ambiance and revered deity. Experience the serene beauty of Kanch Mandir, adorned with exquisite mirror work that reflects the city's artistic heritage. Delve into the historical significance of Boliya Chattri, a testament to the regal legacy of Indore's rulers. Finally, immerse yourself in the vibrant ambiance of 56 Dukaan Street, a bustling marketplace offering a plethora of local delights, from handicrafts to street food delicacies.\n\n" +
        "Later visits in time transfer to railway station / Airport and board flight / train for onward journey.\n\nMeals: Breakfast",
    },
  ],
  pricing: [
    {
      hotelCategory: "03 Star Hotel",
      variants: [
        { vehicle: "AC Sedan Car", pax: 2, cost: 28800 },
        { vehicle: "Innova Crysta", pax: 4, cost: 23700 },
        { vehicle: "Tempo Traveller", pax: 6, cost: 23000 },
      ],
    },
    {
      hotelCategory: "03 Star Deluxe Hotel",
      variants: [
        { vehicle: "AC Sedan Car", pax: 2, cost: 29500 },
        { vehicle: "Innova Crysta", pax: 4, cost: 24500 },
        { vehicle: "Tempo Traveller", pax: 6, cost: 23700 },
      ],
    },
    {
      hotelCategory: "04 Star Hotel",
      variants: [
        { vehicle: "AC Sedan Car", pax: 2, cost: 30500 },
        { vehicle: "Innova Crysta", pax: 4, cost: 25500 },
        { vehicle: "Tempo Traveller", pax: 6, cost: 24700 },
      ],
    },
  ],
  facts: {
    transportation:
      "Various modes of transportation are available for this trip, including AC sedans / Innova Crysta and large coaches, catering to different group sizes.",
    accommodation:
      "Accommodation options on this trip range from excellent budget hotels to luxury hotels, providing choices to suit different preferences and budgets.",
    weather:
      "July and August bring pleasant monsoon weather to Indore, Ujjain, Omkareshwar, and Maheshwar, with temperatures between 23°C–30°C, lush greenery, and refreshing rainfall creating a perfect spiritual and scenic travel experience.",
    nearestAirport: "Devi Ahilyabai Holkar Airport, Indore",
    nearestRailway: "Indore Railway Station / Ujjain Railway Station",
  },
  notes: COMMON_NOTES,
  category: "Spiritual",
  isPopular: true,
  isLuxury: false,
  onlyGroup: false,
};

// 2. Divine Jyotirlinga Yatra (4 Days)
const divineJyotirlinga: SawanPackage = {
  id: "divine-jyotirlinga-yatra",
  kind: "normal",
  name: "Divine Jyotirlinga Yatra",
  tagline: "Sawan Exclusive · Spiritual & Heritage",
  duration: "4 Days / 3 Nights",
  route: "Indore → Ujjain → Omkareshwar → Maheshwar → Indore",
  validity: "30 July – 30 August",
  badge: "Sawan Exclusive",
  startingPrice: "From ₹27,900",
  image: OMKAR,
  description:
    "A 4‑day spiritual journey across two Jyotirlingas plus the queenly riverside town of Maheshwar — including a Narmada sunset boat ride.",
  highlights: [
    "The Kingdom of Mahakaal, where ancient spirituality reigns supreme, beckoning travelers with its sacred shrines and mystical allure.",
    "Harsiddhi Mata Temple Aarti: A mesmerizing spectacle of devotion and reverence, illuminating hearts with the divine energy of the sacred ritual.",
    "Omkareshwar: Sacred island retreat, where the divine Om symbol is etched naturally, evoking spiritual wonder amidst scenic Narmada vistas.",
    "Maheshwar: Ancient kingdom of Maheshmati, where echoes of regal splendor and timeless charm resonate through majestic forts and sacred riverside ghats.",
    "Maheshwar's sunset boat ride: Glide along the Narmada, as dusk paints the sky, weaving a tapestry of tranquility and awe, etching memories that linger forever.",
    "Indore: City of flavors and flair, where bustling markets, rich heritage, and culinary delights captivate every traveler's senses.",
  ],
  inclusions: [
    "Meeting and assistance on arrival/departure at Airport/hotel by our representative.",
    "Accommodation for Total 03 nights on sharing basis on Room plus breakfast on fixed menu/buffet basis. Except In Maheshwar where the stay is on MAPAI plan/Half board that is with breakfast lunch & Dinner on Fixed menu Buffet Basis.",
    "Total 03 Breakfast & 01 Dinner as mentioned in the program.",
    "Arrival / Departure transfers, sightseeing/ excursions and surface travel as per the above program by Air‑Conditioned Vehicle.",
    "Enjoy a scenic boat ride on the Narmada River, offering beautiful views of Maheshwar Fort.",
    "All monument entrance including VVIP Darshan at Mahakaleshwar Temple in Ujjain & Omkar Mandhata Temple in Omkareshwar & VIP Entry Ticket In Kaal Bhairav Temple In Ujjain.",
    "English / Hindi speaking local professional guides for the complete city tours as per the itinerary.",
    "Mineral water 02 (250 Ml.) Water bottles Per Person, Per Day, Tissues, Hand Sanitizers, Masks etc. in vehicle during the tour.",
  ],
  exclusions: COMMON_EXCLUSIONS,
  itinerary: [
    {
      day: "Day 1",
      title: "Arrive Indore & Drive to Ujjain – SAWAN SPECIAL TOUR BEGINS",
      body:
        "Arrive Indore & Drive to Ujjain by Road (55 Kms | Approx. 1.5 Hours) – SAWAN SPECIAL TOUR BEGINS\n" +
        "Upon arrival at Indore Railway Station / Airport, meet our representative and proceed towards the holy city of Ujjain – the divine abode of Mahakal during the sacred month of Sawan.\n\n" +
        "Arrive in Ujjain and transfer to the hotel. After check-in and relaxation, begin your spiritual journey with visits to the sacred Sandipani Ashram and Mangal Nath Temple. Continue to the famous Kaal Bhairav Temple, known for its unique rituals and deep spiritual significance during Sawan.\n\n" +
        "Later, visit the holy Ram Ghat on the banks of the sacred Shipra River and seek blessings at the revered Harsiddhi Mata Temple. Experience the devotional atmosphere of Ujjain as the city comes alive with Shiva devotees, chants, and Sawan celebrations.\n\n" +
        "In the evening, witness the magnificence of the newly developed Mahakaal Corridor followed by VVIP Darshan at Shri Mahakaleshwar Jyotirlinga near the Garbh Grah Gate. Participate in the divine Sandhya Aarti and immerse yourself in the spiritual energy of Mahakal during the auspicious Sawan season.\n\n" +
        "After darshan, return to the hotel. Overnight stay at Ujjain.\nMeals: NA",
    },
    {
      day: "Day 2",
      title: "Ujjain – Omkareshwar – Maheshwar (213 Kms / 5.5 Hrs)",
      body:
        "Ujjain - Omkareshwar - Maheshwar by road (213 Kms & 5.5 Hours approx.)\n" +
        "Morning after breakfast, check-out from the hotel and proceed towards the sacred island town of Omkareshwar, one of the revered 12 Jyotirlingas of Lord Shiva.\n\n" +
        "Upon arrival, visit Shri Omkareshwar Jyotirlinga Temple and experience One-Time VVIP Darshan for a smooth and spiritually enriching visit during the auspicious Sawan season. Feel the divine aura of the temple surrounded by the holy Narmada River and devotional chants of Shiva devotees.\n\n" +
        "Thereafter, explore the nearby sacred temples including Siddhanath Temple, Gouri Somnath Temple, and Annapurna Temple, known for their religious importance and ancient architectural beauty.\n\n" +
        "Later, enjoy a peaceful boat ride on the holy Narmada River and witness the sacred Sangam point of the Narmada and Kaveri Rivers amidst serene natural surroundings. (Boat ride available on direct payment basis.)\n\n" +
        "After completing the visits, drive to Maheshwar, arrive Maheshwar check-in at the hotel.\nOvernight stay at Maheshwar.\n\nMeals: Breakfast & Dinner",
    },
    {
      day: "Day 3",
      title: "Maheshwar – Indore (96 Kms / 2 Hrs)",
      body:
        "Maheshwar - Indore by road (96 Kms & 2 Hours approx.)\n" +
        "Morning after breakfast check-out from the hotel proceed to visit the magnificent fort of Maheshwar & Rajwada. Situated on the banks of river Narmada, Maheshwar appeals to both, the pilgrim as well as the tourist in you. The town possesses a treasure trove of beautiful temples that calm the soul, alongside man-made creations that please the eyes.\n" +
        "A centre of handloom weaving since the 5th century, Maheshwar has been producing the exquisite Maheshwari saris and fabric. The town also holds the distinction of being the capital of Rajmata Ahilya Devi Holkar’s empire during the 18th century.\n\n" +
        "After visits in the evening one can enjoy boat ride at Narmada River overlooking Maheshwar fort. After visit drive to Indore, arrive Indore check-in at the hotel.\n\n" +
        "In the evening, delve into the bustling ambiance of 56 Dukaan Street, a vibrant marketplace offering a diverse array of local crafts, textiles, and culinary delights. Immerse yourself in the colorful tapestry of Indore's street life as you browse through the bustling lanes filled with shops and eateries. As night descends, indulge in the gastronomic delights of Sarafa Food Bazaar, where the city's culinary traditions come to life. Sample a tantalizing variety of street food offerings, from savory chaats to delectable sweets, amidst the lively atmosphere of this iconic food destination. After visits return to the hotel & Overnight at Indore.\n\nMeals: Breakfast",
    },
    {
      day: "Day 4",
      title: "Departure from Indore – TOUR END",
      body:
        "Departure from Indore -TOUR END\n" +
        "Morning after breakfast check-out from the hotel proceed to full-day exploration of Indore's cultural and historical treasures, beginning with the majestic Rajwada and Lal Bagh Palace (close on Monday). Admire the dazzling mirror work at Kanch Mandir and pay homage at Bada Ganpati Temple and Khajrana Ganesh Temple. Marvel at the architectural splendors of Boliya and Krishna Pura Chhatris, epitomizing the city's rich heritage.\n\n" +
        "After visit in time transfer to airport/railway station flight/train for onward journey.\n\nMeals: Breakfast",
    },
  ],
  pricing: [
    {
      hotelCategory: "03 Star Hotel",
      variants: [
        { vehicle: "AC Sedan Car", pax: 2, cost: 36000 },
        { vehicle: "Innova Crysta", pax: 4, cost: 29600 },
        { vehicle: "Tempo Traveller", pax: 6, cost: 28700 },
      ],
    },
    {
      hotelCategory: "03 Star Deluxe Hotel",
      variants: [
        { vehicle: "AC Sedan Car", pax: 2, cost: 35300 },
        { vehicle: "Innova Crysta", pax: 4, cost: 28800 },
        { vehicle: "Tempo Traveller", pax: 6, cost: 27900 },
      ],
    },
    {
      hotelCategory: "04 Star Hotel",
      variants: [
        { vehicle: "AC Sedan Car", pax: 2, cost: 39700 },
        { vehicle: "Innova Crysta", pax: 4, cost: 33300 },
        { vehicle: "Tempo Traveller", pax: 6, cost: 32300 },
      ],
    },
  ],
  facts: {
    transportation:
      "Various modes of transportation are available for this trip, including AC sedans / Innova Crysta and large coaches, catering to different group sizes.",
    accommodation:
      "Accommodation options on this trip range from excellent budget hotels to luxury hotels, providing choices to suit different preferences and budgets.",
    weather:
      "July and August bring pleasant monsoon weather to Indore, Ujjain, Omkareshwar, and Maheshwar, with temperatures between 23°C–30°C, lush greenery, and refreshing rainfall creating a perfect spiritual and scenic travel experience.",
    nearestAirport: "Devi Ahilyabai Holkar Airport, Indore",
    nearestRailway: "Indore Railway Station / Ujjain Railway Station",
  },
  notes: COMMON_NOTES,
  category: "Spiritual & Heritage",
  isPopular: true,
  isLuxury: false,
  onlyGroup: false,
};

// 3. Jyotirlinga Monsoon Escape (5 Days)
const jyotirlingaMonsoonEscape: SawanPackage = {
  id: "jyotirlinga-monsoon-escape",
  kind: "normal",
  name: "Jyotirlinga Monsoon Escape",
  tagline: "Sawan Exclusive · Spiritual & Heritage",
  duration: "5 Days / 4 Nights",
  route: "Indore → Ujjain → Omkareshwar → Maheshwar → Mandu → Indore",
  validity: "30 July – 30 August",
  badge: "Sawan Exclusive",
  startingPrice: "From ₹31,800",
  image: MAHESHWAR,
  description:
    "Five days of monsoon‑soaked devotion and heritage — Mahakal, Omkareshwar, Maheshwar and the romantic ruins of Mandu.",
  highlights: [
    "The Kingdom of Mahakaal, where ancient spirituality reigns supreme, beckoning travelers with its sacred shrines and mystical allure.",
    "Harsiddhi Mata Temple Aarti: A mesmerizing spectacle of devotion and reverence, illuminating hearts with the divine energy of the sacred ritual.",
    "Omkareshwar: Sacred island retreat, where the divine Om symbol is etched naturally, evoking spiritual wonder amidst scenic Narmada vistas.",
    "Maheshwar: Ancient kingdom of Maheshmati, where echoes of regal splendor and timeless charm resonate through majestic forts and sacred riverside ghats.",
    "Maheshwar's sunset boat ride: Glide along the Narmada, as dusk paints the sky, weaving a tapestry of tranquility and awe, etching memories that linger forever.",
    "Mandu: Where history whispers through magnificent ruins, weaving tales of romance and valor, enchanting every traveler who walks its ancient pathways.",
    "Sunset at Rani Roopmati Pavilion, Mandu: Experience the ethereal beauty as the sun paints the sky in golden hues, illuminating the historic ruins with a mesmerizing glow, etching memories that transcend time.",
    "Indore: City of flavors and flair, where bustling markets, rich heritage, and culinary delights captivate every traveler's senses.",
  ],
  inclusions: [
    "Meeting and assistance on arrival/departure at Airport/hotel by our representative.",
    "Accommodation for Total 04 nights on sharing basis on Room plus breakfast on fixed menu/buffet basis. Except In Maheshwar where the stay is on MAPAI plan/Half board that is with breakfast lunch & Dinner on Fixed menu Buffet Basis.",
    "Total 03 Breakfast & 01 Dinner as mentioned in the program.",
    "Arrival / Departure transfers, sightseeing/ excursions and surface travel as per the above program by Air‑Conditioned Vehicle.",
    "Enjoy a scenic boat ride on the Narmada River, offering beautiful views of Maheshwar Fort.",
    "All monument entrance including VVIP Darshan at Mahakaleshwar Temple in Ujjain & Omkar Mandhata Temple in Omkareshwar & VIP Entry Ticket In Kaal Bhairav Temple In Ujjain.",
    "English / Hindi speaking local professional guides for the complete city tours as per the itinerary.",
    "Mineral water 02 (250 Ml.) Water bottles Per Person, Per Day, Tissues, Hand Sanitizers, Masks etc. in vehicle during the tour.",
  ],
  exclusions: COMMON_EXCLUSIONS,
  itinerary: [
    {
      day: "Day 1",
      title: "Arrive Indore & Drive to Ujjain – SAWAN SPECIAL TOUR BEGINS",
      body:
        "Arrive Indore & Drive to Ujjain by Road (55 Kms | Approx. 1.5 Hours) – SAWAN SPECIAL TOUR BEGINS\n" +
        "Upon arrival at Indore Railway Station / Airport, meet our representative and proceed towards the holy city of Ujjain – the divine abode of Mahakal during the sacred month of Sawan.\n\n" +
        "Arrive in Ujjain and transfer to the hotel. After check-in and relaxation, begin your spiritual journey with visits to the sacred Sandipani Ashram and Mangal Nath Temple. Continue to the famous Kaal Bhairav Temple, known for its unique rituals and deep spiritual significance during Sawan.\n\n" +
        "Later, visit the holy Ram Ghat on the banks of the sacred Shipra River and seek blessings at the revered Harsiddhi Mata Temple. Experience the devotional atmosphere of Ujjain as the city comes alive with Shiva devotees, chants, and Sawan celebrations.\n\n" +
        "In the evening, witness the magnificence of the newly developed Mahakaal Corridor followed by VVIP Darshan at Shri Mahakaleshwar Jyotirlinga near the Garbh Grah Gate. Participate in the divine Sandhya Aarti and immerse yourself in the spiritual energy of Mahakal during the auspicious Sawan season.\n\n" +
        "After darshan, return to the hotel. Overnight stay at Ujjain.\nMeals: NA",
    },
    {
      day: "Day 2",
      title: "Ujjain – Omkareshwar – Maheshwar (213 Kms / 5.5 Hrs)",
      body:
        "Ujjain - Omkareshwar - Maheshwar by road (213 Kms & 5.5 Hours approx.)\n" +
        "Morning after breakfast, check-out from the hotel and proceed towards the sacred island town of Omkareshwar, one of the revered 12 Jyotirlingas of Lord Shiva.\n\n" +
        "Upon arrival, visit Shri Omkareshwar Jyotirlinga Temple and experience One-Time VVIP Darshan for a smooth and spiritually enriching visit during the auspicious Sawan season. Feel the divine aura of the temple surrounded by the holy Narmada River and devotional chants of Shiva devotees.\n\n" +
        "Thereafter, explore the nearby sacred temples including Siddhanath Temple, Gouri Somnath Temple, and Annapurna Temple, known for their religious importance and ancient architectural beauty.\n\n" +
        "Later, enjoy a peaceful boat ride on the holy Narmada River and witness the sacred Sangam point of the Narmada and Kaveri Rivers amidst serene natural surroundings. (Boat ride available on direct payment basis.)\n\n" +
        "After completing the visits, drive Maheshwar. arrive Maheshwar, check-in at the hotel.\n" +
        "Evening proceed to visit the magnificent fort of Maheshwar & Rajwada. Situated on the banks of river Narmada, Maheshwar appeals to both, the pilgrim as well as the tourist in you. The town possesses a treasure trove of beautiful temples that calm the soul, alongside man-made creations that please the eyes.\n" +
        "A centre of handloom weaving since the 5th century, Maheshwar has been producing the exquisite Maheshwari saris and fabric. The town also holds the distinction of being the capital of Rajmata Ahilya Devi Holkar’s empire during the 18th century. Overnight stay at Maheshwar.\n\nMeals: Breakfast & Dinner",
    },
    {
      day: "Day 3",
      title: "Maheshwar – Mandu (41 Kms / 1 Hr)",
      body:
        "Maheshwar – Mandu by Road (41 Kms / Approx. 1 Hour)\n" +
        "Morning after breakfast, check-out from the hotel and drive to Mandu. On arrive Mandu, proceed for sightseeing of the historic monuments including Jahaz Mahal, Hindola Mahal, Jama Masjid and Hoshang Shah's Tomb. Mandu, also known as Mandavgad, is a historic fortress town in the Malwa region of Madhya Pradesh, famous for its Afghan architecture, ancient palaces, mosques, and romantic history. Surrounded by massive fort walls and lush landscapes, Mandu beautifully reflects the grandeur of medieval India.\n\n" +
        "Visit Baz Bahadur's Palace, known for its blend of Rajput and Mughal architecture, followed by Rani Roopmati Pavilion, which offers breathtaking panoramic views and echoes the legendary love story of Baz Bahadur and Rani Roopmati.\n\n" +
        "During monsoon, Mandu transforms into a magical paradise with mist-covered hills, waterfalls, lush greenery, and clouds floating around its ancient monuments, making it one of the most beautiful monsoon destinations in Madhya Pradesh.\n\n" +
        "After sightseeing, return to the hotel. Overnight stay at Mandu.\n\nMeals: Breakfast",
    },
    {
      day: "Day 4",
      title: "Mandu – Indore (97 Kms / 2 Hrs)",
      body:
        "Mandu - Indore by road (97 Kms & 2 Hours approx.)\n" +
        "Morning after breakfast check-out from the hotel & drive to Indore, arrive Indore. check in at hotel & proceed to full-day exploration of Indore's cultural and historical treasures, beginning with the majestic Rajwada and Lal Bagh Palace (Close on Monday). Admire the dazzling mirror work at Kanch Mandir and pay homage at Bada Ganpati Temple and Khajrana Ganesh Temple. Marvel at the architectural splendors of Boliya and Krishna Pura Chhatris, epitomizing the city's rich heritage.\n\n" +
        "In the evening, delve into the bustling ambiance of 56 Dukaan Street, a vibrant marketplace offering a diverse array of local crafts, textiles, and culinary delights. Immerse yourself in the colorful tapestry of Indore's street life as you browse through the bustling lanes filled with shops and eateries. As night descends, indulge in the gastronomic delights of Sarafa Food Bazaar, where the city's culinary traditions come to life. Sample a tantalizing variety of street food offerings, from savory chaats to delectable sweets, amidst the lively atmosphere of this iconic food destination. After visits return to the hotel & Overnight at Indore.\n\nMeals: Breakfast",
    },
    {
      day: "Day 5",
      title: "Departure Indore – TOUR END",
      body:
        "Departure Indore - TOUR END\n" +
        "Morning after breakfast check-out from the hotel in time transfer to airport/railway station to board flight/train for onward journey.\n\nMeals: Breakfast",
    },
  ],
  pricing: [
    {
      hotelCategory: "03 Star Hotel",
      variants: [
        { vehicle: "AC Sedan Car", pax: 2, cost: 40500 },
        { vehicle: "Innova Crysta", pax: 4, cost: 32800 },
        { vehicle: "Tempo Traveller", pax: 6, cost: 31800 },
      ],
    },
    {
      hotelCategory: "03 Star Deluxe Hotel",
      variants: [
        { vehicle: "AC Sedan Car", pax: 2, cost: 41700 },
        { vehicle: "Innova Crysta", pax: 4, cost: 34000 },
        { vehicle: "Tempo Traveller", pax: 6, cost: 33000 },
      ],
    },
    {
      hotelCategory: "04 Star Hotel",
      variants: [
        { vehicle: "AC Sedan Car", pax: 2, cost: 47500 },
        { vehicle: "Innova Crysta", pax: 4, cost: 39500 },
        { vehicle: "Tempo Traveller", pax: 6, cost: 38500 },
      ],
    },
  ],
  facts: {
    transportation:
      "Various modes of transportation are available for this trip, including AC sedans / Innova Crysta and large coaches, catering to different group sizes.",
    accommodation:
      "Accommodation options on this trip range from excellent budget hotels to luxury hotels, providing choices to suit different preferences and budgets.",
    weather:
      "July and August bring pleasant monsoon weather to Indore, Ujjain, Omkareshwar, and Maheshwar, with temperatures between 23°C–30°C, lush greenery, and refreshing rainfall creating a perfect spiritual and scenic travel experience.",
    nearestAirport: "Devi Ahilyabai Holkar Airport, Indore",
    nearestRailway: "Indore Railway Station / Ujjain Railway Station",
  },
  notes: COMMON_NOTES,
  category: "Spiritual & Heritage",
  isPopular: true,
  isLuxury: false,
  onlyGroup: false,
};

// ──────────────────────────────────────────────
// HELICOPTER PACKAGES (unchanged from before)
// ... (insert the three helicopter packages with single-tier pricing, facts, notes)
// ──────────────────────────────────────────────

// I'll include them briefly for completeness but keep them identical to the previous fully fleshed-out versions.
// For brevity, I'll reference them: they are "heli-jyotirlinga-experience", "heli-spiritual-journeys", "heli-divine-essence-mp"
// with their respective data, but now using the new PricingTier format? Actually helicopter packages only have one hotel category ("4 Star & Best Available Hotel"),
// so we can treat them as a single tier in the same array: [ { hotelCategory: "4 Star & Best Available Hotel", variants: [...] } ]
// We'll adapt them below.

// However, I won't repeat the entire helicopter code here to keep the response focused;
// the user can merge the existing helicopter packages with the new pricing structure by replacing the `pricing` field.
// For completeness, I'll show how to update one helicopter package as an example, then the full array export.

// I'll create the three helicopter packages with the new pricing type.

const heliExperience: SawanPackage = {
  id: "heli-jyotirlinga-experience",
  kind: "helicopter",
  name: "A Spiritual Experience of Jyotirlingas",
  tagline: "Helicopter VIP · Same Day Darshan",
  duration: "1 Day",
  route: "Indore ⇋ Ujjain ⇋ Omkareshwar ⇋ Indore (by Helicopter)",
  validity: "30 July – 30 August",
  badge: "Helicopter VIP",
  startingPrice: "₹54,200",
  image: HELI,
  description:
    "Same‑day VVIP darshan of Mahakaleshwar and Omkareshwar Jyotirlingas by chartered helicopter. The most exclusive way to receive Sawan blessings.",
  highlights: [
    "The Kingdom of Mahakaal, where ancient spirituality reigns supreme, beckoning travelers with its sacred shrines and mystical allure.",
    "Omkareshwar: Sacred island retreat, where the divine Om symbol is etched naturally, evoking spiritual wonder amidst scenic Narmada vistas.",
  ],
  inclusions: [
    "Meeting and assistance on arrival/departure at Airport/hotel by our representative.",
    "Wash & change room facility.",
    "Arrival / Departure transfers, sightseeing/ excursions and surface travel as per the above program by Air‑Conditioned Vehicle.",
    "Experince VVIP Darshan at Mahakaleshwar Temple in Ujjain.",
    "Enjoy VIP entry ticket in Kaal Bhairav Temple In Ujjain.",
    "Experince VVIP Darshan at Omkar Mandhata Temple In Omkareshwar.",
    "English / Hindi speaking local professional guides for the complete city tours as per the itinerary.",
    "Mineral water 02 (250 Ml.) Water bottles Per Person, Per Day, Tissues, Hand Sanitizers, Masks etc. in vehicle during the tour.",
  ],
  exclusions: COMMON_EXCLUSIONS,
  itinerary: [
    {
      day: "Day 1",
      title: "Indore → Ujjain → Omkareshwar → Indore (by Helicopter)",
      body:
        "Day 01: Arrival Indore – Ujjain – Omkareshwar by Air – Tour Begins\n" +
        "Upon arrival at Indore Airport, you will be warmly welcomed by our company representative and transferred to the hotel for wash & change facilities. Later, proceed for the divine Same Day Pilgrimage Tour by helicopter covering the sacred Jyotirlingas of Ujjain and Omkareshwar.\n\n" +
        "11:00 AM Transfer to Bicholi (Indore) Helipad\n" +
        "11:20 AM Arrival at Police Line (Ujjain) Helipad\n" +
        "11:25 AM Briefing by our ground staff followed by transfer to Shri Mahakaleshwar Jyotirlinga Temple for darshan\n" +
        "11:45 AM – 12:40 PM Experience VVIP Darshan near the Garbh Griha at Shri Mahakaleshwar Jyotirlinga Temple\n" +
        "12:45 PM Departure from Shri Mahakaleshwar Jyotirlinga Temple for Helipad\n" +
        "01:00 PM Departure from Police Line (Ujjain) Helipad\n" +
        "01:50 PM Arrival at Mandhata (Omkareshwar) Helipad\n" +
        "01:55 PM Briefing by our ground staff followed by transfer to Shri Omkareshwar Jyotirlinga Temple for darshan\n" +
        "02:15 PM – 03:50 PM Experience VVIP Darshan at Shri Omkar Mandhata Jyotirlinga Temple\n" +
        "04:00 PM Departure from Shri Omkareshwar Jyotirlinga Temple for Mandhata Helipad\n" +
        "04:25 PM Arrival at Bicholi (Indore) Helipad\n\n" +
        "Transfer to Indore airport board flight for onward journey\n\nMeals NA",
    },
  ],
  pricing: [
    {
      hotelCategory: "4 Star & Best Available Hotel",
      variants: [
        { vehicle: "AC Sedan Car", pax: 2, cost: 57900 },
        { vehicle: "Innova Crysta", pax: 4, cost: 54900 },
        { vehicle: "Tempo Traveller", pax: 6, cost: 54200 },
      ],
    },
  ],
  facts: {
    transportation:
      "Various modes of transportation are available for this trip, including AC sedans / Innova Crysta and large coaches, catering to different group sizes.",
    accommodation:
      "Accommodation options on this trip range from excellent budget hotels to luxury hotels, providing choices to suit different preferences and budgets.",
    weather:
      "July and August bring pleasant monsoon weather to Indore, Ujjain, Omkareshwar, and Maheshwar, with temperatures between 23°C–30°C, lush greenery, and refreshing rainfall creating a perfect spiritual and scenic travel experience.",
    nearestAirport: "Devi Ahilyabai Holkar Airport, Indore",
    nearestRailway: "Indore Railway Station / Ujjain Railway Station",
  },
  notes: COMMON_NOTES,
  category: "Spiritual",
  isPopular: true,
  isLuxury: true,
  onlyGroup: false,
};

// Similarly define the other two helicopter packages (heli-spiritual-journeys, heli-divine-essence-mp) with the same pattern.
// I'll add them quickly.

const heliSpiritual: SawanPackage = {
  id: "heli-spiritual-journeys",
  kind: "helicopter",
  name: "Spiritual Journeys, Timeless Memories",
  tagline: "Helicopter VIP · 2 Days / 1 Night",
  duration: "2 Days / 1 Night",
  route: "Indore ⇋ Ujjain ⇋ Omkareshwar ⇋ Indore (by Helicopter + Road)",
  validity: "30 July – 30 August",
  badge: "Helicopter VIP",
  startingPrice: "₹62,200",
  image: HELI_2,
  description:
    "A 2‑day VIP pilgrimage with luxury overnight in Ujjain, helicopter darshan of both Jyotirlingas, and the famous Harsiddhi Mata Aarti.",
  highlights: [
    "The Kingdom of Mahakaal, where ancient spirituality reigns supreme, beckoning travelers with its sacred shrines and mystical allure.",
    "Harsiddhi Mata Temple Aarti: A mesmerizing spectacle of devotion and reverence, illuminating hearts with the divine energy of the sacred ritual.",
    "Omkareshwar: Sacred island retreat, where the divine Om symbol is etched naturally, evoking spiritual wonder amidst scenic Narmada vistas.",
  ],
  inclusions: [
    "Meeting and assistance on arrival/departure at Airport/hotel by our representative.",
    "Accommodation for Total 01 nights on sharing basis on Room plus breakfast on fixed menu/buffet basis.",
    "Total 01 Breakfast as mentioned in the program.",
    "Arrival / Departure transfers, sightseeing/ excursions and surface travel as per the above program by Air‑Conditioned Vehicle.",
    "Experince VVIP Darshan at Mahakaleshwar Temple in Ujjain.",
    "Enjoy VIP entry ticket in Kaal Bhairav Temple In Ujjain.",
    "Experince VVIP Darshan at Omkar Mandhata Temple In Omkareshwar.",
    "English / Hindi speaking local professional guides for the complete city tours as per the itinerary.",
    "Mineral water 02 (250 Ml.) Water bottles Per Person, Per Day, Tissues, Hand Sanitizers, Masks etc. in vehicle during the tour.",
  ],
  exclusions: COMMON_EXCLUSIONS,
  itinerary: [
    {
      day: "Day 1",
      title: "Indore → Ujjain by Road – Spiritual Immersion",
      body:
        "Arrival Indore – Ujjain by Road (55 Kms & 1.5 Hours) – Tour Begins\n" +
        "Upon arrival at Indore Airport, you will be warmly welcomed by our company representative and driven to Ujjain, “The Kingdom of Mahakaal.” Upon arrival in Ujjain, transfer to the hotel and check‑in at the hotels.\n\n" +
        "Begin your sightseeing tour with a visit to the historic Sandipani Ashram, followed by the serene Mangal Nath Temple. Continue to the famous Kaal Bhairav Temple, renowned for its unique ritual of offering liquor to the deity.\n\n" +
        "Later, explore the spiritual ambiance and beautiful heritage of the city before visiting the sacred Ram Ghat, situated on the banks of the holy Shipra River. Thereafter, visit the revered Harsiddhi Mata Temple, known for its divine atmosphere and magnificent architecture.\n\n" +
        "In the evening, experience the grandeur of the newly developed Mahakaal Corridor, followed by VVIP Darshan at Shri Mahakaleshwar Temple near the Garbh Grah Gate. Witness the divine Sandhya Aarti experience before returning to the hotel. Overnight stay at Ujjain.\n\nMeals NA",
    },
    {
      day: "Day 2",
      title: "Ujjain → Omkareshwar → Indore by Helicopter",
      body:
        "Ujjain - Omkareshwar - Indore by air - TOUR END\n" +
        "Morning after breakfast check‑out from the hotel.\n\n" +
        "10:30 AM Departure from Police Line (Ujjain) Helipad\n" +
        "11:30 AM Arrival at Mandhata (Omkareshwar) Helipad\n" +
        "11:35 AM Briefing by our ground staff followed by transfer to Shri Omkareshwar Jyotirlinga Temple for darshan\n" +
        "11:55 AM – 01:40 PM Experience VVIP Darshan at Shri Omkar Mandhata Jyotirlinga Temple\n" +
        "01:50 PM Departure from Shri Omkareshwar Jyotirlinga Temple for Mandhata Helipad\n" +
        "02:20 PM Arrival at Bicholi (Indore) Helipad\n\n" +
        "Transfer to Indore airport board flight for onward journey\n\nMeals: Breakfast",
    },
  ],
  pricing: [
    {
      hotelCategory: "4 Star & Best Available Hotel",
      variants: [
        { vehicle: "AC Sedan Car", pax: 2, cost: 66500 },
        { vehicle: "Innova Crysta", pax: 4, cost: 62800 },
        { vehicle: "Tempo Traveller", pax: 6, cost: 62200 },
      ],
    },
  ],
  facts: {
    transportation:
      "Various modes of transportation are available for this trip, including AC sedans / Innova Crysta and large coaches, catering to different group sizes.",
    accommodation:
      "Accommodation options on this trip range from excellent budget hotels to luxury hotels, providing choices to suit different preferences and budgets.",
    weather:
      "July and August bring pleasant monsoon weather to Indore, Ujjain, Omkareshwar, and Maheshwar, with temperatures between 23°C–30°C, lush greenery, and refreshing rainfall creating a perfect spiritual and scenic travel experience.",
    nearestAirport: "Devi Ahilyabai Holkar Airport, Indore",
    nearestRailway: "Indore Railway Station / Ujjain Railway Station",
  },
  notes: COMMON_NOTES,
  category: "Spiritual & Heritage",
  isPopular: true,
  isLuxury: true,
  onlyGroup: false,
};

const heliDivine: SawanPackage = {
  id: "heli-divine-essence-mp",
  kind: "helicopter",
  name: "The Divine Essence of Madhya Pradesh",
  tagline: "Helicopter VIP · 3 Days / 2 Nights",
  duration: "3 Days / 2 Nights",
  route: "Indore ⇋ Ujjain ⇋ Omkareshwar ⇋ Indore (by Helicopter + Road)",
  validity: "30 July – 30 August",
  badge: "Helicopter VIP",
  startingPrice: "₹70,300",
  image: HELI_3,
  gallery: [HELI_3, OMKAR, MANDU],
  description:
    "The most complete VIP Sawan experience — three days of helicopter‑led pilgrimage, Bhasma Aarti, Omkareshwar darshan and the vibrant culture of Indore.",
  highlights: [
    "The Kingdom of Mahakaal, where ancient spirituality reigns supreme, beckoning travelers with its sacred shrines and mystical allure.",
    "Harsiddhi Mata Temple Aarti: A mesmerizing spectacle of devotion and reverence, illuminating hearts with the divine energy of the sacred ritual.",
    "Omkareshwar: Sacred island retreat, where the divine Om symbol is etched naturally, evoking spiritual wonder amidst scenic Narmada vistas.",
    "Indore: City of flavors and flair, where bustling markets, rich heritage, and culinary delights captivate every traveler's senses.",
  ],
  inclusions: [
    "Meeting and assistance on arrival/departure at Airport/hotel by our representative.",
    "Accommodation for Total 02 nights on sharing basis on Room plus breakfast on fixed menu/buffet basis.",
    "Total 02 Breakfasts as mentioned in the program.",
    "Arrival / Departure transfers, sightseeing/ excursions and surface travel as per the above program by Air‑Conditioned Vehicle.",
    "Experince VVIP Darshan at Mahakaleshwar Temple in Ujjain.",
    "Enjoy VIP entry ticket in Kaal Bhairav Temple In Ujjain.",
    "Experince VVIP Darshan at Omkar Mandhata Temple In Omkareshwar.",
    "English / Hindi speaking local professional guides for the complete city tours as per the itinerary.",
    "Mineral water 02 (250 Ml.) Water bottles Per Person, Per Day, Tissues, Hand Sanitizers, Masks etc. in vehicle during the tour.",
  ],
  exclusions: COMMON_EXCLUSIONS,
  itinerary: [
    {
      day: "Day 1",
      title: "Indore → Ujjain by Road – Sacred Beginnings",
      body:
        "Arrival Indore – Ujjain by Road (55 Kms & 1.5 Hours) – Tour Begins\n" +
        "Upon arrival at Indore airport, you will be warmly welcomed by our company representative and driven to Ujjain, “The Kingdom of Mahakaal.” Upon arrival in Ujjain, transfer to the hotel and check‑in at the hotels.\n\n" +
        "Begin your sightseeing tour with a visit to the historic Sandipani Ashram, followed by the serene Mangal Nath Temple. Continue to the famous Kaal Bhairav Temple, renowned for its unique ritual of offering liquor to the deity.\n\n" +
        "Later, explore the spiritual ambiance and beautiful heritage of the city before visiting the sacred Ram Ghat, situated on the banks of the holy Shipra River. Thereafter, visit the revered Harsiddhi Mata Temple, known for its divine atmosphere and magnificent architecture.\n\n" +
        "In the evening, experience the grandeur of the newly developed Mahakaal Corridor, followed by VVIP Darshan at Shri Mahakaleshwar Temple near the Garbh Grah Gate. Witness the divine Sandhya Aarti experience before returning to the hotel. Overnight stay at Ujjain.\n\nMeals NA",
    },
    {
      day: "Day 2",
      title: "Ujjain → Omkareshwar → Indore by Helicopter + Indore Evening",
      body:
        "Ujjain - Omkareshwar - Indore by air\n" +
        "Morning after breakfast check‑out from the hotel.\n\n" +
        "10:30 AM Departure from Police Line (Ujjain) Helipad\n" +
        "11:30 AM Arrival at Mandhata (Omkareshwar) Helipad\n" +
        "11:35 AM Briefing by our ground staff followed by transfer to Shri Omkareshwar Jyotirlinga Temple for darshan\n" +
        "11:55 AM – 01:40 PM Experience VVIP Darshan at Shri Omkar Mandhata Jyotirlinga Temple\n" +
        "01:50 PM Departure from Shri Omkareshwar Jyotirlinga Temple for Mandhata Helipad\n" +
        "02:20 PM Arrival at Bicholi (Indore) Helipad\n\n" +
        "Transfer to Indore check‑in at the hotel relax. In the evening, visit the vibrant 56 Dukaan Street, known for its lively atmosphere, local shopping, and popular eateries. Later, explore the iconic Sarafa Food Bazaar (Optional) and enjoy Indore’s famous street food delicacies amidst its colorful night‑time ambiance. After the visits, return to the hotel. Overnight stay at Indore.\n\nMeals: Breakfast",
    },
    {
      day: "Day 3",
      title: "Indore Heritage & Departure",
      body:
        "Departure Indore - TOUR END\n" +
        "Morning after breakfast check‑out from the hotel proceed for exploration of Indore's cultural and historical treasures, beginning with the majestic Rajwada and Lal Bagh Palace (Close on Monday). Admire the dazzling mirror work at Kanch Mandir and pay homage at Bada Ganpati Temple and Khajrana Ganesh Temple. Marvel at the architectural splendors of Boliya and Krishna Pura Chhatris, epitomizing the city's rich heritage.\n\n" +
        "After visit in time transfer to airport to board flight for onward journey.\n\nMeals: Breakfast",
    },
  ],
  pricing: [
    {
      hotelCategory: "4 Star & Best Available Hotel",
      variants: [
        { vehicle: "AC Sedan Car", pax: 2, cost: 76000 },
        { vehicle: "Innova Crysta", pax: 4, cost: 71000 },
        { vehicle: "Tempo Traveller", pax: 6, cost: 70300 },
      ],
    },
  ],
  facts: {
    transportation:
      "Various modes of transportation are available for this trip, including AC sedans / Innova Crysta and large coaches, catering to different group sizes.",
    accommodation:
      "Accommodation options on this trip range from excellent budget hotels to luxury hotels, providing choices to suit different preferences and budgets.",
    weather:
      "July and August bring pleasant monsoon weather to Indore, Ujjain, Omkareshwar, and Maheshwar, with temperatures between 23°C–30°C, lush greenery, and refreshing rainfall creating a perfect spiritual and scenic travel experience.",
    nearestAirport: "Devi Ahilyabai Holkar Airport, Indore",
    nearestRailway: "Indore Railway Station / Ujjain Railway Station",
  },
  notes: COMMON_NOTES,
  category: "Spiritual & Heritage",
  isPopular: true,
  isLuxury: true,
  onlyGroup: false,
};

// Final export array
export const sawanPackages: SawanPackage[] = [
  mahakaalBlessings,
  divineJyotirlinga,
  jyotirlingaMonsoonEscape,
  heliExperience,
  heliSpiritual,
  heliDivine,
];

export const sawanHeroImage =
  "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1920&q=80";
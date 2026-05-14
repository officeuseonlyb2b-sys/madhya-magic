// Blog content for the Travel Insights section and dedicated blog pages.
// Each `content` is an array of section blocks rendered by BlogDetail.

export type BlogSection =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export interface Blog {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  image: string;
  date: string; // display date e.g. "MAY 2026"
  publishedAt: string; // ISO date for SEO
  readTime: string;
  excerpt: string;
  metaDescription: string;
  content: BlogSection[];
}

export const blogs: Blog[] = [
  {
    slug: "explore-gwalior-city-of-music-heritage",
    shortTitle: "Explore Gwalior",
    title:
      "Explore Gwalior – The Timeless City of Music, Heritage & Royal Grandeur",
    description:
      "Discover the cultural soul of Madhya Pradesh through Gwalior's mighty fort, royal palaces and timeless music.",
    excerpt:
      "Where every monument tells a story and every melody carries history — discover the City of Music.",
    metaDescription:
      "Explore Gwalior — the City of Music. A complete travel guide to Gwalior Fort, Jai Vilas Palace, Tansen heritage, sacred temples and authentic local flavors of Madhya Pradesh.",
    category: "Heritage",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",
    date: "MAY 2026",
    publishedAt: "2026-05-02",
    readTime: "8 min read",
    content: [
      { type: "heading", text: "Discover the Cultural Soul of Madhya Pradesh" },
      {
        type: "paragraph",
        text: "Welcome to Gwalior — a city where every monument tells a story, every melody carries history, and every street reflects the grandeur of India's royal past. Known as the “Gibraltar of India” for its mighty hilltop fort and celebrated worldwide as the “City of Music,” Gwalior is one of Madhya Pradesh's most extraordinary cultural destinations.",
      },
      {
        type: "paragraph",
        text: "From majestic forts and royal palaces to timeless music, vibrant bazaars, handcrafted artistry, spiritual landmarks and authentic local flavors, Gwalior offers an experience that goes far beyond sightseeing. It is a destination where heritage lives in everyday life.",
      },
      {
        type: "paragraph",
        text: "Deeply connected with the legendary musician Tansen and the royal legacy of the Scindia dynasty, the city beautifully blends history, culture, architecture, art and tradition into one unforgettable journey.",
      },
      { type: "heading", text: "The Magnificent Gwalior Fort – Pride of the City" },
      {
        type: "paragraph",
        text: "Standing proudly above the city skyline, the iconic Gwalior Fort is one of India's most spectacular hill forts. Often called the “Pearl Among Fortresses,” the fort reflects centuries of royal history, bravery and architectural brilliance. Its massive sandstone walls, intricate blue tile work, ancient temples, royal palaces and breathtaking panoramic views create an unforgettable experience for travelers.",
      },
      {
        type: "list",
        items: [
          "Man Singh Palace",
          "Teli Ka Mandir",
          "Sas Bahu Temple",
          "Gurudwara Data Bandi Chhod Sahib",
          "Ancient Jain rock-cut sculptures",
        ],
      },
      { type: "heading", text: "Gwalior – The City of Music" },
      {
        type: "paragraph",
        text: "Music flows through the soul of Gwalior. The city is globally known for its contribution to Indian classical music and proudly carries the legacy of the legendary musician Tansen. The world-famous Tansen Music Festival celebrates this extraordinary heritage, attracting musicians and music lovers from across the country.",
      },
      { type: "heading", text: "Royal Heritage & the Scindia Legacy" },
      {
        type: "paragraph",
        text: "The royal charm of Gwalior beautifully reflects the legacy of the Scindia dynasty. One of the finest examples is the magnificent Jai Vilas Palace, known for its royal interiors, European-inspired architecture, vintage collections and grand chandeliers. Gwalior is also famous for its handcrafted carpets, a traditional art form promoted during the Scindia era.",
      },
      { type: "heading", text: "Spiritual Experiences & Sacred Landmarks" },
      {
        type: "paragraph",
        text: "Beyond forts and palaces, Gwalior offers peaceful spiritual experiences through its ancient temples and sacred sites.",
      },
      {
        type: "list",
        items: [
          "Sun Temple",
          "Gopachal Parvat",
          "Gurudwara Data Bandi Chhod Sahib",
          "Historic temples inside Gwalior Fort",
        ],
      },
      { type: "heading", text: "Taste the Authentic Flavors of Gwalior" },
      {
        type: "paragraph",
        text: "No journey to Gwalior is complete without experiencing its rich food culture — from the legendary laddoos of Bahadura Sweets to traditional kachori, samosa, bedai with aloo sabzi, poha and jalebi.",
      },
      { type: "heading", text: "Best Time to Visit" },
      {
        type: "paragraph",
        text: "The ideal time to explore Gwalior is between October and March, when the weather remains pleasant for sightseeing, cultural tours and heritage experiences. Winter also brings cultural festivals and vibrant local celebrations.",
      },
      { type: "heading", text: "Experience the Timeless Spirit of Gwalior" },
      {
        type: "paragraph",
        text: "From the majestic Gwalior Fort and royal palaces to soulful music, handcrafted artistry, spiritual landmarks, colorful markets and authentic local flavors, Gwalior beautifully captures the true essence of Madhya Pradesh tourism.",
      },
    ],
  },
  {
    slug: "orchha-spirituality-heritage",
    shortTitle: "Orchha",
    title: "Orchha – A Sacred Blend of Spirituality & Heritage",
    description:
      "Discover the timeless soul of Madhya Pradesh on the peaceful banks of the Betwa River.",
    excerpt:
      "A timeless town where palaces, temples and the Betwa River keep the Bundela legacy alive.",
    metaDescription:
      "Travel guide to Orchha — Ram Raja Temple, Orchha Fort, Jahangir Mahal, Betwa River cenotaphs and the Bundeli culture of Madhya Pradesh.",
    category: "Spiritual",
    image:
      "https://images.unsplash.com/photo-1582550945154-66ba8db83c1d?q=80&w=1600&auto=format&fit=crop",
    date: "MAY 2026",
    publishedAt: "2026-05-05",
    readTime: "7 min read",
    content: [
      { type: "heading", text: "Discover the Timeless Soul of Madhya Pradesh" },
      {
        type: "paragraph",
        text: "Nestled on the peaceful banks of the Betwa River, Orchha is a destination where spirituality, royal history, timeless architecture and natural beauty come together beautifully. Known for its sacred connection with Raja Ram and its magnificent Bundela heritage, Orchha offers travelers an experience filled with peace, culture and devotion.",
      },
      { type: "heading", text: "The Sacred Land of Raja Ram" },
      {
        type: "paragraph",
        text: "At the heart of Orchha lies the famous Ram Raja Temple, one of the only places in India where Lord Ram is worshipped as a king. Even today, royal honors and ceremonial guards are offered to Raja Ram, creating a spiritual experience unlike anywhere else.",
      },
      { type: "heading", text: "A Town Where History Still Lives" },
      {
        type: "paragraph",
        text: "Walking through Orchha feels like stepping into a royal chapter of India's history. The magnificent forts, temples, cenotaphs and palaces beautifully showcase the grandeur of the Bundela dynasty.",
      },
      {
        type: "list",
        items: [
          "Orchha Fort Complex",
          "Jahangir Mahal",
          "Raja Mahal",
          "Chaturbhuj Temple",
          "Royal Cenotaphs along the Betwa River",
        ],
      },
      { type: "heading", text: "The Beauty of the Betwa River" },
      {
        type: "paragraph",
        text: "Flowing gracefully beside the town, the Betwa River adds magical charm to Orchha's landscape. The peaceful riverside atmosphere, historic cenotaphs and golden sunsets create breathtaking experiences for travelers and photographers.",
      },
      { type: "heading", text: "Spirituality, Art & Bundeli Culture" },
      {
        type: "paragraph",
        text: "Orchha beautifully preserves the traditions of Bundeli culture through its architecture, festivals, local lifestyle and spiritual atmosphere. The heritage streets, local markets and devotional celebrations allow travelers to experience the authentic spirit of Madhya Pradesh.",
      },
      { type: "heading", text: "Taste the Authentic Flavors of Orchha" },
      {
        type: "list",
        items: [
          "Bundeli cuisine",
          "Kachori & Samosa",
          "Poha & Jalebi",
          "Traditional sweets",
          "Local tea experiences near heritage streets",
        ],
      },
      { type: "heading", text: "Best Time to Visit Orchha" },
      {
        type: "paragraph",
        text: "The ideal time to explore Orchha is between October and March, when the weather remains pleasant for sightseeing, temple visits, heritage walks and riverside experiences.",
      },
    ],
  },
  {
    slug: "khajuraho-art-heritage-spiritual-beauty",
    shortTitle: "Khajuraho",
    title: "Khajuraho – The Timeless Wonder of Art, Heritage & Spiritual Beauty",
    description:
      "A UNESCO World Heritage site where every sculpture tells a timeless story.",
    excerpt:
      "Step into an open-air museum of Chandela artistry, where spirituality meets sublime craftsmanship.",
    metaDescription:
      "Khajuraho travel guide — UNESCO World Heritage temples, Kandariya Mahadev, Lakshmana Temple, Khajuraho Dance Festival and the artistic soul of Madhya Pradesh.",
    category: "Heritage",
    image:
      "https://images.unsplash.com/photo-1609947017136-3b50e6c12fb5?q=80&w=1600&auto=format&fit=crop",
    date: "MAY 2026",
    publishedAt: "2026-05-08",
    readTime: "8 min read",
    content: [
      { type: "heading", text: "Discover the Cultural Soul of Madhya Pradesh" },
      {
        type: "paragraph",
        text: "In the heart of Madhya Pradesh lies Khajuraho — a destination where history, spirituality, art and architecture come together in the most breathtaking way. Famous across the world for the magnificent Khajuraho Group of Monuments, this UNESCO World Heritage Site is one of India's finest examples of artistic brilliance and cultural heritage.",
      },
      {
        type: "paragraph",
        text: "Built by the Chandela dynasty between the 9th and 12th centuries, the temples of Khajuraho continue to amaze travelers with their intricate carvings, stunning architecture and timeless beauty.",
      },
      { type: "heading", text: "The Magnificent Khajuraho Group of Monuments" },
      {
        type: "paragraph",
        text: "Originally built as a complex of around 85 temples, nearly 25 temples still stand today. The temples are divided into Western, Eastern and Southern Groups.",
      },
      {
        type: "list",
        items: [
          "Kandariya Mahadev Temple",
          "Lakshmana Temple",
          "Vishwanath Temple",
          "Chaturbhuj Temple",
        ],
      },
      { type: "heading", text: "A UNESCO World Heritage Treasure" },
      {
        type: "paragraph",
        text: "Recognized as a UNESCO World Heritage Site, Khajuraho stands as one of India's greatest cultural treasures. The temples are admired not only for their beauty but also for their advanced architectural planning and symbolic artistry.",
      },
      { type: "heading", text: "Khajuraho Dance Festival & Cultural Heritage" },
      {
        type: "paragraph",
        text: "Khajuraho is also known for celebrating India's classical art through the world-famous Khajuraho Dance Festival. Held against the stunning backdrop of illuminated temples, the festival brings together classical dancers from across the country.",
      },
      { type: "heading", text: "Local Experiences & Authentic Flavors" },
      {
        type: "list",
        items: [
          "Traditional handicrafts",
          "Local artwork and souvenirs",
          "Bundeli cuisine",
          "Kachori & Samosa",
          "Poha & Jalebi",
          "Traditional Indian sweets",
        ],
      },
      { type: "heading", text: "Best Time to Visit Khajuraho" },
      {
        type: "paragraph",
        text: "The ideal time to visit Khajuraho is between October and March when the weather remains pleasant for sightseeing, photography, temple exploration and cultural experiences.",
      },
    ],
  },
  {
    slug: "ujjain-mahakal-simhastha-kumbh",
    shortTitle: "Ujjain",
    title: "Ujjain – The Eternal City of Mahakal & Simhastha Kumbh",
    description:
      "Discover the divine soul of Madhya Pradesh on the sacred banks of the Shipra River.",
    excerpt:
      "Home to Mahakaleshwar Jyotirlinga and the grand Simhastha Kumbh — India's eternal city of devotion.",
    metaDescription:
      "Ujjain travel guide — Mahakaleshwar Jyotirlinga, Bhasma Aarti, Mahakal Lok Corridor, Simhastha Kumbh Mela and ancient temples on the Shipra River.",
    category: "Spiritual",
    image:
      "https://images.unsplash.com/photo-1590516948426-c7c1f5f1aa3a?q=80&w=1600&auto=format&fit=crop",
    date: "MAY 2026",
    publishedAt: "2026-05-10",
    readTime: "9 min read",
    content: [
      { type: "heading", text: "Discover the Divine Soul of Madhya Pradesh" },
      {
        type: "paragraph",
        text: "Situated on the sacred banks of the Shipra River, Ujjain is one of India's oldest and holiest cities. Known as the City of Mahakal and the Temple City of India, Ujjain is a timeless destination where spirituality, devotion, culture and ancient traditions come alive in every corner.",
      },
      {
        type: "paragraph",
        text: "Home to the revered Mahakaleshwar Jyotirlinga — one of the 12 sacred Jyotirlingas of Lord Shiva and the only Dakshinmukhi Jyotirlinga in the world — Ujjain attracts millions of devotees and spiritual seekers from across the globe.",
      },
      { type: "heading", text: "Simhastha Kumbh – The Sacred Gathering of Faith" },
      {
        type: "paragraph",
        text: "Held once every 12 years on the banks of the holy Shipra River, the Simhastha Kumbh Mela is one of the largest spiritual gatherings in the world.",
      },
      {
        type: "list",
        items: [
          "Naga Sadhus",
          "Sacred processions",
          "Grand aartis",
          "Spiritual gatherings",
          "Devotional chants",
        ],
      },
      { type: "heading", text: "Mahakaleshwar Jyotirlinga – The Divine Presence of Mahakal" },
      {
        type: "paragraph",
        text: "At the heart of the city lies the sacred Mahakaleshwar Temple. The world-famous Bhasma Aarti, performed before sunrise, is among the most spiritual rituals in the country.",
      },
      { type: "heading", text: "Mahakal Lok Corridor – A Divine Spiritual Experience" },
      {
        type: "paragraph",
        text: "Stretching over 900 meters around the historic Rudrasagar Lake, the Mahakal Lok Corridor features 108 majestic pillars, around 200 sculptures and statues, and murals depicting stories of Lord Shiva.",
      },
      { type: "heading", text: "Ancient Temples & Sacred Heritage" },
      {
        type: "list",
        items: [
          "Kal Bhairav Temple",
          "Harsiddhi Temple",
          "Bada Ganapati Temple",
          "Mangalnath Temple",
          "Ram Ghat",
          "Sandipani Ashram",
        ],
      },
      { type: "heading", text: "Ved Shala – The Greenwich of India" },
      {
        type: "paragraph",
        text: "Ujjain is also known as the Greenwich of India because the ancient prime meridian was believed to pass through the city. The historic Ved Shala Observatory, built in 1725 by Maharaja Sawai Jai Singh II, reflects Ujjain's connection with astronomy.",
      },
      { type: "heading", text: "Best Time to Visit Ujjain" },
      {
        type: "list",
        items: [
          "Mahashivratri",
          "Sawan Mondays",
          "Nag Panchami",
          "Kartik Mela",
          "Simhastha Kumbh Mela",
        ],
      },
    ],
  },
  {
    slug: "datia-eternal-city-shakti-devotion",
    shortTitle: "Datia",
    title: "Datia – The Eternal City of Shakti & Devotion",
    description:
      "A spiritual escape into the heart of Madhya Pradesh — temples, palaces and timeless faith.",
    excerpt:
      "Sacred Shakti Peeths, Bundela palaces and timeless faith in the spiritual heart of MP.",
    metaDescription:
      "Datia travel guide — Shree Pitambara Peeth, Maa Baglamukhi Temple, Datia Palace and the spiritual heritage of Madhya Pradesh.",
    category: "Spiritual",
    image:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop",
    date: "MAY 2026",
    publishedAt: "2026-05-12",
    readTime: "6 min read",
    content: [
      { type: "heading", text: "Discover the Sacred Soul of Datia" },
      {
        type: "paragraph",
        text: "Nestled in the heart of Madhya Pradesh, Datia is a timeless destination where spirituality, devotion, royal heritage and ancient traditions come together beautifully. Known for its sacred temples, peaceful atmosphere and historic architecture, Datia offers travelers an experience filled with faith, culture and serenity.",
      },
      { type: "heading", text: "Shree Pitambara Peeth – The Spiritual Heart of Datia" },
      {
        type: "paragraph",
        text: "Dedicated to Maa Pitambara and Maa Baglamukhi, the temple attracts thousands of devotees seeking blessings, positivity, protection and spiritual strength.",
      },
      {
        type: "list",
        items: [
          "Haridra Sarovar",
          "Dhumavati Temple",
          "Ancient sacred shrines",
        ],
      },
      { type: "heading", text: "Maa Baglamukhi Temple – The Divine Power of Shakti" },
      {
        type: "paragraph",
        text: "Datia is especially known for the sacred shrine of Maa Baglamukhi, one of the most powerful forms of Goddess Shakti. Devotees believe the goddess blesses her followers with courage, protection, victory and spiritual power.",
      },
      { type: "heading", text: "Datia Palace – A Royal Architectural Wonder" },
      {
        type: "paragraph",
        text: "Built centuries ago without using iron or wood, the Datia Palace reflects grand courtyards, artistic balconies, intricate carvings and timeless elegance. A masterpiece of Bundela architecture and royal craftsmanship.",
      },
      { type: "heading", text: "Ancient Temples & Sacred Heritage" },
      {
        type: "list",
        items: [
          "Vankhandeshwar Temple",
          "Shree Pitambara Peeth",
          "Maa Baglamukhi Temple",
          "Dhumavati Temple",
          "Historic temples and sacred ghats",
        ],
      },
      { type: "heading", text: "Local Flavors of Datia" },
      {
        type: "list",
        items: [
          "Traditional sweets",
          "Poha & Jalebi",
          "Kachori & Samosa",
          "Local tea and snacks",
          "Authentic vegetarian cuisine",
        ],
      },
      { type: "heading", text: "Best Time to Visit Datia" },
      {
        type: "paragraph",
        text: "The ideal time to visit Datia is between October and March, when the weather remains pleasant for temple visits, sightseeing, spiritual exploration and heritage experiences.",
      },
    ],
  },
  {
    slug: "jabalpur-marble-rocks-sacred-narmada",
    shortTitle: "Jabalpur",
    title: "Jabalpur – The Timeless Land of Marble Rocks & Sacred Narmada",
    description:
      "Where nature, waterfalls and spiritual beauty come alive along the sacred Narmada River.",
    excerpt:
      "From Bhedaghat's marble cliffs to the roaring Dhuandhar Falls — nature at its most cinematic.",
    metaDescription:
      "Jabalpur travel guide — Marble Rocks of Bhedaghat, Dhuandhar Falls, Chausath Yogini Temple and the sacred Narmada River of Madhya Pradesh.",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1600&auto=format&fit=crop",
    date: "MAY 2026",
    publishedAt: "2026-05-14",
    readTime: "7 min read",
    content: [
      { type: "heading", text: "Where Nature, Waterfalls & Spiritual Beauty Come Alive" },
      {
        type: "paragraph",
        text: "Nestled along the sacred Narmada River, Jabalpur is one of Madhya Pradesh's most breathtaking destinations. Known as the Marble City of India, the city is famous for its majestic marble cliffs, roaring waterfalls, peaceful ghats and timeless natural beauty.",
      },
      { type: "heading", text: "Bhedaghat – The Marble Wonder of India" },
      {
        type: "paragraph",
        text: "One of Jabalpur's most iconic attractions is the breathtaking Marble Rocks of Bhedaghat, where the Narmada River flows gracefully between towering white marble cliffs. A peaceful boat ride through the marble canyon offers mesmerizing views, especially during sunset and moonlight.",
      },
      { type: "heading", text: "Dhuandhar Falls – The Roaring Beauty of the Narmada" },
      {
        type: "paragraph",
        text: "As the Narmada River rushes through narrow marble rocks, the waterfall creates a smoky mist effect, giving it the name “Dhuandhar,” meaning “river of smoke.” The thunderous sound, scenic viewpoints and cable car rides make this destination truly magical.",
      },
      { type: "heading", text: "The Sacred Spirit of the Narmada River" },
      {
        type: "paragraph",
        text: "Peaceful ghats, evening aartis, floating diyas and the calm riverside atmosphere create moments of serenity and spiritual connection for visitors.",
      },
      { type: "heading", text: "Chausath Yogini Temple – Heritage & Spirituality" },
      {
        type: "paragraph",
        text: "Perched on a hilltop near Bhedaghat, the ancient Chausath Yogini Temple is dedicated to Goddess Durga and the 64 Yoginis, offering panoramic views of the Narmada River and surrounding marble landscapes.",
      },
      { type: "heading", text: "Nature, Adventure & Local Experiences" },
      {
        type: "list",
        items: [
          "Riverside boating",
          "Cable car rides",
          "Nature photography",
          "Marble handicraft shopping",
          "Peaceful riverside walks",
        ],
      },
      { type: "heading", text: "Best Time to Visit Jabalpur" },
      {
        type: "paragraph",
        text: "The ideal time to visit Jabalpur is between October and March, when the weather remains pleasant for sightseeing, boating and waterfall visits. During monsoon, the beauty of Bhedaghat and Dhuandhar Falls becomes even more breathtaking.",
      },
    ],
  },
];

export const blogCategories = [
  "All",
  ...Array.from(new Set(blogs.map((b) => b.category))),
];

export const getBlogBySlug = (slug: string) =>
  blogs.find((b) => b.slug === slug);

export const getRelatedBlogs = (slug: string, limit = 3) =>
  blogs.filter((b) => b.slug !== slug).slice(0, limit);

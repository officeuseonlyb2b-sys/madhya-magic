export interface CategoryDestination {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface CategoryActivity {
  title: string;
  image: string;
  description: string;
}

export interface CategoryReel {
  title: string;
  thumbnail: string;
}

export interface CategoryPackage {
  id: string;
  title: string;
  image: string;
  badge: string;
  price: number;
}

export interface CategoryPageData {
  slug: string;
  title: string;
  heroImages: string[];
  destinations: CategoryDestination[];
  activities: CategoryActivity[];
  reels: CategoryReel[];
  packages: CategoryPackage[];
}

export const categoryPages: Record<string, CategoryPageData> = {
  nature: {
    slug: "nature",
    title: "Nature",
    heroImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1600",
    ],
    destinations: [
      { id: "tawa", name: "Tawa", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800", description: "Vast scenic reservoir perfect for boating, fishing, and sunset views." },
      { id: "hanuwantiya", name: "Hanuwantiya", image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=800", description: "MP's premier water sports and adventure island resort." },
      { id: "bhedaghat", name: "Bhedaghat", image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800", description: "Towering marble cliffs with the thundering Dhuandhar Falls." },
      { id: "tamia", name: "Tamia", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800", description: "Hidden hill station with misty valleys and tribal culture." },
      { id: "sailani", name: "Sailani Island", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800", description: "Scenic island offering serene backwaters and untouched nature." },
      { id: "pachmarhi", name: "Pachmarhi", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", description: "Queen of Satpura — MP's only hill station with waterfalls and caves." },
    ],
    activities: [
      { title: "River Rafting", image: "https://images.unsplash.com/photo-1530866424003-97ca26ea06e0?w=600", description: "Thrilling rapids on the Narmada and Betwa rivers." },
      { title: "Trekking", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600", description: "Explore misty trails through Satpura and Pachmarhi." },
      { title: "Boating", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600", description: "Peaceful boating on Tawa and Hanuwantiya reservoirs." },
      { title: "Camping", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600", description: "Under the stars in the heart of dense forests." },
    ],
    reels: [
      { title: "Bhedaghat Marble Rocks", thumbnail: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600" },
      { title: "Pachmarhi Waterfalls", thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600" },
      { title: "Tawa Sunset", thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600" },
      { title: "Tamia Valley Mist", thumbnail: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600" },
      { title: "Sailani Backwaters", thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600" },
      { title: "Hanuwantiya Adventure", thumbnail: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=600" },
    ],
    packages: [
      { id: "nature-1", title: "Pachmarhi Weekend Getaway", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", badge: "3 Days / 2 Nights", price: 8999 },
      { id: "nature-2", title: "Bhedaghat & Marble Rocks Tour", image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800", badge: "Best Seller", price: 6499 },
      { id: "nature-3", title: "Tawa Lake & Forest Retreat", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800", badge: "2 Days / 1 Night", price: 4999 },
    ],
  },
  heritage: {
    slug: "heritage",
    title: "Heritage",
    heroImages: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1600",
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=1600",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600",
    ],
    destinations: [
      { id: "gwalior", name: "Gwalior Fort", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800", description: "One of India's most impregnable forts with stunning palaces." },
      { id: "orchha", name: "Orchha", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800", description: "Medieval Bundela kingdom with grand palaces and cenotaphs." },
      { id: "khajuraho", name: "Khajuraho", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800", description: "UNESCO World Heritage temples with exquisite sculptures." },
      { id: "sanchi", name: "Sanchi Stupa", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800", description: "Ancient Buddhist monuments and UNESCO World Heritage Site." },
      { id: "mandu", name: "Mandu", image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800", description: "Romantic ruins of Jahaz Mahal and Rani Roopmati's Pavilion." },
      { id: "burhanpur", name: "Burhanpur", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800", description: "Mughal-era city where Shah Jahan conceived the Taj Mahal idea." },
    ],
    activities: [
      { title: "Heritage Walk", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600", description: "Guided walks through centuries of Indian history." },
      { title: "Photography Tour", image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600", description: "Capture the magnificent architecture and sculptures." },
      { title: "Sound & Light Show", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600", description: "Immersive light shows at historic forts and palaces." },
      { title: "Museum Exploration", image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=600", description: "Discover ancient artifacts and cultural treasures." },
    ],
    reels: [
      { title: "Gwalior Fort Sunrise", thumbnail: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600" },
      { title: "Khajuraho Temples", thumbnail: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600" },
      { title: "Orchha Cenotaphs", thumbnail: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600" },
      { title: "Mandu Monsoon Magic", thumbnail: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=600" },
      { title: "Sanchi at Dawn", thumbnail: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600" },
      { title: "Burhanpur Mughal Trail", thumbnail: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600" },
    ],
    packages: [
      { id: "heritage-1", title: "Khajuraho & Orchha Explorer", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800", badge: "4 Days / 3 Nights", price: 12999 },
      { id: "heritage-2", title: "Gwalior Royal Heritage Tour", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800", badge: "Best Seller", price: 9499 },
      { id: "heritage-3", title: "Mandu Weekend Getaway", image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800", badge: "3 Days / 2 Nights", price: 7999 },
    ],
  },
  spiritual: {
    slug: "spiritual",
    title: "Spiritual",
    heroImages: [
      "https://images.unsplash.com/photo-1609947017136-9dbb066e7888?w=1600",
      "https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=1600",
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1600",
      "https://images.unsplash.com/photo-1545126178-862cdb469409?w=1600",
    ],
    destinations: [
      { id: "mahakaleshwar", name: "Mahakaleshwar Ujjain", image: "https://images.unsplash.com/photo-1609947017136-9dbb066e7888?w=800", description: "One of the 12 Jyotirlingas, the sacred Mahakaleshwar temple." },
      { id: "omkareshwar", name: "Omkareshwar", image: "https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=800", description: "Sacred Om-shaped island with one of India's 12 Jyotirlingas." },
      { id: "maheshwar", name: "Maheshwar", image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800", description: "Queen Ahilya Bai's capital on the Narmada river." },
      { id: "chitrakoot", name: "Chitrakoot", image: "https://images.unsplash.com/photo-1545126178-862cdb469409?w=800", description: "Where Lord Ram spent 11 years of exile." },
      { id: "amarkantak", name: "Amarkantak", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800", description: "Origin of the holy Narmada river with ancient temples." },
      { id: "bageshwar-dham", name: "Bageshwar Dham", image: "https://images.unsplash.com/photo-1609947017136-9dbb066e7888?w=800", description: "Revered spiritual destination with miraculous blessings." },
    ],
    activities: [
      { title: "Temple Darshan", image: "https://images.unsplash.com/photo-1609947017136-9dbb066e7888?w=600", description: "Visit ancient and sacred temples of Madhya Pradesh." },
      { title: "Narmada Aarti", image: "https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=600", description: "Experience the divine evening aarti on the Narmada." },
      { title: "Meditation Retreat", image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600", description: "Find inner peace at serene spiritual centers." },
      { title: "Pilgrimage Walk", image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600", description: "Sacred walking trails connecting ancient temples." },
    ],
    reels: [
      { title: "Mahakaleshwar Aarti", thumbnail: "https://images.unsplash.com/photo-1609947017136-9dbb066e7888?w=600" },
      { title: "Omkareshwar Island", thumbnail: "https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=600" },
      { title: "Narmada Sunrise", thumbnail: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600" },
      { title: "Chitrakoot Serenity", thumbnail: "https://images.unsplash.com/photo-1545126178-862cdb469409?w=600" },
      { title: "Amarkantak Origins", thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600" },
      { title: "Maheshwar Ghats", thumbnail: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600" },
    ],
    packages: [
      { id: "spiritual-1", title: "Ujjain & Omkareshwar Pilgrimage", image: "https://images.unsplash.com/photo-1609947017136-9dbb066e7888?w=800", badge: "3 Days / 2 Nights", price: 7999 },
      { id: "spiritual-2", title: "Narmada Parikrama Tour", image: "https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=800", badge: "Best Seller", price: 11499 },
      { id: "spiritual-3", title: "Chitrakoot Spiritual Retreat", image: "https://images.unsplash.com/photo-1545126178-862cdb469409?w=800", badge: "4 Days / 3 Nights", price: 9999 },
    ],
  },
  wildlife: {
    slug: "wildlife",
    title: "Wildlife",
    heroImages: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600",
      "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=1600",
      "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=1600",
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1600",
    ],
    destinations: [
      { id: "kanha", name: "Kanha National Park", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800", description: "India's finest tiger reserve, inspiration for The Jungle Book." },
      { id: "bandhavgarh", name: "Bandhavgarh National Park", image: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800", description: "Highest density of Royal Bengal Tigers in India." },
      { id: "pench", name: "Pench National Park", image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=800", description: "Famous for tiger sightings and teak forests." },
      { id: "satpura", name: "Satpura Tiger Reserve", image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800", description: "Offbeat destination with walking and boat safaris." },
      { id: "panna", name: "Panna National Park", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800", description: "Tiger reintroduction success story with Ken river gorge." },
      { id: "kuno", name: "Kuno National Park", image: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800", description: "India's cheetah reintroduction site with rich biodiversity." },
    ],
    activities: [
      { title: "Jungle Safari", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600", description: "Thrilling jeep safaris to spot tigers and leopards." },
      { title: "Bird Watching", image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=600", description: "Over 300 bird species across MP's forests." },
      { title: "Night Safari", image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600", description: "Experience the jungle after dark with expert guides." },
      { title: "Nature Walk", image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=600", description: "Guided walks through dense sal and teak forests." },
    ],
    reels: [
      { title: "Tiger Encounter Kanha", thumbnail: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600" },
      { title: "Bandhavgarh Dawn Safari", thumbnail: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=600" },
      { title: "Pench Jungle Trail", thumbnail: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=600" },
      { title: "Satpura Boat Safari", thumbnail: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600" },
      { title: "Kuno Cheetah Sighting", thumbnail: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=600" },
      { title: "Panna River Gorge", thumbnail: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600" },
    ],
    packages: [
      { id: "wildlife-1", title: "Kanha Tiger Safari", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800", badge: "3 Days / 2 Nights", price: 14999 },
      { id: "wildlife-2", title: "Bandhavgarh Wildlife Explorer", image: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800", badge: "Best Seller", price: 12499 },
      { id: "wildlife-3", title: "Pench & Satpura Combo Tour", image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=800", badge: "5 Days / 4 Nights", price: 19999 },
    ],
  },
};

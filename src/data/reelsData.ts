import type { MapCategory } from "@/data/mapDestinations";

export interface ReelItem {
  id: string;
  title: string;
  location: string;
  category: MapCategory;
  thumbnail: string;
  videoUrl: string;
}

// Using high-quality thumbnail images; videoUrl placeholder for future
export const reelsData: ReelItem[] = [
  // Wildlife
  { id: "reel-1", title: "Tiger Encounter", location: "Bandhavgarh", category: "Wildlife", thumbnail: "https://images.unsplash.com/photo-1561731216-c3a4d514d450?w=400&h=700&fit=crop", videoUrl: "" },
  { id: "reel-2", title: "Leopard in the Wild", location: "Satpura", category: "Wildlife", thumbnail: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=400&h=700&fit=crop", videoUrl: "" },
  { id: "reel-3", title: "Deer at Dawn", location: "Kanha", category: "Wildlife", thumbnail: "https://images.unsplash.com/photo-1484406566174-437a054e23e8?w=400&h=700&fit=crop", videoUrl: "" },
  { id: "reel-4", title: "Bird Paradise", location: "Pench", category: "Wildlife", thumbnail: "https://images.unsplash.com/photo-1555169062-013468b47731?w=400&h=700&fit=crop", videoUrl: "" },

  // Heritage
  { id: "reel-5", title: "Khajuraho Temples", location: "Khajuraho", category: "Heritage", thumbnail: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=400&h=700&fit=crop", videoUrl: "" },
  { id: "reel-6", title: "Gwalior Fort", location: "Gwalior", category: "Heritage", thumbnail: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=700&fit=crop", videoUrl: "" },
  { id: "reel-7", title: "Orchha Palaces", location: "Orchha", category: "Heritage", thumbnail: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=400&h=700&fit=crop", videoUrl: "" },
  { id: "reel-8", title: "Mandu Ruins", location: "Mandu", category: "Heritage", thumbnail: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=700&fit=crop", videoUrl: "" },

  // Spiritual
  { id: "reel-9", title: "Mahakaleshwar Aarti", location: "Ujjain", category: "Spiritual", thumbnail: "https://images.unsplash.com/photo-1609766934272-1e498b4c0088?w=400&h=700&fit=crop", videoUrl: "" },
  { id: "reel-10", title: "Omkareshwar Island", location: "Omkareshwar", category: "Spiritual", thumbnail: "https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=400&h=700&fit=crop", videoUrl: "" },
  { id: "reel-11", title: "Chitrakoot Ghats", location: "Chitrakoot", category: "Spiritual", thumbnail: "https://images.unsplash.com/photo-1564804955922-3f89f1f0b56e?w=400&h=700&fit=crop", videoUrl: "" },
  { id: "reel-12", title: "Temple Bells", location: "Maihar", category: "Spiritual", thumbnail: "https://images.unsplash.com/photo-1606393742498-f0bae984a89b?w=400&h=700&fit=crop", videoUrl: "" },

  // Nature
  { id: "reel-13", title: "Marble Rocks", location: "Bhedaghat", category: "Nature", thumbnail: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=700&fit=crop", videoUrl: "" },
  { id: "reel-14", title: "Pachmarhi Waterfalls", location: "Pachmarhi", category: "Nature", thumbnail: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=700&fit=crop", videoUrl: "" },
  { id: "reel-15", title: "Tawa Lake Sunset", location: "Tawa", category: "Nature", thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=700&fit=crop", videoUrl: "" },
  { id: "reel-16", title: "Patalkot Valley", location: "Patalkot", category: "Nature", thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=700&fit=crop", videoUrl: "" },
];

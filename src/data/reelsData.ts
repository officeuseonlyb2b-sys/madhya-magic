import type { MapCategory } from "@/data/mapDestinations";

export interface ReelItem {
  id: string;
  title: string;
  location: string;
  category: MapCategory;
  thumbnail: string;
  videoUrl: string;
}

export const reelsData: ReelItem[] = [
  { id: "reel-bhopal", title: "City of Lakes", location: "Bhopal", category: "Heritage", thumbnail: "https://images.unsplash.com/photo-1599661046827-dacde6976549?w=400&h=700&fit=crop", videoUrl: "/videos/reels/bhopal.mp4" },
  { id: "reel-orchha", title: "Orchha Palaces", location: "Orchha", category: "Heritage", thumbnail: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=400&h=700&fit=crop", videoUrl: "/videos/reels/orchha.mp4" },
  { id: "reel-bhedaghat", title: "Marble Rocks", location: "Bhedaghat", category: "Nature", thumbnail: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=700&fit=crop", videoUrl: "/videos/reels/bhedaghat.mp4" },
  { id: "reel-gwalior", title: "Gwalior Fort", location: "Gwalior", category: "Heritage", thumbnail: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=700&fit=crop", videoUrl: "/videos/reels/gwalior.mp4" },
  { id: "reel-khajuraho", title: "Khajuraho Temples", location: "Khajuraho", category: "Heritage", thumbnail: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=400&h=700&fit=crop", videoUrl: "/videos/reels/khajuraho.mp4" },
  { id: "reel-maheshwar", title: "Maheshwar Ghats", location: "Maheshwar", category: "Spiritual", thumbnail: "https://images.unsplash.com/photo-1609766934272-1e498b4c0088?w=400&h=700&fit=crop", videoUrl: "/videos/reels/maheshwar.mp4" },
  { id: "reel-omkareshwar", title: "Omkareshwar Island", location: "Omkareshwar", category: "Spiritual", thumbnail: "https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=400&h=700&fit=crop", videoUrl: "/videos/reels/omkareshwar.mp4" },
  { id: "reel-pachmarhi", title: "Pachmarhi Hills", location: "Pachmarhi", category: "Nature", thumbnail: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=700&fit=crop", videoUrl: "/videos/reels/pachmarhi.mp4" },
  { id: "reel-panna", title: "Panna National Park", location: "Panna", category: "Wildlife", thumbnail: "https://images.unsplash.com/photo-1561731216-c3a4d514d450?w=400&h=700&fit=crop", videoUrl: "/videos/reels/panna.mp4" },
  { id: "reel-sanchi", title: "Sanchi Stupa", location: "Sanchi", category: "Heritage", thumbnail: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=700&fit=crop", videoUrl: "/videos/reels/sanchi.mp4" },
];

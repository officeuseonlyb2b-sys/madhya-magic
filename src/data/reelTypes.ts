// =============================================================
// Shared Reel types used by activity + experience reels
// =============================================================

export type ReelTag = "nature" | "heritage" | "wildlife" | "spiritual";

export interface ReelItem {
  id: string;
  title: string;
  location: string;
  video: string;
  thumbnail?: string;
  tags: ReelTag[];
  /** optional internal route */
  link?: string;
}

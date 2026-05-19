import type { DestinationDetails } from "@/data/destinationDetails";

export type DestinationContent = Partial<DestinationDetails> & {
  /** Optional override for the hero/background image. */
  heroImage?: string;
};

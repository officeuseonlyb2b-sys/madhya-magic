// Isolated types for Sawan Packages seasonal feature.
// Delete the parent folder src/features/sawan-packages to remove the feature.

export type SawanPackageKind = "normal" | "helicopter";

export interface SawanItineraryDay {
  day: string;
  title: string;
  body: string;
}

export interface SawanPackage {
  id: string;
  kind: SawanPackageKind;
  name: string;
  tagline: string;
  duration: string;
  route: string;
  validity: string;
  badge: string;
  startingPrice: string;
  image: string;
  gallery?: string[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: SawanItineraryDay[];
  description: string;

  // ─── NEW FIELDS (helicopter packages data) ───
  pricing?: {
    hotelCategory: string;
    variants: {
      vehicle: string;
      pax: number;
      cost: number;
    }[];
  }[];

  facts?: {
    transportation: string;
    accommodation: string;
    weather: string;
    nearestAirport: string;
    nearestRailway: string;
  };

  notes?: string[];

  category?: string;        // e.g. "Spiritual", "Spiritual & Heritage"
  isPopular?: boolean;
  isLuxury?: boolean;
  onlyGroup?: boolean;
}
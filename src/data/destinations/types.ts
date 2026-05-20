import type { DestinationDetails, NearbyPlace } from "@/data/destinationDetails";

/**
 * Per-destination override.
 * Every field is optional — unset fields fall back to the generic generator
 * in `src/data/destinationDetails.ts`. Use this file shape (see
 * `bhedaghat.ts` for a complete example) to manually manage a destination:
 *
 *   - overviewParagraphs   → "Overview" section paragraphs
 *   - attractions          → "Top Attractions" cards
 *   - thingsToDo           → "Things to Do" cards
 *   - experiences          → "Experiences & Highlights" cards
 *   - gallery              → "Gallery" images
 *   - travelInfo           → "Travel Information" panel
 *   - duration             → suggested trip duration label
 *   - heroImage            → override the hero background image
 *   - nearbyDestinations   → list of destination IDs to show in "Nearby
 *                            Destinations" (overrides automatic selection)
 *   - relatedPackageTags   → extra search keywords used to match this
 *                            destination against the global packages list
 *                            (e.g. ["kanha", "tiger", "wildlife"])
 */
export type DestinationContent = Partial<DestinationDetails> & {
  heroImage?: string;
  nearbyDestinations?: (string | NearbyPlace)[];
  relatedPackageTags?: string[];
};

import type { DestinationContent } from "./types";

/**
 * Per-destination override.
 * Empty by default — falls back to the generic generator in
 * `src/data/destinationDetails.ts`. Drop content here to fully control
 * this destination's page (see `bhedaghat.ts` for a complete example).
 *
 * Available fields (all optional):
 *   overviewParagraphs, attractions, thingsToDo, experiences, gallery,
 *   travelInfo, duration, heroImage, nearbyDestinations, relatedPackageTags
 */
const burhanpur: DestinationContent = {};

export default burhanpur;

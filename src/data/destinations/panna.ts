import type { DestinationContent } from "./types";

/**
 * Per-destination override stub.
 * Empty overrides fall back to the generic generator in
 * `src/data/destinationDetails.ts` while keeping a dedicated file
 * ready for custom content.
 */
const panna: DestinationContent = {};

export default panna;

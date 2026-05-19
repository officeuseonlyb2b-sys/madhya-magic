// Per-destination content registry.
// To add or edit a destination, just drop / update a file in this folder and
// register it below. Anything not registered will gracefully fall back to the
// generic generator in `destinationDetails.ts`.
import type { DestinationContent } from "./types";
import bhedaghat from "./bhedaghat";
import pachmarhi from "./pachmarhi";
import kanha from "./kanha";

export const destinationRegistry: Record<string, DestinationContent> = {
  bhedaghat,
  pachmarhi,
  kanha,
};

export const getDestinationContent = (id: string): DestinationContent | undefined =>
  destinationRegistry[id];

export type { DestinationContent };

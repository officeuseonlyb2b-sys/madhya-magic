// Per-destination content registry.
// To add or edit a destination, drop / update a file in this folder and
// register it below. Anything not registered falls back to the generic
// generator in `src/data/destinationDetails.ts`.
import type { DestinationContent } from "./types";

import amarkantak from "./amarkantak";
import bandhavgarh from "./bandhavgarh";
import bhedaghat from "./bhedaghat";
import bhopal from "./bhopal";
import chitrakoot from "./chitrakoot";
import gwalior from "./gwalior";
import indore from "./indore";
import jabalpur from "./jabalpur";
import kanha from "./kanha";
import khajuraho from "./khajuraho";
import kuno from "./kuno";
import maheshwar from "./maheshwar";
import mandu from "./mandu";
import mukundpur from "./mukundpur";
import omkareshwar from "./omkareshwar";
import orchha from "./orchha";
import pachmarhi from "./pachmarhi";
import panna from "./panna";
import pench from "./pench";
import satpura from "./satpura";
import ujjain from "./ujjain";

export const destinationRegistry: Record<string, DestinationContent> = {
  amarkantak,
  bandhavgarh,
  bhedaghat,
  bhopal,
  chitrakoot,
  gwalior,
  indore,
  jabalpur,
  kanha,
  khajuraho,
  kuno,
  maheshwar,
  mandu,
  mukundpur,
  omkareshwar,
  orchha,
  pachmarhi,
  panna,
  pench,
  satpura,
  ujjain,
};

export const getDestinationContent = (id: string): DestinationContent | undefined =>
  destinationRegistry[id];

export type { DestinationContent };

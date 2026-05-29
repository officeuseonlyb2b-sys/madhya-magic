// Per-destination content registry.
// To add or edit a destination, drop / update a file in this folder and
// register it below. Anything not registered falls back to the generic
// generator in `src/data/destinationDetails.ts`.
import type { DestinationContent } from "./types";

// Nature
import bhedaghat from "./bhedaghat";
import pachmarhi from "./pachmarhi";
import sailani from "./sailani";
import tawa from "./tawa";
import tamia from "./tamia";
import hanuwantiya from "./hanuwantiya";
import parsili from "./parsili";

// Heritage
import bhopal from "./bhopal";
import gwalior from "./gwalior";
import khajuraho from "./khajuraho";
import maheshwar from "./maheshwar";
import orchha from "./orchha";
import datia from "./datia";
import shivpuri from "./shivpuri";
import chanderi from "./chanderi";
import sanchi from "./sanchi";
import bhimbetka from "./bhimbetka";
import indore from "./indore";
import mandu from "./mandu";
import burhanpur from "./burhanpur";
import udayagiri from "./udayagiri";
import jabalpur from "./jabalpur";
import sanchi from "./sanchi";

// Wildlife
import pench from "./pench";
import panna from "./panna";
import kanha from "./kanha";
import satpura from "./satpura";
import bandhavgarh from "./bandhavgarh";
import kuno from "./kuno";
import mukundpur from "./mukundpur";
import madhav from "./madhav";
import sanjayDubri from "./sanjay-dubri";
import chambalGharial from "./chambal-gharial";

// Spiritual
import ujjain from "./ujjain";
import omkareshwar from "./omkareshwar";
import bhojpur from "./bhojpur";
import chitrakoot from "./chitrakoot";
import amarkantak from "./amarkantak";
import maihar from "./maihar";
import mandsaur from "./mandsaur";
import sonagiri from "./sonagiri";

export const destinationRegistry: Record<string, DestinationContent> = {
  // Nature
  bhedaghat,
  pachmarhi,
  sailani,
  tawa,
  tamia,
  hanuwantiya,
  parsili,

  // Heritage
  bhopal,
  gwalior,
  khajuraho,
  maheshwar,
  orchha,
  datia,
  shivpuri,
  chanderi,
  bhimbetka,
  indore,
  mandu,
  burhanpur,
  udayagiri,
  jabalpur,
  sanchi,

  // Wildlife
  pench,
  panna,
  kanha,
  satpura,
  bandhavgarh,
  kuno,
  mukundpur,
  madhav,
  "sanjay-dubri": sanjayDubri,
  "chambal-gharial": chambalGharial,

  // Spiritual
  ujjain,
  omkareshwar,
  bhojpur,
  chitrakoot,
  amarkantak,
  maihar,
  mandsaur,
  sonagiri,
};

export const getDestinationContent = (id: string): DestinationContent | undefined =>
  destinationRegistry[id];

export type { DestinationContent };

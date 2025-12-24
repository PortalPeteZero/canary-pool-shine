// Import all swatch texture images
import konaCoast from "@/assets/swatches/kona-coast.png";
import blueLagoon from "@/assets/swatches/blue-lagoon.png";
import mediterraneanBlue from "@/assets/swatches/mediterranean-blue.png";
import commercialBlue from "@/assets/swatches/commercial-blue.png";
import midnightBlue from "@/assets/swatches/midnight-blue.png";
import sandyBeach from "@/assets/swatches/sandy-beach.png";
import gialloVersilia from "@/assets/swatches/giallo-versilia.png";
import santorini from "@/assets/swatches/santorini.png";
import blueGranite from "@/assets/swatches/blue-granite.png";
import greyReef from "@/assets/swatches/grey-reef.png";
import frenchGrey from "@/assets/swatches/french-grey.png";
import perleNoire from "@/assets/swatches/perle-noire.png";
import saharaSand from "@/assets/swatches/sahara-sand.png";
import barbuda from "@/assets/swatches/barbuda.png";
import californiaWhite from "@/assets/swatches/california-white.png";
import blueMist from "@/assets/swatches/blue-mist.png";
import iceIceBayBay from "@/assets/swatches/ice-ice-bay-bay.png";
import pacificBlue from "@/assets/swatches/pacific-blue.png";
import blackAbsinthe from "@/assets/swatches/black-absinthe.png";
import marrakesh from "@/assets/swatches/marrakesh.png";
import caboVerde from "@/assets/swatches/cabo-verde.png";

// Brillo Blanco swatches
import blancoSuave from "@/assets/swatches/blanco-suave.jpg";
import bahiaGlacial from "@/assets/swatches/bahia-glacial.jpg";
import tropeaSands from "@/assets/swatches/tropea-sands.jpg";
import calaMacarella from "@/assets/swatches/cala-macarella.jpg";
import rivageBronze from "@/assets/swatches/rivage-bronze.jpg";
import balearesSand from "@/assets/swatches/baleares-sand.jpg";
import mykonos from "@/assets/swatches/mykonos.jpg";
import mallorcaSand from "@/assets/swatches/mallorca-sand.jpg";
import merCendree from "@/assets/swatches/mer-cendree.jpg";

// Map finish IDs to their texture images
export const swatchImages: Record<string, string> = {
  "kona-coast": konaCoast,
  "blue-lagoon": blueLagoon,
  "mediterranean-blue": mediterraneanBlue,
  "commercial-blue": commercialBlue,
  "midnight-blue": midnightBlue,
  "sandy-beach": sandyBeach,
  "giallo-versilia": gialloVersilia,
  "santorini": santorini,
  "blue-granite": blueGranite,
  "grey-reef": greyReef,
  "french-grey": frenchGrey,
  "perle-noire": perleNoire,
  "sahara-sand": saharaSand,
  "barbuda": barbuda,
  "california-white": californiaWhite,
  "blue-mist": blueMist,
  "ice-ice-bay-bay": iceIceBayBay,
  "pacific-blue": pacificBlue,
  "black-absinthe": blackAbsinthe,
  "marrakesh": marrakesh,
  "cabo-verde": caboVerde,
  // Brillo Blanco
  "blanco-suave": blancoSuave,
  "bahia-glacial": bahiaGlacial,
  "tropea-sands": tropeaSands,
  "cala-macarella": calaMacarella,
  "rivage-bronze": rivageBronze,
  "baleares-sand": balearesSand,
  "mykonos": mykonos,
  "mallorca-sand": mallorcaSand,
  "mer-cendree": merCendree,
};

// Helper function to get swatch image with fallback
export function getSwatchImage(finishId: string): string | undefined {
  return swatchImages[finishId];
}

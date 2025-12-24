// Import all swatch texture images
import pearlWhite from "@/assets/swatches/pearl-white.png";
import glacier from "@/assets/swatches/glacier.png";
import seafoam from "@/assets/swatches/seafoam.png";
import aquamarine from "@/assets/swatches/aquamarine.png";
import maldives from "@/assets/swatches/maldives.png";
import skyBlue from "@/assets/swatches/sky-blue.png";
import blueGranite from "@/assets/swatches/blue-granite.png";
import mediterraneanBlue from "@/assets/swatches/mediterranean-blue.png";
import konaCoast from "@/assets/swatches/kona-coast.png";
import blueLagoon from "@/assets/swatches/blue-lagoon.png";
import midnightBlue from "@/assets/swatches/midnight-blue.png";
import frenchGrey from "@/assets/swatches/french-grey.png";
import saharaSand from "@/assets/swatches/sahara-sand.png";
import santorini from "@/assets/swatches/santorini.png";

// Map finish IDs to their texture images
export const swatchImages: Record<string, string> = {
  "pearl-white": pearlWhite,
  "glacier": glacier,
  "seafoam": seafoam,
  "aquamarine": aquamarine,
  "maldives": maldives,
  "sky-blue": skyBlue,
  "horizon": blueLagoon,
  "mediterranean": mediterraneanBlue,
  "aegean": konaCoast,
  "cobalt": blueGranite,
  "ocean": midnightBlue,
  "abyss": midnightBlue,
  "slate": frenchGrey,
  "storm": saharaSand,
  "obsidian": santorini,
  "midnight": santorini,
};

// Helper function to get swatch image with fallback
export function getSwatchImage(finishId: string): string | undefined {
  return swatchImages[finishId];
}

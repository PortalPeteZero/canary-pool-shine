import { getSwatchImage } from "@/data/swatchImages";

interface SwatchImageProps {
  finishId: string;
  fallbackColor: string;
  className?: string;
  alt?: string;
}

export function SwatchImage({ finishId, fallbackColor, className = "", alt = "Finish swatch" }: SwatchImageProps) {
  const textureImage = getSwatchImage(finishId);

  if (textureImage) {
    return (
      <div
        className={`bg-cover bg-center ${className}`}
        style={{ backgroundImage: `url(${textureImage})` }}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <div
      className={className}
      style={{ backgroundColor: fallbackColor }}
      role="img"
      aria-label={alt}
    />
  );
}

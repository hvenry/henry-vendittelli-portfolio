import Image from "next/image";
import { getProjectImagePath } from "@/lib/images";

type ProjectImageProps = {
  image: string;
  /** Optional light-mode variant; swapped by CSS so it works pre-hydration */
  imageLight?: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default function ProjectImage({
  image,
  imageLight,
  alt,
  className = "",
  priority = false
}: ProjectImageProps) {
  return (
    <>
      <Image
        src={getProjectImagePath(image)}
        alt={alt}
        width={1200}
        height={630}
        priority={priority}
        className={imageLight ? `theme-dark-only ${className}` : className}
      />
      {/* Both variants carry the same alt; display:none removes the hidden one
          from the accessibility tree, so exactly one is announced */}
      {imageLight && (
        <Image
          src={getProjectImagePath(imageLight)}
          alt={alt}
          width={1200}
          height={630}
          priority={priority}
          className={`theme-light-only ${className}`}
        />
      )}
    </>
  );
}

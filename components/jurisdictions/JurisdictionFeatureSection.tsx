import Image from "next/image";
import Link from "next/link";

export interface FeatureBlock {
  title: string;
  description: React.ReactNode;
}

export interface JurisdictionFeatureSectionProps {
  primary: FeatureBlock;
  secondary: FeatureBlock;
  cta: { label: string; href: string };
  image: { src: string; alt: string; height: number; width?: number };
  /** Image on the left, text on the right (desktop). */
  imageLeft?: boolean;
  /** Use the light grey section background. */
  muted?: boolean;
}

export default function JurisdictionFeatureSection({
  primary,
  secondary,
  cta,
  image,
  imageLeft = false,
  muted = false,
}: JurisdictionFeatureSectionProps) {
  const imageWidth = image.width ?? 608;

  return (
    <section
      className={`w-full py-16 md:py-20 lg:py-[90px] ${
        muted ? "bg-[#F4F7FA]" : "bg-white"
      }`}
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-0">
        {/* Text */}
        <div
          className={`flex flex-col items-start ${
            imageLeft ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
            {primary.title}
          </h2>
          <p className="pt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A] lg:max-w-[608px]">
            {primary.description}
          </p>

          <h2 className="pt-12 text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
            {secondary.title}
          </h2>
          <p className="pb-6 pt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A] lg:max-w-[608px]">
            {secondary.description}
          </p>

          <Link
            href={cta.href}
            className="mt-4 inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637] hover:text-white"
          >
            {cta.label}
          </Link>
        </div>

        {/* Image */}
        <div
          className={`relative w-full ${
            imageLeft ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div
            className="relative w-full overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
            style={{
              maxWidth: imageWidth,
              aspectRatio: `${imageWidth} / ${image.height}`,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 628px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

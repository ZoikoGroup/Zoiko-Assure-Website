import Image from "next/image";
import Link from "next/link";

export type FeatureBlock = {
  title: string;
  description: string;
};

export type FeatureSplitSectionProps = {
  id?: string;
  blocks: [FeatureBlock, FeatureBlock];
  cta: { label: string; href: string };
  image: { src: string; alt: string };
  /** Puts the image on the left and uses the grey background. */
  reversed?: boolean;
};

// Two headed text blocks + outline CTA beside an image.
// Sections alternate: white with image right, grey with image left.
export default function FeatureSplitSection({
  id,
  blocks,
  cta,
  image,
  reversed = false,
}: FeatureSplitSectionProps) {
  return (
    <section
      id={id}
      className={`w-full py-16 sm:py-20 lg:py-24 ${reversed ? "bg-[#F1F5F9]" : "bg-white"}`}
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={`flex flex-col items-start ${reversed ? "lg:order-2" : ""}`}>
            {blocks.map((block, index) => (
              <div key={block.title} className={index > 0 ? "mt-10 sm:mt-12" : ""}>
                <h2 className="text-2xl font-semibold leading-7 text-[#0A2540]">
                  {block.title}
                </h2>
                <p className="mt-4 max-w-[608px] text-base leading-6 text-[#5A6E85]">
                  {block.description}
                </p>
              </div>
            ))}

            <Link
              href={cta.href}
              className="mt-10 inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-6 py-3 text-base font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
            >
              {cta.label}
            </Link>
          </div>

          <div className={`flex w-full items-center justify-center ${reversed ? "lg:order-1" : ""}`}>
            <div className="relative aspect-[4/3] w-full max-w-[608px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 608px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

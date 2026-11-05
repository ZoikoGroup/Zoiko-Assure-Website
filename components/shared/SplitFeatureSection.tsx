import Image from "next/image";
import Link from "next/link";

type Block = { title: string; description: string };

type SplitFeatureSectionProps = {
  blocks: Block[];
  /** Small uppercase-style note shown under the text blocks (one line per entry). */
  note?: string[];
  cta: { label: string; href: string };
  image: { src: string; alt: string };
  /** Place image on the left (text on the right) and use the tinted background. */
  reversed?: boolean;
};

export default function SplitFeatureSection({
  blocks,
  note,
  cta,
  image,
  reversed = false,
}: SplitFeatureSectionProps) {
  return (
    <section
      className={`w-full py-16 sm:py-20 lg:py-24 ${reversed ? "bg-[#F1F5F9]" : "bg-white"}`}
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={`flex flex-col items-start ${reversed ? "lg:order-2" : ""}`}>
            {blocks.map((block, i) => (
              <div key={block.title} className={i > 0 ? "mt-10 sm:mt-12" : ""}>
                <h2 className="text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
                  {block.title}
                </h2>
                <p className="mt-4 text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#5A6E85]">
                  {block.description}
                </p>
              </div>
            ))}

            {note && (
              <p className="mt-6 text-[14px] font-semibold leading-6 text-[#6B7280]">
                {note.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            )}

            <div className="mt-8 sm:mt-10">
              <Link
                href={cta.href}
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-transparent px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                {cta.label}
              </Link>
            </div>
          </div>

          <div
            className={`flex w-full items-center justify-center ${reversed ? "lg:order-1" : ""}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={632}
              height={480}
              sizes="(max-width: 1024px) 100vw, 608px"
              className="h-auto w-full max-w-[608px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

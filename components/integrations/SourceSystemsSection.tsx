"use client";

import Image from "next/image";

export default function SourceSystemsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Board with Sticky Notes Graphic */}
          <div className="flex w-full items-center justify-center lg:justify-start">
            <div className="relative aspect-[600/401] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_30px_-6px_rgba(0,0,0,0.15)]">
              <Image
                src="/Integrations/i3.jpg"
                alt="Source systems and data classes planning board"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Heading, Paragraph */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#0A2540] lg:leading-[1.2]">
              Source Systems and Data Classes
            </h2>

            <p className="mt-4 max-w-[500px] text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
              Understand the difference between the source record, the collection observation, the mapping association, and the evidence metadata. A source is authoritative; the metadata association is not proof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

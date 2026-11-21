"use client";

import Image from "next/image";

export default function EventContractAndSanitizedFixturesSection() {
  return (
    <section className="w-full bg-white pt-8 sm:pt-10 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Heading, Paragraphs, Callout & Action */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[28px] lg:leading-[1.25]">
              Event contract &amp; sanitized fixtures
            </h2>

            <p className="mt-6 text-[14.5px] sm:text-[15px] leading-relaxed text-[#5A6E85]">
              Every event detail page renders strictly from an approved, versioned event contract. Payload examples use validated synthetic fixtures with all tenant identifiers and secrets scrubbed.
            </p>

            {/* Specimen Callout */}
            <div className="mt-6 border-l-4 border-[#F58220] pl-4 py-1 text-[13px] sm:text-[13.5px] leading-relaxed text-[#5A6E85]">
              Illustrative example — not a live event, JSON schema, or executable payload. Actual wire keys render only from an approved contract.
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-5 py-2.5 text-[14px] font-medium text-[#F58220] transition-colors duration-200 hover:bg-[#F58220] hover:text-white cursor-pointer"
              >
                Copy sanitized fixture (when verified)
              </button>
            </div>
          </div>

          {/* Right Column: Hardware / Microchip Event Architecture Image */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <Image
                src="/Developer-Documentation-Webhooks/wh2.jpg"
                alt="Microchip circuit board architecture symbolizing reliable webhook event bus and message processing"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

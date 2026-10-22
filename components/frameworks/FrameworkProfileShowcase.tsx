"use client";

import Image from "next/image";
import Link from "next/link";

export default function FrameworkProfileShowcase() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start">
            <div>
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                Framework Profile Showcase
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Inspect a verified source-linked versioned record. View the
                framework title, issuer, edition, type, jurisdiction, original
                source URI, and scope notes.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                Edition, Dates &amp; Change History
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Differentiate publication, edition, legal effect and review.
                Standards are versioned, and temporal legal effects differ from
                update time.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/view-version-history"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
              >
                View Version History
              </Link>
            </div>
          </div>

          {/* Right Column: Image Card */}
          <div className="flex w-full flex-col items-center lg:items-end">
            <div className="w-full max-w-[540px] overflow-hidden">
              <div className="relative aspect-[480/380] w-full">
                <Image
                  src="/frame/2.png"
                  alt="Framework Profile Showcase and Version History"
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

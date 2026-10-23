"use client";

import Image from "next/image";
import Link from "next/link";

export default function SourceAuthoritySection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[480px_1fr] xl:grid-cols-[520px_1fr] lg:gap-12 xl:gap-16">
          {/* Left Column: UI Graphic */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[582/226] w-full max-w-[480px] xl:max-w-[520px] overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/applicability-engine/source-authority-ui.png"
                alt="Source Authority UI"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Text & CTAs */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
              Every material conclusion needs a traceable source.
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              <span className="block whitespace-normal md:whitespace-nowrap">
                Preserve the issuing authority, citation, jurisdiction, publication/effective
              </span>
              <span className="block whitespace-normal md:whitespace-nowrap">
                dates and source version needed to understand why a determination was
              </span>
              <span className="block">
                made.
              </span>
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/regulatory-sources"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#B66C18] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#B66C18] transition-colors duration-200 hover:bg-[#B66C18]/5"
              >
                Explore Regulatory Sources
              </Link>
              <Link
                href="/methodology"
                className="group inline-flex items-center gap-1.5 text-[16px] font-semibold text-[#B66C18] transition-colors duration-200 hover:underline"
              >
                <span>View Methodology</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path
                    d="M3 8H13M9 4L13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

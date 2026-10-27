"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Eyebrow, Heading, Paragraphs, Action Buttons, Footnotes */}
          <div className="flex flex-col items-start">
            <span className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.08em] text-[#F58220]">
              TRUST CENTER / PRIVACY
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[48px] lg:leading-[1.12]">
              Privacy begins with<br className="hidden sm:inline" /> clarity and accountable<br className="hidden sm:inline" /> choices.
            </h1>

            <p className="mt-5 max-w-[580px] text-base font-normal leading-[1.65] text-[#D9E2EC] sm:text-[16.5px]">
              Explore how ZoikoAssure organizes information about personal-data processing, privacy responsibilities, retention, requests and disclosure pathways for enterprise evaluation.
            </p>

            <p className="mt-4 max-w-[580px] text-[14px] sm:text-[15px] font-normal leading-[1.6] text-[#CBD5E1]">
              Privacy depends on purpose, the data involved, the responsible organization and applicable rules. We present topics for review and link to authoritative notices and applicable contractual terms rather than making universal promises.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Request a Demo
              </Link>
              <Link
                href="#privacy-topics"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#2C4A6F] bg-[#0A2540] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
              >
                Explore Privacy Topics
              </Link>
            </div>

            {/* Sublink */}
            <Link
              href="/privacy-policy"
              className="mt-5 text-[13.5px] font-medium text-white underline underline-offset-4 transition-colors hover:text-[#D9E2EC]"
            >
              Read the Privacy Policy
            </Link>

            {/* Footnote */}
            <p className="mt-4 max-w-[560px] text-[11.5px] leading-[18px] text-[#829AB1]">
              Descriptions are informational; legal notices and signed agreements govern where applicable.
            </p>
          </div>

          {/* Right Column: Hero Graphic Card */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[500px] rounded-2xl bg-white p-3.5 sm:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[1200/896] w-full overflow-hidden rounded-xl">
                <Image
                  src="/Privacy/p1.jpg"
                  alt="Privacy and legal team reviewing data governance documentation"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
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

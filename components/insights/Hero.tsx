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
              INSIGHTS | REGULATORY &amp; GOVERNANCE ANALYSIS
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[48px] lg:leading-[1.12]">
              Regulatory Change,<br className="hidden sm:inline" /> Explained Through<br className="hidden sm:inline" /> Governance and<br className="hidden sm:inline" /> Evidence.
            </h1>

            <p className="mt-5 max-w-[580px] text-base font-normal leading-[1.65] text-[#D9E2EC] sm:text-[16.5px]">
              Explore reviewed analysis of regulatory developments, operational accountability, evidence and continuous assurance. Each article separates what a source establishes from what organizations may need to evaluate.
            </p>

            <p className="mt-4 max-w-[580px] text-[14px] sm:text-[15px] font-normal leading-[1.6] text-[#CBD5E1]">
              ZoikoAssure Insights provides source-linked analysis of regulatory and governance topics. Articles identify jurisdiction, publication and review context, relevant uncertainties and practical questions for accountable teams; they do not replace legal advice.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="#insights-directory"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Explore Insights
              </Link>
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#2C4A6F] bg-[#0A2540] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
              >
                Request a Demo
              </Link>
            </div>

            {/* Footnote */}
            <p className="mt-6 text-[12px] leading-[18px] text-[#829AB1]">
              Reviewed analysis · Source-linked · Dated context · Human-accountable interpretation
            </p>
          </div>

          {/* Right Column: Hero Graphic Card */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[500px] rounded-2xl bg-white p-3.5 sm:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[1200/800] w-full overflow-hidden rounded-xl">
                <Image
                  src="/Resources-Header-drop-down-Insights/hdi1.jpg"
                  alt="Executive leadership team analyzing regulatory reports and governance metrics"
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

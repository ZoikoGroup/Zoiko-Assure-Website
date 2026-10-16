"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Eyebrow, Heading, Paragraph, CTA Buttons, Secondary Link, Footnote */}
          <div className="flex flex-col items-start">
            <span className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.08em] text-[#F58220]">
              PLATFORM / EVIDENCE &amp; PROVENANCE
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[50px] lg:leading-[1.12]">
              Know the Origin of Every<br className="hidden sm:inline" /> Assurance Claim.
            </h1>

            <p className="mt-5 max-w-[580px] text-base font-normal leading-[1.65] text-[#D9E2EC] sm:text-[17px]">
              Connect each evidence record to its source, control, obligation, relevant dates and accountable review—so your team can see what is supported, what is outdated and what still requires proof.
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
                href="#evidence-chain"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#3E5268] bg-[#0A2540] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
              >
                Explore the Evidence Chain
              </Link>
            </div>

            {/* Underline Sub-link */}
            <div className="mt-5">
              <Link
                href="/platform/continuous-assurance"
                className="text-[14px] font-medium text-[#F58220] underline underline-offset-4 transition-colors duration-200 hover:text-[#FFA048]"
              >
                Explore Continuous Assurance
              </Link>
            </div>

            {/* Fine print footnote */}
            <p className="mt-6 max-w-[560px] text-[12px] leading-[18px] text-[#829AB1]">
              Illustrative interface and data. Implementation, integrity and export capabilities are confirmed during evaluation.
            </p>
          </div>

          {/* Right Column: Hero Graphic Card */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[480px] rounded-2xl bg-white p-3.5 sm:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
                <Image
                  src="/evidence-provenance/ep1.jpg"
                  alt="Evidence provenance demonstration"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
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

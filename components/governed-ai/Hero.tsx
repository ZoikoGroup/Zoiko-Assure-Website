"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Eyebrow, Heading, Paragraph, CTA Buttons, Sublink, Footnote */}
          <div className="flex flex-col items-start">
            <span className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.08em] text-[#F58220]">
              PLATFORM / GOVERNED AI
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[50px] lg:leading-[1.12]">
              AI Assistance Built for<br className="hidden sm:inline" /> Accountable Decisions.
            </h1>

            <p className="mt-5 max-w-[580px] text-base font-normal leading-[1.65] text-[#D9E2EC] sm:text-[17px]">
              Governed AI in ZoikoAssure is a source-grounded approach to assisting regulatory analysis, with explicit uncertainty, controlled review and documented human accountability. Work with complex regulatory information without losing the authority behind it.
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
                href="#governed-ai-in-action"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#3E5268] bg-[#0A2540] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
              >
                See Governed AI in Action
              </Link>
            </div>

            {/* Sub-link */}
            <div className="mt-5">
              <Link
                href="#responsible-ai"
                className="text-[14px] font-medium text-[#F58220] underline underline-offset-4 transition-colors duration-200 hover:text-[#FFA048]"
              >
                Explore Responsible AI
              </Link>
            </div>

            {/* Footnote caption */}
            <p className="mt-6 max-w-[560px] text-[12px] leading-[18px] text-[#829AB1]">
              Illustrative workflow. Assisted outputs require source verification and accountable professional review; product capabilities and availability are confirmed during evaluation.
            </p>
          </div>

          {/* Right Column: Hero Graphic Card */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[500px] rounded-2xl bg-white p-3.5 sm:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[800/570] w-full overflow-hidden rounded-xl">
                <Image
                  src="/governed-ai/ga1.jpg"
                  alt="Governed AI analytics dashboard reflection on laptop"
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

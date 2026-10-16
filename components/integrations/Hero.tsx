"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Eyebrow, Heading, Paragraph, CTA Buttons, Footnote */}
          <div className="flex flex-col items-start">
            <span className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.08em] text-[#F58220]">
              PLATFORM / INTEGRATIONS
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[50px] lg:leading-[1.12]">
              Connect Operational<br className="hidden sm:inline" /> Systems to Defensible<br className="hidden sm:inline" /> Assurance.
            </h1>

            <p className="mt-5 max-w-[580px] text-base font-normal leading-[1.65] text-[#D9E2EC] sm:text-[17px]">
              ZoikoAssure is designed to connect systems relevant to regulatory controls and evidence, preserving source context, ownership and review so teams can understand what is available, what can be demonstrated and what still requires action.
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
                href="#integration-model"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#3E5268] bg-[#0A2540] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
              >
                Explore the Integration Model
              </Link>
            </div>

            {/* Footnote caption */}
            <p className="mt-6 max-w-[560px] text-[12px] leading-[18px] text-[#829AB1]">
              Illustrative workflows. Supported connectors, data scope and deployment options are confirmed during evaluation.
            </p>
          </div>

          {/* Right Column: Integration Graphic Card */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[500px] rounded-2xl bg-white p-3.5 sm:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[735/451] w-full overflow-hidden rounded-xl">
                <Image
                  src="/Integrations/i1.png"
                  alt="Connected systems to defensible assurance network"
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

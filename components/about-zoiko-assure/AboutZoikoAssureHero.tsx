"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutZoikoAssureHero() {
  return (
    <section className="w-full bg-[#0A2540] py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[709.33px_506.67px]">
          {/* Left Column */}
          <div className="flex w-full flex-col items-start">
            {/* Tag / Eyebrow */}
            <span className="text-[14px] font-semibold uppercase leading-[22.4px] tracking-[0.0714em] text-[#F58220]">
              ABOUT ZOIKOASSURE
            </span>

            {/* Heading 1 */}
            <h1 className="mt-4 max-w-[709.33px] text-[36px] font-semibold leading-[1.15] text-white sm:text-[44px] lg:text-[56px] lg:leading-[61.6px]">
              Compliance Should Be Provable — Not Reconstructed.
            </h1>

            {/* Paragraph 1 */}
            <p className="mt-6 max-w-[709.33px] text-[16px] font-normal leading-[28.8px] text-[#D9E2EC] sm:text-[18px]">
              Zoiko Assure is a global regulatory intelligence and continuous
              compliance assurance platform for organizations operating across
              complex, multi-jurisdictional regulatory environments.
            </p>

            {/* Paragraph 2 */}
            <p className="mt-6 max-w-[709.33px] text-[14px] font-normal leading-[22.4px] text-[#D9E2EC]">
              It connects authoritative regulatory sources to applicability,
              obligations, controls, evidence and assurance — helping
              organizations understand what applies, what changed, what is
              controlled, what can be proven, and what still requires
              accountable human review.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/request-a-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-[#c0741e]"
              >
                Request a Demo
              </Link>
              <Link
                href="/applicability-engine"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-white/10"
              >
                Assess Your Regulatory Exposure
              </Link>
            </div>

            {/* Subtext Paragraph */}
            <div className="py-6">
              <p className="text-[12px] font-semibold leading-[19.2px] text-[#A0AAB2]">
                Know What Applies. Prove What’s Controlled. Stay Ready for Scrutiny.
                <br />
                Zoiko Assure is a platform of Zoiko Tech Inc., a Zoiko Group company.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-full justify-center lg:justify-end">
            <div className="w-full max-w-[506.67px] rounded-[8px] bg-white p-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[474.67/348] w-full overflow-hidden rounded-[4px]">
                <Image
                  src="/images/about-zoiko-assure/hero-assurance-chain.png"
                  alt="Illustrative Six-Stage Assurance Chain Schematic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 475px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


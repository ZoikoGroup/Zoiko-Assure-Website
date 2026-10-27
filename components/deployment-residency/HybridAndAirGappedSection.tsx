"use client";

import Image from "next/image";
import Link from "next/link";

export default function HybridAndAirGappedSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Hybrid & Air-Gapped server room graphic */}
          <div className="flex w-full items-center justify-center lg:justify-start">
            <div className="relative aspect-[1200/896] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_14px_35px_-8px_rgba(0,0,0,0.18)]">
              <Image
                src="/Deployment-Residency/dr3.jpg"
                alt="Engineers evaluating hybrid and air-gapped server configurations"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Hybrid & Air-Gapped explanations and CTA */}
          <div className="flex flex-col items-start">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
                Hybrid — Make Every Crossing Explicit.
              </h2>
              <p className="mt-3 text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
                Make cross-boundary components and integrations visible. Understand the control plane vs data plane concept, and transfer directions.
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
                Air-Gapped — Evaluate Isolation Alongside Update and Evidence Paths.
              </h2>
              <p className="mt-3 text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
                Qualify disconnected-operation claims and operational constraints. Consider external dependencies, updates, and telemetry.
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <Link
                href="#boundary-models"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-3 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                Explore Boundary Models
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

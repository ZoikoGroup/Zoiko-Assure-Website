"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[709.33px_506.67px] xl:grid-cols-[1fr_506.67px] lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start max-w-[710px]">
            <span className="text-[14px] font-semibold uppercase leading-[22.4px] tracking-[0.0714em] text-[#F58220]">
              TRUST CENTER / DATA GOVERNANCE
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[56px] font-semibold leading-[1.1] text-white tracking-normal">
              Data Governance Should Be Traceable, Not Assumed.
            </h1>

            <p className="mt-6 text-[18px] font-normal leading-[28.8px] text-[#D9E2EC]">
              Data governance establishes the policies, ownership, classifications and review practices used to manage information through its lifecycle. In ZoikoAssure’s assurance model, those practices are designed to support accountable handling and defensible evidence lineage.
            </p>

            <p className="mt-6 text-[14px] font-normal leading-[22.4px] text-[#D9E2EC]">
              Understand how information is categorized, accessed, used, retained, reviewed and linked to evidence—without confusing a documented policy with proof that a control operated.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-[#e07519]"
              >
                Request a Demo
              </Link>
              <Link
                href="/evidence-provenance"
                className="inline-flex items-center justify-center rounded-[4px] border border-white bg-transparent px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-white/10"
              >
                Explore Evidence &amp; Provenance
              </Link>
            </div>

            {/* Text Links */}
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <Link
                href="/trust-center/privacy"
                className="text-[14px] font-normal leading-[22.4px] text-white underline underline-offset-4 transition-colors hover:text-[#D9E2EC]"
              >
                Read Privacy
              </Link>
              <Link
                href="/trust-center/security"
                className="text-[14px] font-normal leading-[22.4px] text-white underline underline-offset-4 transition-colors hover:text-[#D9E2EC]"
              >
                Explore Security
              </Link>
              <Link
                href="/trust-center/deployment-residency"
                className="text-[14px] font-normal leading-[22.4px] text-white underline underline-offset-4 transition-colors hover:text-[#D9E2EC]"
              >
                Review Deployment &amp; Residency
              </Link>
            </div>

            {/* Footnote */}
            <p className="mt-4 sm:mt-6 text-[12px] font-normal leading-[19.2px] text-[#A0AAB2]">
              Capabilities and contractual obligations depend on the implemented service, applicable agreement and approved public documentation.
            </p>
          </div>

          {/* Right Column: Hero Graphic Card */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[506.67px] rounded-lg bg-white p-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[475/348] w-full overflow-hidden rounded">
                <Image
                  src="/data-governance/hero.png"
                  alt="Data Governance Flow Concept"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 507px"
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

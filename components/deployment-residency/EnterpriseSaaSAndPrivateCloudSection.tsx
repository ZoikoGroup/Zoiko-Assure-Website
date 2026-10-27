"use client";

import Image from "next/image";
import Link from "next/link";

export default function EnterpriseSaaSAndPrivateCloudSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: SaaS & Private Cloud explanations and comparison CTA */}
          <div className="flex flex-col items-start">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
                Enterprise SaaS — Defined Responsibilities Within a Managed Service.
              </h2>
              <p className="mt-3 text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
                Explain shared-service operations with explicit tenant/data boundaries. Understand logical/physical tenancy and access categories.
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
                Private Cloud — Scope Matters More Than the Label.
              </h2>
              <p className="mt-3 text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
                Explain what a private model might change and what it does not certify. Private cloud is not automatically single-tenant, sovereign, or compliance-certified.
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <Link
                href="#compare-saas-private-cloud"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-3 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                Compare SaaS and Private Cloud
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural review graphic */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[1200/896] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_14px_35px_-8px_rgba(0,0,0,0.18)]">
              <Image
                src="/Deployment-Residency/dr2.jpg"
                alt="Architects reviewing SaaS and private cloud architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

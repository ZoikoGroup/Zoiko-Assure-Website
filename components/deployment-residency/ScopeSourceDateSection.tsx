"use client";

import Image from "next/image";
import Link from "next/link";

export default function ScopeSourceDateSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Team evaluating requirements in conference room */}
          <div className="flex w-full items-center justify-center lg:justify-start">
            <div className="relative aspect-[1200/896] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_14px_35px_-8px_rgba(0,0,0,0.18)]">
              <Image
                src="/Deployment-Residency/dr7.jpg"
                alt="Leadership and architecture team validating scope and requirements"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Scope, Source, Date & Requirements validation */}
          <div className="flex flex-col items-start">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
                Ask for Scope, Source, and Date — Not Just a Badge.
              </h2>
              <p className="mt-3 text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
                Create auditable trail for public trust declarations. Review document status tables and secure evidence-request patterns only where operational.
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
                Bring Your Requirements. We Will Validate the Scope.
              </h2>
              <p className="mt-3 text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
                Allow sales to assess fit with bounded non-sensitive questions. Define requested deployment concept, intended jurisdictions, and regulated data category.
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <Link
                href="#request-scoped-details"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-3 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                Request Scoped Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

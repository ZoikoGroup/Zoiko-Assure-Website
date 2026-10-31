"use client";

import Image from "next/image";
import Link from "next/link";

export default function ObligationsAndControlsHandoffSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <Image
                src="/Obligation-Management/om7.png"
                alt="Typing on laptop with floating verified checkmark and compliance control handoff icons"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Duty vs Response & Managed Is Not Proven */}
          <div className="flex flex-col items-start">
            {/* Block 1 */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[34px] lg:leading-[1.25]">
                Obligations Define the Duty. Controls Define the Response.
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#5A6E85]">
                Connect one or more obligations to mapped controls with rationale and accountable ownership. Relationship metadata includes mapped scope, mapping rationale, approving role, and effective period.
              </p>
            </div>

            {/* Block 2 */}
            <div className="mt-10 sm:mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[34px] lg:leading-[1.25]">
                Managed Is Not Proven.
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#5A6E85]">
                Display four distinct bands: managed obligation, mapped control, operating evidence, separately evaluated assurance; exception queue below, outside the proof chain.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10">
              <Link
                href="/platform/obligation-control-mapping"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                Explore Control Handoffs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

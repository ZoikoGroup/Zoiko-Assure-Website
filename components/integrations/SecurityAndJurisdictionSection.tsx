"use client";

import Link from "next/link";

export default function SecurityAndJurisdictionSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Security, Permissions & Boundaries */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
              Security, Permissions &amp; Boundaries
            </h2>

            <p className="mt-4 max-w-[500px] text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
              Support technical and procurement due diligence. Explain integration boundaries, least privilege, security disclosure routes, and tenant separation.
            </p>

            <div className="mt-6 sm:mt-8">
              <Link
                href="#integration-security"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-3 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                Integration Security
              </Link>
            </div>
          </div>

          {/* Right Column: Jurisdiction & Data Governance */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
              Jurisdiction &amp; Data Governance
            </h2>

            <p className="mt-4 max-w-[500px] text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
              Show scope constraints without unsupported deployment promises. Link the source to legal entity, purpose, eligible data class, and retention terms.
            </p>

            <div className="mt-6 sm:mt-8">
              <Link
                href="/trust-center"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-3 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                Visit Trust Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

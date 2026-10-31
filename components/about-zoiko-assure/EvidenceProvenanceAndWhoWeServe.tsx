"use client";

import Image from "next/image";
import Link from "next/link";

export default function EvidenceProvenanceAndWhoWeServe() {
  return (
    <section className="w-full bg-white py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[608px_608px]">
          {/* Left Column: Content */}
          <div className="flex w-full max-w-[608px] flex-col items-start">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Evidence, Provenance & Time
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                A compliance conclusion is only as defensible as the evidence
                behind it. An assurance record can preserve the regulatory
                source, jurisdiction, version, effective date, applicability
                basis, mapped obligation, control, evidence source, and
                reviewer.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Who We Serve
              </h2>
              <p className="mt-4 mb-6 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Zoiko Assure is designed for organizations where regulatory
                exposure is material and assurance is a leadership
                responsibility. We serve Chief Risk Officers, General Counsel,
                Chief Compliance Officers, CFOs, Internal Audit, Compliance
                Operations, and Security Teams.
              </p>
            </div>

            <div>
              <Link
                href="/evidence-provenance"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324]/10"
              >
                Explore Evidence & Provenance
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex w-full justify-center lg:justify-end">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/about-zoiko-assure/establishing-evidence-provenance.png"
                alt="Establishing evidence provenance and reviewing stakeholder deliverables"
                fill
                sizes="(max-width: 1024px) 100vw, 608px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FrameworkDesignAddressSection() {
  return (
    <section className="w-full bg-white py-[90px]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content Column */}
          <div className="flex flex-col">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                What Is This Framework Designed to Address?
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Provide a citable short answer while preventing overreach. See the reviewed answer panel alongside limitation text and source references.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Verify the Publisher, Edition, and Status.
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Keep publisher/edition/legal-force context visible. Review the source callout for issuer name, official link, title, and binding-character notes.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/framework-guides/sources"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324] hover:text-white"
              >
                View Source Details
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex justify-center">
            <div className="relative aspect-[608/332] w-full max-w-[608px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/framework-guides/status-verification.png"
                alt="Framework Source, Edition and Status Verification"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

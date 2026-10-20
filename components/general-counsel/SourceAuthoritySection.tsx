"use client";

import Image from "next/image";
import Link from "next/link";

export default function SourceAuthoritySection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image */}
          <div className="order-2 flex w-full items-center justify-center lg:order-1 lg:justify-start">
            <div className="relative aspect-[543/366] w-full max-w-[576px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/general-counsel/applicability-source-ui.png"
                alt="Applicability and Source UI"
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="order-1 flex flex-col items-start lg:order-2">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Regulatory Source Authority and Versions
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Source identity and authority must be separable from inferred applicability. Stale/unavailable warnings are explicit. Retain dated last-known contexts where appropriate.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Applicability and Reasoning
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Expose Applies / Does not apply / UNCERTAIN with scoped facts. No unexplained AI certainty. UNCERTAIN status retains missing facts and routes to qualified legal counsel.
              </p>

              <div className="mt-6">
                <Link
                  href="/request-demo"
                  className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
                >
                  Inspect Decision
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

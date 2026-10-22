"use client";

import Link from "next/link";

export default function ConversionBand() {
  return (
    <section
      className="relative w-full border-b border-white/10 bg-[#071C33] bg-cover bg-no-repeat py-14"
      style={{
        backgroundImage: "url('/images/transformation/conversion-band-bg.png')",
        backgroundPosition: "center right",
      }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Column: Invitation */}
          <div className="max-w-[690px]">
            <h2 className="text-3xl font-semibold leading-[1.2] text-white md:text-[34px]">
              Carry regulatory assurance through the transaction.
            </h2>
            <p className="mt-5 text-[15px] font-normal leading-[1.65] text-[#CFD9E4]">
              See how source authority, entity context, obligations, control ownership and operating evidence can support accountable review through acquisition, divestiture or enterprise transformation.
            </p>
          </div>

          {/* Right Column: Actions and Discovery Links */}
          <div className="flex flex-col items-start gap-6 lg:items-end">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/request-demo"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-[#D58324] bg-[#D58324] px-5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#c0741c]"
              >
                Request a Demo
              </Link>
              <Link
                href="/regulatory-exposure"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-[#7890A7] bg-[#071C33] px-5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#0c2a4a]"
              >
                Assess Your Regulatory Exposure
              </Link>
            </div>

            <div>
              <Link
                href="/trust-center"
                className="text-[14px] font-normal text-[#CFD9E4] transition-colors duration-200 hover:text-white"
              >
                Visit the Trust Center →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

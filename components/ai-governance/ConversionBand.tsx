"use client";

import Link from "next/link";

export default function ConversionBand() {
  return (
    <section className="w-full bg-[#0A2540] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-[672px] text-2xl font-semibold leading-[28.8px] text-white sm:text-3xl lg:text-[36px] lg:leading-[43.2px]">
            Make AI use governable—before the next review asks.
          </h2>
          <p className="mt-4 max-w-[672px] text-[16px] font-normal leading-[25.6px] text-[#D9E2EC]">
            <span className="sm:whitespace-nowrap">Bring your AI use cases, sources and controls into one reviewed, evidenced</span>
            <br />
            <span className="sm:whitespace-nowrap">operating layer your audit committee can examine.</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/request-demo"
              className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-[#e0751a]"
            >
              Request a Demo
            </Link>
            <Link
              href="/obligation-control-mapping"
              className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-white/10"
            >
              Explore Obligation Mapping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

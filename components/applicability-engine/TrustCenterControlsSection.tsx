"use client";

import Link from "next/link";

const trustControls = [
  "Security",
  "Privacy",
  "Responsible AI",
  "Data Governance",
  "Residency",
];

export default function TrustCenterControlsSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
          Evaluate the controls behind the explanation.
        </h2>

        {/* 5 Control Cards */}
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {trustControls.map((control) => (
            <div
              key={control}
              className="flex h-[81.94px] items-center justify-center rounded-lg border border-[#D9E2EC] bg-white p-6 text-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h5 className="text-[13.28px] font-semibold leading-[15.94px] text-[#0A2540]">
                {control}
              </h5>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/trust-center"
            className="inline-flex items-center justify-center rounded-[4px] px-6 py-3 text-[16px] font-semibold leading-[25.6px] transition-colors duration-200 hover:bg-[#EB8D2C]/5"
            style={{
              color: "rgba(235, 141, 44, 1)",
              border: "1px solid rgba(235, 141, 44, 1)",
            }}
          >
            Visit Trust Center
          </Link>
        </div>
      </div>
    </section>
  );
}

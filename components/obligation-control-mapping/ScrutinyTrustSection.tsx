"use client";

import Link from "next/link";

const trustDomains = [
  "Security",
  "Privacy",
  "Responsible AI",
  "Deployment",
  "Reliability",
];

export default function ScrutinyTrustSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#172033]">
          Control claims should stand up to scrutiny.
        </h2>

        {/* 5 Cards */}
        <div className="mt-8 flex flex-col gap-4">
          {trustDomains.map((title) => (
            <div
              key={title}
              className="flex items-center rounded-lg border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[14px] font-semibold leading-[16.8px] text-[#0A2540]">
                {title}
              </h3>
            </div>
          ))}
        </div>

        {/* Centered CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/trust-center"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324]/5"
          >
            Visit Trust Center
          </Link>
        </div>
      </div>
    </section>
  );
}

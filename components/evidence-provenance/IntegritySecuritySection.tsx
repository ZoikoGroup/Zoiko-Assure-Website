"use client";

import Link from "next/link";

const securityPillars = [
  { name: "Integrity" },
  { name: "Authorization" },
  { name: "Retention" },
  { name: "Residency" },
];

export default function IntegritySecuritySection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: 2x2 Pillar Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {securityPillars.map((item) => (
              <div
                key={item.name}
                className="flex h-20 sm:h-24 items-center justify-start rounded-xl border border-[#D9E2EC] bg-white px-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
              >
                <span className="text-[15px] sm:text-[16px] font-bold text-[#0A2540]">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: Heading, Paragraph, CTA Button */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
              Integrity, Security and Retention
            </h2>

            <p className="mt-4 max-w-[500px] text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
              Access and actions are strictly filtered by tenant and role. Integrity verifications, cryptographic hashing, and legal holds are governed by defined security rules where implemented.
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

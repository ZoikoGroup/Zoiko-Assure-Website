"use client";

import Link from "next/link";

const trustItems = [
  {
    title: "Governed AI",
    description:
      "Source-grounded reasoning, uncertainty, and counsel escalation. Never autonomous decisions.",
  },
  {
    title: "Privacy",
    description:
      "Know how scenario input, retention and transfers are governed. No private deal data requested.",
  },
  {
    title: "Data Governance",
    description:
      "Control boundaries, access logging, and lifecycle protocols.",
  },
  {
    title: "Deployment",
    description:
      "Review verified integrations and contractible residency claims.",
  },
];

export default function TrustSecurityImplementationFitSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540] md:text-[24px]">
            Trust, Security and Implementation Fit
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-lg border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <div>
                <h3 className="text-[13.3px] font-semibold leading-[16px] text-[#0A2540]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[12px] font-normal leading-[19.2px] text-[#5F6B7A]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/trust-center"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
          >
            Visit Trust Center
          </Link>
        </div>
      </div>
    </section>
  );
}

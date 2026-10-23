"use client";

import Link from "next/link";

const trustItems = [
  {
    title: "Privacy & Security",
    description: "Role-aware access and policy-aware data handling bounds.",
  },
  {
    title: "Data Governance",
    description: "Retention, legal hold and records preservation context.",
  },
  {
    title: "Deployment & Residency",
    description: "Current, contractible environment claims and limits.",
  },
  {
    title: "Integrations",
    description: "System-of-record boundaries and data connection health.",
  },
];

export default function TrustCenterSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540]">
          Trust Center, Methodology and Technical Fit
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[120px] flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h5 className="text-[13.28px] font-semibold leading-[15.94px] text-[#0A2540]">
                {item.title}
              </h5>
              <p className="mt-4 text-[12px] font-normal leading-[19.2px] text-[#5F6B7A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/trust-center"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637] hover:text-white"
          >
            Visit Trust Center
          </Link>
        </div>
      </div>
    </section>
  );
}

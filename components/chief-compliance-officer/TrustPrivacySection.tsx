"use client";

import Link from "next/link";

export default function TrustPrivacySection() {
  const pillars = [
    {
      title: "Privacy and Security",
      description: "Role-aware access, policy-aware data handling.",
    },
    {
      title: "Responsible AI",
      description: "Grounding, uncertainty, approved use limitations.",
    },
    {
      title: "Data Governance",
      description: "Source classification, lineage, retention.",
    },
    {
      title: "Deployment & Residency",
      description: "Available contractible deployment models.",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="text-center">
          <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
            Trust, Privacy and Enterprise Evaluation
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex min-h-[120px] flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h5 className="text-[14px] font-semibold leading-[16px] text-[#0A2540]">
                {pillar.title}
              </h5>
              <p className="mt-4 text-[12px] font-normal leading-[19.2px] text-[#5F6B7A]">
                {pillar.description}
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

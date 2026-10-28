"use client";

import Link from "next/link";

const roles = [
  {
    title: "Product / Content Authority",
    description: "Approves AI functionality and grounds claims in verified regulatory sources.",
  },
  {
    title: "AI Risk & Legal Reviewer",
    description: "Evaluates impact, legal alignment, and human oversight boundaries.",
  },
  {
    title: "Security & Privacy Approver",
    description: "Verifies data controls, provider restrictions, and compliance safeguards.",
  },
];

export default function AccountabilityMapSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          Operating Model and Accountability Map
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div
              key={role.title}
              className="flex flex-col justify-start rounded-lg border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[14px] sm:text-[15px] font-semibold leading-[16px] text-[#0A2540]">
                {role.title}
              </h3>
              <p className="pt-4 pb-2 text-[12px] font-normal leading-[19.2px] text-[#5F6B7A]">
                {role.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/trust-center"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] bg-transparent px-[25px] py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
          >
            Explore Trust Center
          </Link>
        </div>
      </div>
    </section>
  );
}

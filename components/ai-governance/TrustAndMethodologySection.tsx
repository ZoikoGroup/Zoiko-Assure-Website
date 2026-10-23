"use client";

import Link from "next/link";

export default function TrustAndMethodologySection() {
  const cards = [
    {
      title: "Privacy & Security",
      description: "Data handling boundaries tied to Trust Center policies.",
    },
    {
      title: "Responsible AI",
      description:
        "Evaluate the institution's methodology, evaluations, and ethical posture.",
    },
    {
      title: "Data Governance",
      description:
        "Verify retention, permissions, and data lifecycle protocols.",
    },
    {
      title: "Deployment",
      description:
        "Review verified integrations and system location claims.",
    },
  ];

  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="text-left">
          <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
            Trust, Responsible AI and Methodology
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex min-h-[160px] flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] font-normal leading-[22px] text-[#5F6B7A]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/trust-center"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324]/5"
          >
            Explore Trust Center
          </Link>
        </div>
      </div>
    </section>
  );
}

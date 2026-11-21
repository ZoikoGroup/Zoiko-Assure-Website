"use client";

interface CategoryCard {
  title: string;
  description: string;
}

const categories: CategoryCard[] = [
  {
    title: "Identity & Access",
    description: "Identity grants, access reviews and policies.",
  },
  {
    title: "Security & Cloud",
    description: "Configuration and access audit records.",
  },
  {
    title: "GRC / Compliance",
    description: "Controls, attestations and issues. Imported records stay separate from validated proof.",
  },
  {
    title: "IT Service & Workflow",
    description: "Change records, tickets and review completion.",
  },
  {
    title: "Finance / ERP",
    description: "Approvals and audit artifacts.",
  },
  {
    title: "HR / Workforce",
    description: "Authorized workforce evidence.",
  },
  {
    title: "Documents",
    description: "Versioned policies and metadata.",
  },
  {
    title: "Custom Enterprise",
    description: "Scoped adapters and exports; evaluation required.",
  },
];

export default function HowAnIntegrationSupportsEvidenceSection() {
  return (
    <section id="integration-model" className="w-full bg-white pt-12 sm:pt-16 pb-8 sm:pb-12 scroll-mt-8">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540]">
          How an integration supports evidence
        </h2>

        <p className="mt-2 text-[14px] sm:text-[14.5px] leading-relaxed text-[#5A6E85]">
          Four-stage model: Source &rarr; Permission &rarr; Collected Record &rarr; Mapped Control. Categories below illustrate operational source types; no vendor list or live availability is inferred.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-start rounded-xl border border-[#E2E8F0] border-t-[3px] border-t-[#0066CC] bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0A2540]">
                {cat.title}
              </h3>
              <p className="mt-3 text-[13.5px] sm:text-[14px] leading-relaxed text-[#5A6E85]">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

interface CategoryCard {
  title: string;
  description: string;
}

const categories: CategoryCard[] = [
  {
    title: "Identity & Access",
    description: "Identity grants, access reviews and policy records.",
  },
  {
    title: "Security & Cloud",
    description: "Configuration and access audit records.",
  },
  {
    title: "GRC / Compliance",
    description: "Control inventories, attestations and issue records.",
  },
  {
    title: "IT Service & Workflow",
    description: "Change, ticket and review completion records.",
  },
  {
    title: "Finance / ERP",
    description: "Approval trails and finance-control artifacts.",
  },
  {
    title: "HR / Workforce",
    description: "Authorized workforce and policy acknowledgment records.",
  },
  {
    title: "Documents",
    description: "Versioned documents and supporting metadata.",
  },
  {
    title: "Custom Enterprise",
    description: "Scoped adapters and permitted exports; feasibility subject to evaluation.",
  },
];

export default function BrowseBySourceSystemSection() {
  return (
    <section id="categories" className="w-full bg-white pt-12 sm:pt-16 pb-8 sm:pb-12 scroll-mt-8">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540]">
          Browse by source system
        </h2>

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

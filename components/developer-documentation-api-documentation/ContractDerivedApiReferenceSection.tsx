"use client";

interface ReferenceCard {
  title: string;
  description: string;
}

const referenceCards: ReferenceCard[] = [
  {
    title: "Release & environment pinning",
    description:
      "Select only verified API releases and approved environments. Operation IDs are preserved across patches without silent version substitution.",
  },
  {
    title: "Access requirements",
    description:
      "Describes approved authorization schemes, contained scopes and access classes. No credential generators or live secrets are exposed.",
  },
  {
    title: "Parameters & request bodies",
    description:
      "Schema-defined names, locations, types, required flags, constraints and allowed media-types with bounded recursive expansion.",
  },
  {
    title: "Responses & error envelopes",
    description:
      "Declared status codes, headers, content types and source-specific error codes. Separates HTTP conventions from contract-defined errors.",
  },
  {
    title: "Semantics & usage limits",
    description:
      "Pagination, filtering, sorting, idempotency, retry safety and quota limits are displayed only when verified in the approved release contract.",
  },
  {
    title: "Version lifecycle & migration",
    description:
      "Displays reviewed dates, release status (current, deprecated, or retired) and verified migration paths from the release record.",
  },
];

export default function ContractDerivedApiReferenceSection() {
  return (
    <section id="api-reference" className="w-full bg-white pt-12 sm:pt-16 pb-8 sm:pb-12 scroll-mt-8">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540]">
          Contract-derived API reference
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {referenceCards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-start rounded-xl border border-[#E2E8F0] border-t-[3px] border-t-[#0066CC] bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0A2540]">
                {card.title}
              </h3>
              <p className="mt-3 text-[13.5px] sm:text-[14px] leading-relaxed text-[#5A6E85]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

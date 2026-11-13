"use client";

const row1Cards = [
  {
    title: "Data category / service",
    description:
      "Customer data, metadata, audit/evidence, observability, uploaded artifacts shown as concepts, not guaranteed locations.",
  },
  {
    title: "Primary storage + replicas",
    description:
      "Conceptual data placements, copy scope, region restrictions and fallback/restore rules.",
  },
  {
    title: "Processing and telemetry",
    description:
      "Processing/data-in-transit boundaries; customer-scoped vs shared service distinction when verified.",
  },
];

const row2Cards = [
  {
    title: "Backups and recovery copies",
    description:
      "Retention/copy boundaries reviewed separately; no time or site numbers until approved.",
  },
  {
    title: "Support + subprocessor access",
    description:
      "Support, admins, engineering, access controls and approval with scope/status.",
  },
];

export default function ResidencyCardsFloating() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-14 pb-4 sm:pb-6">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {row1Cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-start rounded-xl border border-[#E2E8F0] border-t-[3px] border-t-[#0066CC] bg-white p-5 sm:p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[15px] sm:text-[16px] font-bold leading-tight text-[#0A2540]">
                {card.title}
              </h4>
              <p className="mt-2.5 text-[12.5px] sm:text-[13px] font-normal leading-[1.6] text-[#5A6E85]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2: 2 cards */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {row2Cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-start rounded-xl border border-[#E2E8F0] border-t-[3px] border-t-[#0066CC] bg-white p-5 sm:p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[15px] sm:text-[16px] font-bold leading-tight text-[#0A2540]">
                {card.title}
              </h4>
              <p className="mt-2.5 text-[12.5px] sm:text-[13px] font-normal leading-[1.6] text-[#5A6E85]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

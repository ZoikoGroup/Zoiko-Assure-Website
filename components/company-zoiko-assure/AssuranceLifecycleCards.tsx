"use client";

const lifecycleCards = [
  {
    step: "01 Source",
    description: "Authority, citation, version, effective date.",
  },
  {
    step: "02 Applicability",
    description:
      "Scope evaluated by jurisdiction/entity/activity/product/data and period; UNCERTAIN requires review.",
  },
  {
    step: "03 Obligation",
    description: "Structured obligation example with source context.",
  },
  {
    step: "04 Control",
    description:
      "Named control, owner, test cadence. Mapping does not imply control effectiveness.",
  },
  {
    step: "05 Evidence",
    description: "Artifact, captured-as-of, source lineage / integrity.",
  },
  {
    step: "06 Assurance",
    description:
      "Evidence-backed result, reviewer and unresolved gaps. Requires Review \u2192 Proven; as-of visible.",
  },
];

export default function AssuranceLifecycleCards() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-14 pb-4 sm:pb-6">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lifecycleCards.map((card) => (
            <div
              key={card.step}
              className="flex flex-col justify-start rounded-xl border border-[#E2E8F0] border-t-[3px] border-t-[#0066CC] bg-white p-5 sm:p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[15px] sm:text-[16px] font-bold leading-tight text-[#0A2540]">
                {card.step}
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

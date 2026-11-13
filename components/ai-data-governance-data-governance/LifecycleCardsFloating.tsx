"use client";

const lifecycleCards = [
  {
    step: "01 Collect",
    description:
      "Why is it collected; what source/version and consent or other basis applies where required? Purpose/source record; unsupported purpose \u2192 hold and review.",
  },
  {
    step: "02 Classify",
    description:
      "What sensitivity, use and access policy applies? Classification decision, owner and policy version; UNCLASSIFIED \u2192 restrict.",
  },
  {
    step: "03 Store",
    description:
      "What environment, boundary, encryption and location commitments are verified? Approved technical/security evidence; do not promise universal residency.",
  },
  {
    step: "04 Access",
    description:
      "Which role may inspect or modify which fields for what purpose? Authorization audit; 403/restricted state does not leak metadata.",
  },
  {
    step: "05 Share / Transfer",
    description:
      "Who may receive a data object and under which approved terms? Destination, transfer policy, user purpose, third-party contract as relevant.",
  },
  {
    step: "06 Dispose",
    description:
      "Can an authorized process delete/anonymize/archive without defeating legal hold? Policy decision, control execution and evidence of disposition if actually supported.",
  },
];

export default function LifecycleCardsFloating() {
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

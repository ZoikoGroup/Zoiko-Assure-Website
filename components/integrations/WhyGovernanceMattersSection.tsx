"use client";

const governanceIssues = [
  {
    title: "Connection without context",
    description:
      "A live connection is only the beginning. Need object identity, scope, authority, and mapping.",
  },
  {
    title: "Evidence without provenance",
    description:
      "Proof must retain its origin and time. Need system, observation, capture and versions.",
  },
  {
    title: "Automation without accountability",
    description:
      "Failures must have an owner and a next action. Need review, reauthorization and escalation.",
  },
];

export default function WhyGovernanceMattersSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540]">
          Why Integration Governance Matters
        </h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {governanceIssues.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[140px] flex-col justify-start rounded-xl border border-[#D9E2EC] bg-white p-6 sm:p-7 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[16px] sm:text-[17px] font-bold leading-tight text-[#0A2540]">
                {item.title}
              </h3>
              <p className="mt-3 text-[13.5px] sm:text-[14px] font-normal leading-[22px] text-[#5A6E85]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

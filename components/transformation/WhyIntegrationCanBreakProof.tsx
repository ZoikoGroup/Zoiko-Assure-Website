"use client";

const challenges = [
  {
    title: "Legal perimeter changes",
    description:
      "An acquired activity may face obligations that differ from the buyer’s existing control baseline.",
  },
  {
    title: "Control owners change",
    description:
      "A policy may be inherited while control ownership, system access and test cadence are unsettled.",
  },
  {
    title: "Evidence can expire or lose relevance",
    description:
      "A pre-close artifact may not demonstrate post-close operation.",
  },
  {
    title: "Exceptions travel with the business",
    description:
      "Waivers and remediation plans need responsible owners and review dates.",
  },
  {
    title: "Multiple workstreams interpret the same rule",
    description:
      "Legal, compliance and operations need one traceable review basis.",
  },
];

export default function WhyIntegrationCanBreakProof() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540] md:text-[24px]">
            Why Integration Can Break Proof
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="flex flex-col justify-start rounded-lg border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[20px] text-[#0A2540]">
                {challenge.title}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

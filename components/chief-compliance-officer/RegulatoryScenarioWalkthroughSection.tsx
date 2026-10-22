export default function RegulatoryScenarioWalkthroughSection() {
  const steps = [
    {
      step: "1. What applies?",
      description:
        "A versioned requirement applies to one activity in one jurisdiction. UNCERTAIN facts flagged.",
    },
    {
      step: "2. What is controlled?",
      description:
        "Requirement links to a control and named owner with defined evidence expectation.",
    },
    {
      step: "3. What is proven?",
      description:
        "Evidence is stale; assurance result is Requires review. Inspect the gap.",
    },
  ];

  return (
    <section className="w-full bg-[#F4F7FA] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="text-center">
          <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
            Regulatory Scenario Walkthrough
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="flex min-h-[130px] flex-col justify-start rounded-[8px] border-t-4 border-t-[#D9E2EC] border-x border-b border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h5 className="text-[14px] font-semibold leading-[16px] text-[#0A2540]">
                {item.step}
              </h5>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

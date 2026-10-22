export default function WhyAIGovernanceHard() {
  const cards = [
    {
      title: "Regulatory change",
      description:
        "AI-related rules, regulatory guidance and transition dates change across jurisdictions.",
    },
    {
      title: "Use-case variability",
      description:
        "An AI feature can serve different purposes, people, sectors and regions.",
    },
    {
      title: "Provider relationships",
      description:
        "Third-party models, hosted systems and customer roles create different responsibility questions.",
    },
    {
      title: "Controls versus proof",
      description:
        "A policy, mapped control or completed questionnaire does not prove effective operation.",
    },
    {
      title: "Governance drift",
      description:
        "Model changes and data-use changes can invalidate prior evaluation context.",
    },
    {
      title: "Human accountability",
      description:
        "A compliant-sounding AI response is not an authorized legal conclusion.",
    },
  ];

  return (
    <section className="w-full bg-white pt-20 pb-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
            Why AI Governance Becomes Hard
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex min-h-[160px] flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                {card.title}
              </h4>
              <p className="mt-3 text-[14px] font-normal leading-[22px] text-[#5F6B7A]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

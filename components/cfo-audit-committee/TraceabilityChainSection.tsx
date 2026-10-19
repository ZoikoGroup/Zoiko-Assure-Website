export default function TraceabilityChainSection() {
  const leftCards = [
    {
      step: "1. Regulatory Source",
      question: "Which requirement changed?",
    },
    {
      step: "2. Applicability",
      question: "Does this affect our scope?",
    },
    {
      step: "3. Obligation",
      question: "What must management address?",
    },
  ];

  const rightCards = [
    {
      step: "4. Control",
      question: "What action is designed to address it?",
    },
    {
      step: "5. Evidence",
      question: "What actually supports the assertion?",
    },
    {
      step: "6. Assurance",
      question: "What can management defend?",
    },
  ];

  return (
    <section className="w-full bg-[#F4F7FA] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-[24px] font-semibold leading-[29px] text-[#0A2540]">
              The Source-to-Board Traceability Chain
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[26px] text-[#5F6B7A]">
              A summary is an index into governed source and evidence records, not a substitute for them. Follow the traceability from source to board question.
            </p>

            <div className="mt-6 space-y-4">
              {leftCards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-r-[8px] border-l-4 border-l-[#006FE8] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
                >
                  <h5 className="text-[14px] font-semibold leading-[16px] text-[#0A2540]">
                    {card.step}
                  </h5>
                  <p className="mt-4 text-[14px] font-normal leading-[22px] text-[#5F6B7A]">
                    {card.question}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col lg:pt-[123px]">
            <div className="space-y-4">
              {rightCards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-r-[8px] border-l-4 border-l-[#006FE8] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
                >
                  <h5 className="text-[14px] font-semibold leading-[16px] text-[#0A2540]">
                    {card.step}
                  </h5>
                  <p className="mt-4 text-[14px] font-normal leading-[22px] text-[#5F6B7A]">
                    {card.question}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

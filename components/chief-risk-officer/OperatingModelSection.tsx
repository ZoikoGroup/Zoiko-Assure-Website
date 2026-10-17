export default function OperatingModelSection() {
  const leftCards = [
    {
      step: "1. Regulatory Source",
      question: "Which authoritative requirement changed?",
    },
    {
      step: "2. Applicability",
      question: "Does it apply to this entity/activity/period?",
    },
    {
      step: "3. Obligation",
      question: "What must we do?",
    },
  ];

  const rightCards = [
    {
      step: "4. Control",
      question: "Which safeguard addresses it?",
    },
    {
      step: "5. Evidence",
      question: "What proof supports operation?",
    },
    {
      step: "6. Assurance",
      question: "What can be defended now?",
    },
  ];

  return (
    <section className="w-full bg-[#F4F7FA] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
              The CRO Assurance Operating Model
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Connect the six-stage operating chain to the executive<br />risk questions that matter most.
            </p>

            <div className="mt-6 space-y-4">
              {leftCards.map((card, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-l-[#006FE8] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
                >
                  <h5 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                    {card.step}
                  </h5>
                  <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
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
                  className="border-l-4 border-l-[#006FE8] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
                >
                  <h5 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                    {card.step}
                  </h5>
                  <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
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

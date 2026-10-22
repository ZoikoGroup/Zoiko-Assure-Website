export default function SixStageModelSection() {
  const leftCards = [
    {
      step: "1. Regulatory Source",
      question: "Which binding or guiding source supports the question?",
    },
    {
      step: "2. Applicability",
      question: "Does it apply to this fact pattern and period?",
    },
    {
      step: "3. Obligation",
      question: "What action or restriction follows?",
    },
  ];

  const rightCards = [
    {
      step: "4. Control",
      question: "How is it operationalized, without asserting effectiveness?",
    },
    {
      step: "5. Evidence",
      question: "What demonstrates operation at the relevant time?",
    },
    {
      step: "6. Assurance",
      question: "What conclusion is supported now, and what remains unresolved?",
    },
  ];

  return (
    <section className="w-full bg-[#F4F7FA] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
              Six-Stage Source-to-Proof Model for Legal Review
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Follow how interpretation moves toward evidence-backed assurance. A legal applicability finding neither authorizes a system action nor proves control effectiveness.
            </p>

            <div className="mt-6 space-y-4">
              {leftCards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-r-[8px] border-l-4 border-l-[#006FE8] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
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
          <div className="flex flex-col lg:pt-[110px]">
            <div className="space-y-4">
              {rightCards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-r-[8px] border-l-4 border-l-[#006FE8] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
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

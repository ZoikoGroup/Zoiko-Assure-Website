export default function WhyConnectedLegalAssuranceSection() {
  const cards = [
    {
      title: "Regulatory scope differs across borders",
      description:
        "A requirement can apply to one entity or activity and not another. Show factual context and jurisdiction-specific assumptions.",
    },
    {
      title: "Source changes can invalidate conclusions",
      description:
        "Publication date, effective date, supersession and last review each answer a different question.",
    },
    {
      title: "Reasoning gets disconnected from controls",
      description:
        "Keep the reviewable decision basis linked to assigned obligations and operational proof.",
    },
    {
      title: "AI can hide unresolved questions",
      description:
        "Speed analysis without erasing uncertainty, interpretation or professional responsibility. Human-review lanes remain distinct.",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
            Why Connected Legal Assurance Matters
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex min-h-[180px] flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                {card.title}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WhyBoardOversightSection() {
  const cards = [
    {
      title: "Regulatory change vs decision",
      description:
        "A new requirement does not state its financial materiality. Applicability depends on entity, activity and time.",
    },
    {
      title: "Mapped controls vs effective controls",
      description:
        "A control map indicates intent; evidence determines whether it operated in the relevant context.",
    },
    {
      title: "Accepted exceptions vs assurance",
      description:
        "A risk acceptance can be authorized while an underlying gap remains unresolved.",
    },
    {
      title: "Management reporting vs audit evidence",
      description:
        "A board narrative needs source, period, basis and reviewer—not an unsupported positive metric.",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="text-left">
          <h2 className="text-[24px] font-semibold leading-[29px] text-[#0A2540]">
            Why Board Oversight Loses Context
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex min-h-[194px] flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[19px] text-[#0A2540]">
                {card.title}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22px] text-[#5F6B7A]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const cards = [
  {
    title: "COSO ERM — strategy and performance framework (2017)",
    description:
      "A principles-based framework connecting governance, culture, strategy, performance and reporting.",
  },
  {
    title: "ISO 31000:2018 — risk-management guidance",
    description:
      "Guidance on principles, framework and process; ISO 31000 does not provide certification.",
  },
  {
    title: "Draft Notice",
    description:
      "A newer ISO 31000 edition is in draft development; do not treat it as a published replacement.",
  },
];

export default function ApproachCards() {
  return (
    <section className="w-full bg-white pt-12 sm:pt-14">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-xl font-semibold tracking-tight text-[#0A2540] sm:text-[22px]">
          Recognized risk-management approaches
        </h2>
        <p className="mt-8 max-w-[760px] text-[14px] leading-6 text-[#5A6E85]">
          Enterprise risk management helps organizations consider what could affect the
          achievement of objectives, including threats and opportunities.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-lg border border-[#E2E8F0] bg-white p-6 pb-10 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[15px] font-semibold leading-snug text-[#0A2540]">
                {card.title}
              </h3>
              <p className="mt-4 text-[13.5px] font-normal leading-[1.6] text-[#6B7280]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

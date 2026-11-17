const cards = [
  {
    title: "Trace the source",
    description:
      "Connect a conclusion to its issuing authority, provision, version and effective date.",
  },
  {
    title: "Show the decision context",
    description:
      "Explain the legal entity, activities and assumptions used to assess applicability.",
  },
  {
    title: "Preserve human judgment",
    description:
      "Show the reviewer, action, rationale and unresolved questions when authorized.",
  },
];

export default function PrincipleCards() {
  return (
    <section className="w-full bg-white pt-12 sm:pt-14">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="sr-only">What decision provenance records</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-lg border border-[#3B82F6] border-t-4 border-t-[#1D4ED8] bg-white p-6 pb-8 shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-md"
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

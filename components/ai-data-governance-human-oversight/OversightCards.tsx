const cards = [
  {
    title: "Source-grounded analysis",
    description:
      "Connect a conclusion to its issuing authority, provision, version and effective date.",
  },
  {
    title: "Explicit review gates",
    description:
      "Explain the legal entity, activities and assumptions used to assess applicability.",
  },
  {
    title: "Decision provenance",
    description:
      "Show the reviewer, action, rationale and unresolved questions when authorized.",
  },
  {
    title: "Governed intervention",
    description:
      "A model suggestion is a candidate interpretation, not independent legal advice.",
  },
];

export default function OversightCards() {
  return (
    <section className="w-full bg-white pt-12 sm:pt-14">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="sr-only">Principles of human oversight</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

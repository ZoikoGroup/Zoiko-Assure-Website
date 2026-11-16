const cards = [
  {
    title: "Ground outputs in named, versioned sources.",
    description:
      "Connect a conclusion to its issuing authority, provision, version and effective date.",
  },
  {
    title: "Make applicability uncertainty explicit.",
    description: "Unknown scope or source stays UNCERTAIN pending qualified reviewer.",
  },
  {
    title: "Keep candidate obligations reviewable.",
    description: "Candidate mapping states, human gates, source-to-control chain.",
  },
  {
    title: "Separate mapped controls from demonstrated performance.",
    description: "Mapped ≠ tested; stale ≠ current; accepted risk ≠ assured.",
  },
  {
    title: "Track evidence time and provenance.",
    description: "Test dates, provenance, ineffective/stale states, no blanket “pass”.",
  },
  {
    title: "Require accountable assurance conclusions.",
    description: "Evidence-supported/limited/not assessed with qualified scope.",
  },
];

export default function PrincipleCards() {
  return (
    <section className="w-full bg-white pt-12 sm:pt-14">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="sr-only">Governed AI principles</h2>
        <p className="max-w-[640px] text-[13px] leading-[1.6] text-[#6B7280]">
          A suggested mapping is only a starting point. The relevant sources, scope, reviewer
          decision and proof of control performance remain separate.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

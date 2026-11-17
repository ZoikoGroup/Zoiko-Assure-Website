const cards = [
  {
    title: "NIST AI RMF 1.0 — voluntary risk-management framework",
    description: "Official NIST source; mark revision status as owner-reviewed.",
  },
  {
    title: "ISO/IEC 42001:2023 — AI management-system standard",
    description: "Do not reproduce copyrighted clauses or assert Zoiko certification.",
  },
  {
    title: "OECD AI Principles — international policy principles",
    description: "Mention 2024 revision after verified citation.",
  },
  {
    title: "EU AI Act — jurisdiction-specific legislation",
    description: "Never imply all milestones or use cases apply at once.",
  },
];

export default function SourceCards() {
  return (
    <section className="w-full bg-white pt-12 sm:pt-14">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="sr-only">AI governance sources and their status</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-lg border border-[#E2E8F0] bg-white p-6 pb-8 shadow-[0_2px_4px_rgba(0,0,0,0.06)] transition-shadow duration-200 hover:shadow-md"
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

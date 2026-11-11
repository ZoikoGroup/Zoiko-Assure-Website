const topRow = [
  {
    title: "DORA — European Union financial-sector legislation",
    description:
      "Digital operational resilience requirements for entities and activities within the regulation's scope. Verify the current text and applicable technical standards.",
  },
  {
    title: "FCA — United Kingdom operational resilience requirements",
    description:
      "Important business services and impact tolerances for firms within applicable FCA rules. Confirm current firm type and supervisory scope.",
  },
  {
    title: "Basel Committee — supervisory principles",
    description:
      "Banking-sector supervisory principles concerning critical operations and disruption management. Confirm national implementation.",
  },
];

const bottomRow = [
  {
    title: "ISO 22301 — business continuity management systems",
    description:
      "Requirements for a business continuity management system. Standard use alone does not prove certification or regulatory compliance.",
  },
  {
    title: "NIST SP 800-34 — contingency planning guidance",
    description:
      "Information-system contingency planning guidance; not a substitute for enterprise system resilience.",
  },
];

type Card = { title: string; description: string };

function ReferenceCard({ card }: { card: Card }) {
  return (
    <div className="flex flex-col rounded-lg border-2 border-[#3B82F6] border-t-4 border-t-[#1D4ED8] bg-white p-6 pb-8 shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-md">
      <h3 className="text-[15px] font-semibold leading-snug text-[#0A2540]">{card.title}</h3>
      <p className="mt-4 text-[13.5px] font-normal leading-[1.6] text-[#6B7280]">
        {card.description}
      </p>
    </div>
  );
}

export default function ReferenceCards() {
  return (
    <section className="w-full bg-white pt-12 sm:pt-14">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="sr-only">Operational resilience frameworks and regulations</h2>
        <p className="max-w-[760px] text-[14px] leading-6 text-[#5A6E85]">
          Identify important services, understand the disruption people can tolerate, map
          interdependencies and test the capacity to respond and recover.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topRow.map((card) => (
            <ReferenceCard key={card.title} card={card} />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {bottomRow.map((card) => (
            <ReferenceCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

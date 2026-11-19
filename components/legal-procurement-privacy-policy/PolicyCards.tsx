const cards = [
  {
    title: "Overview & scope",
    description: "Whose data, which processing context and notice applicability.",
  },
  {
    title: "Data categories",
    description: "Context-tagged categories and sources; exact approved terminology.",
  },
  {
    title: "Purposes & bases",
    description:
      "Jurisdiction-aware approved lawful bases or comparable rationale as applicable.",
  },
  {
    title: "Disclosure / transfers",
    description:
      "Recipient categories and business purposes; approved third-party detail path.",
  },
  {
    title: "Retention & rights",
    description:
      "Actual retention logic, schedule, exceptions, backups and legal holds where applicable.",
  },
  {
    title: "Choices & updates",
    description:
      "Cookie Policy and Settings reference with working consent controls when supported.",
  },
];

export default function PolicyCards() {
  return (
    <section className="w-full bg-white pt-12 sm:pt-14">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="sr-only">Policy overview</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

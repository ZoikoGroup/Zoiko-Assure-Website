const pillars = [
  {
    title: "What must be done?",
    description: "Normative action with conditions, actors and qualifiers.",
  },
  {
    title: "To whom and where could it apply?",
    description: "Entity, activity, product, data, jurisdiction and other relevant factors.",
  },
  {
    title: "When is it legally relevant?",
    description: "Source version and effective period; unknown allowed.",
  },
  {
    title: "How could it be governed and evidenced?",
    description: "Control owner/test/evidence requirements; proof separate.",
  },
];

export default function KeyPillarsFloating() {
  return (
    <section className="relative z-10 mx-auto -mt-10 sm:-mt-12 md:-mt-14 w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex flex-col rounded-lg border border-t-4 border-[#D97706] bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
          >
            <h3 className="text-[16px] font-semibold leading-tight text-[#0A2540]">
              {pillar.title}
            </h3>
            <p className="mt-4 text-[14px] font-normal leading-6 text-[#6B7280]">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

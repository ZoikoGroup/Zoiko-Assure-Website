const pillars = [
  {
    title: "Which Requirements Apply?",
    description:
      "Start with regulatory authority, jurisdiction, effective period and an accountable applicability assessment.",
  },
  {
    title: "Who Owns the Response?",
    description:
      "Connect each relevant obligation to the control, operating owner and defined evidence expectation.",
  },
  {
    title: "What Can We Support With Evidence?",
    description:
      "Distinguish mapping from operational proof, and expose gaps, stale artifacts and outstanding review.",
  },
];

export default function KeyPillarsFloating() {
  return (
    <section className="relative z-10 mx-auto -mt-10 sm:-mt-12 md:-mt-14 w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex flex-col rounded-lg border border-t-4 border-[#E2E8F0] bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
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

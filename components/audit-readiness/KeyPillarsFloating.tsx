const pillars = [
  { title: "Readiness", description: "Tracking examination scope." },
  { title: "Completeness", description: "Mapping available evidence." },
  { title: "Reviewer Acceptance", description: "Accountable internal review." },
  { title: "External Findings", description: "Independent audit conclusions." },
];

export default function KeyPillarsFloating() {
  return (
    <section className="relative z-10 mx-auto -mt-8 w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex flex-col rounded-lg border border-t-4 border-[#E2E8F0] bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
          >
            <h3 className="text-base font-semibold leading-5 text-[#0A2540]">
              {pillar.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#5A6E85]">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

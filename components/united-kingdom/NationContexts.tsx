const nations = [
  {
    title: "England",
    description:
      "Understand applicable source types and the England/Wales jurisdiction caveat.",
  },
  {
    title: "Wales",
    description:
      "Senedd and Welsh regulations with bilingual-source notes where relevant.",
  },
  {
    title: "Scotland",
    description:
      "Scottish Parliament and instruments with devolved-competence caveats.",
  },
  {
    title: "Northern Ireland",
    description: "NI Assembly and UK/EU interface conditional callouts.",
  },
];

export default function NationContexts() {
  return (
    <section className="w-full bg-white pt-16 sm:pt-20 lg:pt-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[900px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          One United Kingdom. Distinct legal and regulatory contexts.
        </h2>
        <p className="mt-4 max-w-[900px] text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#5A6E85]">
          Explore UK-wide and nation-specific authority without assuming that an Act extending to
          a territory operates identically for every activity there.
        </p>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {nations.map((nation) => (
            <div
              key={nation.title}
              className="flex flex-col rounded-lg border border-[#E59A4F] border-t-4 border-t-[#D58324] bg-white p-6 pb-10 shadow-[0_2px_4px_rgba(0,0,0,0.04)]"
            >
              <h3 className="text-[16px] font-semibold leading-tight text-[#0A2540]">
                {nation.title}
              </h3>
              <p className="mt-4 text-[14px] font-normal leading-6 text-[#6B7280]">
                {nation.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

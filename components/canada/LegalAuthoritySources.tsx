const sources = [
  {
    title: "Justice Laws Website",
    description:
      "Official federal consolidations with current-to dates, amendments and previous versions.",
  },
  {
    title: "Canada Gazette",
    description:
      "Part I proposals/notices, Part II official regulations and Part III Acts of Parliament.",
  },
  {
    title: "Subnational Sources",
    description:
      "Official provincial and territorial legislative publications require publisher-specific verification, source status and review.",
  },
];

export default function LegalAuthoritySources() {
  return (
    <section className="w-full bg-white pt-16 sm:pt-20 lg:pt-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          One country. Multiple sources of legal authority.
        </h2>
        <p className="mt-4 max-w-[900px] text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#5A6E85]">
          Federal law can operate alongside provincial or territorial requirements. Which rules
          matter depends on the regulated activity, relevant entity, subject matter, effective
          period and place.
        </p>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {sources.map((source) => (
            <div
              key={source.title}
              className="flex flex-col rounded-lg border border-[#E59A4F] border-t-4 border-t-[#D58324] bg-white p-6 pb-10 shadow-[0_2px_4px_rgba(0,0,0,0.04)]"
            >
              <h3 className="text-[16px] font-semibold leading-tight text-[#0A2540]">
                {source.title}
              </h3>
              <p className="mt-4 text-[14px] font-normal leading-6 text-[#6B7280]">
                {source.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

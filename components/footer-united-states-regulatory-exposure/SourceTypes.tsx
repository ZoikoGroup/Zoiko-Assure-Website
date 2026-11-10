const sourceTypes = [
  { title: "Federal Laws", description: "U.S. Code Title and Section." },
  { title: "Federal Register", description: "Daily rules, notices and proposals." },
  { title: "CFR / eCFR", description: "Codified federal regulations and dates." },
  { title: "Agency Guidance", description: "Notices, enforcement actions and updates." },
];

export default function SourceTypes() {
  return (
    <section className="w-full bg-white pt-16 sm:pt-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="sr-only">U.S. regulatory source types</h2>
        <p className="max-w-[900px] text-[14px] sm:text-[15px] font-normal leading-[1.65] text-[#5A6E85]">
          Federal statutes, agency rulemaking publications, codified regulations and guidance serve
          different purposes. Check the issuing authority, citation, version and relevant dates
          before using a source.
        </p>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {sourceTypes.map((source) => (
            <div
              key={source.title}
              className="flex flex-col rounded-lg border border-[#E2E8F0] bg-white p-6 pb-10 shadow-[0_2px_4px_rgba(0,0,0,0.04)]"
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

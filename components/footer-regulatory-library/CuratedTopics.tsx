const topics = [
  {
    title: "Official Instrument",
    description: "Navigate from summary to official authority, citation and verified updates.",
  },
  {
    title: "ZoikoAssure Explainer",
    description: "Clearly vendor-authored and reviewed content; not binding official law.",
  },
  {
    title: "Regulatory Metadata",
    description:
      "Issuer, jurisdiction, issued date, and version. Full text available when permitted.",
  },
];

export default function CuratedTopics() {
  return (
    <section
      id="curated-topics"
      className="w-full scroll-mt-24 bg-white pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Explore Curated Regulatory Topics
        </h2>

        <p className="mt-8 sm:mt-12 text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#6B7280]">
          Start with source-grounded topics and follow the original regulatory material where
          available. Filter by jurisdiction, document type, authority and effective period where
          supported.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="flex flex-col rounded-lg border border-t-4 border-[#2563EB] bg-white p-6 pb-10 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[16px] font-semibold leading-tight text-[#0A2540]">
                {topic.title}
              </h3>
              <p className="mt-4 text-[14px] font-normal leading-6 text-[#6B7280]">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

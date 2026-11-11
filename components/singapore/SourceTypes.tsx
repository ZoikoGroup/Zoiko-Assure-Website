const sources = [
  {
    title: "Act of Parliament",
    description:
      "Primary Singapore legislation; require enacted status and provision-specific commencement.",
  },
  {
    title: "Subsidiary legislation",
    description:
      "Rules, regulations, orders and notifications made under enabling authority.",
  },
  {
    title: "Gazette notice",
    description:
      "Government-published notice; scope and legal consequences depend on enabling source and notice wording.",
  },
  {
    title: "Regulator interpretation",
    description:
      "Separate guidance, policy, regulatory direction and enforcement order by provenance and review.",
  },
];

export default function SourceTypes() {
  return (
    <section className="w-full bg-white pt-16 sm:pt-20 lg:pt-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[900px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Start with the published source, not an unsupported conclusion.
        </h2>
        <p className="mt-4 max-w-[900px] text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#5A6E85]">
          Singapore Statutes Online provides public reference access to Acts and subsidiary
          legislation. For authoritative publication and historical legal status, verify the
          relevant Gazette or legally effective revised edition with professional review.
        </p>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
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

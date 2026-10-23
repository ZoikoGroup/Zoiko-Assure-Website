const reasons = [
  {
    title: "Source fragmentation",
    description:
      "Requirements are distributed across legislation, regulators and revisions.",
  },
  {
    title: "Jurisdiction variation",
    description:
      "The same activity can face different duties or thresholds in different territories.",
  },
  {
    title: "Unclear timing",
    description:
      "Published, amended, transitional and operative dates are distinct.",
  },
  {
    title: "Interpretive ambiguity",
    description:
      "A requirement may be known but organizational applicability may remain UNCERTAIN.",
  },
  {
    title: "Operational disconnection",
    description:
      "Recording an obligation is not the same as implementing or testing a control.",
  },
  {
    title: "Audit reconstruction",
    description:
      "Decision and source lineage must be preserved before scrutiny.",
  },
];

export default function WhyStructuredObligationsMatter() {
  return (
    <section
      id="why-structured-obligations-matter"
      className="w-full bg-white py-16 md:py-20 lg:py-[90px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-0">
        <h2 className="max-w-[800px] text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          Why Structured Obligations Matter
        </h2>

        <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.02)]"
            >
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                {item.title}
              </h4>
              <p className="pb-6 pt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A] lg:w-[356px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

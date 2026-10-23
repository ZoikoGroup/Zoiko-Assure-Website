const signals = [
  {
    title: "Source Authority",
    description: "Link developments to the issuing or publishing authority.",
    textWidth: "min-[1440px]:w-[210px]",
  },
  {
    title: "Currency",
    description:
      'Last checked, editorial reviewed and "as of" dates are differentiated.',
    textWidth: "min-[1440px]:w-[200px]",
  },
  {
    title: "Officiality",
    description: "Marked Official, Third-party, Aggregated, or Editorial.",
    textWidth: "min-[1440px]:w-full",
  },
  {
    title: "Limitations",
    description:
      "Intelligence is not legal advice or proof of organizational compliance.",
    textWidth: "min-[1440px]:w-[201px]",
  },
  {
    title: "Scope",
    description: "Jurisdiction and source type with source-specific limits.",
    textWidth: "min-[1440px]:w-[209px]",
  },
];

export default function SourceTrustCards() {
  return (
    <section className="relative z-10 w-full px-4 pt-8 sm:px-6 md:px-8 lg:-mt-[30px] lg:h-[128px] lg:px-0 lg:pt-0">
      <div className="mx-auto grid w-full max-w-[1308px] grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:justify-between">
        {signals.map((signal) => (
          <div
            key={signal.title}
            className="flex flex-col items-start rounded-[8px] border border-t-4 border-[#D9E2EC] bg-white p-6 lg:h-[157px] lg:w-[250px] lg:min-w-[250px]"
          >
            <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
              {signal.title}
            </h4>
            <p
              className={`pt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A] ${signal.textWidth}`}
            >
              {signal.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

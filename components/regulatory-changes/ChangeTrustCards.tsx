const signals = [
  {
    title: "Source Authority",
    description: "Link developments to the issuing or publishing authority.",
    textWidth: "min-[1440px]:w-[197px]",
  },
  {
    title: "Dates",
    description: "Show when a development was issued and when it takes effect.",
    textWidth: "min-[1440px]:w-[214px]",
  },
  {
    title: "Scope",
    description: "Preserve jurisdiction, sector and source-specific scope.",
    textWidth: "min-[1440px]:w-[222px]",
  },
  {
    title: "Review",
    description:
      "Explain reviewed status and changes to editorial interpretation.",
    textWidth: "min-[1440px]:w-[218px]",
  },
  {
    title: "Limitations",
    description: "Intelligence is not legal advice or proof of compliance.",
    textWidth: "min-[1440px]:w-full",
  },
];

export default function ChangeTrustCards() {
  return (
    <section className="relative z-10 w-full px-4 pt-8 sm:px-6 md:px-8 lg:-mt-[30px] lg:h-[143px] lg:px-0 lg:pt-0">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Figma lays the five cards out at 258px with an 8px gap (1322px total). */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5 min-[1440px]:w-[1322px] min-[1440px]:grid-cols-[258px_258px_257px_258px_258px]">
          {signals.map((signal) => (
            <div
              key={signal.title}
              className="flex flex-col items-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.02)] lg:h-[153px]"
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
      </div>
    </section>
  );
}

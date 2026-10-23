import Link from "next/link";

const sources = [
  {
    name: "United States - SEC",
    description: "Official publication channel; Federal jurisdiction.",
  },
  {
    name: "European Union - GDPR",
    description: "Official legislation portal; Supranational regime.",
  },
  {
    name: "United Kingdom - FCA",
    description: "Regulator publication; Sovereign state.",
  },
];

export default function SourceRegistry() {
  return (
    <section
      id="curated-source-registry"
      className="w-full bg-white pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-[114px] lg:pt-[90px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-0">
        <h2 className="max-w-[800px] text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          Curated Regulatory Source Registry
        </h2>

        <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-3 lg:gap-8">
          {sources.map((source) => (
            <div
              key={source.name}
              className="flex flex-col items-start rounded-[8px] border border-[#D9E2EC] bg-white p-6"
            >
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                {source.name}
              </h4>
              <p className="pb-6 pt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {source.description}
              </p>
              <Link
                href="#"
                className="pt-4 text-[14px] font-normal leading-[22.4px] text-[#D97637] transition-colors hover:text-[#b85f26]"
              >
                Open source detail →
              </Link>
            </div>
          ))}
        </div>

        <p className="pt-8 text-[12px] font-normal leading-[19.2px] text-[#5F6B7A]">
          Published profiles reflect reviewed sources; absence from registry does
          not imply absence of law.
        </p>
      </div>
    </section>
  );
}

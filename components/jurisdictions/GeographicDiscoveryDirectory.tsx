import Link from "next/link";

const regions = [
  {
    name: "United States",
    description: "Sovereign state; federal and state-level rules may differ.",
  },
  {
    name: "European Union",
    description:
      "Supranational regulatory regime; member-state implementation may differ.",
  },
  {
    name: "United Kingdom",
    description:
      <>
        Sovereign state with distinct UK/
        <wbr />
        nations/regulator context where material.
      </>,
  },
  {
    name: "Canada",
    description: "Sovereign state; federal/provincial materiality distinguished.",
  },
  {
    name: "Australia",
    description: (
      <>
        Sovereign state; federal/state/
        <wbr />
        territory nuance.
      </>
    ),
  },
  {
    name: "Singapore",
    description: "Sovereign state; regulator/sector context.",
  },
  {
    name: "Middle East",
    description:
      "Editorial region, not one jurisdiction; constituent countries explicitly named.",
  },
];

export default function GeographicDiscoveryDirectory() {
  return (
    <section
      id="geographic-discovery-directory"
      className="w-full bg-white py-16 md:py-20 lg:py-[90px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-0">
        <h2 className="max-w-[800px] text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          Geographic Discovery Directory
        </h2>

        <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region) => (
            <div
              key={region.name}
              className="flex flex-col items-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.02)]"
            >
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                {region.name}
              </h4>
              <p className="pb-6 pt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {region.description}
              </p>
              <Link
                href="#"
                className="pt-4 text-[14px] font-normal leading-[22.4px] text-[#D97637] transition-colors hover:text-[#b85f26]"
              >
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

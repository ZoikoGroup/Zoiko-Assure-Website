"use client";

const items = [
  {
    title: "One jurisdiction, many entities",
    description:
      "The same market can expose different legal entities and regulated activities to different requirements.",
  },
  {
    title: "Publication vs commencement",
    description:
      "Rules may take effect in stages, with varied transition and reporting dates.",
  },
  {
    title: "Unverified coverage",
    description:
      "A missing entry in a library does not establish an exemption or permission to operate.",
  },
  {
    title: "New operations, new controls",
    description:
      "A mapped obligation needs an accountable operational owner, test expectation and evidence plan.",
  },
  {
    title: "Cross-border dependencies",
    description:
      "Data, customers, outsourcing and transfers may change analysis in more than one jurisdiction.",
  },
  {
    title: "Approvals live elsewhere",
    description:
      "Regulatory filings, licenses and official permissions are separate external decisions.",
  },
];

export default function ExpansionChangesExposureSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          Why Expansion Changes Exposure
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                {item.title}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

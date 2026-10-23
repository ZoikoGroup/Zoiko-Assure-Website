import Link from "next/link";

const items = [
  {
    title: "Source Coverage",
    description:
      "Coverage is controlled by source registry, license, jurisdiction and review status.",
  },
  {
    title: "Legal Interpretation",
    description:
      "No autonomous legal determination is promised; human-accountable analysis remains.",
  },
  {
    title: "Company Data",
    description:
      "Public intelligence record is separate from authenticated tenant data and protected evaluations.",
  },
  {
    title: "Deployment",
    description:
      "Link to approved supported contractual options and API integrations.",
  },
];

export default function TrustPrivacyProcurement() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-0">
        <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          Trust, Privacy &amp; Procurement
        </h2>

        <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.02)]"
            >
              <h5 className="text-[13.28px] font-semibold leading-[15.936px] text-[#0A2540]">
                {item.title}
              </h5>
              <p className="pb-6 pt-4 text-[12px] font-normal leading-[19.2px] text-[#5F6B7A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-8">
          <Link
            href="/trust-center"
            className="mt-4 inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637] hover:text-white"
          >
            Visit Trust Center
          </Link>
        </div>
      </div>
    </section>
  );
}

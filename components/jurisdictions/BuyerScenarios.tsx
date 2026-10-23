import Link from "next/link";

const scenarios = [
  {
    role: "General Counsel",
    description:
      "Check jurisdictional authority, legal scope, and counsel requirements.",
  },
  {
    role: "Chief Compliance Officer",
    description:
      "Find source-grounded obligations by geographic operating footprint.",
  },
  {
    role: "Chief Risk Officer",
    description:
      "See geographic areas requiring regulatory attention or uncertainty review.",
  },
  {
    role: "Market Expansion Executive",
    description: (
      <>
        Investigate a potential new operating
        <br className="hidden lg:block" /> market before requesting diligence.
      </>
    ),
  },
];

export default function BuyerScenarios() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-0">
        <h2 className="max-w-[800px] text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          Buyer Scenarios &amp; Key Triggers
        </h2>

        <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((item) => (
            <div
              key={item.role}
              className="flex flex-col items-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.02)]"
            >
              <h5 className="text-[13.28px] font-semibold leading-[15.936px] text-[#0A2540]">
                {item.role}
              </h5>
              <p className="pb-6 pt-4 text-[12px] font-normal leading-[19.2px] text-[#5F6B7A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-8">
          <Link
            href="/request-demo"
            className="mt-4 inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637] hover:text-white"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

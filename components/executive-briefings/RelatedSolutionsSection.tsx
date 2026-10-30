import Link from "next/link";

const SOLUTION_ROLES = [
  {
    role: "Chief Risk Officer",
    description: "Identify material emerging exposure and assurance gaps.",
  },
  {
    role: "General Counsel",
    description: "Distinguish binding obligations, guidance and interpretation.",
  },
  {
    role: "Chief Compliance Officer",
    description: "Prioritize management follow-up on obligations and evidence.",
  },
  {
    role: "CFO / Audit Committee",
    description: "Understand financial/board relevance without false quantification.",
  },
];

export default function RelatedSolutionsSection() {
  return (
    <section id="solutions" className="w-full bg-[#F4F7FA] py-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
        {/* Heading */}
        <h2
          className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Related Content and Solution Paths
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTION_ROLES.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]"
            >
              <h3
                className="text-[13.28px] font-semibold leading-[15.94px] text-[#0A2540]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {item.role}
              </h3>
              <p
                className="pt-4 pb-6 text-[12px] font-normal leading-[19.2px] text-[#5F6B7A]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="pt-8">
          <Link
            href="#cta"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] bg-transparent px-[25px] py-[12px] text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors hover:bg-[#D97637] hover:text-white"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Explore Related Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}


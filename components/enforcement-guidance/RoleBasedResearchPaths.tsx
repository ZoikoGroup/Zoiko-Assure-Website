"use client";

const paths = [
  {
    role: "General Counsel",
    description:
      "Check primary action/guidance text, legal effect, jurisdiction, and interpretation limits.",
  },
  {
    role: "Chief Compliance Officer",
    description:
      "Understand possible change to policies, supervision expectations or control scope.",
  },
  {
    role: "Chief Risk Officer",
    description:
      "Identify material supervisory themes and unresolved exposure questions.",
  },
  {
    role: "Internal Audit",
    description:
      "Reconstruct what authority communicated and when the organization knew of it.",
  },
];

export default function RoleBasedResearchPaths() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          Role-Based Research Paths
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {paths.map((path) => (
            <div
              key={path.role}
              className="flex flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                {path.role}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {path.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

const operationalSystems = [
  {
    title: "Identity & Access",
    description: "Identity grants, privileged access reviews, policy evidence.",
  },
  {
    title: "Security & Cloud",
    description: "Configuration assessments, access audit evidence.",
  },
  {
    title: "GRC / Compliance",
    description: "Control inventories, attestations, issue registers.",
  },
  {
    title: "IT Service & Workflow",
    description: "Approved change records, tickets, review completions.",
  },
  {
    title: "Finance / ERP",
    description: "Approval trails, finance controls, audit artifacts.",
  },
  {
    title: "HR / Workforce",
    description: "Policy acknowledgments, authorized workforce evidence.",
  },
  {
    title: "Documents",
    description: "Versioned policies, supporting files and metadata.",
  },
  {
    title: "Custom Enterprise",
    description: "Scoped enterprise adapters and exports.",
  },
];

export default function OperationalSystemsSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540]">
          Connect the Systems That Carry Operational Evidence.
        </h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {operationalSystems.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[130px] flex-col justify-start rounded-xl border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[15.5px] sm:text-[16px] font-bold leading-tight text-[#0A2540]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[13px] sm:text-[13.5px] font-normal leading-[20px] text-[#5A6E85]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

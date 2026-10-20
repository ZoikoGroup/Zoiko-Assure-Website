export default function StakeholderCollaborationSection() {
  const roles = [
    {
      title: "General Counsel",
      description: "Qualified interpretation and UNCERTAIN review.",
    },
    {
      title: "Compliance",
      description: "Operationalizes obligations/controls handoff.",
    },
    {
      title: "Risk",
      description: "Exceptions, materiality, and residual exposure.",
    },
    {
      title: "Internal Audit",
      description: "Independent read-only provenance check.",
    },
  ];

  const leftScenarios = [
    {
      prefix: "1. Source change:",
      text: " Hypothetical amendment is cited.",
    },
    {
      prefix: "2. Applicability:",
      text: " Applies to Entity A; Entity B is UNCERTAIN.",
    },
    {
      prefix: "3. Counsel review:",
      text: " Legal expert requests jurisdiction context.",
    },
  ];

  const rightScenarios = [
    {
      prefix: "4. Operational handoff:",
      text: " Proposed control mapped; evidence pending.",
    },
    {
      prefix: "5. Assurance:",
      text: " Remains 'Requires Review' due to evidence gap.",
    },
  ];

  return (
    <section className="w-full bg-[#F4F7FA] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Part 1: Stakeholder Collaboration */}
        <div className="text-left">
          <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
            Stakeholder Collaboration and Escalation
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="flex min-h-[120px] flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h5 className="text-[14px] font-semibold leading-[16px] text-[#0A2540]">
                {role.title}
              </h5>
              <p className="mt-4 text-[12px] font-normal leading-[19.2px] text-[#5F6B7A]">
                {role.description}
              </p>
            </div>
          ))}
        </div>

        {/* Part 2: Regulatory Scenario Walkthrough */}
        <div className="mt-16 text-left">
          <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
            Regulatory Scenario Walkthrough
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 items-center gap-x-16 gap-y-4 lg:grid-cols-2">
          {/* Left Column (3 items) */}
          <div className="space-y-4">
            {leftScenarios.map((item, idx) => (
              <div
                key={idx}
                className="rounded-r-[8px] border-l-4 border-l-[#006FE8] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
              >
                <p className="text-[16px] font-normal leading-[25.6px] text-[#172033]">
                  <span className="font-bold">{item.prefix}</span>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column (2 items) */}
          <div className="space-y-4">
            {rightScenarios.map((item, idx) => (
              <div
                key={idx}
                className="rounded-r-[8px] border-l-4 border-l-[#006FE8] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
              >
                <p className="text-[16px] font-normal leading-[25.6px] text-[#172033]">
                  <span className="font-bold">{item.prefix}</span>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

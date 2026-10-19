export default function CollaborationScenarioSection() {
  const roles = [
    {
      title: "CFO / Finance",
      description: "Owns financial materiality methodology.",
    },
    {
      title: "General Counsel",
      description: "Qualified legal interpretation.",
    },
    {
      title: "Compliance",
      description: "Obligation/control programs.",
    },
    {
      title: "Internal Audit",
      description: "Independent evidence review.",
    },
  ];

  const leftScenarios = [
    {
      prefix: "1. Detect:",
      text: " Regulatory source revision is published.",
    },
    {
      prefix: "2. Establish applicability:",
      text: " Entity result is UNCERTAIN.",
    },
    {
      prefix: "3. Assess response:",
      text: " Control mapped, but proof is stale.",
    },
  ];

  const rightScenarios = [
    {
      prefix: "4. Govern significance:",
      text: " Finance flags materiality; Compliance owns gap.",
    },
    {
      prefix: "5. Prepare briefing:",
      text: " Board summary displays gap and requested decision.",
    },
  ];

  return (
    <section className="w-full bg-[#F4F7FA] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        {/* Part 1: Roles Collaboration */}
        <div className="text-left">
          <h2 className="text-[24px] font-semibold leading-[29px] text-[#0A2540]">
            Finance, Legal, Compliance and Audit Collaboration
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="flex min-h-[101px] flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h5 className="text-[14px] font-semibold leading-[16px] text-[#0A2540]">
                {role.title}
              </h5>
              <p className="mt-4 text-[12px] font-normal leading-[19px] text-[#5F6B7A]">
                {role.description}
              </p>
            </div>
          ))}
        </div>

        {/* Part 2: Illustrative Executive Scenario */}
        <div className="mt-16 text-left">
          <h2 className="text-[24px] font-semibold leading-[29px] text-[#0A2540]">
            Illustrative Executive Scenario
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
                <p className="text-[16px] font-normal leading-[26px] text-[#172033]">
                  <span className="font-bold">{item.prefix}</span>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column (2 items, vertically centered) */}
          <div className="space-y-4">
            {rightScenarios.map((item, idx) => (
              <div
                key={idx}
                className="rounded-r-[8px] border-l-4 border-l-[#006FE8] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
              >
                <p className="text-[16px] font-normal leading-[26px] text-[#172033]">
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

export default function KeyPillarsFloating() {
  const pillars = [
    {
      title: "Source Authority",
      description:
        "Begin with referenced legislation, official guidance or other approved regulatory sources.",
    },
    {
      title: "Scope Before Status",
      description:
        "Jurisdiction, AI use, role and effective period govern applicability.",
    },
    {
      title: "Owners & Safeguards",
      description:
        "Assign qualified decision owners and operational control responsibilities.",
    },
    {
      title: "Evidence, Not Declaration",
      description:
        "Retain time-stamped, scoped proof of control operation.",
    },
    {
      title: "Accountable Review",
      description:
        "Escalate material uncertainty and consequential decisions.",
    },
  ];

  return (
    <div className="relative z-10 w-full -mt-[30px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex min-h-[178px] flex-col justify-start rounded-[8px] border-t-4 border-t-[#D9E2EC] border-x border-b border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                {pillar.title}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

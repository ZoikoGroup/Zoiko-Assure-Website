export default function KeyPillarsFloating() {
  const pillars = [
    {
      title: "Traceable Exposure",
      description:
        "Follow material changes back to cited regulatory authority and effective dates.",
    },
    {
      title: "Evidence-Backed",
      description:
        "Assurance depends on evidence, context and accountable review.",
    },
    {
      title: "Separation of Duties",
      description:
        "Management action, counsel review, audit oversight and committee review remain distinct.",
    },
    {
      title: "Trust Discipline",
      description:
        "Claims are verified, qualified and routed to authoritative disclosures.",
    },
  ];

  return (
    <div className="relative z-10 w-full -mt-[30px]">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex min-h-[155px] flex-col justify-start rounded-[8px] border-t-4 border-t-[#D9E2EC] border-x border-b border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[19px] text-[#0A2540]">
                {pillar.title}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22px] text-[#5F6B7A]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

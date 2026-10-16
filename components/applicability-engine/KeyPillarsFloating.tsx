"use client";

const keyPillars = [
  {
    title: "Authoritative Source",
    description: "Traceable source and version citation.",
  },
  {
    title: "Context-Sensitive",
    description: "Scope evaluation by entity and activity.",
  },
  {
    title: "Effective-Period",
    description: "Awareness of temporal regulatory bounds.",
  },
  {
    title: "Accountable Review",
    description: "Separation from user authorization.",
  },
];

export default function KeyPillarsFloating() {
  return (
    <div className="relative z-10 w-full -mt-[30px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {keyPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex h-full min-h-[133px] flex-col justify-start rounded-lg border-t-4 border-t-[#D9E2EC] border-x border-b border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
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

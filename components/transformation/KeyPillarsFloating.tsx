"use client";

const pillars = [
  {
    title: "Entity-Aware Applicability",
    description:
      "Regulatory scope depends on which entity, activity and effective period are involved.",
  },
  {
    title: "Inherited Obligations",
    description:
      "See which obligations require reassessment when operations or ownership change.",
  },
  {
    title: "Transition Accountability",
    description:
      "Know who owns each control before, during and after transition.",
  },
  {
    title: "Evidence with Time",
    description:
      "Preserve provenance, validity and relevant operating period.",
  },
  {
    title: "Exceptions Visible",
    description:
      "Open issues and accepted risk do not become assurance.",
  },
];

export default function KeyPillarsFloating() {
  return (
    <section className="relative z-20 -mt-10 w-full px-4 sm:px-6 lg:-mt-12 lg:px-8">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col justify-between rounded-lg border border-[#D9E2EC] border-t-4 border-t-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-colors duration-200 hover:border-t-[#F58220]"
            >
              <div>
                <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                  {pillar.title}
                </h4>
                <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

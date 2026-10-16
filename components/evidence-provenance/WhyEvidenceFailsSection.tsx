"use client";

const failureReasons = [
  {
    title: "Disconnected source",
    description:
      "Files without origin are difficult to defend. A stored artifact may lack reliable system identity.",
  },
  {
    title: "No temporal context",
    description:
      "An old record cannot silently stand in for current proof. Capture date and validity can differ.",
  },
  {
    title: "Unreviewed mapping",
    description:
      "A linked control is not the same as an operating control. The association needs a known basis.",
  },
  {
    title: "Hidden exception",
    description:
      "Risk acceptance is a decision, not evidence. Expiry and reviewer approval matter.",
  },
];

export default function WhyEvidenceFailsSection() {
  return (
    <section className="w-full bg-white pt-14 sm:pt-16 md:pt-20 pb-14 sm:pb-16 md:pb-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540]">
          Why Evidence Fails Under Scrutiny
        </h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {failureReasons.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-start rounded-xl border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-[0_2px_8px_rgba(15,23,42,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[16px] sm:text-[17px] font-bold leading-tight text-[#0A2540]">
                {item.title}
              </h3>
              <p className="mt-3 text-[13.5px] sm:text-[14px] font-normal leading-[22px] text-[#5A6E85]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

const difficulties = [
  {
    title: "Scoping Variability",
    description:
      "Requests can concern different entities, business activities, markets and effective periods.",
  },
  {
    title: "Fragmented Proof",
    description:
      "Control artifacts and reviewer decisions may reside in operational systems.",
  },
  {
    title: "Status Confusion",
    description:
      "A mapped control, completed test and evidentiary sufficiency are different things.",
  },
  {
    title: "Disclosure Complexity",
    description:
      "Records can be confidential, legally privileged or restricted. Approval is required.",
  },
  {
    title: "Temporal Accuracy",
    description:
      "Evidence after an examination period may not establish operation during it.",
  },
  {
    title: "Examiner Communication",
    description:
      "Only an authorized, verified transmission channel and receipt can establish submission.",
  },
];

export default function DifficultExaminationsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540]">
          Why Regulatory Examinations Are Difficult
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {difficulties.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                {item.title}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

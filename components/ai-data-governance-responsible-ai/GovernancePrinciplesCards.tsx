"use client";

const principles = [
  {
    title: "Source grounding",
    description:
      "Material regulatory conclusions should connect back to named sources and versions.",
  },
  {
    title: "Uncertainty made visible",
    description:
      "When an answer cannot be supported, the experience should say so and route it for review.",
  },
  {
    title: "Explainable summaries",
    description:
      "Give decision makers a concise, source-linked rationale without exposing private model workings.",
  },
  {
    title: "Human accountability",
    description:
      "Qualified reviewers own consequential judgments, escalations and overrides.",
  },
  {
    title: "Change governance",
    description:
      "Material model, prompt, source and policy changes should receive proportionate review.",
  },
  {
    title: "Evidence and provenance",
    description:
      "A conclusion should show the source, the evaluation time and the proof supporting it.",
  },
];

export default function GovernancePrinciplesCards() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-14 pb-4 sm:pb-6">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-start rounded-xl border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-[0_4px_16px_rgba(15,23,42,0.03)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-bold leading-tight text-[#0A2540]">
                {item.title}
              </h4>
              <p className="mt-2.5 text-[13px] sm:text-[13.5px] font-normal leading-[1.6] text-[#5A6E85]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

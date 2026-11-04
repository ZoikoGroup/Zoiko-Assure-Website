"use client";

const questions = [
  {
    title: "What changed?",
    description:
      "Check the authority, version, jurisdiction and date before interpreting impact.",
  },
  {
    title: "What requires action?",
    description:
      "Link relevant obligations to owners, controls and next steps without skipping applicability review.",
  },
  {
    title: "What evidence is missing?",
    description:
      "Surface the difference between a mapped control and proof that it operated.",
  },
  {
    title: "What awaits review?",
    description:
      "Preserve UNCERTAIN scope, contested interpretation and pending human decisions.",
  },
];

export default function FourQuestionsSection() {
  return (
    <section className="w-full bg-white pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[30px] lg:leading-[1.25]">
          Four Questions Every Compliance Operations Team Must Answer
        </h2>

        {/* 4 Cards Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {questions.map((q) => (
            <div
              key={q.title}
              className="flex flex-col justify-start rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0A2540]">
                {q.title}
              </h3>
              <p className="mt-3 text-[13px] sm:text-[13.5px] font-normal leading-[21px] text-[#5A6E85]">
                {q.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

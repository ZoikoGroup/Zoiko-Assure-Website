const questions = [
  {
    title: "Who issued it?",
    description:
      "Identify the institution with legal or supervisory authority for the specific document.",
  },
  {
    title: "Where is it published?",
    description:
      "Separate the official publication, repository, mirror or distributor from the issuer.",
  },
];

export default function SourceQuestions() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-12">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="sr-only">Questions every source should answer</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {questions.map((q) => (
            <div
              key={q.title}
              className="flex flex-col rounded-lg border border-[#E2E8F0] bg-white p-6 pb-8 shadow-[0_2px_4px_rgba(0,0,0,0.04)]"
            >
              <h3 className="text-[16px] font-semibold leading-tight text-[#0A2540]">{q.title}</h3>
              <p className="mt-4 text-[14px] font-normal leading-6 text-[#6B7280]">
                {q.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

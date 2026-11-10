const faqs = [
  {
    question: "Are all regulators and jurisdictions included?",
    answer: "No exhaustive coverage claim; scope published only when verified.",
  },
  {
    question: "Does a source listing mean a requirement applies to me?",
    answer: "No. Applicability is fact-specific, source-linked and may be UNCERTAIN.",
  },
  {
    question: "How are revised or withdrawn publications handled?",
    answer:
      "Versioning and correction practices apply subject to implemented workflow, preserving the historical reference context.",
  },
  {
    question: "Can the platform reproduce official regulatory text?",
    answer:
      "Depends on source license, publisher terms and authorized use. Rights and restrictions are respected.",
  },
  {
    question: "Does an AI summary replace the legal original?",
    answer:
      "No. Human review and original source remain authoritative. AI output must be source-grounded with uncertainty labeled.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-[#F1F5F9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Common Questions About Regulatory Sources
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="flex flex-col rounded-lg border border-[#E2E8F0] bg-white p-6 pb-10 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[15px] font-semibold leading-snug text-[#0A2540]">
                {faq.question}
              </h3>
              <p className="mt-4 text-[13.5px] font-normal leading-[1.6] text-[#6B7280]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

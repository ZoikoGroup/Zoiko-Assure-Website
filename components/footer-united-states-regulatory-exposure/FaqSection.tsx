const faqs = [
  {
    question: "Does this page cover every U.S. regulation?",
    answer:
      "No. It explains regulatory source categories and a methodology for connecting source information to business context. Any live coverage statement requires a current, verified source and jurisdiction register.",
  },
  {
    question: "How do federal and state requirements differ?",
    answer:
      "Federal and state authorities may publish different laws, regulations and guidance. Which requirement applies depends on its authority, scope, dates and your organization’s activities and locations.",
  },
  {
    question: "Is a proposed federal rule already a binding obligation?",
    answer:
      "Not simply because a proposal was published. The procedural status, governing law, effective dates and any later changes require review before an organization treats an item as a duty.",
  },
  {
    question: "Are the Code of Federal Regulations and eCFR the same thing?",
    answer:
      "The official CFR is a codification of federal regulations. The eCFR is a continuously updated online version, identified by its own publisher as not the official legal edition.",
  },
  {
    question: "What does UNCERTAIN mean?",
    answer:
      "It means available source or business facts do not support a defensible applies/does-not-apply conclusion. The next step is human review, not an automatic compliant result.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="flex flex-col rounded-lg border border-[#E2E8F0] bg-white p-6 pb-10 shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-md"
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

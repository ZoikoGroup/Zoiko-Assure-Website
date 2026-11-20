const faqs = [
  {
    question: "Does connecting a source prove compliance?",
    answer:
      "No. A connection provides a potential source of records. Evidence still requires relevance, context and review.",
  },
  {
    question: "What permissions are required?",
    answer:
      "Permissions depend on the validated integration and approved purpose. Confirm the supported scope during evaluation.",
  },
  {
    question: "How are credentials handled?",
    answer:
      "Confirm the approved method for the selected integration. Do not enter passwords, tokens or signing secrets in a public inquiry.",
  },
  {
    question: "What happens when access is revoked?",
    answer:
      "Revoked access must be distinguished from current access. The treatment of retained records depends on the applicable policy and agreement.",
  },
  {
    question: "Can I obtain security documentation?",
    answer:
      "Applicable evidence may be available through an authorized review process once access and document scope are confirmed.",
  },
  {
    question: "How do I report a security concern?",
    answer:
      "Use the verified security disclosure route when published. Do not include sensitive details in general inquiries.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Frequently asked questions
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

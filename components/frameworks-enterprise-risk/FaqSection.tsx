import Link from "next/link";

const faqs = [
  {
    question: "What is enterprise risk management?",
    answer:
      "Enterprise risk management is a coordinated approach to understanding uncertainty and making decisions that support organizational objectives. It can address threats and opportunities and depends on governance, methods, ownership and ongoing review.",
  },
  {
    question: "Is ISO 31000 a certification?",
    answer:
      "No. ISO 31000:2018 provides risk-management guidelines and is not intended as a certifiable standard. A revised edition is in draft development and should not be treated as the published replacement.",
  },
  {
    question: "How does COSO ERM differ from ISO 31000?",
    answer:
      "Both provide risk-management guidance. COSO ERM emphasizes integration with strategy, performance and governance, while ISO 31000 describes broadly applicable risk-management principles, a framework and a process. Neither automatically creates binding legal obligations.",
  },
  {
    question: "Who is accountable for enterprise risk?",
    answer:
      "Organizations define accountability through governing bodies and management. Management typically owns and addresses risks; risk-related functions provide expertise and challenge; internal audit provides independent assurance and advice with independence safeguards.",
  },
  {
    question: "What is risk appetite?",
    answer:
      "Risk appetite communicates the type and amount of risk an organization is prepared to accept in pursuit of its objectives. Its actual limits, measures and escalation steps require organization-specific governance and approval.",
  },
  {
    question: "Does a heat map demonstrate that risk is controlled?",
    answer:
      "No. A matrix is a representation based on a disclosed method, assumptions and timeframe. Control design, operation and test results need separate, appropriately scoped evidence.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-[#F1F5F9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Enterprise risk — common questions
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

        <div className="mt-10">
          <Link
            href="/resources/faqs"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-transparent px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}

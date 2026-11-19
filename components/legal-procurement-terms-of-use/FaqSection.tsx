import Link from "next/link";

const faqs = [
  {
    question: "How often is this policy updated?",
    answer:
      "The version and effective date reflect the latest legal review. Major changes may trigger a re-prompt as required by the approved change matrix.",
  },
  {
    question: "Where can I see the list of third parties?",
    answer:
      "Only verified document links are provided. There is no false endorsement or unverified vendor lists.",
  },
  {
    question: "Does this apply to my enterprise contract?",
    answer:
      "Public website Terms of Use ≠ commercial services MSA/order form/DPA/AUP by default. Legal must define applicability and precedence.",
  },
  {
    question: "How do I contact legal?",
    answer:
      "A verified owner-approved legal inquiries/accessibility route is provided. We do not invent an email or response SLA.",
  },
  {
    question: "Can I print these terms?",
    answer:
      "Yes. The print CSS strips navigation while retaining dates, footer, and full text. An optional accessible PDF is available if vetted.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Common Questions
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

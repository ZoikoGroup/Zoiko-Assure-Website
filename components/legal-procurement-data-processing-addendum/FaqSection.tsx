import Link from "next/link";

const faqs = [
  {
    question: "How do I get an authorized copy?",
    answer:
      "Use an accessible verified document, or a clear owned request workflow; do not fake download or e-sign.",
  },
  {
    question: "Does this apply to all processing?",
    answer:
      "No. Processing schedule (Subject, duration, purpose, data categories, data subjects, instructions and rights) are individually versioned.",
  },
  {
    question: "Are subprocessors included?",
    answer:
      "Subprocessors, security and transfer mechanisms must be explicit documents, scoped and approved, not assumptions.",
  },
  {
    question: "What roles are identified?",
    answer:
      "Identify controller, processor or independent-controller roles only if assessed and signed for the relevant processing.",
  },
  {
    question: "Who is the contracting party?",
    answer:
      "Legal validates full issuer and entity registered details. The public platform identity is not the legal counterparty by default.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Questions + release
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
            href="/contact"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-transparent px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
          >
            Contact Legal/Procurement
          </Link>
        </div>
      </div>
    </section>
  );
}

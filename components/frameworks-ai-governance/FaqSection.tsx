import Link from "next/link";

const faqs = [
  {
    question: "Is AI governance the same as legal compliance?",
    answer:
      "No. Frameworks and principles inform governance. Legal obligations depend on applicable law, facts, actors, timing and jurisdiction; accountable review is necessary.",
  },
  {
    question: "Does ISO/IEC 42001 mean ZoikoAssure is certified?",
    answer:
      "No. Referencing a standard does not establish implementation, independent assessment or certification. Only independently verified certificates and scope may support such a claim.",
  },
  {
    question: "Is NIST AI RMF mandatory?",
    answer:
      "NIST describes AI RMF 1.0 as a voluntary framework; separate laws or contractual obligations may exist in relevant circumstances.",
  },
  {
    question: "Are OECD AI Principles binding in every country?",
    answer:
      "They are policy principles. Requirements, where they exist, must be traced to the relevant jurisdiction-specific law or contract.",
  },
  {
    question: "Does the EU AI Act apply to every use of AI?",
    answer:
      "Applicability depends on system, actor, market, provision, exception and relevant dates. The official rules are phased; review the current version and qualified advice.",
  },
  {
    question: "What proof supports an AI control?",
    answer:
      "Typical evidence may include a reviewed control definition, evaluation record, monitoring output, incident history and approved decision trail. A mapping alone is not proof.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-[#F1F5F9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Evaluate an evidence-led AI governance approach
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

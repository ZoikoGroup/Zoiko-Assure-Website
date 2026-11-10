import Link from "next/link";

const faqs = [
  {
    question: "What is regulatory intelligence?",
    answer:
      "It is information about regulatory sources, changes, guidance and obligations, interpreted with their authority, jurisdiction, version and dates. It does not itself determine whether a requirement applies to a particular organization.",
  },
  {
    question: "Where should I look for regulatory changes?",
    answer:
      "Start with Regulatory Changes for dated developments. Inspect original authority and version information before acting on an editorial summary.",
  },
  {
    question: "How are obligations different from regulations?",
    answer:
      "An obligation is a structured requirement grounded in a source. Whether it applies to an entity depends on its activities, jurisdictions and effective period and may require human review.",
  },
  {
    question: "Are regulatory guidance and enforcement actions binding law?",
    answer:
      "Their legal significance varies by authority, document type, jurisdiction and procedural status. Review official source context and obtain appropriate professional advice.",
  },
  {
    question: "What happens when applicability cannot be determined?",
    answer:
      "The governed model preserves UNCERTAIN rather than forcing an unsupported yes or no. Missing facts, source questions and reviewer responsibility should be identified before consequential decisions.",
  },
  {
    question: "Does ZoikoAssure automatically determine compliance?",
    answer:
      "No. ZoikoAssure supports source-grounded regulatory intelligence and compliance-assurance processes. Organizations remain accountable for applicability, controls, legal decisions and evidence-backed review.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-[#F1F5F9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="flex flex-col rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
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
            href="/company/about-us#faq"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}

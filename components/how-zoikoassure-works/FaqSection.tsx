import Link from "next/link";

const faqs = [
  {
    question: "What is the assurance chain?",
    answer:
      "It is a six-stage framework connecting regulatory sources to context-specific applicability, obligations, controls, evidence, and assurance decisions.",
  },
  {
    question: "Does a mapped control prove compliance?",
    answer:
      "No. Mapping identifies a relationship between a duty and an intended safeguard. Actual operation requires reviewable evidence.",
  },
  {
    question: "Can AI make compliance decisions?",
    answer:
      "No. AI may assist with analysis, but uncertainty, legal interpretation, and accountable decisions remain under qualified human governance.",
  },
];

export default function FaqSection() {
  return (
    <section id="faqs" className="w-full bg-[#F1F5F9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-semibold leading-7 text-[#0A2540]">
          How ZoikoAssure Works: FAQs &amp; Summary
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
            >
              <h3 className="text-sm font-semibold leading-5 text-[#0A2540]">
                {faq.question}
              </h3>
              <p className="mt-4 text-[13px] leading-5 text-[#5A6E85]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/resources/faqs"
          className="mt-12 inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-6 py-3 text-base font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
        >
          Explore All FAQs
        </Link>
      </div>
    </section>
  );
}

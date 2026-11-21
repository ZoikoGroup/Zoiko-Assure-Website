"use client";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What are ZoikoAssure integrations?",
    answer:
      "They are intended to bring permitted source records into governed evidence and control workflows. Actual supported connections are confirmed during evaluation.",
  },
  {
    question: "Does a successful sync prove a control?",
    answer:
      "No. Relevance, mapping, freshness and accountable review determine whether a record can support an assurance conclusion.",
  },
  {
    question: "How is sensitive data handled?",
    answer:
      "Scope, access and processing boundaries depend on approved implementation and contractual arrangements. Use verified Trust Center and evaluation channels.",
  },
  {
    question: "What happens if a source is stale?",
    answer:
      "The design distinguishes stale, missing and unavailable information and identifies the need for review rather than assuming a positive result.",
  },
  {
    question: "Does AI approve compliance?",
    answer:
      "AI may assist in identifying candidate relationships where supported. Decisions require accountable human review.",
  },
];

export default function CommonIntegrationsQuestionsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540]">
          Common questions about integrations
        </h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-start rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0A2540]">
                {faq.question}
              </h3>
              <p className="mt-3 text-[13px] sm:text-[13.5px] leading-relaxed text-[#5A6E85]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

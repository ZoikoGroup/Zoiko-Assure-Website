"use client";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is an interactive sandbox enabled by default?",
    answer:
      "No. The public API reference stays read-only first. Any optional sandbox requires separate Security approval, environment checks and egress controls.",
  },
  {
    question: "Where do I find task-oriented integration guides?",
    answer:
      "How-oriented guides, prerequisites and troubleshooting live in Developer Documentation; this documentation is dedicated to contract-derived operations reference.",
  },
  {
    question: "Does a successful API response prove compliance?",
    answer:
      "No. API execution or successful record ingestion does not establish control effectiveness or regulatory compliance.",
  },
  {
    question: "How are restricted operations handled?",
    answer:
      "Server-side authorization filters operations, search results, schema snippets and downloadable spec files before rendering; no private metadata is sent leaked.",
  },
  {
    question: "Where are webhook delivery and signing details?",
    answer:
      "Event delivery and signing specifications belong to the separate Webhooks documentation and are linked only after independent verification.",
  },
];

export default function CommonApiQuestionsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540]">
          Common API documentation questions
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

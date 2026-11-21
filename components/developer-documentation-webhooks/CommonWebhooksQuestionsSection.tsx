"use client";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Does webhook delivery prove compliance?",
    answer:
      "No. Documented delivery receipt confirms transport acknowledgement only; it does not establish downstream processing, control effectiveness or regulatory compliance.",
  },
  {
    question: "Can I configure endpoints from the public page?",
    answer:
      "No. Public documentation is strictly read-only. Subscription creation, verification and key rotation require separate authentication and tenant entitlement.",
  },
  {
    question: "How is manual replay different from system retry?",
    answer:
      "System retries follow the approved automated delivery schedule, whereas manual replay is a separately authorized, idempotent command with explicit duplicate-effect confirmation.",
  },
  {
    question: "Are raw payloads stored in delivery history?",
    answer:
      "No. Delivery logs display redacted metadata, attempt states, HTTP status classes and correlation IDs subject to approved retention policies.",
  },
  {
    question: "Can I send a test event to production?",
    answer:
      "No. Conditional test events require an approved isolated test environment, synthetic contract fixtures and a verified test endpoint.",
  },
];

export default function CommonWebhooksQuestionsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540]">
          Common webhooks questions
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

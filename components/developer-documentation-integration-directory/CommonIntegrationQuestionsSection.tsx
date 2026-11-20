"use client";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is an integration category?",
    answer:
      "A type of operational source that may contribute relevant records; it does not establish supported connectors.",
  },
  {
    question: "Does an active connection establish compliance?",
    answer:
      "No; collection, mapping, evidence quality and accountable review remain distinct.",
  },
  {
    question: "Can I connect from this page?",
    answer:
      "No; this directory is for evaluation. Public discovery does not include account connection or purchase actions.",
  },
  {
    question: "Where are API details?",
    answer:
      "Only approved, versioned documentation is linked when available.",
  },
  {
    question: "What if no verified integrations are listed yet?",
    answer:
      "The directory displays the eight source-system categories and overview link, distinguishing an unpublished inventory from zero operational connectors.",
  },
];

export default function CommonIntegrationQuestionsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540]">
          Common integration questions
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

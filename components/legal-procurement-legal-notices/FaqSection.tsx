import Link from "next/link";

const faqs = [
  {
    question: "Does this page replace a signed customer agreement?",
    answer:
      "Answer: proposed informational; written owner-approved copy required.",
  },
  {
    question: "Where can I find privacy and processing terms?",
    answer: "Answer: only live Privacy/DPA links, never fabricated availability.",
  },
  {
    question: "Is ZoikoAssure a separate legal entity?",
    answer: "ZoikoAssure is a platform of Zoiko Tech Inc., a Zoiko Group company.",
  },
  {
    question: "Are standard frameworks considered legal certification?",
    answer:
      "Standards/framework references not equal certification or regulator approval.",
  },
  {
    question: "How do I contact legal for a correction?",
    answer:
      "Link to authorized general legal-inquiry route only; distinguish service of process.",
  },
];

export default function FaqSection() {
  return (
    <section id="questions" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Questions about these notices
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
            Legal inquiries (verified destination)
          </Link>
        </div>
      </div>
    </section>
  );
}

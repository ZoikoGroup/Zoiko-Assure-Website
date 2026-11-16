import Link from "next/link";

const faqs = [
  {
    question: "What does human oversight mean here?",
    answer:
      "It means designing defined review responsibilities, evidence access, intervention options and decision records around AI-assisted work, proportionate to the risk and use case. Specific implemented features require product confirmation.",
  },
  {
    question: "Does the AI make a legal or compliance determination?",
    answer:
      "No autonomous legal determination is represented by this page. AI assistance can support analysis; authorized professionals retain responsibility for applicable conclusions.",
  },
  {
    question: "Can a human disagree with an AI recommendation?",
    answer:
      "The proposed oversight model includes the ability to request correction, reject, escalate and record a bounded decision, subject to the implemented capability and the organization’s policies.",
  },
  {
    question: "How is uncertainty managed?",
    answer:
      "Missing or conflicting sources, unclear applicability and stale evidence should appear as reviewable uncertainty, not as an unsupported green compliance result.",
  },
  {
    question: "Can an AI process be paused?",
    answer:
      "Intervention controls are a proposed technical design pattern. Whether a particular workflow can be paused, and how a safe state is verified, must be confirmed for that integration.",
  },
  {
    question: "What evidence is retained?",
    answer:
      "The design calls for source context, versions, decision events, reviewer authority and rationale subject to approved access, privacy and retention controls. Actual retained data depends on implementation and contract.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-[#F1F5F9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Common questions about human oversight
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

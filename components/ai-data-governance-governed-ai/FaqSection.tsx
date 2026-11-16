import Link from "next/link";

const faqs = [
  {
    question: "What is Governed AI in ZoikoAssure?",
    answer:
      "Governed AI is the product-side concept for using AI assistance within source-aware, reviewable compliance workflows. This page describes intended operating semantics. Product availability and scope must be confirmed before launch.",
  },
  {
    question: "Is Governed AI the same as Responsible AI?",
    answer:
      "No. Responsible AI is the public Trust Center explanation of commitments and accountability; Governed AI is the separate product destination for workflow design and capability boundaries. They must not share an inverted duplicate route.",
  },
  {
    question: "Can AI decide which laws apply to our organization?",
    answer:
      "No automated legal determination is promised. Applicability depends on an entity, activity, jurisdiction, period and authoritative source, and uncertain results require an appropriately qualified reviewer.",
  },
  {
    question: "What is an AI-generated candidate mapping?",
    answer:
      "It is a proposed association between a regulatory source and an obligation or control. Until an authorized owner reviews the sources and scope, it is not a final regulatory finding.",
  },
  {
    question: "What evidence supports an assurance conclusion?",
    answer:
      "Relevant, authorized evidence should show where it came from, when the underlying activity was observed and whether a control was evaluated. A policy document alone does not establish operating effectiveness.",
  },
  {
    question: "What happens when evidence becomes stale?",
    answer:
      "A governed workflow should make the stale state visible and route the matter for revalidation. It must not preserve a green assured status simply because evidence was attached earlier.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-[#F1F5F9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Questions about Governed AI
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

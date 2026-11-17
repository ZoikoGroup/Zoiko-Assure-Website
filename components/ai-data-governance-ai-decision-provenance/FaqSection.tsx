import Link from "next/link";

const faqs = [
  {
    question: "What is AI decision provenance?",
    answer:
      "It is the record of what information, policies, model version and reviewer actions informed an AI-assisted suggestion and its later disposition. It can help make a decision reconstructable; it is not itself a legal conclusion.",
  },
  {
    question: "Does a provenance record mean the decision was correct?",
    answer:
      "No. A record explains lineage and review. Accuracy and control effectiveness require appropriate source verification, testing and current evidence, with gaps and disagreements visible.",
  },
  {
    question: "Is the AI making the final compliance decision?",
    answer:
      "ZoikoAssure describes AI as an aid to analysis under human accountability. The existence and scope of any implemented approval workflow must be confirmed for the deployment.",
  },
  {
    question: "What information should be connected to a decision?",
    answer:
      "A defensible record may connect source authority and version, relevant jurisdiction/entity context, the candidate suggestion, reviewer role and rationale, event time and evidence freshness where authorized.",
  },
  {
    question: "Why are there several dates?",
    answer:
      "The legal requirement’s effective or commencement date is different from when evidence was observed or when someone reviewed a conclusion. Each date answers a different audit question.",
  },
  {
    question: "Can the outcome change after approval?",
    answer:
      "Yes. A source, model, policy or evidence change may require the decision to be reviewed again. A versioned history should preserve earlier events rather than rewriting them.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-[#F1F5F9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          What evidence supports this?
        </h2>
        <p className="mt-4 max-w-[800px] text-[15px] leading-[1.65] text-[#5A6E85]">
          Check source, collection time, integrity and whether the evidence is still current.
        </p>

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

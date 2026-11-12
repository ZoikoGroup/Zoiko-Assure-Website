import Link from "next/link";

const steps = [
  {
    title: "Step 1: Document Processing",
    description: "Document processing purposes, actors, data categories and recipients.",
  },
  {
    title: "Step 2: Check Authority",
    description: "Check the authoritative sources and jurisdiction-specific scope.",
  },
  {
    title: "Step 3: Review Basis",
    description:
      "Assess the relevant lawful basis and rights obligations with accountable review.",
  },
  {
    title: "Step 4: Evaluate Risk",
    description:
      "Evaluate risks, DPIA triggers and international transfers where relevant.",
  },
  {
    title: "Step 5: Operationalize",
    description: "Assign appropriate safeguards, policies, responsibilities and tests.",
  },
  {
    title: "Step 6: Ensure Accountability",
    description: "Preserve evidence, exceptions and reviewer reasoning over time.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="w-full bg-[#F1F5F9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          From a processing activity to a defensible privacy decision.
        </h2>

        <ol className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.title}
              className="flex flex-col rounded-lg border border-[#E2E8F0] bg-white p-6 pb-10 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[15px] font-semibold leading-snug text-[#0A2540]">
                {step.title}
              </h3>
              <p className="mt-4 text-[13.5px] font-normal leading-[1.6] text-[#6B7280]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

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

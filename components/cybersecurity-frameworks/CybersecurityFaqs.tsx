"use client";

const faqs = [
  {
    question: "Is NIST CSF 2.0 mandatory?",
    answer:
      "It is generally a voluntary outcome framework; separate sector or contract requirements require individual review.",
  },
  {
    question: "Does ISO/IEC 27001 alignment mean certification?",
    answer:
      "No. Certification, where applicable, depends on independently verified issuer, scope and validity.",
  },
  {
    question: "Are CIS Controls law?",
    answer:
      "They are prioritized security safeguards. Particular external requirements need separate source-linked review.",
  },
  {
    question: "Does NIS2 apply to every EU business?",
    answer:
      "No. Sector, entity criteria and national legal implementation matter.",
  },
  {
    question: "Does a mapped control mean it works?",
    answer:
      "No. A mapped control still needs operating evidence and appropriate testing.",
  },
  {
    question: "Can a passed vulnerability scan prove compliance?",
    answer:
      "No. Scan scope, date, remediation and applicable legal duties must be evaluated.",
  },
];

export default function CybersecurityFaqs() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div>
          <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
            Governed AI Assists. Accountable Humans Decide.
          </h2>
          <p className="mt-3 max-w-[800px] text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
            Source-linked summaries and uncertainty can aid review, but cannot
            replace professional judgment or independently determine
            compliance.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="flex flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[22.4px] text-[#0A2540]">
                {faq.question}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

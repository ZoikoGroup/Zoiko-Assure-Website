"use client";

const references = [
  {
    title: "NIST Cybersecurity Framework 2.0",
    description:
      "A voluntary, outcome-oriented framework organized around Govern, Identify, Protect, Detect, Respond and Recover. Use profiles to compare desired and observed outcomes.",
  },
  {
    title: "ISO/IEC 27001:2022",
    description:
      "A standard specifying information security management-system requirements. An organizational certificate, if any, has a separate issuer, scope and validity that must be independently verified.",
  },
  {
    title: "CIS Critical Security Controls v8.1",
    description:
      "A prioritized set of actionable safeguards. Selection and mapping do not establish implementation or testing.",
  },
  {
    title: "NIS2 Directive",
    description:
      "EU legislation requiring jurisdiction- and entity-specific review of scope, national implementation and relevant duties. A framework card is not a legal determination.",
  },
];

export default function CybersecurityReferencesGrid() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          Four Different Kinds of Cybersecurity Reference
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {references.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-start rounded-[8px] border border-[#0066FF]/40 border-t-[3px] border-t-[#0066FF] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[22.4px] text-[#0A2540]">
                {item.title}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

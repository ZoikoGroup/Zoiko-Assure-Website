"use client";

const steps = [
  "Regulatory Source",
  "Applicability",
  "Obligation",
  "Control",
  "Evidence",
  "Assurance",
];

export default function AIAssistsGovernanceOwnsSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-14 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540]">
          AI Assists the Work. Governance Owns the Decision.
        </h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-3 lg:gap-4">
          {steps.map((label) => (
            <div
              key={label}
              className="flex h-12 items-center justify-center rounded-lg border border-[#D9E2EC] bg-white px-3 py-2 text-center text-[13.5px] sm:text-[14px] font-medium leading-snug text-[#5F6B7A] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]"
            >
              {label}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 sm:mt-10 max-w-[860px] text-center text-[13px] sm:text-[13.5px] font-normal leading-[22px] text-[#5A6E85]">
          AI cannot rewrite authoritative records, grant access, convert UNCERTAIN to Applies silently, approve its own output, alter evidence integrity, remove exceptions or issue a compliance certification.
        </p>
      </div>
    </section>
  );
}

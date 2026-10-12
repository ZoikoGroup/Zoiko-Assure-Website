"use client";

type ProblemCardProps = {
  problem: string;
  response: string;
};

const cards = [
  {
    problem: "Regulatory intelligence is disconnected from operations",
    response:
      "A traceable path from authoritative source to affected obligation and control.",
  },
  {
    problem: "Applicability is treated as a static checklist",
    response:
      "Context-aware applicability with reasoning, effective dates and an explicit UNCERTAIN state when review is required.",
  },
  {
    problem: "Control mapping is mistaken for control effectiveness",
    response:
      "Evidence-backed assurance that distinguishes mapping, operation, proof and unresolved gaps.",
  },
  {
    problem: "Evidence is reconstructed at audit time",
    response:
      "Evidence captured with source, lineage, validity and review context before scrutiny.",
  },
  {
    problem: "Accepted exceptions disappear into compliance status",
    response:
      "Exceptions and risk acceptance remain separately governed and never become proof.",
  },
  {
    problem: "AI outputs can obscure accountability",
    response:
      "Source-grounded assistance, uncertainty handling, escalation and accountable human decisions.",
  },
  {
    problem: "Cross-border programs flatten jurisdictional differences",
    response:
      "A model that preserves jurisdiction-specific scope, deltas, dates and review requirements.",
  },
  {
    problem: "Board reporting can lag operational reality",
    response:
      "A defensible view of exposure, evidence gaps, assurance state and accountable ownership.",
  },
];

export default function ProblemCardsSection() {
  return (
    <section className="w-full overflow-hidden bg-slate-50">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-8 sm:gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16 xl:px-20 xl:py-20">
        {/* Section Heading */}
        <div className="flex w-full flex-col items-start gap-3.5">
          <h2 className="m-0 w-full text-2xl font-bold leading-8 text-sky-900 sm:text-3xl sm:leading-9 lg:text-4xl lg:leading-10">
            Connect what is known to what can be proven.
          </h2>
        </div>

        {/* Cards */}
        <div className="flex w-full flex-col gap-5 lg:gap-6">
          {/* Row 1 */}
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-6">
            {cards.slice(0, 4).map((card) => (
              <ProblemCard
                key={card.problem}
                problem={card.problem}
                response={card.response}
              />
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-6">
            {cards.slice(4, 8).map((card) => (
              <ProblemCard
                key={card.problem}
                problem={card.problem}
                response={card.response}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Card Component */
function ProblemCard({ problem, response }: ProblemCardProps) {
  return (
    <article
      className="relative isolate flex min-h-[300px] sm:min-h-[340px] xl:min-h-[380px] h-full w-full flex-col items-start overflow-hidden rounded-xl border-0 p-5 sm:p-6 shadow-none outline-none"
      style={{
        border: "none",
        outline: "none",
        boxShadow: "none",
        filter: "none",
      }}
    >
      {/* Background Image - Preserved */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/about-us/bg.png')",
          boxShadow: "none",
          filter: "none",
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-start gap-4 sm:gap-5">
        <div className="text-xs font-semibold leading-4 text-slate-600">
          THE PROBLEM
        </div>

        <h3 className="m-0 min-h-0 sm:min-h-[56px] w-full text-lg sm:text-xl font-semibold leading-7 text-cyan-950">
          {problem}
        </h3>

        <div className="text-xs font-semibold leading-4 text-sky-700">
          OUR RESPONSE
        </div>

        <p className="m-0 w-full text-sm sm:text-base font-normal leading-6 text-slate-600">
          {response}
        </p>
      </div>
    </article>
  );
}
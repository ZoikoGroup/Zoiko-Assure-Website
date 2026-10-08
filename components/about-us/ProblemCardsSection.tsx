export default function ProblemCardsSection() {
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

  return (
    <section className="w-full overflow-hidden bg-slate-50">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          gap-10
          px-6
          py-16
          sm:px-8
          sm:py-20
          lg:px-20
          lg:py-20
        "
      >
        {/* =========================================
            SECTION HEADING
        ========================================== */}
        <div className="flex w-full flex-col items-start gap-3.5">
          <h2
            className="
              m-0
              w-full
              text-2xl
              font-bold
              leading-8
              text-sky-900
              sm:text-3xl
              sm:leading-9
              lg:text-4xl
              lg:leading-10
            "
          >
            Connect what is known to what can be proven.
          </h2>
        </div>

        {/* =========================================
            CARDS
        ========================================== */}
        <div className="flex w-full flex-col gap-6">
          {/* ==============================
              ROW 1
          =============================== */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {cards.slice(0, 4).map((card, index) => (
              <ProblemCard
                key={index}
                problem={card.problem}
                response={card.response}
              />
            ))}
          </div>

          {/* ==============================
              ROW 2
          =============================== */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {cards.slice(4, 8).map((card, index) => (
              <ProblemCard
                key={index + 4}
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

/* =========================================================
   CARD COMPONENT
========================================================= */

type ProblemCardProps = {
  problem: string;
  response: string;
};

function ProblemCard({
  problem,
  response,
}: ProblemCardProps) {
  return (
    <article
      className="
        relative
        flex
        min-h-[410px]
        w-full
        flex-col
        items-start
        overflow-hidden
        rounded-xl
        border
        border-zinc-200
        bg-white
        p-6
        shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]
      "
    >
      {/* =========================================
          BACKGROUND IMAGE
      ========================================== */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/images/about-us/bg.png')",
        }}
        aria-hidden="true"
      />

      {/* =========================================
          OPTIONAL LIGHT OVERLAY
          Keeps text readable while preserving
          the Figma background appearance.
      ========================================== */}
      <div
        className="
          absolute
          inset-0
          bg-white/10
        "
        aria-hidden="true"
      />

      {/* =========================================
          CONTENT
      ========================================== */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          w-full
          flex-col
          items-start
          gap-5
        "
      >
        {/* THE PROBLEM */}
        <div
          className="
            text-xs
            font-semibold
            leading-4
            text-slate-600
          "
        >
          THE PROBLEM
        </div>

        {/* PROBLEM TITLE */}
        <h3
          className="
            m-0
            min-h-20
            w-full
            text-xl
            font-semibold
            leading-7
            text-cyan-950
          "
        >
          {problem}
        </h3>

        {/* OUR RESPONSE */}
        <div
          className="
            text-xs
            font-semibold
            leading-4
            text-sky-700
          "
        >
          OUR RESPONSE
        </div>

        {/* RESPONSE */}
        <p
          className="
            m-0
            w-full
            text-base
            font-normal
            leading-6
            text-slate-600
          "
        >
          {response}
        </p>
      </div>
    </article>
  );
}
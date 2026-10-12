export default function GovernedCapabilitySection() {
  const principles = [
    {
      title: "Source grounding",
      description:
        "Material regulatory conclusions should be traceable to authoritative sources and versions.",
    },
    {
      title: "Explainability",
      description:
        "Users receive concise reasoning summaries appropriate to the decision context; the product does not expose hidden model chain-of-thought.",
    },
    {
      title: "Uncertainty",
      description:
        "The system should signal when evidence or applicability is insufficient rather than manufacture confidence.",
    },
    {
      title: "Human accountability",
      description:
        "Defined review and escalation paths preserve responsibility for consequential decisions.",
    },
    {
      title: "Decision provenance",
      description:
        "Review, override and approval context can be preserved where appropriate.",
    },
    {
      title: "Change governance",
      description:
        "Material model, policy or prompt changes should be governed and auditable at the level appropriate to their risk.",
    },
  ];

  const flow = [
    {
      label: "Source",
      className: "bg-white",
    },
    {
      label: "Reasoning",
      className: "bg-white",
    },
    {
      label: "Uncertainty",
      className: "bg-orange-50",
    },
    {
      label: "Review",
      className: "bg-white",
    },
    {
      label: "Accountable decision",
      className: "bg-sky-900 text-white",
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
          gap-8
          sm:gap-10
          px-4
          py-10
          sm:px-6
          sm:py-14
          lg:px-8
          lg:py-16
          xl:px-20
          xl:py-20
        "
      >
        {/* =========================================
            HEADING
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
            Governed capability. Accountable decisions.
          </h2>
        </div>

        {/* =========================================
            INTRODUCTION
        ========================================== */}
        <p
          className="
            m-0
            w-full
            text-base
            font-normal
            leading-7
            text-slate-600
            sm:text-lg
          "
        >
          Zoiko Assure treats AI as a governed capability inside a regulated
          operating environment.
        </p>

        {/* =========================================
            AI GOVERNANCE FLOW
        ========================================== */}
        <div
          className="
            grid
            w-full
            grid-cols-2
            gap-3
            sm:grid-cols-3
            md:grid-cols-5
            xl:flex
            xl:flex-row
            xl:items-center
            xl:gap-4
          "
        >
          {flow.map((item, index) => (
            <div
              key={item.label}
              className="
                flex
                w-full
                items-center
                gap-2
                xl:gap-4
                xl:flex-1
              "
            >
              {/* Flow box */}
              <div
                className={`
                  flex
                  min-h-[58px]
                  sm:min-h-[64px]
                  w-full
                  flex-1
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-zinc-200
                  px-2.5
                  py-4
                  sm:px-3
                  sm:py-5
                  ${
                    item.label === "Accountable decision"
                      ? "bg-sky-900"
                      : item.label === "Uncertainty"
                        ? "bg-orange-50"
                        : "bg-white"
                  }
                `}
              >
                <span
                  className={`
                    text-center
                    text-xs
                    font-semibold
                    leading-4
                    sm:text-sm
                    sm:leading-5
                    ${
                      item.label === "Accountable decision"
                        ? "text-white"
                        : "text-sky-900"
                    }
                  `}
                >
                  {item.label}
                </span>
              </div>

              {/* Arrow */}
              {index < flow.length - 1 && (
                <span
                  className="
                    hidden
                    shrink-0
                    text-lg
                    font-normal
                    leading-none
                    text-amber-600
                    xl:block
                  "
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        {/* =========================================
            GOVERNANCE PRINCIPLES
        ========================================== */}
        <div className="flex w-full flex-col gap-6 sm:gap-8">
          {/* Row 1 */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
              lg:gap-8
            "
          >
            {principles.slice(0, 3).map((principle) => (
              <GovernanceItem
                key={principle.title}
                title={principle.title}
                description={principle.description}
              />
            ))}
          </div>

          {/* Row 2 */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
              lg:gap-8
            "
          >
            {principles.slice(3, 6).map((principle) => (
              <GovernanceItem
                key={principle.title}
                title={principle.title}
                description={principle.description}
              />
            ))}
          </div>
        </div>

        {/* =========================================
            FINAL STATEMENT
        ========================================== */}
        <p
          className="
            m-0
            w-full
            text-lg
            font-semibold
            leading-8
            text-sky-900
            sm:text-xl
          "
        >
          AI augments compliance work. It does not remove professional
          responsibility.
        </p>
      </div>
    </section>
  );
}

/* =========================================================
   GOVERNANCE ITEM
========================================================= */

type GovernanceItemProps = {
  title: string;
  description: string;
};

function GovernanceItem({
  title,
  description,
}: GovernanceItemProps) {
  return (
    <article
      className="
        flex
        w-full
        flex-col
        items-start
        gap-4
        border-t
        border-zinc-200
        pt-6
      "
    >
      <h3
        className="
          m-0
          w-full
          text-xl
          font-semibold
          leading-8
          text-cyan-950
          sm:text-2xl
        "
      >
        {title}
      </h3>

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
        {description}
      </p>
    </article>
  );
}
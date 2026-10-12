export default function DefensibilitySection() {
  const principles = [
    {
      number: "01",
      title: "From intelligence to proof",
      description:
        "Regulatory intelligence tells an organization what is changing. Zoiko Assure is designed to connect that change to applicability, obligations, controls, evidence and assurance. The distinction matters because knowing a rule exists is not the same as proving how the organization responded.",
    },
    {
      number: "02",
      title: "Applicability as a first-class decision",
      description:
        "A requirement may apply differently depending on jurisdiction, entity, activity, product, data, customer type and effective period. Zoiko Assure treats applicability as a governed decision with source and reasoning—not as an invisible filter. Where the available facts do not justify certainty, the system can preserve an UNCERTAIN state and route the issue for review.",
    },
    {
      number: "03",
      title: "Evidence as architecture, not attachment",
      description:
        "Evidence is treated as a governed object with provenance: where it came from, what it supports, when it was captured, when it was valid, and how it relates to the relevant obligation and control. The objective is defensibility, not document accumulation.",
    },
    {
      number: "04",
      title: "Assurance is not exception management",
      description:
        "Zoiko Assure keeps evidence-backed assurance separate from exceptions and risk acceptance. A decision to accept risk may be legitimate and governed; it is not evidence that the underlying control is proven.",
    },
    {
      number: "05",
      title: "Governed AI rather than autonomous compliance",
      description:
        "AI is used to accelerate analysis and reasoning under constraints. Source grounding, uncertainty, escalation, review and human accountability are part of the operating model. Zoiko Assure does not position AI output as legal advice or an autonomous determination of compliance.",
    },
    {
      number: "06",
      title: "Time is part of regulatory truth",
      description:
        "Regulatory requirements have legal and effective dates; operational evidence is observed at particular times. Zoiko Assure is designed to preserve those distinctions so that an assurance statement can be understood in the context in which it was made.",
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
            Designed for defensibility, not false certainty.
          </h2>
        </div>

        {/* =========================================
            PRINCIPLES
        ========================================== */}
        <div className="flex w-full flex-col gap-0">
          {Array.from({ length: 3 }).map((_, rowIndex) => {
            const row = principles.slice(rowIndex * 2, rowIndex * 2 + 2);

            return (
              <div
                key={rowIndex}
                className="
                  grid
                  w-full
                  grid-cols-1
                  gap-0
                  lg:grid-cols-2
                  lg:gap-10
                  xl:gap-16
                "
              >
                {row.map((principle) => (
                  <article
                    key={principle.number}
                    className="
                      flex
                      w-full
                      flex-col
                      items-start
                      gap-4
                      border-t
                      border-zinc-200
                      py-6
                    "
                  >
                    {/* Number */}
                    <div
                      className="
                        text-xs
                        font-semibold
                        leading-4
                        text-amber-600
                      "
                    >
                      {principle.number}
                    </div>

                    {/* Title */}
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
                      {principle.title}
                    </h3>

                    {/* Description */}
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
                      {principle.description}
                    </p>
                  </article>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";

const stages = [
  {
    number: "STAGE 01",
    title: "Regulatory Source",
    description:
      "Authority, citation, jurisdiction, publication/effective dates and version.",
    question:
      "Where did this requirement come from, and when is it legally relevant?",
    icon: "/images/about-us/icon1.png",
  },
  {
    number: "STAGE 02",
    title: "Applicability",
    description:
      "Whether and why a requirement applies to the organization’s facts.",
    question:
      "Does this apply here? If uncertain, who must review it?",
    icon: "/images/about-us/icon2.png",
  },
  {
    number: "STAGE 03",
    title: "Obligation",
    description:
      "The requirement expressed as a governable, traceable obligation.",
    question: "What must the organization do?",
    icon: "/images/about-us/icon3.png",
  },
  {
    number: "STAGE 04",
    title: "Control",
    description:
      "The operational mechanism, owner, frequency and test expectation.",
    question:
      "How is the obligation implemented and governed?",
    icon: "/images/about-us/icon4.png",
  },
  {
    number: "STAGE 05",
    title: "Evidence",
    description:
      "Artifacts and system evidence with source, lineage, capture and validity context.",
    question:
      "Can the organization prove the control operated?",
    icon: "/images/about-us/icon5.png",
  },
  {
    number: "STAGE 06",
    title: "Assurance",
    description:
      "Evidence-backed state, gaps, review needs and accountable conclusion.",
    question:
      "What can be defended now—and what still requires action?",
    icon: "/images/about-us/icon6.png",
  },
];

export default function AssuranceChainSection() {
  return (
    <section className="w-full overflow-hidden bg-neutral-50">
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
            One sequential chain. A reviewable basis for assurance.
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
          The public operating model is a six-stage assurance chain:
        </p>

        {/* =========================================
            SIX-STAGE FLOW
        ========================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            gap-4
            lg:flex-row
            lg:items-center
            lg:gap-3
          "
        >
          {stages.map((stage, index) => (
            <div
              key={stage.number}
              className="
                flex
                w-full
                items-center
                gap-3
                lg:flex-1
              "
            >
              {/* Stage flow box */}
              <div
                className="
                  flex
                  min-h-[126px]
                  w-full
                  flex-1
                  flex-col
                  items-center
                  justify-center
                  gap-3.5
                  rounded-lg
                  border
                  border-amber-600
                  px-2
                  py-5
                "
              >
                <Image
                  src={stage.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />

                <div
                  className="
                    w-full
                    text-center
                    text-sm
                    font-semibold
                    leading-5
                    text-sky-900
                    sm:text-base
                    sm:leading-6
                  "
                >
                  {stage.title}
                </div>
              </div>

              {/* Arrow */}
              {index < stages.length - 1 && (
                <div
                  className="
                    hidden
                    shrink-0
                    items-center
                    justify-center
                    lg:flex
                  "
                  aria-hidden="true"
                >
                  <span className="text-lg font-normal text-amber-600">
                    →
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* =========================================
            STAGE DETAIL CARDS
        ========================================== */}
        <div className="flex w-full flex-col gap-6">
          {/* Row 1 */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {stages.slice(0, 3).map((stage) => (
              <StageCard
                key={stage.number}
                number={stage.number}
                title={stage.title}
                description={stage.description}
                question={stage.question}
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
            "
          >
            {stages.slice(3, 6).map((stage) => (
              <StageCard
                key={stage.number}
                number={stage.number}
                title={stage.title}
                description={stage.description}
                question={stage.question}
              />
            ))}
          </div>
        </div>

        {/* =========================================
            BOTTOM NOTE
        ========================================== */}
        <div
          className="
            flex
            w-full
            items-start
            rounded-lg
            border-l-[3px]
            border-amber-600
            bg-slate-50
            p-5
            sm:p-6
          "
        >
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
            The chain is deliberately sequential. Applicability does not
            grant system authorization. Mapping a control does not prove it
            operated. Accepting an exception does not make a control
            effective. AI assistance does not replace accountable judgment.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STAGE CARD
========================================================= */

type StageCardProps = {
  number: string;
  title: string;
  description: string;
  question: string;
};

function StageCard({
  number,
  title,
  description,
  question,
}: StageCardProps) {
  return (
    <article
      className="
        flex
        min-h-[286px]
        w-full
        flex-col
        items-start
        gap-4
        overflow-hidden
        rounded-xl
        border
        border-amber-500
        bg-white
        p-6
        shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]
        sm:p-7
      "
    >
      {/* Stage number */}
      <div
        className="
          text-xs
          font-semibold
          leading-4
          text-amber-600
        "
      >
        {number}
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
        {title}
      </h3>

      {/* Description */}
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

      {/* Divider + Question */}
      <div
        className="
          mt-auto
          flex
          w-full
          items-start
          border-t
          border-zinc-200
          pt-4
        "
      >
        <p
          className="
            m-0
            w-full
            text-base
            font-semibold
            leading-6
            text-sky-900
          "
        >
          {question}
        </p>
      </div>
    </article>
  );
}
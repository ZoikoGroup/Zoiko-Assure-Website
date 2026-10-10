export default function EvidenceLineageSection() {
  const questions = [
    "What was the rule?",
    "Why did it apply?",
    "What obligation followed?",
    "Which control addressed it?",
    "What evidence demonstrates operation?",
    "What conclusion was reached, when, and by whom?",
  ];

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
        {/* =====================================================
            HEADING
        ====================================================== */}
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
            Evidence with lineage. Conclusions with context.
          </h2>
        </div>

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            items-start
            gap-6
            sm:gap-8
            lg:flex-row
            lg:items-start
            lg:gap-10
            xl:gap-16
          "
        >
          {/* Left paragraph */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-6
              lg:w-[400px]
              xl:w-[480px]
              lg:shrink-0
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
              A compliance conclusion is only as defensible as the evidence
              and reasoning behind it. Zoiko Assure therefore treats
              provenance as part of the product model rather than an audit
              afterthought.
            </p>
          </div>

          {/* Right paragraph */}
          <div className="flex w-full flex-1 flex-col items-start">
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
              Where supported by the implemented capability, an assurance
              record can preserve the regulatory source, jurisdiction,
              version, effective date, applicability basis, mapped obligation,
              control, evidence source, capture context, reviewer and relevant
              decision history. Public claims about integrity verification or
              tamper evidence are made only where the implemented system
              supports them.
            </p>
          </div>
        </div>

        {/* =====================================================
            PROVENANCE MODEL
        ====================================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            items-start
            gap-6
            rounded-xl
            border
            border-zinc-200
            bg-slate-50
            p-5
            sm:p-8
          "
        >
          {/* Label */}
          <div
            className="
              text-xs
              font-semibold
              leading-5
              text-slate-600
            "
          >
            PROVENANCE MODEL / CONCEPTUAL, NOT A FACTUAL RECORD
          </div>

          {/* Timeline columns */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-8
              lg:flex-row
              lg:gap-10
            "
          >
            {/* Legal effective-time */}
            <TimelineItem
              title="Legal effective-time"
              lineColor="bg-sky-700"
              dotColor="bg-sky-700"
              text="Regulatory source · Version · Effective date"
            />

            {/* Operational observed-time */}
            <TimelineItem
              title="Operational observed-time"
              lineColor="bg-amber-600"
              dotColor="bg-amber-600"
              text="Evidence source · Capture context · Validity"
            />
          </div>

          {/* Provenance chain */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-4
              rounded-lg
              border
              border-zinc-200
              bg-white
              p-4
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:p-5
            "
          >
            <div
              className="
                text-sm
                font-semibold
                leading-6
                text-sky-900
                sm:text-base
              "
            >
              Applicability → Obligation → Control → Evidence
            </div>

            <div
              className="
                text-sm
                font-normal
                leading-6
                text-slate-600
                sm:text-base
              "
            >
              Reviewer · Decision history · Assurance
            </div>
          </div>
        </div>

        {/* =====================================================
            QUESTION PATH TITLE
        ====================================================== */}
        <div className="w-full">
          <p
            className="
              m-0
              text-base
              font-semibold
              leading-7
              text-cyan-950
              sm:text-lg
            "
          >
            This creates a regulator-readable question path:
          </p>
        </div>

        {/* =====================================================
            QUESTIONS
        ====================================================== */}
        <div className="flex w-full flex-col gap-4">
          {/* Desktop: 3 columns / Tablet: 2 columns / Mobile: 1 column */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-x-6
              gap-y-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {questions.map((question, index) => (
              <QuestionItem
                key={question}
                number={String(index + 1).padStart(2, "0")}
                question={question}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TIMELINE ITEM
========================================================= */

type TimelineItemProps = {
  title: string;
  lineColor: string;
  dotColor: string;
  text: string;
};

function TimelineItem({
  title,
  lineColor,
  dotColor,
  text,
}: TimelineItemProps) {
  return (
    <div className="flex w-full flex-1 flex-col items-start gap-3.5">
      {/* Title */}
      <div
        className="
          text-lg
          font-semibold
          leading-7
          text-sky-900
          sm:text-xl
        "
      >
        {title}
      </div>

      {/* Timeline */}
      <div className="flex w-full items-center">
        {/* Start dot */}
        <div
          className={`h-2.5 w-2.5 shrink-0 rounded-full ${dotColor}`}
        />

        {/* Line */}
        <div className={`h-0.5 flex-1 ${lineColor}`} />

        {/* Arrow */}
        <div
          className={`
            flex
            h-5
            w-5
            shrink-0
            items-center
            justify-center
            text-base
            leading-none
            ${lineColor.replace("bg-", "text-")}
          `}
          aria-hidden="true"
        >
          →
        </div>
      </div>

      {/* Description */}
      <div
        className="
          w-full
          text-sm
          font-normal
          leading-6
          text-slate-600
          sm:text-base
        "
      >
        {text}
      </div>
    </div>
  );
}

/* =========================================================
   QUESTION ITEM
========================================================= */

type QuestionItemProps = {
  number: string;
  question: string;
};

function QuestionItem({
  number,
  question,
}: QuestionItemProps) {
  return (
    <div
      className="
        flex
        min-h-[72px]
        w-full
        items-start
        gap-4
        border-t
        border-zinc-200
        py-4
      "
    >
      {/* Number */}
      <div
        className="
          shrink-0
          text-xs
          font-normal
          leading-5
          text-amber-600
        "
      >
        {number}
      </div>

      {/* Question */}
      <div
        className="
          flex-1
          text-base
          font-semibold
          leading-6
          text-cyan-950
          sm:text-lg
        "
      >
        {question}
      </div>
    </div>
  );
}
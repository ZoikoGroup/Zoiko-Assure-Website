export default function JurisdictionSection() {
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
            Common baselines. Jurisdiction-specific truth.
          </h2>
        </div>

        {/* =========================================
            CONTENT
        ========================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            items-start
            gap-10
            lg:flex-row
            lg:items-center
            lg:gap-16
          "
        >
          {/* =========================================
              LEFT TEXT
          ========================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-6
              lg:w-[680px]
              lg:shrink-0
            "
          >
            {/* Paragraph 1 */}
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
              Global compliance is not a translation exercise. The same
              business activity can be governed differently across
              jurisdictions, entities and effective periods. Classification
              thresholds, regulatory scope, documentation expectations,
              enforcement approaches, data rules and AI obligations can
              diverge.
            </p>

            {/* Paragraph 2 */}
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
              Zoiko Assure is designed to preserve those differences. It can
              structure common baselines while exposing jurisdiction-specific
              deltas, conflicts and review requirements. The aim is not to
              claim that software resolves every legal conflict automatically.
              It is to make the differences visible, source-grounded and
              governable before they become examination or operational
              problems.
            </p>
          </div>

          {/* =========================================
              CONCEPTUAL SCOPE MODEL
          ========================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-5
              rounded-xl
              border
              border-zinc-200
              bg-slate-50
              p-6
              sm:p-7
              lg:flex-1
            "
          >
            {/* Label */}
            <div
              className="
                text-xs
                font-semibold
                leading-4
                text-slate-600
              "
            >
              CONCEPTUAL SCOPE MODEL
            </div>

            {/* Common Baseline */}
            <div
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-lg
                bg-sky-900
                px-5
                py-5
              "
            >
              <span
                className="
                  text-lg
                  font-semibold
                  leading-7
                  text-white
                  sm:text-xl
                "
              >
                Common baseline
              </span>
            </div>

            {/* Scope Items */}
            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-4
                sm:grid-cols-3
              "
            >
              <ScopeItem label="Jurisdiction" />
              <ScopeItem label="Entity" />
              <ScopeItem label="Effective period" />
            </div>

            {/* Deltas / Conflicts / Review */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-2
                rounded-lg
                bg-orange-50
                p-5
              "
            >
              <h3
                className="
                  m-0
                  w-full
                  text-base
                  font-semibold
                  leading-7
                  text-cyan-950
                  sm:text-lg
                "
              >
                Deltas · Conflicts · Review
              </h3>

              <p
                className="
                  m-0
                  w-full
                  text-sm
                  font-normal
                  leading-6
                  text-slate-600
                  sm:text-base
                "
              >
                Preserve scope, source, dates and review requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SCOPE ITEM
========================================================= */

type ScopeItemProps = {
  label: string;
};

function ScopeItem({ label }: ScopeItemProps) {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        items-center
        gap-3
      "
    >
      {/* Down Arrow */}
      <div
        className="
          flex
          h-6
          w-5
          items-center
          justify-center
          text-sky-700
        "
        aria-hidden="true"
      >
        <span className="text-xl leading-none">↓</span>
      </div>

      {/* Scope Box */}
      <div
        className="
          flex
          w-full
          items-center
          justify-center
          rounded-lg
          border
          border-zinc-200
          bg-white
          px-2
          py-4
        "
      >
        <span
          className="
            text-center
            text-xs
            font-semibold
            leading-4
            text-sky-900
          "
        >
          {label}
        </span>
      </div>
    </div>
  );
}
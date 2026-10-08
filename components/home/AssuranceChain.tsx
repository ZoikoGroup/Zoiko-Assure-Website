"use client";

const assuranceSteps = [
  {
    step: "Step 01",
    title: "Source",
    description: "Verified authority & citation citation",
  },
  {
    step: "Step 02",
    title: "Applicability",
    description: "Scope, UNCERTAIN handling & context",
  },
  {
    step: "Step 03",
    title: "Obligation",
    description: "Decomposed requirements & rules",
  },
  {
    step: "Step 04",
    title: "Control",
    description: "Owners, schedules & execution",
  },
  {
    step: "Step 05",
    title: "Evidence",
    description: "Tamper-evident vault & timestamps",
  },
  {
    step: "Step 06",
    title: "Assurance",
    description: "Defensible audit-ready state",
  },
];

export default function AssuranceChain() {
  return (
    <section className="w-full bg-neutral-50">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          py-16
          sm:px-8
          md:px-10
          lg:px-14
          lg:py-20
          xl:px-20
        "
      >
        <div className="mx-auto w-full max-w-[1280px]">
          {/* =====================================================
              HEADING
          ====================================================== */}

          <div className="flex w-full flex-col items-start gap-4">
            <h2
              className="
                text-3xl
                font-bold
                leading-9
                tracking-tight
                text-sky-900
              "
            >
              From Regulatory Source to Defensible Assurance
            </h2>

            <p
              className="
                pt-1
                text-base
                font-normal
                leading-6
                text-slate-600
              "
            >
              The end-to-end governing chain that makes compliance defensible.
            </p>
          </div>

          {/* =====================================================
              SIX STEP CARDS
          ====================================================== */}

          <div
            className="
              mt-12
              grid
              w-full
              grid-cols-1
              gap-4
              sm:mt-14
              sm:grid-cols-2
              lg:mt-16
              lg:grid-cols-3
              xl:grid-cols-6
              xl:gap-5
            "
          >
            {assuranceSteps.map((item) => (
              <div
                key={item.step}
                className="
                  relative
                  flex
                  min-h-[104px]
                  w-full
                  flex-col
                  items-center
                  justify-start
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  opacity-60
                  shadow-[0px_1px_2px_0px_rgba(82,101,117,0.09)]
                "
              >
                {/* =================================================
                    CARD BACKGROUND
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                    bg-no-repeat
                  "
                  style={{
                    backgroundImage: "url('/home/bg1.png')",
                  }}
                />

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    w-full
                    flex-col
                    items-center
                    px-4
                    py-3
                    text-center
                  "
                >
                  {/* Step */}
                  <div className="flex h-5 items-center justify-center">
                    <span
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        leading-4
                        text-amber-700
                      "
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="pt-1">
                    <h3
                      className="
                        text-sm
                        font-bold
                        leading-5
                        text-cyan-950
                      "
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="pt-1">
                    <p
                      className="
                        max-w-[160px]
                        text-[11px]
                        font-normal
                        leading-4
                        text-cyan-950
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
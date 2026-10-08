"use client";

const aiWorkItems = [
  {
    title: "1. Source Grounding",
    description:
      "Every AI response links directly to citation texts.",
  },
  {
    title: "2. Explainability",
    description:
      "Clear reasoning summaries for board and regulators.",
  },
  {
    title: "3. Uncertainty Handling",
    description:
      "Routes low-confidence assessments to human review.",
  },
  {
    title: "4. Accountable Review",
    description:
      "Preserves human decision overrides in audit logs.",
  },
];

export default function AIThatShowsItsWork() {
  return (
    <section className="w-full bg-slate-50">
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
              HEADER
          ====================================================== */}

          <div className="flex w-full flex-col items-start">
            <div className="w-full max-w-[672px]">
              <h2
                className="
                  text-3xl
                  font-bold
                  leading-9
                  tracking-tight
                  text-sky-900
                "
              >
                AI That Shows Its Work
              </h2>

              <p
                className="
                  mt-4
                  text-base
                  font-normal
                  leading-6
                  text-slate-600
                "
              >
                ZoikoAssure uses governed AI to accelerate analysis while
                maintaining source attribution, explainability, and human
                oversight.
              </p>
            </div>
          </div>

          {/* =====================================================
              FOUR CARDS
          ====================================================== */}

          <div
            className="
              mt-12
              grid
              w-full
              grid-cols-1
              gap-5
              sm:grid-cols-2
              xl:grid-cols-4
            "
          >
            {aiWorkItems.map((item) => (
              <article
                key={item.title}
                className="
                  relative
                  min-h-[120px]
                  w-full
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]
                "
              >
                {/* Figma background */}
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
                    backgroundImage: "url('/home/bg4.png')",
                  }}
                />

                {/* Card content */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                    items-start
                    p-6
                  "
                >
                  <h3
                    className="
                      text-sm
                      font-bold
                      leading-5
                      text-sky-900
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[240px]
                      text-xs
                      font-normal
                      leading-4
                      text-slate-500
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
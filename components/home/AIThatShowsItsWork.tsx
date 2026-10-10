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
      <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16 xl:px-20 xl:py-20">
        <div className="mx-auto w-full max-w-[1280px]">
          {/* Header */}
          <div className="flex w-full flex-col items-start">
            <div className="w-full max-w-[672px]">
              <h2 className="text-2xl font-bold leading-8 tracking-tight text-sky-900 sm:text-3xl sm:leading-9">
                AI That Shows Its Work
              </h2>

              <p className="mt-3 sm:mt-4 text-base font-normal leading-6 text-slate-600">
                ZoikoAssure uses governed AI to accelerate analysis while
                maintaining source attribution, explainability, and human
                oversight.
              </p>
            </div>
          </div>

          {/* Four Cards */}
          <div className="mt-8 sm:mt-10 lg:mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-5">
            {aiWorkItems.map((item) => (
              <article
                key={item.title}
                className="relative isolate min-h-[120px] w-full overflow-hidden rounded-xl border-0 bg-transparent p-0 shadow-none ring-0 outline-none"
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
                    backgroundImage: "url('/home/bg4.png')",
                    boxShadow: "none",
                    filter: "none",
                  }}
                />

                {/* Card Content */}
                <div className="relative z-10 flex min-h-[120px] w-full flex-col items-start p-5 sm:p-6">
                  <h3 className="text-sm font-bold leading-5 text-sky-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 w-full text-xs font-normal leading-4 text-slate-500">
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
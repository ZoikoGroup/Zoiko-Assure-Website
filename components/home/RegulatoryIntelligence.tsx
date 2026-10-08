const intelligenceItems = [
  {
    type: "Guide",
    title: "EU AI Act Applicability Matrix",
    description:
      "Detailed breakdown of high-risk classification criteria.",
  },
  {
    type: "Briefing",
    title: "DORA Examination Preparedness",
    description:
      "Operational resilience evidence requirements.",
  },
  {
    type: "Methodology",
    title: "Continuous Assurance vs Monitoring",
    description:
      "Why proof requires evidence lineage.",
  },
];

export default function RegulatoryIntelligence() {
  return (
    <section className="w-full border-t border-slate-200 bg-slate-50">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          justify-start
          px-5
          py-14
          sm:px-8
          md:px-10
          lg:px-20
          lg:py-20
        "
      >
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full max-w-[1280px] flex-col items-start">
            {/* Heading */}
            <div className="flex w-full flex-col items-start">
              <h2
                className="
                  text-2xl
                  font-bold
                  leading-8
                  tracking-tight
                  text-sky-900
                  sm:text-3xl
                  sm:leading-9
                "
              >
                Regulatory Intelligence, Explained With Sources
              </h2>
            </div>

            {/* Cards */}
            <div className="mt-10 w-full sm:mt-12">
              <div
                className="
                  grid
                  w-full
                  grid-cols-1
                  gap-5
                  md:grid-cols-2
                  lg:grid-cols-3
                  lg:gap-6
                "
              >
                {intelligenceItems.map((item) => (
                  <article
                    key={item.title}
                    className="
                      flex
                      min-h-[144px]
                      w-full
                      flex-col
                      items-start
                      justify-start
                      overflow-hidden
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      p-6
                      shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]
                    "
                    style={{
                      backgroundImage: "url('/home/bg7.png')",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {/* Type */}
                    <div className="flex h-6 w-full items-center">
                      <span
                        className="
                          text-xs
                          font-bold
                          uppercase
                          leading-4
                          text-amber-600
                        "
                      >
                        {item.type}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="mt-2 flex w-full items-start">
                      <h3
                        className="
                          text-base
                          font-bold
                          leading-6
                          text-sky-900
                        "
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="mt-2 flex w-full items-start">
                      <p
                        className="
                          max-w-[320px]
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
        </div>
      </div>
    </section>
  );
}
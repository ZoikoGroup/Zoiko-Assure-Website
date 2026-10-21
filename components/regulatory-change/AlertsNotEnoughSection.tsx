"use client";

const items = [
  {
    title: "Change is not impact",
    description:
      "A regulatory update does not automatically tell each entity or business line what must change.",
  },
  {
    title: "Effective date is not detected date",
    description:
      "A rule may be published now, apply later or have multiple phased dates.",
  },
  {
    title: "An obligation is not a control",
    description:
      "A duty must be expressed, owned and mapped before implementation can be evaluated.",
  },
  {
    title: "A mapped control is not evidence",
    description:
      "Control design must not be treated as proof that the response operated.",
  },
  {
    title: "Accepted risk does not prove assurance",
    description:
      "Exceptions may be governed, but their approval does not turn gaps into proven operation.",
  },
];

export default function AlertsNotEnoughSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-center text-2xl font-semibold leading-[28.8px] text-[#0A2540]">
          Why Alerts Alone Are Not Enough
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                {item.title}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

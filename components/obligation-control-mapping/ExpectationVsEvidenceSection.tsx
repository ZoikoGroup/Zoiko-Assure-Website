"use client";

const progressCards = [
  "Mapped",
  "Designed / assigned",
  "Operation documented",
  "Evidence evaluated",
];

export default function ExpectationVsEvidenceSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex w-full flex-col items-start text-left">
          <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
            Mapping sets the expectation. Evidence demonstrates operation.
          </h2>
          <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
            <span className="sm:whitespace-nowrap">A control description, operating frequency and proposed test can explain the intended response—but proof depends on the evidence and review actually</span>
            <br />
            available.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {progressCards.map((title) => (
            <div
              key={title}
              className="flex min-h-[82px] items-center rounded-lg border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[14px] font-semibold leading-[16.8px] text-[#172033]">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


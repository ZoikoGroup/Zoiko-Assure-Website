"use client";

const scopeFacts = [
  "Jurisdiction",
  "Legal Entity",
  "Activity",
  "Product",
  "Data Context",
  "Customer",
  "Period",
];

export default function FactsDefineScopeSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="max-w-[800px]">
          <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
            Applicability begins with the facts that define the scope.
          </h2>
          <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
            Organize context by jurisdiction, legal entity, activity, product, data, customer type and effective period—without flattening local differences.
          </p>
        </div>

        {/* 7 Scope Fact Cards */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {scopeFacts.map((fact) => (
            <div
              key={fact}
              className="flex h-[82.8px] items-center justify-center rounded-lg border border-[#D9E2EC] bg-white p-6 text-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h5 className="text-[14px] font-semibold leading-[16.8px] text-[#172033]">
                {fact}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

const roles = [
  "Legal/Regulatory",
  "Compliance",
  "Control Owner",
  "Assurance/Audit",
  "Security/Eng",
  "Executive",
];

export default function AccountableOwnershipSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex max-w-[800px] flex-col items-start text-left">
          <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033] md:text-3xl md:leading-[36px]">
            Every critical mapping needs accountable ownership.
          </h2>
          <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
            Show who created, reviewed, approved or challenged a relationship—and when—without presenting AI assistance as an independent legal decision.
          </p>
        </div>


        {/* 6 Role Cards */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {roles.map((role) => (
            <div
              key={role}
              className="flex min-h-[82px] items-center justify-center rounded-lg border border-[#D9E2EC] bg-white p-4 text-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[14px] font-semibold leading-[16.8px] text-[#172033]">
                {role}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

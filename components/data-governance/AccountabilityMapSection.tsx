"use client";

const roles = [
  {
    title: "ZoikoAssure Owner",
    description: "Platform controls, security architecture and provided models.",
  },
  {
    title: "Customer Owner",
    description: "Tenant classification, access assignment, and retention policy selection.",
  },
  {
    title: "Third-Party Owner",
    description: "External integrations and connected data systems.",
  },
];

export default function AccountabilityMapSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          Governance Is Shared, but Accountability Must Be Assigned.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div
              key={role.title}
              className="flex flex-col justify-start rounded-lg border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[14px] sm:text-[15px] font-semibold leading-[16px] text-[#0A2540]">
                {role.title}
              </h3>
              <p className="pt-4 pb-2 text-[12px] font-normal leading-[19.2px] text-[#5F6B7A]">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

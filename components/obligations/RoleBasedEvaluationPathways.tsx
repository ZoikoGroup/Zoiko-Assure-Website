const roles = [
  {
    role: "General Counsel",
    description: "Inspect exact provisions, citations and interpretive limits.",
  },
  {
    role: "Chief Compliance Officer",
    description: "Review handoff into governed operational mapping.",
  },
  {
    role: "Chief Risk Officer",
    description:
      "Link obligations to regulatory change and qualified assessments.",
  },
  {
    role: "Internal Audit",
    description: "Trace stable references, dated records and review history.",
  },
];

export default function RoleBasedEvaluationPathways() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-0">
        <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          Role-Based Evaluation Pathways
        </h2>

        <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((item) => (
            <div
              key={item.role}
              className="flex flex-col items-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.02)]"
            >
              <h5 className="text-[13.28px] font-semibold leading-[15.936px] text-[#0A2540]">
                {item.role}
              </h5>
              <p className="pb-6 pt-4 text-[12px] font-normal leading-[19.2px] text-[#5F6B7A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

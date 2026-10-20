export default function SixStageModelSection() {
  const stages = [
    { name: "Regulatory Source", isHighlight: false },
    { name: "Applicability", isHighlight: false },
    { name: "Obligation", isHighlight: false },
    { name: "Control", isHighlight: false },
    { name: "Evidence", isHighlight: false },
    { name: "Assurance", isHighlight: true },
  ];

  return (
    <section id="obligation-proof-model" className="w-full bg-[#F4F7FA] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="text-center">
          <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
            The Six-Stage Obligation-to-Proof Chain
          </h2>
        </div>

        {/* Horizontal Chain */}
        <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center rounded-[8px] p-4 text-center transition-shadow duration-200 ${
                stage.isHighlight
                  ? "border border-[#D97637] bg-white shadow-[0px_4px_12px_0px_rgba(0,111,232,0.1)]"
                  : "border border-[#D9E2EC] bg-white hover:shadow-sm"
              }`}
            >
              <span
                className={`text-[14px] leading-[22.4px] ${
                  stage.isHighlight
                    ? "font-semibold text-[#D97637]"
                    : "font-normal text-[#5F6B7A]"
                }`}
              >
                {stage.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Context Paragraph */}
        <div className="mt-8 text-left">
          <p className="text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
            A mapped control is not an operated control; missing or stale proof cannot become Proven; approved exceptions and risk acceptance remain independent governance records.
          </p>
        </div>
      </div>
    </section>
  );
}

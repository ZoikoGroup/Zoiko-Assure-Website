export default function ExecutiveEvaluationSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="text-center">
          <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
            Executive Evaluation Scenario
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16">
          {/* Left Column Steps */}
          <div className="space-y-4">
            <div className="border-l-4 border-l-[#D97637] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md">
              <p className="text-[16px] leading-[25.6px] text-[#172033]">
                <span className="font-bold">1. Change appears:</span>{" "}
                <span className="font-normal">An authoritative requirement changes.</span>
              </p>
            </div>

            <div className="border-l-4 border-l-[#D97637] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md">
              <p className="text-[16px] leading-[25.6px] text-[#172033]">
                <span className="font-bold">2. Scope is reviewed:</span>{" "}
                <span className="font-normal">
                  Entity result is UNCERTAIN due to missing<br />facts.
                </span>
              </p>
            </div>

            <div className="border-l-4 border-l-[#D97637] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md">
              <p className="text-[16px] leading-[25.6px] text-[#172033]">
                <span className="font-bold">3. Obligation mapped:</span>{" "}
                <span className="font-normal">
                  Requirement connected to a proposed<br />control.
                </span>
              </p>
            </div>

            <div className="border-l-4 border-l-[#D97637] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md">
              <p className="text-[16px] leading-[25.6px] text-[#172033]">
                <span className="font-bold">4. Evidence checked:</span>{" "}
                <span className="font-normal">
                  Expected proof is stale for the period under<br />review.
                </span>
              </p>
            </div>
          </div>

          {/* Right Column Steps */}
          <div className="space-y-4">
            <div className="border-l-4 border-l-[#D97637] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md">
              <p className="text-[16px] leading-[25.6px] text-[#172033]">
                <span className="font-bold">5. Assurance evaluated:</span>{" "}
                <span className="font-normal">
                  Supported state is Requires review until<br />resolved.
                </span>
              </p>
            </div>

            <div className="border-l-4 border-l-[#D97637] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md">
              <p className="text-[16px] leading-[25.6px] text-[#172033]">
                <span className="font-bold">6. Risk accepted separately:</span>{" "}
                <span className="font-normal">
                  Owner acknowledges exposure via<br />exception.
                </span>
              </p>
            </div>

            <div className="border-l-4 border-l-[#D97637] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md">
              <p className="text-[16px] leading-[25.6px] text-[#172033]">
                <span className="font-bold">7. Buyer evaluates:</span>{" "}
                <span className="font-normal">CRO requests demo to evaluate architecture.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

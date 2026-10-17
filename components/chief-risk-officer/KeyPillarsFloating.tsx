export default function KeyPillarsFloating() {
  return (
    <div className="relative z-10 w-full -mt-[30px]">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {/* Pillar 1 */}
          <div className="flex min-h-[178px] flex-col justify-start rounded-[8px] border-t-4 border-t-[#D9E2EC] border-x border-b border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md">
            <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
              Source Authority
            </h4>
            <p className="mt-4 max-w-[174px] text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
              Every material<br />requirement starts with a<br />traceable regulatory<br />source.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="flex min-h-[178px] flex-col justify-start rounded-[8px] border-t-4 border-t-[#D9E2EC] border-x border-b border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md">
            <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
              Contextual Scope
            </h4>
            <p className="mt-4 max-w-[174px] text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
              Applicability depends on<br />jurisdiction, legal entity,<br />activity and effective<br />period.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="flex min-h-[178px] flex-col justify-start rounded-[8px] border-t-4 border-t-[#D9E2EC] border-x border-b border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md">
            <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
              Evidence-Backed
            </h4>
            <p className="mt-4 max-w-[174px] text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
              Mapped controls and<br />operating proof are<br />evaluated separately.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="flex min-h-[178px] flex-col justify-start rounded-[8px] border-t-4 border-t-[#D9E2EC] border-x border-b border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md">
            <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
              Human Accountability
            </h4>
            <p className="mt-4 max-w-[174px] text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
              UNCERTAIN decisions,<br />exceptions and approvals<br />retain accountable<br />owners.
            </p>
          </div>

          {/* Pillar 5 */}
          <div className="flex min-h-[178px] flex-col justify-start rounded-[8px] border-t-4 border-t-[#D9E2EC] border-x border-b border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md">
            <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
              Time-Aware Truth
            </h4>
            <p className="mt-4 max-w-[174px] text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
              Legal effective time and<br />evidence observed time<br />are shown distinctly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

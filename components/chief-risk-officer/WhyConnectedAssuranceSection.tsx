export default function WhyConnectedAssuranceSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="text-left">
          <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
            Why CROs Need Connected Assurance
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="flex min-h-[172px] flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md">
            <h4 className="max-w-[236px] text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
              Regulatory change<br />outpaces risk reviews
            </h4>
            <p className="mt-4 max-w-[236px] text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
              A new rule is only the beginning;<br />
              the risk decision depends on what<br />
              applies and when.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex min-h-[172px] flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md">
            <h4 className="max-w-[236px] text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
              Mapping does not<br />prove operation
            </h4>
            <p className="mt-4 max-w-[236px] text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
              Control libraries may be populated<br />
              while evidence is absent, stale or<br />
              incomplete.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex min-h-[172px] flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md">
            <h4 className="max-w-[236px] text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
              Accepted exceptions<br />obscure status
            </h4>
            <p className="mt-4 max-w-[236px] text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
              A formally accepted risk remains an<br />
              exposure that must be named and<br />
              revisited.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex min-h-[172px] flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md">
            <h4 className="max-w-[236px] text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
              Board summaries<br />need lineage
            </h4>
            <p className="mt-4 max-w-[236px] text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
              A conclusion is difficult to defend<br />
              without version, jurisdiction,<br />
              evidence and reviewer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

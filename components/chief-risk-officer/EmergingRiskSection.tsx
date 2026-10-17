import Image from "next/image";

export default function EmergingRiskSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Specimen Image */}
          <div className="order-2 flex w-full items-center justify-center lg:order-1 lg:justify-start">
            <div className="relative aspect-[576/432] w-full max-w-[576px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/chief-risk-officer/emerging-risk-ui-v2.jpg"
                alt="Emerging Risk and Exceptions UI"
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="order-1 flex flex-col items-start lg:order-2">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Exceptions &amp; Risk Acceptance
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Keep governance exceptions separate from proof. An accepted risk object includes rationale, owner, and expiry. It does not revise a failed control to a positive assurance state.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Emerging Risk &amp; Scenario Review
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Model change-driven uncertainty like new market entry, M&amp;A transformations, or regulatory examination prep to understand exposure before it becomes critical.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

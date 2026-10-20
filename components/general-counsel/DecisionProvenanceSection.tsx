"use client";

import Image from "next/image";

export default function DecisionProvenanceSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image */}
          <div className="order-2 flex w-full items-center justify-center lg:order-1 lg:justify-start">
            <div className="relative aspect-[576/432] w-full max-w-[576px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/general-counsel/legal-decision-control-handoff-ui.png"
                alt="Legal Decision and Control Handoff UI"
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
                Legal Decisions, Approvals and Provenance
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Preserve the reviewer role, basis, version, and timestamps. Overrides do not delete prior audit contexts, maintaining a complete time-scoped decision trail.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                From Legal Scope to Obligations and Controls
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Show the handoff from a scoped legal determination to atomic obligations and mapped controls. A mapped control is not proof of operational effectiveness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

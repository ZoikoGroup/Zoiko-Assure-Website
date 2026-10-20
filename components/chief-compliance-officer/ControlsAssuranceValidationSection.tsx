import Image from "next/image";
import Link from "next/link";

export default function ControlsAssuranceValidationSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Specimen Image */}
          <div className="order-2 flex w-full items-center justify-center lg:order-1 lg:justify-start">
            <div className="relative aspect-[576/432] w-full max-w-[576px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/chief-compliance-officer/controls-assurance-validation-ui.png"
                alt="Controls and Assurance Validation UI"
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
                Controls, Ownership &amp; Test Expectations
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                See control mapping cards with owner, frequency, expected evidence. Mapped does not mean tested or proven. Authority is object-scoped and server-enforced.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Evidence Lineage &amp; Assurance Conclusions
              </h2>
              <p className="mt-4 pb-6 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Trace origin, captured context, and validity window. Assurance uses only Proven, Not proven, or Requires review based on evidence. Exceptions are distinctly separated.
              </p>
              <div>
                <Link
                  href="/evidence-provenance"
                  className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
                >
                  Explore Evidence
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

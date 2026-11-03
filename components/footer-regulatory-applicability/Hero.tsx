import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <span className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.08em] text-[#F58220]">
              Regulatory Applicability
            </span>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[60px] lg:leading-[1.03]">
              Know Which Requirements Apply—and Why.
            </h1>

            <p className="mt-6 max-w-[710px] text-base leading-7 text-[#D9E2EC] sm:text-lg">
              Applicability depends on your jurisdiction, legal entity, activities, products, data, customer context and the period in which a requirement is effective.
            </p>

            <p className="mt-6 max-w-[710px] text-sm leading-6 text-[#D9E2EC]">
              ZoikoAssure connects those facts to authoritative regulatory sources and explainable review workflows. Regulatory applicability is the contextual determination of whether a particular legal or regulatory requirement applies to a defined organization, activity or circumstance during an applicable period. It depends on authoritative sources and verified facts; unresolved questions require accountable review.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Request a Demo
              </Link>
              <Link
                href="/platform/applicability-engine"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Explore Applicability Engine
              </Link>
            </div>

            <Link
              href="/methodology"
              className="mt-6 text-sm leading-6 text-white underline underline-offset-2 transition-colors duration-200 hover:text-[#F58220]"
            >
              Review Our Methodology
            </Link>

            <p className="mt-4 max-w-[710px] text-xs font-semibold leading-5 text-[#94A3B8]">
              Illustrative workflows explain the approach; they are not legal advice or a determination about your organization.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[507px] rounded-lg bg-white p-4 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[475/348] w-full overflow-hidden">
                <Image
                  src="/footer-regulatory-applicability/fra1.webp"
                  alt="Two professionals shaking hands over a reviewed agreement"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 475px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <span className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.08em] text-[#F58220]">
              Assurance / Audit Readiness
            </span>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[60px] lg:leading-[1.03]">
              Prepare for scrutiny with traceable evidence.
            </h1>

            <p className="mt-6 max-w-[710px] text-base leading-7 text-[#D9E2EC] sm:text-lg">
              Bring regulatory context, obligation and control records, evidence history, and outstanding gaps into a reviewable preparation workflow—with accountable human oversight.
            </p>

            <p className="mt-6 max-w-[710px] text-sm leading-6 text-[#D9E2EC]">
              See what was requested, what is available, what changed, and what remains unresolved—within a defined scope and review period.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Request a Demo
              </Link>
              <Link
                href="/assurance/evidence-provenance"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Explore Evidence Provenance
              </Link>
            </div>

            <p className="mt-6 max-w-[710px] text-xs font-semibold leading-5 text-[#94A3B8]">
              Illustrative workflow. Package readiness does not establish compliance, audit success, certification, legal advice, or independent assurance.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[507px] rounded-lg bg-white p-4 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[475/348] w-full overflow-hidden">
                <Image
                  src="/audit-readiness/ar1.webp"
                  alt="Executive team reviewing an audit preparation workflow and traceable evidence"
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

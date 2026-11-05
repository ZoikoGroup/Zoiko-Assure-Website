import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <span className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.08em] text-[#F58220]">
              For Internal Audit
            </span>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[52px] lg:leading-[1.1]">
              Give Internal Audit a Traceable Basis for Independent Review.
            </h1>

            <p className="mt-6 max-w-[620px] text-base font-normal leading-[1.65] text-[#D9E2EC] sm:text-[18px]">
              Follow authoritative regulatory sources through applicability, obligations, controls,
              evidence and assurance—while keeping uncertainty, gaps and human accountability
              visible.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Request a Demo
              </Link>
              <Link
                href="/regulatory-exposure"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Assess Your Regulatory Exposure
              </Link>
            </div>

            <p className="mt-6 text-[14px] text-white underline underline-offset-4">
              Illustrative example — not customer data or an audit conclusion.
            </p>

            <p className="mt-4 text-[12px] font-semibold leading-[1.6] text-[#94A3B8]">
              Applicability: UNCERTAIN · Evidence: Missing · Assurance: Requires review.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[507px] rounded-lg bg-white p-4 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[475/348] w-full overflow-hidden">
                <Image
                  src="/internal-audit/ia1.webp"
                  alt="Internal auditors reviewing evidence together on a laptop"
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

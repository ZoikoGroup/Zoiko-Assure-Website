import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <span className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.08em] text-[#F58220]">
              For Risk &amp; Governance Teams
            </span>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[52px] lg:leading-[1.1]">
              Know What Applies. Show What Is Controlled. Prove What Still Needs Work.
            </h1>

            <p className="mt-6 max-w-[620px] text-base font-normal leading-[1.65] text-[#D9E2EC] sm:text-[18px]">
              ZoikoAssure connects authoritative regulatory sources and applicability decisions to
              governed obligations, controls, evidence and assurance—so risk leaders can identify
              what is supported, what needs review and where action remains.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Request a Demo
              </Link>
              <Link
                href="/continuous-compliance"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Explore Continuous Assurance
              </Link>
            </div>

            <Link
              href="/how-zoikoassure-works"
              className="mt-6 text-[14px] text-white underline underline-offset-4 hover:text-[#F58220]"
            >
              Illustrative obligation-to-proof record
            </Link>

            <p className="mt-4 max-w-[620px] text-[12px] font-semibold leading-[1.6] text-[#94A3B8]">
              Illustrative product model. This does not represent live customer data, a tested
              control, a regulatory determination or a completed audit.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[507px] rounded-lg bg-white p-4 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[475/348] w-full overflow-hidden">
                <Image
                  src="/risk-governance-teams/rgt1.webp"
                  alt="Risk and governance professionals reviewing compliance status together"
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

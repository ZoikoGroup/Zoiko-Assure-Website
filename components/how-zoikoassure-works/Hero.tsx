import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <span className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.08em] text-[#F58220]">
              How ZoikoAssure Works
            </span>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[60px] lg:leading-[1.03]">
              From Regulatory Source to Defensible Assurance.
            </h1>

            <p className="mt-6 max-w-[710px] text-base leading-7 text-[#D9E2EC] sm:text-lg">
              Follow six governed stages that connect what regulation says to what applies, what must be controlled, what evidence exists, and what can be defended under review.
            </p>

            <p className="mt-6 max-w-[710px] text-sm leading-6 text-[#D9E2EC]">
              ZoikoAssure is a global regulatory intelligence and continuous compliance assurance platform that connects source-linked requirements to governed control and evidence workflows.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Request a Demo
              </Link>
              <Link
                href="#six-stages"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Explore the Six Stages
              </Link>
            </div>

            <p className="mt-6 text-xs font-semibold leading-5 text-[#94A3B8]">
              Source-grounded · Human-accountable · Evidence-first · Illustrative example
            </p>

            <p className="mt-6 max-w-[710px] text-xs italic leading-5 text-[#94A3B8]">
              Illustrative walkthrough. Displayed records and statuses are examples, not live regulatory or customer determinations.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[507px] rounded-lg bg-white p-4 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[475/348] w-full overflow-hidden">
                <Image
                  src="/how-zoikoAssure-works/hw1.webp"
                  alt="Assurance shield connecting regulatory, evidence and reporting stages"
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

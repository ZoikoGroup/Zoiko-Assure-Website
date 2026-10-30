import Image from "next/image";
import Link from "next/link";

export default function ExecutiveBriefingsCta() {
  return (
    <section id="cta" className="relative w-full overflow-hidden bg-[#071C33]">
      {/* Background graphic */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none opacity-40 mix-blend-screen">
        <Image
          src="/executive-briefings/conversion-bg.png"
          alt="Regulatory Intelligence"
          fill
          sizes="100vw"
          className="object-contain object-right"
        />
      </div>

      {/* Dark overlay with border bottom */}
      <div className="relative z-10 w-full border-b border-white/[0.14] bg-[rgba(7,28,51,0.62)] py-[56px]">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-[64px]">
            {/* Left Content */}
            <div className="max-w-[690px]">
              <h2
                className="text-[28px] font-semibold leading-[1.2] text-white sm:text-[34px]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Turn regulatory context into an evidence-backed discussion.
              </h2>
              <p
                className="mt-5 text-[15px] font-normal leading-[1.65em] text-[#CFD9E4]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Progress to enterprise evaluation without friction. Request a Demo to review the ZoikoAssure platform tailored for your role.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto sm:flex-nowrap">
              <Link
                href="/request-appointment"
                className="inline-flex h-[48px] items-center justify-center rounded-[8px] border border-[#D58324] bg-[#D58324] px-5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Request a Demo
              </Link>
              <Link
                href="#directory"
                className="inline-flex h-[48px] items-center justify-center rounded-[8px] border border-[#7890A7] bg-[#071C33] px-5 text-[14px] font-semibold text-white transition-colors hover:border-white"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Explore Regulatory Intelligence
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


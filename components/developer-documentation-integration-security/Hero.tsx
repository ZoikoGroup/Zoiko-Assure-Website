import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <span className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.08em] text-[#F58220]">
              Developers &amp; Integrations
            </span>

            <h1 className="mt-4 max-w-[710px] text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.07]">
              Integration Security
            </h1>

            <p className="mt-6 max-w-[710px] text-base font-normal leading-[1.65] text-[#D9E2EC] sm:text-[18px]">
              Understand the access, data and operational boundaries that matter when evaluating
              an integration.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#trust-boundary"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Explore security approach
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Request integration security information
              </Link>
            </div>

            <p className="mt-8 max-w-[710px] text-[13px] font-normal leading-[1.6] text-[#D9E2EC]">
              Integration requirements depend on the supported connection, deployment and approved
              configuration. A working connection does not establish regulatory compliance or
              control effectiveness.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[507px] rounded-lg bg-white p-3 sm:p-4 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <Image
                src="/developer-documentation-integration-security/is1.webp"
                alt="Person working on a laptop while checking a smartphone at a café table"
                width={475}
                height={348}
                priority
                sizes="(max-width: 1024px) 100vw, 475px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

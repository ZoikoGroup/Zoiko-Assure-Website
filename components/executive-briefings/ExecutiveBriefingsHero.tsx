import Image from "next/image";
import Link from "next/link";

const RIBBON_ITEMS = [
  {
    title: "Source Context",
    description: "Traceable authoritative material.",
  },
  {
    title: "Scope & Jurisdiction",
    description: "Where and who is affected.",
  },
  {
    title: "As-of Date",
    description: "Clear timing and review context.",
  },
  {
    title: "Human Accountability",
    description: "Reviewed, non-autonomous decisions.",
  },
];

export default function ExecutiveBriefingsHero() {
  return (
    <>
      {/* Dark Navy Hero Section */}
      <section className="relative w-full bg-[#0A2540] pt-[90px] pb-[30px]">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
          <div className="grid grid-cols-1 items-center gap-[64px] lg:grid-cols-[709.33px_506.67px]">
            {/* Left Column Content */}
            <div className="flex flex-col justify-center">
              {/* Kicker */}
              <p
                className="text-[14px] font-semibold uppercase leading-[22.4px] tracking-[0.0714em] text-[#F58220]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                RESOURCES / EXECUTIVE
              </p>

              {/* Heading 1 with exact line breaks */}
              <h1
                className="pt-4 text-[36px] font-semibold leading-[1.1] text-white sm:text-[46px] lg:text-[56px] lg:leading-[61.6px]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Executive Briefings for
                <br />
                Defensible Regulatory
                <br />
                Decisions
              </h1>

              {/* Paragraph 1 */}
              <p
                className="max-w-[710px] pt-6 text-[18px] font-normal leading-[28.8px] text-[#D9E2EC]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Source-grounded perspectives on regulatory change, governance, evidence and assurance—structured for the questions boards and executive leaders need management to answer.
              </p>

              {/* Paragraph 2 */}
              <p
                className="max-w-[710px] pt-6 text-[14px] font-normal leading-[22.4px] text-[#D9E2EC]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                ZoikoAssure Executive Briefings are reviewed decision-support resources for senior leaders evaluating regulatory developments, obligations, governance and evidence-backed assurance.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Link
                  href="#directory"
                  className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-opacity hover:opacity-90"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Explore Executive Briefings
                </Link>
                <Link
                  href="/request-appointment"
                  className="inline-flex items-center justify-center rounded-[4px] border border-white bg-transparent px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors hover:bg-white/10"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Request a Demo
                </Link>
              </div>

              {/* Note / Disclaimer */}
              <p
                className="max-w-[710px] pt-6 text-[12px] font-semibold leading-[19.2px] text-[#A0AAB2]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Each published briefing identifies its scope, sources, reviewer/owner as approved, and relevant update context. General information; not legal advice.
              </p>
            </div>

            {/* Right Column Briefing Card Preview */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[506.67px] rounded-[8px] bg-white p-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.5)]">
                <div className="relative aspect-[474.67/348] w-full overflow-hidden rounded-[4px]">
                  <Image
                    src="/executive-briefings/hero-briefing.png"
                    alt="Illustrative Executive Board Briefing Document"
                    fill
                    sizes="(max-width: 1024px) 100vw, 475px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating 4-Card Ribbon */}
      <section
        className="w-full"
        style={{
          background: "linear-gradient(to bottom, #0A2540 30px, #FFFFFF 30px)",
        }}
      >
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {RIBBON_ITEMS.map((item, index) => (
              <div
                key={index}
                className="flex min-h-[157px] flex-col rounded-[8px] border border-[#D9E2EC] border-t-[4px] border-t-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]"
              >
                <h4
                  className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {item.title}
                </h4>
                <p
                  className="pt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

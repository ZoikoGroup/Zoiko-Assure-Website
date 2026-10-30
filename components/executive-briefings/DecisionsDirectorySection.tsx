import Image from "next/image";
import Link from "next/link";

export default function DecisionsDirectorySection() {
  return (
    <section id="directory" className="w-full bg-white pt-[90px] pb-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-[64px] lg:grid-cols-[608px_608px]">
          {/* Left Column Content */}
          <div className="flex flex-col">
            {/* Block 1 */}
            <h2
              className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Briefings organized around the decisions leaders face.
            </h2>
            <p
              className="pt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Find substantive published decision content with explicit scoping, format, and reading time context. Filter by reader problem or role.
            </p>

            {/* Block 2 */}
            <h2
              className="pt-12 text-[24px] font-semibold leading-[28.8px] text-[#0A2540]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Topics, Roles and Conditional Search
            </h2>
            <p
              className="pt-4 pb-6 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Recommended topics: Regulatory Change, Multi-Jurisdiction, AI Governance, Evidence & Assurance. Available roles: CRO, General Counsel, CCO, CFO.
            </p>

            {/* Action Link */}
            <div className="pt-4">
              <Link
                href="#featured"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] bg-transparent px-[25px] py-[12px] text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors hover:bg-[#D97637] hover:text-white"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Explore Briefings Directory
              </Link>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="flex justify-center">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/executive-briefings/directory-topics.png"
                alt="Executive Briefings Directory and Topics"
                fill
                sizes="(max-width: 1024px) 100vw, 608px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

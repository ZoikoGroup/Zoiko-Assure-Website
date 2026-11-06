import Link from "next/link";

const destinations = [
  {
    title: "Regulatory Changes",
    description: "Explore dated regulatory developments with authority and source context.",
    cta: "Explore Regulatory Changes",
    href: "/regulatory-changes",
  },
  {
    title: "Obligations",
    description: "Explore structured obligations and their source and time context.",
    cta: "Explore Obligations",
    href: "/regulatory-intelligence/obligations",
  },
  {
    title: "Enforcement & Guidance",
    description:
      "Distinguish regulatory guidance, enforcement activity and the status of official documents.",
    cta: "Explore Enforcement & Guidance",
    href: "/enforcement-guidance",
  },
  {
    title: "Regulatory Sources",
    description: "Review source authority, issuer identity and provenance expectations.",
    cta: "Explore Regulatory Sources",
    href: "/regulatory-sources",
  },
  {
    title: "Regulatory Library",
    description:
      "Browse or search approved records where the live library capability is verified.",
    cta: "Explore Regulatory Library",
    href: "/regulatory-library",
  },
  {
    title: "Methodology",
    description:
      "Understand source selection, applicability boundaries, revisions and human accountability.",
    cta: "Explore Methodology",
    href: "/regulatory-intelligence/methodology",
  },
];

export default function Destinations() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Explore six Regulatory Intelligence destinations
        </h2>
        <p className="mt-6 max-w-[800px] text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#6B7280]">
          Each destination has a different purpose. Choose the record, explanation or method that
          answers your question.
        </p>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <div
              key={d.title}
              className="flex flex-col items-start rounded-lg border border-t-4 border-[#E2E8F0] bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[16px] font-semibold leading-tight text-[#0A2540]">{d.title}</h3>
              <p className="mt-4 flex-1 text-[14px] font-normal leading-6 text-[#6B7280]">
                {d.description}
              </p>
              <Link
                href={d.href}
                className="mt-6 inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-transparent px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                {d.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

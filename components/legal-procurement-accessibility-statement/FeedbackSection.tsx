import Link from "next/link";

const items = [
  {
    title: "Report a barrier",
    description:
      "Issue type · page URL · description. Describe problem; provide page URL if known. Ask only necessary information; no mandatory sensitive disability disclosure.",
  },
  {
    title: "Contact method",
    description:
      "Accessible contact or approved form. Show verified contact channel with accessible fallback.",
  },
  {
    title: "Confirmation",
    description:
      "User-safe confirmation and alternative. Validation, sending, receipt, offline/fallback and duplicate cases; return focus and reading order.",
  },
  {
    title: "Response states",
    description: "Errors, submitted, offline, alternative contact.",
  },
  {
    title: "Statement updates",
    description: "Revision date, owner, approvals and non-misleading version history.",
  },
];

export default function FeedbackSection() {
  return (
    <section id="feedback" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="max-w-[800px] text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Feedback &amp; assistance
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-lg border border-[#E2E8F0] bg-white p-6 pb-10 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[15px] font-semibold leading-snug text-[#0A2540]">
                {item.title}
              </h3>
              <p className="mt-4 text-[13.5px] font-normal leading-[1.6] text-[#6B7280]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-transparent px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
          >
            Verified Contact Channel
          </Link>
        </div>
      </div>
    </section>
  );
}

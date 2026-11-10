import Link from "next/link";

const intents = [
  {
    title: "Track a regulatory change",
    description: "See dated, source-linked developments and what changed.",
    href: "/regulatory-changes",
  },
  {
    title: "Understand an obligation",
    description: "Inspect structured requirements and what still needs contextual review.",
    href: "/footer-obligations",
  },
  {
    title: "Verify authority",
    description: "Understand the regulatory source, document status and methodology.",
    href: "/regulatory-sources",
  },
];

/** Cards that float over the bottom edge of the hero. */
export default function ExploreIntentCards() {
  return (
    <section className="relative z-10 mx-auto -mt-10 sm:-mt-12 w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
      <h2 className="sr-only">What would you like to explore?</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
        {intents.map((intent) => (
          <Link
            key={intent.title}
            href={intent.href}
            className="flex flex-col rounded-lg border border-t-4 border-[#E2E8F0] bg-white p-6 pb-10 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
          >
            <h3 className="text-[16px] font-semibold leading-tight text-[#0A2540]">
              {intent.title}
            </h3>
            <p className="mt-4 text-[14px] font-normal leading-6 text-[#6B7280]">
              {intent.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

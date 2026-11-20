const cards = [
  {
    title: "Scope overview",
    description:
      "Plain-language asset eligibility rule with source revision and applicable environment. No assumed permission to test unspecified domain.",
  },
  {
    title: "In-scope register",
    description:
      "Exact asset/dns/service + environment + allowed test level + approved scope date. Show only signed entries; if empty, block public authorization claims.",
  },
  {
    title: "Out-of-scope register",
    description:
      "Third-party infrastructure, excluded activities, production restrictions. Distinguish service owner; link to own policy where verified.",
  },
  {
    title: "Rules of engagement",
    description:
      "Approved safe-testing boundaries, minimum data access and stop conditions. No actionable exploit playbook.",
  },
  {
    title: "Legal authorization",
    description:
      "Owner-approved authorization and safe harbor policy, limitations and applicable law. Cannot derive legal permission from guidance.",
  },
  {
    title: "Disclosure coordination",
    description:
      "How researchers and Security coordinate publication, only if approved. No arbitrary 30/60/90-day window.",
  },
];

export default function ScopeCards() {
  return (
    <section id="scope" className="w-full scroll-mt-24 bg-white pt-12 sm:pt-14">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="sr-only">Scope and rules</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-lg border border-[#3B82F6] border-t-4 border-t-[#1D4ED8] bg-white p-6 pb-8 shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[15px] font-semibold leading-snug text-[#0A2540]">
                {card.title}
              </h3>
              <p className="mt-4 text-[13.5px] font-normal leading-[1.6] text-[#6B7280]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

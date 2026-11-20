const domains = [
  {
    title: "Trust boundary model",
    description:
      "Source → authorized connection → processing → evidence → accountable review. Conceptual model illustrating shared responsibility; not a deployed topology.",
  },
  {
    title: "Identity & least privilege",
    description:
      "Evaluate which identity, access scopes and approvals are required before connecting a source. Authorization is denied by default.",
  },
  {
    title: "Credential lifecycle",
    description:
      "Confirm approved credential handling, rotation and revocation requirements for the selected integration. Do not submit credentials through a public inquiry.",
  },
  {
    title: "Tenant isolation",
    description:
      "Tenant, connection, object and field permissions are enforced server-side for fetch, list, edit and export operations.",
  },
  {
    title: "Data minimization",
    description:
      "Confirm processing purpose, permitted data classes, retention and transfer requirements before activation.",
  },
  {
    title: "Source & provenance",
    description:
      "Preserve origin, observed and captured times, version and mapping context. Connection does not equal proof; unknown states are preserved.",
  },
];

export default function DomainCards() {
  return (
    <section id="trust-boundary" className="w-full scroll-mt-24 bg-white pt-16 sm:pt-20 lg:pt-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-[26px] lg:text-[28px] lg:leading-[1.25]">
          Trust boundary &amp; control domains
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="flex flex-col rounded-lg border border-[#3B82F6] border-t-4 border-t-[#1D4ED8] bg-white p-6 pb-8 shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[15px] font-semibold leading-snug text-[#0A2540]">
                {domain.title}
              </h3>
              <p className="mt-4 text-[13.5px] font-normal leading-[1.6] text-[#6B7280]">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

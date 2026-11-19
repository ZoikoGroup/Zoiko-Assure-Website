const cards = [
  {
    title: "ANNEX A Parties",
    description: "legal_entity_name, counterparty_role, authorized_signatory, applicability.",
    span: "lg:col-span-2",
  },
  {
    title: "ANNEX B processing",
    description: "subject, duration, purpose, data_categories, data_subject_types, instruction_ref.",
    span: "lg:col-span-2",
  },
  {
    title: "ANNEX C security",
    description: "control_category, evidence_ref, version, applicability, approved_disclosure.",
    span: "lg:col-span-2",
  },
  {
    title: "ANNEX D subprocessors",
    description: "supplier_id, service, location, authorization_mode, notice_link.",
    span: "lg:col-span-3",
  },
  {
    title: "ANNEX E transfer instrument IF approved",
    description: "transfer_instrument_type, regions, parties, applicability, approvals.",
    span: "lg:col-span-3",
  },
];

export default function AnnexCards() {
  return (
    <section className="w-full bg-white pt-12 sm:pt-14">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="sr-only">DPA annexes</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col rounded-lg border border-[#3B82F6] border-t-4 border-t-[#1D4ED8] bg-white p-6 pb-8 shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-md ${card.span}`}
            >
              <h3 className="text-[15px] font-semibold leading-snug text-[#0A2540]">
                {card.title}
              </h3>
              <p className="mt-4 break-words text-[13.5px] font-normal leading-[1.6] text-[#6B7280]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

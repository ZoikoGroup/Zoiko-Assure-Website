"use client";

interface EventContractCard {
  title: string;
  description: string;
}

const cards: EventContractCard[] = [
  {
    title: "Approved event catalog",
    description:
      "Lists only approved event keys, categories, schema versions and lifecycle states bound to a single verified release and environment.",
  },
  {
    title: "Triggers & exclusions",
    description:
      "Each published event defines its source system, emission condition, actor and exclusions. Events without verified triggers are withheld.",
  },
  {
    title: "Envelope & schema fields",
    description:
      "Separates logical event instance IDs from delivery-attempt IDs, displaying field types, required flags and privacy sensitivity classifications.",
  },
  {
    title: "Signing & authenticity",
    description:
      "Documents the approved signature scheme, canonical signed bytes, timestamp tolerance and key rotation rules before consumers parse payloads.",
  },
  {
    title: "Retries & ordering",
    description:
      "Specifies owner-approved acknowledgement rules, timeouts, retry limits, deduplication identity and out-of-order handling without inventing SLAs.",
  },
  {
    title: "Versioning & retirement",
    description:
      "Tracks reviewed dates, migration notices and retirement status. Retired events block new subscription creation while remaining archived separately.",
  },
];

export default function EventReferenceAndDeliveryContractSection() {
  return (
    <section id="event-reference" className="w-full bg-white pt-12 sm:pt-16 pb-8 sm:pb-12 scroll-mt-8">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540]">
          Event reference &amp; delivery contract
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-start rounded-xl border border-[#E2E8F0] border-t-[3px] border-t-[#0066CC] bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0A2540]">
                {card.title}
              </h3>
              <p className="mt-3 text-[13.5px] sm:text-[14px] leading-relaxed text-[#5A6E85]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

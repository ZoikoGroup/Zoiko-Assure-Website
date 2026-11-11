"use client";

import Image from "next/image";
import Link from "next/link";

const instrumentCards = [
  {
    title: "Regulation",
    description:
      "A regulation is generally binding in its entirety and directly applicable within its legal scope. National rules and supervisory steps may still matter for implementation or enforcement.",
  },
  {
    title: "Directive",
    description:
      "A directive sets results Member States must achieve, ordinarily through national transposition. The relevant national measure, deadline and context require separate review.",
  },
  {
    title: "Decision",
    description:
      "A decision is binding according to its terms, including any named addressee. It must not be presented as a universal obligation for every organization.",
  },
  {
    title: "Nonbinding",
    description:
      "Recommendations and opinions generally do not create binding obligations merely because they are published by an EU body.",
  },
];

export default function EuInstrumentsAndImplementation() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        {/* Top Section: Heading & 4-Column Card Grid */}
        <div>
          <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl max-w-[672px]">
            One legal framework. Different instruments and implementation paths.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {instrumentCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col justify-start rounded-[8px] border border-[#D58324] border-t-3 border-t-[#D58324] bg-white p-6 transition-shadow duration-200 hover:shadow-md"
              >
                <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                  {card.title}
                </h4>
                <p className="mt-3 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Split Feature (Text Left, Image Right with No-Styling Policy) */}
        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Text & CTA */}
          <div className="flex flex-col items-start">
            <div>
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                Know which text is authoritative—and which helps you read it.
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Use authentic Official Journal documents to verify the legal
                act. EUR-Lex metadata, consolidated versions and editorial
                summaries can help research its evolution, but are not
                interchangeable with the authentic act.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                EU-level instruments do not erase Member State responsibilities.
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                For directives, verify the relevant national measures and dates
                against official Member State sources. An absent platform record
                does not establish that a country failed to transpose.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/explore-how-zoikoassure-works"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
              >
                Explore How ZoikoAssure Works
              </Link>
            </div>
          </div>

          {/* Right Column: Image (Raw display adhering strictly to no-border/shadow/radius rule) */}
          <div className="flex w-full flex-col items-center lg:items-end">
            <div className="w-full max-w-[540px]">
              <div className="relative aspect-[540/380] w-full">
                <Image
                  src="/eu/2.png"
                  alt="Know which text is authoritative and Member State responsibilities"
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

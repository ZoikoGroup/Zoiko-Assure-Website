"use client";

import Link from "next/link";

const countryGuidesRow1 = [
  {
    title: "United States",
    subtitle: "Country guide",
    buttonText: "Explore United States",
    href: "/jurisdictions/united-states",
  },
  {
    title: "United Kingdom",
    subtitle: "Country guide",
    buttonText: "Explore United Kingdom",
    href: "/jurisdictions/united-kingdom",
  },
  {
    title: "Canada",
    subtitle: "Country guide",
    buttonText: "Explore Canada",
    href: "/jurisdictions/canada",
  },
];

const countryGuidesRow2 = [
  {
    title: "Australia",
    subtitle: "Country guide",
    buttonText: "Explore Australia",
    href: "/jurisdictions/australia",
  },
  {
    title: "Singapore",
    subtitle: "Country guide",
    buttonText: "Explore Singapore",
    href: "/jurisdictions/singapore",
  },
];

const regionalGuides = [
  {
    title: "European Union",
    subtitle: "Supranational framework",
    buttonText: "Explore European Union",
    href: "/jurisdictions/european-union",
  },
  {
    title: "Middle East",
    subtitle: "Regional overview — not a single legal regime",
    buttonText: "Explore Middle East",
    href: "/jurisdictions/middle-east",
  },
];

export default function AllJurisdictionsGeographyGrid() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-[800px]">
          <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
            Start with the geography that matters to your work
          </h2>
          <p className="mt-3 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
            Explore selected, source-qualified location guides — this is not
            comprehensive legal coverage.
          </p>
        </div>

        {/* Group 1: Country Guides */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold leading-[25.6px] text-[#0A2540]">
            Country guides
          </h3>
          <p className="mt-1 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
            National context requires its own official sources, legal dates and
            accountable applicability review.
          </p>

          {/* Row 1: 3-Column Grid */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {countryGuidesRow1.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-[8px] border border-[#D58324] border-t-4 border-t-[#D58324] bg-white p-6 transition-shadow duration-200 hover:shadow-md"
              >
                <div>
                  <h4 className="text-[18px] font-semibold leading-[21.6px] text-[#0A2540]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[13px] font-normal leading-[19.5px] text-[#5F6B7A]">
                    {item.subtitle}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-4 py-2 text-[14px] font-semibold leading-[20px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
                  >
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 2-Column Grid */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {countryGuidesRow2.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-[8px] border border-[#D58324] border-t-4 border-t-[#D58324] bg-white p-6 transition-shadow duration-200 hover:shadow-md"
              >
                <div>
                  <h4 className="text-[18px] font-semibold leading-[21.6px] text-[#0A2540]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[13px] font-normal leading-[19.5px] text-[#5F6B7A]">
                    {item.subtitle}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-4 py-2 text-[14px] font-semibold leading-[20px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
                  >
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Group 2: Supranational and Regional Context */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold leading-[25.6px] text-[#0A2540]">
            Supranational and regional context
          </h3>
          <p className="mt-1 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
            The European Union and Middle East are presented as distinct types
            of geography. Their legal relationships must not be flattened into
            one country rule.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {regionalGuides.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-[8px] border border-[#D58324] border-t-4 border-t-[#D58324] bg-white p-6 transition-shadow duration-200 hover:shadow-md"
              >
                <div>
                  <h4 className="text-[18px] font-semibold leading-[21.6px] text-[#0A2540]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[13px] font-normal leading-[19.5px] text-[#5F6B7A]">
                    {item.subtitle}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-4 py-2 text-[14px] font-semibold leading-[20px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
                  >
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner Card */}
        <div className="mt-10 flex flex-col justify-between gap-4 rounded-[8px] border border-[#E4E7EB] bg-white p-6 md:flex-row md:items-center">
          <div>
            <h4 className="text-[16px] font-semibold leading-[22.4px] text-[#0A2540]">
              No published guide matches this selection
            </h4>
            <p className="mt-1 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
              A missing guide does not mean that laws do not apply. Check our
              regulatory source methodology or ask for a scoped discussion.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/methodology"
              className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-5 py-2.5 text-[14px] font-semibold leading-[20px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
            >
              Explore Methodology
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

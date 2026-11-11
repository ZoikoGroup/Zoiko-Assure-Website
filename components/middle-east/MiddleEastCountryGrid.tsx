"use client";

import Link from "next/link";

const gccCountriesRow1 = [
  {
    country: "United Arab Emirates",
    description:
      "Source authority verified · Editorial scope: Federal, Emirate, Free-zone level intelligence",
    href: "/jurisdictions/uae",
  },
  {
    country: "Saudi Arabia",
    description:
      "Source authority verified · Editorial scope: National Platform rules index and responsible publishers",
    href: "/jurisdictions/saudi-arabia",
  },
  {
    country: "Qatar",
    description:
      "Source authority verified · Editorial scope: Ministry of Justice Al Meezan legal portal and Official Gazette",
    href: "/jurisdictions/qatar",
  },
];

const gccCountriesRow2 = [
  {
    country: "Bahrain",
    description:
      "Source authority verified · Editorial scope: Legislation and Legal Opinion Commission legislation and Gazette services",
    href: "/jurisdictions/bahrain",
  },
  {
    country: "Kuwait",
    description:
      "Source authority verified · Editorial scope: Kuwait Al Kuwait Al Yawm Official Gazette publication archive",
    href: "/jurisdictions/kuwait",
  },
];

export default function MiddleEastCountryGrid() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        {/* Top Header */}
        <div className="max-w-[800px]">
          <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
            Start with the country where you operate
          </h2>
          <p className="mt-3 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
            Available destinations are shown only when they have approved,
            substantive source-backed content. Select a country to understand
            its authority and legal-source model.
          </p>
        </div>

        {/* GCC Group Header */}
        <div className="mt-10 max-w-[900px]">
          <h3 className="text-xl font-semibold leading-[25.6px] text-[#0A2540]">
            The Gulf Cooperation Council is a grouping—not a single national
            rulebook
          </h3>
          <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
            The GCC has six member states: Bahrain, Kuwait, Oman, Qatar, Saudi
            Arabia and the United Arab Emirates. A GCC-level measure should not
            be described as directly binding in a particular country without
            reviewing the relevant instrument and domestic legal effect.
          </p>
        </div>

        {/* Row 1: 3-Column Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {gccCountriesRow1.map((item) => (
            <div
              key={item.country}
              className="flex flex-col justify-between rounded-[8px] border border-[#D9E2EC] border-t-4 border-t-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <div>
                <h4 className="text-[18px] font-semibold leading-[21.6px] text-[#0A2540]">
                  {item.country}
                </h4>
                <p className="mt-3 text-[13px] font-normal leading-[19.5px] text-[#5F6B7A]">
                  {item.description}
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href={item.href}
                  className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-4 py-2 text-[14px] font-semibold leading-[20px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
                >
                  View country details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: 2-Column Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {gccCountriesRow2.map((item) => (
            <div
              key={item.country}
              className="flex flex-col justify-between rounded-[8px] border border-[#D9E2EC] border-t-4 border-t-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <div>
                <h4 className="text-[18px] font-semibold leading-[21.6px] text-[#0A2540]">
                  {item.country}
                </h4>
                <p className="mt-3 text-[13px] font-normal leading-[19.5px] text-[#5F6B7A]">
                  {item.description}
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href={item.href}
                  className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-4 py-2 text-[14px] font-semibold leading-[20px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
                >
                  View country details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Card */}
        <div className="mt-10 flex flex-col justify-between gap-4 rounded-[8px] border border-[#E4E7EB] border-t-4 border-t-[#D9E2EC] bg-white p-6 md:flex-row md:items-center">
          <div>
            <h4 className="text-[16px] font-semibold leading-[22.4px] text-[#0A2540]">
              Not listed?
            </h4>
            <p className="mt-1 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
              A substantive, source-verified country guide is not yet available
              here. This does not imply that no regulation exists.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/methodology"
              className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-5 py-2.5 text-[14px] font-semibold leading-[20px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
            >
              Explore Methodology
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const governanceItems = [
  "Controls must be defined before they are automated.",
  "Accountability must be preserved before it is scaled.",
  "AI must remain governable and auditable before it becomes embedded.",
  "Evidence must exist before it is requested.",
  "Uncertainty must be surfaced rather than hidden.",
  "Exceptions must be governed without being misrepresented as assurance.",
  "Public trust claims must be verifiable before they are marketed.",
];

export default function GovernancePrecedesAutomation() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/about-us/bg2.png')",
        }}
      />

      {/* =====================================================
          DARK OVERLAY
          Keeps the image visible while maintaining readability
      ====================================================== */}
      <div className="absolute inset-0 bg-[#073957]/90" />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          gap-8
          sm:gap-10
          px-4
          py-10
          sm:px-6
          sm:py-14
          lg:flex-row
          lg:gap-16
          lg:px-8
          lg:py-16
          xl:gap-20
          xl:px-20
          xl:py-20
        "
      >
        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            items-start
            gap-7
            lg:w-96
            lg:shrink-0
          "
        >
          {/* Heading */}
          <div className="flex w-full flex-col items-start gap-3.5">
            <h2
              className="
                m-0
                w-full
                text-3xl
                font-bold
                leading-9
                text-white
                sm:text-4xl
                sm:leading-10
              "
            >
              Governance precedes automation.
            </h2>
          </div>

          {/* Intro */}
          <p
            className="
              m-0
              w-full
              text-base
              font-normal
              leading-7
              text-slate-300
              sm:text-lg
            "
          >
            That principle governs how Zoiko Assure is designed.
          </p>

          {/* Orange divider */}
          <div className="h-[3px] w-16 bg-amber-600" />

          {/* Main statement */}
          <p
            className="
              m-0
              w-full
              text-xl
              font-medium
              leading-8
              text-white
              sm:text-2xl
            "
          >
            Compliance is not merely a reporting function. It is an operational
            discipline that must survive scrutiny.
          </p>
        </div>

        {/* ===================================================
            RIGHT CONTENT — PRINCIPLES
        ==================================================== */}
        <div
          className="
            flex
            w-full
            flex-1
            flex-col
            items-start
          "
        >
          {governanceItems.map((item, index) => (
            <div
              key={item}
              className="
                flex
                w-full
                items-start
                gap-4
                border-t
                border-slate-600
                py-5
                sm:gap-6
              "
            >
              {/* Number */}
              <div
                className="
                  w-5
                  shrink-0
                  text-xs
                  font-normal
                  leading-5
                  text-orange-300
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Principle */}
              <div
                className="
                  flex-1
                  text-base
                  font-medium
                  leading-7
                  text-white
                  sm:text-xl
                "
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
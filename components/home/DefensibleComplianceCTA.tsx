export default function DefensibleComplianceCTA() {
  return (
    <section
      className="
        w-full
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/home/bg8.png')",
      }}
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          justify-start
          px-5
          py-16
          sm:px-8
          md:px-10
          lg:px-20
          lg:py-20
        "
      >
        <div className="flex w-full flex-col items-center justify-start">
          <div
            className="
              flex
              w-full
              max-w-[672px]
              flex-col
              items-start
              px-4
              sm:px-6
            "
          >
            {/* Heading */}
            <div className="flex w-full flex-col items-center justify-start">
              <h2
                className="
                  w-full
                  text-center
                  text-2xl
                  font-bold
                  leading-8
                  tracking-tight
                  text-white
                  sm:text-3xl
                  sm:leading-9
                "
              >
                Make Compliance Defensible Before You Need to Defend It.
              </h2>
            </div>

            {/* Description */}
            <div className="mt-5 flex w-full justify-center sm:mt-6">
              <p
                className="
                  w-full
                  text-center
                  text-sm
                  font-normal
                  leading-5
                  text-slate-300
                "
              >
                Schedule an enterprise briefing with our regulatory assurance
                specialists.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-6 flex w-full justify-center">
              <button
                type="button"
                className="
                  rounded-lg
                  bg-amber-600
                  px-8
                  py-3.5
                  text-center
                  text-sm
                  font-bold
                  leading-5
                  text-white
                  transition
                  hover:bg-amber-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-amber-500
                  focus:ring-offset-2
                  focus:ring-offset-sky-950
                "
              >
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
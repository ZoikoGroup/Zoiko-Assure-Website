export default function AssuranceEngineeredSection() {
  return (
    <section className="w-full overflow-hidden bg-blue-50">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          gap-7
          px-6
          py-16
          sm:px-10
          sm:py-20
          lg:px-20
          lg:py-24
        "
      >
        {/* Heading */}
        <h2
          className="
            m-0
            w-full
            text-3xl
            font-bold
            leading-tight
            tracking-[-0.02em]
            sm:text-4xl
            sm:leading-[1.1]
            lg:text-5xl
            lg:leading-[52.8px]
          "
        >
          <span className="text-sky-900">
            Assurance must be engineered —{" "}
          </span>
          <span className="text-amber-600">
            not improvised.
          </span>
        </h2>

        {/* Intro statement */}
        <p
          className="
            m-0
            w-full
            text-base
            font-semibold
            leading-7
            text-cyan-950
            sm:text-lg
          "
        >
          Zoiko Assure does not claim to eliminate compliance risk. No
          responsible platform should.
        </p>

        {/* Description */}
        <p
          className="
            m-0
            w-full
            text-base
            font-normal
            leading-7
            text-slate-600
            sm:text-lg
          "
        >
          Our commitment is to build infrastructure that helps organizations
          make regulatory exposure more visible, obligations more operational,
          evidence more defensible, AI more governable, and assurance more
          continuous.
        </p>

        {/* Closing statement */}
        <p
          className="
            m-0
            w-full
            text-xl
            font-medium
            leading-8
            text-sky-900
            sm:text-2xl
            sm:leading-9
          "
        >
          When the question is, “How do you know?”, the answer should not begin
          with reconstruction. It should begin with evidence.
        </p>
      </div>
    </section>
  );
}
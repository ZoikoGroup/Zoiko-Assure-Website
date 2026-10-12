import Image from "next/image";

const leadershipItems = [
  {
    icon: "/images/about-us/icon7.png",
    title: "Chief Risk Officer",
    description:
      "Where material regulatory exposure is changing and where assurance is weak or uncertain.",
  },
  {
    icon: "/images/about-us/icon8.png",
    title: "General Counsel",
    description:
      "Why a requirement applies, what source supports it, and where legal review remains necessary.",
  },
  {
    icon: "/images/about-us/icon9.png",
    title: "Chief Compliance Officer",
    description:
      "How obligations connect to controls, evidence, remediation and examination readiness.",
  },
  {
    icon: "/images/about-us/icon10.png",
    title: "CFO / Audit & Risk Committee",
    description:
      "What is material, what is evidenced, what remains unresolved and who is accountable.",
  },
  {
    icon: "/images/about-us/icon11.png",
    title: "Internal Audit",
    description:
      "Whether control and evidence lineage can support independent review.",
  },
  {
    icon: "/images/about-us/icon12.png",
    title: "Compliance / Risk Operations",
    description:
      "What changed, what requires action, what evidence is missing and what is awaiting review.",
  },
  {
    icon: "/images/about-us/icon13.png",
    title: "Technical / Security Teams",
    description:
      "How controls, integrations, access, data and evidence fit the assurance operating model.",
  },
];

export default function LeadershipResponsibilitySection() {
  const firstRow = leadershipItems.slice(0, 4);
  const secondRow = leadershipItems.slice(4);

  return (
    <section className="w-full overflow-hidden bg-slate-50">
      <div
        className="
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
          lg:px-8
          lg:py-16
          xl:px-20
          xl:py-20
        "
      >
        {/* =====================================================
            HEADING
        ====================================================== */}
        <div className="flex w-full flex-col items-start gap-3.5">
          <h2
            className="
              m-0
              w-full
              text-2xl
              font-bold
              leading-8
              text-sky-900
              sm:text-3xl
              sm:leading-9
              lg:text-4xl
              lg:leading-10
            "
          >
            Assurance is a leadership responsibility.
          </h2>
        </div>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}
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
          Zoiko Assure is designed for organizations where regulatory exposure
          is material and assurance is a leadership responsibility.
        </p>

        {/* =====================================================
            FIRST ROW — 4 CARDS
        ====================================================== */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-2
            xl:grid-cols-4
            lg:gap-6
          "
        >
          {firstRow.map((item) => (
            <LeadershipCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* =====================================================
            SECOND ROW — 3 CENTERED CARDS
        ====================================================== */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
            w-full
            lg:max-w-5xl
            lg:self-center
          "
        >
          {secondRow.map((item) => (
            <LeadershipCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   LEADERSHIP CARD
========================================================= */

type LeadershipCardProps = {
  icon: string;
  title: string;
  description: string;
};

function LeadershipCard({
  icon,
  title,
  description,
}: LeadershipCardProps) {
  return (
    <article
      className="
        relative
        flex
        min-h-[205px]
        w-full
        flex-col
        items-start
        overflow-hidden
        rounded-xl
        border
        border-zinc-200
        p-6
      "
    >
      {/* =====================================================
          CARD BACKGROUND
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/images/about-us/bg1.png')",
        }}
      />

      {/* =====================================================
          SUBTLE OVERLAY
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-white/10
        "
      />

      {/* =====================================================
          CARD CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          flex-col
          items-start
          gap-4
        "
      >
        {/* Icon */}
        <div className="flex h-8 w-8 shrink-0 items-center justify-center">
          <Image
            src={icon}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
        </div>

        {/* Title */}
        <h3
          className="
            m-0
            w-full
            text-lg
            font-semibold
            leading-7
            text-sky-900
            sm:text-xl
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            m-0
            w-full
            text-sm
            font-normal
            leading-6
            text-slate-600
            sm:text-base
          "
        >
          {description}
        </p>
      </div>
    </article>
  );
}
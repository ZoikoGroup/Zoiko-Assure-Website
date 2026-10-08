"use client";

function ShieldIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 3L19 6V11.5C19 16.1 16.15 19.35 12 21C7.85 19.35 5 16.1 5 11.5V6L12 3Z"
        stroke="#D97706"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EvidenceVaultIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Document outline */}
      <path
        d="M6 2.5H14.5L19 7V21H6V2.5Z"
        stroke="#D97706"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Fold */}
      <path
        d="M14 2.5V7.5H19"
        stroke="#D97706"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Document lines */}
      <path
        d="M9 11H16"
        stroke="#D97706"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M9 15H16"
        stroke="#D97706"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M9 18H14"
        stroke="#D97706"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ControlCard() {
  return (
    <article
      className="
        relative
        w-full
        overflow-hidden
        rounded-xl
        border
        border-amber-100
        bg-white
        shadow-[0px_4px_4px_0px_rgba(0,0,0,0)]
      "
    >
      {/* Figma background */}
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
          backgroundImage: "url('/home/bg3.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Heading */}
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center">
            <ShieldIcon />
          </div>

          <h3
            className="
              text-base
              font-bold
              leading-6
              text-sky-900
            "
          >
            Control Card: CTRL-IAM-402
          </h3>
        </div>

        {/* Details */}
        <div className="mt-4 flex flex-col gap-2">
          <p className="text-xs leading-4 text-slate-600">
            <span className="font-bold">Owner:</span>{" "}
            <span className="font-normal">Security Operations</span>
          </p>

          <p className="text-xs leading-4 text-slate-600">
            <span className="font-bold">Frequency:</span>{" "}
            <span className="font-normal">Continuous / Automated</span>
          </p>

          <p className="text-xs leading-4 text-slate-600">
            <span className="font-bold">Status:</span>{" "}
            <span className="font-bold text-emerald-600">
              Evidence Verified
            </span>
          </p>
        </div>
      </div>
    </article>
  );
}

function EvidenceVaultCard() {
  return (
    <article
      className="
        relative
        w-full
        overflow-hidden
        rounded-xl
        border
        border-amber-100
        bg-white
        shadow-[0px_4px_4px_0px_rgba(0,0,0,0)]
      "
    >
      {/* Figma background */}
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
          backgroundImage: "url('/home/bg3.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Heading */}
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center">
            <EvidenceVaultIcon />
          </div>

          <h3
            className="
              text-base
              font-bold
              leading-6
              text-sky-900
            "
          >
            Evidence Vault Object
          </h3>
        </div>

        {/* Details */}
        <div className="mt-4 flex flex-col gap-2">
          <p className="text-xs leading-4 text-slate-600">
            <span className="font-bold">Artifact Type:</span>{" "}
            <span className="font-normal">
              Automated Identity Audit Log
            </span>
          </p>

          <p className="text-xs leading-4 text-slate-600">
            <span className="font-bold">Integrity Status:</span>{" "}
            <span className="font-normal">
              Integrity Hash Matched
            </span>
          </p>

          <p className="text-xs leading-4 text-slate-600">
            <span className="font-bold">As-Of Timestamp:</span>{" "}
            <span className="font-normal">
              2026-10-07 11:47:17 IST
            </span>
          </p>
        </div>
      </div>
    </article>
  );
}

export default function EvidenceBeforeExamination() {
  return (
    <section className="w-full bg-neutral-50">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          py-16
          sm:px-8
          md:px-10
          lg:px-14
          lg:py-20
          xl:px-20
        "
      >
        <div className="mx-auto w-full max-w-[1280px]">
          {/* =====================================================
              SECTION HEADER
          ====================================================== */}

          <div className="flex w-full flex-col items-start">
            <h2
              className="
                text-3xl
                font-bold
                leading-9
                tracking-tight
                text-sky-900
              "
            >
              Evidence Before the Examination
            </h2>

            <p
              className="
                mt-2
                text-base
                font-normal
                leading-6
                text-slate-600
              "
            >
              Native Evidence Vault with cryptographically verifiable
              lineage.
            </p>
          </div>

          {/* =====================================================
              TWO EVIDENCE CARDS
          ====================================================== */}

          <div
            className="
              mt-12
              grid
              w-full
              grid-cols-1
              gap-6
              lg:grid-cols-2
            "
          >
            <ControlCard />
            <EvidenceVaultCard />
          </div>
        </div>
      </div>
    </section>
  );
}
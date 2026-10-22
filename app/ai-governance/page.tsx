'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* -------------------------------------------------------------------------- */
/*                               PAGE DATA SETS                               */
/* -------------------------------------------------------------------------- */

const governanceChallenges = [
  {
    title: 'Regulatory change',
    description:
      'AI-related rules, regulatory guidance and transition dates change across jurisdictions.',
  },
  {
    title: 'Use-case variability',
    description:
      'An AI feature can serve different purposes, people, sectors and regions.',
  },
  {
    title: 'Provider relationships',
    description:
      'Third-party models, hosted systems and customer roles create different responsibility questions.',
  },
  {
    title: 'Controls versus proof',
    description:
      'A policy, mapped control or completed questionnaire does not prove effective operation.',
  },
  {
    title: 'Governance drift',
    description:
      'Model changes and data-use changes can invalidate prior evaluation context.',
  },
  {
    title: 'Human accountability',
    description:
      'A compliant-sounding AI response is not an authorized legal conclusion.',
  },
];

const stages = [
  { label: 'Regulatory Source' },
  { label: 'Applicability' },
  { label: 'Obligation' },
  { label: 'Control' },
  { label: 'Evidence' },
  { label: 'Assurance', isActive: true },
];

const trustItems = [
  {
    title: 'Privacy & Security',
    description: 'Data handling boundaries lead to Trust Center policies.',
  },
  {
    title: 'Responsible AI',
    description: "Evaluate the institution's methodology, evaluations, and ethical posture.",
  },
  {
    title: 'Data Governance',
    description: 'Verify retention, permissions, and data lifecycle protocols.',
  },
  {
    title: 'Deployment',
    description: 'Review verified integrations and system location claims.',
  },
];

const faqs = [
  {
    question: 'What is enterprise AI governance?',
    answer:
      'It is the accountable process of identifying AI use cases, evaluating applicable rules, assigning controls, preserving evidence and overseeing consequential decisions.',
  },
  {
    question: 'Does ZoikoAssure automatically determine whether AI is compliant?',
    answer:
      'No. Software can help organize source-grounded analysis, but applicability and consequential decisions require qualified review.',
  },
  {
    question: 'How does AI governance differ from Governed AI?',
    answer:
      'This Solutions page addresses governing enterprise AI use; the Platform page describes source-grounded AI assistance inside ZoikoAssure.',
  },
  {
    question: 'How does Responsible AI differ?',
    answer:
      'The Trust Center explains ZoikoAssure’s governance commitments, oversight and safeguards, rather than the customer-use-case workflow.',
  },
  {
    question: 'Can one AI-use-case classification apply globally?',
    answer:
      'No. Requirements depend on jurisdiction, legal entity, activity, role, use and the effective period.',
  },
  {
    question: 'Does a mapped control prove compliance?',
    answer:
      'No. Evidence must be relevant, current, scoped and reviewed; exceptions remain separate.',
  },
  {
    question: 'Can this replace legal counsel or an audit?',
    answer:
      'No. It is designed to support accountable governance and evidence; legal and assurance judgments remain with responsible professionals.',
  },
];

const keyPillars = [
  {
    title: 'Source Authority',
    description:
      'Begin with referenced legislation, official guidance or other approved regulatory sources.',
  },
  {
    title: 'Scope Before Status',
    description:
      'Jurisdiction, AI use, role and effective period govern applicability.',
  },
  {
    title: 'Owners & Safeguards',
    description:
      'Assign qualified decision owners and operational control responsibilities.',
  },
  {
    title: 'Evidence, Not Declaration',
    description:
      'Retain time-stamped, scoped proof of control operation.',
  },
  {
    title: 'Accountable Review',
    description:
      'Escalate material uncertainty and consequential decisions.',
  },
];

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function AIGovernancePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-white font-['Inter',sans-serif] flex flex-col justify-start selection:bg-[#F58220]/20 selection:text-[#0A2540]">
      <main className="flex-1 w-full flex flex-col justify-start">
        {/* SECTION 1: HERO */}
        <section className="w-full bg-[#0A2540] pt-16 pb-24 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col justify-start">
                <span className="text-[#F58220] text-sm font-semibold tracking-wider uppercase leading-6">
                  Solutions / AI Governance
                </span>
                <h1 className="mt-4 text-white text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
                  Govern AI decisions with evidence and accountability.
                </h1>
                <p className="mt-6 text-[#D9E2EC] text-base sm:text-lg font-normal leading-relaxed">
                  As AI becomes part of regulated operations, organizations need to understand which
                  requirements apply, who owns the controls, what evidence exists and which decisions
                  still need review. ZoikoAssure is designed to connect those questions from
                  authoritative regulatory sources through defensible assurance.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/request-demo"
                    className="px-6 py-3 bg-[#F58220] hover:bg-[#e07519] text-white text-base font-semibold rounded-sm transition-colors text-center"
                  >
                    Request a Demo
                  </Link>
                  <a
                    href="#ai-governance-workflow"
                    className="px-6 py-3 border border-white hover:bg-white/10 text-white text-base font-semibold rounded-sm transition-colors text-center"
                  >
                    Explore the AI Governance Workflow
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                  <Link href="/regulatory-exposure" className="text-[#F58220] hover:underline transition-colors">
                    Assess Your Regulatory Exposure
                  </Link>
                  <Link href="/governed-ai" className="text-[#F58220] hover:underline transition-colors">
                    Explore Governed AI
                  </Link>
                  <Link href="/governed-ai#responsible-ai" className="text-[#F58220] hover:underline transition-colors">
                    Explore Responsible AI
                  </Link>
                </div>

                <p className="mt-6 text-[#A0AAB2] text-xs font-semibold tracking-wide">
                  Source-grounded · Jurisdiction-aware · Evidence-first · Human-accountable
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-[480px] p-4 bg-white rounded-lg shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.50)] overflow-hidden">
                  <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden bg-slate-100">
                    <Image
                      src="/images/ai-governance/hero-framework.png"
                      alt="AI Governance Framework"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEY PILLARS FLOATING */}
        <section className="relative z-10 mx-auto -mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {keyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-start rounded-lg border border-[#D9E2EC] bg-white p-5 shadow-md transition-shadow hover:shadow-lg"
              >
                <h3 className="text-base font-semibold leading-5 text-[#0A2540]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-[#5F6B7A]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: WHY AI GOVERNANCE BECOMES HARD */}
        <section className="w-full py-16 md:py-24 flex justify-center bg-white">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col">
            <div className="max-w-3xl">
              <h2 className="text-[#0A2540] text-2xl font-semibold leading-7 tracking-tight">
                Why AI Governance Becomes Hard
              </h2>
            </div>

            <div className="pt-10 md:pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {governanceChallenges.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] outline outline-1 outline-offset-[-1px] outline-[#D9E2EC] flex flex-col justify-start"
                >
                  <h3 className="text-[#0A2540] text-base font-semibold leading-5">
                    {item.title}
                  </h3>
                  <p className="pt-4 text-[#5F6B7A] text-sm font-normal leading-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: THE SIX-STAGE AI GOVERNANCE PATH */}
        <section id="ai-governance-workflow" className="w-full py-16 md:py-24 bg-[#F4F7FA] flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="w-full text-center">
              <h2 className="text-[#0A2540] text-2xl font-semibold leading-7 tracking-tight">
                The Six-Stage AI Governance Path
              </h2>
            </div>

            <div className="w-full pt-10 md:pt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {stages.map((stage, index) => {
                const isHighlight = stage.isActive;
                return (
                  <div
                    key={index}
                    className={`p-4 bg-white rounded-lg flex items-center justify-center transition-shadow ${isHighlight
                      ? 'outline outline-1 outline-offset-[-1px] outline-[#D97637] shadow-[0px_4px_12px_0px_rgba(217,118,55,0.12)]'
                      : 'outline outline-1 outline-offset-[-1px] outline-[#D9E2EC]'
                      }`}
                  >
                    <span
                      className={`text-sm text-center leading-6 ${isHighlight ? 'font-semibold text-[#D97637]' : 'font-normal text-[#5F6B7A]'
                        }`}
                    >
                      {stage.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: USE-CASE CONTEXT & INVENTORY */}
        <section className="w-full py-16 md:py-24 bg-white flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col justify-start">
                <div>
                  <h3 className="text-[#0A2540] text-2xl font-semibold leading-7 tracking-tight">
                    AI Use-Case Context and Inventory
                  </h3>
                  <p className="mt-4 text-[#5F6B7A] text-base font-normal leading-6 max-w-xl">
                    Show scope facts such as legal entity, jurisdictions, intended users, affected
                    individuals, sector/activity and deployment context.
                  </p>
                </div>

                <div className="mt-10 md:mt-12">
                  <h3 className="text-[#0A2540] text-2xl font-semibold leading-7 tracking-tight">
                    Regulatory Source and Effective-Time
                  </h3>
                  <p className="mt-4 text-[#5F6B7A] text-base font-normal leading-6 max-w-xl">
                    Show authority, citations, versions and jurisdiction context. The observed event
                    time must not substitute for the legal validity time.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="/inspect-profile"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-sm border border-[#D97637] text-[#D97637] hover:bg-[#D97637]/10 text-base font-semibold leading-6 transition-colors"
                  >
                    Inspect Profile &amp; Source
                  </Link>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[576px] aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src="/images/ai-governance/use-case-inventory.png"
                    alt="AI Use-Case Context and Inventory Visualization"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 576px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: APPLICABILITY & OBLIGATIONS */}
        <section className="w-full py-16 md:py-24 bg-[#F4F7FA] flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col justify-start">
                <div>
                  <h3 className="text-[#0A2540] text-2xl font-semibold leading-7 tracking-tight">
                    Applicability and Classification Review
                  </h3>
                  <p className="mt-4 text-[#5F6B7A] text-base font-normal leading-6 max-w-xl">
                    Show context, UNCERTAIN and human interpretation. Results are categorized into
                    Applies, Does not apply, or UNCERTAIN. No unexplained AI certainty is permissible.
                  </p>
                </div>

                <div className="mt-10 md:mt-12">
                  <h3 className="text-[#0A2540] text-2xl font-semibold leading-7 tracking-tight">
                    AI Obligations and Control Mapping
                  </h3>
                  <p className="mt-4 text-[#5F6B7A] text-base font-normal leading-6 max-w-xl">
                    Connect approved duties to operational safeguards. Obligation rosters display ID,
                    source version, scope, effective period, legal review status and accountable owner.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="/controls"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-sm border border-[#D97637] text-[#D97637] hover:bg-[#D97637]/10 text-base font-semibold leading-6 transition-colors"
                  >
                    View Mapped Controls
                  </Link>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[576px] aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-white">
                  <Image
                    src="/images/ai-governance/applicability-validation.png"
                    alt="Applicability and Obligations Validation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 576px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: POLICY, OWNERSHIP AND MODEL CHANGE */}
        <section className="w-full py-16 md:py-24 bg-white flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col justify-start">
                <div>
                  <h3 className="text-[#0A2540] text-2xl font-semibold leading-7 tracking-tight">
                    Policy, Ownership and Model Change
                  </h3>
                  <p className="mt-4 text-[#5F6B7A] text-base font-normal leading-6 max-w-xl">
                    Show controlled model and policy lifecycles. Material changes require traceable
                    governance and may flag affected suggestions for re-review.
                  </p>
                </div>

                <div className="mt-10 md:mt-12">
                  <h3 className="text-[#0A2540] text-2xl font-semibold leading-7 tracking-tight">
                    Test Evidence and Provenance
                  </h3>
                  <p className="mt-4 text-[#5F6B7A] text-base font-normal leading-6 max-w-xl">
                    Show proof quality, scope and lineage. Evidence items must explicitly verify test
                    artifacts, source systems, captured times, validities and lineages.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="/evidence-lineage"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-sm border border-[#D97637] text-[#D97637] hover:bg-[#D97637]/10 text-base font-semibold leading-6 transition-colors"
                  >
                    Inspect Evidence Lineage
                  </Link>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[576px] aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-[#0A2540]">
                  <Image
                    src="/images/ai-governance/policy-evidence-interface.png"
                    alt="Policy Code and Evidence Interface"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 576px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: REVIEW, EXCEPTION AND INTEGRATIONS */}
        <section className="w-full py-16 md:py-24 bg-[#F4F7FA] flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col justify-start">
                <div>
                  <h3 className="text-[#0A2540] text-2xl font-semibold leading-7 tracking-tight">
                    Review, Exception and Escalation
                  </h3>
                  <p className="mt-4 text-[#5F6B7A] text-base font-normal leading-6 max-w-xl">
                    Separate human decisions from risk acceptance. Reviewers determine outcomes based
                    on authoritative facts, resolving uncertainty through an accountable process.
                  </p>
                </div>

                <div className="mt-10 md:mt-12">
                  <h3 className="text-[#0A2540] text-2xl font-semibold leading-7 tracking-tight">
                    Third-Party and Deployment Dependencies
                  </h3>
                  <p className="mt-4 text-[#5F6B7A] text-base font-normal leading-6 max-w-xl">
                    Clarify supplier, data, and integration boundaries. Ensure third-party models and
                    customer roles align with legal and security responsibilities.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="/integrations"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-sm border border-[#D97637] text-[#D97637] hover:bg-[#D97637]/10 text-base font-semibold leading-6 transition-colors"
                  >
                    Explore Integrations
                  </Link>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[588px] aspect-[16/10] sm:aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-[#0A2540]">
                  <Image
                    src="/images/ai-governance/team-discussion.png"
                    alt="Team Discussion on AI Governance and Integrations"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 588px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: EXECUTIVE AI GOVERNANCE READOUT */}
        <section className="w-full py-16 md:py-24 bg-white flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col justify-start">
                <div>
                  <h3 className="text-[#0A2540] text-2xl font-semibold leading-7 tracking-tight">
                    Executive AI Governance Readout
                  </h3>
                  <p className="mt-4 text-[#5F6B7A] text-base font-normal leading-6 max-w-xl">
                    Make gaps, exposure and status board-defensible. View aggregated compliance and
                    assurance items while keeping limitations clear.
                  </p>
                </div>

                <div className="mt-10 md:mt-12">
                  <h3 className="text-[#0A2540] text-2xl font-semibold leading-7 tracking-tight">
                    Regulatory Exposure Diagnostic
                  </h3>
                  <p className="mt-4 text-[#5F6B7A] text-base font-normal leading-6 max-w-xl">
                    Start an initial modeled assessment to evaluate potential exposure dimensions before
                    committing to specific controls or evidence requests.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="/assess-exposure"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-sm border border-[#D97637] text-[#D97637] hover:bg-[#D97637]/10 text-base font-semibold leading-6 transition-colors"
                  >
                    Assess Exposure
                  </Link>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[608px] aspect-[680/453] rounded-lg overflow-hidden shadow-lg bg-[#0A2540]">
                  <Image
                    src="/images/ai-governance/executive-readout-dashboard.png"
                    alt="Executive Governance Readout Dashboard"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 608px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: TRUST, RESPONSIBLE AI AND METHODOLOGY */}
        <section className="w-full py-16 md:py-24 bg-[#F4F7FA] flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="w-full text-center">
              <h2 className="text-[#0A2540] text-2xl font-semibold leading-7 tracking-tight">
                Trust, Responsible AI and Methodology
              </h2>
            </div>

            <div className="w-full pt-10 md:pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustItems.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] outline outline-1 outline-offset-[-1px] outline-[#D9E2EC] flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-[#0A2540] text-sm font-semibold leading-4">
                      {item.title}
                    </h3>
                    <p className="pt-4 text-[#5F6B7A] text-xs font-normal leading-5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-10 flex justify-center">
              <Link
                href="/trust-center"
                className="inline-flex items-center justify-center px-6 py-3 rounded-sm border border-[#D97637] text-[#D97637] hover:bg-[#D97637]/10 text-base font-semibold leading-6 transition-colors"
              >
                Explore Trust Center
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 10: BUYER FAQS */}
        <section className="w-full pt-16 md:pt-20 pb-20 md:pb-24 bg-white flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-8 lg:px-28 flex flex-col items-start">
            <div className="w-full">
              <h2 className="text-[#0A2540] text-2xl font-semibold leading-7 tracking-tight">
                Buyer FAQs
              </h2>
            </div>

            <div className="w-full pt-10 md:pt-12 flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="w-full bg-white rounded-sm outline outline-1 outline-offset-[-1px] outline-[#D9E2EC] transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full p-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540]"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[#0A2540] text-base font-semibold leading-6 pr-4">
                        {faq.question}
                      </span>
                      <span
                        className={`text-[#0A2540] text-xl font-medium leading-none transition-transform duration-200 select-none ${isOpen ? 'rotate-45' : ''
                          }`}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-[#5F6B7A] text-base font-normal leading-6">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
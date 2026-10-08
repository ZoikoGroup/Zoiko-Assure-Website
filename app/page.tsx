import AIThatShowsItsWork from '@/components/home/AIThatShowsItsWork'
import AssuranceChain from '@/components/home/AssuranceChain'
import AssuranceHighlights from '@/components/home/AssuranceHighlights'
import ComplianceMomentsSection from '@/components/home/ComplianceMomentsSection'
import DefensibleComplianceCTA from '@/components/home/DefensibleComplianceCTA'
import EvidenceBeforeExamination from '@/components/home/EvidenceBeforeExamination'
import Hero from '@/components/home/Hero'
import MultiJurisdictionalCompliance from '@/components/home/MultiJurisdictionalCompliance'
import RegulationChallenges from '@/components/home/RegulationChallenges'
import RegulatoryExposureCTA from '@/components/home/RegulatoryExposureCTA'
import RegulatoryExposureSection from '@/components/home/RegulatoryExposureSection'
import RegulatoryIntelligence from '@/components/home/RegulatoryIntelligence'
import TrustMustBeVerifiable from '@/components/home/TrustMustBeVerifiable'
import React from 'react'

export default function page() {
  return (
    <main>
      <Hero />
      <AssuranceHighlights />
      <RegulationChallenges />
      <AssuranceChain />
      <MultiJurisdictionalCompliance />
      <EvidenceBeforeExamination />
      <AIThatShowsItsWork />
      <RegulatoryExposureSection />
      <ComplianceMomentsSection />
      <RegulatoryExposureCTA />
      <TrustMustBeVerifiable />
      <RegulatoryIntelligence />
      <DefensibleComplianceCTA />
    </main>
  )
}

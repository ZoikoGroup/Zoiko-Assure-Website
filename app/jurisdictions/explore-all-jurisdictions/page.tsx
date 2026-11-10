import {
  AllJurisdictionsHero,
  AllJurisdictionsGeographyGrid,
  AllJurisdictionsDefensibleAssurance,
  AllJurisdictionsUncertaintyAndAssurance,
  AllJurisdictionsFaqs,
} from "@/components/explore-all-jurisdictions";

export default function ExploreAllJurisdictionsPage() {
  return (
    <main>
      <AllJurisdictionsHero />
      <AllJurisdictionsGeographyGrid />
      <AllJurisdictionsDefensibleAssurance />
      <AllJurisdictionsUncertaintyAndAssurance />
      <AllJurisdictionsFaqs />
    </main>
  );
}

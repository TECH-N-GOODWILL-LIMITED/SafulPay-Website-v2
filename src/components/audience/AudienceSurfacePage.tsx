import type { AudienceSurface } from "@/data/audiences";
import AudienceHero from "@/components/audience/AudienceHero";
import CapabilityGrid from "@/components/audience/CapabilityGrid";
import AudienceSteps from "@/components/audience/AudienceSteps";
import AudienceEligibility from "@/components/audience/AudienceEligibility";
import TrustBar from "@/components/audience/TrustBar";
import AudienceCTA from "@/components/audience/AudienceCTA";

/**
 * The shared six-block skeleton every audience surface renders through
 * (guide §4). Repeating one structure across Personal, Business, Agency and
 * Developers is what makes the site feel systematic rather than assembled.
 *
 * Optional blocks simply don't render when the underlying content is still an
 * open question, so a surface can ship honest and incomplete rather than
 * complete and invented.
 */
function AudienceSurfacePage({ surface }: { surface: AudienceSurface }) {
  return (
    <main id="main-content" className="pt-0 gap-0 bg-[#0b1310]">
      <AudienceHero surface={surface} />

      <CapabilityGrid
        capabilities={surface.capabilities}
        audienceId={surface.id}
      />

      {surface.steps && (
        <div id={surface.stepsAnchor} className="w-full scroll-mt-32">
          <AudienceSteps steps={surface.steps} audienceId={surface.id} />
        </div>
      )}

      {surface.eligibility && (
        <AudienceEligibility
          eligibility={surface.eligibility}
          audienceId={surface.id}
        />
      )}

      <TrustBar trust={surface.trust} audienceId={surface.id} />

      <AudienceCTA
        cta={surface.cta}
        promise={surface.promise}
        accentPhrase={surface.accentPhrase}
        audienceId={surface.id}
      />
    </main>
  );
}

export default AudienceSurfacePage;

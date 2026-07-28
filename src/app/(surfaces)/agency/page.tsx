import type { Metadata } from "next";
import { agencySurface } from "@/data/audiences";
import { audienceMetadata, audienceSchema } from "@/utils/audienceSeo";
import AudienceSurfacePage from "@/components/audience/AudienceSurfacePage";
import JsonLd from "@/components/shared/JsonLd";

export const metadata: Metadata = audienceMetadata(agencySurface);

export default function AgencyPage() {
  return (
    <>
      <JsonLd data={audienceSchema(agencySurface)} />
      <AudienceSurfacePage surface={agencySurface} />
    </>
  );
}

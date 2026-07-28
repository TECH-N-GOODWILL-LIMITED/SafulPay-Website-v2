import type { Metadata } from "next";
import { personalSurface } from "@/data/audiences";
import { audienceMetadata, audienceSchema } from "@/utils/audienceSeo";
import AudienceSurfacePage from "@/components/audience/AudienceSurfacePage";
import JsonLd from "@/components/shared/JsonLd";

export const metadata: Metadata = audienceMetadata(personalSurface);

export default function PersonalPage() {
  return (
    <>
      <JsonLd data={audienceSchema(personalSurface)} />
      <AudienceSurfacePage surface={personalSurface} />
    </>
  );
}

import type { Metadata } from "next";
import { developersSurface } from "@/data/audiences";
import { audienceMetadata, audienceSchema } from "@/utils/audienceSeo";
import AudienceSurfacePage from "@/components/audience/AudienceSurfacePage";
import JsonLd from "@/components/shared/JsonLd";

export const metadata: Metadata = audienceMetadata(developersSurface);

export default function DevelopersPage() {
  return (
    <>
      <JsonLd data={audienceSchema(developersSurface)} />
      <AudienceSurfacePage surface={developersSurface} />
    </>
  );
}

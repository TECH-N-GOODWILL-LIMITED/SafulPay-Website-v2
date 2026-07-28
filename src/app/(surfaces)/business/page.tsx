import type { Metadata } from "next";
import { businessSurface } from "@/data/audiences";
import { audienceMetadata, audienceSchema } from "@/utils/audienceSeo";
import AudienceSurfacePage from "@/components/audience/AudienceSurfacePage";
import JsonLd from "@/components/shared/JsonLd";

export const metadata: Metadata = audienceMetadata(businessSurface);

export default function BusinessPage() {
  return (
    <>
      <JsonLd data={audienceSchema(businessSurface)} />
      <AudienceSurfacePage surface={businessSurface} />
    </>
  );
}

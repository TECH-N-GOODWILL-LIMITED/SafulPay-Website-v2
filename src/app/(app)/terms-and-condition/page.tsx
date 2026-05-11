import Agreement from "@/components/Agreement";
import { termsAndConditionsData } from "@/data/agreementData";

export default function TermsCondition() {
  return (
    <>
      <Agreement data={termsAndConditionsData} />
    </>
  );
}

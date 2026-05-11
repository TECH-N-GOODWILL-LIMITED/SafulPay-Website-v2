import { privacyPolicyData } from "@/data/agreementData";
import Agreement from "@/components/Agreement";

export default function PrivacyPolicy() {
  return (
    <>
      <Agreement data={privacyPolicyData} />
    </>
  );
}

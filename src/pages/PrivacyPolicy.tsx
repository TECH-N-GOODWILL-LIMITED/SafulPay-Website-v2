import Agreement from "../components/Agreement";
import { privacyPolicyData } from "../data/agreementData";
import MainFooter from "../sections/MainFooter";
import NavBar from "../sections/NavBar";

function PrivacyPolicy() {
  return (
    <>
      <NavBar />
      <Agreement data={privacyPolicyData} />
      <MainFooter />
    </>
  );
}

export default PrivacyPolicy;

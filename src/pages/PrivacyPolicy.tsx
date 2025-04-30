import NavBar from "../sections/NavBar";
import MainFooter from "../sections/MainFooter";
import { privacyPolicyData } from "../data/agreementData";
import Agreement from "../components/Agreement";

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

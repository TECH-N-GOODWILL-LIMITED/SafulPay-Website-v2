import Agreement from "../components/Agreement";
import { termsAndConditionsData } from "../data/agreementData";
import MainFooter from "../sections/MainFooter";
import NavBar from "../sections/NavBar";

function TermsCondition() {
  return (
    <>
      <NavBar />

      <Agreement data={termsAndConditionsData} />
      <MainFooter />
    </>
  );
}

export default TermsCondition;

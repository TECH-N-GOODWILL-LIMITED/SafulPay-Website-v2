import NavBar from "../sections/NavBar";
import Agreement from "../components/Agreement";
import MainFooter from "../sections/MainFooter";
import { termsAndConditionsData } from "../data/agreementData";

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

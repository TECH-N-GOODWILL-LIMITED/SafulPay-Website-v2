import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import { usePageTitle } from "./hooks/usePageTitle";

function App() {
  usePageTitle();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-condition" element={<TermsCondition />} />
    </Routes>
  );
}

export default App;

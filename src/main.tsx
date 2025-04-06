import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import ScrollToTop from "./utils/ScrollToTop.tsx";
import "./index.css";
import { SmoothScrollProvider } from "./context/SmoothScrollProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScrollProvider>
        <ScrollToTop />
        <App />
      </SmoothScrollProvider>
    </BrowserRouter>
  </StrictMode>
);

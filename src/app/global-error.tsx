"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          backgroundColor: "#0d0d0d",
          color: "#ffffff",
          fontFamily:
            "Outfit, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "32rem" }}>
          <p
            style={{
              color: "#c3f02c",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Application Error
          </p>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              marginBottom: "0.75rem",
            }}
          >
            SafulPay is temporarily unavailable.
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              marginBottom: "1.5rem",
            }}
          >
            We hit an unexpected issue. Please reload the page — if it
            continues, our team has already been notified.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              cursor: "pointer",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.75rem",
              backgroundColor: "#c3f02c",
              color: "#3a5646",
              border: "none",
              fontWeight: 600,
              fontSize: "0.875rem",
            }}
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
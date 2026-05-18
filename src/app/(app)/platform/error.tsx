"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function PlatformError({
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
    <main className="min-h-screen flex-center flex-col gap-6 text-background px-6 text-center bg-primary-color">
      <div className="flex flex-col gap-3 max-w-lg">
        <p className="text-secondary-color text-xs font-semibold tracking-widest uppercase">
          Platform unavailable
        </p>
        <h1 className="primary-heading">We couldn't load the platform page.</h1>
        <p className="text-white/60 text-base leading-relaxed">
          Try again, or head back home. Agency, merchant, and developer services
          are unaffected.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold bg-secondary-color text-primary-color hover:bg-secondary-color/90 transition-all"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold border border-white/20 text-background hover:bg-white/8 transition-all"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}

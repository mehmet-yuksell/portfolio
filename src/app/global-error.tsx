"use client";

import "./globals.css";

// Last-resort boundary for errors in the root layout. Shows no error details.
export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body className="grid min-h-dvh place-items-center p-6 text-center">
        <main>
          <p className="font-mono text-sm tracking-[0.3em] text-accent-strong">500</p>
          <h1 className="mt-4 text-3xl font-bold">Something went wrong</h1>
          <p className="mt-3 text-muted">An unexpected error occurred. Please try again.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 h-11 rounded-full bg-fg px-6 text-sm font-medium text-bg"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}

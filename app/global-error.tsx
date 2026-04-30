"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className="bg-black text-white">
        <div className="flex h-screen w-full flex-col items-center justify-center">
          <h2 className="text-2xl font-serif mb-4">A critical error occurred!</h2>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-white text-black rounded"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}

"use client";

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black text-white">
      <h2 className="text-2xl font-serif mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-white text-black rounded"
      >
        Try again
      </button>
    </div>
  );
}

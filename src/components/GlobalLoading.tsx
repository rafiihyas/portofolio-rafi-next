"use client";

import { useIsFetching } from "@tanstack/react-query";

export default function GlobalLoading() {
  const isFetching = useIsFetching();

  if (!isFetching) return null;

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[9999]">
        <div className="h-full w-1/3 bg-primary animate-loading-bar" />
      </div>

      {/* Overlay */}
      <div className="fixed inset-0 z-[9998] flex items-center justify-center cursor-wait">
        <div className="flex flex-col items-center gap-3">
          {/* <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-sm text-gray-600 font-medium">
            Memuat data...
          </span> */}
        </div>
      </div>
    </>
  );
}

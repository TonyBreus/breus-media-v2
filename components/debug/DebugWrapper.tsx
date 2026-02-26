"use client";

import React, { ReactNode } from "react";

interface DebugWrapperProps {
  id: string | number;
  label?: string;
  children: ReactNode;
  className?: string; // Optional class for the wrapper
}

export const DebugWrapper = ({
  id,
  label,
  children,
  className = "",
}: DebugWrapperProps) => {
  const isDebugMode = process.env.NEXT_PUBLIC_DEBUG_MODE === "true";

  if (!isDebugMode) {
    return <>{children}</>;
  }

  return (
    <div className={`relative group ${className}`}>
      {/* Debug Badge */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-[9999] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-200">
        <div className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded shadow-lg border border-red-700 whitespace-nowrap">
          #{id} {label && <span className="font-normal opacity-80">| {label}</span>}
        </div>
      </div>
      {/* Target Content */}
      <div className="ring-1 ring-red-500/0 group-hover:ring-red-500/50 transition-all duration-200">
        {children}
      </div>
    </div>
  );
};

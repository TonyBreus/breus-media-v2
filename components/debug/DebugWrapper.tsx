"use client";

import React, { ReactNode } from "react";

interface DebugWrapperProps {
  id: string | number;
  label?: string;
  children: ReactNode;
  className?: string; // Optional class for the wrapper
  style?: React.CSSProperties; // Pass z-index and positioning directly to wrapper
}

export const DebugWrapper = ({
  id,
  children,
  className = "",
  style,
}: DebugWrapperProps) => {
  const isDebugMode = process.env.NEXT_PUBLIC_DEBUG_MODE === "true";

  if (!isDebugMode) {
    if (className || style) {
      return (
        <div className={className} style={style}>
          {children}
        </div>
      );
    }

    return <>{children}</>;
  }

  return (
    <div data-debug-wrapper className={`relative group ${className}`} style={style}>
      {/* Debug Badge */}
      <div data-debug-badge className="absolute top-0 left-0 bg-red-500 text-white text-[10px] leading-none font-bold px-1.5 py-1 rounded-br shadow-md border-r border-b border-red-700 z-[9999] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-200">
        #{id}
      </div>
      {/* Target Content */}
      <div data-debug-content className={`ring-1 ring-red-500/0 group-hover:ring-red-500/50 transition-all duration-200${className?.includes('h-full') ? ' h-full' : ''}`}>
        {children}
      </div>
    </div>
  );
};

"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface AuroraTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

export function AuroraText({ children, className, ...props }: AuroraTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block",
        "bg-gradient-to-r from-[#ec443b] via-[#636363] to-[#ff6f64] bg-[length:300%_300%]",
        "bg-clip-text text-transparent",
        "animate-aurora",
        "[text-shadow:0_0_35px_rgba(236,68,59,0.55),0_0_60px_rgba(255,111,100,0.32)]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

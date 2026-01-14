"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps): JSX.Element {
  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300">
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: ReactNode }): JSX.Element {
  return <div className="mb-4 text-lg font-semibold text-zinc-100">{children}</div>;
}

export function CardContent({ children }: { children: ReactNode }): JSX.Element {
  return <div className="text-sm text-zinc-400">{children}</div>;
}
"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({ children, onClick, type = "button" }: ButtonProps): JSX.Element {
  return (
    <button 
      type={type}
      onClick={onClick}
      className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-500 transition-all"
    >
      {children}
    </button>
  );
}
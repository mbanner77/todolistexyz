"use client";

interface InputProps {
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "date";
  required?: boolean;
}

export function Input({ name, placeholder, type = "text", required = false }: InputProps): JSX.Element {
  return (
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      required={required}
      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-100 placeholder:text-zinc-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
    />
  );
}
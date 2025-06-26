import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "white";
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "px-6 py-2 rounded-md border border-white/20 font-semibold shadow-sm transition focus:outline-none";
  const variants = {
    default:
      "bg-zinc-900 text-white hover:bg-zinc-800 hover:border-white/40",
    white:
      "bg-gradient-to-b from-white/90 to-white/70 text-black hover:from-white hover:to-zinc-200 hover:border-white/40",
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
} 
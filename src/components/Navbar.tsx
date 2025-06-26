import React from "react";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav
      className="w-full flex items-center justify-between py-4 px-4 md:px-8 bg-[#09090B] text-white rounded-2xl mb-12 shadow-lg"
      style={{ minHeight: 64 }}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
        <img src="/icon.svg" className="w-8 h-8" alt="Logo" />
        <span className="font-bold text-lg tracking-tight truncate">Launch UI</span>
        </div>
        <ul className="hidden md:flex gap-8 font-medium text-base ml-8">
          <li className="hover:underline cursor-pointer">Getting started</li>
          <li className="hover:underline cursor-pointer">Components</li>
          <li className="hover:underline cursor-pointer">Documentation</li>
        </ul>
      </div>
      <div className="flex gap-2">
        <Button className="hidden lg:block"> 
          Sign in
        </Button>
        <Button variant="white">
          Get started
        </Button>
      </div>
    </nav>
  );
}

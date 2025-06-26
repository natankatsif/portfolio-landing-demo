import React from "react";

const links = [
  {
    title: "Product",
    items: [
      { label: "Changelog", href: "#" },
      { label: "Documentation", href: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Contact",
    items: [
      { label: "Github", href: "https://github.com/natankatsif" },
      { label: "Discord", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#09090B] pt-16 pb-8 text-white z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Логотип и название */}
          <div className="flex flex-col gap-4 min-w-[180px]">
            <div className="flex items-center gap-2 mb-2">
              <img src="/icon.svg" className="w-7 h-7" alt="Logo" />
              <span className="font-bold text-lg tracking-tight">Launch UI</span>
            </div>
          </div>
          {/* Ссылки */}
          <div className="flex flex-1 flex-wrap gap-12 md:gap-20 lg:gap-32 justify-start">
            {links.map((col) => (
              <div key={col.title} className="min-w-[120px]">
                <div className="mb-3 font-semibold text-base text-white">{col.title}</div>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="text-zinc-300 hover:text-white transition text-sm">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Линия */}
        <div className="border-t border-zinc-800 mt-12 mb-6" />
        {/* Копирайт и policy */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-400 text-xs">
          <div>© 2024 Mikolaj Dobrucki. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 
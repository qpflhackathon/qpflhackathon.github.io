"use client";

import Image from "next/image";
import { useState } from "react";

import epflLogo from "@assets/images/Logo_EPFL_2019.svg.png";
import { event, navLinks } from "@/content/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-100 border-b border-black/8 bg-white/95 backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image src={epflLogo} alt="EPFL Logo" className="h-4 w-auto" priority />
          <span className="font-ui text-[1.05rem] font-medium">{event.shortName}</span>
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-controls="primary-nav"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="cursor-pointer p-[0.3rem] md:hidden"
        >
          <span
            className={`my-1 block h-0.5 w-5 bg-taupe transition duration-200 ${isOpen ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`my-1 block h-0.5 w-5 bg-taupe transition duration-200 ${isOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>

        <nav
          id="primary-nav"
          className={`absolute inset-x-0 top-full flex flex-col gap-6 overflow-hidden bg-white/98 px-6 pt-2 pb-4 font-ui transition-[max-height,opacity] duration-250 md:pointer-events-auto md:static md:max-h-none md:flex-row md:overflow-visible md:bg-transparent md:p-0 md:opacity-100 ${isOpen ? "max-h-80 opacity-100" : "pointer-events-none max-h-0 opacity-0"}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="relative pb-0.5 text-[0.95rem] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-taupe after:transition-[width] after:duration-200 hover:after:w-full focus-visible:after:w-full max-md:py-[0.35rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

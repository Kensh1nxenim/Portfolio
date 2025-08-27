"use client";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold">
          Kensh1nxenim<span className="text-primary">.dev</span>
        </Link>
        <nav
          className={`flex items-center gap-6 ${open ? "" : "max-md:hidden"}`}
        >
          <a href="#projects" className="hover:text-primary">
            Projects
          </a>
          <a href="#skills" className="hover:text-primary">
            Skills
          </a>
          <a href="#experience" className="hover:text-primary">
            Experience
          </a>
          <a href="#achievements" className="hover:text-primary">
            Achievements
          </a>
          <a href="#contact" className="btn btn-primary">
            Contact
          </a>
        </nav>
        <button
          className="md:hidden btn btn-ghost px-3 py-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

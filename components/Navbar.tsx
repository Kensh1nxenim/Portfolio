"use client";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold text-gray-900 dark:text-gray-50">
          Kensh1nxenim<span className="text-primary">.dev</span>
        </Link>
        <nav
          className={`flex items-center gap-6 ${open ? "" : "max-md:hidden"}`}
        >
          <a href="#projects" className="hover:text-primary text-gray-600 dark:text-gray-400 dark:hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-primary text-gray-600 dark:text-gray-400 dark:hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#experience" className="hover:text-primary text-gray-600 dark:text-gray-400 dark:hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#achievements" className="hover:text-primary text-gray-600 dark:text-gray-400 dark:hover:text-primary transition-colors">
            Achievements
          </a>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="btn btn-primary">
              Contact
            </a>
          </div>
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

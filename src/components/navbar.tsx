"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Technology", href: "/technology" },
  { name: "Lifestyle", href: "/lifestyle" },
  { name: "Education", href: "/education" },
  { name: "Travel", href: "/travel" },
  { name: "Food", href: "/food" },
  { name: "News & Trends", href: "/news&trends" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const isOpen = openPath === pathname;

  const toggleMenu = () => {
    setOpenPath((current) => (current === pathname ? null : pathname));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo2.png"
            alt="BlogNest Logo"
            width={70}
            height={70}
            className="h-16 w-16"
          />
        </Link>

        {/* navbar */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative inline-flex flex-col items-center text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#89a8d0] after:content-[''] after:transition-transform ${
                  isActive
                    ? "text-[#0f3b93] after:scale-x-100"
                    : "text-slate-600 hover:text-[#0f3b93] hover:after:scale-x-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile view navbar */}
        <button
          type="button"
          className="rounded-md p-2 text-slate-700 transition-colors hover:text-[#0f3b93] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-nav"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`md:hidden transition-[max-height,opacity] duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden border-b border-slate-200 bg-[#f5f2fb]`}
      >
        <nav id="mobile-nav" aria-hidden={!isOpen} className="flex flex-col gap-4 px-8 pb-6 pt-4">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-medium ${
                  isActive ? "text-[#0f3b93]" : "text-slate-600 hover:text-[#0f3b93]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
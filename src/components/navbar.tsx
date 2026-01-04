"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Technology", href: "/technology" },
  { name: "Lifestyle", href: "/lifestyle" },
  { name: "Education", href: "/education" },
  { name: "Travel", href: "/travel" },
  { name: "Other", href: "/other" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#f5f2fb]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/icon.png"
            alt="BlogNest Logo"
            width={50}
            height={50}
            className="h-12 w-12"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative inline-flex flex-col items-center text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#6f4ad1] after:content-[''] after:transition-transform ${
                  isActive
                    ? "text-[#6f4ad1] after:scale-x-100"
                    : "text-slate-600 hover:text-[#6f4ad1] hover:after:scale-x-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button className="rounded-md p-2 text-slate-700 md:hidden" aria-label="Open menu">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
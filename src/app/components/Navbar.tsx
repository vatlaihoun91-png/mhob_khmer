"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/food", label: "Food Menu" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-[#0f3d24] text-[#f7f4ec]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2f7a3e] text-base">
            🍛
          </span>
          <span>
            M&apos;Hob
            <span className="text-[#d9c77a]">Khmer</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "text-[#d9c77a] underline-offset-4"
                  : "text-[#f7f4ec] transition hover:text-[#d9c77a]"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/food"
            className="hidden md:inline-block rounded-full bg-[#d97706] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#b45309]"
          >
            Order Now
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden rounded-md border border-white/[.2] p-2 text-[#f7f4ec]"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/[.15] bg-[#0f3d24] px-6 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={
                "block pb-3 text-base font-semibold " +
                (isActive(link.href)
                  ? "text-[#d9c77a]"
                  : "text-[#f7f4ec] hover:text-[#d9c77a]")
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/food"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-[#d97706] px-5 py-2 text-center text-sm font-semibold text-white"
          >
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}
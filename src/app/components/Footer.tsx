import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/food", label: "Food Menu" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f3d24] text-[#f7f4ec]">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-20 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="flex items-center gap-2 text-lg font-bold tracking-tight">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2f7a3e] text-base">
                🍛
              </span>
              <span>
                M&apos;Hob
                <span className="text-[#d9c77a]">Khmer</span>
              </span>
            </p>
            <p className="mt-4 text-sm leading-6 text-[#cdd9c7]">
              Authentic Khmer cuisine made with fresh ingredients,
              traditional recipes, and a lot of love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#d9c77a]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#f7f4ec] transition hover:text-[#d9c77a]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#d9c77a]">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#cdd9c7]">
              <li>123 Green Street, Phnom Penh</li>
              <li>hello@mhobkhmer.com</li>
              <li>+855 12 345 678</li>
            </ul>
            <div className="mt-4 flex gap-3 text-base">
              <a href="#" aria-label="Facebook" className="transition hover:opacity-80">
                📘
              </a>
              <a href="#" aria-label="Instagram" className="transition hover:opacity-80">
                📸
              </a>
              <a href="#" aria-label="Twitter" className="transition hover:opacity-80">
                🐦
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[.1] pt-6 text-center text-sm text-[#cdd9c7]">
          © {new Date().getFullYear()} M&apos;Hob Khmer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
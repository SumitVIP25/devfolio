"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex gap-8">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`transition duration-300 hover:text-sky-400 ${
              isActive ? "text-sky-400 font-semibold" : "text-white"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}

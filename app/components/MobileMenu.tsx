"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl text-white"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu */}
      {isOpen && (
        <div
          className="
          absolute
          top-[72px]
          left-0
          w-full
          bg-slate-800
          border-t
          border-slate-700
          shadow-xl
          z-50
          "
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`
                block
                px-6
                py-4
                text-lg
                hover:bg-slate-700
                hover:text-sky-400
                transition
                ${
                  pathname === link.href
                    ? "text-sky-400 font-semibold"
                    : "text-white"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

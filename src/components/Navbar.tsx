"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Programs", href: "#programs" },
  { name: "Impact", href: "#impact" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Application", href: "#application" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  /* Scroll + active section detection */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      links.forEach((link) => {
        const el = document.querySelector(link.href);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4">
      <nav
        className={`
          relative group
          max-w-7xl mx-auto mt-4
          px-6 transition-all duration-300
          ${
            scrolled
              ? "py-3 bg-black/70 backdrop-blur-2xl shadow-2xl border border-white/10"
              : "py-4 bg-white/10 backdrop-blur-xl border border-white/20"
          }
          rounded-2xl
        `}
        aria-label="Primary navigation"
      >
        {/* Cursor glow */}
        <span
          className="
            pointer-events-none absolute inset-0
            rounded-2xl opacity-0 group-hover:opacity-100
            transition duration-500
            bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(255,213,128,0.15),transparent_40%)]
          "
        />

        <div className="relative z-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 focus:outline-none">
            <Image
              src="/pictures/KHF.png"
              alt="Kiddies Health & Welfare Foundation"
              width={84}
              height={84}
              priority
            />
            <span className="text-white font-semibold text-base md:text-lg leading-tight">
              Kiddies Health <br className="hidden sm:block" /> & Welfare
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative text-sm font-medium
                  transition focus:outline-none
                  ${
                    active === link.href
                      ? "text-[#FFD580]"
                      : "text-white/80 hover:text-white"
                  }
                `}
              >
                {link.name}
                {/* Underline animation */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] w-full
                    origin-left scale-x-0
                    bg-gradient-to-r from-[#FFD580] to-[#FF6F61]
                    transition-transform duration-300
                    group-hover:scale-x-100
                    ${active === link.href ? "scale-x-100" : ""}
                  `}
                />
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="#donate"
              className="
                hidden sm:inline-flex
                px-5 py-2 rounded-full font-semibold
                bg-gradient-to-r from-[#FFD580] to-[#FF6F61]
                text-black shadow-lg
                hover:opacity-90 transition
                focus:outline-none focus:ring-2 focus:ring-[#FFD580]
              "
            >
              Get Involved
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="
                md:hidden text-white
                focus:outline-none focus:ring-2 focus:ring-[#FFD580]
              "
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            md:hidden
            mt-3 mx-auto max-w-7xl
            bg-black/85 backdrop-blur-2xl
            border border-white/10
            rounded-2xl
            p-6 space-y-4
            shadow-2xl
          "
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`
                block font-medium transition
                ${
                  active === link.href
                    ? "text-[#FFD580]"
                    : "text-white/90 hover:text-white"
                }
              `}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#donate"
            onClick={() => setOpen(false)}
            className="
              block text-center mt-4
              px-5 py-3 rounded-full font-semibold
              bg-gradient-to-r from-[#FFD580] to-[#FF6F61]
              text-black shadow-lg
            "
          >
            Get Involved
          </Link>
        </div>
      )}
    </header>
  );
}

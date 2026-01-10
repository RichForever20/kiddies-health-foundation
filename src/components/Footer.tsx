"use client";

import { Mail, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C68642]/20 via-transparent to-[#C68642]/20 blur-3xl pointer-events-none" />

      <div className="relative bg-white/70 backdrop-blur-xl border-t border-white/30">
        {/* Accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#C68642] via-[#e6b87a] to-[#C68642]" />

        <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* Brand / Mission */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kiddies Health & Welfare Foundation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dedicated to improving children’s health, dignity, and access to
                essential care through compassion and sustainable action.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Organization
              </h4>
              <ul className="space-y-3 text-sm">
                {["About", "Programs", "Impact", "Donate", "Volunteer"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-600 hover:text-[#C68642] transition"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Stay Connected
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Get updates on our programs and impact.
              </p>

              <form className="flex items-center gap-2">
                <div className="relative w-full">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="
                      w-full pl-10 pr-4 py-2.5
                      rounded-xl
                      border border-gray-300
                      text-sm
                      focus:outline-none
                      focus:ring-2 focus:ring-[#C68642]
                    "
                  />
                </div>
                <button
                  type="submit"
                  className="
                    px-4 py-2.5 rounded-xl
                    bg-[#C68642] text-white text-sm font-medium
                    hover:bg-[#b67838] transition
                  "
                >
                  Join
                </button>
              </form>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Follow Us
              </h4>

              <div className="flex items-center space-x-4">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Instagram, label: "Instagram" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="
                      p-3 rounded-full
                      bg-white/70
                      border border-gray-200
                      text-gray-600
                      hover:text-[#C68642]
                      hover:scale-110
                      transition
                    "
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              <p className="text-xs text-gray-500 mt-6">
                Registered Non-Profit Organization
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Kiddies Health & Welfare Foundation. All
              rights reserved.
            </p>

            <div className="flex space-x-6 text-xs">
              <a
                href="/terms"
                className="text-gray-500 hover:text-[#C68642] transition"
              >
                Terms & Conditions
              </a>
              <a
                href="/privacy"
                className="text-gray-500 hover:text-[#C68642] transition"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "var(--primary)" }}
      className="text-[var(--secondary)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand */}
          <div className="flex-shrink-0 flex items-center text-lg font-bold cursor-pointer select-none">
            Homzy
          </div>

          {/* Middle: Navigation - hidden on mobile */}
          <div className="hidden md:flex md:space-x-8 md:mx-auto">
            <a
              href="/"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:underline"
            >
              Home
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:underline"
            >
              About
            </a>
          </div>

          {/* Right: Login + Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Login button - hidden on mobile */}
            <a
              href="/login"
              className="hidden md:inline-block px-3 py-1 rounded bg-[var(--secondary)] text-[var(--primary)] font-semibold hover:bg-gray-200 transition"
            >
              Login
            </a>

            {/* Hamburger button - visible on mobile only */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <HiX className="block h-6 w-6 text-[var(--secondary)]" />
              ) : (
                <HiMenu className="block h-6 w-6 text-[var(--secondary)]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle based on menuOpen state */}
      {menuOpen && (
        <div
          style={{ backgroundColor: "var(--primary)" }}
          className="md:hidden px-2 pt-2 pb-3 space-y-1"
        >
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)]"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)]"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/login"
            className="block px-3 py-2 rounded-md text-base font-medium text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)]"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
}

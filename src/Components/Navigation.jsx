import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-[var(--clr-primary)]/90 border-b border-[var(--clr-primary-soft)]/20 shadow-[var(--shadow-sm)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--clr-secondary)] to-[var(--clr-accent)] flex items-center justify-center shadow-lg group-hover:shadow-[var(--shadow-md)] transition-all duration-300">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="font-[var(--font-sans)] font-bold text-xl tracking-tight text-[var(--text-inverse)]">
              CRDTLIN{" "}
              <span className="font-[var(--fw-regular)] text-[var(--clr-secondary)]">
                SOLUTION
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {[
                "Home",
                "Products",
                "Technology",
                "Sustainability",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-[var(--text-inverse)]/80 hover:text-[var(--clr-accent)] px-3 py-2 rounded-md text-sm font-[var(--fw-medium)] transition-colors duration-[var(--duration-fast)] group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--clr-accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-[var(--duration-normal)] origin-left"></span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="relative overflow-hidden group cursor-pointer px-6 py-2.5 rounded-full bg-[var(--clr-accent)] text-[var(--clr-primary-dark)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:scale-105 transition-all duration-[var(--duration-normal)]">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              <span className="relative font-[var(--fw-bold)] text-sm tracking-wide">
                Order Now
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--text-inverse)] hover:text-[var(--clr-accent)] hover:bg-[var(--clr-primary-soft)]/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--clr-primary)] focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-[var(--duration-normal)] ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3 bg-[var(--clr-primary)] border-t border-[var(--clr-primary-soft)]/20 shadow-lg">
          {["Home", "Products", "Technology", "Sustainability", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[var(--text-inverse)] hover:bg-[var(--clr-primary-soft)]/20 hover:text-[var(--clr-accent)] block px-3 py-3 rounded-md text-base font-[var(--fw-medium)] transition-colors duration-[var(--duration-fast)]"
              >
                {item}
              </a>
            ),
          )}
          <div className="pt-4">
            <button className="w-full relative overflow-hidden group cursor-pointer px-6 py-3 rounded-lg  bg-[var(--clr-accent)] text-[var(--clr-primary-dark)] font-bold shadow-md hover:shadow-[var(--shadow-md)] hover:scale-[1.02] transition-all duration-[var(--duration-normal)]">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              <span className="relative">Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

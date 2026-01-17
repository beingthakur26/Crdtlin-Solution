import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-[var(--clr-primary)] text-[var(--text-inverse)] shadow-md">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--space-4)] flex items-center justify-between h-20">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-[var(--clr-secondary)]"></div>
          <span className="font-[var(--font-sans)] font-bold text-lg">
            CRDTLIN <span className="font-[var(--fw-medium)] text-[var(--clr-bg)]">SOLUTION</span>
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 font-[var(--font-sans)] font-[var(--fw-medium)] text-[var(--text-inverse)]">
          <li className="hover:text-[var(--clr-accent)] transition duration-[var(--duration-normal)]">Home</li>
          <li className="hover:text-[var(--clr-accent)] transition duration-[var(--duration-normal)]">About</li>
          <li className="hover:text-[var(--clr-accent)] transition duration-[var(--duration-normal)]">Products</li>
          <li className="hover:text-[var(--clr-accent)] transition duration-[var(--duration-normal)]">Technology</li>
          <li className="hover:text-[var(--clr-accent)] transition duration-[var(--duration-normal)]">Contact</li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:inline-block px-6 py-2 rounded-[var(--radius-md)] bg-gradient-to-r from-[var(--clr-secondary)] to-[var(--clr-accent)] text-[var(--clr-black)] font-[var(--font-sans)] font-[var(--fw-medium)] shadow-md hover:scale-105 transition transform duration-[var(--duration-normal)]">
          Get Started
        </button>

      </div>
    </nav>
  );
}

"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Über mich", href: "#" },
    { name: "Projekte", href: "#" },
    { name: "Lebenslauf", href: "#" },
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between border mx-4 mt-6 border-slate-700 px-6 py-4 rounded-full text-white text-sm bg-black/50 backdrop-blur-md">
      {/* Logo */}
      <a href="https://prebuiltui.com" className="shrink-0"></a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 ml-7">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative overflow-hidden h-6 group"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              {link.name}
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              {link.name}
            </span>
          </a>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="hidden ml-auto md:flex items-center gap-4">
        <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
          Kontakt
        </button>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 text-white outline-none"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-black border border-slate-800 rounded-3xl p-6 flex flex-col items-center gap-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg hover:text-gray-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <hr className="w-full border-slate-800" />
          <div className="flex flex-col w-full gap-3">
            <button className="w-full border border-slate-600 py-3 rounded-full font-medium">
              Contact
            </button>
            <button className="w-full bg-white text-black py-3 rounded-full font-medium shadow-lg shadow-white/20">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default function PortfolioPage() {
  const [items, setItems] = useState([]);

  return (
    <main className="min-h-screen bg-[#000000] text-white antialiased">
      {/* Die neue Navbar */}
      <div className="max-w-4xl mx-auto pt-2">
        <Navbar />
      </div>

      {/* Content Bereich */}
      <section className="flex justify-center px-4 py-24">
  <div className="w-full max-w-6xl">
    <h1 className="mb-6 text-4xl md:text-6xl font-bold tracking-tight text-left">
      Tim Sokolovski,<br />
      Full-Stack Developer
    </h1>

    <p className="my-30 max-w-2xl text-base md:text-xl text-slate-400 text-center mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>

    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-right">
      TestRight
    </h1>
  </div>
</section>

    </main>
  );
}

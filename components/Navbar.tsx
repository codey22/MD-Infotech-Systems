"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* Scroll background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close on outside click or ESC */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/60 dark:bg-black/30 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-brand-500 to-orange-500 shadow-xl-glow">
            <Image
              src="/MD Infotech Systems Logo.png"
              alt="MD Infotech Systems logo"
              fill
              sizes="48px"
              priority
              className="rounded-full object-contain"
            />
          </div>
          <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            MD Infotech Systems
          </span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-5 py-2 text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200"
            >
              <span className="absolute -inset-px rounded-full bg-gradient-to-br from-brand-500/0 to-orange-500/0 group-hover:from-brand-500/15 group-hover:to-orange-500/15 blur-sm" />
              <span className="relative">
                {item.label}
                <span className="absolute left-0 right-0 -bottom-1 h-px scale-x-0 bg-gradient-to-r from-brand-500 to-orange-500 transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl"
        >
          <span
            className={`absolute h-0.5 w-5 bg-current transition-transform ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-current transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-current transition-transform ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        ref={menuRef}
        className={`md:hidden absolute inset-x-0 top-full origin-top transition-all duration-300 ${
          open
            ? "scale-y-100 opacity-100"
            : "pointer-events-none scale-y-95 opacity-0"
        }`}
      >
        <nav className="mx-4 mt-2 rounded-2xl border border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

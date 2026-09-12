"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuRef = useRef<HTMLDialogElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    menuRef.current?.close();
    setMobileOpen(false);
  };

  useEffect(() => {
    if (!mobileOpen) return;
    const menu = menuRef.current;
    const toggle = toggleRef.current;
    if (!menu) return;
    menu.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 48rem)");
    const handleResize = () => {
      if (desktop.matches) {
        menu.close();
        setMobileOpen(false);
      }
    };
    desktop.addEventListener("change", handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", handleResize);
      menu.close();
      if (!desktop.matches) toggle?.focus();
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["about", "skills", "projects", "experience", "contact"];
      const current = sections.find((s) => {
        const el = document.getElementById(s);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
          data-motion-reveal
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">

<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
  <span className="text-white text-sm font-bold">GC</span>
</div>            </div>
            <span className="font-semibold text-white font-heading tracking-wide">
              Gaurav Chavda<span className="text-cyan-400"></span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 transition-opacity"
            >
              Hire Me
            </a>
          </div>

          <button
            ref={toggleRef}
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="md:hidden p-2 text-slate-400 hover:text-white focus-visible:outline-2 focus-visible:outline-cyan-400"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </motion.nav>

      <dialog
        ref={menuRef}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        onCancel={closeMenu}
        onClose={() => setMobileOpen(false)}
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-y-auto border-0 bg-[#030712]/95 px-6 pb-6 pt-20 text-white backdrop:bg-[#030712]/80"
      >
        <button
          type="button"
          onClick={closeMenu}
          aria-label="Close navigation menu"
          className="absolute right-6 top-4 p-2 text-slate-400 hover:text-white focus-visible:outline-2 focus-visible:outline-cyan-400"
        >
          <X size={22} aria-hidden="true" />
        </button>
        <nav aria-label="Mobile" className="flex flex-col gap-2 [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-cyan-400">
              {navLinks.map((link, i) => (
                <motion.a
          data-motion-reveal
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-4 px-4 rounded-xl text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 border-b border-white/5"
                  onClick={closeMenu}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                className="mt-4 py-4 text-center rounded-xl text-lg font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                onClick={closeMenu}
              >
                Hire Me
              </a>
        </nav>
      </dialog>
    </>
  );
}

import { useState, useEffect, type MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { Globe, Menu, X, Rocket } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useLenisRef } from "./SmoothScroll";

const languages = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const lenisRef = useLenisRef();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (!(element instanceof HTMLElement)) return;

    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(element, { offset: -100 });
    } else {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.experience"), href: "#experience" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-6",
        isScrolled ? "py-4" : "",
      )}
    >
      <div
        className={cn(
          "max-w-5xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
          isScrolled
            ? "glass-navbar bg-white/5 backdrop-blur-2xl border-white/10"
            : "bg-transparent",
        )}
      >
        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="flex items-center gap-2 group cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <span className="font-display font-bold text-xs text-black">
              SF
            </span>
          </div>
          <span className="font-display font-medium text-sm tracking-tight hidden sm:block">
            SAMUEL <span className="text-gray-500">FRÉDÉRIC</span>
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-[11px] font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}

          <div className="w-px h-4 bg-white/10" />

          {/* Lang Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="text-[10px] font-bold text-gray-500 hover:text-white transition-colors uppercase"
            >
              {i18n.language.toUpperCase().split("-")[0]}
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-4 bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl min-w-[100px]"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={cn(
                        "w-full px-5 py-3 text-[10px] uppercase font-bold text-left hover:bg-white/5 transition-colors",
                        i18n.language.startsWith(lang.code)
                          ? "text-emerald-500"
                          : "text-gray-500",
                      )}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="text-[10px] font-bold bg-white text-black px-6 py-2 rounded-full uppercase tracking-widest hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            {t("nav.contact")}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white opacity-60"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505]/95 backdrop-blur-2xl border-b border-white/[0.03] overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-8 p-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-4xl font-display font-bold text-white uppercase tracking-tighter cursor-pointer hover:text-emerald-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 w-full" />
              <div className="flex gap-8">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-widest",
                      i18n.language.startsWith(lang.code)
                        ? "text-emerald-500"
                        : "text-gray-600",
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

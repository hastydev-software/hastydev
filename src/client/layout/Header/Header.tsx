"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Soluções", href: "#products", label: "Ir para seção de soluções" },
  {
    name: "Plataforma",
    href: "#tech",
    label: "Ir para seção de plataforma",
  },
  { name: "Sobre nós", href: "#about", label: "Ir para seção sobre nós" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(14, 30, 49, 0)", "rgba(14, 30, 49, 0.95)"]
  );

  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      setActiveSection(href);
      setIsOpen(false);

      // Aguarda um pouco para garantir que o DOM está pronto
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          console.warn(`Elemento com ID ${href} não encontrado`);
        }
      }, 0);
    }
  };

  return (
    <motion.header
      style={{
        backgroundColor: headerBackground,
        backdropFilter: headerBlur,
      }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-shadow duration-300",
        isScrolled && "shadow-xl shadow-black/20"
      )}
    >
      <nav className="w-full px-4 lg:px-8 flex justify-between items-center h-16 lg:h-20 gap-6 lg:gap-8  mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="shrink-0"
        >
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsOpen(false);
            }}
            className={cn(
              "block focus:outline-none focus:ring-2 focus:ring-[#35a7ff] focus:ring-offset-2 focus:ring-offset-[#0e1e31] rounded-lg transition-all",
              "hover:scale-110 active:scale-95 duration-300"
            )}
            aria-label="HastyDev - Ir para o início"
          >
            <Image
              src="/logo.svg"
              alt="HastyDev - Soluções Web3 e Blockchain"
              className="h-8 lg:h-10 w-auto"
              width={120}
              height={40}
              priority
            />
          </button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="hidden lg:flex items-center gap-6"
        >
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.1 + 0.08 * index,
              }}
            >
              <a
                href={item.href}
                onClick={handleNavClick}
                className={cn(
                  "relative block px-4 py-2 text-sm font-medium transition-all duration-300",
                  activeSection === item.href
                    ? "text-[#35a7ff]"
                    : "text-white/80 hover:text-white",
                  "focus:outline-none focus:ring-2 focus:ring-[#35a7ff]/50"
                )}
                aria-label={item.label}
              >
                <span>{item.name}</span>
                {/* Animated underline */}
                <motion.span
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#35a7ff]"
                  initial={false}
                  animate={{
                    opacity: activeSection === item.href ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="hidden lg:flex shrink-0"
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#contato");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={cn(
              "group relative inline-flex items-center justify-center gap-2",
              "px-6 py-2.5",
              "bg-[#1f254a] hover:bg-[#35a7ff] text-white",
              "font-medium text-sm",
              "rounded-lg overflow-hidden",
              "transition-all duration-200 ease-out",
              "hover:shadow-lg hover:shadow-[#35a7ff]/30",
              "focus:outline-none focus:ring-2 focus:ring-[#35a7ff] focus:ring-offset-2 focus:ring-offset-[#0e1e31]",
              "active:scale-95"
            )}
            aria-label="Agendar reunião com a HastyDev"
          >
            <Calendar
              className={cn(
                "w-4 h-4 transition-all duration-200",
                "group-hover:scale-125 group-hover:rotate-12"
              )}
              aria-hidden="true"
            />
            <span className="relative z-10 font-semibold">
              Marque uma Reunião
            </span>
          </button>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "lg:hidden p-2.5 rounded-lg",
            isOpen ? "text-[#35a7ff]" : "text-white",
            "hover:text-[#35a7ff] hover:bg-white/5",
            "focus:outline-none focus:ring-2 focus:ring-[#35a7ff]",
            "transition-all duration-200"
          )}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </motion.div>
        </motion.button>
      </nav>

      <motion.nav
        id="mobile-menu"
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="lg:hidden overflow-hidden border-t border-white/10"
        aria-hidden={!isOpen}
      >
        <motion.div
          initial={false}
          animate={{
            y: isOpen ? 0 : -20,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="px-4 py-6 space-y-2 bg-linear-to-b from-[#0e1e31]/80 to-[#0e1e31]"
        >
          <div className="space-y-2 pb-4 border-b border-white/10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
                }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className={cn(
                  "block px-4 py-3 rounded-lg transition-all duration-150",
                  activeSection === item.href
                    ? "bg-[#35a7ff]/20 text-[#35a7ff] border-l-2 border-[#35a7ff]"
                    : "text-white/80 bg-white/5 border-l-2 border-transparent hover:bg-[#1f254a]/60 hover:text-[#35a7ff] hover:border-[#35a7ff]/50",
                  "focus:outline-none focus:ring-2 focus:ring-[#35a7ff] focus:ring-offset-2 focus:ring-offset-[#0e1e31]"
                )}
                aria-label={item.label}
              >
                <span className="font-medium text-sm">{item.name}</span>
              </motion.a>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 20,
            }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.15 }}
            className="pt-4"
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#contato");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }
              }}
              className={cn(
                "w-full group flex items-center justify-center gap-2",
                "px-6 py-3",
                "bg-[#1f254a] hover:bg-[#35a7ff] text-white",
                "font-semibold text-base",
                "rounded-lg overflow-hidden",
                "transition-all duration-200 ease-out",
                "hover:shadow-lg hover:shadow-[#35a7ff]/30",
                "focus:outline-none focus:ring-2 focus:ring-[#35a7ff] focus:ring-offset-2 focus:ring-offset-[#0e1e31]",
                "active:scale-95"
              )}
              aria-label="Agendar reunião com a HastyDev"
            >
              <Calendar
                className={cn(
                  "w-5 h-5 transition-all duration-200",
                  "group-hover:scale-125 group-hover:rotate-12"
                )}
                aria-hidden="true"
              />
              <span>Marque uma Reunião</span>
            </button>
          </motion.div>
        </motion.div>
      </motion.nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden -z-10"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </motion.header>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const socialLinks = [
    {
      id: "instagram",
      href: "https://instagram.com/hastydev",
      label: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      id: "linkedin",
      href: "https://linkedin.com/company/hastydev",
      label: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
    },
  ];

  const products = [
    { label: "HastyPay Engine", href: "#products" },
    { label: "HastyP2P Core", href: "#products" },
    { label: "HastyLegal Guide", href: "#products" },
    { label: "HastyBrand Studio", href: "#products" },
  ];

  const footerLinks = [
    { label: "Soluções", href: "#products" },
    { label: "Plataforma", href: "#tech" },
    { label: "Sobre nós", href: "#about" },
  ];

  return (
    <footer className="relative bg-linear-to-b from-[#060a1b] via-[#0a0e27] to-[#000000] overflow-hidden border-t border-white/10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#35a7ff]/3 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/2 left-1/3 w-80 h-80 bg-[#4984c8]/2 rounded-full blur-3xl -z-10" />
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 space-y-6"
            >
              <div className="relative h-12 w-40">
                <Image
                  src="/logo.svg"
                  alt="HastyDev Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                HastyDev entregou rápido: contratos inteligentes (DEPIX)
                aumentaram conversões, eliminaram erros e integraram automação
                com performance.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:contato@hastydev.com"
                  className="flex items-center gap-3 text-white/60 hover:text-[#35a7ff] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#35a7ff] group-hover:scale-110 transition-transform" />
                  <span className="text-sm">contato@hastydev.com</span>
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-[#35a7ff] transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#35a7ff] group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+55 11 99999-9999</span>
                </a>
                <div className="flex items-start gap-3 text-white/60 group">
                  <MapPin className="w-4 h-4 text-[#35a7ff] mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">São Paulo, Brasil</span>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg border border-white/20 hover:border-[#35a7ff]/50 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-all duration-300 text-white/70 hover:text-[#35a7ff] font-semibold text-xs"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-white font-bold text-lg">Nossos Produtos</h3>
              <ul className="space-y-3">
                {products.map((product, idx) => (
                  <motion.li
                    key={product.label}
                    variants={linkVariants}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <a
                      href={product.href}
                      className="group flex items-center gap-2 text-white/60 hover:text-[#35a7ff] transition-colors text-sm"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-3 h-3" />
                      </span>
                      <span>{product.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-white font-bold text-lg">Links Rápidos</h3>
              <ul className="space-y-3">
                {footerLinks.map((link, idx) => (
                  <motion.li
                    key={link.label}
                    variants={linkVariants}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-white/60 hover:text-[#35a7ff] transition-colors text-sm"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-3 h-3" />
                      </span>
                      <span>{link.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
        <div className="border-t border-white/5" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-white/50 text-sm text-center md:text-left">
            © {currentYear} HastyDev. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-white/50 hover:text-white/80 text-xs transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="/terms"
              className="text-white/50 hover:text-white/80 text-xs transition-colors"
            >
              Termos de Serviço
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

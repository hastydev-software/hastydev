"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ nome: "", empresa: "", email: "", mensagem: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const socialLinks = [
    {
      id: "instagram",
      href: "https://instagram.com/hastydev",
      label: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      color: "hover:text-pink-500 hover:border-pink-500",
    },
    {
      id: "linkedin",
      href: "https://linkedin.com/company/hastydev",
      label: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:text-blue-400 hover:border-blue-400",
    },
  ];

  return (
    <section
      id="contato"
      className="relative bg-linear-to-b from-[#060a1b] via-[#0e0f17] to-[#0a0c18] overflow-hidden py-24 md:py-32 lg:py-40"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#35a7ff]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#4984c8]/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20"
        >
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="relative h-10 w-32">
              <Image
                src="/logo.svg"
                alt="HastyDev Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Entre em <br />
                <span className="bg-linear-to-r from-[#35a7ff] via-[#4984c8] to-[#35a7ff] bg-clip-text text-transparent">
                  contato
                </span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                Use nossa stack pronta e foque em crescimento,{" "}
                <span className="text-white font-semibold">
                  nós cuidamos do resto.
                </span>
              </p>
            </div>
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-[#35a7ff]/20 rounded-lg blur group-hover:bg-[#35a7ff]/30 transition-all" />
                  <Mail className="w-6 h-6 text-[#35a7ff] relative z-10 p-1" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Email</p>
                  <a
                    href="mailto:contato@hastydev.com"
                    className="text-white font-semibold hover:text-[#35a7ff] transition-colors"
                  >
                    tecnologia@dseclab.io
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-[#35a7ff]/20 rounded-lg blur group-hover:bg-[#35a7ff]/30 transition-all" />
                  <MessageCircle className="w-6 h-6 text-[#35a7ff] relative z-10 p-1" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">WhatsApp</p>
                  <a
                    href="https://wa.me/5511999999999"
                    className="text-white font-semibold hover:text-[#35a7ff] transition-colors"
                  >
                    +55 (11) 99999-9999
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-[#35a7ff]/20 rounded-lg blur group-hover:bg-[#35a7ff]/30 transition-all" />
                  <MapPin className="w-6 h-6 text-[#35a7ff] relative z-10 p-1" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Localização</p>
                  <p className="text-white font-semibold">São Paulo, Brasil</p>
                </div>
              </motion.div>
            </div>
            <div className="space-y-4">
              <p className="text-white/70 text-sm font-medium uppercase tracking-widest">
                Acompanhe-nos
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "w-12 h-12 rounded-lg border border-white/20",
                      "flex items-center justify-center",
                      "bg-white/5 hover:bg-white/10",
                      "transition-all duration-300",
                      "text-white/70 hover:text-white font-semibold",
                      social.color
                    )}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div variants={itemVariants} className="relative">
            {/* Form Background */}
            <div className="absolute inset-0 bg-linear-to-br from-[#12142a]/80 to-[#1a1c36]/80 backdrop-blur-xl rounded-2xl border border-white/10 -z-10" />

            <div className="relative p-8 md:p-12 space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Agende uma consultoria grátis
                </h3>
                <p className="text-white/60 text-sm">
                  Responderemos em até 24 horas
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name and Company Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      name="nome"
                      placeholder="Seu nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1a1c36] border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:border-[#35a7ff] focus:outline-none focus:ring-2 focus:ring-[#35a7ff]/20 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Sua empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1a1c36] border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:border-[#35a7ff] focus:outline-none focus:ring-2 focus:ring-[#35a7ff]/20 transition-all duration-300"
                    />
                  </motion.div>
                </div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1c36] border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:border-[#35a7ff] focus:outline-none focus:ring-2 focus:ring-[#35a7ff]/20 transition-all duration-300"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <textarea
                    name="mensagem"
                    placeholder="Conte-nos sobre seu projeto..."
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1a1c36] border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:border-[#35a7ff] focus:outline-none focus:ring-2 focus:ring-[#35a7ff]/20 transition-all duration-300 resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full group relative inline-flex items-center justify-center gap-2 px-8 py-3.5",
                    "text-white font-semibold text-base rounded-lg",
                    "transition-all duration-300",
                    "hover:shadow-lg hover:shadow-[#35a7ff]/40",
                    "focus:outline-none focus:ring-2 focus:ring-[#35a7ff] focus:ring-offset-2 focus:ring-offset-[#0e1e31]",
                    "active:scale-95 overflow-hidden",
                    "disabled:opacity-70 disabled:cursor-not-allowed",
                    "border-[0.2px] border-white border-solid"
                  )}
                  style={{
                    background:
                      "linear-gradient(90deg, #0e1e31, #4984c8, #0e1e31)",
                  }}
                  aria-label="Enviar formulário de contato"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full"
                      />
                    )}
                    {isSubmitting && "Enviando..."}
                    {submitStatus === "success" && "Consultoria agendada! ✓"}
                    {submitStatus !== "success" && !isSubmitting && (
                      <>
                        Agendar demo
                        <ArrowRight
                          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-white/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                  >
                    Erro ao enviar. Tente novamente.
                  </motion.div>
                )}
              </form>

              {/* Benefits */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <p className="text-white/60 text-xs font-medium uppercase tracking-widest">
                  O que você ganha
                </p>
                <div className="space-y-2">
                  {[
                    "✓ Setup em 21 dias",
                    "✓ Sem dev interno necessário",
                    "✓ Suporte especializado 24/7",
                  ].map((benefit) => (
                    <motion.p
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="text-white/70 text-sm"
                    >
                      {benefit}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

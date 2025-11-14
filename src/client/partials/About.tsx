"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section
      id="sobre"
      className="relative bg-linear-to-b from-[#0f163f] via-[#0a0e27] to-[#060a1b] overflow-hidden py-24 md:py-32 lg:py-40"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#35a7ff]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#4984c8]/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16 lg:space-y-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#35a7ff] bg-[#35a7ff]/10 px-4 py-2 rounded-full border border-[#35a7ff]/20">
                  Who we are
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Mais do que{" "}
                <span className="bg-linear-to-r from-[#35a7ff] via-[#4984c8] to-[#35a7ff] bg-clip-text text-transparent">
                  desenvolvedores
                </span>
                <br />
                Arquitetos da{" "}
                <span className="text-[#35a7ff]">descentralização.</span>
              </h2>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="space-y-5 text-white/70 leading-relaxed"
            >
              <p className="text-base lg:text-lg">
                A HastyDev é a empresa de inovação focada em criar soluções
                financeiras descentralizadas. Desenvolvemos plataformas Web3
                seguras, automatizadas e 100% alinhadas às normas legais,
                garantindo que cada operação una liberdade e conformidade.
              </p>
              <p className="text-base lg:text-lg">
                <span className="text-[#35a7ff] font-semibold">
                  Bloco conceitual:
                </span>{" "}
                Liberdade e segurança não são opostos — são complementares. Por
                isso, cada projeto HastyDev nasce com uma base técnica e
                jurídica sólida.
              </p>
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-linear-to-br from-[#35a7ff]/20 via-transparent to-[#4984c8]/20 z-10 pointer-events-none" />
                <Image
                  src="/img/Devs.png"
                  alt="Equipe HastyDev trabalhando em projetos Web3"
                  fill
                  className="object-cover"
                  quality={90}
                  priority={false}
                />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-[#162a5b]/40 backdrop-blur-md border border-[#35a7ff]/30 rounded-xl p-4 shadow-xl hidden lg:block"
              >
                <div className="text-sm font-semibold text-white">
                  30+ Especialistas
                </div>
                <div className="text-xs text-[#35a7ff]">
                  Em Web3 e Blockchain
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Com a HastyDev,
                  <br />
                  <span className="text-[#35a7ff]">
                    você conecta seu negócio
                  </span>
                  <br />
                  ao futuro financeiro global.
                </h3>

                <p className="text-white/70 text-lg leading-relaxed">
                  Nós transformamos complexidade em simplicidade. Tecnologia de
                  ponta, expertise legal e suporte dedicado para levar seu
                  negócio ao próximo nível Web3.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const element = document.querySelector("#contato");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={cn(
                  "group relative inline-flex items-center gap-2 px-8 py-3.5",
                  "text-white font-semibold text-base rounded-lg",
                  "transition-all duration-300",
                  "hover:shadow-lg hover:shadow-[#35a7ff]/40",
                  "focus:outline-none focus:ring-2 focus:ring-[#35a7ff] focus:ring-offset-2 focus:ring-offset-[#0e1e31]",
                  "active:scale-95 overflow-hidden",
                  "border-[0.2px] border-white border-solid"
                )}
                style={{
                  background:
                    "linear-gradient(90deg, #0e1e31, #4984c8, #0e1e31)",
                }}
                aria-label="Agendar conversa com especialista da HastyDev"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Agende uma conversa
                  <ArrowRight
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#35a7ff]">21</div>
                  <div className="text-xs text-white/70">Dias para Go-Live</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#35a7ff]">100%</div>
                  <div className="text-xs text-white/70">Segurança Legal</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

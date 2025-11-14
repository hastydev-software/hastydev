"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

interface StatCard {
  number: string;
  description: string;
  highlighted?: boolean;
  label?: string;
}

const stats: StatCard[] = [
  {
    number: "21 dias",
    label: "O mais rápido",
    description: "Tempo médio de go-live",
    highlighted: true,
  },
  {
    number: "100%",
    description: "Processamento automático de PIX",
  },
  {
    number: "30+",
    description: "Especialistas no time",
  },
];

export function Stats() {
  return (
    <section
      id="stats"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 2xl:py-40 px-3 sm:px-4 md:px-6 lg:px-8 2xl:px-28 bg-linear-to-b from-[#0a0e27] via-[#0d1035] to-[#0a0e27] flex justify-center overflow-hidden"
      aria-label="Seção de estatísticas"
    >
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#35a7ff]/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#4984c8]/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] bg-[#35a7ff]/5 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2" />

      <motion.div
        className="w-full max-w-7xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">
            Números que{" "}
            <span className="bg-linear-to-r from-[#35a7ff] via-[#4984c8] to-[#35a7ff] bg-clip-text text-transparent">
              falam por si
            </span>
          </h2>
          <p className="text-white/60 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Resultados comprovados que transformam negócios
          </p>
        </motion.div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={`stat-${stat.description}`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(53, 167, 255, 0.2)",
              }}
              className={`relative group flex flex-col items-start justify-start text-left rounded-2xl sm:rounded-3xl backdrop-blur-2xl border transition-all duration-300 overflow-hidden p-4 sm:p-5 md:p-6 flex-1 min-w-64 sm:min-w-fit min-h-32 sm:min-h-40 md:min-h-44 ${
                stat.highlighted
                  ? "bg-linear-to-br from-[#0c112f]/80 to-[#1a1f4a]/60 border-[#35a7ff]/40 shadow-lg shadow-[#35a7ff]/10"
                  : "bg-linear-to-br from-[#0c112f]/50 to-[#0d1138]/50 border-white/10 hover:border-[#35a7ff]/30 hover:bg-linear-to-br hover:from-[#0c112f]/70 hover:to-[#1a1f4a]/40"
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-tr from-[#35a7ff]/0 via-white/0 to-[#35a7ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {stat.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-linear-to-r from-[#35a7ff] via-[#4984c8] to-[#35a7ff]" />
              )}
              {stat.highlighted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -90 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-2 sm:mb-3 inline-flex items-center gap-1 sm:gap-2 bg-white text-black px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-bold shadow-lg shadow-[#35a7ff]/30 whitespace-nowrap"
                >
                  <TrendingUp size={14} className="text-[#35a7ff]" />
                  {stat.label}
                </motion.div>
              )}
              <motion.div
                className="relative flex items-center justify-start z-10 mb-2 sm:mb-3 h-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 + 0.1 }}
                whileHover={{ scale: 1.08 }}
              >
                <span
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none"
                  style={{
                    fontFamily: "FONTSPRING DEMO - Universo Black, sans-serif",
                    fontWeight: 900,
                    background:
                      "linear-gradient(to bottom, #ffffff 42%, #50A0FF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.number}
                </span>
              </motion.div>
              <motion.p
                className="text-white/80 text-xs sm:text-sm md:text-base lg:text-base font-semibold z-10 relative leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 + 0.2 }}
              >
                {stat.description}
              </motion.p>
              <div className="absolute inset-0 bg-radial-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6">
            Pronto para transformar seu negócio?
          </p>
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-linear-to-r from-[#35a7ff] to-[#4984c8] text-black font-bold text-sm sm:text-base rounded-lg shadow-lg shadow-[#35a7ff]/40 hover:shadow-xl hover:shadow-[#35a7ff]/60 transition-all duration-300"
          >
            Entrar em Contato →
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

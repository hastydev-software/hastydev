"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";

interface FloatingCard {
  id: string;
  position: "top" | "bottom";
  title: string;
  value: string;
  subtitle: string;
  icon?: string;
  stats?: Array<{
    label: string;
    color: string;
  }>;
}

const floatingCards: FloatingCard[] = [
  {
    id: "transactions",
    position: "top",
    title: "Total de Transações",
    value: "872",
    subtitle: "Últimos 7 dias",
    icon: "/img/analise.png",
  },
  {
    id: "distribution",
    position: "bottom",
    title: "Distribuição por Status",
    subtitle: "Últimos 7 dias",
    value: "4 Status",
    stats: [
      { label: "Completo", color: "from-[#2a9df4]" },
      { label: "Pago", color: "from-[#00c38b]" },
      { label: "Espera", color: "from-[#fbbc05]" },
      { label: "Reembolsado", color: "from-[#ea4335]" },
    ],
  },
];

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

export function Tech() {
  return (
    <section
      id="tech"
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-28 overflow-hidden"
      aria-label="Seção de Tecnologia e Plataforma"
    >
      {/* Background com gradiente */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(180deg, #0e0f17 0%, #15182d 100%)`,
        }}
      />

      {/* Efeito de glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#35a7ff]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#4984c8]/5 rounded-full blur-3xl -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lado Esquerdo - Conteúdo */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#35a7ff]/10 border border-[#35a7ff]/30 backdrop-blur-sm w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#35a7ff]" />
              <span className="text-[#35a7ff] text-sm font-semibold">
                O futuro é descentralizado — o juridicamente seguro.
              </span>
            </motion.div>

            {/* Título */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Tecnologia que opera dentro da lei.
              <br />
              <span className="bg-linear-to-r from-[#35a7ff] to-[#4984c8] bg-clip-text text-transparent">
                É à frente do tempo.
              </span>
            </motion.h2>

            {/* Descrição */}
            <motion.p
              variants={itemVariants}
              className="text-base lg:text-lg text-white/70 leading-relaxed max-w-lg"
            >
              Nosso time jurídico especializado em cripto e blockchain garante
              que cada projeto opere com legitimidade e segurança. Oferecemos
              estruturação legal de plataformas Web3, criação de contratos
              inteligentes auditáveis e gestão de compliance e obrigações
              fiscais.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#35a7ff]/40"
              style={{
                background: "linear-gradient(90deg, #0e1e31, #4984c8, #0e1e31)",
              }}
            >
              Descubra como unir tecnologia e segurança
              <ArrowRight
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </motion.button>
          </motion.div>

          {/* Lado Direito - Imagem e Cards Flutuantes */}
          <motion.div
            variants={itemVariants}
            className="relative h-[500px] lg:h-[700px] -mr-28 lg:-mr-40"
          >
            {/* Background decorativo atrás do MacBook */}
            <div className="absolute inset-0 bg-linear-to-br from-[#35a7ff]/10 to-[#4984c8]/10 rounded-3xl blur-2xl" />
            <div className="absolute -right-20 top-1/3 w-96 h-96 bg-[#35a7ff]/5 rounded-full blur-3xl" />

            {/* Imagem do MacBook */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-full flex items-center justify-end"
            >
              <Image
                src="/img/Macbook_Air_Mockup_3 1.png"
                alt="Dashboard HastyDev"
                fill
                className="object-contain object-right drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Card Superior - Total de Transações */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(53, 167, 255, 0.2)" }}
              className="absolute top-12 -left-20 sm:top-16 md:top-20 lg:top-32 lg:left-0 bg-[#162a5b]/20 backdrop-blur-xl border border-[#2b7fff]/40 rounded-2xl p-5 sm:p-6 w-72 sm:w-80 shadow-xl z-10"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[#2b7fff] text-sm font-semibold mb-1">
                    Total de Transações
                  </p>
                  <p className="text-white/80 text-xs">Últimos 7 dias</p>
                </div>
                {floatingCards[0].icon && (
                  <div className="relative w-12 h-12 bg-linear-to-br from-[#2b7fff] to-[#5aa7ff] rounded-lg p-2 shadow-lg">
                    <Image
                      src={floatingCards[0].icon}
                      alt="Transações"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                )}
              </div>
              <p className="text-4xl font-bold text-[#86bdf9]">872</p>
            </motion.div>

            {/* Card Inferior - Distribuição por Status */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: 5, boxShadow: "0 20px 40px rgba(53, 167, 255, 0.2)" }}
              className="absolute bottom-12 -left-20 sm:bottom-16 md:bottom-20 lg:bottom-32 lg:left-0 bg-[#162a5b]/20 backdrop-blur-xl border border-[#2b7fff]/40 rounded-2xl p-5 sm:p-6 w-72 sm:w-80 shadow-xl z-10"
            >
              <div className="mb-4">
                <p className="text-[#2b7fff] text-sm font-semibold mb-1">
                  Distribuição por Status
                </p>
                <p className="text-white/80 text-xs">Últimos 7 dias</p>
              </div>

              {/* Mini chart com donut visualization */}
              <div className="flex items-center gap-6 mb-4">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.1)"
                      strokeWidth="8"
                    />
                    {/* Segments */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#2a9df4"
                      strokeWidth="8"
                      strokeDasharray="56.5 251.3"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#00c38b"
                      strokeWidth="8"
                      strokeDasharray="100.5 251.3"
                      strokeDashoffset="-56.5"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#fbbc05"
                      strokeWidth="8"
                      strokeDasharray="37.7 251.3"
                      strokeDashoffset="-157"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#ea4335"
                      strokeWidth="8"
                      strokeDasharray="25.1 251.3"
                      strokeDashoffset="-194.7"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-[#35a7ff]" />
                  </div>
                </div>

                {/* Legend */}
                <div className="space-y-2 flex-1">
                  {[
                    { label: "Completo", color: "#2a9df4", value: "35%" },
                    { label: "Pago", color: "#00c38b", value: "40%" },
                    { label: "Espera", color: "#fbbc05", value: "15%" },
                    { label: "Reembolsado", color: "#ea4335", value: "10%" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-white/70 text-xs">
                        {item.label}
                      </span>
                      <span className="text-white/50 text-xs ml-auto">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Divisor decorativo */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-b from-transparent to-[#0a0e27] pointer-events-none" />
    </section>
  );
}

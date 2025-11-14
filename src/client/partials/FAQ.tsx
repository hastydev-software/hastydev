"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "geography",
    question: "A HastyDev atua apenas no Brasil?",
    answer:
      "Não. Operamos com parceiros em múltiplas jurisdições (LatAm, EUA, Europa) para alinhar tecnologia Web3 e requisitos regulatórios.",
  },
  {
    id: "payment-integration",
    question: "Podem integrar PIX, Lightning e redes on-chain no mesmo fluxo?",
    answer:
      "Sim. Orquestramos pagamentos híbridos (PIX cripto) e liquidez multi-rede (Bitcoin on-chain, Lightning, Liquid; além de Tron/Polygon quando fizer sentido).",
  },
  {
    id: "escrow-smart-contracts",
    question: 'Como funciona o "escrow jurídico" com smart contracts?',
    answer:
      "Desenhamos o contrato inteligente e o arcabouço legal correspondente (termos, política, laudos/auditoria), garantindo execução automática com validade jurídica. contratos auditáveis para garantir operações seguras entre as partes.",
  },
  {
    id: "tokenization",
    question: "Tokenização exige entidade em país específico?",
    answer:
      "Depende do ativo e do público-alvo. Avaliamos a melhor jurisdição, documentamos o ativo e estruturamos os registros/compliance requeridos.",
  },
  {
    id: "kyc",
    question: "KYC é obrigatório nas plataformas P2P?",
    answer:
      "É uma decisão de risco regulatório. Implementamos desde KYC seletivo/por faixas até modelos com de-risking e monitoramento transacional",
  },
  {
    id: "audit",
    question: "Vocês fazem auditoria de smart contracts?",
    answer:
      "Sim. Realizamos auditoria interna e, quando necessário, encaminhamos para auditorias independentes reconhecidas.",
  },
  {
    id: "delivery-timeline",
    question: "Prazos médios de entrega?",
    answer:
      "MVPs costumam levar 4–8 semanas; soluções enterprise com múltiplas integrações variam de 8–16+ semanas, conforme escopo.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

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

  return (
    <section className="relative bg-linear-to-b from-[#0a0e27] via-[#0e1e31] to-[#060a1b] overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Background decorative elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#35a7ff]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#4984c8]/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[#35a7ff] text-sm md:text-base font-semibold uppercase tracking-widest mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            O que você precisa saber para
            <br />
            decidir com{" "}
            <span className="bg-linear-to-r from-[#35a7ff] to-[#4984c8] bg-clip-text text-transparent">
              segurança
            </span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Respostas claras sobre nossa abordagem em Web3, compliance e entrega
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-3"
        >
          {faqItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="group">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === item.id ? null : item.id)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenIndex(openIndex === item.id ? null : item.id);
                  }
                }}
                className={cn(
                  "w-full px-6 py-4 md:py-5",
                  "bg-white/5 hover:bg-white/10",
                  "border border-white/10 hover:border-[#35a7ff]/30",
                  "rounded-lg transition-all duration-300",
                  "text-left flex items-center justify-between gap-4",
                  "focus:outline-none focus:ring-2 focus:ring-[#35a7ff] focus:ring-offset-2 focus:ring-offset-[#0a0e27]",
                  openIndex === item.id && "bg-white/10 border-[#35a7ff]/30"
                )}
                aria-expanded={openIndex === item.id}
              >
                <span className="flex-1">
                  <h3 className="text-white font-semibold text-base md:text-lg">
                    {item.question}
                  </h3>
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-[#35a7ff] transition-transform duration-300 shrink-0",
                    openIndex === item.id && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {openIndex === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 md:py-5 bg-white/5 border border-t-0 border-white/10 rounded-b-lg text-white/70 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-white/60 text-lg mb-6">
            Não encontrou sua pergunta?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold text-base rounded-lg bg-linear-to-r from-[#0e1e31] to-[#4984c8] hover:from-[#1a2a40] hover:to-[#5a94d8] transition-all duration-300 hover:shadow-lg hover:shadow-[#35a7ff]/40"
          >
            Entre em contato
          </a>
        </motion.div>
      </div>
    </section>
  );
}

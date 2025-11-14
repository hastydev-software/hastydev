"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "A HastyDev atua apenas no Brasil?",
    answer:
      "Não. Operamos com parceiros em múltiplas jurisdições (LatAm, EUA, Europa) para alinhar tecnologia Web3 e requisitos regulatórios.",
  },
  {
    question:
      "Podem integrar PIX, Lightning e redes on-chain no mesmo fluxo?",
    answer:
      "Sim. Orquestramos pagamentos híbridos (PIX cripto) e liquidez multi-rede (Bitcoin on-chain, Lightning, Liquid; além de Tron/Polygon quando fizer sentido).",
  },
  {
    question:
      'Como funciona o "escrow jurídico" com smart contracts?',
    answer:
      "Desenhamos o contrato inteligente e o arcabouço legal correspondente (termos, política, laudos/auditoria), garantindo execução automática com validade jurídica. contratos auditáveis para garantir operações seguras entre as partes.",
  },
  {
    question: "Tokenização exige entidade em país específico?",
    answer:
      "Depende do ativo e do público-alvo. Avaliamos a melhor jurisdição, documentamos o ativo e estruturamos os registros/compliance requeridos.",
  },
  {
    question: "KYC é obrigatório nas plataformas P2P?",
    answer:
      "É uma decisão de risco regulatório. Implementamos desde KYC seletivo/por faixas até modelos com de-risking e monitoramento transacional",
  },
  {
    question: "Vocês fazem auditoria de smart contracts?",
    answer:
      "Sim. Realizamos auditoria interna e, quando necessário, encaminhamos para auditorias independentes reconhecidas.",
  },
  {
    question: "Prazos médios de entrega?",
    answer:
      "MVPs costumam levar 4–8 semanas; soluções enterprise com múltiplas integrações variam de 8–16+ semanas, conforme escopo.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h4>FAQ</h4>
      <h2>
        O que você precisa saber para <br />
        decidir com <span>segurança</span>
      </h2>

      <div className="faq-container">
        {faqItems.map((item, index) => (
          <details
            key={`faq-${index}`}
            open={openIndex === index}
            onClick={(e) => {
              e.preventDefault();
              toggleOpen(index);
            }}
          >
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

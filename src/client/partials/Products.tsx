"use client";

import { motion } from "framer-motion";
import { Trophy, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Product {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const products: Product[] = [
  {
    id: "p2p",
    title: "HastyP2P Core",
    icon: "/img/p2p.png",
    description: "Plataforma P2P white-label. Integre em dias, não meses.",
    features: [
      "Coloque sua exchange no ar em 3 semanas.",
      "Contratos inteligentes reduzem erros e intervenção manual.",
      "Preservamos sua margem, sem intermediários, eliminando taxas desnecessárias",
    ],
    highlighted: true,
  },
  {
    id: "engine",
    title: "HastyPay Engine",
    icon: "/img/engine.png",
    description: "Motor de pagamentos PIX + Cripto integrado",
    features: [
      "Processamento automático de transações",
      "Liquidação instantânea",
      "Multi-rede suportada",
    ],
  },
  {
    id: "legal",
    title: "HastyLegal Guide",
    icon: "/img/legal.png",
    description: "Estrutura jurídica completa para Web3",
    features: [
      "Compliance regulatório",
      "Contratos auditáveis",
      "Documentação completa",
    ],
  },
  {
    id: "studio",
    title: "HastyBrand Studio",
    icon: "/img/studio.png",
    description: "Identidade visual e go-to-market",
    features: [
      "Design e branding",
      "Estratégia de mercado",
      "Positioning Web3",
    ],
  },
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<string>("p2p");
  const activeProduct = products.find((p) => p.id === selectedProduct);

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
    <section
      id="produtos"
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-28 overflow-hidden"
      aria-label="Seção de Produtos"
    >
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0d112e] to-[#040a27] -z-10" />

      {/* Efeito de glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#35a7ff]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[#4984c8]/5 rounded-full blur-3xl -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        {/* Título */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Kits sob medida para o seu negócio
          </h2>
          <p className="text-base lg:text-lg text-white/60 max-w-2xl mx-auto">
            Escolha a solução ideal para sua jornada Web3
          </p>
        </motion.div>

        {/* Container principal */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Grade de produtos */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-1 space-y-3"
          >
            {products.map((product) => (
              <motion.button
                key={product.id}
                variants={itemVariants}
                onClick={() => setSelectedProduct(product.id)}
                className={`relative w-full group rounded-2xl p-4 sm:p-5 transition-all duration-300 ${
                  selectedProduct === product.id
                    ? "bg-linear-to-br from-[#0c112f]/80 to-[#1a1f4a]/60 border border-[#35a7ff] shadow-lg shadow-[#35a7ff]/20"
                    : "bg-[#0c112f]/40 border border-white/10 hover:border-[#35a7ff]/40 hover:shadow-lg hover:shadow-[#35a7ff]/10"
                }`}
              >
                {/* Badge destacado */}
                {product.highlighted && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="absolute -top-3 -right-3 bg-white text-[#0a0e27] rounded-full px-3 py-1 text-xs font-bold flex items-center gap-1 shadow-lg"
                  >
                    <Trophy className="w-3 h-3" aria-hidden="true" />O mais
                    escolhido
                  </motion.div>
                )}

                {/* Conteúdo */}
                <div className="flex items-start gap-3">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                    <Image
                      src={product.icon}
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 mt-1">
                      {product.description.substring(0, 40)}...
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Detalhes do produto */}
          {activeProduct && (
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-linear-to-br from-[#0c112f]/50 to-[#0d1138]/50 border border-white/10 rounded-3xl p-8 sm:p-10 lg:p-12 backdrop-blur-sm group hover:border-[#35a7ff]/30 hover:shadow-lg hover:shadow-[#35a7ff]/10 transition-all duration-300"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="relative w-20 h-20 shrink-0">
                  <Image
                    src={activeProduct.icon}
                    alt={activeProduct.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                    {activeProduct.title}
                  </h3>
                  <p className="text-base sm:text-lg text-white/70">
                    {activeProduct.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {activeProduct.features.map((feature, idx) => (
                  <motion.div
                    key={`feature-${activeProduct.id}-${idx}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#35a7ff]/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#35a7ff]" />
                    </div>
                    <p className="text-white/80 text-base sm:text-lg">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-linear-to-r from-[#35a7ff] to-[#4984c8] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-[#35a7ff]/30 transition-all duration-300"
              >
                Começar agora
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Divisor decorativo */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-b from-transparent to-[#0a0e27] pointer-events-none" />
    </section>
  );
}

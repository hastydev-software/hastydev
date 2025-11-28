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
      id="products"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 2xl:py-40 px-3 sm:px-4 md:px-6 lg:px-8 2xl:px-28 overflow-hidden"
      aria-label="Seção de Produtos"
    >
      <div className="absolute inset-0 bg-linear-to-b from-[#0d112e] to-[#040a27] -z-10" />
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-96 lg:h-96 bg-[#35a7ff]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-72 lg:h-72 bg-[#4984c8]/5 rounded-full blur-3xl -z-10" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-12 sm:mb-16 md:mb-18 lg:mb-20 px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
            Kits sob medida para o seu negócio
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/60 max-w-2xl mx-auto">
            Escolha a solução ideal para sua jornada Web3
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-start">
          <motion.div
            variants={containerVariants}
            className="md:col-span-1 space-y-2 sm:space-y-3"
          >
            {products.map((product) => (
              <motion.button
                key={product.id}
                variants={itemVariants}
                onClick={() => setSelectedProduct(product.id)}
                className={`relative w-full group rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 transition-all duration-300 ${
                  selectedProduct === product.id
                    ? "bg-linear-to-br from-[#0c112f]/80 to-[#1a1f4a]/60 border border-[#35a7ff] shadow-lg shadow-[#35a7ff]/20"
                    : "bg-[#0c112f]/40 border border-white/10 hover:border-[#35a7ff]/40 hover:shadow-lg hover:shadow-[#35a7ff]/10"
                }`}
              >
                {product.highlighted && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-white text-[#0a0e27] rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-bold flex items-center gap-0.5 sm:gap-1 shadow-lg"
                  >
                    <Trophy
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                      aria-hidden="true"
                    />
                    O mais escolhido
                  </motion.div>
                )}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0">
                    <Image
                      src={product.icon}
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-left min-w-0">
                    <h3 className="font-bold text-white text-xs sm:text-sm md:text-base line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-xs text-white/60 mt-0.5 sm:mt-1 line-clamp-2">
                      {product.description.substring(0, 40)}...
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
          {activeProduct && (
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-1 lg:col-span-2 bg-linear-to-br from-[#0c112f]/50 to-[#0d1138]/50 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-12 backdrop-blur-sm group hover:border-[#35a7ff]/30 hover:shadow-lg hover:shadow-[#35a7ff]/10 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
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
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-linear-to-r from-[#35a7ff] to-[#4984c8] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-[#35a7ff]/30 transition-all duration-300"
                onClick={() => {
                  const element = document.querySelector("#contato");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Começar agora
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-b from-transparent to-[#0a0e27] pointer-events-none" />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const logos = [
  {
    name: "dseclab",
    alt: "dseclab",
    url: "https://dseclab.io",
  },
  { src: "/img/dig.png", alt: "Dig", url: "#" },
  {
    name: "alfred",
    alt: "Alfred P2P",
    url: "https://alfredp2p.io",
  },
  {
    src: "/img/johngalt.png",
    alt: "John Galt P2P",
    url: "#",
  },
  {
    name: "paguebit",
    alt: "PagueBit",
    url: "https://paguebit.com",
  },
  {
    src: "/img/criptopix.png",
    alt: "CriptoPIX",
    url: "#",
  },
  { src: "/img/defiverso.png", alt: "Defiverso", url: "#" },
  {
    src: "/img/libertario.png",
    alt: "Libertário BTC",
    url: "#",
  },
  {
    src: "/img/templariop2p.png",
    alt: "Templário P2P",
    url: "#",
  },
  { src: "/img/ciphenext.png", alt: "CipheNext", url: "#" },
  { src: "/img/strategy.png", alt: "Strategy", url: "#" },
];

export function Hero() {
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section
      id="main-content"
      className="relative min-h-screen flex items-center justify-start px-3 sm:px-4 md:px-6 lg:px-8 2xl:px-28 pt-16 sm:pt-20 md:pt-24 pb-32 sm:pb-40 overflow-x-hidden"
      aria-label="Seção principal - Hero"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg-hasty.mp4" type="video/mp4" />
          <Image
            src="/img/image.png"
            alt=""
            fill
            className="object-cover"
            priority
            quality={90}
            aria-hidden="true"
          />
        </video>
        <div
          className="absolute inset-0 bg-[rgba(14,15,26,0.5)]"
          aria-hidden="true"
        />
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#35a7ff]/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#4984c8]/10 rounded-full blur-3xl -z-10" />
      </div>

      <div className="relative z-10 w-full max-w-[700px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#35a7ff]/10 border border-[#35a7ff]/30 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#35a7ff]" aria-hidden="true" />
            <span className="text-[#35a7ff] text-xs sm:text-sm font-semibold">
              Transformação Digital Web3
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#35a7ff]" aria-hidden="true" />
            <span className="text-white text-xs sm:text-sm font-medium">
              Setup em 21 dias
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#35a7ff]" aria-hidden="true" />
            <span className="text-white text-xs sm:text-sm font-medium">
              PIX + Cripto Integrado
            </span>
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-white mb-4 sm:mb-6"
        >
          A ponte definitiva entre o sistema financeiro{" "}
          <span className="bg-linear-to-r from-[#35a7ff] via-[#4984c8] to-[#35a7ff] bg-clip-text text-transparent">
            tradicional e o Web3
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg lg:text-lg text-white/80 leading-relaxed mb-6 sm:mb-8 max-w-[600px]"
        >
          Tecnologia, automação e jurídico integrados: construímos sua stack
          Bitcoin, automatizamos processos críticos e providenciamos a estrutura
          jurídica e go-to-market para que você entre rápido e legalmente no
          Web3.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => {
              const element = document.querySelector("#contato");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={cn(
              "group relative inline-flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5",
              "text-white font-semibold text-sm sm:text-base rounded-lg",
              "transition-all duration-300",
              "hover:shadow-lg hover:shadow-[#35a7ff]/40 hover:scale-105",
              "focus:outline-none focus:ring-2 focus:ring-[#35a7ff] focus:ring-offset-2 focus:ring-offset-[#0e1e31]",
              "active:scale-95 overflow-hidden w-full sm:w-auto",
              "border-[0.2px] border-white border-solid"
            )}
            style={{
              background: "linear-gradient(90deg, #0e1e31, #4984c8, #0e1e31)",
            }}
            aria-label="Iniciar transformação digital com a HastyDev"
          >
            <span className="relative z-10 flex items-center justify-center sm:justify-start gap-2 whitespace-nowrap">
              Comece sua transformação
              <ArrowRight
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("#contato");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={cn(
              "inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5",
              "bg-white/10 hover:bg-white/15 text-white",
              "font-semibold text-sm sm:text-base rounded-lg border border-white/20",
              "transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-[#35a7ff] focus:ring-offset-2 focus:ring-offset-[#0e1e31]",
              "active:scale-95 w-full sm:w-auto whitespace-nowrap"
            )}
            aria-label="Falar com um especialista da HastyDev"
          >
            Falar com especialista
          </button>
        </motion.div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden z-20 flex flex-col gap-3 sm:gap-4 bg-linear-to-t from-[rgba(14,30,49,0.95)] to-transparent px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6"
        aria-label="Nossos clientes e parceiros"
      >
        <div className="text-center">
          <p className="text-white/60 text-xs sm:text-sm font-medium">
            Confiado por mais de 50+ empresas no Brasil
          </p>
        </div>
        <div className="relative flex items-center gap-4 sm:gap-6 md:gap-8 whitespace-nowrap overflow-hidden">
          <motion.div
            className="flex items-center gap-4 sm:gap-6 md:gap-8"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.a
                key={`left-${logo.alt}-${index}`}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "shrink-0 block transition-all duration-300",
                  "hover:scale-110 opacity-70 hover:opacity-100",
                  "focus:outline-none focus:ring-2 focus:ring-[#35a7ff] focus:ring-offset-2 focus:ring-offset-transparent rounded"
                )}
                whileHover={{ scale: 1.1 }}
                aria-label={`Visitar ${logo.alt}`}
              >
                <div className="w-24 sm:w-28 md:w-32 h-8 sm:h-10 md:h-12 flex items-center justify-center shrink-0">
                  <Image
                    src={`${
                      logo.name ? `/partners/${logo.name}/logo.svg` : logo.src
                    }`}
                    alt={logo.alt}
                    width={120}
                    height={40}
                    className="max-h-6 sm:max-h-7 md:max-h-8 w-auto object-contain"
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
        <div className="relative flex items-center gap-4 sm:gap-6 md:gap-8 whitespace-nowrap overflow-hidden">
          <motion.div
            className="flex items-center gap-4 sm:gap-6 md:gap-8"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.a
                key={`right-${logo.alt}-${index}`}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "shrink-0 block transition-all duration-300",
                  "hover:scale-110 opacity-70 hover:opacity-100",
                  "focus:outline-none focus:ring-2 focus:ring-[#35a7ff] focus:ring-offset-2 focus:ring-offset-transparent rounded"
                )}
                whileHover={{ scale: 1.1 }}
                aria-label={`Visitar ${logo.alt}`}
              >
                <div className="w-24 sm:w-28 md:w-32 h-8 sm:h-10 md:h-12 flex items-center justify-center shrink-0">
                  <Image
                    src={`${
                      logo.name ? `/partners/${logo.name}/logo.svg` : logo.src
                    }`}
                    alt={logo.alt}
                    width={120}
                    height={40}
                    className="max-h-6 sm:max-h-7 md:max-h-8 w-auto object-contain"
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

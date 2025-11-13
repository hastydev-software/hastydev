"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const logos = [
  { src: "/img/dsc.png", alt: "DSC", url: "#" },
  { src: "/img/dig.png", alt: "Dig", url: "#" },
  { src: "/img/alfredp2p.png", alt: "Alfred P2P", url: "https://alfredp2p.io" },
  {
    src: "/img/johngalt.png",
    alt: "John Galt P2P",
    url: "#",
  },
  { src: "/img/paguebit.png", alt: "PagueBit", url: "https://paguebit.com" },
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
      className="relative min-h-screen flex items-center justify-start px-4 sm:px-6 lg:px-28 overflow-hidden"
      aria-label="Seção principal - Hero"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/image.png"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[rgba(14,15,26,0.301)]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-[700px] pt-20 pb-40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex gap-4 mb-4 text-white text-sm font-medium">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4" aria-hidden="true" />
              Setup em 21 dias
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4" aria-hidden="true" />
              Automação PIX + cripto
            </span>
          </div>

          <h1 className="text-[2.5rem] leading-[1.3] font-bold text-white mb-4">
            A ponte definitiva entre o sistema financeiro tradicional e o
            universo Web3.
          </h1>

          <p className="text-[#aab4cf] text-base leading-[1.7] mb-8 max-w-[600px]">
            Tecnologia, automação e jurídico integrados: construímos sua stack
            Bitcoin, automatizamos processos críticos e providenciamos a
            estrutura jurídica e go-to-market para que você entre rápido e
            legalmente no Web3.
          </p>

          <motion.button
            onClick={() => {
              const element = document.querySelector("#contato");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={cn(
              "inline-flex items-center gap-2 px-7 py-3",
              "bg-linear-to-r from-[#0e1e31] via-[#4984c8] to-[#0e1e31]",
              "bg-size-[200%] bg-left",
              "text-white font-semibold text-base rounded-md",
              "transition-all duration-300",
              "hover:bg-right hover:shadow-[0_0_30px_rgba(53,167,255,0.8)] hover:scale-105",
              "focus:outline-none focus:ring-2 focus:ring-[#35a7ff] focus:ring-offset-2 focus:ring-offset-[#0e1e31]",
              "opacity-90"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Iniciar transformação digital com a HastyDev"
          >
            <span>Comece sua transformação</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </motion.button>
        </motion.div>
      </div>

      <div
        className="absolute bottom-[60px] left-0 w-full overflow-hidden z-20 flex flex-col gap-6"
        aria-label="Nossos clientes e parceiros"
      >
        <div className="relative flex items-center gap-16 whitespace-nowrap">
          <motion.div
            className="flex items-center gap-16"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <a
                key={`left-${logo.alt}-${logo.src}-${index}`}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "shrink-0 block transition-all duration-300",
                  "hover:scale-110 opacity-85 hover:opacity-100",
                  "focus:outline-none focus:ring-2 focus:ring-[#35a7ff] focus:ring-offset-2 focus:ring-offset-transparent rounded"
                )}
                aria-label={`Visitar ${logo.alt}`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </a>
            ))}
          </motion.div>
        </div>
        <div className="relative flex items-center gap-16 whitespace-nowrap">
          <motion.div
            className="flex items-center gap-16"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <a
                key={`right-${logo.alt}-${logo.src}-${index}`}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "shrink-0 block transition-all duration-300",
                  "hover:scale-110 opacity-85 hover:opacity-100",
                  "focus:outline-none focus:ring-2 focus:ring-[#35a7ff] focus:ring-offset-2 focus:ring-offset-transparent rounded"
                )}
                aria-label={`Visitar ${logo.alt}`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

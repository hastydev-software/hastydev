"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Mail, ExternalLink } from "lucide-react";
import { Header } from "@/client/layout/Header/Header";
import { Footer } from "@/client/partials/Footer";

export default function PrivacyPage() {
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
    <>
      <Header />
      <main className="min-h-screen bg-linear-to-b from-[#060a1b] via-[#0e0f17] to-[#0a0c18]">
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#35a7ff]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/2 left-1/3 w-96 h-96 bg-[#4984c8]/5 rounded-full blur-3xl" />
        </div>
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#35a7ff] hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Voltar para Home</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#35a7ff]/10 rounded-lg border border-[#35a7ff]/20">
                  <Shield className="w-6 h-6 text-[#35a7ff]" />
                </div>
                <span className="text-[#35a7ff] font-semibold text-sm uppercase tracking-wider">
                  Política Legal
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Política de{" "}
                <span className="bg-linear-to-r from-[#35a7ff] to-[#4984c8] bg-clip-text text-transparent">
                  Privacidade
                </span>
              </h1>
              <p className="text-white/60 text-lg max-w-2xl">
                Entenda como coletamos, usamos e protegemos seus dados pessoais.
              </p>
              <p className="text-white/50 text-sm">
                Última atualização: 14 de Novembro de 2025
              </p>
            </motion.div>
          </div>
        </motion.section>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12"
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Sua Privacidade é Nossa Prioridade
                </h2>
                <p className="text-white/70 leading-relaxed">
                  A sua privacidade é importante para nós. É política do{" "}
                  <span className="font-semibold text-white">HASTYDEV</span>{" "}
                  respeitar a sua privacidade em relação a qualquer informação
                  sua que possamos coletar no site{" "}
                  <a
                    href="https://hastydev.com.br"
                    className="text-[#35a7ff] hover:text-white transition-colors font-medium"
                    rel="canonical"
                  >
                    HASTYDEV
                  </a>, e outros sites que possuímos e operamos.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Coleta de Informações
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Solicitamos informações pessoais apenas quando realmente
                  precisamos delas para lhe fornecer um serviço. Fazemos-lo por
                  meios justos e legais, com o seu conhecimento e consentimento.
                  Também informamos por que estamos coletando e como será usado.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Armazenamento e Proteção de Dados
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Apenas retemos as informações coletadas pelo tempo necessário
                  para fornecer o serviço solicitado. Quando armazenamos dados,
                  protegemos dentro de meios comercialmente aceitáveis para
                  evitar perdas e roubos, bem como acesso, divulgação, cópia,
                  uso ou modificação não autorizados.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Compartilhamento de Dados
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Não compartilhamos informações de identificação pessoal
                  publicamente ou com terceiros, exceto quando exigido por lei
                  ou para fornecer os serviços solicitados por você.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Links Externos
                </h2>
                <p className="text-white/70 leading-relaxed">
                  O nosso site pode ter links para sites externos que não são
                  operados por nós. Esteja ciente de que não temos controle
                  sobre o conteúdo e práticas desses sites e não podemos aceitar
                  responsabilidade por suas respectivas{" "}
                  <a
                    href="https://politicaprivacidade.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-[#35a7ff] hover:text-white transition-colors font-medium inline-flex items-center gap-1"
                  >
                    políticas de privacidade
                    <ExternalLink className="w-3 h-3" />
                  </a>.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Seus Direitos
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Você é livre para recusar a nossa solicitação de informações
                  pessoais, entendendo que talvez não possamos fornecer alguns
                  dos serviços desejados.
                </p>
                <p className="text-white/70 leading-relaxed">
                  O uso continuado de nosso site será considerado como aceitação
                  de nossas práticas em torno de privacidade e informações
                  pessoais.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Compromisso do Usuário
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  O usuário se compromete a fazer uso adequado dos conteúdos e
                  da informação que o HASTYDEV oferece no site e com caráter
                  enunciativo, mas não limitativo:
                </p>
                <ul className="space-y-3">
                  <li className="text-white/70 leading-relaxed flex gap-3">
                    <span className="text-[#35a7ff] font-bold mt-1">A)</span>
                    <span>
                      Não se envolver em atividades que sejam ilegais ou
                      contrárias à boa fé e à ordem pública;
                    </span>
                  </li>
                  <li className="text-white/70 leading-relaxed flex gap-3">
                    <span className="text-[#35a7ff] font-bold mt-1">B)</span>
                    <span>
                      Não difundir propaganda ou conteúdo de natureza racista,
                      xenofóbica, jogos de sorte ou azar, qualquer tipo de
                      pornografia ilegal, de apologia ao terrorismo ou contra os
                      direitos humanos;
                    </span>
                  </li>
                  <li className="text-white/70 leading-relaxed flex gap-3">
                    <span className="text-[#35a7ff] font-bold mt-1">C)</span>
                    <span>
                      Não causar danos aos sistemas físicos (hardwares) e
                      lógicos (softwares) do HASTYDEV, de seus fornecedores ou
                      terceiros, para introduzir ou disseminar vírus
                      informáticos ou quaisquer outros sistemas de hardware ou
                      software que sejam capazes de causar danos anteriormente
                      mencionados.
                    </span>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Lei Geral de Proteção de Dados (LGPD)
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Estamos em conformidade com a Lei Geral de Proteção de Dados
                  (LGPD). Garantimos que todos os seus dados sejam tratados com
                  segurança e privacidade. Você possui o direito de acessar,
                  corrigir e solicitar a exclusão de seus dados pessoais a
                  qualquer momento.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-linear-to-br from-[#12142a]/50 to-[#1a1c36]/50 border border-[#35a7ff]/20 rounded-2xl p-8 md:p-10 space-y-4"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <Mail className="w-6 h-6 text-[#35a7ff]" />
                  Mais Informações
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Esperamos que esteja esclarecido e, como mencionado
                  anteriormente, se houver algo que você não tem certeza se
                  precisa ou não, geralmente é mais seguro deixar os cookies
                  ativados, caso interaja com um dos recursos que você usa em
                  nosso site.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Se você tiver alguma dúvida sobre como lidamos com dados do
                  usuário e informações pessoais, entre em contato conosco
                  através de:
                </p>
                <a
                  href="mailto:tecnologia@dseclab.io"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#35a7ff]/10 hover:bg-[#35a7ff]/20 border border-[#35a7ff]/30 rounded-lg text-[#35a7ff] font-medium transition-all hover:shadow-lg hover:shadow-[#35a7ff]/20"
                >
                  <Mail className="w-4 h-4" />
                  tecnologia@dseclab.io
                </a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="pt-8 border-t border-white/10 text-center"
              >
                <p className="text-white/50 text-sm">
                  Política efetiva a partir de{" "}
                  <span className="text-white/70 font-medium">
                    14 de Novembro de 2025
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10"
        >
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Tem Dúvidas Sobre Privacidade?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Nossa equipe está pronta para esclarecer qualquer dúvida sobre
              como protegemos seus dados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/#contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-linear-to-r from-[#0e1e31] to-[#4984c8] hover:from-[#1a2a40] hover:to-[#5a94d8] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#35a7ff]/40"
              >
                Entre em Contato
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 hover:border-[#35a7ff]/50 text-white/80 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/5"
              >
                Voltar para Home
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}

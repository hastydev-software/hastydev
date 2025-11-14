"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Scroll, Mail } from "lucide-react";
import { Header } from "@/client/layout/Header/Header";
import { Footer } from "@/client/partials/Footer";

export default function TermsPage() {
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
                  <Scroll className="w-6 h-6 text-[#35a7ff]" />
                </div>
                <span className="text-[#35a7ff] font-semibold text-sm uppercase tracking-wider">
                  Política Legal
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Termos de{" "}
                <span className="bg-linear-to-r from-[#35a7ff] to-[#4984c8] bg-clip-text text-transparent">
                  Serviço
                </span>
              </h1>
              <p className="text-white/60 text-lg max-w-2xl">
                Conheça as condições e termos de uso do site e serviços da
                HastyDev.
              </p>
              <p className="text-white/50 text-sm">
                Última atualização: 14 de Novembro de 2025
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Content Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12"
            >
              {/* Section 1 - Termos */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <span className="text-[#35a7ff] font-bold">1.</span> Termos
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Ao acessar ao site{" "}
                  <a
                    href="https://hastydev.com.br"
                    className="text-[#35a7ff] hover:text-white transition-colors font-medium"
                    rel="canonical"
                  >
                    HASTYDEV
                  </a>, concorda em cumprir estes termos de serviço, todas as leis e
                  regulamentos aplicáveis e concorda que é responsável pelo
                  cumprimento de todas as leis locais aplicáveis. Se você não
                  concordar com algum desses termos, está proibido de usar ou
                  acessar este site. Os materiais contidos neste site são
                  protegidos pelas leis de direitos autorais e marcas comerciais
                  aplicáveis.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <span className="text-[#35a7ff] font-bold">2.</span> Uso de
                  Licença
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  É concedida permissão para baixar temporariamente uma cópia
                  dos materiais (informações ou software) no site HASTYDEV,
                  apenas para visualização transitória pessoal e não comercial.
                  Esta é a concessão de uma licença, não uma transferência de
                  título e, sob esta licença, você não pode:
                </p>
                <ul className="space-y-3">
                  {[
                    { id: "modify", text: "Modificar ou copiar os materiais;" },
                    {
                      id: "commercial",
                      text: "Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);",
                    },
                    {
                      id: "reverse",
                      text: "Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site HASTYDEV;",
                    },
                    {
                      id: "copyright",
                      text: "Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;",
                    },
                    {
                      id: "transfer",
                      text: "Transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.",
                    },
                  ].map((item, idx) => (
                    <li
                      key={item.id}
                      className="text-white/70 leading-relaxed flex gap-3"
                    >
                      <span className="text-[#35a7ff] font-bold mt-1">
                        {String.fromCodePoint(97 + idx)})
                      </span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white/70 leading-relaxed pt-4">
                  Esta licença será automaticamente rescindida se você violar
                  alguma dessas restrições e poderá ser rescindida por HASTYDEV
                  a qualquer momento. Ao encerrar a visualização desses
                  materiais ou após o término desta licença, você deve apagar
                  todos os materiais baixados em sua posse, seja em formato
                  eletrônico ou impresso.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <span className="text-[#35a7ff] font-bold">3.</span> Isenção
                  de Responsabilidade
                </h2>
                <ul className="space-y-4">
                  <li className="text-white/70 leading-relaxed flex gap-3">
                    <span className="text-[#35a7ff] font-bold mt-1">a)</span>
                    <span>
                      Os materiais no site da HASTYDEV são fornecidos &apos;como
                      estão&apos;. HASTYDEV não oferece garantias, expressas ou
                      implícitas, e, por este meio, isenta e nega todas as
                      outras garantias, incluindo, sem limitação, garantias
                      implícitas ou condições de comercialização, adequação a um
                      fim específico ou não violação de propriedade intelectual
                      ou outra violação de direitos.
                    </span>
                  </li>
                  <li className="text-white/70 leading-relaxed flex gap-3">
                    <span className="text-[#35a7ff] font-bold mt-1">b)</span>
                    <span>
                      Além disso, o HASTYDEV não garante ou faz qualquer
                      representação relativa à precisão, aos resultados
                      prováveis ou à confiabilidade do uso dos materiais em seu
                      site ou de outra forma relacionado a esses materiais ou em
                      sites vinculados a este site.
                    </span>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <span className="text-[#35a7ff] font-bold">4.</span>{" "}
                  Limitações
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Em nenhum caso o HASTYDEV ou seus fornecedores serão
                  responsáveis por quaisquer danos (incluindo, sem limitação,
                  danos por perda de dados ou lucro ou devido a interrupção dos
                  negócios) decorrentes do uso ou da incapacidade de usar os
                  materiais em HASTYDEV, mesmo que HASTYDEV ou um representante
                  autorizado da HASTYDEV tenha sido notificado oralmente ou por
                  escrito da possibilidade de tais danos. Como algumas
                  jurisdições não permitem limitações em garantias implícitas,
                  ou limitações de responsabilidade por danos consequentes ou
                  incidentais, essas limitações podem não se aplicar a você.
                </p>
              </motion.div>

              {/* Section 5 - Precisão dos Materiais */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <span className="text-[#35a7ff] font-bold">5.</span> Precisão
                  dos Materiais
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Os materiais exibidos no site da HASTYDEV podem incluir erros
                  técnicos, tipográficos ou fotográficos. HASTYDEV não garante
                  que qualquer material em seu site seja preciso, completo ou
                  atual. HASTYDEV pode fazer alterações nos materiais contidos
                  em seu site a qualquer momento, sem aviso prévio. No entanto,
                  HASTYDEV não se compromete a atualizar os materiais.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <span className="text-[#35a7ff] font-bold">6.</span> Links
                </h2>
                <p className="text-white/70 leading-relaxed">
                  O HASTYDEV não analisou todos os sites vinculados ao seu site
                  e não é responsável pelo conteúdo de nenhum site vinculado. A
                  inclusão de qualquer link não implica endosso por HASTYDEV do
                  site. O uso de qualquer site vinculado é por conta e risco do
                  usuário.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <span className="text-[#35a7ff] font-bold">7.</span>{" "}
                  Modificações
                </h2>
                <p className="text-white/70 leading-relaxed">
                  O HASTYDEV pode revisar estes termos de serviço do site a
                  qualquer momento, sem aviso prévio. Ao usar este site, você
                  concorda em ficar vinculado à versão atual desses termos de
                  serviço.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <span className="text-[#35a7ff] font-bold">8.</span> Lei
                  Aplicável
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Estes termos e condições são regidos e interpretados de acordo
                  com as leis da República Federativa do Brasil, e você se
                  submete irrevogavelmente à jurisdição exclusiva dos tribunais
                  competentes brasileiros.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-linear-to-br from-[#12142a]/50 to-[#1a1c36]/50 border border-[#35a7ff]/20 rounded-2xl p-8 md:p-10 space-y-4"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <Mail className="w-6 h-6 text-[#35a7ff]" />
                  Dúvidas ou Sugestões?
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Se você tiver alguma dúvida sobre estes termos de serviço,
                  entre em contato conosco através de:
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
                  Termos efetivos a partir de{" "}
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
              Tem Dúvidas Sobre Nossos Termos?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Nossa equipe está pronta para esclarecer qualquer questão sobre os
              termos de serviço e condições de uso.
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

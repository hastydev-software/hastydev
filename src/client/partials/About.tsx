export function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-top">
          <div className="about-text">
            <h4>Who we are</h4>
            <h2>
              Mais do que desenvolvedores<br />
              Arquitetos da descentralização.
            </h2>
          </div>

          <div className="about-desc">
            <p>
              A HastyDev é a empresa de inovação focada em criar soluções
              financeiras descentralizadas. Desenvolvemos plataformas Web3
              seguras, automatizadas e 100% alinhadas às normas legais,
              garantindo que cada operação una liberdade e conformidade.
            </p>
            <p>
              Bloco conceitual: Liberdade e segurança não são opostos — são
              complementares. Por isso, cada projeto HastyDev nasce com uma base
              técnica e jurídica sólida.
            </p>
          </div>
        </div>

        <div className="about-bottom">
          <img src="/img/Devs.png" alt="Equipe HastyDev" className="about-image" />

          <div className="about-cta">
            <h3>
              Com a HastyDev,<br />
              você conecta seu negócio ao futuro financeiro global.
            </h3>
            <a href="#" className="btn-primary">Agende uma conversa</a>
          </div>
        </div>
      </div>
    </section>
  );
}

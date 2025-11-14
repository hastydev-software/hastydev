export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/img/Logo.png" alt="HastyDev Logo" className="footer-logo" />
          <p>
            HastyDev entregou rápido: contratos inteligentes (DEPIX) aumentaram
            conversões, eliminaram erros e integraram automação com performance.
          </p>

          <ul className="footer-links">
            <li>
              <a href="#solucoes">Soluções</a>
            </li>
            <li>
              <a href="#plataforma">Plataforma</a>
            </li>
            <li>
              <a href="#sobre">Sobre nós</a>
            </li>
          </ul>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-right">
          <h4>Nossos Produtos</h4>
          <ul>
            <li>
              <a href="#">HastyPay Engine</a>
            </li>
            <li>
              <a href="#">HastyP2P Core</a>
            </li>
            <li>
              <a href="#">HastyLegal Guide</a>
            </li>
            <li>
              <a href="#">HastyBrand Studio</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} HastyDev. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LADO ESQUERDO */}
        <div className="contact-left">
          <img src="/img/Logo.png" alt="HastyDev" className="contact-logo" />
          <h2>
            Entre em <br />
            <span>contato</span>
          </h2>
          <p>
            Use nossa stack pronta e foque em crescimento,
            <br />
            <strong>nós cuidamos do resto.</strong>
          </p>

          <div className="contact-socials">
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* LADO DIREITO - FORMULÁRIO */}
        <div className="contact-form">
          <h3>Agende uma consultoria grátis</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="empresa"
                placeholder="Empresa"
                value={formData.empresa}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="mensagem"
              placeholder="Mensagem"
              rows={4}
              value={formData.mensagem}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="btn-primary">
              Agendar demo
            </button>

            <div className="form-tags">
              <span>✓ Setup em 21 dias</span>
              <span>✓ Sem dev interno</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

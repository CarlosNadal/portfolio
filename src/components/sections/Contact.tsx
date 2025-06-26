import React, { useState } from 'react';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [timestamp, setTimestamp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake delay de envío (acá podrías llamar a una API real)
    setTimeout(() => {
      const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
      setTimestamp(now);
      setSent(true);
    }, 500);
  };

  return (
    <section id="contact" className="section bg-[var(--color-secondary)]">
      <div className="container mx-auto">
        {/* Línea tipo terminal */}
        <p className="terminal-text text-sm mb-4">
          $ send-message --to="carlos.nadal" --subject="te quiero en mi equipo"
        </p>

        {/* Título */}
        <h2 className="text-center mb-12 text-[var(--color-accent-primary)] font-space-mono text-3xl md:text-4xl">
          Contacto
        </h2>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-[var(--color-tertiary)] p-8 rounded-lg shadow-glow fade-in-up space-y-6 border border-[var(--color-accent-primary)]"
          style={{ animationDelay: '0.3s' }}
        >
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-sm mb-2 text-[var(--color-text-secondary)] font-fira-code">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-[var(--color-background)] text-[var(--color-text-primary)] border border-[var(--color-tertiary)] rounded-md px-4 py-2 font-fira-code focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]"
              placeholder="ej: Neo Anderson"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm mb-2 text-[var(--color-text-secondary)] font-fira-code">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-[var(--color-background)] text-[var(--color-text-primary)] border border-[var(--color-tertiary)] rounded-md px-4 py-2 font-fira-code focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]"
              placeholder="ej: trinity@matrix.org"
              required
            />
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="block text-sm mb-2 text-[var(--color-text-secondary)] font-fira-code">
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full bg-[var(--color-background)] text-[var(--color-text-primary)] border border-[var(--color-tertiary)] rounded-md px-4 py-2 font-fira-code focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]"
              placeholder="Hola Carlos, quiero proponerte un proyecto..."
              required
            />
          </div>

          {/* Botón */}
          <div className="text-center">
            <button type="submit" className="btn-primary font-fira-code">
              &gt; enviar_mensaje
            </button>
          </div>

          {/* Respuesta estilo consola */}
          {sent && (
            <p className="terminal-text text-sm mt-6 text-center animate-pulse">
              ✅ Mensaje enviado con éxito [{timestamp}]
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

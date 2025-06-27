import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: 'application/json' },
    })
      .then(() => {
        setSubmitted(true);
        form.reset();

        setTimeout(() => {
          setSubmitted(false);
        }, 3500);
      })
      .catch(() => {
        alert('Hubo un error enviando el mensaje.');
      });
  };

  return (
    <section id="contact" className="section bg-secondary">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-center mb-12">Contacto</h2>

        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/carlitosnadalfiuri05@gmail.com"
          method="POST"
          className="bg-tertiary p-6 rounded-lg shadow-glow font-fira-code text-[var(--color-accent-primary)] text-sm md:text-base"
        >
          <p className="mb-4 terminal-text">$ contact --name:</p>
          <input
            type="text"
            name="name"
            required
            placeholder="> Carlos Nadal"
            className="w-full bg-transparent border-b border-[var(--color-accent-primary)] mb-6 px-2 py-1 outline-none placeholder-[var(--color-text-secondary)]"
          />

          <p className="mb-4 terminal-text">$ contact --email:</p>
          <input
            type="email"
            name="email"
            required
            placeholder="> carlos@email.com"
            className="w-full bg-transparent border-b border-[var(--color-accent-primary)] mb-6 px-2 py-1 outline-none placeholder-[var(--color-text-secondary)]"
          />

          <p className="mb-4 terminal-text">$ contact --message:</p>
          <textarea
            name="message"
            required
            rows="5"
            placeholder="> Escribí tu mensaje acá..."
            className="w-full bg-transparent border border-[var(--color-accent-primary)] px-2 py-1 outline-none placeholder-[var(--color-text-secondary)] rounded"
          ></textarea>

          <button
            type="submit"
            className="btn-primary glitch mt-6 block ml-auto font-fira-code relative overflow-hidden"
          >
            Enviar Mensaje
          </button>

          {submitted && (
            <p className="mt-4 text-accent-primary animate-fadeOut">
              &gt;&gt; Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

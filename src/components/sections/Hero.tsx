import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Fondo estilo Matrix */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="matrix-background"></div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          {/* Prompt terminal */}
          <p className="terminal-text text-sm mb-2">
            user@carlos-portfolio:~$
          </p>

          {/* Nombre animado */}
          <h1 className="mb-2">
            <span className="typing-effect text-4xl md:text-5xl text-[var(--color-accent-primary)] font-space-mono">
              Carlos Nadal
            </span>
          </h1>

          {/* Subtítulo */}
          <h2 className="text-2xl md:text-3xl mb-6 font-space-mono text-[var(--color-accent-secondary)] animate-pulse">
            Analista de Ciberseguridad
          </h2>

          {/* Descripción */}
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-[var(--color-text-secondary)]">
            Recién graduado con especialización en ciberseguridad, apasionado por la protección de sistemas y la detección de amenazas. Dispuesto a colaborar y ganar experiencia en el campo.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">Ver Proyectos</a>
            <a href="#contact" className="btn-secondary">Contactar</a>
          </div>
        </div>
      </div>

      {/* Footer decorativo estilo consola */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <div className="inline-block">
          <div className="terminal-text text-sm animate-pulse">
            $ scroll_down --para-descubrir-más
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Fondo con efecto de matriz */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="matrix-background"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-text-primary mb-2">
            <span className="typing-effect">Carlos Nadal</span>
          </h1>
          <h2 className="text-accent-secondary text-2xl md:text-3xl mb-6 font-space-mono">
            Analista de Ciberseguridad
          </h2>
          <p className="text-text-secondary text-lg md:text-xl mb-8 max-w-2xl">
            Recién graduado con especialización en ciberseguridad, apasionado por la protección de sistemas y la detección de amenazas. Dispuesto a colaborar y ganar experiencia en el campo.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">Ver Proyectos</a>
            <a href="#contact" className="btn-secondary">Contactar</a>
          </div>
        </div>
      </div>
      
      {/* Decoración de terminal */}
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

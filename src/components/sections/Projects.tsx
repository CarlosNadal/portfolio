import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section bg-[var(--color-secondary)]">
      <div className="container mx-auto">

        {/* Terminal fake prompt */}
        <p className="terminal-text text-sm mb-4">
          $ cat projects.log | grep "threat-level:high"
        </p>

        {/* Título principal */}
        <h2 className="text-center mb-12 text-[var(--color-accent-primary)] font-space-mono text-3xl md:text-4xl">
          Proyectos
        </h2>

        {/* Card principal */}
        <div className="card shadow-glow border border-[var(--color-accent-primary)] fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Descripción */}
            <div>
              <h3 className="mb-4 text-[var(--color-accent-secondary)] font-space-mono text-2xl">
                Sistema de Detección de Amenazas por Correo Electrónico
              </h3>
              <p className="mb-4 text-[var(--color-text-secondary)]">
                Desarrollé un sistema integral para la detección y análisis de amenazas transmitidas a través de correo electrónico, uno de los vectores de ataque más comunes en la actualidad.
              </p>
              <p className="mb-4 text-[var(--color-text-secondary)]">
                Incluye análisis de remitentes, escaneo de enlaces y archivos adjuntos, y detección de phishing con machine learning. Proporciona protección sin interrumpir el flujo normal del usuario.
              </p>
              <p className="mb-4 text-[var(--color-text-secondary)]">
                Un panel de control con visualizaciones permite detectar rápidamente patrones de ataque y tomar decisiones informadas.
              </p>

              {/* Tecnologías */}
              <div className="mt-6">
                <h4 className="text-[var(--color-accent-secondary)] font-space-mono mb-2">
                  Tecnologías Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Machine Learning', 'API REST', 'Análisis de Datos', 'Seguridad de Correo'].map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[var(--color-tertiary)] text-[var(--color-text-primary)] px-3 py-1 rounded-full text-sm hover:shadow-md hover:shadow-[var(--color-accent-primary)] transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Detalles funcionales */}
            <div className="flex flex-col justify-between">
              <div className="bg-[var(--color-tertiary)] p-6 rounded-lg mb-6 fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h4 className="text-[var(--color-accent-secondary)] font-space-mono mb-4">Características Principales</h4>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  {[
                    'Análisis en tiempo real de correos entrantes',
                    'Detección avanzada de phishing y suplantación',
                    'Escaneo de archivos adjuntos y enlaces maliciosos',
                    'Panel de control con métricas y visualizaciones',
                    'Sistema de alertas y notificaciones configurables',
                    'Integración con plataformas de correo populares'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[var(--color-accent-primary)] mr-2">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[var(--color-tertiary)] p-6 rounded-lg fade-in-up" style={{ animationDelay: '0.6s' }}>
                <h4 className="text-[var(--color-accent-secondary)] font-space-mono mb-4">Resultados y Aprendizajes</h4>
                <p className="text-[var(--color-text-secondary)]">
                  Apliqué conocimientos de seguridad en un contexto real, desarrollando habilidades en programación segura, análisis de amenazas y diseño de soluciones robustas para correo electrónico.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer con CTA */}
        <div className="mt-12 text-center fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-[var(--color-text-secondary)] mb-6">
            Actualmente estoy desarrollando nuevos proyectos para ampliar mi portafolio en el campo de la ciberseguridad.
          </p>
          <a href="#contact" className="btn-secondary">Colaboremos en un proyecto</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

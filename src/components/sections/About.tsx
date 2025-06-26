import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-[var(--color-secondary)]">
      <div className="container mx-auto">

        {/* Línea tipo terminal */}
        <p className="terminal-text text-sm mb-4">
          $ whoami && cat about.md
        </p>

        {/* Título principal */}
        <h2 className="text-center mb-12 text-[var(--color-accent-primary)] font-space-mono text-3xl md:text-4xl">
          Sobre Mí
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda */}
          <div className="card shadow-glow fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="mb-4 text-[var(--color-accent-secondary)] font-space-mono text-2xl">
              Perfil Profesional
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              Soy Carlos Nadal, un analista de ciberseguridad recién graduado con una sólida formación en la detección y mitigación de amenazas digitales. Mi especialización en Holberton School me ha proporcionado una base técnica robusta y un enfoque práctico para abordar los desafíos de seguridad en el entorno digital actual.
            </p>
            <p className="text-[var(--color-text-secondary)] mt-4">
              Como profesional emergente en el campo de la ciberseguridad, combino conocimientos técnicos con una mentalidad analítica y curiosa. Mi objetivo es contribuir activamente a la protección de infraestructuras digitales y datos sensibles, aplicando las mejores prácticas y manteniéndome actualizado sobre las últimas tendencias y amenazas.
            </p>
            <p className="text-[var(--color-text-secondary)] mt-4">
              Estoy especialmente interesado en el análisis de amenazas, la seguridad de redes y la respuesta a incidentes. Mi proyecto de sistema de detección de amenazas por correo electrónico demuestra mi capacidad para desarrollar soluciones prácticas ante problemas de seguridad comunes.
            </p>
          </div>

          {/* Columna derecha */}
          <div>
            <div className="card mb-6 fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="mb-4 text-[var(--color-accent-secondary)] font-space-mono text-2xl">
                Disposición Profesional
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Como recién graduado, estoy altamente motivado para colaborar en proyectos desafiantes que me permitan aplicar mis conocimientos y desarrollar nuevas habilidades. Tengo plena disposición para integrarme en equipos de trabajo, contribuir con ideas frescas y aprender de profesionales experimentados en el sector.
              </p>
              <p className="text-[var(--color-text-secondary)] mt-4">
                Mi compromiso con el aprendizaje continuo y mi adaptabilidad me permiten enfrentar nuevos retos con entusiasmo. Estoy dispuesto a asumir responsabilidades crecientes y a demostrar mi valor como profesional de la ciberseguridad.
              </p>
            </div>

            <div className="card bg-[var(--color-tertiary)] border border-[var(--color-accent-primary)] shadow-glow fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-start">
                <div className="text-[var(--color-accent-primary)] mr-3 mt-1 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                  </svg>
                </div>
                <p className="terminal-text text-sm">
                  $ Disponible para colaborar en proyectos y oportunidades que me permitan ganar experiencia profesional en el campo de la ciberseguridad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

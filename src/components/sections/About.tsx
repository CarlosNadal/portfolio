import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">Sobre Mí</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="card shadow-glow">
            <h3 className="mb-4">Perfil Profesional</h3>
            <p>
              Soy Carlos Nadal, un analista de ciberseguridad recién graduado con una sólida formación en la detección y mitigación de amenazas digitales. Mi especialización en Holberton School me ha proporcionado una base técnica robusta y un enfoque práctico para abordar los desafíos de seguridad en el entorno digital actual.
            </p>
            <p>
              Como profesional emergente en el campo de la ciberseguridad, combino conocimientos técnicos con una mentalidad analítica y curiosa. Mi objetivo es contribuir activamente a la protección de infraestructuras digitales y datos sensibles, aplicando las mejores prácticas y manteniéndome actualizado sobre las últimas tendencias y amenazas.
            </p>
            <p>
              Estoy especialmente interesado en el análisis de amenazas, la seguridad de redes y la respuesta a incidentes. Mi proyecto de sistema de detección de amenazas por correo electrónico demuestra mi capacidad para desarrollar soluciones prácticas ante problemas de seguridad comunes.
            </p>
          </div>
          
          <div>
            <div className="card mb-6">
              <h3 className="mb-4">Disposición Profesional</h3>
              <p>
                Como recién graduado, estoy altamente motivado para colaborar en proyectos desafiantes que me permitan aplicar mis conocimientos y desarrollar nuevas habilidades. Tengo plena disposición para integrarme en equipos de trabajo, contribuir con ideas frescas y aprender de profesionales experimentados en el sector.
              </p>
              <p>
                Mi compromiso con el aprendizaje continuo y mi adaptabilidad me permiten enfrentar nuevos retos con entusiasmo. Estoy dispuesto a asumir responsabilidades crecientes y a demostrar mi valor como profesional de la ciberseguridad.
              </p>
            </div>
            
            <div className="card bg-tertiary border-accent-primary border">
              <div className="flex items-start">
                <div className="text-accent-primary mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                  </svg>
                </div>
                <p className="terminal-text text-sm">
                  Disponible para colaborar en proyectos y oportunidades que me permitan ganar experiencia profesional en el campo de la ciberseguridad.
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

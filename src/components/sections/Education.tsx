import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">Formación Académica</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="card mb-8 shadow-glow">
            <div className="flex flex-col md:flex-row md:items-center mb-4">
              <h3 className="text-accent-primary mb-2 md:mb-0 md:mr-4">Especialización en Ciberseguridad</h3>
              <div className="bg-tertiary px-4 py-1 rounded-full text-sm inline-block">
                Holberton School
              </div>
            </div>
            
            <p className="mb-4">
              Completé una rigurosa especialización en Ciberseguridad en Holberton School, donde adquirí conocimientos avanzados y habilidades prácticas en diversos aspectos de la seguridad informática. El programa se centró en un enfoque práctico, permitiéndome desarrollar competencias técnicas aplicables directamente en entornos profesionales.
            </p>
            
            <p className="mb-4">
              Durante mi formación, trabajé en proyectos reales que simulaban escenarios de seguridad del mundo real, incluyendo la identificación y mitigación de vulnerabilidades, implementación de controles de seguridad, y desarrollo de estrategias de protección para sistemas y redes.
            </p>
            
            <p>
              La metodología basada en proyectos de Holberton School me permitió no solo adquirir conocimientos teóricos sólidos, sino también desarrollar habilidades prácticas esenciales para un analista de ciberseguridad, como el pensamiento crítico, la resolución de problemas complejos y la capacidad de adaptación a un panorama de amenazas en constante evolución.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-tertiary">
              <h4 className="text-accent-secondary mb-4">Áreas de Estudio</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-accent-primary mr-2">→</span>
                  <span>Seguridad de redes y sistemas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-primary mr-2">→</span>
                  <span>Análisis de vulnerabilidades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-primary mr-2">→</span>
                  <span>Respuesta a incidentes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-primary mr-2">→</span>
                  <span>Criptografía aplicada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-primary mr-2">→</span>
                  <span>Seguridad en aplicaciones web</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-primary mr-2">→</span>
                  <span>Análisis forense digital</span>
                </li>
              </ul>
            </div>
            
            <div className="card bg-tertiary">
              <h4 className="text-accent-secondary mb-4">Competencias Desarrolladas</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-accent-primary mr-2">→</span>
                  <span>Evaluación de riesgos de seguridad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-primary mr-2">→</span>
                  <span>Implementación de controles de seguridad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-primary mr-2">→</span>
                  <span>Monitoreo y detección de amenazas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-primary mr-2">→</span>
                  <span>Análisis de malware</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-primary mr-2">→</span>
                  <span>Desarrollo de políticas de seguridad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-primary mr-2">→</span>
                  <span>Pruebas de penetración básicas</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-text-secondary italic">
              "La educación en ciberseguridad es un viaje continuo. Me mantengo constantemente actualizado sobre las últimas amenazas y tecnologías de protección."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">Proyectos</h2>
        
        <div className="card shadow-glow border border-accent-primary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4">Sistema de Detección de Amenazas por Correo Electrónico</h3>
              <p className="mb-4">
                Desarrollé un sistema integral para la detección y análisis de amenazas transmitidas a través de correo electrónico, uno de los vectores de ataque más comunes en la actualidad. Este proyecto aborda la necesidad crítica de proteger a las organizaciones contra phishing, malware y otras amenazas que llegan a través de la bandeja de entrada.
              </p>
              <p className="mb-4">
                El sistema implementa múltiples capas de análisis, incluyendo verificación de remitentes, escaneo de enlaces y archivos adjuntos, y detección de patrones de phishing mediante técnicas de aprendizaje automático. La solución está diseñada para integrarse con los sistemas de correo existentes, proporcionando protección en tiempo real sin interrumpir el flujo de trabajo de los usuarios.
              </p>
              <p className="mb-4">
                Una característica destacada es el panel de control que proporciona visualizaciones claras de las amenazas detectadas, permitiendo a los administradores de seguridad identificar rápidamente patrones y tendencias en los ataques dirigidos a la organización.
              </p>
              
              <div className="mt-6">
                <h4 className="text-accent-secondary mb-2">Tecnologías Utilizadas</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-tertiary px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-tertiary px-3 py-1 rounded-full text-sm">Machine Learning</span>
                  <span className="bg-tertiary px-3 py-1 rounded-full text-sm">API REST</span>
                  <span className="bg-tertiary px-3 py-1 rounded-full text-sm">Análisis de Datos</span>
                  <span className="bg-tertiary px-3 py-1 rounded-full text-sm">Seguridad de Correo</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-between">
              <div className="bg-tertiary p-6 rounded-lg mb-6">
                <h4 className="text-accent-secondary mb-4">Características Principales</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-primary mr-2">→</span>
                    <span>Análisis en tiempo real de correos entrantes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-primary mr-2">→</span>
                    <span>Detección avanzada de phishing y suplantación de identidad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-primary mr-2">→</span>
                    <span>Escaneo de archivos adjuntos y enlaces maliciosos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-primary mr-2">→</span>
                    <span>Panel de control con métricas y visualizaciones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-primary mr-2">→</span>
                    <span>Sistema de alertas y notificaciones configurables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-primary mr-2">→</span>
                    <span>Integración con plataformas de correo populares</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-tertiary p-6 rounded-lg">
                <h4 className="text-accent-secondary mb-4">Resultados y Aprendizajes</h4>
                <p>
                  Este proyecto me permitió aplicar conocimientos de seguridad informática en un contexto práctico, desarrollando habilidades en análisis de amenazas, programación segura y diseño de sistemas de protección. La experiencia reforzó mi comprensión de los vectores de ataque comunes y las estrategias efectivas para mitigarlos.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-6">
            Actualmente estoy desarrollando nuevos proyectos para ampliar mi portafolio en el campo de la ciberseguridad.
          </p>
          <a href="#contact" className="btn-secondary">Colaboremos en un proyecto</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

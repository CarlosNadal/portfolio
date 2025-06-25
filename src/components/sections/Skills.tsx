import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Análisis de Seguridad",
      skills: [
        { name: "Análisis de Vulnerabilidades", level: 80 },
        { name: "Detección de Amenazas", level: 85 },
        { name: "Análisis de Malware", level: 75 },
        { name: "Monitoreo de Seguridad", level: 80 }
      ]
    },
    {
      title: "Herramientas y Tecnologías",
      skills: [
        { name: "Sistemas SIEM", level: 70 },
        { name: "Firewalls y IDS/IPS", level: 75 },
        { name: "Análisis Forense Digital", level: 65 },
        { name: "Seguridad de Redes", level: 80 }
      ]
    },
    {
      title: "Desarrollo Seguro",
      skills: [
        { name: "Programación Segura", level: 75 },
        { name: "Pruebas de Penetración", level: 70 },
        { name: "Automatización de Seguridad", level: 65 },
        { name: "DevSecOps", level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">Habilidades Técnicas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="mb-6 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-text-primary">{skill.name}</span>
                      <span className="text-accent-secondary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-tertiary rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-accent-primary to-accent-secondary h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="card">
            <h3 className="mb-6 text-center">Enfoque Profesional</h3>
            <p className="mb-4">
              Como analista de ciberseguridad, mi enfoque se centra en la identificación proactiva de amenazas y vulnerabilidades antes de que puedan ser explotadas. Mi formación me ha preparado para analizar sistemas desde múltiples perspectivas, implementar controles de seguridad efectivos y responder rápidamente ante incidentes.
            </p>
            <p>
              Complemento mis habilidades técnicas con una sólida comprensión de los principios fundamentales de la seguridad de la información, incluyendo confidencialidad, integridad y disponibilidad. Esto me permite abordar los desafíos de seguridad de manera holística, considerando tanto los aspectos técnicos como los factores humanos y organizacionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

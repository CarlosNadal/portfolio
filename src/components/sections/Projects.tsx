import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section bg-[var(--color-secondary)] py-16">
      <div className="container mx-auto px-4">
        
        <h2 className="text-center mb-16 text-[var(--color-accent-primary)] font-space-mono text-3xl md:text-4xl">
          Security Projects
        </h2>

        {/* Main Project Card */}
        <div className="card shadow-glow border border-[var(--color-accent-primary)] fade-in-up p-0 overflow-hidden" style={{ animationDelay: '0.2s' }}>
          {/* Project Header */}
          <div className="p-4 border-b border-[var(--color-accent-primary)]">
            <h3 className="text-xl md:text-2xl font-space-mono text-white">
              <span className="text-[var(--color-accent-primary)]">#</span> Email Threat Detection System
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Left Column - Project Details */}
            <div>
              {/* YouTube Demo Embed */}
              <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src="https://www.youtube.com/embed/t2KK66jL3C8" 
                    title="Email Threat Detection System Demo"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-64 md:h-80"
                  ></iframe>
                </div>
                <div className="bg-[var(--color-tertiary)] p-3 text-center">
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Live system demonstration showing real-time threat detection
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-[var(--color-accent-secondary)] font-space-mono mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Key Features Shown in Demo
                </h4>
                <ul className="space-y-2 text-[var(--color-text-secondary)] pl-5">
                  {[
                    'Real-time email scanning and analysis',
                    'Phishing attempt detection workflow',
                    'Attachment malware scanning process',
                    'Dashboard with threat visualization',
                    'Alert system demonstration'
                  ].map((item, i) => (
                    <li key={i} className="relative before:absolute before:left-[-1rem] before:content-['→'] before:text-[var(--color-accent-primary)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Technical Details */}
            <div>
              <div className="bg-[var(--color-tertiary)] p-6 rounded-lg mb-6">
                <h4 className="text-[var(--color-accent-secondary)] font-space-mono mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Technical Highlights
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'SMTP', value: 'Postfix' },
                    { name: 'Malware Scanner', value: 'Python + YARA' },
                    { name: 'Event Correlation', value: 'Sigma' },
                    { name: 'Log Visualization', value: 'Grafana' },
                    { name: 'Log Aggregation', value: 'Loki + Promtail' },
                    { name: 'Deployent', value: 'Docker' }
                  ].map((item, i) => (
                    <div key={i} className="bg-[var(--color-secondary)] p-3 rounded border border-[var(--color-accent-primary)]">
                      <div className="text-xs text-[var(--color-accent-primary)]">{item.name}</div>
                      <div className="text-sm font-medium text-[var(--color-text-primary)]">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[var(--color-accent-secondary)] font-space-mono flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Project Insights
                </h4>
                <p className="text-[var(--color-text-secondary)]">
                  The demo showcases my ability to develop end-to-end security solutions, from threat analysis algorithms to user-friendly interfaces for security operators.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <a 
                    href="https://github.com/CarlosNadal/holbertonshcool-cybersecurity-final-proyect" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center flex-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Source Code
                  </a>
                  <a 
                    href="https://www.youtube.com/watch?v=gepN2sP5g7k&t=2111s" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center justify-center flex-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Watch Full Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Projects CTA */}
        <div className="mt-16 text-center">
          <p className="text-[var(--color-text-secondary)] mb-6">
            Want to see more security demonstrations or discuss implementation details?
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
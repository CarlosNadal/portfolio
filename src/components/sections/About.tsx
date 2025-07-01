import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-[var(--color-secondary)] py-16">
      <div className="container mx-auto px-4">

        {/* Main Title */}
        <h2 className="text-center mb-16 text-[var(--color-accent-primary)] font-space-mono text-3xl md:text-4xl">
          About me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Profile */}
          <div className="card shadow-glow fade-in-up p-6 rounded-lg bg-[var(--color-tertiary)]" style={{ animationDelay: '0.2s' }}>
            <h3 className="mb-4 text-[var(--color-accent-primary)] font-space-mono text-2xl flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Cybersecurity Profile
            </h3>
            
            <div className="space-y-4">
              <p className="text-[var(--color-text-secondary)]">
                <span className="font-semibold text-[var(--color-accent-secondary)]">Holberton School Cybersecurity Analyst</span> with hands-on experience in threat analysis, network security, and incident response with expertise in:
              </p>
              
              <ul className="grid grid-cols-2 gap-2 mt-4">
                <li className="flex items-center">
                  <span className="text-[var(--color-accent-primary)] mr-2">▹</span>
                  SIEM Tools 
                </li>
                <li className="flex items-center">
                  <span className="text-[var(--color-accent-primary)] mr-2">▹</span>
                  Penetration Testing
                </li>
                <li className="flex items-center">
                  <span className="text-[var(--color-accent-primary)] mr-2">▹</span>
                  OWASP Top 10
                </li>
                <li className="flex items-center">
                  <span className="text-[var(--color-accent-primary)] mr-2">▹</span>
                  Malware Analysis
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="text-[var(--color-accent-secondary)] font-space-mono mb-2">Featured Project:</h4>
                <p className="text-[var(--color-text-secondary)]">
                  Developed a <span className="text-[var(--color-accent-primary)]">custom email threat detection system</span> that reduced false positives by 30% using Python and machine learning algorithms.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Professional Approach */}
            <div className="card fade-in-up p-6 rounded-lg bg-[var(--color-tertiary)]" style={{ animationDelay: '0.4s' }}>
              <h3 className="mb-4 text-[var(--color-accent-primary)] font-space-mono text-2xl flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Professional Approach
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-[var(--color-accent-primary)] mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[var(--color-text-secondary)]">
                    <span className="font-semibold">Challenge-driven:</span> Thrive in solving real security problems through projects like my email threat detection system.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[var(--color-accent-primary)] mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[var(--color-text-secondary)]">
                    <span className="font-semibold">Continuous learner:</span> Committed to upskilling through CTFs, certifications(studying for OSCP), and peer learning.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[var(--color-accent-primary)] mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[var(--color-text-secondary)]">
                    <span className="font-semibold">Team-oriented:</span> Proven ability to collaborate in technical teams during Holberton's SOC simulation projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="card bg-[var(--color-tertiary)] border border-[var(--color-accent-primary)] shadow-glow fade-in-up p-4 rounded-lg" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-start">
                <div className="text-[var(--color-accent-primary)] mr-3 mt-1 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="terminal-text text-[var(--color-text-secondary)] font-mono">
                    $ Currently available for:<br/>
                    <span className="text-[var(--color-accent-primary)]">→</span> Cybersecurity internships<br/>
                    <span className="text-[var(--color-accent-primary)]">→</span> Junior SOC analyst roles<br/>
                    <span className="text-[var(--color-accent-primary)]">→</span> Collaborative security projects
                    <span className="text-[var(--color-accent-primary)]">→</span> Junior Pentesting

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
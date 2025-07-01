import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section bg-[var(--color-secondary)] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16 text-[var(--color-accent-primary)] font-space-mono text-3xl md:text-4xl">
          Cybersecurity Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Education Card */}
          <div className="card shadow-glow border border-[var(--color-accent-primary)] p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4 text-[var(--color-accent-primary)]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-space-mono text-[var(--color-accent-secondary)]">
                  Cybersecurity Specialization
                </h3>
              </div>
              <div className="mt-4 md:mt-0 bg-[var(--color-tertiary)] px-4 py-2 rounded-full text-sm font-medium">
                Holberton School
              </div>
            </div>
            
            <div className="flex items-center text-sm text-[var(--color-text-secondary)] mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Completed: June 2023 | 800+ Hours | Project-Based Learning
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-[var(--color-accent-secondary)] mb-3">Key Achievements:</h4>
              <ul className="space-y-3 text-[var(--color-text-secondary)]">
                {[
                  'Developed email threat detection system with 90.2% phishing detection accuracy',
                  'Conducted 50+ vulnerability assessments using Nmap, Burp Suite, and Metasploit',
                  'Analyzed 30+ malware samples using Ghidra and REMnux',
                  'Completed 20+ CTF challenges in network security and web exploitation'
                ].map((item, i) => (
                  <li key={i} className="flex">
                    <span className="text-[var(--color-accent-primary)] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-[var(--color-accent-secondary)] mb-3">Program Highlights:</h4>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Intensive project-based curriculum covering offensive and defensive security techniques. Gained hands-on experience through:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--color-text-secondary)]">
                {[
                  'SOC simulation environments',
                  'Red team/blue team exercises',
                  'Digital forensics investigations',
                  'Secure coding challenges',
                  'Threat intelligence analysis'
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-[var(--color-accent-primary)] mr-2">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Continuous Learning */}
          <div className="card bg-gradient-to-r from-[var(--color-accent-primary)]/10 to-[var(--color-accent-secondary)]/10 p-6 border border-[var(--color-accent-primary)]">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[var(--color-accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-space-mono text-[var(--color-accent-secondary)] mb-2">Continuous Learning</h4>
                <p className="text-[var(--color-text-secondary)]">
                  Currently investing 20+ hours weekly in professional development through:
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  {['Hack The Box', 'TryHackMe', 'Security+ Prep', 'Cloud Security', 'CTF Challenges'].map((item, i) => (
                    <span key={i} className="bg-[var(--color-tertiary)] text-[var(--color-text-primary)] px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
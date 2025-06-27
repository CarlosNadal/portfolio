import React from 'react';
import LiveLogs from './LiveLogs';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Fondo con efecto matrix */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="matrix-background" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
          {/* Columna izquierda */}
          <div className="max-w-xl">
            <h1 className="text-text-primary mb-2">
              <span className="typing-effect">Carlos Nadal</span>
            </h1>
            <h2 className="text-accent-secondary text-2xl md:text-3xl mb-6 font-space-mono">
              Cybersecurity Analyst
            </h2>
            <p className="text-text-secondary text-lg md:text-xl mb-8 max-w-2xl">
              I scan threats so you don't have to. Defender of inboxes, breaker of phishing chains. Let's make the internet safer.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-secondary">Contact</a>
            </div>
          </div>

          {/* Columna derecha - LiveLogs */}
          <div className="relative md:static flex justify-center md:block">
            <LiveLogs />
          </div>
        </div>
      </div>

      {/* Prompt de scroll */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <div className="inline-block">
          <div className="terminal-text text-sm animate-pulse">
            $ scroll_down --to-discover-more
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
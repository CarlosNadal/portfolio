import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react';

type CommandOutput = string[];

const commands: Record<string, CommandOutput> = {
  help: [
    'Available commands:',
    '- help → list available commands',
    '- projects → list highlighted projects',
    '- about → show professional profile',
    '- contact → scroll to contact section',
    '- origin → show personal story',
    '- clear → clear the console',
  ],
  projects: [ 
    '🛠 Project: Email Threat Detection System',
    '🔗 GitHub: https://github.com/CarlosNadal/holbertonshcool-cybersecurity-final-proyect',
  ],
  about: [
    '🙋‍♂️ Carlos Nadal - Cybersecurity Analyst',
    '💡 Recently graduated, specialized in threat detection and infrastructure protection.',
  ],
  contact: ['📬 Redirecting to contact section...'],
  origin: [
    'Initializing origin protocol...',
    '',
    'Name: Carlos Nadal',
    'Background: 15 years in bakeries, factories, construction.',
    'Event: Underwent spinal surgery. Life changed.',
    'Action: Reskilled in cybersecurity at Holberton School.',
    'Mission: Protect systems. Understand threats. Build defenses.',
    '',
    'Discipline > Talent. Always.',
  ],
  clear: [],
};

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>([
    '👾 Welcome to the Matrix. Type `help` to begin.',
  ]);
  const [input, setInput] = useState<string>('');
  const terminalRef = useRef<HTMLDivElement>(null);

  const playKeySound = () => {
    const audio = new Audio('./src/sounds/keystroke.wav');
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      return;
    }

    const output = commands[cleanCmd] || [`❌ Unknown command: ${cleanCmd}`];
    const formatted = [`> ${cmd}`, ...output];
    setHistory((prev) => [...prev, ...formatted]);

    if (cleanCmd === 'contact') {
      setTimeout(() => {
        const contact = document.getElementById('contact');
        if (contact) contact.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const match = Object.keys(commands).find((cmd) =>
        cmd.startsWith(input.toLowerCase())
      );
      if (match) setInput(match);
    } else if (e.key.length === 1) {
      playKeySound();
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section className="section bg-tertiary border border-accent-primary rounded-lg max-w-3xl mx-auto my-16 shadow-glow">
      <div className="p-6 font-fira-code text-[var(--color-accent-primary)] terminal-text">
        <div
          ref={terminalRef}
          className="h-80 overflow-y-auto whitespace-pre-line"
        >
          {history.map((line, i) => (
            <div key={i} className="line-animate">{line}</div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex mt-4">
          <span className="mr-2">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)]"
            autoFocus
            placeholder="type a command..."
          />
        </form>
      </div>
    </section>
  );
};

export default Terminal;

import React, { useEffect, useState } from 'react';

const LiveLogs: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [userInfo, setUserInfo] = useState({
    ip: '192.168.133.37',
    resolution: '',
    userAgent: '',
    language: '',
    timezone: '',
  });

  useEffect(() => {
    const info = {
      ip: `192.168.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
      resolution: `${window.screen.width}x${window.screen.height}`,
      userAgent: navigator.userAgent,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    setUserInfo(info);
  }, []);

  useEffect(() => {
    if (!userInfo.resolution) return;

    const dynamicLogs = [
      '[+] Initializing threat intelligence module...',
      `[~] Resolving user IP...`,
      `[✔] IP Address: ${userInfo.ip}`,
      `[~] Detecting screen resolution...`,
      `[✔] Resolution: ${userInfo.resolution}`,
      `[~] Parsing browser fingerprint...`,
      `[✔] User Agent: ${userInfo.userAgent}`,
      `[~] Extracting language preferences...`,
      `[✔] Browser Language: ${userInfo.language}`,
      `[✔] Timezone: ${userInfo.timezone}`,
      '[~] Checking for proxy or VPN...',
      '[!] Potential cloaking behavior detected',
      '[✔] Encrypted connection verified',
      '[~] Analyzing behavioral biometrics...',
      '[✔] Cursor movement: human-like',
      '[✔] Threat score calculated: LOW (0.6)',
      '[✔] User marked as passive observer',
      '[~] Background monitoring enabled...',
    ];

    let index = 0;
    const interval = setInterval(() => {
      setLogs((prev) => {
        const newLogs = [...prev, dynamicLogs[index]];
        return newLogs.slice(-8);
      });

      index++;
      if (index >= dynamicLogs.length) {
        clearInterval(interval);
      }
    }, 1800);

    return () => clearInterval(interval);
  }, [userInfo]);

  return (
    <div className="w-full max-w-[340px] bg-[var(--color-tertiary)] text-[var(--color-accent-primary)] border border-[var(--color-accent-primary)] rounded-lg p-4 font-fira-code text-sm shadow-xl backdrop-blur-sm bg-opacity-70 max-h-[320px] overflow-hidden">
      <div className="mb-2 text-xs text-[var(--color-accent-secondary)] uppercase tracking-wide">
        Live Threat Console
      </div>
      <div className="h-[260px] overflow-y-auto animate-fade-in-up scrollbar-thin scrollbar-thumb-[var(--color-accent-secondary)]">
        {logs.map((log, index) => (
          <div key={index} className="mb-1 animate-pulse-fast">{log}</div>
        ))}
      </div>
    </div>
  );
};

export default LiveLogs;
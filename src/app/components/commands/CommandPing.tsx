import React, { useState, useEffect } from 'react';

interface CommandPingProps {
  target?: string;
}

const CommandPing: React.FC<CommandPingProps> = ({ target }) => {
  const [lines, setLines] = useState<string[]>([]);
  
  const defaultTarget = "rakha-homelab.local";
  const displayTarget = target || defaultTarget;
  
  // Check if target is an IPv4 address
  const isIpAddress = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(displayTarget);
  
  // Generate a fake IP if it's not the default and not an IP
  const fakeIp = displayTarget === defaultTarget 
    ? "192.168.1.100" 
    : isIpAddress 
      ? displayTarget
      : `10.${displayTarget.length % 255}.${(displayTarget.charCodeAt(0) * 2) % 255}.${(displayTarget.charCodeAt(displayTarget.length-1) * 3) % 255}`;
    
  const targetHost = isIpAddress ? displayTarget : `${displayTarget} (${fakeIp})`;

  useEffect(() => {
    let count = 0;
    const maxPings = 4;
    
    // Initial message
    setLines([`PING ${targetHost}: 56 data bytes`]);

    const interval = setInterval(() => {
      count++;
      const time = (Math.random() * 5 + 1).toFixed(2);
      
      setLines(prev => [
        ...prev,
        `64 bytes from ${fakeIp}: icmp_seq=${count} ttl=64 time=${time} ms`
      ]);

      if (count === maxPings) {
        clearInterval(interval);
        setTimeout(() => {
          setLines(prev => [
            ...prev,
            '',
            `--- ${displayTarget} ping statistics ---`,
            `${maxPings} packets transmitted, ${maxPings} packets received, 0.0% packet loss`,
            `round-trip min/avg/max/stddev = 1.12/3.45/6.21/1.05 ms`
          ]);
        }, 500);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [displayTarget, fakeIp, targetHost]);

  return (
    <div className="space-y-1 text-gray-300 font-mono text-xs md:text-sm">
      {lines.map((line, idx) => (
        <div key={idx}>{line || <br/>}</div>
      ))}
    </div>
  );
};

export default CommandPing;

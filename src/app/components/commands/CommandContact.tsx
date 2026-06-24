import React, { useState } from 'react';
import Link from 'next/link';

const InlineContactForm: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('SUBMITTING');
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('SUCCESS');
        form.reset();
      } else {
        setFormStatus('ERROR');
      }
    } catch (err) {
      setFormStatus('ERROR');
    }
  };

  if (formStatus === 'SUCCESS') {
    return (
      <div className="mt-4 p-4 border border-green-500/30 bg-green-500/5 rounded-lg max-w-md font-mono text-xs md:text-sm text-green-400">
        <p className="font-bold">✓ MESSAGE TRANSMITTED SUCCESSFULLY</p>
        <p className="mt-1 text-gray-300">Your request has been logged and queued. Rakha will review it shortly. Connection closed.</p>
      </div>
    );
  }

  return (
    <div 
      className="mt-4 p-4 border border-white/[0.08] bg-black/40 rounded-lg max-w-md"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="text-white font-bold mb-3 flex items-center gap-1.5"><span className="text-[var(--accent-rose)]">//</span> Send Message Directly:</p>
      <form action="https://formspree.io/f/xjkogzrd" onSubmit={handleSubmit} className="space-y-3">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          className="w-full p-2 text-xs bg-white/5 border border-white/10 rounded focus:border-[var(--accent)] focus:outline-none text-white placeholder-gray-600 font-mono"
          required
          disabled={formStatus === 'SUBMITTING'}
        />
        <input 
          type="email" 
          name="_replyto" 
          placeholder="Your Email" 
          className="w-full p-2 text-xs bg-white/5 border border-white/10 rounded focus:border-[var(--accent)] focus:outline-none text-white placeholder-gray-600 font-mono"
          required
          disabled={formStatus === 'SUBMITTING'}
        />
        <textarea 
          name="message" 
          rows={3} 
          placeholder="Message Content" 
          className="w-full p-2 text-xs bg-white/5 border border-white/10 rounded focus:border-[var(--accent)] focus:outline-none text-white placeholder-gray-600 resize-none font-mono"
          required
          disabled={formStatus === 'SUBMITTING'}
        />
        
        <div className="flex items-center gap-3">
          <button 
            type="submit" 
            className="px-4 py-1.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-purple)] text-black font-bold uppercase rounded text-[10px] hover:opacity-90 transition-opacity disabled:opacity-50"
            disabled={formStatus === 'SUBMITTING'}
          >
            {formStatus === 'SUBMITTING' ? 'TRANSMITTING...' : 'SEND'}
          </button>
          {formStatus === 'ERROR' && (
            <span className="text-red-400 text-[10px] font-bold">✗ TRANSMISSION ERROR. TRY AGAIN.</span>
          )}
        </div>
      </form>
    </div>
  );
};

const CommandContact: React.FC = () => (
  <div className="space-y-4 text-gray-300 font-mono text-xs md:text-sm">
    <p className="text-[var(--accent)] font-bold">// CHANNELS OF COMMUNICATION:</p>
    <div className="space-y-2">
      <p>📱 <span className="text-gray-400">LinkedIn:</span> <Link href="https://www.linkedin.com/in/raditya-rakha" target="_blank" className="underline text-[var(--accent)] hover:text-white">linkedin.com/in/raditya-rakha</Link></p>
      <p>📸 <span className="text-gray-400">Instagram:</span> <Link href="https://www.instagram.com/rakharenanda/" target="_blank" className="underline text-[var(--accent-purple)] hover:text-white">@rakharenanda</Link></p>
      <p>✉️ <span className="text-gray-400">Email:</span> <a href="mailto:radityarakha01@gmail.com" className="underline text-[var(--accent-rose)] hover:text-white">radityarakha01@gmail.com</a></p>
    </div>
    
    <InlineContactForm />
  </div>
);

export default CommandContact;

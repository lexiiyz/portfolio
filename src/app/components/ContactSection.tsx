// components/ContactSection.tsx
import React from 'react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="mt-20 relative z-10
      cyberpunk-card
      p-8 shadow-xl
      mx-auto max-w-4xl mb-10 text-[var(--text-primary)]">
      <h2 className="font-extrabold text-3xl md:text-4xl mb-8 text-center text-[var(--primary-neon)] drop-shadow-lg glitch-text">
        Get in <span className="text-[var(--secondary-neon)]">Touch</span>
      </h2>

      <p className="font-body text-lg md:text-xl text-center leading-relaxed max-w-2xl mx-auto mb-10 text-gray-200">
        Have a project idea, a collaboration opportunity, or just want to say hello? Feel free to reach out!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold text-purple-300 mb-5">Send Me a Message</h3>
          <form
            action="https://formspree.io/f/xjkogzrd" 
            method="POST" 
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-gray-200 text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name" 
                className="shadow appearance-none border border-[var(--primary-neon)]/30 rounded-none w-full py-3 px-4 text-[var(--text-primary)] leading-tight
                           focus:outline-none focus:shadow-[0_0_10px_var(--primary-neon)] focus:border-[var(--primary-neon)]
                           bg-black/50 placeholder-gray-500 transition-all duration-300"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-200 text-sm font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="_replyto" 
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight
                           focus:outline-none focus:shadow-outline focus:border-blue-500
                           bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-200 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message" 
                rows={5}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight
                           focus:outline-none focus:shadow-outline focus:border-blue-500
                           bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 resize-y"
                placeholder="Tell me about your project or inquiry..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold shadow-lg
                         text-white bg-gradient-to-r from-purple-600 to-blue-600
                         hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                         transform transition-all duration-300 w-full justify-center md:w-auto relative overflow-hidden glitch-button"
            >
              Send Message
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l4.453-1.488 4.453 1.488a1 1 0 001.169-1.409l-7-14z"></path></svg>
            </button>
          </form>
        </div>

        <div className="md:text-left text-center">
          <h3 className="text-2xl font-semibold text-blue-300 mb-5">Connect with Me</h3>
          <p className="font-body text-lg text-gray-200 mb-6">
            {"I'm always open to new connections and collaborations. Find me on:"}
          </p>

          <div className="space-y-4">
            <Link
              href="https://www.linkedin.com/in/raditya-rakha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-3 text-white text-lg font-medium
                         hover:text-blue-400 transition-colors duration-200 group"
            >
              <svg className="h-8 w-8 text-blue-500 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM4 9H0v12h4zM2 6a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
              LinkedIn
            </Link>

            <Link
              href="https://www.instagram.com/rakharenanda/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-3 text-white text-lg font-medium
                         hover:text-purple-400 transition-colors duration-200 group"
            >
              <svg className="h-8 w-8 text-pink-500 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 4c-2.718 0-4.07.01-5.182.062a4.992 4.992 0 00-2.636 1.018A4.992 4.992 0 003.062 7.818C3.01 8.93 3 10.282 3 12s.01 3.07.062 4.182a4.992 4.992 0 001.018 2.636 4.992 4.992 0 002.636 1.018C7.93 21.99 9.282 22 12 22s4.07-.01 5.182-.062a4.992 4.992 0 002.636-1.018 4.992 4.992 0 001.018-2.636C21.99 15.07 22 13.718 22 12s-.01-3.07-.062-4.182a4.992 4.992 0 00-1.018-2.636 4.992 4.992 0 00-2.636-1.018C16.07 3.01 14.718 3 12 3zm0 2c2.617 0 2.924.01 3.963.057.77.036 1.155.158 1.48.286.33.136.56.318.82.578.26.26.44.49.578.82.128.325.25.71.286 1.48.047 1.039.057 1.346.057 3.963s-.01 2.924-.057 3.963a4.992 4.992 0 01-.286 1.48c-.136.33-.318.56-.578.82-.26.26-.49.44-.82.578-.325.128-.71.25-1.48.286C14.924 19.99 14.617 20 12 20s-2.924-.01-3.963-.057c-.77-.036-1.155-.158-1.48-.286a4.992 4.992 0 01-.82-.578 4.992 4.992 0 01-.578-.82c-.128-.325-.25-.71-.286-1.48C4.01 14.924 4 14.617 4 12s.01-2.924.057-3.963c.036-.77.158-1.155.286-1.48.136-.33.318-.56.578-.82.26-.26.49-.44.82-.578.325-.128.71-.25 1.48-.286C9.076 4.01 9.383 4 12 4zm0 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path>
              </svg>
              Instagram
            </Link>

            <a
              href="mailto:youremail@example.com"
              className="flex items-center justify-center md:justify-start gap-3 text-white text-lg font-medium
                         hover:text-gray-400 transition-colors duration-200 group"
            >
              <svg className="h-8 w-8 text-gray-400 group-hover:text-gray-300 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              radityarakha01@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
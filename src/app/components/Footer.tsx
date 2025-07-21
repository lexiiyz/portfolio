'use client'; 

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); 

    if (href === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      if (history.pushState) {
        history.pushState(null, '', '/');
      } else {
        window.location.hash = '';
      }
      return;
    }

    const targetId = href.substring(1); 
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
      if (history.pushState) {
        history.pushState(null, '', href);
      } else {
        window.location.hash = href;
      }
    }
  };

  return (
    <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 text-white py-8 px-4 text-center relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="font-body text-gray-400 text-sm">
          &copy; {currentYear} Raditya Rakha. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <Link
            href="/#home"
            onClick={(e) => handleScroll(e, '/')} 
            className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
          >
            Home
          </Link>
          <Link
            href="/#projects"
            onClick={(e) => handleScroll(e, '#projects')}
            className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
          >
            Projects
          </Link>
          <Link
            href="/#skills"
            onClick={(e) => handleScroll(e, '#skills')}
            className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
          >
            Skills
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
          >
            Contact
          </Link>
        </div>

        {/* Social Icons (these are external links, so they don't need smooth scroll behavior) */}
        <div className="flex space-x-4">
          <Link href="https://www.linkedin.com/in/raditya-rakha" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM4 9H0v12h4zM2 6a2 2 0 110-4 2 2 0 010 4z" /></svg>
          </Link>
          <Link href="https://www.instagram.com/rakharenanda/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 4c-2.718 0-4.07.01-5.182.062a4.992 4.992 0 00-2.636 1.018A4.992 4.992 0 003.062 7.818C3.01 8.93 3 10.282 3 12s.01 3.07.062 4.182a4.992 4.992 0 001.018 2.636 4.992 4.992 0 002.636 1.018C7.93 21.99 9.282 22 12 22s4.07-.01 5.182-.062a4.992 4.992 0 002.636-1.018 4.992 4.992 0 001.018-2.636C21.99 15.07 22 13.718 22 12s-.01-3.07-.062-4.182a4.992 4.992 0 00-1.018-2.636 4.992 4.992 0 00-2.636-1.018C16.07 3.01 14.718 3 12 3zm0 2c2.617 0 2.924.01 3.963.057.77.036 1.155.158 1.48.286.33.136.56.318.82.578.26.26.44.49.578.82.128.325.25.71.286 1.48.047 1.039.057 1.346.057 3.963s-.01 2.924-.057 3.963a4.992 4.992 0 01-.286 1.48c-.136.33-.318.56-.578.82-.26.26-.49.44-.82.578-.325.128-.71.25-1.48.286C14.924 19.99 14.617 20 12 20s-2.924-.01-3.963-.057c-.77-.036-1.155-.158-1.48-.286a4.992 4.992 0 01-.82-.578 4.992 4.992 0 01-.578-.82c-.128-.325-.25-.71-.286-1.48C4.01 14.924 4 14.617 4 12s.01-2.924.057-3.963c.036-.77.158-1.155.286-1.48.136-.33.318-.56.578-.82.26-.26.49-.44.82-.578.325-.128.71-.25 1.48-.286C9.076 4.01 9.383 4 12 4zm0 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path></svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
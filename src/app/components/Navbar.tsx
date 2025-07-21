'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home'); 
  const pathname = usePathname();


  const observerRef = useRef<IntersectionObserver | null>(null);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

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
      setActiveSection('home'); 
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

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let sectionId = entry.target.id;
            if (sectionId === '') { 
              sectionId = 'home';
            }
            setActiveSection(sectionId);
          }
        });
      },
      {
        root: null, 
        rootMargin: '0px 0px -50% 0px', 
        threshold: 0,
      }
    );

    const sections = ['skills', 'projects', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    const homeElement = document.getElementById('home'); 
    if (homeElement) {
      observerRef.current?.observe(homeElement);
    } else {
        console.warn("Element with ID 'home' not found. Please add id='home' to your main hero/home section.");
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 transition-all duration-300
                     bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Nama */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-extrabold text-2xl text-purple-300 hover:text-blue-300 transition-colors">
              Raditya Rakha
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`
                  text-lg font-medium transition-colors duration-200
                  ${
                    link.href === '/' && activeSection === 'home'
                      ? 'text-blue-300'
                      : link.href !== '/' && activeSection === link.href.substring(1)
                      ? 'text-blue-300'
                      : 'text-gray-200 hover:text-purple-300' 
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle navigation"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-sm pb-4 px-4 border-t border-white/10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className={`
                block py-2 text-lg font-medium transition-colors duration-200
                ${
                  link.href === '/' && activeSection === 'home'
                    ? 'text-blue-300'
                    : link.href !== '/' && activeSection === link.href.substring(1)
                    ? 'text-blue-300'
                    : 'text-gray-200 hover:text-purple-300'
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
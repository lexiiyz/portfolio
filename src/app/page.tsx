'use client';

import { projects } from './data/project';
import SpotlightCard from './components/SpotLights';
import Skill from './components/Skill';
import TextType from './components/TextType';
import Link from 'next/link';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Project } from './data/project';

export default function Home() {
  const [showHome, setShowHome] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Web' | 'Mobile' | 'IoT' | 'DevOps' | 'AI'>('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="relative w-full min-h-screen">
      {!showHome && <Preloader onFinish={() => setShowHome(true)} />} 

      <AnimatePresence>
        {showHome && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 z-0 w-full h-full pointer-events-none" />
            <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-500 to-zinc-200 animate-gradient-xy bg-[length:400%_400%] opacity-30" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 pb-12">
              <section
                id="home"
                className="h-120 min-h-[60vh] flex flex-col justify-center items-center text-center relative z-20
                           bg-[var(--card-bg)] p-8 shadow-xl
                           border border-slate-700/50 pro-card mx-auto max-w-4xl mt-30"
              >
                <h1 className="font-heading text-4xl font-extrabold text-[var(--text-primary)]">
                  {"Hello, I'm"} <span className="text-[var(--accent)]">Raditya Rakha<span className="sr-only"> Renanda</span></span>
                </h1>
                <TextType
                  text={["Frontend Developer", "DevOps Enthusiast", "Full Stack Developer", "UI/UX Designer"]}
                  className="text-3xl text-[var(--text-secondary)] mt-4"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
                <p className="font-body text-md md:text-1xl text-gray-300 mt-6 leading-relaxed max-w-2xl drop-shadow-md">
                  Architecting scalable web solutions and managing complex infrastructure. Passionate about self-hosting, cloud orchestration, and building seamless digital experiences.
                </p>

                <div className="mt-10">
                  <Link
                    href="https://drive.google.com/file/d/14AVSlItQ8BxfbN1JgLZ35znyFGtqnv83/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 border border-[var(--accent)] text-base font-semibold
                               text-[var(--background)] bg-[var(--accent)]
                               hover:bg-[var(--background)] hover:text-[var(--accent)] hover:border-[var(--text-secondary)]
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)]
                               transform transition-all duration-300 relative overflow-hidden group rounded-lg"
                  >
                    <span className="relative z-10">Download My CV</span>
                  </Link>
                </div>
              </section>

              <section id="skills" className="justify-center mt-20 relative z-10 p-8 mx-auto max-w-9xl pro-card">
                <Skill />
              </section>

              <section id="projects" className="mt-20 relative z-10 mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
                  My <span className="text-[var(--accent)]">Project</span>
                </h2>

                {/* Cyberpunk Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  {(['All', 'Web', 'Mobile', 'IoT', 'DevOps', 'AI'] as const).map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`
                        px-6 py-2 border font-bold uppercase tracking-wider transition-all duration-300
                        ${activeCategory === category 
                          ? 'bg-[var(--accent)] text-[var(--background)] border-[var(--accent)] shadow-[0_0_15px_var(--accent)]' 
                          : 'bg-transparent text-[var(--text-primary)] border-[var(--accent)]/30 hover:border-[var(--accent)] hover:text-[var(--accent)]'
                        }
                        relative overflow-hidden group rounded-md
                      `}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <SpotlightCard project={project} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </section>

              <section id="contact">
                <ContactSection />
              </section>
            </div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

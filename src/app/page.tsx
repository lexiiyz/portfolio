'use client';

import { projects } from './data/project';
import SpotlightCard from './components/SpotLights';
import Skill from './components/Skill';
import TextType from './components/TextType';
import Beams from './components/Beams';
import Link from 'next/link';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [showHome, setShowHome] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {!showHome && <Preloader onFinish={() => setShowHome(true)} />} 

      <AnimatePresence>
        {showHome && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 z-0 w-full h-full">
              <Beams
                beamWidth={2}
                beamHeight={15}
                beamNumber={12}
                lightColor="rgba(132, 0, 255, 0.25)"
                speed={4}
                noiseIntensity={1.75}
                scale={0.2}
                rotation={30}
              />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 pb-12">
              <section
                id="home"
                className="h-120 min-h-[60vh] flex flex-col justify-center items-center text-center relative z-20
                           bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl
                           border border-white/20 hover:border-white/40 transition-all duration-300 mx-auto max-w-4xl mt-30"
              >
                <h1 className="font-heading text-4xl font-extrabold text-purple-300">
                  {"Hello, I'm"} <span className="text-blue-300">Raditya Rakha</span>
                </h1>
                <TextType
                  text={["Web Developer", "Full Stack Developer", "UI/UX Designer"]}
                  className="text-3xl"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
                <p className="font-body text-md md:text-1xl text-gray-200 mt-6 leading-relaxed max-w-2xl drop-shadow-md">
                  passionate about creating seamless and user-friendly web experiences...
                </p>

                <div className="mt-10">
                  <Link
                    href="https://drive.google.com/file/d/1vR0w8AjpxwymEWBSujHj7d6CzOIwsu5C/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 border border-transparent text-base font-semibold rounded-full shadow-lg
                               text-white bg-gradient-to-r from-purple-600 to-blue-600
                               hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                               transform hover:scale-105 transition-all duration-300"
                  >
                    Download My CV
                  </Link>
                </div>
              </section>

              <section id="skills" className="justify-center mt-20 relative z-10 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-indigo-700/50 mx-auto max-w-9xl">
                <Skill />
              </section>

              <section id="projects" className="mt-20 relative z-10 mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
                  My <span className="text-blue-400">Project</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {projects.map((project) => (
                    <SpotlightCard key={project.id} project={project} spotlightColor="rgba(132, 0, 255, 0.25)" />
                  ))}
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

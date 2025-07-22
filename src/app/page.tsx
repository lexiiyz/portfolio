'use client';

import { projects } from './data/project';
import SpotlightCard from './components/SpotLights';
import Skill from './components/Skill';
import TextType from './components/TextType';
import Beams from './components/Beams';
import Link from 'next/link';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
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
          data-aos="fade-up" 
          data-aos-duration="1000"
        >
          <h1 className="font-heading text-4xl font-extrabold text-purple-300">
            {"Hello, I'm"} <span className="text-blue-300">Raditya Rakha</span>
          </h1>
          <TextType
            text={["Web Developer", "Full Stack Developer", "UI/UX Designer"]}
            className='text-3xl'
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
          <p className="font-body text-md md:text-1xl text-gray-200 mt-6 leading-relaxed max-w-2xl drop-shadow-md">
            passionate about creating seamless and user-friendly web experiences. With experience in both web development and UI/UX design, I aim to build digital products that are not only functional but also beautiful and intuitive.
          </p>

          <div className="mt-10">
            <Link
              href="https://drive.google.com/file/d/1FZUpnsF-3Iwz2OYzGKmtFICX8zGijh5G/view?usp=sharingg"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-semibold rounded-full shadow-lg
                                   text-white bg-gradient-to-r from-purple-600 to-blue-600
                                   hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                                   transform hover:scale-105 transition-all duration-300"
            >
              Download My CV
              <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </section>

        <section
          id="skills"
          className="justify-center mt-20 relative z-10 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-indigo-700/50 mx-auto max-w-9xl"
          data-aos="fade-up" // Animasi untuk Skills section
          data-aos-duration="1000"
        >
          <Skill />
        </section>

        <section
          id="projects"
          className="mt-20 relative z-10 mx-auto max-w-5xl"
          data-aos="fade-up" // Animasi untuk Projects section
          data-aos-duration="1000"
          data-aos-delay="200" // Sedikit delay
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">My <span className="text-blue-400">Project</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <SpotlightCard
                key={project.id}
                project={project}
                spotlightColor="rgba(132, 0, 255, 0.25)"
                className="cursor-pointer"
                data-aos="zoom-in" // Animasi untuk setiap Project Card
                data-aos-duration="800"
              />
            ))}
          </div>
        </section>
        <section
          id='contact'
          data-aos="fade-up" // Animasi untuk Contact section
          data-aos-duration="1000"
        >
          <ContactSection />
        </section>
      </div>
      <Footer />
    </div>
  );
}
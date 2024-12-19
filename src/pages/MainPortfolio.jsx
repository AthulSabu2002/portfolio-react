/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import TerminalPortfolio from './Profile';
import { portfolioContent } from '../config/portfolioContent';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress } from 'react-icons/si';

const MainPortfolio = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log('Portfolio Content:', portfolioContent); // Debug log
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!portfolioContent) {
    console.log('No portfolio content loaded');
    return <div className="min-h-screen bg-slate-900 text-white p-8">Loading...</div>;
  }

  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNode /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'Git', icon: <FaGitAlt /> },
  ];

  return (
    <div className={`min-h-screen bg-slate-900 text-white transition-all duration-300 ${
      isTerminalOpen && !isMobile ? 'lg:pr-[520px]' : ''
    }`}>
      {/* Main Content - Centered */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="space-y-12 sm:space-y-16">
          {/* Hero Section */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              {portfolioContent?.hero?.name || 'Your Name'}
            </h1>
            <p className="text-lg sm:text-xl text-slate-400">{portfolioContent?.hero?.title || 'Your Title'}</p>
          </section>

          {/* Skills Grid - Responsive columns */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-200 text-center">Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {skills.map((skill, index) => (
                <div key={index} 
                  className="px-3 py-2 sm:px-4 sm:py-3 bg-slate-800/50 rounded-lg text-center text-slate-400 border border-slate-700 hover:border-emerald-400 transition-colors">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Work - Responsive Grid */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-200 text-center">Featured Work</h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {portfolioContent?.projects?.map((project, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-b from-slate-800 to-slate-800/50 rounded-lg border border-slate-700 hover:border-emerald-400 transition-all duration-300">
                  <h3 className="text-xl text-emerald-400 mb-2">{project.title}</h3>
                  <p className="text-slate-400">{project.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Links - Centered */}
          <section className="space-y-6 text-center">
            <h2 className="text-2xl font-semibold text-slate-200">Connect</h2>
            <div className="flex gap-4 justify-center">
              <a href={portfolioContent.social.github} target="_blank" rel="noopener noreferrer" 
                className="px-6 py-2 bg-slate-800/50 rounded-full text-slate-400 border border-slate-700 hover:border-emerald-400 hover:text-slate-200 transition-colors">
                GitHub
              </a>
              <a href={portfolioContent.social.linkedin} target="_blank" rel="noopener noreferrer"
                className="px-6 py-2 bg-slate-800/50 rounded-full text-slate-400 border border-slate-700 hover:border-emerald-400 hover:text-slate-200 transition-colors">
                LinkedIn
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Terminal Overlay */}
      {isTerminalOpen && isMobile && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-40" onClick={() => setIsTerminalOpen(false)} />
      )}

      {/* Terminal - Responsive Position */}
      <div 
        className={`fixed transition-all duration-300 ease-in-out z-50 ${
          isTerminalOpen 
            ? isMobile
              ? 'inset-4 sm:inset-8 bg-slate-900 rounded-lg shadow-2xl border border-slate-700'
              : 'top-0 right-0 w-[520px] h-full border-l border-slate-700 bg-slate-900/95 backdrop-blur'
            : 'bottom-4 right-4 sm:bottom-8 sm:right-8 w-auto h-auto'
        }`}
      >
        {isTerminalOpen ? (
          <div className="relative h-full p-4">
            <button 
              onClick={() => setIsTerminalOpen(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-200 p-2 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="h-full pt-4">
              <TerminalPortfolio />
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsTerminalOpen(true)}
            className="bg-emerald-400 hover:bg-emerald-500 text-slate-900 rounded-full p-3 sm:p-4 shadow-lg flex items-center gap-2 transition-all duration-200 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
            <span className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Open Terminal
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MainPortfolio;

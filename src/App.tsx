import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import ThemeToggle from './components/sections/ThemeToggle';
import Terminal from './components/sections/Terminal';
import MatrixRain from './components/sections/MatrixRain';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <MatrixRain />
      <ThemeToggle />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

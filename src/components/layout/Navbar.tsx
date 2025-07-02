import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="glitch-advanced font-space-mono font-bold text-xl">
              <span className="terminal-text">&gt;_</span> Carlos<span className="text-accent-secondary">Nadal</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">Start</a>
            <a href="#about" className="nav-link">About me</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#education" className="nav-link">Formation</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="./src/assets/Carlos-NadalCV.pdf" className="btn-secondary text-sm">Download CV</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-text-primary hover:text-accent-primary focus:outline-none"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-tertiary">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="nav-link py-2" onClick={toggleMenu}>Home</a>
            <a href="#about" className="nav-link py-2" onClick={toggleMenu}>About me</a>
            <a href="#skills" className="nav-link py-2" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="nav-link py-2" onClick={toggleMenu}>Projects</a>
            <a href="#contact" className="nav-link py-2" onClick={toggleMenu}>Contact</a>
            <a href="#" className="btn-secondary text-center py-2" onClick={toggleMenu}>Download CV</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

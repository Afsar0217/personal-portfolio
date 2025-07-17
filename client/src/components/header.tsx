import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200' : 'bg-white/90 backdrop-blur-md border-b border-slate-200'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold font-poppins text-slate-800 hover:text-blue-600 transition-colors"
          >
            Afsar Md
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              Work
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </button>
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Download CV
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t border-slate-200">
            <button
              onClick={() => scrollToSection('home')}
              className="block text-slate-600 hover:text-blue-600 transition-colors font-medium w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block text-slate-600 hover:text-blue-600 transition-colors font-medium w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block text-slate-600 hover:text-blue-600 transition-colors font-medium w-full text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="block text-slate-600 hover:text-blue-600 transition-colors font-medium w-full text-left"
            >
              Work
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="block text-slate-600 hover:text-blue-600 transition-colors font-medium w-full text-left"
            >
              Contact
            </button>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [location] = useLocation();

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking a nav link
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <a className="text-2xl font-heading font-bold text-primary">Portfólio</a>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <a 
                className={`nav-link font-medium ${activeSection === 'home' ? 'active' : ''}`}
                onClick={handleNavLinkClick}
              >
                Início
              </a>
            </Link>
            <Link href="/#experiencia">
              <a 
                className={`nav-link font-medium ${activeSection === 'experiencia' ? 'active' : ''}`}
                onClick={handleNavLinkClick}
              >
                Experiência
              </a>
            </Link>
            <Link href="/#contato">
              <a 
                className={`nav-link font-medium ${activeSection === 'contato' ? 'active' : ''}`}
                onClick={handleNavLinkClick}
              >
                Contato
              </a>
            </Link>
          </nav>
          
          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-neutral-dark focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <i className="fas fa-times text-xl"></i>
            ) : (
              <i className="fas fa-bars text-xl"></i>
            )}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-4 py-4">
            <Link href="/">
              <a 
                className={`nav-link font-medium py-2 ${activeSection === 'home' ? 'active' : ''}`}
                onClick={handleNavLinkClick}
              >
                Início
              </a>
            </Link>
            <Link href="/#experiencia">
              <a 
                className={`nav-link font-medium py-2 ${activeSection === 'experiencia' ? 'active' : ''}`}
                onClick={handleNavLinkClick}
              >
                Experiência
              </a>
            </Link>
            <Link href="/#contato">
              <a 
                className={`nav-link font-medium py-2 ${activeSection === 'contato' ? 'active' : ''}`}
                onClick={handleNavLinkClick}
              >
                Contato
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

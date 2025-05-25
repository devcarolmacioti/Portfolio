import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/lib/theme-provider";
import { SunIcon, MoonIcon } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

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

  // Smooth scroll to section when clicking nav links
  const scrollToSection = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background dark:bg-background shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <span className="text-2xl font-heading font-bold text-primary cursor-pointer">Portfólio</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#home"
              className={`nav-link font-medium ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => scrollToSection('home', e)}
            >
              Início
            </a>
            <a 
              href="#experiencia"
              className={`nav-link font-medium ${activeSection === 'experiencia' ? 'active' : ''}`}
              onClick={(e) => scrollToSection('experiencia', e)}
            >
              Experiência
            </a>
            <a 
              href="#contato"
              className={`nav-link font-medium ${activeSection === 'contato' ? 'active' : ''}`}
              onClick={(e) => scrollToSection('contato', e)}
            >
              Contato
            </a>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
            
            <button 
              className="text-foreground focus:outline-none" 
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? (
                <span className="text-xl">✕</span>
              ) : (
                <span className="text-xl">☰</span>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-4 py-4">
            <a 
              href="#home"
              className={`nav-link font-medium py-2 ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => scrollToSection('home', e)}
            >
              Início
            </a>
            <a 
              href="#experiencia"
              className={`nav-link font-medium py-2 ${activeSection === 'experiencia' ? 'active' : ''}`}
              onClick={(e) => scrollToSection('experiencia', e)}
            >
              Experiência
            </a>
            <a 
              href="#contato"
              className={`nav-link font-medium py-2 ${activeSection === 'contato' ? 'active' : ''}`}
              onClick={(e) => scrollToSection('contato', e)}
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

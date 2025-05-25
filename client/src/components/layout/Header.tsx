import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/lib/theme-provider";
import { SunIcon, MoonIcon, Globe } from "lucide-react";

// Tipos para o seletor de idioma
type Language = "pt" | "en" | "es";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [language, setLanguage] = useState<Language>("pt");
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
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

  // Language menu toggle
  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  // Change language
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
    // Salvar o idioma e forçar atualização da página para aplicar as mudanças em todos os componentes
    window.localStorage.setItem('language', lang);
    window.location.reload(); // Forçar recarregar a página para atualizar todos os componentes
  };

  // Traduções dos links de navegação
  const navLinks = {
    pt: {
      home: "Início",
      experience: "Experiência",
      education: "Formação",
      skills: "Habilidades",
      technologies: "Tecnologias",
      contact: "Contato"
    },
    en: {
      home: "Home",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      technologies: "Technologies",
      contact: "Contact"
    },
    es: {
      home: "Inicio",
      experience: "Experiencia",
      education: "Formación",
      skills: "Habilidades",
      technologies: "Tecnologías",
      contact: "Contacto"
    }
  };

  const currentText = navLinks[language];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background dark:bg-background shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <span className="text-2xl font-heading font-bold text-primary cursor-pointer">Portfólio</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex space-x-6 mr-6">
              <a 
                href="#home"
                className={`nav-link font-medium ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => scrollToSection('home', e)}
              >
                {currentText.home}
              </a>
              <a 
                href="#experiencia"
                className={`nav-link font-medium ${activeSection === 'experiencia' ? 'active' : ''}`}
                onClick={(e) => scrollToSection('experiencia', e)}
              >
                {currentText.experience}
              </a>
              <a 
                href="#formacao"
                className={`nav-link font-medium ${activeSection === 'formacao' ? 'active' : ''}`}
                onClick={(e) => scrollToSection('formacao', e)}
              >
                {currentText.education}
              </a>
              <a 
                href="#habilidades"
                className={`nav-link font-medium ${activeSection === 'habilidades' ? 'active' : ''}`}
                onClick={(e) => scrollToSection('habilidades', e)}
              >
                {currentText.skills}
              </a>
              <a 
                href="#tecnologias"
                className={`nav-link font-medium ${activeSection === 'tecnologias' ? 'active' : ''}`}
                onClick={(e) => scrollToSection('tecnologias', e)}
              >
                {currentText.technologies}
              </a>
              <a 
                href="#contato"
                className={`nav-link font-medium ${activeSection === 'contato' ? 'active' : ''}`}
                onClick={(e) => scrollToSection('contato', e)}
              >
                {currentText.contact}
              </a>
            </nav>
            
            <div className="flex items-center space-x-2">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={toggleLangMenu}
                  className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center"
                  aria-label="Mudar idioma"
                >
                  <Globe size={18} />
                  <span className="ml-1">{language.toUpperCase()}</span>
                </button>
                
                {isLangMenuOpen && (
                  <div className="absolute top-full right-0 mt-1 bg-card rounded-md shadow-lg py-2 min-w-24 z-50">
                    <button
                      className={`block w-full text-left px-4 py-2 hover:bg-primary/10 ${language === 'pt' ? 'bg-primary/20 text-primary' : ''}`}
                      onClick={() => changeLanguage('pt')}
                    >
                      Português
                    </button>
                    <button
                      className={`block w-full text-left px-4 py-2 hover:bg-primary/10 ${language === 'en' ? 'bg-primary/20 text-primary' : ''}`}
                      onClick={() => changeLanguage('en')}
                    >
                      English
                    </button>
                    <button
                      className={`block w-full text-left px-4 py-2 hover:bg-primary/10 ${language === 'es' ? 'bg-primary/20 text-primary' : ''}`}
                      onClick={() => changeLanguage('es')}
                    >
                      Español
                    </button>
                  </div>
                )}
              </div>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
              >
                {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Language Toggle for Mobile */}
            <div className="relative">
              <button
                onClick={toggleLangMenu}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Mudar idioma"
              >
                <Globe size={18} />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-1 bg-card rounded-md shadow-lg py-2 min-w-24 z-50">
                  <button
                    className={`block w-full text-left px-4 py-2 hover:bg-primary/10 ${language === 'pt' ? 'bg-primary/20 text-primary' : ''}`}
                    onClick={() => changeLanguage('pt')}
                  >
                    PT
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-2 hover:bg-primary/10 ${language === 'en' ? 'bg-primary/20 text-primary' : ''}`}
                    onClick={() => changeLanguage('en')}
                  >
                    EN
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-2 hover:bg-primary/10 ${language === 'es' ? 'bg-primary/20 text-primary' : ''}`}
                    onClick={() => changeLanguage('es')}
                  >
                    ES
                  </button>
                </div>
              )}
            </div>
            
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
              {currentText.home}
            </a>
            <a 
              href="#experiencia"
              className={`nav-link font-medium py-2 ${activeSection === 'experiencia' ? 'active' : ''}`}
              onClick={(e) => scrollToSection('experiencia', e)}
            >
              {currentText.experience}
            </a>
            <a 
              href="#formacao"
              className={`nav-link font-medium py-2 ${activeSection === 'formacao' ? 'active' : ''}`}
              onClick={(e) => scrollToSection('formacao', e)}
            >
              {currentText.education}
            </a>
            <a 
              href="#habilidades"
              className={`nav-link font-medium py-2 ${activeSection === 'habilidades' ? 'active' : ''}`}
              onClick={(e) => scrollToSection('habilidades', e)}
            >
              {currentText.skills}
            </a>
            <a 
              href="#tecnologias"
              className={`nav-link font-medium py-2 ${activeSection === 'tecnologias' ? 'active' : ''}`}
              onClick={(e) => scrollToSection('tecnologias', e)}
            >
              {currentText.technologies}
            </a>
            <a 
              href="#contato"
              className={`nav-link font-medium py-2 ${activeSection === 'contato' ? 'active' : ''}`}
              onClick={(e) => scrollToSection('contato', e)}
            >
              {currentText.contact}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

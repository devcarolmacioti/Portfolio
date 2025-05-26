import { Link } from "wouter";
import { useState, useEffect } from "react";
import profileImage from "../../../../assets/profile-pic.png";

// Tipo para idiomas
type Language = "pt" | "en" | "es";

const IntroSection = () => {
  const [language, setLanguage] = useState<Language>("pt");

  // Recuperar o idioma do localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Conteúdo em diferentes idiomas
  const content = {
    pt: {
      greeting: "Olá, eu sou",
      role: "Desenvolvedora Front-end",
      description:
        "Especialista em criar experiências digitais dinâmicas e intuitivas com Angular, TypeScript e tecnologias modernas. Com mais de 1 ano de experiência, desenvolvo aplicações web responsivas que unem design elegante e funcionalidade robusta.",
      contactButton: "Entre em contato",
      experienceButton: "Ver experiência",
      photoAlt: "Foto de perfil profissional",
    },
    en: {
      greeting: "Hello, I am",
      role: "Front-end Developer",
      description:
        "Specialist in creating dynamic and intuitive digital experiences with Angular, TypeScript and modern technologies. With over 5 years of experience, I develop responsive web applications that combine elegant design and robust functionality.",
      contactButton: "Contact me",
      experienceButton: "See experience",
      photoAlt: "Professional profile photo",
    },
    es: {
      greeting: "Hola, soy",
      role: "Desarrolladora Front-end",
      description:
        "Especialista en crear experiencias digitales dinámicas e intuitivas con Angular, TypeScript y tecnologías modernas. Con más de 5 años de experiencia, desarrollo aplicaciones web responsivas que combinan diseño elegante y funcionalidad robusta.",
      contactButton: "Contáctame",
      experienceButton: "Ver experiencia",
      photoAlt: "Foto de perfil profesional",
    },
  };

  // Obter o conteúdo do idioma atual
  const currentContent = content[language];

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
              {currentContent.greeting}{" "}
              <span className="text-primary">Carolina Farias Macioti</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading font-medium text-secondary mb-6">
              {currentContent.role}
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-foreground/80">
              {currentContent.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contato"
                onClick={(e) => scrollToSection("contato", e)}
                className="btn-primary bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium"
              >
                {currentContent.contactButton}
              </a>
              <a
                href="#experiencia"
                onClick={(e) => scrollToSection("experiencia", e)}
                className="border-2 border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-medium transition-all"
              >
                {currentContent.experienceButton}
              </a>
            </div>
          </div>

          <div className="md:w-2/5">
            <img
              src={profileImage}
              alt={currentContent.photoAlt}
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto border-4 border-primary shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

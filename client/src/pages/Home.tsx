import { useState, useEffect } from "react";
import IntroSection from "@/components/home/IntroSection";
import Experience from "./Experience";
import Contact from "./Contact";
import { CheckCircle2, Code } from "lucide-react";

// Tipo para idiomas
type Language = "pt" | "en" | "es";

// Seção de Formação Acadêmica
const EducationSection = () => {
  const [language, setLanguage] = useState<Language>("pt");
  
  // Recuperar o idioma do localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Dados de formação acadêmica em diferentes idiomas
  const educationData = {
    pt: [
      {
        title: "Certificação em Desenvolvimento Frontend e Design UX/UI",
        institution: "ORIGAMID",
        period: "Em andamento",
        skills: "HTML | CSS | JavaScript | React | TypeScript | Next.Js | Vue.Js | UI Design"
      },
      {
        title: "Certificação em Desenvolvimento Frontend",
        institution: "Oracle + Alura Latam Educacional",
        period: "2023",
        skills: "HTML5 | CSS3 | JavaScript | React"
      },
      {
        title: "Bacharelado em Direito",
        institution: "Universidade Federal de Pelotas – Pelotas/RS",
        period: "2019",
        skills: ""
      }
    ],
    en: [
      {
        title: "Frontend Development and UX/UI Designer Certification",
        institution: "ORIGAMID",
        period: "In Progress",
        skills: "HTML | CSS | JavaScript | React | TypeScript | Next.Js | Vue.Js | UI Design"
      },
      {
        title: "Frontend Development Program Certification",
        institution: "Oracle + Alura Latam Educational",
        period: "2023",
        skills: "HTML5 | CSS3 | JavaScript | React"
      },
      {
        title: "Bachelor's Degree in Law",
        institution: "Federal University of Pelotas – Pelotas/RS",
        period: "2019",
        skills: ""
      }
    ],
    es: [
      {
        title: "Certificación en Desarrollo Frontend y Diseño UX/UI",
        institution: "ORIGAMID",
        period: "En curso",
        skills: "HTML | CSS | JavaScript | React | TypeScript | Next.Js | Vue.Js | UI Design"
      },
      {
        title: "Certificación en Desarrollo Frontend",
        institution: "Oracle + Alura Latam Educacional",
        period: "2023",
        skills: "HTML5 | CSS3 | JavaScript | React"
      },
      {
        title: "Licenciatura en Derecho",
        institution: "Universidad Federal de Pelotas – Pelotas/RS",
        period: "2019",
        skills: ""
      }
    ]
  };

  // Textos da página em diferentes idiomas
  const pageText = {
    pt: {
      title: "Formação Acadêmica",
      subtitle: "Minha trajetória educacional e certificações profissionais",
      skills: "Competências"
    },
    en: {
      title: "Academic Background",
      subtitle: "My educational journey and professional certifications",
      skills: "Skills"
    },
    es: {
      title: "Formación Académica",
      subtitle: "Mi trayectoria educativa y certificaciones profesionales",
      skills: "Competencias"
    }
  };
  
  const texts = pageText[language];
  const educations = educationData[language];
  
  return (
    <section id="formacao" className="py-16 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">{texts.title}</h2>
          <p className="text-lg max-w-2xl mx-auto text-foreground/80">
            {texts.subtitle}
          </p>
        </div>
        
        <div className="grid gap-8 max-w-3xl mx-auto">
          {educations.map((edu, index) => (
            <div key={index} className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold text-primary mb-1">{edu.title}</h3>
              <h4 className="text-lg font-medium text-secondary mb-3">{edu.institution}</h4>
              <div className="flex justify-between items-center mb-4">
                <span className="text-foreground/70">{edu.period}</span>
              </div>
              {edu.skills && (
                <div>
                  <p className="text-sm text-foreground/70 mb-2">{texts.skills}:</p>
                  <p className="text-foreground/90">{edu.skills}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Seção de Habilidades
const SkillsSection = () => {
  const [language, setLanguage] = useState<Language>("pt");
  
  // Recuperar o idioma do localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Dados de habilidades em diferentes idiomas
  const skillsData = {
    pt: [
      "Resolução de problemas",
      "Trabalho em equipe",
      "Comprometimento",
      "Receptividade a feedback",
      "Conhecimento técnico e aprendizado contínuo",
      "Atenção aos detalhes",
      "Gestão de tempo",
      "Organização",
      "Proatividade",
      "Flexibilidade e capacidade de adaptação a mudanças"
    ],
    en: [
      "Problem solving",
      "Teamwork",
      "Commitment",
      "Receptiveness to feedback",
      "Technical knowledge and continuous learning",
      "Attention to detail",
      "Time management",
      "Organization",
      "Proactivity",
      "Flexibility and ability to adapt to changes"
    ],
    es: [
      "Resolución de problemas",
      "Trabajo en equipo",
      "Compromiso",
      "Receptividad a la retroalimentación",
      "Conocimiento técnico y aprendizaje continuo",
      "Atención al detalle",
      "Gestión del tiempo",
      "Organización",
      "Proactividad",
      "Flexibilidad y capacidad de adaptación a los cambios"
    ]
  };

  // Textos da página em diferentes idiomas
  const pageText = {
    pt: {
      title: "Habilidades",
      subtitle: "Minhas principais competências profissionais"
    },
    en: {
      title: "Skills",
      subtitle: "My main professional competencies"
    },
    es: {
      title: "Habilidades",
      subtitle: "Mis principales competencias profesionales"
    }
  };
  
  const texts = pageText[language];
  const skills = skillsData[language];
  
  return (
    <section id="habilidades" className="py-16 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">{texts.title}</h2>
          <p className="text-lg max-w-2xl mx-auto text-foreground/80">
            {texts.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-start p-4 bg-card text-card-foreground rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
              <span className="text-foreground">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Seção de Tecnologias
const TechnologiesSection = () => {
  const [language, setLanguage] = useState<Language>("pt");
  
  // Recuperar o idioma do localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Dados de tecnologias
  const technologiesData = [
    { name: "HTML5", icon: <Code /> },
    { name: "CSS3", icon: <Code /> },
    { name: "JAVASCRIPT", icon: <Code /> },
    { name: "TYPESCRIPT", icon: <Code /> },
    { name: "REACT", icon: <Code /> },
    { name: "ANGULAR", icon: <Code /> },
    { name: "UI DESIGN", icon: <Code /> }
  ];

  // Textos da página em diferentes idiomas
  const pageText = {
    pt: {
      title: "Tecnologias",
      subtitle: "Ferramentas e linguagens que utilizo no meu dia a dia"
    },
    en: {
      title: "Technologies",
      subtitle: "Tools and languages I use in my daily work"
    },
    es: {
      title: "Tecnologías",
      subtitle: "Herramientas y lenguajes que utilizo en mi día a día"
    }
  };
  
  const texts = pageText[language];
  
  return (
    <section id="tecnologias" className="py-16 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">{texts.title}</h2>
          <p className="text-lg max-w-2xl mx-auto text-foreground/80">
            {texts.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {technologiesData.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 bg-card text-card-foreground rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center text-primary mb-4">
                {tech.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente principal Home
const Home = () => {
  // Definir tema escuro como padrão quando o componente montar
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <>
      <IntroSection />
      <Experience />
      <EducationSection />
      <SkillsSection />
      <TechnologiesSection />
      <Contact />
    </>
  );
};

export default Home;

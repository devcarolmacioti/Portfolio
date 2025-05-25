import { useLanguage } from "../lib/language-provider";
import { Code } from "lucide-react";

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

const Technologies = () => {
  const { language } = useLanguage();
  const texts = pageText[language];
  
  return (
    <section id="tecnologias" className="py-16 bg-background">
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

export default Technologies;
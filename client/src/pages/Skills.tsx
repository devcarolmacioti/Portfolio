import { useLanguage } from "@/lib/language-provider";
import { CheckCircle2 } from "lucide-react";

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

const Skills = () => {
  const { language } = useLanguage();
  const texts = pageText[language];
  const skills = skillsData[language];
  
  return (
    <section id="habilidades" className="py-16 bg-background">
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

export default Skills;
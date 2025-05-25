import { useLanguage } from "@/lib/language-provider";

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
    subtitle: "Minha trajetória educacional e certificações profissionais"
  },
  en: {
    title: "Academic Background",
    subtitle: "My educational journey and professional certifications"
  },
  es: {
    title: "Formación Académica",
    subtitle: "Mi trayectoria educativa y certificaciones profesionales"
  }
};

const Education = () => {
  const { language } = useLanguage();
  const texts = pageText[language];
  const educations = educationData[language];
  
  return (
    <section id="formacao" className="py-16 bg-background">
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
                  <p className="text-sm text-foreground/70 mb-2">Competências:</p>
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

export default Education;
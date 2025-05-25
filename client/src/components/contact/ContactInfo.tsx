import { useState, useEffect } from "react";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin, 
  Github, 
  Twitter, 
  Instagram 
} from "lucide-react";

// Tipo para idiomas
type Language = "pt" | "en" | "es";

const ContactInfo = () => {
  const [language, setLanguage] = useState<Language>("pt");
  
  // Recuperar o idioma do localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Textos em diferentes idiomas
  const texts = {
    pt: {
      title: "Informações de Contato",
      email: "E-mail",
      location: "Localização",
      phone: "Telefone",
      locationText: "São Paulo, SP - Brasil",
      socialMedia: "Redes Sociais"
    },
    en: {
      title: "Contact Information",
      email: "Email",
      location: "Location",
      phone: "Phone",
      locationText: "São Paulo, SP - Brazil",
      socialMedia: "Social Media"
    },
    es: {
      title: "Información de Contacto",
      email: "Correo electrónico",
      location: "Ubicación",
      phone: "Teléfono",
      locationText: "São Paulo, SP - Brasil",
      socialMedia: "Redes Sociales"
    }
  };

  const currentText = texts[language];

  return (
    <div className="bg-card text-card-foreground p-8 rounded-lg shadow-md h-full">
      <h3 className="text-2xl font-heading font-bold text-primary mb-6">{currentText.title}</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Mail className="text-primary" size={20} />
          </div>
          <div>
            <h4 className="font-medium mb-1 text-foreground">{currentText.email}</h4>
            <a href="mailto:contato@carolinafarias.dev" className="text-primary hover:underline">contato@carolinafarias.dev</a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <MapPin className="text-primary" size={20} />
          </div>
          <div>
            <h4 className="font-medium mb-1 text-foreground">{currentText.location}</h4>
            <p className="text-foreground/80">{currentText.locationText}</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Phone className="text-primary" size={20} />
          </div>
          <div>
            <h4 className="font-medium mb-1 text-foreground">{currentText.phone}</h4>
            <p className="text-foreground/80">(11) 98765-4321</p>
          </div>
        </div>
      </div>
      
      <hr className="my-8 border-input" />
      
      <h3 className="text-xl font-heading font-medium mb-4 text-foreground">{currentText.socialMedia}</h3>
      <div className="flex space-x-4">
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
          aria-label="Twitter"
        >
          <Twitter size={20} />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;

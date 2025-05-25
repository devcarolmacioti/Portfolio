import { useState, useEffect } from "react";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Globe } from "lucide-react";

// Tipo para idiomas
type Language = "pt" | "en" | "es";

// Definições de texto para múltiplos idiomas
const formText = {
  pt: {
    name: "Nome",
    email: "E-mail",
    message: "Mensagem",
    placeholderName: "Seu nome completo",
    placeholderEmail: "seu.email@exemplo.com",
    placeholderMessage: "Escreva sua mensagem aqui...",
    submitButton: "Enviar Mensagem",
    submittingButton: "Enviando...",
    successTitle: "Mensagem enviada!",
    successDescription: "Entrarei em contato em breve.",
    successMessage: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
    errorTitle: "Erro ao enviar mensagem",
    errorDescription: "Por favor, tente novamente mais tarde.",
    validationNameRequired: "Por favor, informe seu nome.",
    validationEmailRequired: "Por favor, informe um e-mail válido.",
    validationMessageRequired: "Por favor, escreva uma mensagem."
  },
  en: {
    name: "Name",
    email: "Email",
    message: "Message",
    placeholderName: "Your full name",
    placeholderEmail: "your.email@example.com",
    placeholderMessage: "Write your message here...",
    submitButton: "Send Message",
    submittingButton: "Sending...",
    successTitle: "Message sent!",
    successDescription: "I'll get back to you soon.",
    successMessage: "Message successfully sent! I'll get back to you soon.",
    errorTitle: "Error sending message",
    errorDescription: "Please try again later.",
    validationNameRequired: "Please provide your name.",
    validationEmailRequired: "Please provide a valid email.",
    validationMessageRequired: "Please write a message."
  },
  es: {
    name: "Nombre",
    email: "Correo electrónico",
    message: "Mensaje",
    placeholderName: "Su nombre completo",
    placeholderEmail: "su.correo@ejemplo.com",
    placeholderMessage: "Escriba su mensaje aquí...",
    submitButton: "Enviar Mensaje",
    submittingButton: "Enviando...",
    successTitle: "¡Mensaje enviado!",
    successDescription: "Me pondré en contacto pronto.",
    successMessage: "¡Mensaje enviado con éxito! Me pondré en contacto pronto.",
    errorTitle: "Error al enviar mensaje",
    errorDescription: "Por favor, inténtelo de nuevo más tarde.",
    validationNameRequired: "Por favor, introduzca su nombre.",
    validationEmailRequired: "Por favor, introduzca un correo electrónico válido.",
    validationMessageRequired: "Por favor, escriba un mensaje."
  }
};

// Schema de validação dinâmico baseado no idioma
const getContactFormSchema = (lang: Language) => z.object({
  name: z.string().min(1, formText[lang].validationNameRequired),
  email: z.string().email(formText[lang].validationEmailRequired),
  message: z.string().min(1, formText[lang].validationMessageRequired)
});

type ContactFormData = z.infer<typeof getContactFormSchema>;

const ContactForm = () => {
  const [language, setLanguage] = useState<Language>("pt");
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();
  
  // Recuperar o idioma do localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);
  
  // Obter texto atual baseado no idioma
  const currentText = formText[language];
  const contactFormSchema = getContactFormSchema(language);

  // Language menu toggle
  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  // Change language
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
    localStorage.setItem('language', lang);
  };

  // Handle input changes
  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear error when user starts typing
    if (formErrors[id as keyof ContactFormData]) {
      setFormErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      contactFormSchema.parse(formData);
      
      // Clear any existing errors
      setFormErrors({});
      setIsSubmitting(true);
      
      // Submit form to server
      const response = await apiRequest("POST", "/api/contact", formData);
      
      if (response.ok) {
        // Show success message
        setFormSubmitted(true);
        toast({
          title: currentText.successTitle,
          description: currentText.successDescription,
        });
        
        // Reset form
        setFormData({ name: "", email: "", message: "" });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const newErrors: Partial<ContactFormData> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setFormErrors(newErrors);
      } else {
        // Handle other errors
        toast({
          title: currentText.errorTitle,
          description: currentText.errorDescription,
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card text-card-foreground p-8 rounded-lg shadow-md">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground">{currentText.name}</h3>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">{currentText.name}</label>
          <input
            type="text"
            id="name"
            className={`form-input w-full px-4 py-3 border ${formErrors.name ? 'border-error' : 'border-input'} rounded-lg focus:ring-primary bg-background text-foreground`}
            placeholder={currentText.placeholderName}
            value={formData.name}
            onChange={handleInput}
            required
          />
          {formErrors.name && (
            <p className="text-error text-sm mt-1">{formErrors.name}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">{currentText.email}</label>
          <input
            type="email"
            id="email"
            className={`form-input w-full px-4 py-3 border ${formErrors.email ? 'border-error' : 'border-input'} rounded-lg focus:ring-primary bg-background text-foreground`}
            placeholder={currentText.placeholderEmail}
            value={formData.email}
            onChange={handleInput}
            required
          />
          {formErrors.email && (
            <p className="text-error text-sm mt-1">{formErrors.email}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">{currentText.message}</label>
          <textarea
            id="message"
            rows={5}
            className={`form-input w-full px-4 py-3 border ${formErrors.message ? 'border-error' : 'border-input'} rounded-lg focus:ring-primary bg-background text-foreground`}
            placeholder={currentText.placeholderMessage}
            value={formData.message}
            onChange={handleInput}
            required
          ></textarea>
          {formErrors.message && (
            <p className="text-error text-sm mt-1">{formErrors.message}</p>
          )}
        </div>
        
        <button 
          type="submit" 
          className="btn-primary w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? currentText.submittingButton : currentText.submitButton}
        </button>
        
        {/* Success message - Hidden by default */}
        {formSubmitted && (
          <div className="mt-4 p-4 bg-success/10 text-success rounded-lg">
            {currentText.successMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

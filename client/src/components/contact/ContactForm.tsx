import { useState } from "react";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

// Define the schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(1, "Por favor, informe seu nome."),
  email: z.string().email("Por favor, informe um e-mail válido."),
  message: z.string().min(1, "Por favor, escreva uma mensagem.")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();

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
          title: "Mensagem enviada!",
          description: "Entrarei em contato em breve.",
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
          title: "Erro ao enviar mensagem",
          description: "Por favor, tente novamente mais tarde.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
        <input
          type="text"
          id="name"
          className={`form-input w-full px-4 py-3 border ${formErrors.name ? 'border-error' : 'border-gray-300'} rounded-lg focus:ring-primary`}
          placeholder="Seu nome completo"
          value={formData.name}
          onChange={handleInput}
          required
        />
        {formErrors.name && (
          <p className="text-error text-sm mt-1">{formErrors.name}</p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium mb-2">E-mail</label>
        <input
          type="email"
          id="email"
          className={`form-input w-full px-4 py-3 border ${formErrors.email ? 'border-error' : 'border-gray-300'} rounded-lg focus:ring-primary`}
          placeholder="seu.email@exemplo.com"
          value={formData.email}
          onChange={handleInput}
          required
        />
        {formErrors.email && (
          <p className="text-error text-sm mt-1">{formErrors.email}</p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
        <textarea
          id="message"
          rows={5}
          className={`form-input w-full px-4 py-3 border ${formErrors.message ? 'border-error' : 'border-gray-300'} rounded-lg focus:ring-primary`}
          placeholder="Escreva sua mensagem aqui..."
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
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
      
      {/* Success message - Hidden by default */}
      {formSubmitted && (
        <div className="mt-4 p-4 bg-success/10 text-success rounded-lg">
          Mensagem enviada com sucesso! Entrarei em contato em breve.
        </div>
      )}
    </form>
  );
};

export default ContactForm;

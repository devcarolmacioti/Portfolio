import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  return (
    <section id="contato" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Entre em Contato</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Tem um projeto em mente ou quer saber mais sobre meu trabalho? Envie uma mensagem e entrarei em contato o mais breve possível.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <ContactForm />
          </div>
          
          <div className="md:w-1/2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

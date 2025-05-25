import { Link } from "wouter";

const IntroSection = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
              Olá, eu sou <span className="text-primary">Carolina Farias Macioti</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading font-medium text-secondary mb-6">
              Desenvolvedora Front-end
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Especialista em criar experiências digitais dinâmicas e intuitivas com Angular, TypeScript e tecnologias modernas. Com mais de 5 anos de experiência, desenvolvo aplicações web responsivas que unem design elegante e funcionalidade robusta.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contato"
                onClick={(e) => scrollToSection('contato', e)}
                className="btn-primary bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium"
              >
                Entre em contato
              </a>
              <a 
                href="#experiencia"
                onClick={(e) => scrollToSection('experiencia', e)}
                className="border-2 border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-medium transition-all"
              >
                Ver experiência
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="Foto de perfil profissional" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto border-4 border-primary shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

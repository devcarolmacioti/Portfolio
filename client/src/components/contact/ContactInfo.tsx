const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md h-full">
      <h3 className="text-2xl font-heading font-bold text-primary mb-6">Informações de Contato</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <i className="fas fa-envelope text-primary"></i>
          </div>
          <div>
            <h4 className="font-medium mb-1">E-mail</h4>
            <a href="mailto:contato@anasilva.dev" className="text-primary hover:underline">contato@anasilva.dev</a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <i className="fas fa-map-marker-alt text-primary"></i>
          </div>
          <div>
            <h4 className="font-medium mb-1">Localização</h4>
            <p>São Paulo, SP - Brasil</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <i className="fas fa-phone text-primary"></i>
          </div>
          <div>
            <h4 className="font-medium mb-1">Telefone</h4>
            <p>(11) 98765-4321</p>
          </div>
        </div>
      </div>
      
      <hr className="my-8 border-gray-200" />
      
      <h3 className="text-xl font-heading font-medium mb-4">Redes Sociais</h3>
      <div className="flex space-x-4">
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;

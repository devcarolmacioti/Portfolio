import { useState } from "react";
import { useLocation, Link } from "wouter";
import TimelineItem from "@/components/experience/TimelineItem";
import ProjectCard from "@/components/experience/ProjectCard";
import { experienceData, projectsData } from "@/data/portfolio-data";
import { ArrowLeftIcon, GithubIcon, ExternalLinkIcon } from "lucide-react";

const ProjectDetail = ({ id }: { id: string }) => {
  const project = projectsData.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Projeto não encontrado</h2>
          <Link href="/experiencia">
            <span className="text-primary hover:underline cursor-pointer flex items-center justify-center">
              <ArrowLeftIcon size={16} className="mr-2" /> Voltar para projetos
            </span>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <Link href="/experiencia">
          <span className="text-primary hover:underline cursor-pointer flex items-center mb-8">
            <ArrowLeftIcon size={16} className="mr-2" /> Voltar para projetos
          </span>
        </Link>
        
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <img 
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-80 object-cover"
          />
          
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-heading font-bold text-primary">{project.title}</h1>
              
              <a 
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-lg flex items-center hover:bg-primary/90 transition-colors"
              >
                <GithubIcon size={18} className="mr-2" /> Ver Repositório
              </a>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2 className="text-xl font-heading font-bold mb-4">Descrição do Projeto</h2>
              <p>{project.description}</p>
              
              <h2 className="text-xl font-heading font-bold mt-8 mb-4">Desafios e Soluções</h2>
              <p>
                Durante o desenvolvimento deste projeto, enfrentei vários desafios técnicos que exigiram soluções criativas.
                A implementação de {project.skills[0]} foi particularmente desafiadora, mas consegui superar os obstáculos
                através de pesquisa e experimentação.
              </p>
              
              <h2 className="text-xl font-heading font-bold mt-8 mb-4">Tecnologias Utilizadas</h2>
              <ul>
                {project.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
                <li>HTML5/CSS3</li>
                <li>Git/GitHub</li>
              </ul>
              
              <h2 className="text-xl font-heading font-bold mt-8 mb-4">Resultados e Aprendizados</h2>
              <p>
                Este projeto me permitiu aprofundar meus conhecimentos em {project.skills.join(", ")} e
                entender melhor as práticas de desenvolvimento modernas. O feedback dos usuários foi extremamente 
                positivo, destacando especialmente a interface intuitiva e a performance da aplicação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const [location] = useLocation();
  const projectId = location.includes('/projeto/') ? location.split('/projeto/')[1] : null;
  
  if (projectId) {
    return <ProjectDetail id={projectId} />;
  }
  
  return (
    <section id="experiencia" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Minha Experiência</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Confira minha jornada profissional e os projetos que desenvolvi ao longo dos anos.
          </p>
        </div>
        
        <div className="timeline-container">
          {experienceData.map((experience, index) => (
            <TimelineItem 
              key={index}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              skills={experience.skills}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
        
        <div className="mt-24">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">Projetos Destacados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                id={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                skills={project.skills}
                projectUrl={project.projectUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

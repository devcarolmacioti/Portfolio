import { useState } from "react";
import TimelineItem from "@/components/experience/TimelineItem";
import ProjectCard from "@/components/experience/ProjectCard";
import { experienceData, projectsData } from "@/data/portfolio-data";

const Experience = () => {
  return (
    <section id="experiencia" className="py-16 bg-neutral-light">
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

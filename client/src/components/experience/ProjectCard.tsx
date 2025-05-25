import { ProjectCardProps } from "@/types";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Link } from "wouter";

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  skills, 
  projectUrl,
  id
}) => {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-primary mb-2">{title}</h3>
        <p className="mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Link href={`/projeto/${id}`}>
            <span className="text-primary font-medium flex items-center hover:underline cursor-pointer">
              Ver detalhes <ExternalLinkIcon size={16} className="ml-1" />
            </span>
          </Link>
          
          <a 
            href={projectUrl} 
            className="text-primary font-medium flex items-center hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Repositório do projeto"
          >
            <GithubIcon size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

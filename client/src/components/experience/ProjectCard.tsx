import { ProjectCardProps } from "@/types";

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  skills, 
  projectUrl 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
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
        <a 
          href={projectUrl} 
          className="text-primary font-medium flex items-center hover:underline"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Ver detalhes <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

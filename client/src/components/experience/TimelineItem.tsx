import { TimelineItemProps } from "@/types";

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  company, 
  period, 
  description, 
  skills, 
  isEven 
}) => {
  return (
    <div className="timeline-item mb-16">
      <div className="timeline-dot"></div>
      <div className={`
        md:w-5/12 
        ${isEven ? 'md:ml-auto md:pr-8 md:text-right' : 'md:mr-auto md:pl-8'} 
        p-4 bg-card text-card-foreground rounded-lg shadow-md
      `}>
        <h3 className="text-xl font-heading font-bold text-primary mb-2">{title}</h3>
        <h4 className="text-lg font-medium text-secondary mb-4">{company} - {period}</h4>
        <p className="mb-4 text-foreground/80">{description}</p>
        <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;

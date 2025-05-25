export interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  isEven: boolean;
}

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  skills: string[];
  projectUrl: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export interface NeonColor {
  primary: string;
  secondary: string;
  name: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image?: string; // Optional: for project image
}

export interface Skill {
  name: string;
  icon?: React.ElementType; // Optional: for skill icon
}

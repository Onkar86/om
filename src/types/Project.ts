export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'AI' | 'Web Development' | 'IoT' | 'Business';
}
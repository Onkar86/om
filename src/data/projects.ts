import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Healthcare Assistant',
    description: 'An intelligent chatbot that helps patients schedule appointments and answers medical questions.',
    longDescription: 'This AI-powered healthcare assistant uses natural language processing to understand patient queries, schedule appointments, and provide basic medical information. It integrates with hospital management systems and maintains a conversation history for better patient experience.',
    technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
    imageUrl: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: 'https://healthcare-assistant.example.com',
    githubUrl: 'https://github.com/onkarmahamuni/healthcare-assistant',
    featured: true,
    category: 'AI'
  },
  {
    id: '2',
    title: 'Smart Home Automation System',
    description: 'IoT-based system that allows users to control home appliances remotely using a smartphone app.',
    longDescription: 'This smart home automation system uses IoT devices to control lighting, temperature, security cameras, and other home appliances. The system includes a mobile app interface, voice control capabilities, and automated scheduling features.',
    technologies: ['Raspberry Pi', 'Arduino', 'React Native', 'MQTT'],
    imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: 'https://smart-home.example.com',
    githubUrl: 'https://github.com/onkarmahamuni/smart-home',
    featured: true,
    category: 'IoT'
  },
  {
    id: '3',
    title: 'E-commerce Analytics Dashboard',
    description: 'Real-time analytics dashboard for e-commerce platforms with predictive sales forecasting.',
    longDescription: 'This e-commerce analytics dashboard provides real-time insights into sales, customer behavior, and inventory. It features predictive analytics for sales forecasting, customer segmentation, and personalized marketing recommendations.',
    technologies: ['React', 'D3.js', 'Python', 'AWS'],
    imageUrl: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: 'https://analytics-dashboard.example.com',
    githubUrl: 'https://github.com/onkarmahamuni/analytics-dashboard',
    featured: true,
    category: 'Web Development'
  },
  {
    id: '4',
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing my projects and professional experience.',
    longDescription: 'Built with React and Tailwind CSS, this portfolio website features a clean design, smooth animations, and responsive layout. It includes sections for project showcases, personal information, and contact forms.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: 'https://silver-sorbet-04ae34.netlify.app',
    githubUrl: 'https://github.com/onkarmahamuni/portfolio',
    featured: true,
    category: 'Web Development'
  },
  {
    id: '5',
    title: 'Sustainable Agriculture Platform',
    description: 'A platform connecting small farmers with consumers to promote sustainable agriculture practices.',
    longDescription: 'This platform connects small-scale farmers directly with consumers, eliminating middlemen and promoting sustainable agriculture. It includes features for tracking produce origins, sustainable farming practices certification, and community building.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    imageUrl: 'https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: 'https://sustainable-agriculture.example.com',
    githubUrl: 'https://github.com/onkarmahamuni/sustainable-agriculture',
    featured: true,
    category: 'Business'
  },
  {
    id: '6',
    title: 'Virtual Reality Learning Environment',
    description: 'VR application for immersive educational experiences in science and history.',
    longDescription: 'This VR learning environment creates immersive educational experiences for subjects like biology, chemistry, and history. Students can explore historical sites, conduct virtual science experiments, and interact with 3D models of complex concepts.',
    technologies: ['Unity', 'C#', 'Oculus SDK', '3D Modeling'],
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: 'https://vr-learning.example.com',
    githubUrl: 'https://github.com/onkarmahamuni/vr-learning',
    featured: false,
    category: 'AI'
  },
  {
    id: '7',
    title: 'Blockchain-based Supply Chain',
    description: 'Transparent supply chain management system using blockchain technology.',
    longDescription: 'This blockchain-based supply chain system provides end-to-end transparency for product journeys from manufacturer to consumer. It includes features for authenticity verification, ethical sourcing certification, and detailed product history tracking.',
    technologies: ['Ethereum', 'Solidity', 'React', 'Node.js'],
    imageUrl: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: 'https://blockchain-supply.example.com',
    githubUrl: 'https://github.com/onkarmahamuni/blockchain-supply',
    featured: false,
    category: 'Business'
  }
];
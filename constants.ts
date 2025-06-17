import { NeonColor, Project } from './types';

export const NEON_COLORS: NeonColor[] = [
  { primary: '#00ffff', secondary: '#00aaff', name: 'cyan' }, // Brighter secondary
  { primary: '#39ff14', secondary: '#ceff1a', name: 'green' }, // Neon green
  { primary: '#ff073a', secondary: '#ff4081', name: 'pink' },  // Vibrant pink
  { primary: '#9d00ff', secondary: '#d070ff', name: 'purple' }, // Deep purple
  { primary: '#ffff00', secondary: '#ffae42', name: 'yellow' }  // Bright yellow
];

export const MAIN_PROJECTS_DATA: Project[] = [
  {
    title: "QR Generator",
    description: "Our QR Code Generator is a sleek and user-friendly web tool that allows you to instantly create QR codes for URLs, text, emails, contact info, and more. Whether you're a business owner sharing links, a teacher distributing notes, or just need a quick way to share data, this tool makes it effortless.",
    tech: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/HiranNath/qr-code-studio-latest", 
    live: "#", 
    image: "https://www.shutterstock.com/image-photo/hand-woman-scanning-qr-code-600nw-2394568947.jpg"
  },
  {
    title: "Neon Portfolio (This Site)",
    description: "This futuristic portfolio website, built with dynamic animations and cyber aesthetics.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/HiranNath", 
    live: "#",
    image: "https://www.shutterstock.com/image-photo/abstract-neon-light-fluorescent-lights-600nw-2266712461.jpg"
  },
  {
    title: "Zelion Imitation",
    description: "A project made with the referrence of Zelion website.",
    tech: ["React", "Next.js",],
    github: "https://github.com/HiranNath/Zelion-whatsapp-update", 
    live: "#",
    image: "/logo3(1).png"
  }
];

export const ADDITIONAL_PROJECTS_DATA: Project[] = [
  {
    title: "^_^ Stay Tuned ^_^",
    description: "",
    tech: [],
    github: "",
    live: "#",
    image: "https://www.shutterstock.com/image-photo/small-figure-man-digging-concrete-600nw-328174601.jpg"
  },

  // Removed "Cyber Threat Intel Platform" and "Secure File Transfer" 
  // to focus on user-mentioned projects.
];


export const SKILLS_ARRAY: string[] = [
  "React", 
  "TypeScript", 
  "JavaScript (ES6+)",
  "Node.js", 
  "Tailwind CSS",
  "HTML5",
  "Git & GitHub",
  "Cybersecurity Fundamentals",
 
];

export const PROFILE_IMAGE_URL = "/hiranfotocpy3.jpg";
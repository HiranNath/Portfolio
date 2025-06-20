import { Type } from 'lucide-react';
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
    github: "https://github.com/HiranNath/qr_gen.git", 
    live: "https://qr-gen-samp.netlify.app/", 
    image: "https://www.shutterstock.com/image-photo/hand-woman-scanning-qr-code-600nw-2394568947.jpg"
  },
  {
    title: "Neon Portfolio (This Site)",
    description: "This futuristic portfolio website, built with dynamic animations and cyber aesthetics.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/HiranNath", 
    live: "https://hiranport-1.netlify.app/",
    image: "https://www.shutterstock.com/image-photo/abstract-neon-light-fluorescent-lights-600nw-2266712461.jpg"
  },
  {
    title: "Zelion Imitation",
    description: "A project made with the referrence of Zelion website.",
    tech: ["React", "Next.js",],
    github: "https://github.com/HiranNath/Zelion-whatsapp-update", 
    live: "https://zelion-front.netlify.app/",
    image: "/logo3(1).png"
  }

 
];

export const ADDITIONAL_PROJECTS_DATA: Project[] = [
  {
    title: "CredHex",
    description: "A simple project made for storing your certificates and images.",
    tech: ["React", "Next.js",],
    github: "https://github.com/HiranNath/Zelion-whatsapp-update", 
    live: "https://credhex-imitate.netlify.app/",
    image: "/credHex.png"
  },
  
  {
    title: "Zelion-E commerce",
    description: "A simple e-commerce website made with the referrence of Zelion website.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    github: "https://github.com/HiranNath/zelion-ecommerce.git",
    live: "https://zelion-ecommerce.netlify.app/",
    image: "https://lsmedia.linker-cdn.net/62267/2022/7446126.jpeg?d=600x400"
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
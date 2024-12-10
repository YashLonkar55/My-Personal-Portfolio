import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import Project1 from '../assets/FirstPg.png';
import Project2 from '../assets/P2.png';
import Project3 from '../assets/P3.jpg';
import Project4 from '../assets/P4.png';
    
const projects = [
    { 
        title: "Form Builder",
        description: "A MERN stack-based form builder app with Tailwind CSS. Users can create, edit, and preview forms with Categorize, Cloze, and Comprehension questions, add images, and save responses in MongoDB.",
        image: Project1,
        categories: ["MERN Stack"],
        link: "https://form-builder-mern.onrender.com/",
        githubLink: "https://github.com/YashLonkar55/Form-Builder-MERN",
    },
    {
        title: "Real-Time Device Tracking",
        description: "A real-time device tracking application built with Node.js, Express, and Socket.IO. This project allows tracking devices in real-time and visualizing their location updates on map.",
        image: Project2, 
        categories: ["NodeJS", "Socket.IO","ExpressJS"],
        link: "https://realtime-device-tracking-gi3u.onrender.com/",
        githubLink: "https://form-builder-mern.onrender.com/",
    },
    {
        title: "NPM Package",
        description: "Responsive Image Resizer is an npm package that quickly resizes and optimizes images for responsive web design. It generates multiple image versions for different breakpoints, improving web performance.",
        image: Project3,
        categories: ["JavaScript"],
        link: "https://www.npmjs.com/package/responsive-image-file-resizer",
        githubLink: "https://github.com/YashLonkar55/NPM-PCKG-responsive-image-resizer",
    },
    {
        title: "AI-Summarizer",
        description: "Responsive Image Resizer is an npm package that quickly resizes and optimizes images for responsive web design. It generates multiple image versions for different breakpoints, improving web performance.",
        image: Project4,
        categories: ["JavaScript"],
        link: "https://yashlonkar55.github.io/AI-Summarizer/",
        githubLink: "https://github.com/YashLonkar55/AI-Summarizer",
    }
];

const Projects = () => {
  return (
    <section className="py-16 px-6" id="featured-projects">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-clash-display text-3xl font-bold mb-12"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={`${project.title}-${index}`} 
              {...project} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

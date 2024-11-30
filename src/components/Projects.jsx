import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import Project1 from '../assets/P1.jpg';
    
const projects = [
  { 
    title: "Trust & Co.",
    description: "Fill out the form and the algorithm will offer the right team of experts",
    image: Project1,
    categories: ["BRANDING", "PACKAGING"]
  },
  {
    title: "Urban Outfiter",
    description: "Fill out the form and the algorithm will offer the right team of experts",
    image: Project1, // Using Project1 temporarily
    categories: ["BRANDING", "MARKETING"]
  },
  {
    title: "Tonic",
    description: "Fill out the form and the algorithm will offer the right team of experts",
    image: Project1, // Using Project1 temporarily
    categories: ["BRANDING", "PACKAGING", "MARKETING"]
  }
];

const Projects = () => {
  return (
    <section className="py-16 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-clash-display text-3xl font-bold mb-12"
        >
          Selected Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

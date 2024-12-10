import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, categories, link, githubLink }) => {
  const handlePreviewClick = (e) => {
    e.stopPropagation();
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = (e) => {
    e.stopPropagation();
    window.open(githubLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer bg-white rounded-xl overflow-hidden min-w-[300px] mx-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex flex-col"
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-clash-display text-lg font-semibold mb-1.5">{title}</h3>
        <p className="font-satoshi text-[#666666] text-sm mb-2">{description}</p>
        <div className="flex gap-1.5 flex-wrap mb-4">
          {categories.map((category) => (
            <span
              key={category}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium font-satoshi
                ${category === 'MERN Stack' ? 'bg-[#F0EBF9] text-[#7B61FF]' : ''}
                
                ${category === 'NodeJS' ? 'bg-[#F0EBF9] text-[#7B61FF]' : ''}
                ${category === 'Socket.IO' ? 'bg-[#F0EBF9] text-[#7B61FF]' : ''}
                ${category === 'ExpressJS' ? 'bg-[#F0EBF9] text-[#7B61FF]' : ''}
                ${category === 'JavaScript' ? 'bg-[#F0EBF9] text-[#7B61FF]' : ''}`}
            >
              {category}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-sm rounded-full bg-[#FFF0E6] text-[#FF8D3F] hover:bg-[#FFE4D1] transition-colors duration-300"
            onClick={handlePreviewClick}
          >
            <span>Live</span>
            <HiArrowUpRight className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300"
            onClick={handleGithubClick}
          >
            <FaGithub className="w-4 h-4" />
            <span>Code</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

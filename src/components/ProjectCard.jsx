import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';

const ProjectCard = ({ title, description, image, categories }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer bg-white rounded-xl overflow-hidden min-w-[300px] mx-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
    >
      <div className="relative overflow-hidden">

        <img 
          src={image} 
          alt={title} 
          className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-[#FBE8DC] rounded-full p-2 cursor-pointer"
          >
            <HiArrowUpRight className="w-3.5 h-3.5 text-[#FF8D3F]" />
          </motion.div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-clash-display text-lg font-semibold mb-1.5">{title}</h3>
        <p className="font-satoshi text-[#666666] text-sm mb-2">{description}</p>
        <div className="flex gap-1.5 flex-wrap">
          {categories.map((category) => (
            <span
              key={category}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium font-satoshi
                ${category === 'BRANDING' ? 'bg-[#FFF0E6] text-[#FF8D3F]' : ''}
                ${category === 'PACKAGING' ? 'bg-[#E8F2F1] text-[#3DA496]' : ''}
                ${category === 'MARKETING' ? 'bg-[#F0EBF9] text-[#7B61FF]' : ''}`}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
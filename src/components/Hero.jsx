import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ProfilePic from '../assets/profilepic.png';

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };


  const handleConnect = () => {
    window.open('https://www.linkedin.com/in/yashlonkar55/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 max-w-6xl mx-auto">
      <motion.div

        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10"
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-4 mb-8">
          {/* Profile Picture */}
            <div className="relative inline-block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
              src={ProfilePic}
              alt="Yash"
              className="w-24 h-24"
              />
            </motion.div>
            </div>

          {/* Name */}
          <h2 className="font-satoshi text-xl">
          Hi, I'm Yash <span className="text-yellow-400">✌️</span>
          </h2>

          {/* Social Media Icons */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center gap-4"
          >
          <a 
            href="https://github.com/YashLonkar55" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:transform hover:scale-110 transition-transform duration-200"
          >
            <FaGithub className="w-6 h-6 text-gray-700 hover:text-black transition-colors" />
          </a>
          <a 
            href="https://www.linkedin.com/in/yashlonkar55/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:transform hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin className="w-6 h-6 text-gray-700 hover:text-[#0077b5] transition-colors" />
          </a>
          </motion.div>
        </div>

        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="font-clash-display text-5xl md:text-7xl font-bold leading-tight mb-8 relative drop-shadow-lg"
        >
          <motion.div
          className="relative inline-block"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          >
          <span className="text-[#1a1a1a] bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 drop-shadow-sm">
            Full Stack Developer
          </span>
          </motion.div>
          <br />
          <motion.div
          className="relative inline-block"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8D3F] to-[#FF5F3F] drop-shadow-sm">
            Design. Code. Innovate.
          </span>
          </motion.div>
        </motion.h1>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-12 backdrop-blur-md bg-white/40 rounded-xl p-6 "
        >
          <p className="font-satoshi text-gray-700 drop-shadow-sm">
          An aspiring Salesforce Developer with a strong foundation in Full Stack Dev,
          <br />
          I specialize in React.js, Express, MongoDB, SQL, and Java,
          <br />
          having hands-on experience in building dynamic, scalable web applications.
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ 
            scale: 1.05,
            boxShadow: [
              "0 0 0 0 rgba(0, 119, 181, 0)",
              "0 0 0 3px rgba(0, 119, 181, 0.4)",
              "0 0 0 6px rgba(0, 119, 181, 0.1)"
            ],
            transition: {
              boxShadow: {
              duration: 0.2
              }
            }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleConnect}
            className="relative bg-off-black text-white px-8 py-3 rounded-full font-satoshi hover:bg-black transition-all duration-300 border-2 border-transparent hover:border-[#0077b5] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[#0077b5] before:to-[#F0EBF9] before:opacity-0 hover:before:opacity-10 before:transition-opacity"
        >
          CONNECT WITH ME
        </motion.button>
      </motion.div>
    </div>
    
  );
};

export default Hero;
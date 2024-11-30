import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ProfilePic from '../assets/profilepic.png';
const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="relative inline-block mb-0">
          <img
            src={ProfilePic}
            alt="Oguz"
            className="w-24 h-24  "
          />
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -right-6 top-0"
          >
            
          </motion.div>
        </div>

        <h2 className="font-satoshi text-xl mb-3">
          Hi, I'm Yash <span className="text-yellow-400">✌️</span>
        </h2>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center gap-4 mb-5"
        >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 text-gray-700 hover:text-black transition-colors" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 text-gray-700 hover:text-[#0077b5] transition-colors" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6 text-gray-700 hover:text-[#1DA1F2] transition-colors" />
            </a>

        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-clash-display text-6xl md:text-7xl font-bold leading-tight mb-8"
        >
          Building digital
          <br />
          products, brands, and
          <br />
          experience.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="font-satoshi text-gray-600">
            a Product Designer and Visual Developer in SF.
            <br />
            I specialize in UI/UX Design, Responsive Web Design,
            <br />
            and Visual Development.
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-off-black text-white px-8 py-3 rounded-full font-satoshi hover:bg-black transition-colors"
        >
          CONNECT WITH ME
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
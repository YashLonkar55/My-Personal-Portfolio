import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 fixed top-0 z-50 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2"
      >
        <HiOutlineMail className="w-4 sm:w-5 h-4 sm:h-5" />
        <span className="font-satoshi text-sm sm:text-base">yashlonkar99@gmail.com</span>
      </motion.div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2"
      >
        {isOpen ? (
          <HiX className="w-6 h-6" />
        ) : (
          <HiMenuAlt3 className="w-6 h-6" />
        )}
      </button>

      {/* Desktop Menu */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex gap-8 font-satoshi"
      >
        {['Works', 'Resume', 'Services', 'Contact'].map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-gray-600 transition-colors"
          >
            {item}
          </li>
        ))}
      </motion.ul>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden fixed top-[60px] left-0 w-full bg-white shadow-lg"
      >
        <ul className="flex flex-col font-satoshi py-4">
          {['Works', 'Resume', 'Services', 'Contact'].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-gray-600 transition-colors px-8 py-3"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
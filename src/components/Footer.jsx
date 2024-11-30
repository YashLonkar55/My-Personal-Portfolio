import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-off-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-clash-display text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2 font-satoshi">
              <div className="flex items-center gap-2">
                <HiOutlineMail className="w-5 h-5" />
                <span>hello@oguz.design</span>
              </div>
              <div className="flex items-center gap-2">
                <HiPhone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-clash-display text-xl font-bold mb-4">Social</h3>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-gray-300 transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center font-satoshi text-gray-400">
          <p>© 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
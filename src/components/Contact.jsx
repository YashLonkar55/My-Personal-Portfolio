import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="font-clash-display text-4xl md:text-5xl font-bold mb-6">
          Let's work together
        </h2>
        <p className="font-satoshi text-gray-600 mb-12 max-w-2xl mx-auto">
          Got a project in mind? Let's create something amazing together.
          I'm always open to discussing new projects and opportunities.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-off-black text-white px-8 py-3 rounded-full font-satoshi hover:bg-black transition-colors"
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Contact;
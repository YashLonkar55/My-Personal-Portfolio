import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Google",
    role: "Senior Product Designer",
    period: "2020 - Present",
    description: "Led the design system team for Google Cloud Platform"
  },
  {
    company: "Apple",
    role: "UI/UX Designer",
    period: "2018 - 2020",
    description: "Designed user interfaces for iOS applications"
  },
  {
    company: "Microsoft",
    role: "Visual Designer",
    period: "2016 - 2018",
    description: "Created visual assets for Microsoft Office suite"
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto bg-off-white" id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-clash-display text-4xl font-bold mb-12"
      >
        Experience
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-clash-display text-2xl font-bold">{exp.company}</h3>
                <p className="font-satoshi text-gray-600">{exp.role}</p>
              </div>
              <span className="font-satoshi text-gray-500">{exp.period}</span>
            </div>
            <p className="font-satoshi text-gray-600">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
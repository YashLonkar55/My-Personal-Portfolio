import { motion } from 'framer-motion';
import {
	SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3,
	SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
	SiGit, SiDocker, SiVisualstudiocode, SiTailwindcss,
	SiNextdotjs, SiFigma, SiSalesforce
} from 'react-icons/si';

// Flatten skills data into a single array for the carousel
const skillsData = [
	{ name: 'React', icon: SiReact, color: '#61DAFB' },
	{ name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
	{ name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
	{ name: 'CSS3', icon: SiCss3, color: '#1572B6' },
	{ name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
	{ name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
	{ name: 'Express', icon: SiExpress, color: '#000000' },
	{ name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
	{ name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
	{ name: 'Git', icon: SiGit, color: '#F05032' },
	{ name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
	{ name: 'Salesforce', icon: SiSalesforce, color: '#00A1E0' },
];

const SkillCard = ({ name, Icon, color }) => (
	<motion.div
		whileHover={{ y: -5, scale: 1.05 }}
		transition={{ duration: 0.2 }}
		className="flex items-center gap-3 px-4 py-2.5 bg-white rounded-lg mx-3 shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all"
	>
		<Icon className="w-5 h-5" style={{ color }} />
		<span className="font-satoshi text-sm font-medium text-gray-800 whitespace-nowrap">{name}</span>
	</motion.div>

);

const Skills = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="py-16 px-4 sm:px-8 overflow-hidden"
		>


			<div className="max-w-6xl mx-auto">
				<h2 className="font-clash-display text-3xl font-bold mb-12 text-center">
					Skills & Technologies
				</h2>

				<div className="relative">
					{/* First row moving left */}
					<motion.div
						className="flex mb-8"
						animate={{
							x: [0, -1920]
						}}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: "loop",
								duration: 25,
								ease: "linear"
							}
						}}
					>
						{[...skillsData, ...skillsData].map((skill, index) => (
							<SkillCard
								key={`${skill.name}-${index}`}
								name={skill.name}
								Icon={skill.icon}
								color={skill.color}
							/>
						))}
					</motion.div>

					{/* Second row moving right */}
					<motion.div
						className="flex"
						animate={{
							x: [-1920, 0]
						}}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: "loop",
								duration: 25,
								ease: "linear"
							}
						}}
					>
						{[...skillsData, ...skillsData].map((skill, index) => (
							<SkillCard
								key={`${skill.name}-reverse-${index}`}
								name={skill.name}
								Icon={skill.icon}
								color={skill.color}
							/>
						))}
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default Skills;
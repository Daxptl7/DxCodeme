import { motion } from 'framer-motion';
import {
    SiPython, SiCplusplus, SiJavascript, SiHtml5, SiCss3,
    SiTailwindcss, SiBootstrap, SiMysql, SiOpenai, SiDjango
} from 'react-icons/si';
import { FaCode, FaDraftingCompass, FaLaptopCode } from 'react-icons/fa';

const skillsData = [
    { name: 'Artificial Intelligence', icon: <SiOpenai className="text-emerald-500" />, level: 'Advanced' },
    { name: 'Python', icon: <SiPython className="text-yellow-500" />, level: 'Expert' },
    { name: 'Django', icon: <SiDjango className="text-green-700" />, level: 'Expert' },
    { name: 'C++', icon: <SiCplusplus className="text-blue-600" />, level: 'Advanced' },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, level: 'Advanced' },
    { name: 'Front-End Dev', icon: <FaLaptopCode className="text-indigo-500" />, level: 'Expert' },
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-600" />, level: 'Expert' },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-500" />, level: 'Expert' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, level: 'Expert' },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" />, level: 'Advanced' },
    { name: 'MySQL', icon: <SiMysql className="text-blue-400" />, level: 'Intermediate' },
    { name: 'OOP', icon: <FaCode className="text-pink-500" />, level: 'Concept' },
    { name: 'CAD', icon: <FaDraftingCompass className="text-slate-500" />, level: 'Intermediate' },
];

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="section-padding bg-white dark:bg-slate-950">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Technical <span className="text-indigo-600 dark:text-indigo-400">Skills</span></h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    A collection of technologies and tools I've mastered to build high-performance applications.
                </p>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="glass-card p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform duration-300 group hover:border-indigo-500/50"
                    >
                        <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                        </div>
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                        {/* <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest">{skill.level}</span> */}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;

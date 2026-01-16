import { motion } from 'framer-motion';
import {
    SiPython, SiCplusplus, SiJavascript, SiHtml5, SiCss3,
    SiTailwindcss, SiBootstrap, SiMysql, SiOpenai, SiDjango,
    SiReact, SiNumpy, SiPandas, SiTensorflow, SiPytorch, SiScikitlearn, SiMongodb, SiNodedotjs, SiExpress, SiNextdotjs
} from 'react-icons/si';
import { FaCode, FaDraftingCompass, FaLaptopCode, FaDatabase, FaBrain, FaChartBar, FaChartLine, FaLanguage, FaFlask } from 'react-icons/fa';

const skillsData = [
    {
        category: "Web Development",
        icon: <FaLaptopCode className="text-indigo-600 dark:text-indigo-400" />,
        skills: [
            { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
            { name: 'React', icon: <SiReact className="text-cyan-400" /> },
            { name: 'Django', icon: <SiDjango className="text-green-700" /> },
            { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
            { name: 'HTML5', icon: <SiHtml5 className="text-orange-600" /> },
            { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
            { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
            { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
            { name: 'Express', icon: <SiExpress className="text-gray-500 dark:text-gray-300" /> },
            { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        ]
    },
    {
        category: "Data Science",
        icon: <FaDatabase className="text-emerald-600 dark:text-emerald-400" />,
        skills: [
            { name: 'Python', icon: <SiPython className="text-yellow-500" /> },
            { name: 'Pandas', icon: <SiPandas className="text-purple-900 dark:text-purple-400" /> },
            { name: 'NumPy', icon: <SiNumpy className="text-blue-400" /> },
            { name: 'Matplotlib', icon: <FaChartBar className="text-orange-400" /> },
            { name: 'Seaborn', icon: <FaChartLine className="text-indigo-400" /> },
            { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
            { name: 'Scikit-learn', icon: <SiScikitlearn className="text-orange-500" /> },
        ]
    },
    {
        category: "AI / ML",
        icon: <FaBrain className="text-rose-600 dark:text-rose-400" />,
        skills: [
            { name: 'OpenAI', icon: <SiOpenai className="text-emerald-500" /> },
            { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500" /> },
            { name: 'PyTorch', icon: <SiPytorch className="text-red-500" /> },
            { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
            { name: 'NLTK', icon: <FaLanguage className="text-blue-500" /> },
            { name: 'SciPy', icon: <FaFlask className="text-blue-700" /> },
        ]
    },
    {
        category: "General",
        icon: <FaCode className="text-pink-500" />,
        skills: [
            { name: 'OOP', icon: <FaCode className="text-pink-500" /> },
            { name: 'CAD', icon: <FaDraftingCompass className="text-slate-500" /> },
        ]
    }
];

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Technical <span className="text-indigo-600 dark:text-indigo-400">Skills</span></h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Specialized expertise across modern web technologies, data science, and artificial intelligence.
                    </p>
                </div>

                <div className="space-y-16">
                    {skillsData.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                        >
                            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start border-b border-indigo-200 dark:border-indigo-900/30 pb-4">
                                <span className="text-2xl">{category.icon}</span>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{category.category}</h3>
                            </div>

                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
                            >
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        variants={item}
                                        className="glass-card bg-white dark:bg-slate-900 p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform duration-300 group hover:border-indigo-500/50 border border-slate-200 dark:border-slate-800 shadow-sm"
                                    >
                                        <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                                            {skill.icon}
                                        </div>
                                        <h3 className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</h3>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

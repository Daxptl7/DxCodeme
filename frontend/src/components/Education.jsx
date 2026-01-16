import { motion } from 'framer-motion';
import { FiBookOpen, FiAward } from 'react-icons/fi';
import pdeuLogo from '../assets/pdeu.png';
import abschoolLogo from '../assets/abschool.png';

const educationData = [
    {
        school: 'Pandit Deendayal Energy University (PDEU)',
        degree: 'B.Tech in Computer Engineering',
        period: '2024 - 2028',
        description: 'Focusing on core computer science subjects including Data Structures, Algorithms, Database Management, and Artificial Intelligence.',
        logo: pdeuLogo,
        logoAlt: 'PDEU Logo'
    },
    {
        school: 'AB School, Navsari',
        degree: 'Higher Secondary Education',
        period: '2023 - 2024',
        description: 'Specialized in Science stream (Physics, Chemistry, Mathematics) with a strong academic record.',
        logo: abschoolLogo,
        logoAlt: 'AB School Logo'
    },
];

const Education = () => {
    return (
        <section id="education" className="section-padding relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Educational <span className="text-indigo-600 dark:text-indigo-400">Background</span></h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    My academic foundation and qualifications.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start transition-colors hover:border-indigo-500/30"
                    >
                        {/* Logo Container */}
                        <div className="w-24 h-24 flex-shrink-0 bg-white dark:bg-slate-200 rounded-xl p-2 flex items-center justify-center shadow-md">
                            {edu.logo ? (
                                <img
                                    src={edu.logo}
                                    alt={edu.logoAlt}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none'; // Hide broken image
                                        e.target.nextSibling.style.display = 'block'; // Show fallback
                                    }}
                                />
                            ) : (
                                <div className="text-4xl text-indigo-600">
                                    <FiAward />
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.school}</h3>
                                <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs font-semibold rounded-full mt-2 md:mt-0 w-fit mx-auto md:mx-0">
                                    {edu.period}
                                </span>
                            </div>
                            <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-3 flex items-center justify-center md:justify-start gap-2">
                                <FiBookOpen className="text-pink-500" />
                                {edu.degree}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                                {edu.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;

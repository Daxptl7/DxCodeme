import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const experiences = [
    {
        title: 'AI Intern',
        company: 'LaunchED Global',
        period: 'Internship',
        description: 'Worked on Artificial Intelligence projects, gaining hands-on experience in machine learning and AI model development.',
    },
    {
        title: 'CSSI Intern',
        company: 'Gram Seva Trust',
        period: 'Internship',
        description: 'Participated in the Computer Science Summer Institute, learning web development fundamentals and contributing to community-focused technical solutions.',
    },
];

const Experience = () => {
    return (
        <section id="experience" className="section-padding relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">My <span className="text-indigo-600 dark:text-indigo-400">Experience</span></h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    A timeline of my professional journey and internships.
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Dot */}
                            <span className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-400 ring-4 ring-slate-50 dark:ring-slate-950" />

                            <div className="glass-card p-6 md:p-8 hover:border-indigo-500/30 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                        <FiBriefcase className="text-indigo-500" />
                                        {exp.title}
                                    </h3>
                                    <span className="flex items-center text-sm text-slate-500 dark:text-slate-400 mt-1 md:mt-0">
                                        <FiCalendar className="mr-1" />
                                        {exp.period}
                                    </span>
                                </div>

                                <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                                    {exp.company}
                                </h4>

                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

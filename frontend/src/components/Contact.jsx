import { motion } from 'framer-motion';
import { FiLinkedin, FiMail } from 'react-icons/fi';

const Contact = () => {
    return (
        <section id="contact" className="section-padding relative">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px] -z-10" />

            <div className="max-w-4xl mx-auto glass-card p-10 md:p-16 text-center border-slate-200 dark:border-slate-800">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-6"
                >
                    Let's <span className="text-indigo-600 dark:text-indigo-400">Connect</span>
                </motion.h2>

                <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="https://www.linkedin.com/in/dax-patel-835456348/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full sm:w-auto"
                    >
                        <FiLinkedin size={20} />
                        Connect on LinkedIn
                    </a>

                    <a
                        href="mailto:daxbharatbhai30@gmail.com"
                        className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 w-full sm:w-auto"
                    >
                        <FiMail size={20} />
                        Send an Email
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
